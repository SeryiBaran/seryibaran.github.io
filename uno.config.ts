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
      // mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      mono: '\'JetBrains Mono\', \'Inconsolata\', \'Consolas\', \'Input Mono\', \'JetBrains Mono\', \'Cascadia Code\', \'Hack\', \'Liberation Mono\', monospace',
    },
  },
})
