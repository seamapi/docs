import { z } from 'zod'

export const ResourceSampleDefinitionsSchema = z.array(
  z.object({
    title: z.string().trim().min(1),
    description: z.string(),
    resource_type: z.string(),
    properties: z.record(z.string(), z.any()),
  }),
)

export type ResourceSampleDefinitions = z.infer<
  typeof ResourceSampleDefinitionsSchema
>
