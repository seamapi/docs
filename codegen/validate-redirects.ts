import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import YAML from 'yaml'

import { siteSections } from './lib/config.js'

const gitbookConfig = YAML.parse(readFileSync('.gitbook.yaml', 'utf-8')) as {
  redirects?: Record<string, string>
}

interface Redirect {
  source: string
  target: string
}

const redirects: Redirect[] = Object.entries(
  gitbookConfig.redirects ?? {},
).map(([source, target]) => ({ source, target }))

// Check if a path resolves to a page as a file, URL slug, or directory index.
function pageExists(fullPath: string): boolean {
  // Exact file match (e.g., quickstart.md)
  if (existsSync(fullPath)) return true
  // Directory with README.md (e.g., core-concepts/ → core-concepts/README.md)
  if (existsSync(join(fullPath, 'README.md'))) return true
  // URL-style target without .md extension (e.g., api/devices → api/devices.md)
  if (!fullPath.endsWith('.md') && existsSync(fullPath + '.md')) return true
  // README.md targets resolve as directory URLs in GitBook, so check if the
  // parent path resolves as a page (e.g., foo/README.md → foo.md).
  if (fullPath.endsWith('/README.md')) {
    const parentPath = fullPath.slice(0, -'/README.md'.length)
    if (existsSync(parentPath + '.md')) return true
  }
  return false
}

// Resolve a redirect target to check it points to a real page.
// Targets may reference other site sections via URL prefix.
function resolveTarget(target: string): boolean {
  // Try matching against site sections by URL prefix (most specific first).
  // The siteSections array is already ordered with more-specific prefixes first.
  for (const section of siteSections) {
    if (section.urlPrefix === '') continue

    const prefix = section.urlPrefix.replace(/^\//, '') + '/'
    if (target.startsWith(prefix)) {
      const relativePath = target.slice(prefix.length)
      return pageExists(join(section.root, relativePath))
    }
  }

  // Fall back to the default section (Guides, urlPrefix '')
  const guidesSection = siteSections.find((s) => s.urlPrefix === '')
  if (guidesSection == null) return false

  return pageExists(join(guidesSection.root, target))
}

const broken: Redirect[] = redirects.filter((r) => !resolveTarget(r.target))

if (broken.length > 0) {
  // eslint-disable-next-line no-console
  console.error(
    `Found ${broken.length} redirect(s) with missing target(s) in .gitbook.yaml:\n`,
  )
  for (const { source, target } of broken) {
    // eslint-disable-next-line no-console
    console.error(`  ${source}`)
    // eslint-disable-next-line no-console
    console.error(`    target: ${target}\n`)
  }
  process.exit(1)
} else {
  // eslint-disable-next-line no-console
  console.log('All .gitbook.yaml redirect targets are valid.')
}
