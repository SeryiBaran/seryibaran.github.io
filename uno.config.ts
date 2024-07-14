import { defineConfig, presetUno, presetWebFonts, transformerDirectives } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

import { colors } from 'unocss/preset-mini'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetWebFonts({
      fonts: [
        { name: 'Source Sans Pro' },
      ],
    }),
  ],
  theme: {
    colors: {
      primary: colors.orange,
    },
    fontFamily: {
      mono: '"Source Sans Pro","Microsoft Yahei",sans-serif, \'JetBrains Mono\', \'Cascadia Code\', \'Inconsolata\', \'Consolas\', \'Input Mono\', \'JetBrains Mono\', \'Hack\', \'Liberation Mono\', monospace',
    },
  },
})
