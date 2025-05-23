import type {
  ActionAttempt,
  CodeSample,
  Endpoint,
  Parameter,
  SdkName,
  SeamAuthMethod,
  SeamWorkspaceScope,
} from '@seamapi/blueprint'

import {
  type ApiRouteResource,
  mapBlueprintPropertyToRouteProperty,
  normalizePropertyFormatForDocs,
} from './api-route.js'

const supportedSdks: SdkName[] = [
  'javascript',
  'python',
  'php',
  'ruby',
  'go',
  'seam_cli',
  'curl',
]

export interface ApiEndpointLayoutContext {
  description: string
  title: string
  path: string
  authMethods: AuthMethodDisplayName[]
  workspaceScope: SeamWorkspaceScope
  request: {
    preferredMethod: string
    parameters: ApiEndpointParameter[]
  }
  response: {
    description: string
    resourceType: string | null
    escapedResourceType: string | null
    responseKey: string | null
    responseType: string | null
    actionAttempt?: Omit<ApiRouteResource, 'events'>
  }
  primaryCodeSample: CodeSampleContext | null
  additionalCodeSamples: CodeSampleContext[]
}

type AuthMethodDisplayName =
  | 'API key'
  | 'Client session token'
  | 'Personal access token'
  | 'Publishable key'

interface ApiEndpointParameter {
  name: string
  required: boolean
  description: string
  format: string
  isDeprecated: boolean
  deprecationMessage: string
  enumValues?: string[]
  itemFormat?: string
  itemEnumValues?: string[]
  objectParameters?: ApiEndpointParameter[]
}

interface CodeSampleContext {
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
}

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
      .map(mapBlueprintParamToEndpointParam)
      .sort((a, b) => {
        if (a.required && !b.required) return -1
        if (!a.required && b.required) return 1
        return a.name.localeCompare(b.name)
      }),
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

  const [primaryCodeSample, ...additionalCodeSamples] = endpoint.codeSamples
  file.primaryCodeSample =
    primaryCodeSample == null ? null : mapCodeSample(primaryCodeSample)
  file.additionalCodeSamples = additionalCodeSamples.map(mapCodeSample)
}

const mapBlueprintParamToEndpointParam = (
  param: Parameter,
): ApiEndpointParameter => {
  return {
    name: param.name,
    required: param.isRequired,
    description: param.description,
    format: normalizePropertyFormatForDocs(param.format),
    isDeprecated: param.isDeprecated,
    deprecationMessage: param.deprecationMessage,

    ...(param.format === 'enum' && {
      enumValues: param.values.map(({ name }) => name),
    }),

    ...(param.jsonType === 'array' && {
      itemFormat: normalizePropertyFormatForDocs(param.itemFormat),

      ...(param.itemFormat === 'enum' && {
        itemEnumValues: param.itemEnumValues.map(({ name }) => name),
      }),
    }),

    ...(param.format === 'object' && {
      objectParameters: param.parameters.map(mapBlueprintParamToEndpointParam),
    }),
  }
}

const mapCodeSample = (sample: CodeSample): CodeSampleContext => {
  const codeEntries = Object.entries(sample.code).filter(([k]) =>
    supportedSdks.includes(k as SdkName),
  )
  return {
    title: sample.title,
    description: sample.description,
    code: Object.fromEntries(codeEntries),
  }
}
