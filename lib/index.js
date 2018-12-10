module.exports = {
  rules: {
    'no-this-in-async-data': require('./rules/no-this-in-async-data'),
    'no-this-in-fetch': require('./rules/no-this-in-fetch')
  },
  configs: {
    'base': require('./configs/base'),
    'ssr': require('./configs/ssr'),
    'recommended': require('./configs/recommended')
  },
  processors: {
    '.vue': require('./processors')
  }
}
