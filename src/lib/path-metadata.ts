import { z } from 'zod'

export const PathMetadataSchema = z.record(
  z.string(),
  z.object({
    title: z.string().trim().min(1),
    resources: z.array(z.string()).default([]),
    description: z.string().trim().min(1).optional(),
    overview: z.string().trim().min(1).optional(),
    alpha: z.string().trim().min(1).optional(),
  }),
)

export type PathMetadata = z.infer<typeof PathMetadataSchema>
