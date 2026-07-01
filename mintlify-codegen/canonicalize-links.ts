import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Canonicalize `docs.seam.co` links in generated output (openapi.json + the API
 * `object.mdx` pages). These links originate in `@seamapi/types` descriptions.
 * For each link this:
 *   - strips a leading `/latest` path segment (legacy GitBook prefix), and
 *   - follows the docs.json redirect map to the final destination, so links
 *     point directly at the canonical route instead of a redirect source.
 * Runs on every generate, keeping the published docs canonical regardless of
 * the upstream package version. See DOC-206 / DOC-199 / DOC-210.
 */

/** Read docs.json and return a source -> destination redirect map. */
export async function loadRedirectMap(
  docsDir: string,
): Promise<Map<string, string>> {
  const raw = await readFile(join(docsDir, 'docs.json'), 'utf8')
  const docsJson = JSON.parse(raw) as {
    redirects?: Array<{ source: string; destination: string }>
  }
  const map = new Map<string, string>()
  for (const r of docsJson.redirects ?? []) map.set(r.source, r.destination)
  return map
}

/**
 * Resolve a docs path to its canonical route: strip a leading `/latest`,
 * follow the redirect chain to its end, and drop a trailing `/index`
 * (Mintlify serves `dir/index.mdx` at `/dir`, so `/dir/index` would 404).
 */
function canonicalizePath(
  path: string,
  redirects: Map<string, string>,
): string {
  let current = path.replace(/^\/latest(?=\/|$)/, '')
  if (current === '') current = '/'
  const seen = new Set<string>()
  while (redirects.has(current) && !seen.has(current)) {
    seen.add(current)
    current = redirects.get(current) as string
  }
  current = current.replace(/\/index$/, '')
  return current === '' ? '/' : current
}

/** Split a link path into its route portion and an anchor/query suffix. */
function splitAnchor(raw: string): { path: string; suffix: string } {
  let path = raw
  let suffix = ''
  const idx = path.search(/[#?]/)
  if (idx !== -1) {
    suffix = path.slice(idx)
    path = path.slice(0, idx)
  }
  if (path.length > 1) path = path.replace(/\/+$/, '')
  if (path === '') path = '/'
  return { path, suffix }
}

/**
 * Rewrite every internal docs link in `text` to its canonical route. Handles
 * absolute `docs.seam.co/...` links, Markdown `](/...)` links, and JSX
 * `href="/..."` attributes; external links and non-redirected paths pass
 * through unchanged.
 */
export function canonicalizeLinks(
  text: string,
  redirects: Map<string, string>,
): string {
  // Absolute docs.seam.co links (the dominant form in @seamapi/types text).
  let out = text.replace(
    /https?:\/\/docs\.seam\.co(\/[^\s"')>\]]*)?/g,
    (_full, pathPart?: string) => {
      const { path, suffix } = splitAnchor(pathPart ?? '/')
      const canon = canonicalizePath(path, redirects)
      return `https://docs.seam.co${canon === '/' ? '' : canon}${suffix}`
    },
  )
  // Relative Markdown links: ](/path)
  out = out.replace(/\]\((\/[^\s")]+)\)/g, (_full, pathPart: string) => {
    const { path, suffix } = splitAnchor(pathPart)
    return `](${canonicalizePath(path, redirects)}${suffix})`
  })
  // JSX href attributes: href='/path' or href="/path"
  out = out.replace(
    /href=(['"])(\/[^'"]+)\1/g,
    (_full, quote: string, pathPart: string) => {
      const { path, suffix } = splitAnchor(pathPart)
      return `href=${quote}${canonicalizePath(path, redirects)}${suffix}${quote}`
    },
  )
  return out
}

/** Canonicalize links across openapi.json and every API `.mdx` page. */
export async function canonicalizeGeneratedLinks(
  docsDir: string,
): Promise<number> {
  const redirects = await loadRedirectMap(docsDir)

  const files = [join(docsDir, 'openapi.json')]
  const apiDir = join(docsDir, 'api')
  const entries = await readdir(apiDir, { recursive: true })
  for (const entry of entries) {
    if (entry.endsWith('.mdx')) files.push(join(apiDir, entry))
  }

  return canonicalizeFiles(files, redirects)
}

/** Canonicalize links in an explicit list of files. Returns the number changed. */
export async function canonicalizeFiles(
  files: string[],
  redirects: Map<string, string>,
): Promise<number> {
  let count = 0
  for (const file of files) {
    let content: string
    try {
      content = await readFile(file, 'utf8')
    } catch {
      continue
    }
    const replaced = canonicalizeLinks(content, redirects)
    if (replaced !== content) {
      await writeFile(file, replaced)
      count++
    }
  }
  return count
}
