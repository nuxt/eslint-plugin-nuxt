/**
 * @fileoverview Prevent using this in fetch
 * @author Clark Du
 */
'use strict'

const utils = require('../utils')

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'disallow `this` in fetch',
      category: 'base'
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    messages: {
      noThis: 'Unexpected this in fetch.'
    }
  },

  create: function (context) {
    // variables should be defined here
    const forbiddenNodes = []
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
        const node = utils.getFuncNodeWithName(obj, 'fetch')
        if (!node) return

        forbiddenNodes.forEach(el => {
          if (node.value === el) {
            context.report({
              node: node.key,
              messageId: 'noThis'
            })
          }
        })
      })
    }
  }
}
