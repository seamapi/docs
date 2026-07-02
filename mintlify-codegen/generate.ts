/* eslint-disable no-console */
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { env } from 'node:process'

import type { Blueprint } from '@seamapi/blueprint'

import { canonicalizeGeneratedLinks } from './canonicalize-links.js'
import { dedupeConceptLinksInPages } from './concept-links.js'
import { updateEventPages } from './events.js'
import { getRawOpenApiSpec, loadBlueprint } from './load-data.js'
import { transformSpec } from './transform-spec.js'
import { insertEventsPagesIntoNav, updateDocsJson } from './update-nav.js'

const skipCodeFormat = env['SKIP_CODE_FORMAT'] != null

const hiddenProperties: Record<string, Set<string>> = {}

console.log('Mintlify OpenAPI codegen starting...')
if (skipCodeFormat) {
  console.log('  SKIP_CODE_FORMAT is set — skipping code formatting')
}

// Phase A+B: Load inputs and create blueprint
console.log('Loading blueprint...')
const { blueprint, pathMetadata } = await loadBlueprint(skipCodeFormat)
const totalEndpoints = blueprint.routes.reduce(
  (sum, r) => sum + r.endpoints.length,
  0,
)
console.log(
  `  Blueprint loaded: ${totalEndpoints} endpoints across ${blueprint.routes.length} routes`,
)

// Phase C: Get and transform the raw OpenAPI spec
console.log('Transforming OpenAPI spec...')
const rawSpec = getRawOpenApiSpec()
const { spec, stats } = transformSpec(rawSpec, blueprint, pathMetadata)

// Phase D: Write the enriched OpenAPI spec
const outputDir = join(import.meta.dirname, '..', 'mintlify-docs')
const outputPath = join(outputDir, 'openapi.json')

const orderedSpec = {
  openapi: spec.openapi,
  info: spec.info,
  servers: spec.servers,
  components: spec.components,
  ...(spec.tags ? { tags: spec.tags } : {}),
  paths: spec.paths,
}
await writeFile(outputPath, JSON.stringify(orderedSpec, null, 2))

const size = JSON.stringify(orderedSpec).length
console.log(
  `  Wrote openapi.json: ${stats.totalEndpoints} endpoints (${(size / 1024).toFixed(0)}KB)`,
)

// Phase E: Update docs.json navigation
console.log('Updating docs.json navigation...')
const specPaths = new Set(Object.keys(spec.paths))
await updateDocsJson(specPaths)

// Phase F: Update resource sample tabs in object.mdx files
console.log('Updating object page resource samples...')
const updatedObjects = await updateObjectPages(blueprint, outputDir)
if (updatedObjects.length > 0) {
  console.log(
    `  Updated ${updatedObjects.length} object pages: ${updatedObjects.join(', ')}`,
  )
}

// Phase F.5: Generate event documentation from blueprint.events — a dedicated
// events page per resource plus the `event_type` enum on the Event object page.
// Runs after object pages (so it can strip any legacy embedded events section)
// and before link canonicalization (so event-description links are rewritten).
console.log('Updating event documentation...')
const updatedEvents = await updateEventPages(blueprint, outputDir)
if (updatedEvents.length > 0) {
  console.log(
    `  Generated events pages for ${updatedEvents.length} resources: ${updatedEvents.join(', ')}`,
  )
}

// Phase F.6: Wire the generated events pages into the sidebar next to their
// object page. Runs after nav (Phase E) so its transforms don't strip them.
await insertEventsPagesIntoNav(updatedEvents)

// Phase G: canonicalize docs links in generated output. Guards against two
// classes of upstream @seamapi/types regression:
//   1. legacy `/latest` reappearing in `docs.seam.co/latest/...` links
//      (the site serves at the root; a `/latest/:path*` redirect handles old
//      inbound URLs). See DOC-206 / DOC-199.
//   2. links that target a path which docs.json redirects elsewhere — these
//      still resolve in the browser but cost an extra hop and dodge anchor
//      validation. We rewrite them to their final canonical destination so
//      generated content links directly. See DOC-210.
// This is self-healing: every `npm run generate` re-applies it, so source
// descriptions can lag without leaving stale links in the published docs.
console.log('Canonicalizing docs links in generated output...')
const sanitizedCount = await canonicalizeGeneratedLinks(outputDir)
console.log(`  Canonicalized links in ${sanitizedCount} generated file(s)`)

// Phase H: de-duplicate generic concept links (workspace, connected account,
// device, ...) within each page — keep the first, unwrap the rest — so a reader
// gets the link on first encounter without it repeating on every shared
// property. Runs after canonicalization so it dedupes final canonical targets.
// Event pages are skipped here: their concept links are stripped entirely at
// render time (Phase F.5). See concept-links.ts for the full policy.
console.log('De-duplicating concept links per page...')
const dedupedCount = await dedupeConceptLinksInPages(outputDir)
console.log(`  De-duplicated concept links in ${dedupedCount} page(s)`)

console.log(`\nDone!`)
console.log(`  Removed undocumented paths: ${stats.removedPaths}`)
console.log(`  Total documented endpoints: ${stats.totalEndpoints}`)
console.log(`  With code samples: ${stats.withCodeSamples}`)
console.log(`  With scoped action_attempts: ${stats.withActionAttempts}`)
console.log(
  `  Without code samples: ${stats.withoutCodeSamples.length} endpoints`,
)
if (stats.withoutCodeSamples.length > 0) {
  console.log(
    `  Missing samples: ${stats.withoutCodeSamples.slice(0, 10).join(', ')}${stats.withoutCodeSamples.length > 10 ? `... and ${stats.withoutCodeSamples.length - 10} more` : ''}`,
  )
}

function renderCodeGroup(
  samples: Array<{
    title: string
    description: string
    properties: Record<string, unknown>
  }>,
): string {
  const blocks = samples.map((s) => {
    const json = JSON.stringify(s.properties, null, 2)
    return `\`\`\`json ${s.title}\n${json}\n\`\`\``
  })
  return `<ResponseExample>\n\n${blocks.join('\n\n')}\n\n</ResponseExample>`
}

interface BlueprintProperty {
  name: string
  description: string
  format: string
  jsonType: string
  isDeprecated: boolean
  isUndocumented: boolean
  properties?: BlueprintProperty[]
  propertyGroups?: Array<{ name: string; propertyGroupKey: string }>
  propertyGroupKey?: string | null
}

function shouldHide(resourceType: string, prop: BlueprintProperty): boolean {
  if (prop.isUndocumented) return true
  return hiddenProperties[resourceType]?.has(prop.name) ?? false
}

function renderResponseField(
  prop: BlueprintProperty,
  resourceType: string,
): string {
  const type = formatPropertyType(prop.format, prop.jsonType)
  const attrs = [`name="${prop.name}"`, `type="${type}"`]
  if (prop.isDeprecated) attrs.push('deprecated')
  const desc = prop.description || `The ${prop.name.replace(/_/g, ' ')}.`

  if (
    prop.format === 'object' &&
    prop.properties &&
    prop.properties.length > 0
  ) {
    const children = prop.properties
      .filter((c) => !shouldHide(resourceType, c))
      .map((c) => renderResponseField(c, resourceType))
    if (children.length > 0) {
      return [
        `<ResponseField ${attrs.join(' ')}>`,
        `  ${desc}`,
        `  <Expandable title="properties">`,
        ...children.map((c) => indent(c, 4)),
        `  </Expandable>`,
        `</ResponseField>`,
      ].join('\n')
    }
  }

  return `<ResponseField ${attrs.join(' ')}>\n  ${desc}\n</ResponseField>`
}

function indent(text: string, spaces: number): string {
  const pad = ' '.repeat(spaces)
  return text
    .split('\n')
    .map((line) => (line.trim() ? pad + line : line))
    .join('\n')
}

function renderProperties(
  properties: BlueprintProperty[],
  resourceType: string,
): string {
  const ungrouped = properties.filter(
    (p) => !shouldHide(resourceType, p) && !p.propertyGroupKey,
  )
  const fields = ungrouped.map((p) => renderResponseField(p, resourceType))
  return fields.join('\n\n')
}

function renderGroupedProperties(
  properties: BlueprintProperty[],
  resourceType: string,
): string {
  const groups = new Map<string, { name: string; props: BlueprintProperty[] }>()
  for (const p of properties) {
    if (shouldHide(resourceType, p) || !p.propertyGroupKey) continue
    const existing = groups.get(p.propertyGroupKey)
    if (existing) {
      existing.props.push(p)
    } else {
      groups.set(p.propertyGroupKey, { name: p.propertyGroupKey, props: [p] })
    }
  }

  if (groups.size === 0) return ''

  const sections: string[] = []
  for (const [, { props }] of groups) {
    for (const p of props) {
      sections.push(renderResponseField(p, resourceType))
    }
  }
  return sections.join('\n\n')
}

function formatPropertyType(format: string, jsonType: string): string {
  switch (format) {
    case 'id':
      return 'String (UUID)'
    case 'datetime':
      return 'String (ISO 8601)'
    case 'enum':
      return 'Enum (String)'
    case 'list':
      return 'Array'
    case 'boolean':
      return 'Boolean'
    case 'string':
      return 'String'
    case 'object':
      return 'Object'
    default:
      return jsonType
  }
}

function renderResourceSection(
  resourceType: string,
  description: string,
  samples: Array<{
    title: string
    description: string
    properties: Record<string, unknown>
  }>,
  properties: BlueprintProperty[],
): string {
  const parts: string[] = []

  parts.push(description)

  // Response example (right-side sticky JSON panel)
  parts.push(renderCodeGroup(samples))

  parts.push('---')
  parts.push('## Properties')
  parts.push(renderProperties(properties, resourceType))

  // Grouped properties (e.g., Hardware, Access Codes on device)
  const grouped = renderGroupedProperties(properties, resourceType)
  if (grouped) {
    parts.push(grouped)
  }

  // Nested object properties (e.g., device.properties with sub-groups)
  const propsField = properties.find(
    (p) => p.name === 'properties' && p.format === 'object',
  )
  if (propsField?.properties && propsField.properties.length > 0) {
    const subGroups = propsField.propertyGroups ?? []
    if (subGroups.length > 0) {
      for (const group of subGroups) {
        const groupProps = propsField.properties.filter(
          (p) =>
            p.propertyGroupKey === group.propertyGroupKey &&
            !shouldHide(resourceType, p),
        )
        if (groupProps.length === 0) continue
        parts.push(`## ${group.name}`)
        parts.push(
          groupProps
            .map((p) => renderResponseField(p, resourceType))
            .join('\n\n'),
        )
      }
    } else {
      const visibleChildren = propsField.properties.filter(
        (p) => !shouldHide(resourceType, p),
      )
      if (visibleChildren.length > 0) {
        parts.push(`## ${resourceType}.properties`)
        parts.push(
          visibleChildren
            .map((p) => renderResponseField(p, resourceType))
            .join('\n\n'),
        )
      }
    }
  }

  return parts.join('\n\n')
}

async function updateObjectPages(
  bp: Blueprint,
  docsDir: string,
): Promise<string[]> {
  const updated: string[] = []

  const resourcesByRoute = new Map<
    string,
    Array<{
      resourceType: string
      description: string
      samples: Array<{
        title: string
        description: string
        properties: Record<string, unknown>
      }>
      properties: BlueprintProperty[]
    }>
  >()
  for (const resource of bp.resources) {
    if (resource.resourceSamples.length === 0) continue
    const existing = resourcesByRoute.get(resource.routePath) ?? []
    existing.push({
      resourceType: resource.resourceType,
      description: resource.description,
      samples: resource.resourceSamples,
      properties: resource.properties as BlueprintProperty[],
    })
    resourcesByRoute.set(resource.routePath, existing)
  }

  for (const [routePath, resources] of resourcesByRoute) {
    const objectPath = join(docsDir, 'api', routePath.slice(1), 'object.mdx')

    let content: string
    try {
      content = await readFile(objectPath, 'utf8')
    } catch {
      continue
    }

    let changed = false
    // Process resources in reverse order so index shifts don't affect earlier sections
    for (const { resourceType, description, samples, properties } of [
      ...resources,
    ].reverse()) {
      const sectionHeader = `## The ${resourceType} Object`
      const sectionIdx = content.indexOf(sectionHeader)
      if (sectionIdx === -1) continue

      const sectionContentStart = content.indexOf('\n', sectionIdx) + 1

      // Find end of this resource section: next "## The X Object" or end of file
      const nextResourceMatch = /\n## The \w+ Object/m.exec(
        content.slice(sectionContentStart),
      )
      const sectionEnd = nextResourceMatch
        ? sectionContentStart + nextResourceMatch.index
        : content.length

      const newSection = renderResourceSection(
        resourceType,
        description,
        samples,
        properties,
      )
      content =
        content.slice(0, sectionContentStart) +
        '\n' +
        newSection +
        '\n' +
        content.slice(sectionEnd)
      changed = true
    }

    if (changed) {
      await writeFile(objectPath, content)
      updated.push(routePath)
    }
  }

  return updated
}
