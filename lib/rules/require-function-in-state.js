/**
 * @fileoverview `state` in `Vuex` store must be a function
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: '`state` in `Vuex` store must be a function',
      category: 'base'
    },
    messages: {
      funcState: 'state should be function.'
    }
  },

  create (context) {
    const funcVars = {}

    return {
      VariableDeclarator (node) {
        if (node.init.type === 'FunctionExpression') {
          funcVars[node.id.name] = node
        }
      },
      ExportNamedDeclaration (node) {
        if (node.declaration) {
          for (const declaration of node.declaration.declarations || []) {
            if (declaration.id.name === 'state' && node.init.type !== 'FunctionExpression') {
              context.report({
                node: declaration,
                messageId: 'funcState'
              })
            }
          }
        }
      },
      ExportSpecifier (node) {
        if (node.exported.name === 'state' && funcVars[node.local.name]) {
          context.report({
            node: funcVars[node.local.name],
            messageId: 'funcState'
          })
        }
      }
    }
  }
}
