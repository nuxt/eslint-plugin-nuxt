/**
 * @fileoverview disallow `window/document` in `created/beforeCreate`
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
      description: 'disallow `window/document` in `created/beforeCreate`',
      category: 'base'
    },
    messages: {
      noGlobals: 'Unexpected {{name}} in {{funcName}}.'
    }
  },

  create (context) {
    const forbiddenNodes = []
    const options = context.options[0] || {}

    const HOOKS = new Set(
      ['created', 'beforeCreate'].concat(options.methods || [])
    )
    const GLOBALS = ['window', 'document']

    function isGlobals (name) {
      return GLOBALS.includes(name)
    }

    return {
      MemberExpression (node) {
        if (!node.object) return

        const name = node.object.name

        if (isGlobals(name)) {
          forbiddenNodes.push({ name, node })
        }
      },
      VariableDeclarator (node) {
        if (!node.init) return

        const name = node.init.name

        if (isGlobals(name)) {
          forbiddenNodes.push({ name, node })
        }
      },
      ...utils.executeOnVue(context, obj => {
        for (const { funcName, name, node } of utils.getFunctionWithChild(obj, HOOKS, forbiddenNodes)) {
          context.report({
            node,
            messageId: 'noGlobals',
            data: {
              name,
              funcName
            }
          })
        }
      })
    }
  }
}
