import type {
  ActionAttempt,
  CodeSample,
  Endpoint,
  Parameter,
  SdkName,
  SeamAuthMethod,
  SeamWorkspaceScope,
} from '@seamapi/blueprint'
import { capitalCase } from 'change-case'

import type { PathMetadata } from '../path-metadata.js'
import {
  type ApiRouteResource,
  groupProperties,
  normalizePropertyFormatForDocs,
} from './api-route.js'

const supportedSdks: SdkName[] = [
  'javascript',
  'curl',
  'python',
  'ruby',
  'php',
  'seam_cli',
]

export interface ApiEndpointLayoutContext {
  description: string
  title: string
  path: string
  authMethods: AuthMethodDisplayName[]
  workspaceScope: SeamWorkspaceScope
  isAlpha: boolean
  alphaMessage: string | undefined
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
  jsonType: string
}

interface CodeSampleContext {
  title: string
  description: string
  code: Array<{
    title: string
    request: string
    response: string
  }>
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
  pathMetadata: PathMetadata,
): void {
  const { parentPath } = endpoint
  if (parentPath == null) {
    throw new Error(
      `Expected endpoint ${endpoint.path} to have non-null parentPath`,
    )
  }
  const metadata = pathMetadata[parentPath]
  if (metadata == null) {
    throw new Error(`Missing path metadata for ${parentPath}`)
  }

  file.description = endpoint.description
  file.title = endpoint.title
  file.path = endpoint.path
  file.workspaceScope = endpoint.workspaceScope
  file.isAlpha = (metadata.alpha ?? '').length > 0
  file.alphaMessage = metadata.alpha

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
      hidePreamble: false,
      propertyGroups: groupProperties(
        actionAttempt.properties.filter(
          ({ isUndocumented }) => !isUndocumented,
        ),
        actionAttempt.propertyGroups,
        {},
      ),
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
    jsonType: capitalCase(param.jsonType),

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
  const code = supportedSdks.flatMap((sdkName) => {
    const code = sample.code[sdkName]
    if (code == null) return []
    return [code]
  })

  return {
    title: sample.title,
    description: sample.description,
    code,
  }
}
