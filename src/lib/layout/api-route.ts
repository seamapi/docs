import type {
  Blueprint,
  DiscriminatedListProperty,
  Endpoint,
  EnumProperty,
  Property,
  Route,
} from '@seamapi/blueprint'
import { pascalCase } from 'change-case'
import type {
  SdkName,
  SyntaxName,
} from 'node_modules/@seamapi/blueprint/dist/index.cjs'
import type { ResourceSample } from 'node_modules/@seamapi/blueprint/lib/samples/resource-sample.js'

import type { PathMetadata } from 'lib/path-metadata.js'

export interface ApiRouteLayoutContext {
  title: string
  description: string
  path: string
  resources: Array<
    ApiRouteResource & {
      warnings: ApiWarning[]
      errors: ApiError[]
      resourceSamples: ResourceSampleContext[]
    }
  >
  endpoints: ApiRouteEndpoint[]
  events: ApiRouteEvent[]
}

interface ApiRouteEvent {
  name: string
  description: string
  properties: ApiRouteProperty[]
}

interface ResourceSampleContext {
  title: string
  resourceData: string
  resourceDataSyntax: SyntaxName
}

type ApiRouteProperty = Pick<
  Property,
  'name' | 'description' | 'isDeprecated' | 'deprecationMessage'
> & {
  format: string
  enumValues?: string[]
  objectProperties?: ApiRouteProperty[]
  listProperties?: ApiRouteProperty[]
  listItemFormat?: string
  linkTarget?: string
  value?: string
  discriminator?: string
  discriminatorVariants?: Array<{
    name: string
    description: string
    properties: ApiRouteProperty[]
  }>
}

export interface ApiRouteResource {
  name: string
  description: string
  properties: ApiRouteProperty[]
  events: ApiRouteEvent[]
}

interface ApiWarning {
  name: string
  description: string
}
interface ApiError {
  name: string
  description: string
}

type ApiRouteEndpoint = Pick<Endpoint, 'path' | 'description'>

export function setApiRouteLayoutContext(
  file: Partial<ApiRouteLayoutContext>,
  route: Route,
  blueprint: Blueprint,
  pathMetadata: PathMetadata,
): void {
  const metadata = pathMetadata[route.path]
  if (metadata == null) {
    throw new Error(`Missing path metadata for ${route.path}`)
  }

  file.title = metadata.title
  file.path = route.path

  const eventsByRoutePath = groupEventsByRoutePath(blueprint.events)
  file.events = eventsByRoutePath.get(route.path) ?? []

  file.endpoints = route.endpoints
    .filter(
      ({ isUndocumented, title }) => !isUndocumented && title.length !== 0,
    )
    .map(({ path, name, description }) => ({
      path,
      name,
      description: getFirstParagraph(description),
    }))

  file.resources = []
  for (const resourceType of metadata.resources) {
    const resource = blueprint.resources[resourceType]

    if (resource == null) {
      throw new Error(
        `Path metadata for ${route.path} has invalid resource type ${resourceType}`,
      )
    }

    const warningsProp = resource.properties.find((p) => p.name === 'warnings')
    const errorsProp = resource.properties.find((p) => p.name === 'errors')
    const resourceWarnings =
      warningsProp != null ? collectResourceWarnings(warningsProp) : []
    const resourceErrors =
      errorsProp != null ? collectResourceErrors(errorsProp) : []

    const properties = resource.properties
      .filter(({ isUndocumented }) => !isUndocumented)
      .map(mapBlueprintPropertyToRouteProperty)

    addLinkTargetsToProperties(properties, {
      errors: resourceErrors.length > 0,
      warnings: resourceWarnings.length > 0,
    })

    file.resources.push({
      name: resource.resourceType,
      description: resource.description,
      properties,
      errors: resourceErrors,
      warnings: resourceWarnings,
      events: eventsByRoutePath.get(resource.routePath) ?? [],
      resourceSamples: resource.resourceSamples.map(mapResourceSample),
    })
  }
}

const groupEventsByRoutePath = (
  events: Blueprint['events'],
): Map<string, ApiRouteEvent[]> => {
  const eventsByRoutePath = new Map<string, ApiRouteEvent[]>()

  for (const event of events) {
    if (event.routePath == null) continue

    const routeEvents = eventsByRoutePath.get(event.routePath) ?? []
    routeEvents.push({
      name: event.eventType,
      description: event.description,
      properties: event.properties
        .filter(({ isUndocumented }) => !isUndocumented)
        .map(mapBlueprintPropertyToRouteProperty),
    })

    eventsByRoutePath.set(event.routePath, routeEvents)
  }

  return eventsByRoutePath
}

const getFirstParagraph = (text: string): string =>
  text.split('\n\n').at(0) ?? text

function collectResourceWarnings(warnings: Property | undefined): ApiWarning[] {
  if (!isDiscriminatedObjectProperty(warnings)) {
    return []
  }

  return warnings.variants
    .map((variant) => {
      const warningCode = findEnumProperty(variant.properties, 'warning_code')
      if (warningCode?.values?.[0]?.name == null) {
        return null
      }

      return {
        name: warningCode.values[0].name,
        description: variant.description,
      }
    })
    .filter((warning): warning is ApiWarning => warning !== null)
}

function isDiscriminatedObjectProperty(
  prop: Property | undefined,
): prop is DiscriminatedListProperty {
  return (
    prop != null &&
    'itemFormat' in prop &&
    prop.itemFormat === 'discriminated_object'
  )
}

function findEnumProperty(
  properties: Property[],
  name: string,
): EnumProperty | null {
  const prop = properties.find(
    (p) => p.name === name && p.format === 'enum',
  ) as EnumProperty | undefined

  return prop ?? null
}

function collectResourceErrors(errors: Property | undefined): ApiError[] {
  if (!isDiscriminatedObjectProperty(errors)) {
    return []
  }

  return errors.variants
    .map((variant) => {
      const errorCode = findEnumProperty(variant.properties, 'error_code')
      if (errorCode?.values?.[0]?.name == null) {
        return null
      }

      return {
        name: errorCode.values[0].name,
        description: variant.description,
      }
    })
    .filter((error): error is ApiError => error !== null)
}

export const mapBlueprintPropertyToRouteProperty = (
  prop: Property,
): ApiRouteProperty => {
  const { name, description, format, isDeprecated, deprecationMessage } = prop
  const contextRouteProp: ApiRouteProperty = {
    name,
    description,
    isDeprecated,
    deprecationMessage,
    format: normalizePropertyFormatForDocs(format),
    listItemFormat: '',
  }

  if ('values' in prop) {
    const singleValueEnumProps = ['event_type', 'action_type']
    if (
      singleValueEnumProps.includes(name) &&
      prop.values.length === 1 &&
      prop.values[0] != null
    ) {
      contextRouteProp.value = prop.values[0].name
    } else {
      contextRouteProp.enumValues = prop.values.map(({ name }) => name)
    }
  }

  if ('properties' in prop) {
    const flattenedProperties = flattenObjectProperties(prop.properties)
    contextRouteProp.objectProperties = flattenedProperties.map(
      mapBlueprintPropertyToRouteProperty,
    )
  }

  if ('itemProperties' in prop) {
    const flattenedProperties = flattenObjectProperties(prop.itemProperties)
    contextRouteProp.listProperties = flattenedProperties.map(
      mapBlueprintPropertyToRouteProperty,
    )
  }

  if (format === 'list') {
    contextRouteProp.listItemFormat = normalizePropertyFormatForDocs(
      prop.itemFormat,
    )

    if (prop.itemFormat === 'discriminated_object') {
      const discriminatedListProp = prop
      contextRouteProp.discriminator = discriminatedListProp.discriminator
      contextRouteProp.discriminatorVariants =
        discriminatedListProp.variants.map((variant) => {
          const discriminatorProperty = variant.properties.find(
            (p) => p.name === discriminatedListProp.discriminator,
          )
          const variantName =
            (discriminatorProperty as EnumProperty)?.values?.[0]?.name ??
            'unknown_variant'
          return {
            name: variantName,
            description: variant.description,
            properties: variant.properties
              .filter((p) => !p.isUndocumented)
              .map(mapBlueprintPropertyToRouteProperty),
          }
        })
    }
  }

  return contextRouteProp
}

type PropertyFormat = Property['format'] | ListProperty['itemFormat']
type ListProperty = Extract<Property, { format: 'list' }>

export const normalizePropertyFormatForDocs = (
  format: PropertyFormat,
): string => {
  const formatMap: Partial<Record<PropertyFormat, string>> = {
    id: 'UUID',
    discriminated_object: 'Object',
  }

  return formatMap[format] ?? pascalCase(format)
}

const flattenObjectProperties = (
  properties: Property[],
  paths: string[] = [],
): Property[] => {
  const results: Property[] = []

  for (const property of properties.filter(
    ({ isUndocumented }) => !isUndocumented,
  )) {
    const name = [...paths, property.name].join('.')

    results.push({
      ...property,
      name,
    })

    if (property.format === 'object') {
      results.push(...flattenObjectProperties(property.properties, [name]))
      continue
    }
  }

  return results
}

function addLinkTargetsToProperties(
  properties: ApiRouteProperty[],
  sections: { errors: boolean; warnings: boolean },
): void {
  const linkableProperties: Record<string, string | undefined> = {
    errors: sections.errors ? './#errors-1' : undefined,
    warnings: sections.warnings ? './#warnings-1' : undefined,
  }

  for (const prop of properties) {
    const linkTarget = linkableProperties[prop.name]
    if (linkTarget != null) {
      prop.linkTarget = linkTarget
    }
  }
}

const mapResourceSample = (sample: ResourceSample): ResourceSampleContext => {
  const jsonSample = Object.entries(sample.resource).find(
    ([k]) => (k as SdkName) === 'seam_cli',
  )?.[1]

  if (jsonSample == null) {
    throw new Error(
      `Missing seam_cli for ${sample.resource_type} resource sample: ${sample.title}`,
    )
  }

  return {
    title: sample.title,
    resourceData: jsonSample.resource_data,
    resourceDataSyntax: jsonSample.resource_data_syntax,
  }
}
