module.exports = {
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: [
    'nuxt'
  ],
  rules: {
    'nuxt/no-env-in-context': 'error',
    'nuxt/no-env-in-hooks': 'error',
    'nuxt/no-globals-in-created': 'error',
    'nuxt/no-this-in-fetch-data': 'error',
    'nuxt/no-cjs-in-config': 'error'
  }
}
