module.exports = {
  extends: require.resolve('./base.js'),
  rules: {
    'nuxt/no-img-element': 'error',
    'nuxt/no-timing-in-fetch-data': 'error'
  }
}
