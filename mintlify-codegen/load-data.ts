import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { type Blueprint,createBlueprint } from '@seamapi/blueprint'
import * as types from '@seamapi/types/connect'
import jsYaml from 'js-yaml'

import { formatCode } from '../codegen/lib/format-code.js'

const yamlParse = (content: string): any => jsYaml.load(content)

interface PathMetadataEntry {
  title: string
  description?: string
  overview?: string
  alpha?: string
}

export type PathMetadata = Record<string, PathMetadataEntry>

/**
 * Load all YAML arrays from a directory, concatenating them into a flat array.
 * Replicates what @metalsmith/metadata does for directory sources.
 */
async function loadYamlArrayDir(dir: string): Promise<unknown[]> {
  const files = await readdir(dir)
  const arrays = await Promise.all(
    files
      .filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'))
      .sort()
      .map(async (f) => {
        const content = await readFile(join(dir, f), 'utf8')
        return yamlParse(content) as unknown[]
      }),
  )
  return arrays.flat()
}

/**
 * Load path metadata from paths.yaml.
 */
async function loadPathMetadata(filepath: string): Promise<PathMetadata> {
  const content = await readFile(filepath, 'utf8')
  return yamlParse(content) as PathMetadata
}

/**
 * Create a Blueprint with code samples from @seamapi/types and YAML definitions.
 */
export async function loadBlueprint(
  skipCodeFormat: boolean,
): Promise<{ blueprint: Blueprint; pathMetadata: PathMetadata }> {
  const dataDir = join(import.meta.dirname, '..', 'codegen', 'data')

  const [codeSampleDefinitions, resourceSampleDefinitions, pathMetadata] =
    await Promise.all([
      loadYamlArrayDir(join(dataDir, 'code-sample-definitions')),
      loadYamlArrayDir(join(dataDir, 'resource-sample-definitions')),
      loadPathMetadata(join(dataDir, 'paths.yaml')),
    ])

  const typesModule = {
    ...types,
    codeSampleDefinitions,
    resourceSampleDefinitions,
  }

  const blueprint = await createBlueprint(
    typesModule,
    skipCodeFormat ? {} : { formatCode },
  )

  return { blueprint, pathMetadata }
}

export function getRawOpenApiSpec(): any {
  return JSON.parse(JSON.stringify(types.openapi))
}
