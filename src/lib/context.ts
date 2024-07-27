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

export function setFileContext(file: Partial<TemplateContext>): void {
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

    file.response = {
      description: file.endpoint.response?.description ?? '',
    }

    file.codeSamples =
      file.endpoint.codeSamples?.map((sample) => ({
        title: sample.title,
        description: sample.description,
        code: sample.code,
      })) ?? []
  }
}
