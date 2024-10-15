import type { Blueprint } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import type { PathMetadata } from './blueprint.js'
import {
  type EndpointLayoutContext,
  type RouteLayoutContext,
  setApiRouteLayoutContext,
  setEndpointLayoutContext,
} from './layout-context.js'

const sdks: Array<'javascript'> = []

type Metadata = Partial<Pick<Blueprint, 'routes' | 'resources'>>

type File = EndpointLayoutContext & RouteLayoutContext & { layout: string }

export const reference = (
  files: Metalsmith.Files,
  metalsmith: Metalsmith,
): void => {
  const { pathMetadata = {}, ...metadata } =
    metalsmith.metadata() as Metadata & { pathMetadata: PathMetadata }

  const blueprint = {
    title: '',
    routes: [],
    resources: {},
    ...metadata,
  }

  for (const route of blueprint.routes ?? []) {
    if (route.isUndocumented) continue

    if (!route.path.startsWith('/acs/systems')) {
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
      setEndpointLayoutContext(file, endpoint, pathMetadata)

      for (const sdk of sdks) {
        const k = `sdk/${sdk}${endpoint.path}.md`
        files[k] = {
          contents: Buffer.from('\n'),
        }
        const file = files[k] as unknown as File
        file.layout = 'sdk-reference.hbs'
        setEndpointLayoutContext(file, endpoint, pathMetadata)
      }
    }
  }
}
