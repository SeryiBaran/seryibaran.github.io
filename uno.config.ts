import { defineConfig, presetUno, transformerDirectives } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { colors } from 'unocss/preset-mini'

import { PRIMARY_COLOR } from './src/consts'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetUno({
      dark: 'media',
    }),
  ],
  theme: {
    colors: {
      primary: colors[PRIMARY_COLOR],
    },
    fontFamily: {
      mono: '"JetBrains Mono", "Cascadia Code", "Inconsolata", "Consolas", "Input Mono", "JetBrains Mono", "Hack", "Liberation Mono", monospace',
      sans: '"Source Sans 3", "Microsoft Yahei", sans-serif',
    },
  },
})
