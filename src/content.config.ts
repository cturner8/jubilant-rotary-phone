import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/collections/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
