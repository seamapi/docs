import type { Blueprint, Endpoint, Property, Route } from '@seamapi/blueprint'
import { pascalCase } from 'change-case'

export interface EndpointLayoutContext {
  description: string
  title: string
  path: string
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
): void {
  file.description = endpoint.description
  file.title = endpoint.title
  file.path = endpoint.path

  file.request = {
    preferredMethod: endpoint.request?.preferredMethod ?? '',
    parameters: endpoint.request.parameters.map((param) => ({
      name: param.name,
      required: param.isRequired,
      description: param.description,
      jsonType: param.jsonType,
    })),
  }

  file.response = {
    description: endpoint.response.description,
    resourceType: null,
    responseKey: null,
    responseType: null,
  }

  if (endpoint.response.responseType !== 'void') {
    const { resourceType, responseKey, responseType } = endpoint.response
    file.response.resourceType = resourceType
    file.response.responseKey = responseKey
    file.response.responseType = responseType
  }

  file.codeSamples = endpoint.codeSamples.map((sample) => ({
    title: sample.title,
    description: sample.description,
    code: sample.code,
  }))
}

type ContextResourceProperty = Pick<
  Property,
  'name' | 'description' | 'isDeprecated' | 'deprecationMessage'
> & { format: string; enumValues?: string[] }
interface ContextResource {
  name: string
  description: string
  properties: ContextResourceProperty[]
}
type ContextEndpoint = Pick<Endpoint, 'path' | 'description'>

export interface RouteLayoutContext {
  resources: ContextResource[]
  endpoints: ContextEndpoint[]
}

export function setApiRouteLayoutContext(
  file: Partial<RouteLayoutContext>,
  route: Route,
  blueprint: Blueprint,
): void {
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
        properties: resource.properties.map((prop) => {
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
            contextResourceProp.enumValues = prop.values.map(({ name }) => name)
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