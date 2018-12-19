module.exports = {
  rules: {
    'no-env-in-context': require('./rules/no-env-in-context'),
    'no-env-in-hooks': require('./rules/no-env-in-hooks'),
    'no-globals-in-created': require('./rules/no-globals-in-created'),
    'no-this-in-fetch-data': require('./rules/no-this-in-fetch-data'),
    'no-timing-in-fetch-data': require('./rules/no-timing-in-fetch-data')
  },
  configs: {
    'base': require('./configs/base'),
    'recommended': require('./configs/recommended')
  },
  processors: {
    '.vue': require('./processors')
  }
}
