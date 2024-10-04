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
  noDescription: ReportSection & { resources: string[] }
  draft: Omit<ReportSection, 'resourceProperties'> & {
    resourceProperties: string[]
  }
  missingReturnType: string[]
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
    missingReturnType: [],
    deprecated: createEmptyReportSection(),
  }

  const resources = metadata.resources ?? {};
  for (const [resourceName, resource] of Object.entries(resources)) {
    processResource(resourceName, resource, report);
  }

  const routes = metadata.routes ?? [];
  for (const route of routes) {
    processRoute(route, report);
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
    report.noDescription.resources.push(resourceName)
  }

  for (const property of resource.properties) {
    processProperty(resourceName, property, report);
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
      reason: 'Intentionally undocumented',
    })
  } else if (
    property.description == null ||
    property.description.trim() === ''
  ) {
    report.noDescription.resourceProperties.push({ name: propertyName })
  }
  if (property.isDeprecated) {
    report.deprecated.resourceProperties.push({
      name: propertyName,
      reason: property.deprecationMessage ?? 'No reason provided',
    })
  }
}

function processRoute(route: Route, report: Report): void {
  if (route.isUndocumented) {
    report.undocumented.endpoints.push({
      name: route.path,
      reason: 'Intentionally undocumented',
    })
  }

  if (route.isDeprecated) {
    report.deprecated.endpoints.push({
      name: route.path,
      reason: 'No reason provided',
    })
  }

  for (const endpoint of route.endpoints) {
    processEndpoint(endpoint, report);
  }
}

function processEndpoint(endpoint: Endpoint, report: Report): void {
  if (endpoint.isUndocumented) {
    report.undocumented.endpoints.push({
      name: endpoint.path,
      reason: 'Intentionally undocumented',
    })
  } else if (
    endpoint.description == null ||
    endpoint.description.trim() === ''
  ) {
    report.noDescription.endpoints.push({ name: endpoint.path })
  }
  if (endpoint.isDeprecated) {
    report.deprecated.endpoints.push({
      name: endpoint.path,
      reason: endpoint.deprecationMessage ?? 'No reason provided',
    })
  }
  if (
    'responseType' in endpoint.response &&
    endpoint.response.responseType == null
  ) {
    report.missingReturnType.push(endpoint.path)
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
          reason: 'Intentionally undocumented',
        })
      } else if (param.description == null || param.description.trim() === '') {
        acc.noDescription.push(param.name)
      }
      if (param.isDeprecated) {
        acc.deprecated.push({
          name: param.name,
          reason: param.deprecationMessage ?? 'No reason provided',
        })
      }
      return acc
    },
    {
      undocumented: [] as ReportItem[],
      noDescription: [] as string[],
      deprecated: [] as ReportItem[],
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
      params: categorizedParams.noDescription.map((name) => ({ name })),
    })
  }
  if (categorizedParams.deprecated.length > 0) {
    report.deprecated.parameters.push({
      path,
      params: categorizedParams.deprecated,
    })
  }
}
