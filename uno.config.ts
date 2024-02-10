import { defineConfig, transformerDirectives, presetUno } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

import { colors, theme } from 'unocss/preset-mini'

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
      mono: "'Consolas', 'Input Mono', 'JetBrains Mono', 'Cascadia Code', 'Hack', 'Liberation Mono', monospace",
    }
  },
})
