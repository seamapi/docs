import type { Blueprint } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import {
  type ApiEndpointLayoutContext,
  type ApiRouteLayoutContext,
  setApiRouteLayoutContext,
  setEndpointLayoutContext,
} from './layout/index.js'
import { PathMetadataSchema } from './path-metadata.js'

const sdks: Array<'javascript'> = []

type Metadata = Partial<Pick<Blueprint, 'routes' | 'resources'>>

type File = ApiEndpointLayoutContext &
  ApiRouteLayoutContext & { layout: string }

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

  const blueprint = {
    title: '',
    routes: [],
    resources: {},
    ...metadata,
  }

  for (const route of blueprint.routes ?? []) {
    if (route.isUndocumented) continue

    if (
      !route.path.startsWith('/acs') &&
      !route.path.startsWith('/thermostats') &&
      !route.path.startsWith('/user_identities')
    ) {
      continue
    }

    const k = `api${route.path}/README.md`
    files[k] = {
      contents: Buffer.from('\n'),
    }
    const file = files[k] as unknown as File
    file.layout = 'api-route.hbs'
    setApiRouteLayoutContext(file, route, blueprint, pathMetadata)

    for (const endpoint of route.endpoints) {
      if (endpoint.isUndocumented) continue

      const k = `api${endpoint.path}.md`
      files[k] = {
        contents: Buffer.from('\n'),
      }
      const file = files[k] as unknown as File
      file.layout = 'api-endpoint.hbs'
      setEndpointLayoutContext(file, endpoint)

      for (const sdk of sdks) {
        const k = `sdk/${sdk}${endpoint.path}.md`
        files[k] = {
          contents: Buffer.from('\n'),
        }
        const file = files[k] as unknown as File
        file.layout = 'sdk-reference.hbs'
        setEndpointLayoutContext(file, endpoint)
      }
    }
  }
}
