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
      if (endpoint.path === '/access_codes/update_multiple') {
        endpoint.request.parameters = endpoint.request.parameters.map(
          (param) => {
            if (param.name === 'name') {
              return {
                ...param,
                description: `Name of the new access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes.

      Note that the name provided on Seam is used to identify the code on Seam and is not necessarily the name that will appear in the lock provider's app or on the device. This is because lock providers may have constraints on names, such as length, uniqueness, or characters that can be used. In addition, some lock providers may break down names into components such as \`first_name\` and \`last_name\`.

      To provide a consistent experience, Seam identifies the code on Seam by its name but may modify the name that appears on the lock provider's app or on the device. For example, Seam may add additional characters or truncate the name to meet provider constraints.

      To help your users identify codes set by Seam, Seam provides the name exactly as it appears on the lock provider's app or on the device as a separate property called \`appearance\`. This is an object with a \`name\` property and, optionally, \`first_name\` and \`last_name\` properties (for providers that break down a name into components).`,
              }
            }

            return param
          },
        )

        console.dir(endpoint.request.parameters)
      }
      setEndpointLayoutContext(
        file,
        endpoint,
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
