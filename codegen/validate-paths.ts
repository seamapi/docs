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

function slugFromPath(linkPath: string): string {
  return linkPath
    .replace(/README\.md$/, '')
    .replace(/\.md$/, '')
    .replace(/\/$/, '')
    .split('/')
    .filter(Boolean)
    .pop() ?? ''
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

  // Track nesting: each entry is { level, slug, path }
  // GitBook builds URLs by joining ancestor slugs, so child file paths
  // should be under their parent's directory.
  const parentStack: Array<{ level: number; slug: string; path: string }> = []

  for (let i = 0; i < lines.length; i++) {
    const lineText = lines[i]
    if (lineText == null) continue

    // Track current ## group heading
    const headingMatch = lineText.match(groupHeadingPattern)
    if (headingMatch?.[1] != null) {
      currentGroup = slugify(headingMatch[1])
      continue
    }

    // Only process list items
    const stripped = lineText.trimStart()
    if (!stripped.startsWith('* [')) continue

    const indent = lineText.length - stripped.length
    const level = Math.floor(indent / 2)

    for (const match of stripped.matchAll(summaryLinkPattern)) {
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

      // Check 3: nested items should have paths under their parent's directory.
      // GitBook builds published URLs from the SUMMARY.md tree, so a child
      // nested under a parent gets a URL like /parent-slug/child-slug.
      // The file path must match this structure.
      // Trim stack to current level
      while (parentStack.length > 0) {
        const top = parentStack[parentStack.length - 1]
        if (top != null && top.level >= level) parentStack.pop()
        else break
      }

      const slug = slugFromPath(linkPath)
      const parent =
        parentStack.length > 0
          ? parentStack[parentStack.length - 1]
          : undefined

      if (parent != null) {
        // The parent's path determines the expected directory prefix.
        // e.g., parent path "access_codes/simulate/README.md" means
        // children should start with "access_codes/simulate/".
        const parentDir = parent.path
          .replace(/README\.md$/, '')
          .replace(/\.md$/, '/')
        if (!linkPath.startsWith(parentDir)) {
          const publishedUrl =
            section.urlPrefix +
            '/' +
            [...parentStack.map((p) => p.slug), slug].join('/')
          mismatches.push({
            section: section.name,
            line: i + 1,
            title,
            path: linkPath,
            reason: `Path should start with "${parentDir}" to match published URL ${publishedUrl}`,
          })
        }
      }

      if (slug !== '') {
        parentStack.push({ level, slug, path: linkPath })
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
