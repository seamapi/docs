import type {
  CodeSampleSdk,
  Endpoint,
  SeamAuthMethod,
} from '@seamapi/blueprint'

const supportedSdks: CodeSampleSdk[] = [
  'javascript',
  'python',
  'php',
  'ruby',
  'go',
  'seam_cli',
]

export interface ApiEndpointLayoutContext {
  description: string
  title: string
  path: string
  authMethods: AuthMethodDisplayName[]
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

type AuthMethodDisplayName =
  | 'API key'
  | 'Client session token'
  | 'Personal access token'
  | 'Publishable key'

type PublicSeamAuthMethod = Exclude<SeamAuthMethod, 'console_session_token'>

const seamAuthMethodToDisplayNameMap: Record<
  PublicSeamAuthMethod,
  AuthMethodDisplayName
> = {
  api_key: 'API key',
  client_session_token: 'Client session token',
  personal_access_token: 'Personal access token',
  publishable_key: 'Publishable key',
}

export function setEndpointLayoutContext(
  file: Partial<ApiEndpointLayoutContext>,
  endpoint: Endpoint,
): void {
  file.description = endpoint.description
  file.title = endpoint.title
  file.path = endpoint.path

  file.authMethods = endpoint.authMethods
    .filter(
      (method): method is PublicSeamAuthMethod =>
        method in seamAuthMethodToDisplayNameMap,
    )
    .map((method) => seamAuthMethodToDisplayNameMap[method])

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
