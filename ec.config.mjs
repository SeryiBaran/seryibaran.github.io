import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

export default {
  plugins: [pluginLineNumbers()],
  defaultProps: {
    showLineNumbers: true,
  },
  themes: ['vitesse-dark', 'vitesse-light'],
  styleOverrides: {
    codeFontFamily: '\'JetBrains Mono\', \'Cascadia Code\', \'Inconsolata\', \'Consolas\', \'Input Mono\', \'JetBrains Mono\', \'Hack\', \'Liberation Mono\', monospace',
    uiFontFamily: 'inherit',
  },
}
