/**
 * @fileoverview disallow `this` in `asyncData/fetch`
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
      description: 'disallow `this` in `asyncData/fetch`',
      category: 'base'
    },
    messages: {
      noThis: 'Unexpected this in {{funcName}}.'
    }
  },

  create: function (context) {
    // variables should be defined here
    const forbiddenNodes = []
    const options = context.options[0] || {}

    const HOOKS = new Set(
      ['asyncData', 'fetch'].concat(options.methods || [])
    )

    let isThisUsed

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    function enterFunction () {
      isThisUsed = false
    }

    function exitFunction (node) {
      if (isThisUsed) {
        forbiddenNodes.push(node)
      }
    }

    function markThisUsed () {
      isThisUsed = true
    }

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
      FunctionExpression: enterFunction,
      'FunctionExpression:exit': exitFunction,
      ArrowFunctionExpression: enterFunction,
      'ArrowFunctionExpression:exit': exitFunction,
      ThisExpression: markThisUsed,
      Super: markThisUsed,
      ...utils.executeOnVue(context, obj => {
        for (const funcName of HOOKS) {
          const func = utils.getFunctionWithName(obj, funcName)
          if (func && func.value && forbiddenNodes.includes(func.value)) {
            context.report({
              node: func.key,
              messageId: 'noThis',
              data: {
                funcName
              }
            })
          }
        }
      })
    }
  }
}
