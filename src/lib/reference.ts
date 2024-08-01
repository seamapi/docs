import type { Blueprint } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import {
  type EndpointTemplateContext,
  setEndpointTemplateContext,
} from './template-context.js'

const sdks = ['javascript']

type Metadata = Partial<Pick<Blueprint, 'routes' | 'resources'>>

type File = EndpointTemplateContext & { layout: string }

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
    for (const endpoint of route.endpoints) {
      const k = `api${endpoint.path}.md`
      files[k] = {
        contents: Buffer.from('\n'),
      }
      const file = files[k] as unknown as File
      file.layout = 'api-reference.hbs'
      setEndpointTemplateContext(file, endpoint, metadata)

      for (const sdk of sdks) {
        const k = `sdk/${sdk}${endpoint.path}.md`
        files[k] = {
          contents: Buffer.from('\n'),
        }
        const file = files[k] as unknown as File
        file.layout = 'sdk-reference.hbs'
        setEndpointTemplateContext(file, endpoint, metadata)
      }
    }
  }
}
