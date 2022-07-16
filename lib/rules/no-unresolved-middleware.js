/**
 * @fileoverview disallow `setTimeout/setInterval` in `asyncData/fetch`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

const fs = require('fs')
const path = require('path')

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Check for the presence of middleware.',
      recommended: 'error',
      category: 'recommended'
    },
    messages: {
      noUnresolvedMiddleware: '{{ fileName }} is not found.'
    },
    schema: [
      {
        type: 'object'
      }
    ]
  },

  create: (context) => {
    const srcDir = context.options[0]?.srcDir ?? '/'

    return {
      ExportDefaultDeclaration (node) {
        if (!context.getCwd) {
          return
        }
        const middlewareDir = path.join(context.getCwd(), srcDir, 'middleware')

        if (node.declaration.type !== 'CallExpression') {
          return
        }

        if (node.declaration.callee.type !== 'Identifier') {
          return
        }

        const arg = node.declaration.arguments[0]

        if (arg.type !== 'ObjectExpression') {
          return
        }

        const properties = arg.properties

        const middlewareNode = properties.find(
          (x) =>
            x.type === 'Property' &&
            x.key.type === 'Identifier' &&
            x.key.name === 'middleware'
        )

        if (!middlewareNode) {
          return
        }

        if (middlewareNode.type !== 'Property') {
          return
        }

        if (middlewareNode.value.type !== 'Literal') {
          return
        }

        const middlewareFile = middlewareNode.value.value?.toString()

        if (!middlewareFile) {
          return
        }

        const isJsExist = fs.existsSync(
          path.resolve(middlewareDir, `${middlewareFile}.js`)
        )

        const isTsExist = fs.existsSync(
          path.resolve(middlewareDir, `${middlewareFile}.ts`)
        )

        if (isJsExist || isTsExist) {
          return
        }

        context.report({
          node,
          messageId: 'noUnresolvedMiddleware',
          data: {
            fileName: middlewareFile
          }
        })
      }
    }
  }
}
