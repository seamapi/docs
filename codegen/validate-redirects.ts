import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { siteSections } from './lib/config.js'

// Parse the redirects section from .gitbook.yaml.
// Each redirect line is: "  source-path: target-path"
const gitbookYaml = readFileSync('.gitbook.yaml', 'utf-8')
const lines = gitbookYaml.split('\n')

interface Redirect {
  line: number
  source: string
  target: string
}

const redirects: Redirect[] = []
let inRedirects = false

for (let i = 0; i < lines.length; i++) {
  const line = lines[i] ?? ''

  if (line === 'redirects:') {
    inRedirects = true
    continue
  }

  // A non-indented, non-empty line ends the redirects section
  if (inRedirects && line !== '' && !line.startsWith(' ')) {
    break
  }

  if (!inRedirects) continue

  const match = line.match(/^\s+(.+?):\s+(.+)$/)
  if (match?.[1] != null && match[2] != null) {
    redirects.push({ line: i + 1, source: match[1], target: match[2] })
  }
}

// Check if a path resolves to a page as a file, URL slug, or directory index.
function pageExists(fullPath: string): boolean {
  // Exact file match (e.g., quickstart.md)
  if (existsSync(fullPath)) return true
  // Directory with README.md (e.g., core-concepts/ → core-concepts/README.md)
  if (existsSync(join(fullPath, 'README.md'))) return true
  // URL-style target without .md extension (e.g., api/devices → api/devices.md)
  if (!fullPath.endsWith('.md') && existsSync(fullPath + '.md')) return true
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

interface BrokenRedirect {
  line: number
  source: string
  target: string
}

const broken: BrokenRedirect[] = []

for (const redirect of redirects) {
  if (!resolveTarget(redirect.target)) {
    broken.push(redirect)
  }
}

if (broken.length > 0) {
  // eslint-disable-next-line no-console
  console.error(
    `Found ${broken.length} redirect(s) with missing target(s) in .gitbook.yaml:\n`,
  )
  for (const { line, source, target } of broken) {
    // eslint-disable-next-line no-console
    console.error(`  line ${line}: ${source}`)
    // eslint-disable-next-line no-console
    console.error(`    target: ${target}\n`)
  }
  process.exit(1)
} else {
  // eslint-disable-next-line no-console
  console.log('All .gitbook.yaml redirect targets are valid.')
}
