import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import critters from 'astro-critters'
import compress from 'astro-compress'

import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import remarkTextr from 'remark-textr'
import remarkEmoji from 'remark-emoji'
import { h } from 'hastscript'
import remarkTextrCustom from './remarkPlugins/remark-textr-custom.js'
import remarkToc from './remarkPlugins/remark-toc.patched'

import { readFileSync } from 'node:fs'

// vite plugin to import fonts
function rawFonts(ext: string[]) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_: any, id: string) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = readFileSync(id)
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        }
      }
      return undefined
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
      Image: true,
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
      // TODO: What the fuck... maybe fix later.
      // @ts-expect-error
      rehypeSlug,
      // @ts-expect-error
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
    plugins: [
      rawFonts(['.ttf', '.woff']),
      UnoCSS({
        configFile: 'uno.config.ts',
      }),
      Icons({
        compiler: 'astro',
      }),
    ],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
})
