import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: false,
  vue: true,
  typescript: true,

  stylistic: {
    indent: 2,
    semi: false,
    quotes: 'single',
  },

  rules: {
    'vue/max-attributes-per-line': 'off',
    'style/no-trailing-spaces': ['off', { filePatterns: ['**/*.md'] }],
  },
})
