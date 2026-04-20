import { existsSync } from 'node:fs'
import { dirname, join, relative, sep } from 'node:path'

import type Metalsmith from 'metalsmith'

import {
  apiReferenceRoot,
  apiReferenceUrlPrefix,
  baseUrl,
  siteUrlPrefix,
} from './config.js'

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
        url.pathname = url.pathname.replace(siteUrlPrefix, '')

        // Only relativize links to pages within the api-reference space.
        // The site section uses apiReferenceUrlPrefix as its URL prefix.
        // Cross-section links (to guides) stay as absolute URLs.
        if (!url.pathname.startsWith(apiReferenceUrlPrefix + '/')) return $1
        const apiPath = url.pathname.replace(apiReferenceUrlPrefix, '')
        const targetRoot = join(apiReferenceRoot, apiPath)

        const target = `${targetRoot}.md`
        if (existsSync(target)) {
          return getRelativeLink(name, target, url)
        }

        const readmeTarget = join(targetRoot, 'README.md')
        if (existsSync(readmeTarget)) {
          return getRelativeLink(name, readmeTarget, url)
        }

        return $1
      }),
    )
  }
}

const getRelativeLink = (name: string, target: string, url: URL): string => {
  const src = join(apiReferenceRoot, name)
  const relativePath = relative(dirname(src), target)
  const urlPath = relativePath.split(sep).join('/')
  return `${urlPath}${url.hash}`
}
