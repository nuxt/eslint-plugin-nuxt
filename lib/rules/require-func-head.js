/**
 * @fileoverview enforce component's head property to be a function.
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

const utils = require('../utils')

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "enforce component's head property to be a function",
      category: 'recommended'
    },
    fixable: 'code',
    messages: {
      head: '`head` property in component must be a function.'
    }
  },

  create (context) {
    const sourceCode = context.getSourceCode()

    return utils.executeOnVueComponent(context, (obj) => {
      obj.properties
        .filter(p =>
          p.type === 'Property' &&
          p.key.type === 'Identifier' &&
          p.key.name === 'head' &&
          p.value.type !== 'FunctionExpression' &&
          p.value.type !== 'ArrowFunctionExpression' &&
          p.value.type !== 'Identifier' &&
          p.value.type !== 'CallExpression'
        )
        .forEach(p => {
          context.report({
            node: p,
            messageId: 'head',
            fix (fixer) {
              const tokens = utils.getFirstAndLastTokens(p.value, sourceCode)

              return [
                fixer.insertTextBefore(tokens.first, 'function() {\nreturn '),
                fixer.insertTextAfter(tokens.last, ';\n}')
              ]
            }
          })
        })
    })
  }
}
