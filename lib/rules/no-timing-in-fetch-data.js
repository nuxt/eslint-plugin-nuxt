/**
 * @fileoverview disallow `setTimeout/setInterval` in `asyncData/fetch`
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
      description: 'disallow `setTimeout/setInterval` in `asyncData/fetch`',
      category: 'base'
    },
    messages: {
      noTiming: 'Unexpected {{name}} in {{funcName}}.'
    }
  },

  create (context) {
    const forbiddenNodes = []
    const options = context.options[0] || {}

    const HOOKS = new Set(
      ['fetch', 'asyncData'].concat(options.methods || [])
    )
    const TIMING = ['setTimeout', 'setInterval']

    function isTiming (name) {
      return TIMING.includes(name)
    }

    return {
      CallExpression (node) {
        if (!node.callee) return

        const name = node.callee.name

        if (isTiming(name)) {
          forbiddenNodes.push({ name, node })
        }
      },
      VariableDeclarator (node) {
        if (!node.init) return

        const name = node.init.name

        if (isTiming(name)) {
          forbiddenNodes.push({ name, node })
        }
      },
      ...utils.executeOnVue(context, obj => {
        for (const { funcName, name, node } of utils.getFunctionWithChild(obj, HOOKS, forbiddenNodes)) {
          context.report({
            node,
            messageId: 'noTiming',
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
