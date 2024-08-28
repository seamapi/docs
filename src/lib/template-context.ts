import type { Blueprint, Endpoint, Property, Route } from '@seamapi/blueprint'
import { pascalCase } from 'change-case'

export interface EndpointTemplateContext {
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

export function setEndpointTemplateContext(
  file: Partial<EndpointTemplateContext>,
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
> & { format: string }
interface ContextResource {
  name: string
  description: string
  properties: ContextResourceProperty[]
}
type ContextEndpoint = Pick<Endpoint, 'path' | 'description'>

export interface ResourceTemplateContext {
  resources: ContextResource[]
  endpoints: ContextEndpoint[]
}

export function setApiRouteTemplateContext(
  file: Partial<ResourceTemplateContext>,
  route: Route,
  blueprint: Blueprint,
): void {
  file.endpoints = route.endpoints.map(({ path, description }) => ({
    path,
    description: hasMultipleParagraphs(description)
      ? getFirstParagraph(description)
      : description,
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
        properties: resource.properties.map(
          ({
            name,
            description,
            format,
            isDeprecated,
            deprecationMessage,
          }) => ({
            name,
            description,
            format: normalizePropertyFormatForDocs(format),
            isDeprecated,
            deprecationMessage,
          }),
        ),
      })
    }
  }
}

const hasMultipleParagraphs = (text: string): boolean => /\n{2,}/.test(text)

const getFirstParagraph = (text: string): string => {
  const match = text.match(/^(.+?)(?:\n{2,}|$)/s)
  return match?.[1]?.trim() ?? ''
}

type PropertyFormat = Property['format']

const normalizePropertyFormatForDocs = (format: PropertyFormat): string => {
  const formatMap: Partial<Record<PropertyFormat, string>> = {
    id: 'ID',
  }

  return formatMap[format] ?? pascalCase(format)
}
