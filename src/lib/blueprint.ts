import { createBlueprint, TypesModuleSchema } from '@seamapi/blueprint'
import * as types from '@seamapi/types/connect'
import type Metalsmith from 'metalsmith'

import { formatCode } from './format-code.js'

export const blueprint =
  ({ skipCodeFormat = false }) =>
  async (_files: Metalsmith.Files, metalsmith: Metalsmith): Promise<void> => {
    const metadata = metalsmith.metadata()

    const codeSampleDefinitions =
      'codeSampleDefinitions' in metadata ? metadata.codeSampleDefinitions : []

    const typesModule = TypesModuleSchema.parse({
      ...types,
      codeSampleDefinitions,
    })

    const blueprint = await createBlueprint(typesModule, {
      ...(skipCodeFormat ? {} : { formatCode }),
    })
    Object.assign(metadata, blueprint)
  }
