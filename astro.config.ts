import { readFileSync } from 'node:fs'
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import expressiveCode from 'astro-expressive-code'

function rawFonts(ext: string[]) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_: any, id: string) {
      if (ext.some(e => id.endsWith(e))) {
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
    expressiveCode(),
    mdx(),
    sitemap(),
    (await import('@playform/inline')).default({}),
    (await import('@playform/compress')).default({
      CSS: true,
      HTML: false,
      Image: true,
      JavaScript: true,
    }),
  ],
  markdown: {
    remarkRehype: {
      footnoteLabel: 'Сноски',
    },
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },
  vite: {
    plugins: [rawFonts(['.ttf', '.woff']), UnoCSS('uno.config.ts'), Icons({
      compiler: 'astro',
    })],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
})
