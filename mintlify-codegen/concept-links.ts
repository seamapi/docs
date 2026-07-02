import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Generic concept pages that upstream `@seamapi/types` descriptions link to from
 * shared foreign-key properties (`workspace_id`, `connected_account_id`,
 * `device_id`, ...). Because these properties recur on nearly every object and
 * event, the same link repeats dozens of times across a rendered page — noise
 * that adds nothing over the page's own nav and search.
 *
 * A concept link is a teaching aid: worth the most on first encounter, noise on
 * repetition. So we handle these two ways in the docs codegen:
 *   - event pages          -> {@link stripConceptLinks} unwraps them entirely
 *                             (advanced audience, maximum repetition), and
 *   - every other page     -> {@link dedupeConceptLinks} keeps the first link
 *                             to each concept and unwraps the rest.
 *
 * The root-cause cleanup of the foreign-key links lives upstream in
 * seam-connect's `public-types/models`; this is the docs-rendering half of the
 * policy (first-occurrence-per-page can only be decided at render time).
 *
 * Paths are matched exactly, with an optional `docs.seam.co` origin and no
 * anchor or sub-path: `.../workspaces` matches, but the more specific
 * `.../workspaces#sandbox-workspaces` and `.../devices/managed-and-unmanaged-devices`
 * do not — an anchored or deeper link carries real context and is left intact.
 */
export const BOILERPLATE_CONCEPT_PATHS = new Set([
  '/core-concepts/workspaces',
  '/core-concepts/connected-accounts',
  '/core-concepts/devices',
  '/core-concepts/connect-webviews',
  '/core-concepts/action-attempts',
  '/core-concepts/authentication/client-session-tokens',
  '/developer-tools/webhooks',
])

// Markdown link with optional leading `!` (image), optional `docs.seam.co`
// origin, and a path with no anchor/query (so anchored concept links are left
// alone). Global so `String.replace` visits every link on the line.
const LINK_RE = /(!?)\[([^\]]+)\]\((https?:\/\/docs\.seam\.co)?(\/[^)\s#?]*)\)/g

/** Canonical concept path for a link target, or null if it is not a boilerplate concept. */
function conceptPath(path: string): string | null {
  const normalized = path.replace(/\/+$/, '')
  return BOILERPLATE_CONCEPT_PATHS.has(normalized) ? normalized : null
}

/**
 * Unwrap every boilerplate concept link in `text` to its label
 * (`[workspace](.../workspaces)` -> `workspace`). Images, anchored/sub-path
 * concept links, and any other target are left untouched.
 */
export function stripConceptLinks(text: string): string {
  return text.replace(
    LINK_RE,
    (full, bang: string, label: string, _origin, path: string) =>
      bang === '' && conceptPath(path) != null ? label : full,
  )
}

/**
 * Keep the first link to each concept in `text` and unwrap every later one to
 * plain text. Fenced code blocks (```) are skipped entirely, so links inside
 * example JSON payloads never count as an occurrence or get rewritten.
 */
export function dedupeConceptLinks(text: string): string {
  const seen = new Set<string>()
  let inFence = false
  return text
    .split('\n')
    .map((line) => {
      if (/^\s*```/.test(line)) {
        inFence = !inFence
        return line
      }
      if (inFence) return line
      return line.replace(
        LINK_RE,
        (full, bang: string, label: string, _origin, path: string) => {
          if (bang !== '') return full
          const concept = conceptPath(path)
          if (concept == null) return full
          if (seen.has(concept)) return label
          seen.add(concept)
          return full
        },
      )
    })
    .join('\n')
}

/**
 * Apply first-occurrence dedup to every generated API `.mdx` page except the
 * `events.mdx` pages, which have their concept links stripped entirely at render
 * time. Returns the number of files changed.
 */
export async function dedupeConceptLinksInPages(
  docsDir: string,
): Promise<number> {
  const apiDir = join(docsDir, 'api')
  const entries = await readdir(apiDir, { recursive: true })
  let count = 0
  for (const entry of entries) {
    if (!entry.endsWith('.mdx')) continue
    if (entry.endsWith('events.mdx')) continue
    const file = join(apiDir, entry)
    const content = await readFile(file, 'utf8')
    const next = dedupeConceptLinks(content)
    if (next !== content) {
      await writeFile(file, next)
      count++
    }
  }
  return count
}
