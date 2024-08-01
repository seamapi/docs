import type { Endpoint } from '@seamapi/blueprint'

interface TemplateContext {
  layout: string
  endpoint: Endpoint
  endpointJson?: string
  description?: string
  title?: string
  path?: string
  request?: {
    preferredMethod?: string
    parameters?: Array<{
      name: string
      required?: boolean
      description?: string
    }>
  }
  response?: {
    description?: string
    properties?: Array<{
      name: string
      description: string
    }>
  }
  codeSamples?: Array<{
    title: string
    description: string
    code: Record<
      string,
      {
        request: string
        response: string
      }
    >
  }>
}

export function setFileContext(
  file: Partial<TemplateContext>,
  blueprint: any,
): void {
  if (file.endpoint != null) {
    file.description = file.endpoint.description ?? ''
    file.title = file.endpoint.title ?? ''
    file.path = file.endpoint.path ?? ''

    file.request = {
      preferredMethod: file.endpoint.request?.preferredMethod ?? '',
      parameters:
        file.endpoint.request?.parameters?.map((param) => ({
          name: param.name,
          required: param.isRequired ?? false,
          description: param.description ?? '',
        })) ?? [],
    }

    const defaultResponseProperties =
      blueprint.resources?.acs_system?.properties.map((property: any) => ({
        name: property.name,
        description: property.description,
      })) ?? []

    file.response = {
      description:
        file.endpoint.response?.description ??
        'Returns an `acs_systems` array, in which each returned `acs_system` contains the following properties:',
      properties: defaultResponseProperties,
    }

    file.codeSamples =
      file.endpoint.codeSamples?.map((sample) => ({
        title: sample.title,
        description: sample.description,
        code: sample.code,
      })) ?? []
  }
}
