import { existsSync } from 'node:fs'
import { join, relative } from 'node:path'

import type Metalsmith from 'metalsmith'

const baseUrl = 'https://docs.seam.co/latest/'

export const postprocess = (
  files: Metalsmith.Files,
  _metalsmith: Metalsmith,
): void => {
  for (const [name, file] of Object.entries(files)) {
    const contents = file.contents.toString('utf-8')
    file.contents = Buffer.from(
      contents.replaceAll(new RegExp(`(${baseUrl}[^)]+)`, 'g'), ($1, $2) => {
        if (typeof $2 !== 'string') return $1
        const url = new URL($2)
        url.pathname = url.pathname.replace('/latest', '')
        const targetRoot = join('docs', url.pathname)
        const target = `${targetRoot}.md`
        const readmeTarget = join(targetRoot, 'README.md')
        const src = join('docs', name)
        if (existsSync(target)) return relative(src, target)
        if (existsSync(readmeTarget)) return relative(src, readmeTarget)
        // eslint-disable-next-line no-console
        console.warn(
          `Could not find a matching file for ${$1} at ${targetRoot}.md or ${targetRoot}/README.md.`,
        )
        return $1
      }),
    )
  }
}
