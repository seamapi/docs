/* eslint-disable no-console */
/**
 * Android Reference Page Generator
 *
 * Transforms the Seam Android SDK's public Kotlin sources (KDoc) into
 * `mintlify-docs/mobile-sdks/android/reference/*.mdx` — the Android counterpart
 * of `../ios-reference/generate.ts`.
 *
 * Dokka 1.9 has no clean per-symbol JSON (unlike Swift-DocC), so this parses the
 * public sources directly. The PAGES manifest below maps each documented public
 * type to its source file and output slug; edit a row to add/retarget a page.
 * The generator OWNS these pages — it replaces them wholesale on each run, so
 * the public KDoc in the SDK is the source of truth.
 *
 * Usage:
 *   tsx mintlify-codegen/android-reference/generate.ts --source /path/to/seam-phone-sdk-android
 *   ANDROID_SDK_SOURCE=/path/to/seam-phone-sdk-android tsx .../generate.ts
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { argv, env, exit } from 'node:process'
import { fileURLToPath } from 'node:url'

// ---------------------------------------------------------------------------
// Manifest — public type -> source file (relative to --source root) + slug
// ---------------------------------------------------------------------------

interface PageSpec {
  type: string
  sourceFile: string
  slug: string
}

const PAGES: PageSpec[] = [
  {
    type: 'SeamSDK',
    sourceFile: 'core/src/main/java/co/seam/core/api/SeamSDK.kt',
    slug: 'seam-sdk',
  },
  {
    type: 'SeamCredential',
    sourceFile: 'core/src/main/java/co/seam/core/api/SeamCredential.kt',
    slug: 'seam-credential',
  },
  {
    type: 'SeamError',
    sourceFile: 'core/src/main/java/co/seam/core/sdkerrors/SeamError.kt',
    slug: 'seam-error',
  },
  {
    type: 'SeamCredentialError',
    sourceFile: 'core/src/main/java/co/seam/core/sdkerrors/SeamError.kt',
    slug: 'seam-credential-error',
  },
  {
    type: 'SeamRequiredUserInteraction',
    sourceFile: 'core/src/main/java/co/seam/core/sdkerrors/SeamError.kt',
    slug: 'seam-required-user-interaction',
  },
  {
    type: 'SeamUnlockEvent',
    sourceFile: 'core/src/main/java/co/seam/core/events/SeamUnlockEvent.kt',
    slug: 'seam-unlock-event',
  },
  {
    type: 'UnlockProximity',
    sourceFile: 'core/src/main/java/co/seam/core/api/UnlockProximity.kt',
    slug: 'unlock-proximity',
  },
]

const OUTPUT_DIR_REL = 'mobile-sdks/android/reference'

// ---------------------------------------------------------------------------
// Parsed model
// ---------------------------------------------------------------------------

type TypeKind =
  | 'data class'
  | 'sealed class'
  | 'enum class'
  | 'class'
  | 'interface'
  | 'object'

interface Kdoc {
  body: string
  params: Array<{ name: string; desc: string }>
  returns: string | null
  throwsList: Array<{ type: string; desc: string }>
}

interface Member {
  name: string
  signature: string
  doc: Kdoc
}

interface MemberGroup {
  title: string
  members: Member[]
}

interface ParsedType {
  name: string
  kind: TypeKind
  declaration: string
  doc: Kdoc
  groups: MemberGroup[]
}

// ---------------------------------------------------------------------------
// KDoc parsing
// ---------------------------------------------------------------------------

/** Strip the comment framing and leading asterisks from each KDoc line. */
function stripKdocFraming(raw: string): string[] {
  return raw
    .replace(/^\s*\/\*\*/, '')
    .replace(/\*\/\s*$/, '')
    .split('\n')
    .map((line) => line.replace(/^\s*\* ?/, '').replace(/^\s*$/, ''))
}

/** Convert KDoc `[Ref]` links to inline code, but never inside fenced code. */
function convertRefs(body: string): string {
  const segments = body.split(/(```[\s\S]*?```)/g)
  return segments
    .map((seg) => {
      if (seg.startsWith('```')) return seg
      // [Symbol] / [Symbol.member] not followed by ( → inline code.
      return seg.replace(/\[([A-Za-z0-9_.]+)\](?!\()/g, '`$1`')
    })
    .join('')
}

const TAG_RE = /^@(param|return|returns|throws|see|property)\b\s*(.*)$/

function parseKdoc(raw: string | null): Kdoc {
  const empty: Kdoc = { body: '', params: [], returns: null, throwsList: [] }
  if (raw == null) return empty

  const lines = stripKdocFraming(raw)
  const bodyLines: string[] = []
  const params: Array<{ name: string; desc: string }> = []
  const throwsList: Array<{ type: string; desc: string }> = []
  let returns: string | null = null

  type Cursor =
    | { kind: 'body' }
    | { kind: 'param'; idx: number }
    | { kind: 'throws'; idx: number }
    | { kind: 'returns' }
    | { kind: 'ignore' }
  let cursor: Cursor = { kind: 'body' }
  let inFence = false

  for (const line of lines) {
    if (line.trim().startsWith('```')) inFence = !inFence

    const tag = inFence ? null : line.match(TAG_RE)
    if (tag != null) {
      const kind = tag[1]
      const rest = (tag[2] ?? '').trim()
      if (kind === 'param' || kind === 'property') {
        const sp = rest.indexOf(' ')
        const name = sp === -1 ? rest : rest.slice(0, sp)
        const desc = sp === -1 ? '' : rest.slice(sp + 1).trim()
        params.push({ name, desc })
        cursor = { kind: 'param', idx: params.length - 1 }
      } else if (kind === 'return' || kind === 'returns') {
        returns = rest
        cursor = { kind: 'returns' }
      } else if (kind === 'throws') {
        const sp = rest.indexOf(' ')
        const type = sp === -1 ? rest : rest.slice(0, sp)
        const desc = sp === -1 ? '' : rest.slice(sp + 1).trim()
        throwsList.push({ type, desc })
        cursor = { kind: 'throws', idx: throwsList.length - 1 }
      } else {
        cursor = { kind: 'ignore' } // @see — dropped
      }
      continue
    }

    // Continuation of whatever tag/body we are in.
    if (cursor.kind === 'body') {
      bodyLines.push(line)
    } else if (cursor.kind === 'param') {
      const p = params[cursor.idx]
      if (p != null && line.trim() !== '') {
        p.desc = `${p.desc} ${line.trim()}`.trim()
      }
    } else if (cursor.kind === 'throws') {
      const t = throwsList[cursor.idx]
      if (t != null && line.trim() !== '') {
        t.desc = `${t.desc} ${line.trim()}`.trim()
      }
    } else if (cursor.kind === 'returns') {
      if (line.trim() !== '') returns = `${returns} ${line.trim()}`.trim()
    }
  }

  const body = convertRefs(bodyLines.join('\n'))
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  return {
    body,
    params: params.map((p) => ({ name: p.name, desc: convertRefs(p.desc) })),
    returns: returns != null ? convertRefs(returns) : null,
    throwsList: throwsList.map((t) => ({
      type: t.type,
      desc: convertRefs(t.desc),
    })),
  }
}

// ---------------------------------------------------------------------------
// Kotlin source slicing
// ---------------------------------------------------------------------------

/** Find the KDoc block ending immediately before `index` (skipping annotations). */
function kdocEndingBefore(text: string, index: number): string | null {
  // The type's KDoc is the last full KDoc block ending at/before `index`, with
  // only annotations/whitespace between it and the declaration.
  const candidate = findKdocBlocks(text.slice(0, index)).at(-1)
  if (candidate == null) return null
  const between = text.slice(candidate.end, index)
  if (!/^[\s]*(@[\w()]+[ \t]*\n?)*[\s]*$/.test(between)) return null
  return candidate.raw
}

/** End index (exclusive) of a (possibly nested) block comment starting at `i`. */
function endOfBlockComment(text: string, i: number): number {
  let depth = 0
  let j = i
  while (j < text.length) {
    if (text[j] === '/' && text[j + 1] === '*') {
      depth++
      j += 2
    } else if (text[j] === '*' && text[j + 1] === '/') {
      depth--
      j += 2
      if (depth === 0) return j
    } else j++
  }
  return text.length
}

/** End index (exclusive) of a string literal (handles `"""` and `"`) at `i`. */
function endOfString(text: string, i: number): number {
  if (text.slice(i, i + 3) === '"""') {
    const e = text.indexOf('"""', i + 3)
    return e === -1 ? text.length : e + 3
  }
  let j = i + 1
  while (j < text.length) {
    if (text[j] === '\\') j += 2
    else if (text[j] === '"') return j + 1
    else j++
  }
  return text.length
}

/** If `i` starts a comment or string, return the index just past it; else null. */
function skipNonCode(text: string, i: number): number | null {
  if (text[i] === '/' && text[i + 1] === '*') return endOfBlockComment(text, i)
  if (text[i] === '/' && text[i + 1] === '/') {
    const nl = text.indexOf('\n', i)
    return nl === -1 ? text.length : nl
  }
  if (text[i] === '"') return endOfString(text, i)
  return null
}

/** Match the closing delimiter for the opener at `open`, skipping comments/strings. */
function matchDelimiter(text: string, open: number): number {
  const opener = text[open]
  const closer = opener === '(' ? ')' : opener === '{' ? '}' : '>'
  let depth = 0
  let i = open
  while (i < text.length) {
    if (i !== open) {
      const skip = skipNonCode(text, i)
      if (skip != null) {
        i = skip
        continue
      }
    }
    const c = text[i]
    if (c === opener) depth++
    else if (c === closer) {
      depth--
      if (depth === 0) return i
    }
    i++
  }
  return -1
}

/** Find every top-level KDoc block, nesting-aware. */
function findKdocBlocks(
  text: string,
): Array<{ start: number; end: number; raw: string }> {
  const blocks: Array<{ start: number; end: number; raw: string }> = []
  let i = 0
  while (i < text.length) {
    if (text[i] === '/' && text[i + 1] === '*' && text[i + 2] === '*') {
      const end = endOfBlockComment(text, i)
      blocks.push({ start: i, end, raw: text.slice(i, end) })
      i = end
    } else i++
  }
  return blocks
}

/** The first full KDoc block in `text`, or null. */
function firstKdocBlock(text: string): string | null {
  return findKdocBlocks(text)[0]?.raw ?? null
}

interface TypeSlice {
  kind: TypeKind
  declaration: string
  doc: Kdoc
  ctorParamsRaw: string | null
  bodyRaw: string | null
}

function sliceType(text: string, typeName: string): TypeSlice {
  const re = new RegExp(
    `((?:public |private |internal |abstract |open |sealed |data |enum )*)\\b(class|interface|object)\\s+${typeName}\\b`,
  )
  const m = re.exec(text)
  if (m == null || m.index == null) {
    throw new Error(`Type "${typeName}" not found in source`)
  }
  const modifiers = (m[1] ?? '').trim()
  const keyword = m[2] ?? 'class'
  const kind: TypeKind = modifiers.includes('data')
    ? 'data class'
    : modifiers.includes('sealed')
      ? 'sealed class'
      : modifiers.includes('enum')
        ? 'enum class'
        : (keyword as TypeKind)

  const doc = parseKdoc(kdocEndingBefore(text, m.index))

  // Walk from the end of the matched declaration header to find primary-ctor
  // parens (if any) and/or the body `{ ... }`.
  let i = m.index + m[0].length
  // Skip `private/internal/protected constructor`.
  const ctorKw = /^\s*(?:private|internal|protected)?\s*constructor\b/.exec(
    text.slice(i),
  )
  if (ctorKw != null) i += ctorKw[0].length

  let ctorParamsRaw: string | null = null
  // Next significant char: `(` => primary ctor.
  const afterWs = /^\s*/.exec(text.slice(i))?.[0].length ?? 0
  if (text[i + afterWs] === '(') {
    const open = i + afterWs
    const close = matchDelimiter(text, open)
    ctorParamsRaw = text.slice(open + 1, close)
    i = close + 1
  }

  // Header runs until the body `{` or end of declaration.
  const braceRel = text.slice(i).indexOf('{')
  // Stop the header at a newline that is clearly past the declaration when no body.
  const headerEnd = braceRel === -1 ? text.length : i + braceRel
  const headerTail = text.slice(i, headerEnd).replace(/\s+/g, ' ').trim()

  let bodyRaw: string | null = null
  if (braceRel !== -1) {
    const open = i + braceRel
    const close = matchDelimiter(text, open)
    bodyRaw = text.slice(open + 1, close)
  }

  // Build a clean declaration line (without embedded property KDoc).
  let declaration: string
  if (kind === 'data class' && ctorParamsRaw != null) {
    const props = parseConstructorProps(ctorParamsRaw)
    const body = props.map((p) => `    ${p.signature}`).join(',\n')
    declaration = `${modifiers} ${keyword} ${typeName}(\n${body}\n)`.trim()
  } else {
    const ctor =
      ctorParamsRaw != null
        ? `(${ctorParamsRaw.replace(/\s+/g, ' ').trim()})`
        : ''
    declaration =
      `${modifiers} ${keyword} ${typeName}${ctor}${headerTail ? ` ${headerTail}` : ''}`.trim()
  }

  return { kind, declaration, doc, ctorParamsRaw, bodyRaw }
}

// ---------------------------------------------------------------------------
// Member extraction
// ---------------------------------------------------------------------------

/** Split on depth-0 commas, respecting () <> {} and skipping comments/strings. */
function splitTopLevel(text: string): string[] {
  const out: string[] = []
  let depth = 0
  let start = 0
  let i = 0
  while (i < text.length) {
    const skip = skipNonCode(text, i)
    if (skip != null) {
      i = skip
      continue
    }
    const c = text[i]
    if (c === '(' || c === '<' || c === '{') depth++
    else if (c === ')' || c === '>' || c === '}') depth--
    else if (c === ',' && depth === 0) {
      out.push(text.slice(start, i))
      start = i + 1
    }
    i++
  }
  if (start < text.length) out.push(text.slice(start))
  return out
}

/** Parse `val name: Type [= default]` segments (with optional leading KDoc). */
function parseConstructorProps(raw: string): Member[] {
  return splitTopLevel(raw)
    .map((seg) => {
      const kdocRaw = firstKdocBlock(seg)
      const code = (kdocRaw != null ? seg.replace(kdocRaw, '') : seg).trim()
      const decl = code.match(/\b(val|var)\s+(\w+)\s*:\s*([^=]+?)(?:\s*=.*)?$/s)
      if (decl == null) return null
      const keyword = decl[1]
      const name = decl[2] ?? ''
      const type = (decl[3] ?? '').replace(/\s+/g, ' ').trim()
      return {
        name,
        signature: `${keyword} ${name}: ${type}`,
        doc: parseKdoc(kdocRaw),
      }
    })
    .filter((m): m is Member => m != null)
}

/** Collect KDoc'd members from a `{ ... }` body, given the parent kind. */
function extractBodyMembers(body: string, parentKind: TypeKind): MemberGroup[] {
  const funcs: Member[] = []
  const props: Member[] = []
  const cases: Member[] = []
  const companion: Member[] = []

  const collectInto = (text: string, isCompanion: boolean): void => {
    for (const block of findKdocBlocks(text)) {
      const docRaw = block.raw
      const after = text.slice(block.end)
      // The declaration is the first non-blank, non-annotation code line(s).
      const code = after.replace(/^(\s*@[\w()]+\s*)*/, '').replace(/^\s+/, '')
      const doc = parseKdoc(docRaw)

      const fn = code.match(
        /^(?:public |private |internal |override )*(suspend\s+)?fun\s+(\w+)\s*\(/,
      )
      const nested = code.match(
        /^(?:public |private |internal )*(data\s+)?(class|object)\s+(\w+)/,
      )
      const prop = code.match(
        /^(?:public |private |internal )*(val|var)\s+(\w+)/,
      )
      const enumConst = code.match(/^([A-Z][A-Z0-9_]*)\s*[,;(]/)

      if (fn != null) {
        const isSuspend = fn[1] != null
        const name = fn[2] ?? ''
        const sig = extractFunctionSignature(code)
        if (isCompanion) companion.push({ name, signature: sig, doc })
        else {
          funcs.push({
            name: `${isSuspend ? 'suspend ' : ''}${name}`,
            signature: sig,
            doc,
          })
        }
      } else if (nested != null) {
        const name = nested[3] ?? ''
        cases.push({ name, signature: extractNestedSignature(code), doc })
      } else if (parentKind === 'enum class' && enumConst != null) {
        cases.push({ name: enumConst[1] ?? '', signature: '', doc })
      } else if (prop != null) {
        const name = prop[2] ?? ''
        props.push({ name, signature: extractPropertySignature(code), doc })
      }
    }
  }

  // Pull out a companion object body, collect it separately, then the rest.
  const compMatch = body.match(/companion\s+object\s*\{/)
  if (compMatch != null && compMatch.index != null) {
    const open = body.indexOf('{', compMatch.index)
    const close = matchDelimiter(body, open)
    collectInto(body.slice(open + 1, close), true)
    collectInto(body.slice(0, compMatch.index) + body.slice(close + 1), false)
  } else {
    collectInto(body, false)
  }

  const groups: MemberGroup[] = []
  if (companion.length > 0) {
    groups.push({ title: 'Companion object methods', members: companion })
  }
  if (props.length > 0) groups.push({ title: 'Properties', members: props })
  if (cases.length > 0) {
    groups.push({
      title: parentKind === 'enum class' ? 'Values' : 'Cases',
      members: cases,
    })
  }
  if (funcs.length > 0) groups.push({ title: 'Methods', members: funcs })
  return groups
}

/** `fun name(...): Ret` — declaration up to the body `{` or `=`. */
function extractFunctionSignature(code: string): string {
  const open = code.indexOf('(')
  const close = matchDelimiter(code, open)
  if (open === -1 || close === -1) return code.split('\n')[0]?.trim() ?? code
  const head = code.slice(0, open).replace(/\s+/g, ' ').trim()
  const params = code
    .slice(open + 1, close)
    .replace(/\s+/g, ' ')
    .trim()
  let tail = code.slice(close + 1)
  const stop = tail.search(/[{=]/)
  tail = (stop === -1 ? tail : tail.slice(0, stop)).replace(/\s+/g, ' ').trim()
  return `${head}(${params})${tail ? ` ${tail}` : ''}`.trim()
}

function extractNestedSignature(code: string): string {
  const stop = code.search(/[{]/)
  return (stop === -1 ? (code.split('\n')[0] ?? code) : code.slice(0, stop))
    .replace(/\s+/g, ' ')
    .trim()
}

function extractPropertySignature(code: string): string {
  const line = code.split('\n')[0]?.trim() ?? code
  const typed = line.match(/^((?:val|var)\s+\w+\s*:\s*[^=]+?)(?:\s*=.*)?$/)
  if (typed != null) return (typed[1] ?? line).trim()
  // No explicit type (e.g. `val x = internal.x`) → just `val name`.
  const m = line.match(/^((?:val|var)\s+\w+)/)
  return (m?.[1] ?? line).trim()
}

// ---------------------------------------------------------------------------
// Parse a whole type
// ---------------------------------------------------------------------------

function parseType(text: string, typeName: string): ParsedType {
  const slice = sliceType(text, typeName)
  let groups: MemberGroup[] = []
  if (slice.kind === 'data class' && slice.ctorParamsRaw != null) {
    const props = parseConstructorProps(slice.ctorParamsRaw)
    if (props.length > 0) groups = [{ title: 'Properties', members: props }]
  } else if (slice.bodyRaw != null) {
    groups = extractBodyMembers(slice.bodyRaw, slice.kind)
  }
  return {
    name: typeName,
    kind: slice.kind,
    declaration: slice.declaration,
    doc: slice.doc,
    groups,
  }
}

// ---------------------------------------------------------------------------
// MDX rendering
// ---------------------------------------------------------------------------

const AUTOGEN_NOTE =
  '> Auto-generated from the Seam Android SDK Kotlin sources. Do not edit by hand — see `mintlify-codegen/android-reference/`.'

function firstSentence(body: string): string {
  const stripped = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[`*[\]]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  const m = stripped.match(/^(.*?[.!?])(\s|$)/)
  return (m?.[1] ?? stripped).trim()
}

function yamlEscape(s: string): string {
  return s.replace(/'/g, "''")
}

function renderParamsTable(
  params: Array<{ name: string; desc: string }>,
): string[] {
  if (params.length === 0) return []
  const rows = params.map((p) => `| \`${p.name}\` | ${p.desc || '—'} |`)
  return [
    '',
    '**Parameters**',
    '',
    '| Parameter | Description |',
    '| --- | --- |',
    ...rows,
  ]
}

function renderMember(m: Member): string[] {
  const lines: string[] = [`### \`${m.name}\``, '']
  if (m.doc.body) lines.push(m.doc.body, '')
  if (m.signature) lines.push('```kotlin', m.signature, '```')
  lines.push(...renderParamsTable(m.doc.params))
  if (m.doc.returns) lines.push('', `**Returns** — ${m.doc.returns}`)
  if (m.doc.throwsList.length > 0) {
    lines.push('', '**Throws**', '')
    for (const t of m.doc.throwsList) {
      lines.push(`- \`${t.type}\`${t.desc ? ` — ${t.desc}` : ''}`)
    }
  }
  lines.push('')
  return lines
}

function renderTypePage(t: ParsedType): string {
  const lines: string[] = [
    '---',
    `title: '${yamlEscape(t.name)}'`,
    `description: '${yamlEscape(firstSentence(t.doc.body))}'`,
    '---',
    '',
    AUTOGEN_NOTE,
    '',
    '## Overview',
    '',
    '```kotlin',
    t.declaration,
    '```',
  ]
  if (t.doc.body) lines.push('', t.doc.body)

  for (const group of t.groups) {
    lines.push('', '---', '', `## ${group.title}`, '')
    if (group.title === 'Properties' && t.kind === 'data class') {
      lines.push('| Property | Type | Description |', '| --- | --- | --- |')
      for (const m of group.members) {
        const type = m.signature.replace(/^(?:val|var)\s+\w+:\s*/, '')
        lines.push(
          `| \`${m.name}\` | \`${type}\` | ${m.doc.body.replace(/\n+/g, ' ') || '—'} |`,
        )
      }
      lines.push('')
    } else {
      for (const m of group.members) lines.push(...renderMember(m))
    }
  }
  return lines
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\n*$/, '\n')
}

function renderIndexPage(types: ParsedType[]): string {
  const cards = types
    .map((t) => {
      const slug = PAGES.find((p) => p.type === t.name)?.slug ?? ''
      const desc = firstSentence(t.doc.body) || `${t.kind} reference`
      return [
        `  <Card title="${t.name}" icon="android" href="/${OUTPUT_DIR_REL}/${slug}">`,
        `    ${desc}`,
        '  </Card>',
      ].join('\n')
    })
    .join('\n')
  return [
    '---',
    `title: 'Android SDK API Reference'`,
    `description: 'Public API surface of the Seam Android SDK.'`,
    '---',
    '',
    AUTOGEN_NOTE,
    '',
    '<CardGroup cols={2}>',
    cards,
    '</CardGroup>',
    '',
  ].join('\n')
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function resolveSourceRoot(): string {
  const flagIndex = argv.indexOf('--source')
  if (flagIndex !== -1 && argv[flagIndex + 1] != null) {
    return argv[flagIndex + 1] as string
  }
  const fromEnv = env['ANDROID_SDK_SOURCE']
  if (fromEnv != null) return fromEnv
  console.error(
    'ERROR: provide the SDK source root via --source <path> or ANDROID_SDK_SOURCE.',
  )
  exit(1)
}

async function main(): Promise<void> {
  const sourceRoot = resolveSourceRoot()
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const outDir = join(__dirname, '..', '..', 'mintlify-docs', OUTPUT_DIR_REL)
  await mkdir(outDir, { recursive: true })

  const parsed: ParsedType[] = []
  for (const page of PAGES) {
    const text = await readFile(join(sourceRoot, page.sourceFile), 'utf-8')
    const type = parseType(text, page.type)
    parsed.push(type)
    await writeFile(join(outDir, `${page.slug}.mdx`), renderTypePage(type))
    console.log(
      `✓ ${page.slug}.mdx  (${type.kind}, ${type.groups.reduce((n, g) => n + g.members.length, 0)} members)`,
    )
  }
  await writeFile(join(outDir, 'index.mdx'), renderIndexPage(parsed))
  console.log(`✓ index.mdx  (${parsed.length} types)`)
}

await main()
