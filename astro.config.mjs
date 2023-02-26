import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkTextr from "remark-textr";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";

function typo(input) {
  return input
    .replace(/\.{3,}/gim, "…")
    .replace(/\?\.{2,}/gim, "?..")
    .replace(/\!\.{2,}/gim, "!..")
    .replace(/\(c\)/gim, "©")
    .replace(/\(r\)/gim, "®")
    .replace(/\(tm\)/gim, "™")
    .replace(/\+-/gim, "±")
    .replace(/\(tm\)/gim, "™")
    .replace(/\!{3,}/gim, "!!!")
    .replace(/\?{3,}/gim, "???")
    .replace(/\,+/gim, ",")
    .replace(/---/gim, "—");
}

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
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
      [remarkTextr, { plugins: [typo] }],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
