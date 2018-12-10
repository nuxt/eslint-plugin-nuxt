module.exports = {
  extends: require.resolve('./ssr.js'),
  rules: {
    'nuxt/no-timing-in-fetch-data': 'error'
  }
}
