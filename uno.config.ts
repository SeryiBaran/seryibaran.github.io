import { defineConfig, presetUno, transformerDirectives } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

import { colors } from 'unocss/preset-mini'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetUno({
      dark: 'media',
    }),
  ],
  theme: {
    colors: {
      primary: colors.blue,
    },
    fontFamily: {
      mono: '\'JetBrains Mono\', \'Cascadia Code\', \'Inconsolata\', \'Consolas\', \'Input Mono\', \'JetBrains Mono\', \'Hack\', \'Liberation Mono\', monospace',
    },
  },
})
