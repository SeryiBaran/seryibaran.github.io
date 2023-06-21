import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import critters from 'astro-critters'
import { astroImageTools } from 'astro-imagetools'
import compress from 'astro-compress'

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import remarkTextr from 'remark-textr'
import remarkEmoji from 'remark-emoji'
import { h } from 'hastscript'
import remarkTextrCustom from './remarkPlugins/remark-textr-custom.js'
import remarkToc from './remarkPlugins/remark-toc.patched'

// https://astro.build/config
export default defineConfig({
  site: 'https://seryibaran.github.io',
  integrations: [
    mdx(),
    sitemap(),
    astroImageTools,
    critters(),
    compress({
      html: true,
      css: true,
      js: true,
      img: false,
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
              '#'
            )
          },
        },
      ],
    ],
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
})
