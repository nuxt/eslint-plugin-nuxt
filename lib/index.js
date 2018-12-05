module.exports = {
  rules: {
    'no-this-in-async-data': require('./lib/rules/no-this-in-async-data')
  },
  configs: {
    'base': require('./configs/base')
  },
  processors: {
    '.vue': require('./processors')
  }
}
