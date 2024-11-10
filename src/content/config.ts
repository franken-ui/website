import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const docs = {
  group: z.string(),
  order: z.optional(z.number()),
  text: z.string(),
  title: z.string(),
  lead: z.optional(z.string()),
  wip: z.optional(z.boolean()),
  meta: z.optional(z.record(z.string())),
  ping: z.optional(z.boolean()),
  keywords: z.optional(z.string()),
  submenu: z.optional(
    z.array(
      z.object({
        href: z.string(),
        text: z.string(),
        target: z.optional(z.enum(["_self", "_blank", "_parent", "_top"])),
      }),
    ),
  ),
};

const twodotzero = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/docs/2.0" }),
  schema: z.object(docs),
});

export const collections = {
  "2.0": twodotzero,
};
