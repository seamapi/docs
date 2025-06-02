import type { Blueprint, Route } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import {
  type ApiEndpointLayoutContext,
  type ApiNamespaceLayoutContext,
  type ApiRouteLayoutContext,
  setApiRouteLayoutContext,
  setEndpointLayoutContext,
  setNamespaceLayoutContext,
} from './layout/index.js'
import { PathMetadataSchema } from './path-metadata.js'

interface Metadata {
  blueprint: Blueprint
  pathMetadata: unknown
}

type File = ApiEndpointLayoutContext &
  ApiRouteLayoutContext &
  ApiNamespaceLayoutContext & { layout: string }

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

  const namespacePaths = getNamespacePaths(blueprint.routes)
  for (const path of namespacePaths) {
    const k = `${rootPath}${path}/${indexFile}`
    files[k] = { contents: Buffer.from('\n') }
    const file = files[k] as unknown as File
    file.layout = 'api-namespace.hbs'

    setNamespaceLayoutContext(file, path, blueprint.resources, pathMetadata)
  }

  for (const route of blueprint.routes ?? []) {
    if (
      !route.path.startsWith('/acs') &&
      !route.path.startsWith('/thermostats') &&
      !route.path.startsWith('/phones') &&
      !route.path.startsWith('/user_identities') &&
      !route.path.startsWith('/access_codes')
    ) {
      continue
    }

    if (route.isUndocumented) continue
    if (pathMetadata[route.path]?.title == null) continue

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
      setEndpointLayoutContext(file, endpoint, blueprint.actionAttempts)
    }
  }
}

const getNamespacePaths = (routes: Route[]): string[] => {
  return Array.from(
    new Set(
      routes
        .filter(({ isUndocumented }) => !isUndocumented)
        .filter(({ name }) => !name.startsWith('unstable_'))
        .flatMap((route) =>
          route.namespace != null ? [route.namespace.path] : [],
        ),
    ),
  )
}
