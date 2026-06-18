/* eslint-disable no-console */
/**
 * Android Reference Page Generator — SCAFFOLD (not yet implemented)
 *
 * The Android counterpart of `../ios-reference/generate.ts`. When complete it
 * will transform Dokka output (from `./gradlew dokkaHtmlMultiModule` in the
 * seamapi/phone Android SDK) into
 * `mintlify-docs/mobile-sdks/android/reference/*.mdx`.
 *
 * STATUS: stub. It parses its CLI contract and exits 0 WITHOUT writing any
 * files, so the sync workflow is a safe no-op until the real generator lands —
 * the hand-authored Android reference pages (DOC-231) are never overwritten.
 *
 * To implement, see README.md (esp. the Dokka-output design decision) and
 * mirror ../ios-reference/generate.ts.
 *
 * Usage (once implemented):
 *   tsx mintlify-codegen/android-reference/generate.ts --archive /path/to/dokka/htmlMultiModule
 *   DOKKA_ARCHIVE=/path/to/dokka/htmlMultiModule tsx mintlify-codegen/android-reference/generate.ts
 */

import { argv, env, exit } from 'node:process'

function resolveArchivePath(): string | undefined {
  const flagIndex = argv.indexOf('--archive')
  if (flagIndex !== -1 && argv[flagIndex + 1] != null) {
    return argv[flagIndex + 1]
  }
  return env['DOKKA_ARCHIVE']
}

function main(): void {
  const archivePath = resolveArchivePath()

  console.warn(
    '[android-reference] Generator not yet implemented — this is a scaffold.',
  )
  console.warn(
    '[android-reference] No pages written; hand-authored Android reference pages are preserved.',
  )
  if (archivePath != null) {
    console.warn(`[android-reference] Received --archive: ${archivePath}`)
  }
  console.warn(
    '[android-reference] See android-reference/README.md and ios-reference/generate.ts to implement.',
  )

  // Intentionally write nothing and succeed, so the sync workflow no-ops safely.
  exit(0)
}

main()
