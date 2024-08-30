import type { Blueprint } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import {
  type EndpointTemplateContext,
  type ResourceTemplateContext,
  setApiRouteTemplateContext,
  setEndpointTemplateContext,
} from './template-context.js'

const sdks: Array<'javascript'> = []

type Metadata = Partial<Pick<Blueprint, 'routes' | 'resources'>>

type File = EndpointTemplateContext &
  ResourceTemplateContext & { layout: string }

export const reference = (
  files: Metalsmith.Files,
  metalsmith: Metalsmith,
): void => {
  const metadata = {
    title: '',
    routes: [],
    resources: {},
    ...(metalsmith.metadata() as Metadata),
  }

  for (const route of metadata.routes ?? []) {
    const k = `api${route.path}/README.md`
    files[k] = {
      contents: Buffer.from('\n'),
    }
    const file = files[k] as unknown as File
    file.layout = 'api-route.hbs'
    setApiRouteTemplateContext(file, route, metadata)

    for (const endpoint of route.endpoints) {
      const k = `api${endpoint.path}.md`
      files[k] = {
        contents: Buffer.from('\n'),
      }
      const file = files[k] as unknown as File
      file.layout = 'api-reference.hbs'
      setEndpointTemplateContext(file, endpoint)

      for (const sdk of sdks) {
        const k = `sdk/${sdk}${endpoint.path}.md`
        files[k] = {
          contents: Buffer.from('\n'),
        }
        const file = files[k] as unknown as File
        file.layout = 'sdk-reference.hbs'
        setEndpointTemplateContext(file, endpoint)
      }
    }
  }
}
