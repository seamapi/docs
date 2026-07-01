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
 * Check if a page reference is a generated events page (e.g. "api/access_codes/events").
 */
function isEventsPage(page: string): boolean {
  return page.startsWith('api/') && page.endsWith('/events')
}

/**
 * Check if a page reference is a generated errors/warnings page
 * (e.g. "api/devices/errors").
 */
function isErrorsPage(page: string): boolean {
  return page.startsWith('api/') && page.endsWith('/errors')
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

        // Keep generated events pages as MDX (not endpoints, but real pages)
        if (isEventsPage(page)) return page

        // Keep generated errors/warnings pages as MDX (not endpoints)
        if (isErrorsPage(page)) return page

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

  // Move orphaned object pages into their matching subgroups
  for (const group of apiTab.groups) {
    nestObjectPagesInSubgroups(group.pages)
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
 * Move object pages that sit at a group level into matching subgroups.
 * e.g. "api/devices/simulate/object" floating in the Devices group
 * gets moved to be the first item in the Simulations subgroup
 * (whose endpoints share the /devices/simulate/ prefix).
 */
function nestObjectPagesInSubgroups(pages: any[]): void {
  const objectPages: Array<{ idx: number; page: string; prefix: string }> = []
  const subgroups: Array<{ idx: number; group: any; prefixes: Set<string> }> =
    []

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    if (typeof page === 'string' && isObjectPage(page)) {
      // e.g. "api/devices/simulate/object" → "/devices/simulate"
      const prefix = page.replace(/^api/, '').replace(/\/object$/, '')
      objectPages.push({ idx: i, page, prefix })
    } else if (typeof page === 'object' && page.group) {
      const navPaths = collectNavPaths(page.pages)
      const prefixes = new Set([...navPaths].map(getPathPrefix))
      subgroups.push({ idx: i, group: page, prefixes })
      // Recurse into nested subgroups
      nestObjectPagesInSubgroups(page.pages)
    }
  }

  // Match each orphaned object page to a subgroup
  const toRemove = new Set<number>()
  for (const obj of objectPages) {
    for (const sub of subgroups) {
      if (sub.prefixes.has(obj.prefix)) {
        // Already inside this subgroup? Skip.
        if (sub.group.pages.includes(obj.page)) break
        // Insert as first item in the subgroup
        sub.group.pages.unshift(obj.page)
        toRemove.add(obj.idx)
        break
      }
    }
  }

  // Remove relocated pages from the parent (in reverse to preserve indices)
  for (const idx of [...toRemove].sort((a, b) => b - a)) {
    pages.splice(idx, 1)
  }
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

/**
 * Insert each generated events page into the nav directly after its object
 * page (e.g. "api/access_grants/events" after "api/access_grants/object").
 * Idempotent: skips routes whose events page is already present. Call after the
 * events pages have been written to disk.
 */
export async function insertEventsPagesIntoNav(
  eventRoutes: string[],
): Promise<void> {
  if (eventRoutes.length === 0) return

  const docsJsonPath = join(
    import.meta.dirname,
    '..',
    'mintlify-docs',
    'docs.json',
  )
  const docsJson = JSON.parse(await readFile(docsJsonPath, 'utf8'))
  const apiTab = docsJson.navigation?.tabs?.find(
    (t: any) => t.tab === 'API Reference',
  )
  if (!apiTab?.groups) return

  let inserted = 0
  for (const routePath of eventRoutes) {
    const result = insertIntoGroups(
      apiTab.groups,
      `api${routePath}/object`,
      `api${routePath}/events`,
    )
    if (result === 'inserted') inserted++
  }

  if (inserted > 0) {
    await writeFile(docsJsonPath, JSON.stringify(docsJson, null, 2) + '\n')
    console.log(`  Added ${inserted} events page(s) to nav`)
  }
}

/**
 * Insert each generated errors/warnings page into the nav after its events page
 * (falling back to its object page when there is no events page), e.g.
 * "api/devices/errors" after "api/devices/events". Idempotent: skips routes
 * whose errors page is already present. Call after the errors pages have been
 * written to disk and after events pages are wired in.
 */
export async function insertErrorPagesIntoNav(
  errorRoutes: string[],
): Promise<void> {
  if (errorRoutes.length === 0) return

  const docsJsonPath = join(
    import.meta.dirname,
    '..',
    'mintlify-docs',
    'docs.json',
  )
  const docsJson = JSON.parse(await readFile(docsJsonPath, 'utf8'))
  const apiTab = docsJson.navigation?.tabs?.find(
    (t: any) => t.tab === 'API Reference',
  )
  if (!apiTab?.groups) return

  let inserted = 0
  for (const routePath of errorRoutes) {
    const errorsPage = `api${routePath}/errors`
    // Prefer anchoring after the events page so the sidebar reads
    // object -> events -> errors; fall back to the object page.
    for (const anchor of [`api${routePath}/events`, `api${routePath}/object`]) {
      const result = insertIntoGroups(apiTab.groups, anchor, errorsPage)
      if (result === 'inserted') inserted++
      if (result !== 'not-found') break
    }
  }

  if (inserted > 0) {
    await writeFile(docsJsonPath, JSON.stringify(docsJson, null, 2) + '\n')
    console.log(`  Added ${inserted} errors page(s) to nav`)
  }
}

/**
 * Insert `newPage` after `anchorPage`, searching every top-level nav group.
 * Returns the first non-'not-found' result (a page lives in one group only).
 */
function insertIntoGroups(
  groups: any[],
  anchorPage: string,
  newPage: string,
): 'inserted' | 'present' | 'not-found' {
  for (const group of groups) {
    const result = insertAfterPage(group.pages, anchorPage, newPage)
    if (result !== 'not-found') return result
  }
  return 'not-found'
}

/**
 * Recursively locate `anchorPage` in the nav tree and insert `newPage` right
 * after it. Returns 'inserted' when added, 'present' when already there, and
 * 'not-found' when the anchor page isn't in this subtree.
 */
function insertAfterPage(
  pages: any[],
  anchorPage: string,
  newPage: string,
): 'inserted' | 'present' | 'not-found' {
  const idx = pages.indexOf(anchorPage)
  if (idx !== -1) {
    if (pages.includes(newPage)) return 'present'
    pages.splice(idx + 1, 0, newPage)
    return 'inserted'
  }
  for (const page of pages) {
    if (typeof page === 'object' && page.group) {
      const result = insertAfterPage(page.pages, anchorPage, newPage)
      if (result !== 'not-found') return result
    }
  }
  return 'not-found'
}

// Run if called directly (standalone usage)
if (import.meta.url === `file://${process.argv[1]}`) {
  updateDocsJson()
}
