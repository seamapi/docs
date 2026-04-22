import { existsSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

import YAML from 'yaml'

import { siteSections } from './lib/config.js'

interface GitbookConfig {
  root?: string
  redirects?: Record<string, string>
}

interface BrokenRedirect {
  configPath: string
  source: string
  target: string
  reason: string
}

function findForeignSection(path: string, ownRoot: string): string | undefined {
  for (const other of siteSections) {
    if (other.root === ownRoot) continue
    const prefix = other.urlPrefix.replace(/^\//, '') + '/'
    if (prefix !== '/' && path.startsWith(prefix)) return other.name
  }
  return undefined
}

const broken: BrokenRedirect[] = []

interface ConfigToValidate {
  configPath: string
  root: string
  redirects: Record<string, string>
}

const configs: ConfigToValidate[] = []

for (const section of siteSections) {
  const configPath = join(section.root, '.gitbook.yaml')
  if (!existsSync(configPath)) continue
  const config = YAML.parse(readFileSync(configPath, 'utf-8')) as GitbookConfig
  configs.push({
    configPath,
    root: section.root,
    redirects: config.redirects ?? {},
  })
}

const rootConfigPath = '.gitbook.yaml'
const rootIsSection = configs.some((c) => c.configPath === rootConfigPath)
if (!rootIsSection && existsSync(rootConfigPath)) {
  const config = YAML.parse(
    readFileSync(rootConfigPath, 'utf-8'),
  ) as GitbookConfig
  const root = (config.root ?? './').replace(/^\.\//, '').replace(/\/$/, '')
  configs.push({
    configPath: rootConfigPath,
    root,
    redirects: config.redirects ?? {},
  })
}

for (const { configPath, root, redirects } of configs) {
  for (const [source, target] of Object.entries(redirects)) {
    const foreignSource = findForeignSection(source, root)
    if (foreignSource != null) {
      broken.push({
        configPath,
        source,
        target,
        reason: `Source belongs to the "${foreignSource}" section. Move this redirect to that section's .gitbook.yaml`,
      })
      continue
    }

    const foreignTarget = findForeignSection(target, root)
    if (foreignTarget != null) {
      broken.push({
        configPath,
        source,
        target,
        reason: `Target points to the "${foreignTarget}" section. Use a site-level redirect in the GitBook UI instead`,
      })
      continue
    }

    const fullPath = join(root, target)
    if (!existsSync(fullPath) || !statSync(fullPath).isFile()) {
      broken.push({
        configPath,
        source,
        target,
        reason: `File not found: ${fullPath}`,
      })
    }
  }
}

if (broken.length > 0) {
  // eslint-disable-next-line no-console
  console.error(`Found ${broken.length} redirect issue(s):\n`)
  for (const { configPath, source, target, reason } of broken) {
    // eslint-disable-next-line no-console
    console.error(`  [${configPath}] ${source}`)
    // eslint-disable-next-line no-console
    console.error(`    target: ${target}`)
    // eslint-disable-next-line no-console
    console.error(`    ${reason}\n`)
  }
  process.exit(1)
} else {
  // eslint-disable-next-line no-console
  console.log('All redirect targets are valid.')
}
