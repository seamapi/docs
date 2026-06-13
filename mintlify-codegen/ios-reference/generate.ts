/* eslint-disable no-console */
/**
 * iOS Reference Page Generator — DOC-224
 *
 * SCAFFOLD / STUB — not yet wired into `npm run generate` or `npm run generate:mintlify`.
 *
 * This generator will transform a Swift-DocC archive produced by
 * `xcodebuild docbuild` into the `mintlify-docs/mobile-sdks/ios/reference/*.mdx`
 * pages.
 *
 * REQUIREMENT: macOS + Xcode
 * ─────────────────────────
 * The upstream `xcodebuild docbuild` step requires macOS 13+ and Xcode 15+.
 * This script CANNOT run in Linux CI. If the DOCC_ARCHIVE path is not provided
 * (or does not exist), this script exits with a clear error message.
 *
 * Until this generator runs successfully on a Mac, the reference MDX pages are
 * hand-authored from source (see mintlify-docs/mobile-sdks/ios/reference/).
 *
 * Usage:
 *   tsx mintlify-codegen/ios-reference/generate.ts --archive /path/to/SeamSDK.doccarchive
 *   DOCC_ARCHIVE=/path/to/SeamSDK.doccarchive tsx mintlify-codegen/ios-reference/generate.ts
 */

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { argv, env, exit } from 'node:process'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * A minimal representation of a DocC render JSON symbol, extracted from
 * `<archive>/data/documentation/<module>/<symbol>.json`.
 *
 * The actual schema is larger — these are the fields we consume.
 */
interface DoccSymbol {
  /** The symbol's display name (e.g. "Seam", "SeamCredential"). */
  title: string
  /** DocC symbol kind: "class" | "struct" | "enum" | "extension" | etc. */
  symbolKind: string
  /** Plain-text abstract from the doc comment. */
  abstract: string
  /** Swift declaration string, e.g. "public final class Seam: ObservableObject". */
  declaration: string
  /** Child symbols (properties, methods, enum cases, initializers). */
  members: DoccMember[]
}

/**
 * A member of a top-level symbol — a property, method, enum case, or initializer.
 */
interface DoccMember {
  /** Member name. */
  name: string
  /** DocC symbol kind for the member. */
  kind: string
  /** Plain-text abstract from the doc comment. */
  abstract: string
  /** Swift declaration string. */
  declaration: string
}

/**
 * The result of parsing a DocC archive: a map from symbol name to its parsed
 * representation.
 */
type DoccArchive = Map<string, DoccSymbol>

/**
 * A generated MDX page: a file path (relative to mintlify-docs/) and content.
 */
interface GeneratedPage {
  /** Output path relative to the mintlify-docs/ directory. */
  outputPath: string
  /** Full MDX content to write. */
  content: string
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
      '║  It CANNOT run in Linux CI.                                      ║',
      '║                                                                  ║',
      '║  To generate the iOS reference pages on a Mac:                   ║',
      '║                                                                  ║',
      '║  1. Build the DocC archive:                                      ║',
      '║     cd /path/to/seam-phone-ios                                   ║',
      '║     xcodebuild docbuild \\                                        ║',
      '║       -scheme SeamSDK \\                                          ║',
      '║       -derivedDataPath /tmp/seam-docbuild \\                      ║',
      "║       -destination 'generic/platform=iOS Simulator'              ║",
      '║                                                                  ║',
      '║  2. Run this generator:                                          ║',
      '║     DOCC_ARCHIVE=/tmp/seam-docbuild/Build/Products/\\             ║',
      '║       Debug-iphonesimulator/SeamSDK.doccarchive \\                ║',
      '║     tsx mintlify-codegen/ios-reference/generate.ts               ║',
      '║                                                                  ║',
      '║  Until then, the reference pages are hand-authored from source.  ║',
      '║  See mintlify-codegen/ios-reference/README.md for details.       ║',
      '║                                                                  ║',
      '╚══════════════════════════════════════════════════════════════════╝',
      '',
    ].join('\n'),
  )
  exit(1)
}

console.log(`iOS reference generator starting — archive: ${archivePath}`)
console.log('')
console.log('TODO: implement parseDoccArchive() and renderTypePage()')
console.log(
  'See mintlify-codegen/ios-reference/README.md for the intended pipeline.',
)
console.log('')

// When fully implemented this would be:
//   const archive = await parseDoccArchive(archivePath)
//   const pages = [...archive.values()].map(renderTypePage)
//   for (const page of pages) { await writePage(page) }

exit(0)

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Resolve the DocC archive path from CLI args or the DOCC_ARCHIVE env var.
 *
 * Accepts:
 *   - `--archive /path/to/SeamSDK.doccarchive`
 *   - `DOCC_ARCHIVE=/path/to/SeamSDK.doccarchive`
 *
 * Returns `null` if neither is provided.
 */
function resolveArchivePath(): string | null {
  const argIndex = argv.indexOf('--archive')
  if (argIndex !== -1 && argv[argIndex + 1] != null) {
    return argv[argIndex + 1] ?? null
  }
  return env['DOCC_ARCHIVE'] ?? null
}

// ---------------------------------------------------------------------------
// TODO: parseDoccArchive
// ---------------------------------------------------------------------------

/**
 * Parse a DocC archive at the given path and return a map of symbol name →
 * DoccSymbol.
 *
 * Implementation steps:
 *  1. List `<archivePath>/data/documentation/<module>/` for JSON files.
 *  2. For each file, read and parse the render JSON.
 *  3. Extract `metadata.title`, `metadata.symbolKind`, `abstract[].text`,
 *     the declaration from `primaryContentSections[kind="declarations"]`, and
 *     members from `topicSections` + their child render JSON files.
 *  4. Return a `Map<string, DoccSymbol>` keyed by symbol name.
 *
 * @param archivePath - Absolute path to the `.doccarchive` directory.
 * @returns A map from symbol name to parsed DoccSymbol.
 *
 * @todo Implement this function.
 */
export async function parseDoccArchive(
  _archivePath: string,
): Promise<DoccArchive> {
  // TODO: implement
  //
  // Sketch:
  //
  //   const dataDir = join(_archivePath, 'data', 'documentation')
  //   const index = JSON.parse(await readFile(join(dataDir, '..', 'documentation.json'), 'utf-8'))
  //   const moduleDir = join(dataDir, index.metadata.externalID.toLowerCase())
  //   const files = await readdir(moduleDir)
  //   const symbols = new Map<string, DoccSymbol>()
  //   for (const file of files) {
  //     const raw = JSON.parse(await readFile(join(moduleDir, file), 'utf-8'))
  //     symbols.set(raw.metadata.title, extractSymbol(raw))
  //   }
  //   return symbols

  // readFile and join are used in the TODO sketch above; referenced here to
  // satisfy the no-unused-locals check until the function is implemented.
  ;[readFile, join].forEach(() => undefined)
  throw new Error('parseDoccArchive is not yet implemented')
}

// ---------------------------------------------------------------------------
// TODO: renderTypePage
// ---------------------------------------------------------------------------

/**
 * Render a single DoccSymbol as a Mintlify MDX page.
 *
 * The output MDX should match the hand-authored pages in
 * `mintlify-docs/mobile-sdks/ios/reference/` — frontmatter `title` +
 * `description`, a declaration code fence, and sections for each member.
 *
 * Symbol-kind → output path mapping:
 *   class   Seam              → mobile-sdks/ios/reference/seam.mdx
 *   class   SeamSDKService    → mobile-sdks/ios/reference/seam-sdk-service.mdx
 *   struct  SeamCredential    → mobile-sdks/ios/reference/seam-credential.mdx
 *   enum    SeamError         → mobile-sdks/ios/reference/seam-error.mdx
 *   enum    SeamCredentialError → mobile-sdks/ios/reference/seam-credential-error.mdx
 *   enum    SeamUnlockEvent   → mobile-sdks/ios/reference/seam-unlock-event.mdx
 *   enum    SeamUnlockProximity → mobile-sdks/ios/reference/seam-unlock-proximity.mdx
 *
 * @param symbol - The parsed DoccSymbol to render.
 * @returns A GeneratedPage with the output path and MDX content.
 *
 * @todo Implement this function.
 */
export function renderTypePage(_symbol: DoccSymbol): GeneratedPage {
  // TODO: implement
  //
  // Sketch:
  //
  //   const slug = symbolNameToSlug(_symbol.title)
  //   const outputPath = `mobile-sdks/ios/reference/${slug}.mdx`
  //   const content = [
  //     `---`,
  //     `title: '${_symbol.title}'`,
  //     `description: '${_symbol.abstract}'`,
  //     `---`,
  //     ``,
  //     `## Overview`,
  //     ``,
  //     `\`\`\`swift`,
  //     _symbol.declaration,
  //     `\`\`\``,
  //     ``,
  //     ...renderMembers(_symbol.members),
  //   ].join('\n')
  //   return { outputPath, content }

  throw new Error('renderTypePage is not yet implemented')
}
