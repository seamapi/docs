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
      description:
        file.endpoint.response?.description ??
        'Returns an `acs_systems` array, in which each returned `acs_system` contains the following properties:',
      properties: [
        {
          name: 'acs_system_id',
          description: 'ID of the access control system',
        },
        { name: 'name', description: 'Name of the access control system' },
        {
          name: 'workspace_id',
          description:
            'ID of the workspace that contains the access control system',
        },
        {
          name: 'created_at',
          description:
            'Date and time at which the access control system was created',
        },
        {
          name: 'external_type',
          description:
            'Brand-specific terminology for the access control system type',
        },
        {
          name: 'external_type_display_name',
          description:
            'Display name that corresponds to the brand-specific terminology for the access control system type',
        },
        {
          name: 'connected_account_ids',
          description:
            'Array of connected account IDs associated with the access control system',
        },
        {
          name: 'image_url',
          description:
            'URL for the image that represents the access control system',
        },
        {
          name: 'image_alt_text',
          description: 'Alternative text for the access control system image',
        },
      ],
    }

    file.codeSamples =
      file.endpoint.codeSamples?.map((sample) => ({
        title: sample.title,
        description: sample.description,
        code: sample.code,
      })) ?? []
  }
}
