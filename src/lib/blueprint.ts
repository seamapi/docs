import { createBlueprint, TypesModuleSchema } from '@seamapi/blueprint'
import * as types from '@seamapi/types/connect'
import type Metalsmith from 'metalsmith'
import { z } from 'zod'

import { formatCode } from './format-code.js'

export const blueprint = async (
  _files: Metalsmith.Files,
  metalsmith: Metalsmith,
): Promise<void> => {
  const metadata = metalsmith.metadata()

  const codeSampleDefinitions =
    'codeSampleDefinitions' in metadata ? metadata.codeSampleDefinitions : []

  // UPSTREAM: Ideally, path metadata would be unnecessary and contained inside the blueprint.
  const pathMetadata =
    'pathMetadata' in metadata
      ? PathMetadataSchema.parse(metadata.pathMetadata)
      : {}

  const typesModule = TypesModuleSchema.parse({
    ...types,
    codeSampleDefinitions,
  })

  const blueprint = await createBlueprint(typesModule, { formatCode })
  Object.assign(metadata, { ...blueprint, pathMetadata })
}

const PathMetadataSchema = z.record(
  z.string(),
  z.object({
    page: z.object({
      title: z.string().trim().min(1),
      description: z.string().trim().min(1),
    }),
  }),
)

export type PathMetadata = z.infer<typeof PathMetadataSchema>
