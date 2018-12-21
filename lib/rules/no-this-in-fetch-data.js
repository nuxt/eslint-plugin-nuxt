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

  create (context) {
    // variables should be defined here
    const forbiddenNodes = new Map()
    const options = context.options[0] || {}

    const HOOKS = new Set(
      ['asyncData', 'fetch'].concat(options.methods || [])
    )

    let nodeUsingThis = []

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    function enterFunction () {
      nodeUsingThis = []
    }

    function exitFunction (node) {
      if (nodeUsingThis.length > 0) {
        forbiddenNodes.set(node, nodeUsingThis)
      }
    }

    function markThisUsed (node) {
      nodeUsingThis.push(node)
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
          const prop = utils.getFunctionWithName(obj, funcName)
          if (prop && forbiddenNodes.has(prop.value)) {
            for (const node of forbiddenNodes.get(prop.value)) {
              context.report({
                node: node,
                messageId: 'noThis',
                data: {
                  funcName
                }
              })
            }
          }
        }
      })
    }
  }
}
