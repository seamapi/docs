import type {
  Blueprint,
  Endpoint,
  Namespace,
  Parameter,
  Property,
  Resource,
  Route,
} from '@seamapi/blueprint'
import { openapi } from '@seamapi/types/connect'
import type Metalsmith from 'metalsmith'

const defaultDeprecatedMessage = 'No deprecated message provided'
const defaultDraftMessage = 'No draft message provided'
const defaultUndocumentedMessage = 'No undocumented message provided'

interface Report {
  undocumented: ReportSection
  noDescription: ReportSection
  draft: ReportSection
  deprecated: ReportSection
  extraResponseKeys: MissingResponseKeyReport[]
  endpointsWithoutCodeSamples: string[]
}

interface ReportSection {
  routes: ReportItem[]
  resources: ReportItem[]
  resourceProperties: ReportItem[]
  namespaces: ReportItem[]
  endpoints: ReportItem[]
  parameters: ParameterReportItem[]
}

interface MissingResponseKeyReport {
  path: string
  keys: string[]
}

interface ReportItem {
  name: string
  reason?: string
}

interface ParameterReportItem {
  path: string
  params: ReportItem[]
}

type Metadata = Partial<Pick<Blueprint, 'routes' | 'resources'>>

export const report = (
  files: Metalsmith.Files,
  metalsmith: Metalsmith,
): void => {
  const metadata = {
    title: '',
    routes: [],
    resources: {},
    ...(metalsmith.metadata() as Metadata),
  }

  const reportData = generateReport(metadata)

  files['api/_report.md'] = {
    contents: Buffer.from('\n'),
    layout: 'report.hbs',
    ...reportData,
  }
}

function generateReport(metadata: Metadata): Report {
  const report: Report = {
    undocumented: createEmptyReportSection(),
    noDescription: { ...createEmptyReportSection(), resources: [] },
    draft: { ...createEmptyReportSection(), resourceProperties: [] },
    deprecated: createEmptyReportSection(),
    extraResponseKeys: [],
    endpointsWithoutCodeSamples: [],
  }

  const resources = metadata.resources ?? {}
  for (const [resourceName, resource] of Object.entries(resources)) {
    processResource(resourceName, resource, report)
  }

  const routes = metadata.routes ?? []
  for (const route of routes) {
    processRoute(route, report)
  }

  return report
}

function createEmptyReportSection(): ReportSection {
  return {
    resources: [],
    resourceProperties: [],
    endpoints: [],
    parameters: [],
    namespaces: [],
    routes: [],
  }
}

function processResource(
  resourceName: string,
  resource: Resource,
  report: Report,
): void {
  if (resource.description == null || resource.description.trim() === '') {
    report.noDescription.resources.push({ name: resourceName })
  }

  if (resource.isDeprecated) {
    report.deprecated.resources.push({
      name: resourceName,
      reason: resource.deprecationMessage ?? defaultDeprecatedMessage,
    })
  }

  if (resource.isUndocumented) {
    report.undocumented.resources.push({
      name: resourceName,
      reason: resource.undocumentedMessage ?? defaultUndocumentedMessage,
    })

    if (resource.isDraft) {
      report.draft.resources.push({
        name: resourceName,
        reason: resource.draftMessage ?? defaultDraftMessage,
      })
    }
  }

  for (const property of resource.properties) {
    processProperty(resourceName, property, report)
  }
}

function processProperty(
  resourceName: string,
  property: Property,
  report: Report,
): void {
  const propertyName = `${resourceName}.${property.name}`

  if (property.isUndocumented) {
    report.undocumented.resourceProperties.push({
      name: propertyName,
      reason: property.undocumentedMessage ?? defaultUndocumentedMessage,
    })
  }

  if (property.description == null || property.description.trim() === '') {
    report.noDescription.resourceProperties.push({ name: propertyName })
  }

  if (property.isDeprecated) {
    report.deprecated.resourceProperties.push({
      name: propertyName,
      reason: property.deprecationMessage ?? defaultDeprecatedMessage,
    })
  }

  if (property.isDraft) {
    report.draft.resourceProperties.push({
      name: propertyName,
      reason: property.draftMessage ?? defaultDraftMessage,
    })
  }
}

function processRoute(route: Route, report: Report): void {
  if (route.isUndocumented) {
    report.undocumented.routes.push({
      name: route.path,
      reason: defaultUndocumentedMessage, // TODO: undocumentedMessage
    })
  }

  if (route.isDeprecated) {
    report.deprecated.routes.push({
      name: route.path,
      reason: defaultDeprecatedMessage, // TODO: deprecationMessage
    })
  }

  if (route.isDraft) {
    report.draft.routes.push({
      name: route.path,
      reason: defaultDraftMessage, // TODO: draftMessage
    })
  }

  if (route.namespace != null) {
    processNamespace(route.namespace, report)
  }

  // TODO: route description

  for (const endpoint of route.endpoints) {
    processEndpoint(endpoint, report)
  }
}

function processNamespace(namespace: Namespace, report: Report): void {
  const addNamespace = (section: ReportItem[], reason: string): void => {
    if (section.some((item) => item.name === namespace.path)) return

    section.push({ name: namespace.path, reason })
  }

  if (namespace.isDeprecated) {
    addNamespace(report.deprecated.namespaces, defaultDeprecatedMessage)
  }

  if (namespace.isDraft) {
    addNamespace(report.draft.namespaces, defaultDraftMessage)
  }

  if (namespace.isUndocumented) {
    addNamespace(report.undocumented.namespaces, defaultUndocumentedMessage)
  }
}

function processEndpoint(endpoint: Endpoint, report: Report): void {
  if (endpoint.isUndocumented) {
    addUniqueEndpoint(report.undocumented.endpoints, {
      name: endpoint.path,
      reason: endpoint.undocumentedMessage ?? defaultUndocumentedMessage,
    })
  }

  if (endpoint.description == null || endpoint.description.trim() === '') {
    addUniqueEndpoint(report.noDescription.endpoints, { name: endpoint.path })
  }

  if (endpoint.isDeprecated) {
    addUniqueEndpoint(report.deprecated.endpoints, {
      name: endpoint.path,
      reason: endpoint.deprecationMessage ?? defaultDeprecatedMessage,
    })
  }

  if (endpoint.isDraft) {
    addUniqueEndpoint(report.draft.endpoints, {
      name: endpoint.path,
      reason: endpoint.draftMessage ?? defaultDraftMessage,
    })
  }

  if (endpoint.codeSamples.length === 0) {
    if (!report.endpointsWithoutCodeSamples.includes(endpoint.path)) {
      report.endpointsWithoutCodeSamples.push(endpoint.path)
    }
  }

  processResponseKeys(endpoint, report)

  processParameters(endpoint.path, endpoint.request.parameters, report)
}

function addUniqueEndpoint(
  reportedEndpoints: ReportItem[],
  newEndpoint: ReportItem,
): void {
  if (
    !reportedEndpoints.some((endpoint) => endpoint.name === newEndpoint.name)
  ) {
    reportedEndpoints.push(newEndpoint)
  }
}

function processResponseKeys(endpoint: Endpoint, report: Report): void {
  if (!('responseKey' in endpoint.response)) return

  const openapiResponseSchemaProps = getOpenapiResponseProperties(endpoint.path)
  if (openapiResponseSchemaProps == null) return

  const openapiResponsePropKeys = Object.keys(
    openapiResponseSchemaProps,
  ).filter((key) => key !== 'ok')
  if (openapiResponsePropKeys.length <= 1) return

  const endpointResponseKey = endpoint.response.responseKey
  const extraResponseKeys = openapiResponsePropKeys.filter(
    (key) => key !== endpointResponseKey,
  )

  report.extraResponseKeys.push({
    path: endpoint.path,
    keys: extraResponseKeys,
  })
}

function getOpenapiResponseProperties(
  path: string,
): Record<string, unknown> | undefined {
  const openapiEndpointDef = openapi.paths[path as keyof typeof openapi.paths]

  if (openapiEndpointDef == null) {
    // eslint-disable-next-line no-console
    console.warn(`OpenAPI definition not found for endpoint: ${path}`)
    return
  }

  return openapiEndpointDef.post.responses['200']?.content['application/json']
    ?.schema?.properties
}

function processParameters(
  path: string,
  parameters: Parameter[],
  report: Report,
): void {
  const categorizedParams = parameters.reduce(
    (acc, param) => {
      if (param.isUndocumented) {
        acc.undocumented.push({
          name: param.name,
          reason: param.undocumentedMessage ?? defaultUndocumentedMessage,
        })
      }

      if (param.description == null || param.description.trim() === '') {
        acc.noDescription.push({ name: param.name })
      }

      if (param.isDeprecated) {
        acc.deprecated.push({
          name: param.name,
          reason: param.deprecationMessage ?? defaultDeprecatedMessage,
        })
      }

      if (param.isDraft) {
        acc.draft.push({
          name: param.name,
          reason: param.draftMessage ?? defaultDraftMessage,
        })
      }

      return acc
    },
    {
      undocumented: [] as ReportItem[],
      noDescription: [] as ReportItem[],
      deprecated: [] as ReportItem[],
      draft: [] as ReportItem[],
    },
  )

  if (categorizedParams.undocumented.length > 0) {
    addUniqueParameters(report.undocumented.parameters, {
      path,
      params: categorizedParams.undocumented,
    })
  }
  if (categorizedParams.noDescription.length > 0) {
    addUniqueParameters(report.noDescription.parameters, {
      path,
      params: categorizedParams.noDescription,
    })
  }
  if (categorizedParams.deprecated.length > 0) {
    addUniqueParameters(report.deprecated.parameters, {
      path,
      params: categorizedParams.deprecated,
    })
  }
  if (categorizedParams.draft.length > 0) {
    addUniqueParameters(report.draft.parameters, {
      path,
      params: categorizedParams.draft,
    })
  }
}

const addUniqueParameters = (
  reportedParams: ParameterReportItem[],
  newParam: ParameterReportItem,
): void => {
  if (reportedParams.some((param) => param.path === newParam.path)) {
    return
  }

  reportedParams.push(newParam)
}