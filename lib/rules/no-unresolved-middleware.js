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

        if (
          middlewareNode.value.type !== 'Literal' &&
          middlewareNode.value.type !== 'ArrayExpression'
        ) {
          return
        }

        const report = (middlewareFile) => {
          const isJsExist = fs.existsSync(
            path.resolve(middlewareDir, middlewareFile + '.js')
          )

          const isTsExist = fs.existsSync(
            path.resolve(middlewareDir, middlewareFile + '.ts')
          )

          const isFileExist = isJsExist || isTsExist

          if (isFileExist) {
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

        if (middlewareNode.value.type === 'Literal') {
          const middlewareFile = middlewareNode.value.value?.toString()

          if (!middlewareFile) {
            return
          }

          report(middlewareFile)
        } else if (middlewareNode.value.type === 'ArrayExpression') {
          const middlewareFiles = middlewareNode.value.elements

          if (!middlewareFiles) {
            return
          }

          middlewareFiles.forEach((x) => {
            if (x.type !== 'Literal') {
              return
            }

            const middlewareFile = x.value?.toString()

            if (!middlewareFile) {
              return
            }

            report(middlewareFile)
          })
        }
      }
    }
  }
}
