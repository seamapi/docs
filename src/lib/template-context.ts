import type { Blueprint, Endpoint, Route } from '@seamapi/blueprint'

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
    })),
  }

  file.response = {
    description: endpoint.response.description,
    resourceType: null,
  }

  if (endpoint.response.responseType !== 'void') {
    const { resourceType } = endpoint.response
    file.response.resourceType = resourceType
  }

  file.codeSamples = endpoint.codeSamples.map((sample) => ({
    title: sample.title,
    description: sample.description,
    code: sample.code,
  }))
}

interface Resource {
  name: string
  properties: Array<{
    name: string
    type: string
    description: string
    format: string
    isDeprecated: boolean
  }>
}
export interface ResourceTemplateContext {
  resources: Resource[]
}

export function setApiResourceTemplateContext(
  file: Partial<ResourceTemplateContext>,
  route: Route,
  blueprint: Blueprint,
): void {
  file.resources = []

  const endpointsWithResourceType = route.endpoints.filter(
    (e) =>
      e.response.responseType === 'resource' ||
      e.response.responseType === 'resource_list',
  )

  for (const endpoint of endpointsWithResourceType) {
    if (!('resourceType' in endpoint.response)) {
      // eslint-disable-next-line no-console
      console.warn(`No resourceType in ${endpoint.path} endpoint response`)
      return
    }

    const resourceName = endpoint.response.resourceType
    const resource = blueprint.resources[resourceName]

    if (resource == null) {
      // eslint-disable-next-line no-console
      console.warn(`No resource ${resourceName} in blueprint`)
      return
    }

    file.resources.push({
      name: resourceName,
      properties: resource.properties.map(
        ({ name, jsonType, description, format, isDeprecated }) => ({
          name,
          type: jsonType,
          description,
          format,
          isDeprecated,
        }),
      ),
    })
  }
}
