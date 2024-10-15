import type {
  Blueprint,
  CodeSampleSdk,
  Endpoint,
  Property,
  Route,
} from '@seamapi/blueprint'
import { pascalCase } from 'change-case'

import type { PathMetadata } from './path-metadata.js'

const supportedSdks: CodeSampleSdk[] = [
  'javascript',
  'python',
  'php',
  'ruby',
  'seam_cli',
]

export interface EndpointLayoutContext {
  description: string
  title: string
  path: string
  page: {
    title: string
    description: string
  }
  request: {
    preferredMethod: string
    parameters: Array<{
      name: string
      required: boolean
      description: string
      jsonType: string
    }>
  }
  response: {
    description: string
    resourceType: string | null
    escapedResourceType: string | null
    responseKey: string | null
    responseType: string | null
  }
  codeSamples: Array<{
    title: string
    description: string
    code: Record<
      string,
      {
        title: string
        request: string
        response: string
      }
    >
  }>
}

export function setEndpointLayoutContext(
  file: Partial<EndpointLayoutContext>,
  endpoint: Endpoint,
  pathMetadata: PathMetadata,
): void {
  file.description = endpoint.description
  file.title = endpoint.title
  file.path = endpoint.path
  const page = pathMetadata[endpoint.path]?.page
  if (page == null) {
    throw new Error(`Missing page metadata for ${endpoint.path}`)
  }
  file.page = page

  file.request = {
    preferredMethod: endpoint.request?.preferredMethod ?? '',
    parameters: endpoint.request.parameters
      .filter(({ isUndocumented }) => !isUndocumented)
      .map((param) => ({
        name: param.name,
        required: param.isRequired,
        description: param.description,
        jsonType: param.jsonType,
      })),
  }

  file.response = {
    description: endpoint.response.description,
    resourceType: null,
    escapedResourceType: null,
    responseKey: null,
    responseType: null,
  }

  if (endpoint.response.responseType !== 'void') {
    const { resourceType, responseKey, responseType } = endpoint.response
    file.response.resourceType = resourceType
    file.response.escapedResourceType = resourceType.replaceAll('_', '\\_')
    file.response.responseKey = responseKey
    file.response.responseType = responseType
  }

  file.codeSamples = endpoint.codeSamples.map((sample) => {
    const codeEntries = Object.entries(sample.code).filter(([k]) =>
      supportedSdks.includes(k as CodeSampleSdk),
    )
    return {
      title: sample.title,
      description: sample.description,
      code: Object.fromEntries(codeEntries),
    }
  })
}

type ContextResourceProperty = Pick<
  Property,
  'name' | 'description' | 'isDeprecated' | 'deprecationMessage'
> & {
  format: string
  enumValues?: string[]
  objectProperties?: ContextResourceProperty[]
}
interface ContextResource {
  name: string
  description: string
  properties: ContextResourceProperty[]
}
type ContextEndpoint = Pick<Endpoint, 'path' | 'description'>

export interface RouteLayoutContext {
  page: {
    title: string
    description: string
  }
  description: string
  path: string
  resources: ContextResource[]
  endpoints: ContextEndpoint[]
}

export function setApiRouteLayoutContext(
  file: Partial<RouteLayoutContext>,
  route: Route,
  blueprint: Blueprint,
  pathMetadata: PathMetadata,
): void {
  const page = pathMetadata[route.path]?.page
  if (page == null) {
    throw new Error(`Missing page metadata for ${route.path}`)
  }
  file.page = page
  file.path = route.path
  file.endpoints = route.endpoints.map(({ path, name, description }) => ({
    path,
    name,
    description: getFirstParagraph(description),
  }))
  file.resources = []

  const endpointsWithResourceType = route.endpoints.filter(
    (e) =>
      e.response.responseType === 'resource' ||
      e.response.responseType === 'resource_list',
  )

  const uniqueResources = new Set<string>()

  for (const endpoint of endpointsWithResourceType) {
    if (!('resourceType' in endpoint.response)) {
      // eslint-disable-next-line no-console
      console.warn(`No resourceType in ${endpoint.path} endpoint response`)
      continue
    }

    const resourceName = endpoint.response.resourceType
    const resource = blueprint.resources[resourceName]

    if (resource == null) {
      // eslint-disable-next-line no-console
      console.warn(`No resource ${resourceName} in blueprint`)
      continue
    }

    if (!uniqueResources.has(resourceName)) {
      uniqueResources.add(resourceName)

      file.resources.push({
        name: resourceName,
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
            const contextResourceProp: ContextResourceProperty = {
              name,
              description,
              format: normalizePropertyFormatForDocs(format),
              isDeprecated,
              deprecationMessage,
            }

            if ('values' in prop) {
              contextResourceProp.enumValues = prop.values.map(
                ({ name }) => name,
              )
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
