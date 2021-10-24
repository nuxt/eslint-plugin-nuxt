/**
 * @fileoverview Prohibit usage of HTML <img> element
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
      description: 'Prohibit usage of HTML <img> element',
      category: 'recommended'
    }
  },
  create: function (context) {
    return utils.defineTemplateBodyVisitor(context, {
      VElement (node) {
        if (node.rawName !== 'img') {
          return
        }

        if (node.startTag.attributes === 0) {
          return
        }

        context.report({
          node,
          message: 'Do not use <img>. Use Image from \'@nuxt/image\' instead. See https://image.nuxtjs.org/getting-started/installation/.'
        })
      }
    })
  }
}
