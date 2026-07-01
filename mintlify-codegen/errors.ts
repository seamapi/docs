/* eslint-disable no-console */
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import type { Blueprint, DiscriminatedListProperty } from '@seamapi/blueprint'

/**
 * Generate error and warning documentation for the API reference.
 *
 * Errors and warnings are enumerated states Seam reports on a resource (e.g.
 * `device.errors[].error_code = "device_offline"`), each with a human-readable
 * description. The blueprint models them as `discriminated_object` list
 * properties on the resource, but the OpenAPI spec can only express the generic
 * `errors`/`warnings` array shape — so the enumerated codes and their meanings
 * were dropped when the API reference moved to OpenAPI-generated pages (the same
 * gap events had before they were restored; see events.ts).
 *
 * This module restores them from `blueprint.resources[].properties` on every
 * `npm run generate:mintlify`, producing one combined `errors.mdx` page per
 * resource with an `## Errors` and an `## Warnings` section. A standalone page
 * (rather than a section on the object page) renders full width and matches the
 * layout the events pages use.
 *
 * `update-nav.ts` wires the generated pages into the sidebar after their object
 * (and events) page. Link canonicalization (Phase G) runs afterward so
 * `docs.seam.co` links in descriptions become canonical relative paths.
 */

type Resource = Blueprint['resources'][number]
type Property = Resource['properties'][number]

interface CodeEntry {
  code: string
  description: string
}

interface CodeGroup {
  // Group heading (e.g. "Locks"); null for the ungrouped variants.
  name: string | null
  entries: CodeEntry[]
}

function isDiscriminatedListProperty(
  prop: Property | undefined,
): prop is Property & DiscriminatedListProperty {
  return (
    prop != null &&
    'itemFormat' in prop &&
    prop.itemFormat === 'discriminated_object'
  )
}

/**
 * Read the enumerated code (the discriminator enum's single value) from a
 * variant's properties, e.g. `error_code = "device_offline"`.
 */
function variantCode(
  variant: DiscriminatedListProperty['variants'][number],
  discriminator: string,
): string | null {
  const prop = variant.properties.find(
    (p) => p.name === discriminator && p.format === 'enum',
  ) as { values?: Array<{ name: string }> } | undefined
  return prop?.values?.[0]?.name ?? null
}

/**
 * Group a resource's `errors` or `warnings` property into ordered code groups:
 * the ungrouped variants first (no heading), then each named variant group in
 * blueprint order. Entries within a group are sorted by code. Returns an empty
 * array when the property is absent or has no documented variants.
 */
function groupCodes(prop: Property | undefined): CodeGroup[] {
  if (!isDiscriminatedListProperty(prop)) return []

  const entriesFor = (key: string | null): CodeEntry[] =>
    prop.variants
      .filter((v) => v.variantGroupKey === key)
      .map((v) => {
        const code = variantCode(v, prop.discriminator)
        return code == null
          ? null
          : { code, description: (v.description ?? '').trim() }
      })
      .filter((e): e is CodeEntry => e != null)
      .sort((a, b) => a.code.localeCompare(b.code))

  const groups: CodeGroup[] = [{ name: null, entries: entriesFor(null) }]
  for (const group of prop.variantGroups) {
    groups.push({
      name: group.name,
      entries: entriesFor(group.variantGroupKey),
    })
  }
  return groups.filter((g) => g.entries.length > 0)
}

/**
 * Render one code entry as bold code plus its description, matching the
 * original GitBook layout.
 */
function renderEntry(entry: CodeEntry): string {
  const description =
    entry.description || `Indicates the \`${entry.code}\` state.`
  return [`**\`${entry.code}\`**`, '', description, '', '---'].join('\n')
}

/** Render an `## Errors` or `## Warnings` section, or '' when there are none. */
function renderSection(title: string, groups: CodeGroup[]): string {
  if (groups.length === 0) return ''
  const blocks: string[] = [`## ${title}`]
  for (const group of groups) {
    if (group.name != null) blocks.push(`### ${group.name}`)
    for (const entry of group.entries) blocks.push(renderEntry(entry))
  }
  return blocks.join('\n\n')
}

/** The noun for a resource, from its object page title (`The Device Object` ->
 * `Device`) or a humanized route path. */
function resourceNoun(objectContent: string | null, routePath: string): string {
  const match = objectContent?.match(/^title:\s*['"]?(.+?)['"]?\s*$/m)
  const objectTitle = match?.[1]
  const noun = objectTitle
    ?.replace(/^The\s+/, '')
    .replace(/\s+Object$/, '')
    .trim()
  if (noun) return noun

  return routePath
    .slice(1)
    .split('/')
    .map((seg) =>
      seg
        .split('_')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' '),
    )
    .join(' ')
}

/** The `Errors`/`Warnings`/`Errors and Warnings` suffix for the given sections. */
function kindSuffix(hasErrors: boolean, hasWarnings: boolean): string {
  if (hasErrors && hasWarnings) return 'Errors and Warnings'
  return hasErrors ? 'Errors' : 'Warnings'
}

/** Render the full standalone errors/warnings page (frontmatter + sections). */
function renderPage(
  noun: string,
  errorSection: string,
  warningSection: string,
): string {
  const title = `${noun} ${kindSuffix(Boolean(errorSection), Boolean(warningSection))}`
  const kinds =
    errorSection && warningSection
      ? 'Errors and warnings'
      : errorSection
        ? 'Errors'
        : 'Warnings'
  const description = `${kinds} that Seam reports on the ${noun} resource, each with its code and meaning.`
  const frontmatter = [
    '---',
    `title: '${title.replace(/'/g, "\\'")}'`,
    `description: '${description.replace(/'/g, "\\'")}'`,
    '---',
  ].join('\n')
  const body = [errorSection, warningSection].filter(Boolean).join('\n\n')
  return `${frontmatter}\n\n${body}\n`
}

async function readFileOrNull(path: string): Promise<string | null> {
  try {
    return await readFile(path, 'utf8')
  } catch {
    return null
  }
}

/**
 * Generate the per-resource `errors.mdx` pages. Returns the route paths that
 * received a page (e.g. `/devices`) so the caller can wire them into the
 * navigation.
 */
export async function updateErrorPages(
  blueprint: Blueprint,
  docsDir: string,
): Promise<string[]> {
  const routes: string[] = []

  for (const resource of blueprint.resources) {
    if (resource.isUndocumented) continue

    const errorGroups = groupCodes(
      resource.properties.find((p) => p.name === 'errors'),
    )
    const warningGroups = groupCodes(
      resource.properties.find((p) => p.name === 'warnings'),
    )
    if (errorGroups.length === 0 && warningGroups.length === 0) continue

    const resourceDir = join(docsDir, 'api', resource.routePath.slice(1))
    const objectContent = await readFileOrNull(join(resourceDir, 'object.mdx'))
    if (objectContent == null) {
      // Some resources with errors/warnings have no object page yet (e.g.
      // /acs/credentials). Skip until a page exists.
      console.log(
        `  No object page for errors on ${resource.routePath}, skipping`,
      )
      continue
    }

    const noun = resourceNoun(objectContent, resource.routePath)
    const page = renderPage(
      noun,
      renderSection('Errors', errorGroups),
      renderSection('Warnings', warningGroups),
    )
    await writeFile(join(resourceDir, 'errors.mdx'), page)
    routes.push(resource.routePath)
  }

  return routes
}
