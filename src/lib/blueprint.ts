import { createBlueprint, TypesModuleSchema } from '@seamapi/blueprint'
import * as types from '@seamapi/types/connect'
import type Metalsmith from 'metalsmith'

import { formatCode } from './format-code.js'

export const blueprint = async (
  _files: Metalsmith.Files,
  metalsmith: Metalsmith,
): Promise<void> => {
  const metadata = metalsmith.metadata()

  const codeSampleDefinitions =
    'codeSampleDefinitions' in metadata ? metadata.codeSampleDefinitions : []

  // UPSTREAM: Ideally, path metadata would be unnecessary and contained inside the blueprint.
  const pathMetadata = 'pathMetadata' in metadata ? metadata.pathMetadata : {}

  const typesModule = TypesModuleSchema.parse({
    ...types,
    codeSampleDefinitions,
  })

  const blueprint = await createBlueprint(typesModule, { formatCode })
  Object.assign(metadata, { ...blueprint, pathMetadata })
}
