import { defineCollection } from "astro:content";
import { blogSchema } from "./_schemas";

const posts = defineCollection({
  schema: blogSchema,
});

export const collections = { posts };
