module.exports = {
  extends: require.resolve('./base.js'),
  rules: {
    'nuxt/no-globals-in-created': 'error',
    'nuxt/no-timing-in-fetch-data': 'warn'
  }
}
