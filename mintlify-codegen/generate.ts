/* eslint-disable no-console */
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { env } from 'node:process'

import type { Blueprint } from '@seamapi/blueprint'

import { getRawOpenApiSpec, loadBlueprint } from './load-data.js'
import { transformSpec } from './transform-spec.js'
import { updateDocsJson } from './update-nav.js'

const skipCodeFormat = env['SKIP_CODE_FORMAT'] != null
const codeGroupStartPattern = /^<(?:CodeGroup|Tabs)>/m
const codeGroupEndPattern = /<\/(?:CodeGroup|Tabs)>/

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
  return `<CodeGroup>\n\n${blocks.join('\n\n')}\n\n</CodeGroup>`
}

interface BlueprintProperty {
  name: string
  description: string
  format: string
  jsonType: string
  isDeprecated: boolean
  isUndocumented: boolean
}

function renderProperties(properties: BlueprintProperty[]): string {
  const fields = properties
    .filter((p) => !p.isUndocumented)
    .map((p) => {
      const type = formatPropertyType(p.format, p.jsonType)
      const attrs = [`name="${p.name}"`, `type="${type}"`]
      if (p.isDeprecated) attrs.push('deprecated')
      const desc = p.description || `The ${p.name.replace(/_/g, ' ')}.`
      return `<ResponseField ${attrs.join(' ')}>\n  ${desc}\n</ResponseField>`
    })
  return fields.join('\n\n')
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
    default:
      return jsonType
  }
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
    for (const { resourceType, samples, properties } of resources) {
      const sectionHeader = `## The ${resourceType} Object`
      const sectionIdx = content.indexOf(sectionHeader)
      const searchFrom = sectionIdx === -1 ? 0 : sectionIdx

      // Update CodeGroup/Tabs section
      const codeGroupMatch = codeGroupStartPattern.exec(
        content.slice(searchFrom),
      )
      if (codeGroupMatch) {
        const absStart = searchFrom + codeGroupMatch.index
        const endMatch = codeGroupEndPattern.exec(content.slice(absStart))
        if (endMatch) {
          const absEnd = absStart + endMatch.index + endMatch[0].length
          const newCodeGroup = renderCodeGroup(samples)
          content =
            content.slice(0, absStart) + newCodeGroup + content.slice(absEnd)
          changed = true
        }
      }

      // Update Properties section
      const propsHeader = '## Properties'
      const propsIdx = content.indexOf(propsHeader, searchFrom)
      if (propsIdx !== -1 && properties.length > 0) {
        const propsContentStart = propsIdx + propsHeader.length
        // Find the next ## heading or end of file to bound the properties section
        const nextSectionMatch = /\n## (?!Properties)/m.exec(
          content.slice(propsContentStart),
        )
        const propsContentEnd = nextSectionMatch
          ? propsContentStart + nextSectionMatch.index
          : content.length

        const newProps = '\n\n' + renderProperties(properties) + '\n\n'
        content =
          content.slice(0, propsContentStart) +
          newProps +
          content.slice(propsContentEnd)
        changed = true
      }
    }

    if (changed) {
      await writeFile(objectPath, content)
      updated.push(routePath)
    }
  }

  return updated
}
