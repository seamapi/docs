import { createBlueprint, TypesModuleSchema } from '@seamapi/blueprint'
import * as types from '@seamapi/types/connect'
import type Metalsmith from 'metalsmith'

export const blueprint = (
  _files: Metalsmith.Files,
  metalsmith: Metalsmith,
): void => {
  const metadata = metalsmith.metadata()

  if ('codeSampleDefinitions' in metadata) {
    const typesModule = TypesModuleSchema.parse({
      ...types,
      codeSampleDefinitions: metadata.codeSampleDefinitions,
    })

    Object.assign(metadata, createBlueprint(typesModule))
  }
}
