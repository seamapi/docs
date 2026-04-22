import { existsSync, readFileSync, statSync } from 'node:fs'
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

const redirects: Redirect[] = Object.entries(gitbookConfig.redirects ?? {}).map(
  ([source, target]) => ({ source, target }),
)

function pageExists(fullPath: string): boolean {
  if (existsSync(fullPath) && statSync(fullPath).isFile()) return true
  if (!fullPath.endsWith('.md') && existsSync(fullPath + '.md')) return true
  if (fullPath.endsWith('/README.md')) {
    const parentPath = fullPath.slice(0, -'/README.md'.length)
    if (existsSync(parentPath + '.md')) return true
  }
  return false
}

function resolveTarget(target: string): boolean {
  for (const section of siteSections) {
    if (section.urlPrefix === '') continue

    const prefix = section.urlPrefix.replace(/^\//, '') + '/'
    if (target.startsWith(prefix)) {
      const relativePath = target.slice(prefix.length)
      return pageExists(join(section.root, relativePath))
    }
  }

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
