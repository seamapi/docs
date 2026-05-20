import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

import {
  baseUrl,
  type SiteSection,
  siteSections,
  siteUrlPrefix,
} from './lib/config.js'

function findSiteSection(filePath: string): SiteSection | undefined {
  return siteSections.find(({ root }) => filePath.startsWith(root + '/'))
}

const absoluteUrlPattern = new RegExp(
  `${baseUrl.replaceAll('.', '\\.')}[^)"<>\\s]+`,
  'g',
)

// Matches markdown links like [text](path) but not images ![text](path),
// absolute URLs, anchors-only, GitBook template tags, or angle-bracket paths.
// The capture group handles escaped parens \( and \) inside the link target.
const relativeLinkPattern =
  /(?<!!)\]\((?!https?:\/\/|mailto:|#|{%|<|cursor:|file:)((?:[^)\\]|\\.)+)\)/g

// Matches HTML links like <a href="path"> but not external URLs or anchors.
const htmlRelativeLinkPattern = /<a\s+href="(?!https?:\/\/|mailto:|#)([^"]+)"/g

// Matches HTML links with absolute docs.seam.co URLs.
const htmlAbsoluteUrlPattern = new RegExp(
  `<a\\s+href="(${baseUrl.replaceAll('.', '\\.')}[^"]+)"`,
  'g',
)

interface BrokenLink {
  file: string
  line: number
  url: string
  reason: string
}

const brokenLinks: BrokenLink[] = []

function walkDir(dir: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath))
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }
  return files
}

function checkAbsoluteUrl(file: string, line: number, rawUrl: string): void {
  const cleanUrl = rawUrl.replaceAll('\\', '')
  const url = new URL(cleanUrl)
  url.pathname = url.pathname.replace(siteUrlPrefix, '')

  const pathname = url.pathname

  const section = siteSections.find(({ urlPrefix }) =>
    urlPrefix === ''
      ? true
      : pathname.startsWith(urlPrefix + '/') || pathname === urlPrefix,
  )

  if (section == null) {
    brokenLinks.push({
      file,
      line,
      url: rawUrl,
      reason: 'No matching site section',
    })
    return
  }

  const pagePath = pathname.replace(section.urlPrefix, '')
  const targetRoot = join(section.root, pagePath)

  const targetMd = `${targetRoot}.md`
  const targetReadme = join(targetRoot, 'README.md')

  if (!existsSync(targetMd) && !existsSync(targetReadme)) {
    brokenLinks.push({
      file,
      line,
      url: rawUrl,
      reason: `File not found: ${targetMd} or ${targetReadme}`,
    })
  }
}

function checkRelativeLink(file: string, line: number, rawLink: string): void {
  // Strip GitBook "mention" hint and anchor
  const linkPath = rawLink.replace(/ "mention"$/, '').split('#')[0]
  if (linkPath == null || linkPath === '') return

  // Strip GitBook markdown escapes and decode URL encoding
  const cleanPath = decodeURIComponent(
    linkPath.replaceAll('\\(', '(').replaceAll('\\)', ')').replaceAll('\\', ''),
  )

  const fileDir = dirname(file)
  const resolved = resolve(fileDir, cleanPath)

  // Check asset references exist
  if (linkPath.includes('.gitbook/assets')) {
    if (!existsSync(resolved)) {
      brokenLinks.push({
        file,
        line,
        url: rawLink,
        reason: `Asset not found: ${resolved}`,
      })
    }
    return
  }

  // Check if target exists as file, as README.md in directory, or as directory
  if (!existsSync(resolved) && !existsSync(join(resolved, 'README.md'))) {
    brokenLinks.push({
      file,
      line,
      url: rawLink,
      reason: `File not found: ${resolved}`,
    })
    return
  }

  // Check that relative links don't cross site section boundaries
  const sourceSection = findSiteSection(file)
  const targetSection = findSiteSection(resolved)
  if (
    sourceSection != null &&
    targetSection != null &&
    sourceSection.root !== targetSection.root
  ) {
    brokenLinks.push({
      file,
      line,
      url: rawLink,
      reason: `Cross-section relative link: "${sourceSection.name}" -> "${targetSection.name}". Use an absolute URL instead`,
    })
  }
}

const files = walkDir('docs')

for (const file of files) {
  const contents = readFileSync(file, 'utf-8')
  const lines = contents.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const lineText = lines[i]
    if (lineText == null) continue

    // Check absolute docs.seam.co URLs
    for (const match of lineText.matchAll(absoluteUrlPattern)) {
      const rawUrl = match[0].replace(/[).,]*$/, '')
      checkAbsoluteUrl(file, i + 1, rawUrl)
    }

    // Check relative links
    for (const match of lineText.matchAll(relativeLinkPattern)) {
      const rawLink = match[1]
      if (rawLink == null) continue
      checkRelativeLink(file, i + 1, rawLink)
    }

    // Check HTML href links (relative)
    for (const match of lineText.matchAll(htmlRelativeLinkPattern)) {
      const rawLink = match[1]
      if (rawLink == null) continue
      checkRelativeLink(file, i + 1, rawLink)
    }

    // Check HTML href links (absolute docs.seam.co URLs)
    for (const match of lineText.matchAll(htmlAbsoluteUrlPattern)) {
      const rawUrl = match[1]
      if (rawUrl == null) continue
      checkAbsoluteUrl(file, i + 1, rawUrl)
    }
  }
}

if (brokenLinks.length > 0) {
  // Group by broken target
  const groups = new Map<string, Array<{ file: string; line: number }>>()
  for (const { file, line, url } of brokenLinks) {
    const existing = groups.get(url) ?? []
    existing.push({ file, line })
    groups.set(url, existing)
  }

  // eslint-disable-next-line no-console
  console.error(
    `Found ${brokenLinks.length} broken link(s) across ${groups.size} unique target(s):\n`,
  )
  for (const [target, sources] of groups) {
    // eslint-disable-next-line no-console
    console.error(`  ${target}`)
    for (const { file, line } of sources) {
      // eslint-disable-next-line no-console
      console.error(`    - ${file}:${line}`)
    }
    // eslint-disable-next-line no-console
    console.error('')
  }
  process.exit(1)
} else {
  // eslint-disable-next-line no-console
  console.log('All links are valid.')
}
