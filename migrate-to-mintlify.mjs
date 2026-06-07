#!/usr/bin/env node
/**
 * GitBook → Mintlify migration script for Seam docs.
 * Converts all .md files from docs/ into mintlify-docs/ with Mintlify MDX syntax.
 * Generates docs.json from SUMMARY.md.
 */

import fs from 'fs'
import path from 'path'

const SRC = path.resolve('docs')
const DEST = path.resolve('mintlify-docs')

// ─── Helpers ────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    ensureDir(dest)
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child))
    }
  } else {
    ensureDir(path.dirname(dest))
    fs.copyFileSync(src, dest)
  }
}

// ─── GitBook → Mintlify content conversion ──────────────────────────────────

function convertContent(content, filePath) {
  let out = content

  // 1. Convert {% tabs %} / {% tab title="X" %} / {% endtab %} / {% endtabs %}
  out = out.replace(/\{%\s*tabs\s*%\}/g, '<Tabs>')
  out = out.replace(/\{%\s*endtabs\s*%\}/g, '</Tabs>')
  out = out.replace(/\{%\s*tab\s+title="([^"]+)"\s*%\}/g, '<Tab title="$1">')
  out = out.replace(/\{%\s*endtab\s*%\}/g, '</Tab>')

  // 2. Convert {% hint style="X" %} / {% endhint %}
  const hintMap = {
    info: 'Info',
    warning: 'Warning',
    danger: 'Danger',
    success: 'Check',
    tip: 'Tip',
  }
  out = out.replace(
    /\{%\s*hint\s+style="([^"]+)"\s*%\}/g,
    (_, style) => `<${hintMap[style] || 'Note'}>`,
  )
  out = out.replace(/\{%\s*endhint\s*%\}/g, (match) => {
    // Find the most recent unclosed hint tag
    // We'll do a second pass to close properly
    return '%%ENDHINT%%'
  })
  // Now pair up the endhint markers with their opening tags
  out = closeHintTags(out)

  // 3. Convert {% embed url="..." %} ... {% endembed %}
  out = out.replace(
    /\{%\s*embed\s+url="([^"]+)"\s*%\}[\s\S]*?\{%\s*endembed\s*%\}/g,
    (_, url) => {
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoId = extractYouTubeId(url)
        if (videoId) {
          return `<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/${videoId}"
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>`
        }
      }
      return `<iframe src="${url}" width="100%" height="400" />`
    },
  )

  // 4. Convert {% code overflow="wrap" %} ... {% endcode %}
  // Just strip the wrapper, keep the code block inside
  out = out.replace(/\{%\s*code\s+[^%]*%\}\n?/g, '')
  out = out.replace(/\{%\s*endcode\s*%\}\n?/g, '')

  // 5. Convert {% file src="..." %} to a download link
  out = out.replace(/\{%\s*file\s+src="([^"]+)"\s*%\}/g, (_, src) => {
    const filename = path.basename(src)
    return `[📄 ${filename}](${src})`
  })

  // 6. Convert {% openapi ... %} blocks
  out = out.replace(
    /\\?\{%\s*openapi\s+[^%]*%\\?\}[\s\S]*?\\?\{%\s*endopenapi\s*%\\?\}/g,
    (match) => {
      // Extract path and method if available
      const pathMatch = match.match(/path="([^"]+)"/)
      const methodMatch = match.match(/method="([^"]+)"/)
      if (pathMatch && methodMatch) {
        return `> **\`${methodMatch[1].toUpperCase()}\`** \`${pathMatch[1]}\`\n>\n> See the [API Reference](/api-reference${pathMatch[1]}) for details.`
      }
      return ''
    },
  )

  // 7. Convert {% swagger ... %} blocks (same as openapi)
  out = out.replace(
    /\{%\s*swagger\s+[^%]*%\}[\s\S]*?\{%\s*endswagger\s*%\}/g,
    '',
  )

  // 8. Convert {% columns %} / {% column %} blocks
  out = out.replace(/\{%\s*columns\s*%\}/g, '<Columns cols={2}>')
  out = out.replace(/\{%\s*endcolumns\s*%\}/g, '</Columns>')
  out = out.replace(/\{%\s*column\s*%\}/g, '<div>')
  out = out.replace(/\{%\s*endcolumn\s*%\}/g, '</div>')

  // 9. Convert GitBook card tables to Mintlify CardGroup
  out = convertCardTables(out)

  // 10. Fix image paths: .gitbook/assets/ → /images/
  out = out.replace(/(?:\.\.\/)*.gitbook\/assets\//g, '/images/')

  // 11. Strip GitBook frontmatter description-only and convert to Mintlify format
  out = convertFrontmatter(out, filePath)

  // 12. Remove escaped GitBook tags (e.g. \{% ... %\})
  out = out.replace(/\\{%/g, '{%')
  out = out.replace(/%\\}/g, '%}')

  // 13. Self-close void HTML elements for MDX compatibility
  // <br> → <br />
  out = out.replace(/<br\s*>/g, '<br />')
  // <img ...> → <img ... /> (only if not already self-closed)
  out = out.replace(/<img\s([^>]*[^/])>/g, '<img $1 />')
  // <hr> → <hr />
  out = out.replace(/<hr\s*>/g, '<hr />')

  // 14. Convert HTML comments <!-- --> to MDX comments {/* */}
  out = out.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}')

  return out
}

function closeHintTags(content) {
  // Replace %%ENDHINT%% markers with the correct closing tag
  // by scanning backwards for the matching opening tag
  const lines = content.split('\n')
  const openStack = []
  const result = []

  for (const line of lines) {
    // Check for opening hint tags
    const openMatch = line.match(/<(Info|Warning|Danger|Check|Tip|Note)>/)
    if (openMatch) {
      openStack.push(openMatch[1])
    }

    if (line.includes('%%ENDHINT%%')) {
      const tag = openStack.pop() || 'Note'
      result.push(line.replace('%%ENDHINT%%', `</${tag}>`))
    } else {
      result.push(line)
    }
  }
  return result.join('\n')
}

function extractYouTubeId(url) {
  const patterns = [/youtu\.be\/([^?&]+)/, /[?&]v=([^?&]+)/, /embed\/([^?&]+)/]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  return null
}

function convertCardTables(content) {
  return content.replace(
    /<table[^>]*data-view="cards"[^>]*>[\s\S]*?<\/table>/g,
    (match) => {
      // Parse the thead to identify column semantics
      const theadMatch = match.match(/<thead>([\s\S]*?)<\/thead>/)
      const colTypes = [] // 'title', 'desc', 'cover', 'target', 'hidden'
      if (theadMatch) {
        const thRegex = /<th([^>]*)>/g
        let thMatch
        while ((thMatch = thRegex.exec(theadMatch[1])) !== null) {
          const attrs = thMatch[1]
          if (attrs.includes('data-card-target')) {
            colTypes.push('target')
          } else if (attrs.includes('data-card-cover')) {
            colTypes.push('cover')
          } else if (attrs.includes('data-hidden')) {
            colTypes.push('hidden')
          } else if (colTypes.length === 0) {
            colTypes.push('title')
          } else {
            colTypes.push('desc')
          }
        }
      }

      const cards = []
      const rowRegex = /<tr>([\s\S]*?)<\/tr>/g
      let rowMatch
      // Skip thead rows
      const tbodyMatch = match.match(/<tbody>([\s\S]*?)<\/tbody>/)
      if (!tbodyMatch) return match
      const tbody = tbodyMatch[1]

      while ((rowMatch = rowRegex.exec(tbody)) !== null) {
        const rowContent = rowMatch[1]
        const cells = []
        const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/g
        let cellMatch
        while ((cellMatch = cellRegex.exec(rowContent)) !== null) {
          cells.push(cellMatch[1].trim())
        }

        let title = ''
        let description = ''
        let href = ''
        let img = ''

        for (let i = 0; i < cells.length && i < colTypes.length; i++) {
          const cell = cells[i]
          const type = colTypes[i]

          if (type === 'title') {
            title = cell
              .replace(/<\/?strong>/g, '')
              .replace(/<[^>]+>/g, '')
              .trim()
          } else if (type === 'desc') {
            description = cell.replace(/<[^>]+>/g, '').trim()
          } else if (type === 'target') {
            const linkMatch = cell.match(/<a\s+href="([^"]+)"/)
            if (linkMatch) href = linkMatch[1]
          } else if (type === 'cover') {
            const imgMatch = cell.match(/<a\s+href="([^"]+)"/)
            if (imgMatch) {
              img = imgMatch[1].replace(
                /(?:\.\.\/)*\.gitbook\/assets\//,
                '/images/',
              )
            }
          }
        }

        if (title) {
          let cardAttrs = `title="${title}"`
          if (href && !href.includes('broken')) {
            let cleanHref = href.replace(/\.md$/, '').replace(/\/README$/, '')
            if (!cleanHref.startsWith('http') && !cleanHref.startsWith('/')) {
              cleanHref = '/' + cleanHref
            }
            cardAttrs += ` href="${cleanHref}"`
          }
          if (img && !img.includes('broken')) {
            cardAttrs += ` img="${img}"`
          }
          cards.push(`<Card ${cardAttrs}>\n  ${description}\n</Card>`)
        }
      }

      if (cards.length === 0) return match
      return `<CardGroup cols={2}>\n${cards.join('\n')}\n</CardGroup>`
    },
  )
}

function convertFrontmatter(content, filePath) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n/)
  if (!fmMatch) {
    // No frontmatter — extract title from first heading
    const rest = content
    const titleMatch = rest.match(/^#\s+(.+)/m)
    if (titleMatch) {
      const title = titleMatch[1].trim()
      const body = rest.replace(/^#\s+.+\n*/m, '\n')
      return `---\ntitle: "${title.replace(/"/g, '\\"')}"\n---\n${body}`
    }
    return content
  }

  const fmBlock = fmMatch[1]
  const rest = content.slice(fmMatch[0].length)

  // Extract description (may be multi-line with >- block scalar)
  let description = ''
  const blockScalarMatch = fmBlock.match(
    /description:\s*>-?\s*\n((?:\s{2,}.+\n?)+)/,
  )
  if (blockScalarMatch) {
    description = blockScalarMatch[1]
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .join(' ')
  } else {
    const simpleDescMatch = fmBlock.match(/description:\s*(.+)/)
    if (simpleDescMatch) {
      description = simpleDescMatch[1].trim().replace(/^['"]|['"]$/g, '')
    }
  }

  // Extract title from first # heading in rest
  let title = ''
  const titleMatch = rest.match(/^#\s+(.+)/m)
  if (titleMatch) {
    title = titleMatch[1].trim()
  }

  // Build new frontmatter
  let newFm = '---\n'
  if (title) newFm += `title: "${title.replace(/"/g, '\\"')}"\n`
  if (description) {
    newFm += `description: "${description.replace(/"/g, '\\"')}"\n`
  }
  newFm += '---\n'

  // Remove the H1 heading from the body since title is now in frontmatter
  let body = rest
  if (title) {
    body = body.replace(/^#\s+.+\n*/m, '\n')
  }

  return newFm + body
}

// ─── SUMMARY.md → docs.json navigation ─────────────────────────────────────

/**
 * Parse a single SUMMARY.md file into sections.
 * Returns an array of { name: string, pages: string[] } where each section
 * corresponds to a `## Header` in the SUMMARY.md. Pages before the first
 * `## Header` go into a section named "Getting Started".
 *
 * Page paths have .md stripped but README is preserved
 * (e.g. "use-cases/granting-access/README").
 */
function parseSummary(summaryPath, spacePrefix) {
  const content = fs.readFileSync(summaryPath, 'utf-8')
  const lines = content.split('\n')

  const sections = [] // [{name, pages: [string]}]
  let currentSection = null

  for (const line of lines) {
    // Section headers like ## Core Concepts
    const sectionMatch = line.match(/^## (.+?)(?:\s*<a[^>]*>.*<\/a>)?$/)
    if (sectionMatch) {
      currentSection = { name: sectionMatch[1].trim(), pages: [] }
      sections.push(currentSection)
      continue
    }

    // Page entries at any indent level: * [Title](path.md)
    const pageMatch = line.match(/^\s*\*\s+\[([^\]]+)\]\(([^)]+)\)/)
    if (pageMatch) {
      let pagePath = pageMatch[2]

      // Skip external links and broken references
      if (pagePath.startsWith('http')) continue
      if (
        pagePath.includes('broken-reference') ||
        pagePath.includes('/broken/')
      )
        continue

      // Strip .md extension and README (use index instead)
      pagePath = pagePath
        .replace(/\.md$/, '')
        .replace(/\/README$/, '')
        .replace(/^README$/, 'index')

      // Prefix with space name
      pagePath = spacePrefix ? `${spacePrefix}/${pagePath}` : pagePath

      if (!currentSection) {
        currentSection = { name: 'Getting Started', pages: [] }
        sections.unshift(currentSection)
      }

      currentSection.pages.push(pagePath)
    }
  }

  return sections
}

/**
 * Parse an API-style SUMMARY.md (api-reference or brand-guides) where
 * top-level items with children become groups, and top-level items
 * without children go into an "Overview" group.
 *
 * Returns an array of { group: string, pages: string[] }.
 */
function parseSummaryAsGroups(summaryPath, spacePrefix) {
  const content = fs.readFileSync(summaryPath, 'utf-8')
  const lines = content.split('\n')

  // Parse into a flat list with indent levels
  const items = [] // [{title, path, indent}]
  for (const line of lines) {
    const pageMatch = line.match(/^(\s*)\*\s+\[([^\]]+)\]\(([^)]+)\)/)
    if (!pageMatch) continue

    const indent = pageMatch[1].length
    const title = pageMatch[2]
    let pagePath = pageMatch[3]

    if (pagePath.startsWith('http')) continue
    if (pagePath.includes('broken-reference') || pagePath.includes('/broken/'))
      continue

    pagePath = pagePath
      .replace(/\.md$/, '')
      .replace(/\/README$/, '')
      .replace(/^README$/, 'index')
    pagePath = spacePrefix ? `${spacePrefix}/${pagePath}` : pagePath

    items.push({ title, path: pagePath, indent })
  }

  // Group: top-level items (indent 0) with children become named groups.
  // Top-level items without children go into "Overview".
  const groups = []
  let overviewGroup = null

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.indent > 0) continue // skip — already consumed as child

    // Collect all children (anything with indent > 0 that follows)
    const children = []
    let j = i + 1
    while (j < items.length && items[j].indent > 0) {
      children.push(items[j])
      j++
    }

    if (children.length > 0) {
      // This top-level item + its children form a group
      const pages = [item.path, ...children.map((c) => c.path)]
      groups.push({ group: item.title, pages })
      i = j - 1 // skip past children
    } else {
      // Standalone top-level page → "Overview" group
      if (!overviewGroup) {
        overviewGroup = { group: 'Overview', pages: [] }
        // Insert Overview at the front
        groups.unshift(overviewGroup)
      }
      overviewGroup.pages.push(item.path)
    }
  }

  return groups
}

/**
 * Build the full docs.json object with 3 tabs:
 *   - Guides (default tab, sidebar groups from ## sections)
 *   - API Reference (groups per API resource)
 *   - Brand Guides (groups per brand)
 */
function buildDocsJson(guidesSections, apiGroups, brandGroups) {
  return {
    $schema: 'https://mintlify.com/docs.json',
    name: 'Seam',
    theme: 'mint',
    logo: {
      light: '/images/seam-wordmark-light.png',
      dark: '/images/seam-wordmark-dark.png',
    },
    favicon: '/images/favicon.png',
    colors: {
      primary: '#2563EB',
      light: '#60A5FA',
      dark: '#1D4ED8',
    },
    navigation: {
      tabs: [
        {
          tab: 'Guides',
          groups: guidesSections.map((s) => ({
            group: s.name,
            pages: s.pages,
          })),
        },
        {
          tab: 'API Reference',
          groups: apiGroups,
        },
        {
          tab: 'Brand Guides',
          groups: brandGroups,
        },
      ],
    },
    topbar: {
      links: [
        {
          label: 'Console',
          href: 'https://console.seam.co',
        },
      ],
    },
    footer: {
      socials: {
        github: 'https://github.com/seamapi',
        website: 'https://seam.co',
      },
    },
    api: {
      baseUrl: 'https://connect.getseam.com',
    },
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  console.log('🚀 Starting GitBook → Mintlify migration...\n')

  // 1. Clean generated files but preserve images/ (which has checked-in branding)
  ensureDir(DEST)
  if (fs.existsSync(DEST)) {
    for (const entry of fs.readdirSync(DEST)) {
      if (entry === 'images') continue
      const fullPath = path.join(DEST, entry)
      fs.rmSync(fullPath, { recursive: true })
    }
    // Clean generated assets from images/ (everything except branding)
    const imagesDir = path.join(DEST, 'images')
    if (fs.existsSync(imagesDir)) {
      const brandingFiles = new Set([
        'favicon.png',
        'seam-wordmark-light.png',
        'seam-wordmark-dark.png',
      ])
      for (const entry of fs.readdirSync(imagesDir)) {
        if (brandingFiles.has(entry)) continue
        fs.rmSync(path.join(imagesDir, entry), { recursive: true })
      }
    }
  }

  // The docs repo has multiple GitBook spaces: api-reference/, brand-guides/, guides/
  // Each has its own .gitbook/assets/ and SUMMARY.md
  const spaces = fs.readdirSync(SRC).filter((entry) => {
    const fullPath = path.join(SRC, entry)
    return (
      fs.statSync(fullPath).isDirectory() &&
      fs.existsSync(path.join(fullPath, 'SUMMARY.md'))
    )
  })

  console.log(`   Found ${spaces.length} GitBook spaces: ${spaces.join(', ')}`)

  // 2. Copy assets from all spaces into a shared images/ folder
  console.log('📁 Copying assets...')
  let totalAssets = 0
  for (const space of spaces) {
    const assetsDir = path.join(SRC, space, '.gitbook', 'assets')
    if (fs.existsSync(assetsDir)) {
      copyRecursive(assetsDir, path.join(DEST, 'images'))
      const count = fs.readdirSync(assetsDir).length
      totalAssets += count
      console.log(`   ✓ ${space}: ${count} assets`)
    }
  }
  console.log(`   ✓ Total: ${totalAssets} assets copied to images/`)

  // 3. Convert all markdown files from all spaces
  console.log('📝 Converting markdown files...')
  let fileCount = 0
  let errorCount = 0

  function processDir(srcDir, destDir, spaceName) {
    if (!fs.existsSync(srcDir)) return
    for (const entry of fs.readdirSync(srcDir)) {
      const srcPath = path.join(srcDir, entry)
      const stat = fs.statSync(srcPath)

      if (entry === '.gitbook') continue

      if (stat.isDirectory()) {
        processDir(srcPath, path.join(destDir, entry), spaceName)
      } else if (entry.endsWith('.md')) {
        try {
          const content = fs.readFileSync(srcPath, 'utf-8')
          const relativePath = path.relative(SRC, srcPath)

          const mdxName =
            entry === 'README.md' ? 'index.mdx' : entry.replace(/\.md$/, '.mdx')
          const destFile = path.join(destDir, mdxName)
          const converted = convertContent(content, relativePath)

          ensureDir(path.dirname(destFile))
          fs.writeFileSync(destFile, converted)
          fileCount++
        } catch (err) {
          console.error(`   ✗ Error converting ${srcPath}: ${err.message}`)
          errorCount++
        }
      }
    }
  }

  // Map GitBook space names to old URL-compatible output paths
  const spaceOutputMap = {
    guides: '', // guides go to root
    'api-reference': 'api',
    'brand-guides': 'device-and-system-integration-guides',
  }

  for (const space of spaces) {
    const outputPrefix = spaceOutputMap[space] ?? space
    const destDir = outputPrefix ? path.join(DEST, outputPrefix) : DEST
    processDir(path.join(SRC, space), destDir, space)
  }
  console.log(`   ✓ ${fileCount} files converted, ${errorCount} errors`)

  // 4. Generate docs.json from all SUMMARY.md files
  console.log('📋 Generating docs.json...')

  // Parse each space's SUMMARY.md with the appropriate strategy
  const guidesSummary = path.join(SRC, 'guides', 'SUMMARY.md')
  const apiSummary = path.join(SRC, 'api-reference', 'SUMMARY.md')
  const brandSummary = path.join(SRC, 'brand-guides', 'SUMMARY.md')

  // Use old URL prefixes for page paths in navigation
  const guidesSections = fs.existsSync(guidesSummary)
    ? parseSummary(guidesSummary, '')
    : []
  const apiGroups = fs.existsSync(apiSummary)
    ? parseSummaryAsGroups(apiSummary, 'api')
    : []
  const brandGroups = fs.existsSync(brandSummary)
    ? parseSummaryAsGroups(brandSummary, 'device-and-system-integration-guides')
    : []

  const docsJson = buildDocsJson(guidesSections, apiGroups, brandGroups)
  fs.writeFileSync(
    path.join(DEST, 'docs.json'),
    JSON.stringify(docsJson, null, 2),
  )
  console.log('   ✓ docs.json generated')

  // 5. Write package.json
  fs.writeFileSync(
    path.join(DEST, 'package.json'),
    JSON.stringify(
      {
        name: 'seam-docs',
        private: true,
        scripts: { dev: 'mintlify dev', build: 'mintlify build' },
        devDependencies: { mintlify: '^4' },
      },
      null,
      2,
    ) + '\n',
  )

  // 6. Report summary
  console.log('\n✅ Migration complete!')
  console.log(`   Files converted: ${fileCount}`)
  console.log(`   Assets copied: ${totalAssets}`)
  console.log(`   Output: ${DEST}`)
}

main()
