/* eslint-disable no-console */
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Static pages that should NOT be converted to OpenAPI references.
 */
const staticPages = new Set([
  'api/index',
  'api/installation',
  'api/mcp-installation',
  'api/authentication',
  'api/pagination',
  'api/rate-limits-and-guardrails',
])

/**
 * Check if a page reference is an object overview page (e.g. "api/access_codes/object").
 */
function isObjectPage(page: string): boolean {
  return page.startsWith('api/') && page.endsWith('/object')
}

/**
 * Convert a page path like "api/access_codes/create" to an OpenAPI reference
 * like "POST /access_codes/create".
 * The tab-level "openapi" field in docs.json sets the default spec,
 * so we don't need the filename prefix.
 */
function toOpenApiRef(page: string): string {
  const apiPath = page.replace(/^api/, '')
  return `POST ${apiPath}`
}

/**
 * Recursively transform navigation pages.
 * Returns null for pages that should be removed (not in spec).
 */
function transformPages(
  pages: any[],
  specPaths: Set<string>,
  removed: string[],
): any[] {
  return pages
    .map((page) => {
      // Nested group object
      if (typeof page === 'object' && page.group) {
        const transformed = transformPages(page.pages, specPaths, removed)
        if (transformed.length === 0) return null // Remove empty groups
        return {
          ...page,
          pages: transformed,
        }
      }

      // String page reference
      if (typeof page === 'string') {
        // Already an OpenAPI ref (either "POST /path" or legacy "file.json POST /path")
        const openApiMatch = page.match(/(?:\.json )?POST (.+)$/)
        if (openApiMatch && !page.startsWith('api/')) {
          const apiPath = openApiMatch[1]
          if (!specPaths.has(apiPath)) {
            removed.push(page)
            return null
          }
          return `POST ${apiPath}`
        }

        // Skip non-API pages
        if (!page.startsWith('api/')) return page

        // Keep static pages as MDX
        if (staticPages.has(page)) return page

        // Keep object pages as MDX (overview/object description pages)
        if (isObjectPage(page)) return page

        // Check if the endpoint exists in the spec
        const apiPath = page.replace(/^api/, '')
        if (!specPaths.has(apiPath)) {
          removed.push(page)
          return null // Remove from nav
        }

        // Convert endpoint pages to OpenAPI references
        return toOpenApiRef(page)
      }

      return page
    })
    .filter((p) => p !== null)
}

export async function updateDocsJson(specPaths?: Set<string>): Promise<void> {
  const docsJsonPath = join(
    import.meta.dirname,
    '..',
    'mintlify-docs',
    'docs.json',
  )

  const docsJson = JSON.parse(await readFile(docsJsonPath, 'utf8'))

  // If specPaths not provided, load from combined spec
  if (!specPaths) {
    const specPath = join(
      import.meta.dirname,
      '..',
      'mintlify-docs',
      'openapi.json',
    )
    const spec = JSON.parse(await readFile(specPath, 'utf8'))
    specPaths = new Set(Object.keys(spec.paths))
  }

  // Find the API Reference tab
  const tabs = docsJson.navigation?.tabs
  if (!tabs) {
    console.error('No navigation.tabs found in docs.json')
    return
  }

  const apiTab = tabs.find((t: any) => t.tab === 'API Reference')
  if (!apiTab) {
    console.error('No "API Reference" tab found')
    return
  }

  // Ensure the tab-level openapi field is set
  apiTab.openapi = 'openapi.json'

  // Remove the "Access Codes (OpenAPI Preview)" group if it exists
  apiTab.groups = apiTab.groups.filter(
    (g: any) => g.group !== 'Access Codes (OpenAPI Preview)',
  )

  // Transform all groups in the API Reference tab
  const removedPages: string[] = []
  for (const group of apiTab.groups) {
    group.pages = transformPages(group.pages, specPaths, removedPages)
  }
  if (removedPages.length > 0) {
    console.log(
      `Removed ${removedPages.length} nav entries not in spec: ${removedPages.join(', ')}`,
    )
  }

  // Ensure top-level openapi is set (needed for Mintlify cloud build to
  // process the spec and generate endpoint pages). The tab-level openapi
  // field alone only works in the dev server.
  docsJson.openapi = ['openapi.json']

  if (!docsJson.api) {
    docsJson.api = {
      baseUrl: 'https://connect.getseam.com',
      playground: { mode: 'simple' },
    }
  }

  await writeFile(docsJsonPath, JSON.stringify(docsJson, null, 2) + '\n')

  // Count what changed
  let openApiRefs = 0
  let staticRefs = 0
  const countRefs = (pages: any[]): void => {
    for (const page of pages) {
      if (typeof page === 'string') {
        if (page.startsWith('POST ')) openApiRefs++
        else staticRefs++
      } else if (page.group) {
        countRefs(page.pages)
      }
    }
  }
  for (const group of apiTab.groups) {
    countRefs(group.pages)
  }

  console.log(
    `Updated docs.json: ${openApiRefs} OpenAPI refs, ${staticRefs} static MDX refs`,
  )
}

// Run if called directly (standalone usage)
if (import.meta.url === `file://${process.argv[1]}`) {
  updateDocsJson()
}
