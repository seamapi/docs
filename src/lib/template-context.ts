import type { Blueprint, Endpoint } from '@seamapi/blueprint'

export function setEndpointTemplateContext(
  file: Partial<EndpointTemplateContext>,
  endpoint: Endpoint,
  blueprint: Blueprint,
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
      type: param.jsonType,
    })),
  }

  file.response = {
    description: endpoint.response.description,
    properties: null,
    resourceType: null,
    responseKey: null,
  }

  if (endpoint.response.responseType !== 'void') {
    const { resourceType, responseKey } = endpoint.response
    file.response.resourceType = resourceType
    file.response.responseKey = responseKey
    const resource = blueprint.resources[resourceType]
    file.response.properties =
      resource?.properties.map((property) => ({
        name: property.name,
        description: property.description,
      })) ?? null
  }

  file.codeSamples = endpoint.codeSamples.map((sample) => ({
    title: sample.title,
    description: sample.description,
    code: sample.code,
  }))
}

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
    }>
  }
  response: {
    description: string
    resourceType: string | null
    responseKey: string | null
    properties: null | Array<{
      name: string
      description: string
    }>
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
