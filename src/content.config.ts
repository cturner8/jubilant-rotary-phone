import { rssSchema } from "@astrojs/rss";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: rssSchema,
});

export const collections = { blog };
