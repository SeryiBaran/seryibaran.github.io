import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    updatedDate: z
      .string()
      .transform(str => (str ? new Date(str) : undefined))
      .or(z.date())
      .optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
})

export const collections = { blog }
