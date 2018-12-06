const utils = require('eslint-plugin-vue/lib/utils')

module.exports = Object.assign(
  {
    getFuncNodeWithName (node, name) {
      return node.properties.find(item => item.type === 'Property' &&
        utils.getStaticPropertyName(item) === name &&
        (item.value.type === 'ArrowFunctionExpression' || item.value.type === 'FunctionExpression')
      )
    }
  },
  utils
)
