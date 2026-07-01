/* eslint-disable no-console */
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import type { Blueprint, DiscriminatedListProperty } from '@seamapi/blueprint'

import { formatType, indent, sampleValue } from './property-fields.js'

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
 * resource with an `## Errors` and an `## Warnings` section. Each section opens
 * with the object shape (an example payload plus a properties accordion) and
 * then lists every code with its meaning. A standalone page (rather than a
 * section on the object page) renders full width and matches the layout the
 * events pages use.
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
 * Order an object's properties for display: the discriminator first, then
 * `message` and `created_at`, then everything else alphabetically. Keeps the
 * example payload and properties list readable and consistent across pages.
 */
function orderProperties(props: Property[], discriminator: string): Property[] {
  const priority = [discriminator, 'message', 'created_at']
  const rank = (name: string): number => {
    const i = priority.indexOf(name)
    return i === -1 ? priority.length : i
  }
  return [...props].sort(
    (a, b) => rank(a.name) - rank(b.name) || a.name.localeCompare(b.name),
  )
}

/**
 * The union of properties across a discriminated list's variants, deduplicated
 * by name (first occurrence wins). Variants share a core shape (`error_code` or
 * `warning_code`, `message`, `created_at`) plus a few variant-specific flags, so
 * the union documents every field a reader might encounter.
 */
function unionProperties(prop: DiscriminatedListProperty): Property[] {
  const byName = new Map<string, Property>()
  for (const variant of prop.variants) {
    for (const p of variant.properties) {
      if (!byName.has(p.name)) byName.set(p.name, p)
    }
  }
  return orderProperties([...byName.values()], prop.discriminator)
}

/** Build an example object from one variant: the concrete code and its message,
 * with fixed sample values for the rest. */
function buildExample(
  variant: DiscriminatedListProperty['variants'][number],
  discriminator: string,
  code: string,
): Record<string, unknown> {
  const example: Record<string, unknown> = {}
  for (const p of orderProperties(variant.properties, discriminator)) {
    if (p.name === discriminator) example[p.name] = code
    else if (p.name === 'message') {
      example[p.name] = (variant.description ?? '').trim()
    } else example[p.name] = sampleValue(p)
  }
  return example
}

/** Render one property of the object shape as a Mintlify `<ResponseField>`. */
function renderShapeProperty(
  prop: Property,
  discriminator: string,
  kind: string,
): string {
  const body = [
    (prop.description ?? '').trim() || `The ${prop.name.replace(/_/g, ' ')}.`,
  ]
  if (prop.name === discriminator) {
    body.push('', `One of the ${kind} codes listed below.`)
  }
  return [
    `<ResponseField name="${prop.name}" type="${formatType(prop)}">`,
    indent(body.join('\n'), 2),
    '</ResponseField>',
  ].join('\n')
}

/**
 * Render the object shape for a section: an example payload (built from the
 * first variant) and an accordion documenting every property. Returns '' when
 * the property is missing or has no variants.
 */
function renderObjectShape(prop: Property | undefined, kind: string): string {
  if (!isDiscriminatedListProperty(prop)) return ''
  const first = prop.variants[0]
  if (first == null) return ''

  const code = variantCode(first, prop.discriminator) ?? ''
  const json = JSON.stringify(
    buildExample(first, prop.discriminator, code),
    null,
    2,
  )
  const fields = unionProperties(prop)
    .map((p) => renderShapeProperty(p, prop.discriminator, kind))
    .join('\n\n')
  const title = kind.charAt(0).toUpperCase() + kind.slice(1)

  return [
    `Each ${kind} is an object with the following shape:`,
    '',
    `\`\`\`json Example ${kind}`,
    json,
    '```',
    '',
    `<Accordion title="${title} object properties">`,
    '',
    fields,
    '',
    '</Accordion>',
  ].join('\n')
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

/**
 * Render an `## Errors` or `## Warnings` section: the object shape followed by
 * every code with its meaning. Returns '' when there are no codes. `kind` is the
 * singular noun (`error`/`warning`) used in prose.
 */
function renderSection(
  title: string,
  kind: string,
  prop: Property | undefined,
  groups: CodeGroup[],
): string {
  if (groups.length === 0) return ''
  const blocks: string[] = [`## ${title}`]
  const shape = renderObjectShape(prop, kind)
  if (shape) blocks.push(shape)
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

    const errorsProp = resource.properties.find((p) => p.name === 'errors')
    const warningsProp = resource.properties.find((p) => p.name === 'warnings')
    const errorGroups = groupCodes(errorsProp)
    const warningGroups = groupCodes(warningsProp)
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
      renderSection('Errors', 'error', errorsProp, errorGroups),
      renderSection('Warnings', 'warning', warningsProp, warningGroups),
    )
    await writeFile(join(resourceDir, 'errors.mdx'), page)
    routes.push(resource.routePath)
  }

  return routes
}
