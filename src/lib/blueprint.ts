import { createBlueprint, type TypesModule } from '@seamapi/blueprint'
import * as types from '@seamapi/types/connect'
import type Metalsmith from 'metalsmith'

export const blueprint = (
  _files: Metalsmith.Files,
  metalsmith: Metalsmith,
): void => {
  const metadata = metalsmith.metadata()

  // TODO: Use TypesModuleSchema
  // const typesModule = TypesModuleSchema.parse({
  // ...types,
  // codeSampleDefinitions: (metadata as any).codeSampleDefinitions,
  // })
  const typesModule = {
    ...types,
    codeSampleDefinitions: (metadata as any).codeSampleDefinitions,
  } as unknown as TypesModule

  Object.assign(metadata, createBlueprint(typesModule))
}
