import type {
  ActionAttempt,
  CodeSampleSdk,
  Endpoint,
  SeamAuthMethod,
  SeamWorkspaceScope,
} from '@seamapi/blueprint'

import {
  type ApiRouteResource,
  mapBlueprintPropertyToRouteProperty,
} from './api-route.js'

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
  workspaceScope: SeamWorkspaceScope
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
    actionAttempt?: ApiRouteResource
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
  actionAttempts: ActionAttempt[],
): void {
  file.description = endpoint.description
  file.title = endpoint.title
  file.path = endpoint.path
  file.workspaceScope = endpoint.workspaceScope

  file.authMethods = endpoint.authMethods
    .filter(
      (method): method is PublicSeamAuthMethod =>
        method in seamAuthMethodToDisplayNameMap,
    )
    .map((method) => seamAuthMethodToDisplayNameMap[method])
    .sort()

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

  if (
    endpoint.response.responseType === 'resource' &&
    endpoint.response.actionAttemptType != null
  ) {
    const endpointActionAttemptType = endpoint.response.actionAttemptType
    const actionAttempt = actionAttempts.find(
      (attempt) => attempt.actionAttemptType === endpointActionAttemptType,
    )
    if (actionAttempt == null) {
      throw new Error(
        `Action attempt ${endpointActionAttemptType} not found in blueprint`,
      )
    }

    file.response.actionAttempt = {
      name: actionAttempt.actionAttemptType,
      description: actionAttempt.description,
      properties: actionAttempt.properties
        .filter(({ isUndocumented }) => !isUndocumented)
        .map(mapBlueprintPropertyToRouteProperty),
    }
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
