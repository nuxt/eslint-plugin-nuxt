/**
 * @fileoverview Disallow `require/modules.exports/exports` in `nuxt.config.js`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

const path = require('path')

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        'disallow commonjs module api `require/modules.exports/exports` in `nuxt.config.js`',
      category: 'base'
    },
    messages: {
      noCjs: 'Unexpected {{cjs}}, please use {{esm}} instead.'
    }
  },

  create (context) {
    // variables should be defined here
    const options = context.options[0] || {}
    const configFile = options.file || 'nuxt.config.js'
    let isNuxtConfig = false

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
      Program (node) {
        const filename = path.basename(context.getFilename())
        if (filename === configFile) {
          isNuxtConfig = true
        }
      },
      MemberExpression: function (node) {
        if (!isNuxtConfig) {
          return
        }

        // module.exports
        if (node.object.name === 'module' && node.property.name === 'exports') {
          context.report({
            node,
            messageId: 'noCjs',
            data: {
              cjs: 'module.exports',
              esm: 'export default'
            }
          })
        }

        // exports.
        if (node.object.name === 'exports') {
          const isInScope = context.getScope()
            .variables
            .some(variable => variable.name === 'exports')
          if (!isInScope) {
            context.report({
              node,
              messageId: 'noCjs',
              data: {
                cjs: 'exports',
                esm: 'export default'
              }
            })
          }
        }
      },
      CallExpression: function (call) {
        const module = call.arguments[0]

        if (
          !isNuxtConfig ||
          context.getScope().type !== 'module' ||
          !['ExpressionStatement', 'VariableDeclarator'].includes(call.parent.type) ||
          call.callee.type !== 'Identifier' ||
          call.callee.name !== 'require' ||
          call.arguments.length !== 1 ||
          module.type !== 'Literal' ||
          typeof module.value !== 'string'
        ) {
          return
        }

        context.report({
          node: call.callee,
          messageId: 'noCjs',
          data: {
            cjs: 'require',
            esm: 'import'
          }
        })
      }
    }
  }
}
