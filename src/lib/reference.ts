import type { Blueprint } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

const sdks = ['javascript']

export const reference = (
  files: Metalsmith.Files,
  metalsmith: Metalsmith,
): void => {
  const metadata = metalsmith.metadata()

  for (const route of (metadata as Blueprint).routes ?? []) {
    for (const endpoint of route.endpoints) {
      files[`./api/${endpoint.path}.md`] = {
        contents: Buffer.from(`---
          layout: api-reference
          ---\n
        `),
      }

      for (const sdk of sdks) {
        files[`./sdk/${sdk}/${endpoint.path}.md`] = {
          contents: Buffer.from(`---
          layout: sdk-reference
          ---\n
        `),
        }
      }
    }
  }
}
