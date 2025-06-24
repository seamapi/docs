import type {
  Blueprint,
  DiscriminatedListProperty,
  Endpoint,
  EnumProperty,
  Property,
  PropertyGroup,
  ResourceSample,
  Route,
  SdkName,
  SyntaxName,
} from '@seamapi/blueprint'
import { pascalCase } from 'change-case'

import type { PathMetadata } from '../path-metadata.js'

export interface ApiRouteLayoutContext {
  title: string
  overview: string | undefined
  path: string
  isAlpha: boolean
  alphaMessage: string | undefined
  resources: Array<
    ApiRouteResource & {
      warningGroups: ApiRouteVariantGroup[]
      errorGroups: ApiRouteVariantGroup[]
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
  description: string
  resourceData: string
  resourceDataSyntax: SyntaxName
}

interface ApiRoutePropertyGroup {
  name?: string
  propertyGroupKey: string | null
  properties: ApiRouteProperty[]
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
  propertyGroups: ApiRoutePropertyGroup[]
  legacyPropertyGroups?: ApiRoutePropertyGroup[]
  events: ApiRouteEvent[]
}

interface ApiRouteVariantGroup {
  name?: string
  variantGroupKey: string | null
  variants: ApiRouteVariant[]
}

interface ApiRouteVariant {
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
  file.overview = metadata.overview
  file.path = route.path
  file.isAlpha = (metadata.alpha ?? '').length > 0
  file.alphaMessage = metadata.alpha

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

  const resourceTypes = [
    ...blueprint.resources
      .filter((r) => r.routePath === route.path && !r.isUndocumented)
      .map(({ resourceType }) => resourceType),
    ...metadata.resources,
  ]
  file.resources = []
  for (const resourceType of resourceTypes) {
    const resource = blueprint.resources.find(
      (r) => r.resourceType === resourceType,
    )

    if (resource == null) {
      throw new Error(
        `Path metadata for ${route.path} has invalid resource type ${resourceType}`,
      )
    }

    const groupOptions = {
      include: metadata.include_groups,
      exclude: metadata.exclude_groups,
    }

    const warningsProp = resource.properties.find((p) => p.name === 'warnings')
    const errorsProp = resource.properties.find((p) => p.name === 'errors')
    const warningGroups =
      warningsProp != null ? groupVariants(warningsProp, groupOptions) : []
    const errorGroups =
      errorsProp != null ? groupVariants(errorsProp, groupOptions) : []

    const allProperties = resource.properties.filter(
      ({ isUndocumented }) => !isUndocumented,
    )

    const properties = allProperties.filter(({ name }) => name !== 'properties')

    const legacyProperty = allProperties.find(
      ({ name }) => name === 'properties',
    )

    const propertyGroups = groupProperties(
      properties,
      resource.propertyGroups,
      groupOptions,
    )

    addLinkTargetsToProperties(propertyGroups?.[0]?.properties, {
      hasErrors: errorGroups.length > 0,
      hasWarnings: warningGroups.length > 0,
    })

    const legacyPropertyGroups =
      legacyProperty != null && legacyProperty.format === 'object'
        ? groupProperties(
            legacyProperty.properties,
            legacyProperty.propertyGroups,
            {
              include: metadata.include_groups,
              exclude: metadata.exclude_groups,
            },
          )
        : null

    file.resources.push({
      name: resource.resourceType,
      description: resource.description,
      propertyGroups,
      ...(legacyPropertyGroups == null ? {} : { legacyPropertyGroups }),
      errorGroups,
      warningGroups,
      events: eventsByRoutePath.get(resource.routePath) ?? [],
      resourceSamples: resource.resourceSamples.map(mapResourceSample),
    })
  }
}

const groupVariants = (
  property: Property | null,
  {
    include,
    exclude,
  }: {
    include?: string[] | undefined
    exclude?: string[] | undefined
  },
): ApiRouteVariantGroup[] => {
  if (!isDiscriminatedListProperty(property)) {
    return []
  }

  const getApiRouteVariants = (
    variantGroupKey: string | null,
  ): ApiRouteVariant[] => {
    return collectResourceVariants({
      ...property,
      variants: property.variants.filter(
        (v) => v.variantGroupKey === variantGroupKey,
      ),
    }).sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
  }

  return property.variantGroups
    .reduce<ApiRouteVariantGroup[]>(
      (groups, variantGroup) => [
        ...groups,
        {
          name: variantGroup.name,
          variantGroupKey: variantGroup.variantGroupKey,
          variants: getApiRouteVariants(variantGroup.variantGroupKey),
        },
      ],
      [
        {
          variants: getApiRouteVariants(null),
          variantGroupKey: null,
        },
      ],
    )
    .filter(({ variants }) => variants.length > 0)
    .filter(({ variantGroupKey }) => {
      if (include == null) return true
      if (variantGroupKey == null) return true
      return include.includes(variantGroupKey)
    })
    .filter(({ variantGroupKey }) => {
      if (exclude == null) return true
      if (variantGroupKey == null) return true
      return !exclude.includes(variantGroupKey)
    })
    .sort((a, b) => {
      if (a.variantGroupKey === null || a.name == null) return -1
      if (a.variantGroupKey === null || b.name == null) return 1
      return a.name.localeCompare(b.name)
    })
}

const isDiscriminatedListProperty = (
  prop: Property | undefined | null,
): prop is DiscriminatedListProperty => {
  return (
    prop != null &&
    'itemFormat' in prop &&
    prop.itemFormat === 'discriminated_object'
  )
}

const collectResourceVariants = (
  property: DiscriminatedListProperty,
): ApiRouteVariant[] => {
  return property.variants
    .map((variant) => {
      const discriminator = findEnumProperty(
        variant.properties,
        property.discriminator,
      )
      if (discriminator?.values?.[0]?.name == null) {
        return null
      }

      return {
        name: discriminator.values[0].name,
        description: variant.description,
      }
    })
    .filter((variant): variant is ApiRouteVariant => variant !== null)
}

export const groupProperties = (
  properties: Property[],
  propertyGroups: PropertyGroup[],
  {
    include,
    exclude,
  }: {
    include?: string[] | undefined
    exclude?: string[] | undefined
  },
): ApiRoutePropertyGroup[] => {
  const getApiRouteProperties = (
    propertyGroupKey: string | null,
  ): ApiRouteProperty[] =>
    properties
      .filter((p) => p.propertyGroupKey === propertyGroupKey)
      .map(mapBlueprintPropertyToRouteProperty)
      .sort((a, b) => {
        return a.name.localeCompare(b.name)
      })

  return propertyGroups
    .reduce<ApiRoutePropertyGroup[]>(
      (groups, propertyGroup) => [
        ...groups,
        {
          name: propertyGroup.name,
          propertyGroupKey: propertyGroup.propertyGroupKey,
          properties: getApiRouteProperties(propertyGroup.propertyGroupKey),
        },
      ],
      [
        {
          properties: getApiRouteProperties(null),
          propertyGroupKey: null,
        },
      ],
    )
    .filter(({ properties }) => properties.length > 0)
    .filter(({ propertyGroupKey }) => {
      if (include == null) return true
      if (propertyGroupKey == null) return true
      return include.includes(propertyGroupKey)
    })
    .filter(({ propertyGroupKey }) => {
      if (exclude == null) return true
      if (propertyGroupKey == null) return true
      return !exclude.includes(propertyGroupKey)
    })
    .sort((a, b) => {
      if (a.name == null) return -1
      if (b.name == null) return 1
      return a.name.localeCompare(b.name)
    })
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

function findEnumProperty(
  properties: Property[],
  name: string,
): EnumProperty | null {
  const prop = properties.find(
    (p) => p.name === name && p.format === 'enum',
  ) as EnumProperty | undefined

  return prop ?? null
}

const mapBlueprintPropertyToRouteProperty = (
  prop: Property,
): ApiRouteProperty => {
  const { name, description, format, isDeprecated, deprecationMessage } = prop
  const contextRouteProp: ApiRouteProperty = {
    name,
    description: description.trim(),
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
  properties: ApiRouteProperty[] | undefined,
  sections: { hasErrors: boolean; hasWarnings: boolean },
): void {
  if (properties == null) return
  const linkableProperties: Record<string, string | undefined> = {
    errors: sections.hasErrors ? './#errors' : undefined,
    warnings: sections.hasWarnings ? './#warnings' : undefined,
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
    description: sample.description,
    resourceData: jsonSample.resource_data,
    resourceDataSyntax: jsonSample.resource_data_syntax,
  }
}
