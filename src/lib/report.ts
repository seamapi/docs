import type {
  Blueprint,
  Endpoint,
  Parameter,
  Property,
  Resource,
  Route,
} from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

type Metadata = Partial<Pick<Blueprint, 'routes' | 'resources'>>

interface ReportItem {
  name: string
  reason?: string
}

const defaultDeprecatedMessage = 'No deprecated message provided'
const defaultDraftMessage = 'No draft message provided'
const defaultUndocumentedMessage = 'No undocumented message provided'

interface ParameterReportItem {
  path: string
  params: ReportItem[]
}

interface ReportSection {
  resourceProperties: ReportItem[]
  endpoints: ReportItem[]
  parameters: ParameterReportItem[]
}

interface Report {
  undocumented: ReportSection
  noDescription: ReportSection & { resources: ReportItem[] }
  draft: ReportSection
  deprecated: ReportSection
}

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
    resourceProperties: [],
    endpoints: [],
    parameters: [],
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
  // TODO: draft, deprecated, undocumented when supported

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
      reason: defaultUndocumentedMessage, // TODO: undocumentedMessage
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
      reason: defaultDraftMessage, // TODO: draftMessage
    })
  }
}

function processRoute(route: Route, report: Report): void {
  if (route.isUndocumented) {
    report.undocumented.endpoints.push({
      name: route.path,
      reason: defaultUndocumentedMessage, // TODO: undocumentedMessage
    })
  }

  if (route.isDeprecated) {
    report.deprecated.endpoints.push({
      name: route.path,
      reason: defaultDeprecatedMessage, // TODO: deprecationMessage
    })
  }

  if (route.isDraft) {
    report.draft.endpoints.push({
      name: route.path,
      reason: defaultDraftMessage, // TODO: draftMessage
    })
  }

  // TODO: description

  for (const endpoint of route.endpoints) {
    processEndpoint(endpoint, report)
  }
}

function processEndpoint(endpoint: Endpoint, report: Report): void {
  if (endpoint.isUndocumented) {
    report.undocumented.endpoints.push({
      name: endpoint.path,
      reason: defaultUndocumentedMessage, // TODO: undocumentedMessage
    })
  }

  if (endpoint.description == null || endpoint.description.trim() === '') {
    report.noDescription.endpoints.push({ name: endpoint.path })
  }

  if (endpoint.isDeprecated) {
    report.deprecated.endpoints.push({
      name: endpoint.path,
      reason: endpoint.deprecationMessage ?? defaultDeprecatedMessage,
    })
  }

  if (endpoint.isDraft) {
    report.draft.endpoints.push({
      name: endpoint.path,
      reason: defaultDraftMessage, // TODO: draftMessage
    })
  }

  processParameters(endpoint.path, endpoint.request.parameters, report)
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
          reason: defaultUndocumentedMessage, // TODO: undocumentedMessage
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
          reason: defaultDraftMessage, // TODO: draftMessage
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
    report.undocumented.parameters.push({
      path,
      params: categorizedParams.undocumented,
    })
  }
  if (categorizedParams.noDescription.length > 0) {
    report.noDescription.parameters.push({
      path,
      params: categorizedParams.noDescription,
    })
  }
  if (categorizedParams.deprecated.length > 0) {
    report.deprecated.parameters.push({
      path,
      params: categorizedParams.deprecated,
    })
  }
  if (categorizedParams.draft.length > 0) {
    report.draft.parameters.push({
      path,
      params: categorizedParams.draft,
    })
  }
}
