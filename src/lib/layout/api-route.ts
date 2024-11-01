import type { Blueprint, Endpoint, Property, Route } from '@seamapi/blueprint'
import { pascalCase } from 'change-case'

import type { PathMetadata } from 'lib/path-metadata.js'

export interface ApiRouteLayoutContext {
  title: string
  description: string
  path: string
  resources: ApiRouteResouce[]
  endpoints: ApiRouteEndpoint[]
}

type ApiRouteResourceProperty = Pick<
  Property,
  'name' | 'description' | 'isDeprecated' | 'deprecationMessage'
> & {
  format: string
  enumValues?: string[]
  objectProperties?: ApiRouteResourceProperty[]
}

interface ApiRouteResouce {
  name: string
  description: string
  properties: ApiRouteResourceProperty[]
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
  file.endpoints = route.endpoints.map(({ path, name, description }) => ({
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

    file.resources.push({
      name: resource.resourceType,
      description: resource.description,
      properties: resource.properties
        .filter(({ isUndocumented }) => !isUndocumented)
        .map((prop) => {
          const {
            name,
            description,
            format,
            isDeprecated,
            deprecationMessage,
          } = prop
          const contextResourceProp: ApiRouteResourceProperty = {
            name,
            description,
            format: normalizePropertyFormatForDocs(format),
            isDeprecated,
            deprecationMessage,
          }

          if ('values' in prop) {
            contextResourceProp.enumValues = prop.values.map(({ name }) => name)
          }

          if ('properties' in prop) {
            contextResourceProp.objectProperties = flattenObjectProperties(
              prop.properties,
            )
          }

          return contextResourceProp
        }),
    })
  }
}

const getFirstParagraph = (text: string): string =>
  text.split('\n\n').at(0) ?? text

type PropertyFormat = Property['format']

const normalizePropertyFormatForDocs = (format: PropertyFormat): string => {
  const formatMap: Partial<Record<PropertyFormat, string>> = {
    id: 'ID',
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

    results.push({ ...property, name })

    if (property.format === 'object') {
      results.push(...flattenObjectProperties(property.properties, [name]))
      continue
    }
  }

  return results
}
