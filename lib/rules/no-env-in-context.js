/**
 * @fileoverview disallow `context.isServer/context.isClient` in `asyncData/fetch/nuxtServerInit`
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
        'disallow `context.isServer/context.isClient` in `asyncData/fetch/nuxtServerInit`',
      category: 'base'
    },
    messages: {
      noEnv: 'Unexpected {{env}} in {{funcName}}.'
    }
  },

  create (context) {
    // variables should be defined here
    const forbiddenNodes = []
    const options = context.options[0] || {}

    const ENV = ['isServer', 'isClient']
    const HOOKS = new Set(['asyncData', 'fetch'].concat(options.methods || []))

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
      MemberExpression (node) {
        const propertyName = node.computed ? node.property.value : node.property.name
        if (propertyName && ENV.includes(propertyName)) {
          forbiddenNodes.push({ name: propertyName, node })
        }
      },
      ...utils.executeOnVue(context, obj => {
        for (const funcName of HOOKS) {
          const func = utils.getFunctionWithName(obj, funcName)
          const param = func && func.value ? func.value.params && func.value.params[0] : false
          if (param) {
            if (param.type === 'ObjectPattern') {
              for (const prop of param.properties) {
                if (prop.key && prop.key.name && ENV.includes(prop.key.name)) {
                  context.report({
                    node: prop,
                    messageId: 'noEnv',
                    data: {
                      env: prop.key.name,
                      funcName
                    }
                  })
                }
              }
            } else {
              for (const { name, node: child } of forbiddenNodes) {
                if (utils.isInFunction(func, child)) {
                  if (param.name === child.object.name) {
                    context.report({
                      node: child,
                      messageId: 'noEnv',
                      data: {
                        env: name,
                        funcName
                      }
                    })
                  }
                }
              }
            }
          }
        }
      })
    }
  }
}
