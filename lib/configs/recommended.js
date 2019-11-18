module.exports = {
  extends: require.resolve('./base.js'),
  rules: {
    'nuxt/no-timing-in-fetch-data': 'error',
    'nuxt/require-func-head': 'error'
  }
}
