import { existsSync } from 'node:fs'
import { join, relative } from 'node:path'

import type Metalsmith from 'metalsmith'

const baseUrl = 'https://docs.seam.co/latest/'
const urlPrefix = '/latest'
const docsRoot = 'docs'

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
        url.pathname = url.pathname.replace(urlPrefix, '')
        const targetRoot = join('docs', url.pathname)

        const target = `${targetRoot}.md`
        if (existsSync(target)) {
          return getRelativeLink(name, target, url)
        }

        const readmeTarget = join(targetRoot, 'README.md')
        if (existsSync(readmeTarget)) {
          return getRelativeLink(name, readmeTarget, url)
        }

        // eslint-disable-next-line no-console
        console.warn(
          `Could not find a matching file for ${$1} at ${targetRoot}.md or ${targetRoot}/README.md.`,
        )

        return $1
      }),
    )
  }
}

const getRelativeLink = (name: string, target: string, url: URL): string => {
  const src = join(docsRoot, name)
  const relativePath = relative(src, target)
  return `${relativePath}${url.hash}`
}
