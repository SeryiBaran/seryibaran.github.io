import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { astroImageTools } from "astro-imagetools";

import remarkToc from "./remarkPlugins/remark-toc.patched";

// https://astro.build/config
export default defineConfig({
  site: "https://seryibaran.github.io",
  integrations: [mdx(), sitemap(), astroImageTools],
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "Содержание" }]],
    extendDefaultPlugins: true,
  },
});
