import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import fs from "fs";
import remarkUnwrapImages from "remark-unwrap-images";
import purgecss from "astro-purgecss";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import { expressiveCodeOptions } from "./src/site.config";
import { remarkReadingTime } from "./src/utils/remark-reading-time";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["webmention.io"],
  },
  integrations: [
    expressiveCode(expressiveCodeOptions),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    (await import("@playform/inline")).default({}),
    (await import("@playform/compress")).default({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
    }),
    purgecss(),
  ],
  markdown: {
    rehypePlugins: [rehypeKatex],
    // @ts-ignore
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime, remarkMath],
    remarkRehype: {
      footnoteLabel: "Сноски",
      footnoteLabelProperties: {
        className: [""],
      },
    },
  },
  // https://docs.astro.build/en/guides/prefetch/
  prefetch: true,
  // ! Please remember to replace the following site property with your own domain
  site: "https://seryibaran.github.io/",
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    plugins: [rawFonts([".ttf", ".woff"])],
  },
});

function rawFonts(ext: string[]) {
  return {
    name: "vite-plugin-raw-fonts",
    // @ts-expect-error:next-line
    transform(_, id) {
      // eslint-disable-next-line
      if (ext.some((e) => id.endsWith(e))) {
        // eslint-disable-next-line
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        };
      }
    },
  };
}
