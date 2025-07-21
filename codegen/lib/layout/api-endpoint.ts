import path from 'node:path/posix'

import type {
  ActionAttempt,
  CodeSample,
  Endpoint,
  Parameter,
  Resource,
  ResourceSample,
  SdkName,
  SeamAuthMethod,
  SeamWorkspaceScope,
} from '@seamapi/blueprint'
import { capitalCase } from 'change-case'

import type { PathMetadata } from '../path-metadata.js'
import {
  type ApiRouteResource,
  groupProperties,
  mapResourceSample,
  normalizePropertyFormatForDocs,
  type ResourceSampleContext,
  resourceSampleFilter,
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
    responsePath: string | null
    actionAttempt?: Omit<ApiRouteResource, 'events'>
  }
  resourceSamples: ResourceSampleContext[]
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
  resources: Resource[],
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
    responsePath: null,
  }

  if (endpoint.response.responseType !== 'void') {
    const { resourceType, responseKey, responseType } = endpoint.response

    const responseResource = resources.find(
      (r) => r.resourceType === resourceType,
    )

    let responsePath = null
    if (responseResource != null) {
      responsePath = path
        .relative(endpoint.path, responseResource.routePath)
        .replace('..', '.') // gitbook expects first level to be .
    }

    file.response.resourceType = resourceType
    file.response.escapedResourceType = resourceType.replaceAll('_', '\\_')
    file.response.responseKey = responseKey
    file.response.responseType = responseType
    file.response.responsePath = responsePath
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
      errorGroups: [],
      warningGroups: [],
      resourceSamples: [],
      propertyGroups: groupProperties(
        actionAttempt.properties.filter(
          ({ isUndocumented }) => !isUndocumented,
        ),
        actionAttempt.propertyGroups,
        {},
      ),
    }
  }

  file.resourceSamples = getResourceSamples(
    endpoint,
    resources,
    actionAttempts,
    pathMetadata,
  ).map(mapResourceSample)

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

const getResourceSamples = (
  endpoint: Endpoint,
  resources: Resource[],
  actionAttempts: ActionAttempt[],
  pathMetadata: PathMetadata,
): ResourceSample[] => {
  const { response } = endpoint

  if (response.responseType === 'void') {
    return []
  }

  let resource: Resource | ActionAttempt | undefined = resources.find(
    ({ resourceType }) => resourceType === response.resourceType,
  )

  if (
    response.responseType === 'resource' &&
    response.actionAttemptType != null
  ) {
    resource = actionAttempts.find(
      ({ actionAttemptType }) =>
        actionAttemptType === response.actionAttemptType,
    )
  }

  if (resource == null) return []

  const metadata = pathMetadata[resource.routePath]

  const sample = resource.resourceSamples.filter(
    resourceSampleFilter({
      include: metadata?.include_groups,
      exclude: metadata?.exclude_groups,
    }),
  )[0]

  if (sample == null) return []

  return [
    {
      ...sample,
      title: 'JSON',
      description: '',
    },
  ]
}
