import type { Blueprint, Endpoint } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import {
  type ApiEndpointLayoutContext,
  type ApiNamespaceLayoutContext,
  type ApiRouteLayoutContext,
  setApiRouteLayoutContext,
  setEndpointLayoutContext,
  setNamespaceLayoutContext,
} from './layout/index.js'
import {
  type ApiSummaryLayoutContext,
  setSummaryLayoutContext,
} from './layout/summary.js'
import { PathMetadataSchema } from './path-metadata.js'

interface Metadata {
  blueprint: Blueprint
  pathMetadata: unknown
}

type File = ApiEndpointLayoutContext &
  ApiRouteLayoutContext &
  ApiNamespaceLayoutContext &
  ApiSummaryLayoutContext & { layout: string }

const rootPath = 'api'
const indexFile = 'README.md'

export const reference = (
  files: Metalsmith.Files,
  metalsmith: Metalsmith,
): void => {
  const metadata = metalsmith.metadata() as Metadata

  // UPSTREAM: Ideally, path metadata would be unnecessary and contained inside the blueprint.
  const pathMetadata =
    'pathMetadata' in metadata
      ? PathMetadataSchema.parse(metadata.pathMetadata)
      : {}

  const { blueprint } = metadata

  const { resources } = blueprint

  const namespaces = blueprint.namespaces.filter(
    ({ isUndocumented }) => !isUndocumented,
  )
  for (const namespace of namespaces) {
    const { path } = namespace
    const k = `${rootPath}${path}/${indexFile}`
    files[k] = { contents: Buffer.from('\n') }
    const file = files[k] as unknown as File
    file.layout = 'api-namespace.hbs'

    setNamespaceLayoutContext(file, path, resources, pathMetadata)
  }

  const routes = blueprint.routes.filter(({ path, isUndocumented }) => {
    if (
      !path.startsWith('/acs') &&
      !path.startsWith('/thermostats') &&
      !path.startsWith('/phones') &&
      !path.startsWith('/user_identities') &&
      !path.startsWith('/connected_accounts') &&
      !path.startsWith('/access_grants') &&
      !path.startsWith('/access_methods') &&
      !path.startsWith('/spaces') &&
      !path.startsWith('/customers') &&
      !path.startsWith('/client_sessions') &&
      !path.startsWith('/connect_webviews') &&
      !path.startsWith('/webhooks') &&
      !path.startsWith('/workspaces') &&
      !path.startsWith('/access_codes')
    ) {
      return false
    }

    if (isUndocumented) return false
    if (pathMetadata[path]?.title == null) return false
    return true
  })

  const endpoints: Endpoint[] = []
  for (const route of routes) {
    const k = `${rootPath}${route.path}/${indexFile}`
    files[k] = { contents: Buffer.from('\n') }
    const file = files[k] as unknown as File
    file.layout = 'api-route.hbs'
    setApiRouteLayoutContext(file, route, blueprint, pathMetadata)

    for (const endpoint of route.endpoints) {
      if (endpoint.isUndocumented) continue
      if (endpoint.title.length === 0) continue

      const k = `${rootPath}${endpoint.path}.md`
      files[k] = { contents: Buffer.from('\n') }
      const file = files[k] as unknown as File
      file.layout = 'api-endpoint.hbs'
      setEndpointLayoutContext(
        file,
        endpoint,
        resources,
        blueprint.actionAttempts,
        pathMetadata,
      )
      endpoints.push(endpoint)
    }
  }

  const k = `${rootPath}/_summary.md`
  files[k] = { contents: Buffer.from('\n') }
  const file = files[k] as unknown as File
  file.layout = 'summary.hbs'
  setSummaryLayoutContext(file, { routes, namespaces, endpoints, pathMetadata })
}
