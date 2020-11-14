const utils = require('eslint-plugin-vue/lib/utils')

module.exports = Object.assign(
  {
    getProperty (node, name, condition) {
      return node.properties.find(
        p => p.type === 'Property' && name === utils.getStaticPropertyName(p) && condition(p)
      )
    },
    getProperties (node, names) {
      return node.properties.filter(
        p => p.type === 'Property' && (!names.size || names.has(utils.getStaticPropertyName(p)))
      )
    },
    getFunctionWithName (rootNode, name) {
      return this.getProperty(
        rootNode,
        name,
        item => item.value.type === 'ArrowFunctionExpression' || item.value.type === 'FunctionExpression'
      )
    },
    isInFunction (func, child) {
      if (func.value.type === 'FunctionExpression') {
        if (
          child &&
          child.loc.start.line >= func.value.loc.start.line &&
          child.loc.end.line <= func.value.loc.end.line
        ) {
          return true
        }
      }
    },
    * getFunctionWithChild (rootNode, funcNames, childNodes) {
      const funcNodes = this.getProperties(rootNode, funcNames)

      for (const func of funcNodes) {
        for (const { name, node: child } of childNodes) {
          const funcName = utils.getStaticPropertyName(func)
          if (!funcName) continue

          if (this.isInFunction(func, child)) {
            yield { name, node: child, func, funcName }
          }
        }
      }
    },
    isOpenParen (token) {
      return token.type === 'Punctuator' && token.value === '('
    },
    isCloseParen (token) {
      return token.type === 'Punctuator' && token.value === ')'
    },
    getFirstAndLastTokens (node, sourceCode) {
      let first = sourceCode.getFirstToken(node)
      let last = sourceCode.getLastToken(node)

      // If the value enclosed by parentheses, update the 'first' and 'last' by the parentheses.
      while (true) {
        const prev = sourceCode.getTokenBefore(first)
        const next = sourceCode.getTokenAfter(last)
        if (this.isOpenParen(prev) && this.isCloseParen(next)) {
          first = prev
          last = next
        } else {
          return { first, last }
        }
      }
    }
  },
  utils
)
