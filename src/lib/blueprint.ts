import { createBlueprint, TypesModuleSchema } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import { formatCode, formatJson } from './format-code.js'

export const blueprint =
  ({
    types,
    skipCodeFormat = false,
  }: {
    types: unknown
    skipCodeFormat: boolean
  }) =>
  async (files: Metalsmith.Files, metalsmith: Metalsmith): Promise<void> => {
    const metadata = metalsmith.metadata()

    const codeSampleDefinitions =
      'codeSampleDefinitions' in metadata ? metadata.codeSampleDefinitions : []

    const resourceSampleDefinitions =
      'resourceSampleDefinitions' in metadata
        ? metadata.resourceSampleDefinitions
        : []

    const typesModule = TypesModuleSchema.parse({
      ...(typeof types === 'object' ? types : {}),
      codeSampleDefinitions,
      resourceSampleDefinitions,
    })

    const blueprint = await createBlueprint(typesModule, {
      ...(skipCodeFormat ? {} : { formatCode }),
    })
    Object.assign(metadata, blueprint)

    const json = await formatJson(JSON.stringify(blueprint))
    files['api/_blueprint.json'] = {
      contents: Buffer.from(json),
      layout: 'default.hbs',
    }
  }
