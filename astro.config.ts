import { readFileSync } from 'node:fs'
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import critters from 'astro-critters'
import compress from 'astro-compress'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'

// vite plugin to import fonts
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
    expressiveCode({
      themes: ['vitesse-dark', 'vitesse-light'],
      styleOverrides: {
        codeFontFamily: '\'JetBrains Mono\', \'Cascadia Code\', \'Inconsolata\', \'Consolas\', \'Input Mono\', \'JetBrains Mono\', \'Hack\', \'Liberation Mono\', monospace',
        uiFontFamily: 'inherit',
      },
    }),
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
