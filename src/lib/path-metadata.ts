import { z } from 'zod'

export const PathMetadataSchema = z.record(
  z.string(),
  z.object({
    title: z.string().trim().min(1),
  }),
)

export type PathMetadata = z.infer<typeof PathMetadataSchema>