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
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const apiPath = openApiMatch[1]!
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

  // Add new spec endpoints that aren't in the nav yet
  const addedPages = addMissingEndpoints(apiTab.groups, specPaths)
  if (addedPages.length > 0) {
    console.log(
      `Added ${addedPages.length} new endpoints to nav: ${addedPages.join(', ')}`,
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

/**
 * Collect all API paths already referenced in the nav tree.
 */
function collectNavPaths(pages: any[]): Set<string> {
  const paths = new Set<string>()
  for (const page of pages) {
    if (typeof page === 'string') {
      const match = page.match(/^POST (.+)$/)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (match) paths.add(match[1]!)
    } else if (typeof page === 'object' && page.group) {
      for (const p of collectNavPaths(page.pages)) {
        paths.add(p)
      }
    }
  }
  return paths
}

/**
 * Find the best matching group for an API path and insert the endpoint.
 * Matches by longest shared path prefix with existing endpoints in each group.
 */
function addMissingEndpoints(groups: any[], specPaths: Set<string>): string[] {
  const allNavPaths = new Set<string>()
  for (const group of groups) {
    for (const p of collectNavPaths(group.pages)) {
      allNavPaths.add(p)
    }
  }

  const missing = [...specPaths].filter((p) => !allNavPaths.has(p))
  if (missing.length === 0) return []

  const added: string[] = []
  for (const path of missing) {
    if (insertIntoMatchingGroup(groups, path)) {
      added.push(path)
    }
  }
  return added
}

/**
 * Get the namespace prefix for an API path (e.g. "/access_methods/unlock_door" → "/access_methods").
 * For nested namespaces like "/acs/users/list", returns "/acs/users".
 */
function getPathPrefix(path: string): string {
  const parts = path.split('/').filter(Boolean)
  if (parts.length <= 1) return path
  return '/' + parts.slice(0, -1).join('/')
}

/**
 * Try to insert a path into the matching nav group. Returns true if inserted.
 * Walks the tree recursively to find the deepest matching subgroup.
 */
function insertIntoMatchingGroup(groups: any[], path: string): boolean {
  const prefix = getPathPrefix(path)
  const ref = `POST ${path}`

  for (const group of groups) {
    if (!group.pages) continue

    // Check subgroups first (deepest match wins)
    const subgroups = group.pages.filter(
      (p: any) => typeof p === 'object' && p.group,
    )
    if (insertIntoMatchingGroup(subgroups, path)) return true

    // Check if this group's existing endpoints share our prefix
    const groupPaths = collectNavPaths(group.pages)
    const groupPrefixes = new Set([...groupPaths].map(getPathPrefix))
    if (groupPrefixes.has(prefix)) {
      // Insert alphabetically among the POST refs
      const insertIdx = group.pages.findIndex(
        (p: any) => typeof p === 'string' && p > ref && p.startsWith('POST '),
      )
      if (insertIdx === -1) {
        // Find the last POST ref and insert after it (before any subgroups at the end)
        let lastPostIdx = -1
        for (let i = 0; i < group.pages.length; i++) {
          if (
            typeof group.pages[i] === 'string' &&
            group.pages[i].startsWith('POST ')
          ) {
            lastPostIdx = i
          }
        }
        group.pages.splice(lastPostIdx + 1, 0, ref)
      } else {
        group.pages.splice(insertIdx, 0, ref)
      }
      return true
    }
  }
  return false
}

// Run if called directly (standalone usage)
if (import.meta.url === `file://${process.argv[1]}`) {
  updateDocsJson()
}
