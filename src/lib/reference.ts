import type { Blueprint, Endpoint } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

const sdks = ['javascript']

export const reference = (
  files: Metalsmith.Files,
  metalsmith: Metalsmith,
): void => {
  const metadata = metalsmith.metadata()

  for (const route of (metadata as Blueprint).routes ?? []) {
    for (const endpoint of route.endpoints) {
      const k = `api${endpoint.path}.md`
      files[k] = {
        contents: Buffer.from('\n'),
      }
      const file = files[k] as Partial<TemplateContext>
      file.layout = 'api-reference.hbs'
      file.endpoint = endpoint

      for (const sdk of sdks) {
        const k = `sdk/${sdk}${endpoint.path}.md`
        files[k] = {
          contents: Buffer.from('\n'),
        }
        const file = files[k] as Partial<TemplateContext>
        file.layout = 'sdk-reference.hbs'
        file.endpoint = endpoint
      }
    }
  }
}

interface TemplateContext {
  layout: string
  endpoint: Endpoint
}
