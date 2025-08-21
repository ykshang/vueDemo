import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,
  rules: {
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  },
})
