import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

import { siteSections } from './lib/config.js'

// Matches markdown links in SUMMARY.md: [Title](path/to/file.md)
const summaryLinkPattern = /\[([^\]]*)\]\(([^)]+)\)/g

function walkDir(dir: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      // Skip .gitbook directories (assets, includes, etc.)
      if (entry.name === '.gitbook') continue
      files.push(...walkDir(fullPath))
    } else if (entry.name.endsWith('.md')) {
      // Skip underscore-prefixed files (e.g., _report.md)
      if (entry.name.startsWith('_')) continue
      // Skip SUMMARY.md itself
      if (entry.name === 'SUMMARY.md') continue
      files.push(fullPath)
    }
  }
  return files
}

interface OrphanPage {
  section: string
  path: string
}

const orphans: OrphanPage[] = []

for (const section of siteSections) {
  const summaryPath = join(section.root, 'SUMMARY.md')
  const contents = readFileSync(summaryPath, 'utf-8')

  // Collect all file paths referenced in SUMMARY.md
  const referencedPaths = new Set<string>()
  for (const match of contents.matchAll(summaryLinkPattern)) {
    const linkPath = match[2] ?? ''
    if (linkPath.startsWith('http') || linkPath.startsWith('#')) continue
    // Strip anchor fragments
    const cleanPath = linkPath.split('#')[0] ?? ''
    if (cleanPath !== '') {
      referencedPaths.add(cleanPath)
    }
  }

  // Walk all markdown files in this section
  const allPages = walkDir(section.root)

  for (const fullPath of allPages) {
    const relPath = relative(section.root, fullPath)
    if (!referencedPaths.has(relPath)) {
      orphans.push({ section: section.name, path: relPath })
    }
  }
}

if (orphans.length > 0) {
  // Group by section
  const bySection = new Map<string, string[]>()
  for (const { section, path } of orphans) {
    const existing = bySection.get(section) ?? []
    existing.push(path)
    bySection.set(section, existing)
  }

  // eslint-disable-next-line no-console
  console.error(
    `Found ${orphans.length} page(s) not referenced in SUMMARY.md:\n`,
  )
  for (const [section, paths] of bySection) {
    // eslint-disable-next-line no-console
    console.error(`  [${section}]`)
    for (const p of paths) {
      // eslint-disable-next-line no-console
      console.error(`    ${p}`)
    }
    // eslint-disable-next-line no-console
    console.error('')
  }
  process.exit(1)
} else {
  // eslint-disable-next-line no-console
  console.log('All pages are referenced in SUMMARY.md.')
}
