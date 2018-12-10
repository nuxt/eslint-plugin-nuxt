/**
 * @fileoverview disallow `process.server/process.client` in `mounted/beforeMount`
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
      description:
        'disallow `process.server/process.client` in `mounted/beforeMount`',
      category: 'base'
    },
    messages: {
      noEnv: 'Unexpected {{name}} in {{funcName}}.'
    }
  },

  create: function (context) {
    // variables should be defined here
    const forbiddenNodes = []
    const options = context.options[0] || {}

    const ENV = ['server', 'client']
    const HOOKS = new Set(['mounted', 'beforeMount'].concat(options.methods || []))

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
      MemberExpression (node) {
        const objectName = node.object.name
        if (objectName === 'process') {
          const propertyName = node.computed ? node.property.value : node.property.name
          if (propertyName && ENV.includes(propertyName)) {
            forbiddenNodes.push({ name: 'process.' + propertyName, node })
          }
        }
      },
      ...utils.executeOnVue(context, obj => {
        for (const funcName of HOOKS) {
          const func = utils.getFunctionWithName(obj, funcName)
          for (const { name, node: child } of forbiddenNodes) {
            if (utils.isInFunction(func, child)) {
              context.report({
                node: child,
                messageId: 'noEnv',
                data: {
                  name,
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
