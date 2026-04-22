import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { siteSections } from './lib/config.js'

// Matches markdown links in SUMMARY.md: * [Title](path/to/file.md)
const summaryLinkPattern = /\[([^\]]*)\]\(([^)]+)\)/g

// Matches ## headings that define groups in SUMMARY.md
const groupHeadingPattern = /^## (.+)$/

function slugify(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

interface PathMismatch {
  section: string
  line: number
  title: string
  path: string
  reason: string
}

const mismatches: PathMismatch[] = []

for (const section of siteSections) {
  const summaryPath = join(section.root, 'SUMMARY.md')
  if (!existsSync(summaryPath)) continue

  const contents = readFileSync(summaryPath, 'utf-8')
  const lines = contents.split('\n')

  let currentGroup: string | null = null

  for (let i = 0; i < lines.length; i++) {
    const lineText = lines[i]
    if (lineText == null) continue

    // Track current ## group heading
    const headingMatch = lineText.match(groupHeadingPattern)
    if (headingMatch?.[1] != null) {
      currentGroup = slugify(headingMatch[1])
      continue
    }

    for (const match of lineText.matchAll(summaryLinkPattern)) {
      const title = match[1] ?? ''
      const linkPath = match[2] ?? ''

      // Skip external links and anchors
      if (linkPath.startsWith('http') || linkPath.startsWith('#')) continue

      const fullPath = join(section.root, linkPath)

      // Check 1: file exists
      if (!existsSync(fullPath)) {
        mismatches.push({
          section: section.name,
          line: i + 1,
          title,
          path: linkPath,
          reason: `File not found: ${fullPath}`,
        })
        continue
      }

      // Check 2: file path starts with the group slug
      if (currentGroup != null && !linkPath.startsWith(currentGroup + '/')) {
        mismatches.push({
          section: section.name,
          line: i + 1,
          title,
          path: linkPath,
          reason: `Path should start with "${currentGroup}/" (listed under "## ${currentGroup}")`,
        })
      }
    }
  }
}

if (mismatches.length > 0) {
  // eslint-disable-next-line no-console
  console.error(`Found ${mismatches.length} SUMMARY.md path issue(s):\n`)
  for (const { section, line, title, path, reason } of mismatches) {
    // eslint-disable-next-line no-console
    console.error(`  [${section}] line ${line}: "${title}"`)
    // eslint-disable-next-line no-console
    console.error(`    ${path}`)
    // eslint-disable-next-line no-console
    console.error(`    ${reason}\n`)
  }
  process.exit(1)
} else {
  // eslint-disable-next-line no-console
  console.log('All SUMMARY.md paths are valid and consistent.')
}
