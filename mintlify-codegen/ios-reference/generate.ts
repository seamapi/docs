/* eslint-disable no-console */
/**
 * iOS Reference Page Generator — DOC-224
 *
 * Transforms a Swift-DocC archive produced by `xcodebuild docbuild` into
 * `mintlify-docs/mobile-sdks/ios/reference/*.mdx` pages.
 *
 * Usage:
 *   tsx mintlify-codegen/ios-reference/generate.ts --archive /path/to/SeamSDK.doccarchive
 *   DOCC_ARCHIVE=/path/to/SeamSDK.doccarchive tsx mintlify-codegen/ios-reference/generate.ts
 */

import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { argv, env, exit } from 'node:process'

// ---------------------------------------------------------------------------
// Types — our parsed representation
// ---------------------------------------------------------------------------

interface DoccSymbol {
  title: string
  symbolKind: string
  abstract: string
  declaration: string
  topicSections: DoccTopicSection[]
}

interface DoccTopicSection {
  title: string
  members: DoccMember[]
}

interface DoccMember {
  name: string
  abstract: string
  declaration: string
  parameters?: Array<{ name: string; description: string }>
}

interface GeneratedPage {
  /** Path relative to mintlify-docs/, without .mdx extension */
  outputPath: string
  content: string
}

type DoccArchive = Map<string, DoccSymbol>

// ---------------------------------------------------------------------------
// Types — raw DocC render JSON format
// ---------------------------------------------------------------------------

interface RawDoccJson {
  metadata?: {
    title?: string
    symbolKind?: string
    roleHeading?: string
  }
  abstract?: RawInlineNode[]
  primaryContentSections?: RawSection[]
  topicSections?: Array<{ title: string; identifiers: string[] }>
  references?: Record<string, RawReference>
}

type RawInlineNode = {
  type: string
  text?: string
  code?: string
  inlineContent?: RawInlineNode[]
  identifier?: string
  isActive?: boolean
}

interface RawSection {
  kind: string
  declarations?: Array<{
    tokens: Array<{ kind: string; text: string }>
    languages?: string[]
  }>
  parameters?: Array<{
    name: string
    content: RawBlock[]
  }>
  content?: RawBlock[]
}

type RawBlock = {
  type: string
  inlineContent?: RawInlineNode[]
  content?: RawBlock[]
  items?: Array<{
    term?: { inlineContent?: RawInlineNode[] }
    definition?: { content?: RawBlock[] }
  }>
  syntax?: string
  code?: string[]
  level?: number
}

interface RawReference {
  title?: string
  type?: string
  url?: string
  kind?: string
  role?: string
  abstract?: RawInlineNode[]
  fragments?: Array<{ kind: string; text: string }>
  identifier?: string
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

const archivePath = resolveArchivePath()

if (archivePath == null) {
  console.error(
    [
      '',
      '╔══════════════════════════════════════════════════════════════════╗',
      '║  iOS Reference Generator — DocC archive not found               ║',
      '╠══════════════════════════════════════════════════════════════════╣',
      '║                                                                  ║',
      '║  This generator requires a Swift-DocC archive produced by        ║',
      '║  `xcodebuild docbuild`, which requires macOS 13+ and Xcode 15+. ║',
      '║                                                                  ║',
      '║  Usage:                                                          ║',
      '║    tsx mintlify-codegen/ios-reference/generate.ts \\              ║',
      '║      --archive /path/to/SeamSDK.doccarchive                      ║',
      '║                                                                  ║',
      '║  Or set DOCC_ARCHIVE env var to the archive path.                ║',
      '║                                                                  ║',
      '╚══════════════════════════════════════════════════════════════════╝',
      '',
    ].join('\n'),
  )
  exit(1)
}

console.log(`iOS reference generator starting — archive: ${archivePath}`)
console.log('')

const archive = await parseDoccArchive(archivePath)
console.log(`Parsed ${archive.size} symbols: ${[...archive.keys()].join(', ')}`)
console.log('')

const docsRoot = join(import.meta.dirname, '..', '..', 'mintlify-docs')
const refDir = join(docsRoot, 'mobile-sdks', 'ios', 'reference')

let written = 0
for (const symbol of archive.values()) {
  const page = renderTypePage(symbol)
  const outputPath = join(docsRoot, page.outputPath + '.mdx')
  await writeFile(outputPath, page.content, 'utf-8')
  console.log(`  Wrote: ${page.outputPath}`)
  written++
}

// Regenerate the reference index page
const indexPage = renderIndexPage([...archive.values()])
await writeFile(join(refDir, 'index.mdx'), indexPage, 'utf-8')
console.log(`  Wrote: mobile-sdks/ios/reference/index`)

console.log('')
console.log(`Done! Wrote ${written + 1} page(s).`)

// ---------------------------------------------------------------------------
// parseDoccArchive
// ---------------------------------------------------------------------------

export async function parseDoccArchive(
  archivePath: string,
): Promise<DoccArchive> {
  const dataDir = join(archivePath, 'data', 'documentation')

  // The module directory is the single directory under data/documentation/
  const entries = await readdir(dataDir, { withFileTypes: true })
  const moduleDirs = entries.filter((e) => e.isDirectory())

  const firstModuleDir = moduleDirs[0]
  if (firstModuleDir == null) {
    throw new Error(`No module directories found in ${dataDir}`)
  }
  const moduleDir = join(dataDir, firstModuleDir.name)
  console.log(`  Module: ${firstModuleDir.name}`)

  // Top-level JSON files = one per public type
  const files = await readdir(moduleDir, { withFileTypes: true })
  const jsonFiles = files.filter((f) => f.isFile() && f.name.endsWith('.json'))

  const archive: DoccArchive = new Map()

  const topLevelKinds = new Set(['class', 'struct', 'enum', 'protocol'])

  for (const file of jsonFiles) {
    const filePath = join(moduleDir, file.name)
    let raw: RawDoccJson
    try {
      raw = JSON.parse(await readFile(filePath, 'utf-8')) as RawDoccJson
    } catch {
      console.warn(`  Warning: failed to parse ${filePath}`)
      continue
    }

    const title = raw.metadata?.title
    const symbolKind = raw.metadata?.symbolKind

    if (!title || !symbolKind) continue
    if (!topLevelKinds.has(symbolKind)) continue

    const abstractText = inlineToText(raw.abstract ?? [])
    const declaration = extractDeclaration(raw.primaryContentSections ?? [])

    const topicSections = await parseTopicSections(
      raw.topicSections ?? [],
      raw.references ?? {},
      archivePath,
    )

    archive.set(title, {
      title,
      symbolKind,
      abstract: abstractText,
      declaration,
      topicSections,
    })
  }

  return archive
}

// ---------------------------------------------------------------------------
// parseTopicSections
// ---------------------------------------------------------------------------

async function parseTopicSections(
  sections: Array<{ title: string; identifiers: string[] }>,
  references: Record<string, RawReference>,
  archivePath: string,
): Promise<DoccTopicSection[]> {
  const result: DoccTopicSection[] = []

  for (const section of sections) {
    const members: DoccMember[] = []

    for (const id of section.identifiers) {
      const ref = references[id]
      if (ref == null || ref.role === 'collectionGroup') continue
      if (ref.kind !== 'symbol') continue

      const memberJson = await loadSymbolJson(ref.url, archivePath)

      let declaration: string
      let abstractText: string
      let parameters: Array<{ name: string; description: string }> | undefined

      if (memberJson != null) {
        declaration = extractDeclaration(
          memberJson.primaryContentSections ?? [],
        )
        abstractText = inlineToText(memberJson.abstract ?? [])
        parameters = extractParameters(memberJson.primaryContentSections ?? [])
      } else {
        declaration = (ref.fragments ?? []).map((f) => f.text).join('')
        abstractText = inlineToText(ref.abstract ?? [])
        parameters = undefined
      }

      const name = ref.title ?? id.split('/').pop() ?? id

      members.push({
        name,
        abstract: abstractText,
        declaration,
        ...(parameters != null ? { parameters } : {}),
      })
    }

    if (members.length > 0) {
      result.push({ title: section.title, members })
    }
  }

  return result
}

// ---------------------------------------------------------------------------
// loadSymbolJson
// ---------------------------------------------------------------------------

async function loadSymbolJson(
  url: string | undefined,
  archivePath: string,
): Promise<RawDoccJson | null> {
  if (url == null) return null
  // URL: /documentation/seamsdk/seam/credentials
  // File: <archive>/data/documentation/seamsdk/seam/credentials.json
  const filePath = join(archivePath, 'data', url + '.json')
  try {
    await stat(filePath)
    return JSON.parse(await readFile(filePath, 'utf-8')) as RawDoccJson
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// renderTypePage
// ---------------------------------------------------------------------------

export function renderTypePage(symbol: DoccSymbol): GeneratedPage {
  const slug = toSlug(symbol.title)
  const outputPath = `mobile-sdks/ios/reference/${slug}`

  const lines: string[] = [
    `---`,
    `title: '${symbol.title}'`,
    `description: '${symbol.abstract.replace(/'/g, "\\'")}'`,
    `---`,
    ``,
    `## Overview`,
    ``,
    `\`\`\`swift`,
    symbol.declaration,
    `\`\`\``,
  ]

  if (symbol.abstract) {
    lines.push(``, symbol.abstract)
  }

  for (const section of symbol.topicSections) {
    lines.push(``, `---`, ``, `## ${section.title}`, ``)

    for (const member of section.members) {
      lines.push(`### \`${member.name}\``, ``)

      if (member.abstract) {
        lines.push(member.abstract, ``)
      }

      if (member.declaration) {
        lines.push(`\`\`\`swift`, member.declaration, `\`\`\``)
      }

      if (member.parameters && member.parameters.length > 0) {
        lines.push(``, `**Parameters**`, ``)
        lines.push(`| Parameter | Description |`)
        lines.push(`|-----------|-------------|`)
        for (const p of member.parameters) {
          lines.push(`| \`${p.name}\` | ${p.description} |`)
        }
      }

      lines.push(``)
    }
  }

  return { outputPath, content: lines.join('\n') + '\n' }
}

// ---------------------------------------------------------------------------
// renderIndexPage
// ---------------------------------------------------------------------------

function renderIndexPage(symbols: DoccSymbol[]): string {
  const cards = symbols
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((s) => {
      const slug = toSlug(s.title)
      const kindLabel =
        s.symbolKind.charAt(0).toUpperCase() + s.symbolKind.slice(1)
      const desc = s.abstract
        ? s.abstract.replace(/'/g, "\\'")
        : `${kindLabel} reference`
      return [
        `  <Card title="${s.title}" icon="swift" href="/mobile-sdks/ios/reference/${slug}">`,
        `    ${kindLabel} — ${desc}`,
        `  </Card>`,
      ].join('\n')
    })
    .join('\n\n')

  return [
    `---`,
    `title: 'iOS SDK API Reference'`,
    `description: 'Public API surface of the Seam iOS SDK.'`,
    `---`,
    ``,
    `<CardGroup cols={2}>`,
    cards,
    `</CardGroup>`,
    ``,
  ].join('\n')
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function extractDeclaration(sections: RawSection[]): string {
  const decl = sections.find((s) => s.kind === 'declarations')
  if (decl?.declarations?.[0] == null) return ''
  return decl.declarations[0].tokens.map((t) => t.text).join('')
}

function extractParameters(
  sections: RawSection[],
): Array<{ name: string; description: string }> | undefined {
  const paramSection = sections.find((s) => s.kind === 'parameters')
  if (paramSection?.parameters == null || paramSection.parameters.length === 0)
    {return undefined}

  return paramSection.parameters.map((p) => ({
    name: p.name,
    description: blocksToText(p.content),
  }))
}

function inlineToText(nodes: RawInlineNode[]): string {
  return nodes
    .map((node) => {
      switch (node.type) {
        case 'text':
          return node.text ?? ''
        case 'codeVoice':
          return `\`${node.code ?? ''}\``
        case 'emphasis':
          return `*${inlineToText(node.inlineContent ?? [])}*`
        case 'strong':
          return `**${inlineToText(node.inlineContent ?? [])}**`
        case 'reference': {
          const name = node.identifier?.split('/').pop() ?? ''
          return `\`${name}\``
        }
        case 'newTerm':
          return inlineToText(node.inlineContent ?? [])
        default:
          return ''
      }
    })
    .join('')
}

function blocksToText(blocks: RawBlock[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case 'paragraph':
          return inlineToText(block.inlineContent ?? [])
        case 'aside':
        case 'blockquote':
          return blocksToText(block.content ?? [])
        default:
          return ''
      }
    })
    .filter(Boolean)
    .join(' ')
}

function toSlug(name: string): string {
  return name
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
    .replace(/-+/g, '-')
}

function resolveArchivePath(): string | null {
  const argIndex = argv.indexOf('--archive')
  if (argIndex !== -1 && argv[argIndex + 1] != null) {
    return argv[argIndex + 1] ?? null
  }
  return env['DOCC_ARCHIVE'] ?? null
}
