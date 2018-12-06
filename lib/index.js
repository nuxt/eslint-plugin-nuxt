module.exports = {
  rules: {
    'no-this-in-async-data': require('./rules/no-this-in-async-data'),
    'no-this-in-fetch': require('./rules/no-this-in-fetch')
  },
  configs: {
    'base': require('./configs/base')
  },
  processors: {
    '.vue': require('./processors')
  }
}
