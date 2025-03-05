import type {
  Blueprint,
  DiscriminatedListProperty,
  Endpoint,
  EnumProperty,
  Property,
  Route,
} from '@seamapi/blueprint'
import { pascalCase } from 'change-case'

import type { PathMetadata } from 'lib/path-metadata.js'

export interface ApiRouteLayoutContext {
  title: string
  description: string
  path: string
  resources: Array<
    ApiRouteResource & {
      warnings: ApiWarning[]
      errors: ApiError[]
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

type ApiRouteProperty = Pick<
  Property,
  'name' | 'description' | 'isDeprecated' | 'deprecationMessage'
> & {
  format: string
  enumValues?: string[]
  objectProperties?: ApiRouteProperty[]
}

export interface ApiRouteResource {
  name: string
  description: string
  properties: ApiRouteProperty[]
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
  file.events = []
  const metadata = pathMetadata[route.path]
  if (metadata == null) {
    throw new Error(`Missing path metadata for ${route.path}`)
  }
  file.title = metadata.title
  file.path = route.path
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
  const resourceTypes = new Set<string>()
  for (const resourceType of metadata.resources) {
    const resource = blueprint.resources[resourceType]

    if (resource == null) {
      throw new Error(
        `Path metadata for ${route.path} has invalid resource type ${resourceType}`,
      )
    }

    resourceTypes.add(resourceType)

    const warningsProp = resource.properties.find((p) => p.name === 'warnings')
    const errorsProp = resource.properties.find((p) => p.name === 'errors')
    const resourceWarnings =
      warningsProp != null ? collectResourceWarnings(warningsProp) : []
    const resourceErrors = errorsProp != null ? collectResourceErrors(errorsProp) : []

    file.resources.push({
      name: resource.resourceType,
      description: resource.description,
      properties: resource.properties
        .filter(({ isUndocumented }) => !isUndocumented)
        .map(mapBlueprintPropertyToRouteProperty),
      errors: resourceErrors,
      warnings: resourceWarnings,
    })
  }

  for (const event of blueprint.events) {
    if (
      event.targetResourceType == null ||
      !resourceTypes.has(event.targetResourceType)
    ) {
      continue
    }

    file.events.push({
      name: event.eventType,
      description: event.description,
      properties: event.properties
        .filter(({ isUndocumented }) => !isUndocumented)
        .map(mapBlueprintPropertyToRouteProperty),
    })
  }
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

export const mapBlueprintPropertyToRouteProperty = (
  prop: Property,
): ApiRouteProperty => {
  const { name, description, format, isDeprecated, deprecationMessage } = prop
  const contextRouteProp: ApiRouteProperty = {
    name,
    description,
    isDeprecated,
    deprecationMessage,
    format: '',
  }

  if ('values' in prop && prop.values.length > 1) {
    contextRouteProp.format = normalizePropertyFormatForDocs(format)
    contextRouteProp.enumValues = prop.values.map(({ name }) => name)
  } else if ('values' in prop && prop.values.length === 1) {
    contextRouteProp.format = normalizePropertyFormatForDocs('string')
  } else {
    contextRouteProp.format = normalizePropertyFormatForDocs(format)
  }

  if ('properties' in prop) {
    contextRouteProp.objectProperties = flattenObjectProperties(prop.properties)
  }

  return contextRouteProp
}

type PropertyFormat = Property['format']

const normalizePropertyFormatForDocs = (format: PropertyFormat): string => {
  const formatMap: Partial<Record<PropertyFormat, string>> = { id: 'ID' }

  return formatMap[format] ?? pascalCase(format)
}

type PropertyWithNormalizedFormat = Omit<Property, 'format'> & {
  format: string
}

const flattenObjectProperties = (
  properties: Property[],
  paths: string[] = [],
): PropertyWithNormalizedFormat[] => {
  const results: PropertyWithNormalizedFormat[] = []

  for (const property of properties.filter(
    ({ isUndocumented }) => !isUndocumented,
  )) {
    const name = [...paths, property.name].join('.')

    const { format, ...rest } = property
    results.push({
      ...rest,
      format: normalizePropertyFormatForDocs(format),
      name,
    })

    if (property.format === 'object') {
      results.push(...flattenObjectProperties(property.properties, [name]))
      continue
    }
  }

  return results
}
