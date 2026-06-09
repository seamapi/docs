/* eslint-disable no-console */
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { env } from 'node:process'

import { getRawOpenApiSpec, loadBlueprint } from './load-data.js'
import { transformSpec } from './transform-spec.js'
import { updateDocsJson } from './update-nav.js'

const skipCodeFormat = env['SKIP_CODE_FORMAT'] != null

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
