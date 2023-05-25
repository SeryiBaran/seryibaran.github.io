import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import { astroImageTools } from "astro-imagetools";
import compress from "astro-compress";
import remarkToc from "./remarkPlugins/remark-toc.patched";

// https://astro.build/config
export default defineConfig({
  site: "https://seryibaran.github.io",
  integrations: [mdx(), sitemap(), astroImageTools, critters(), compress()],
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: "Содержание",
        },
      ],
    ],
    extendDefaultPlugins: true,
  },
});
