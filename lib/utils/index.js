const utils = require('eslint-plugin-vue/lib/utils')

module.exports = Object.assign(
  {
    getProperties (node, names) {
      return node.properties.filter(
        p => p.type === 'Property' && (!names.size || names.has(utils.getStaticPropertyName(p.key)))
      )
    },
    getFuncNodeWithName (rootNode, name) {
      return this.getProperties(rootNode, [name]).filter(
        item => item.value.type === 'ArrowFunctionExpression' || item.value.type === 'FunctionExpression'
      )
    },
    * getParentFuncs (rootNode, parentNames, childNodes) {
      const nodes = this.getProperties(rootNode, parentNames)

      for (const item of nodes) {
        for (const { name, node: child } of childNodes) {
          const funcName = utils.getStaticPropertyName(item.key)
          if (!funcName) continue

          if (item.value.type === 'FunctionExpression') {
            if (
              child &&
              child.loc.start.line >= item.value.loc.start.line &&
              child.loc.end.line <= item.value.loc.end.line
            ) {
              yield { name, node: child, funcName }
            }
          }
        }
      }
    }
  },
  utils
)
