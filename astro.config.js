import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import critters from 'astro-critters'
import compress from 'astro-compress'

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import remarkTextr from 'remark-textr'
import remarkEmoji from 'remark-emoji'
import { h } from 'hastscript'
import remarkTextrCustom from './remarkPlugins/remark-textr-custom.js'
import remarkToc from './remarkPlugins/remark-toc.patched'

import { readFileSync } from 'node:fs'

// vite plugin to import fonts
function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = readFileSync(id)
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        }
      }
    },
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://seryibaran.github.io',
  integrations: [
    mdx(),
    sitemap(),
    critters(),
    compress({
      HTML: false,
      CSS: true,
      JavaScript: true,
      Image: false,
    }),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: 'Содержание',
        },
      ],
      [remarkTextr, { plugins: [remarkTextrCustom] }],
      [remarkEmoji, { emoticon: true }],
    ],
    remarkRehype: {
      footnoteLabel: 'Сноски',
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          properties: { class: 'headingLink' },
          content() {
            return h(
              'span',
              {
                title:
                  'Перейти к этому заголовку\n\nМожно будет скопировать ссылку в браузере и\nкому-то отправить',
              },
              '#',
            )
          },
        },
      ],
    ],
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },

  vite: {
    plugins: [rawFonts(['.ttf', '.woff'])],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
})
