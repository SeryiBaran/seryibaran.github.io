import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkTextr from "remark-textr";
import remarkFootnotes from "remark-footnotes";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";
import critters from "astro-critters";

import remarkEmoji from "./remarkPlugins/remark-emoji.patched.mjs";
import remarkTextrCustom from "./remarkPlugins/remark-textr-custom.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://seryibaran.github.io/",
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
    mdx(),
    astroImageTools,
    critters(),
  ],
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: "Содержание" }],
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
      [remarkTextr, { plugins: [remarkTextrCustom] }],
      [
        remarkEmoji,
        {
          emoticon: true,
        },
      ],
      remarkFootnotes,
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
