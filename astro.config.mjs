import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import rehypeClassNames from "rehype-class-names";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), mdx()],
  markdown: {
    rehypePlugins: [
      [
        rehypeClassNames,
        {
          a: "uk-link",
          h1: "uk-h1",
          h2: "uk-h2 mt-10",
          h3: "uk-h3 mt-10",
          h4: "uk-h4 mt-10",
          p: "uk-paragraph",
          table: "uk-table uk-table-divider uk-table-responsive mt-10",
          ul: "uk-list uk-list-bullet mt-6",
        },
      ],
    ],
  },
});
