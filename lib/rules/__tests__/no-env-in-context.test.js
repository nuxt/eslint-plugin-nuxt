/**
 * @fileoverview disallow `context.isServer/context.isClient` in `asyncData/fetch/nuxtServerInit`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../no-env-in-context')

const RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('no-env-in-context', rule, {

  valid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          async asyncData() {
            if(process.server) {
              const foo = 'bar'
            }
          },
          fetch() {
            if(process.client) {
              const foo = 'bar'
            }
          }
        }
      `,
      parserOptions
    }
  ],

  invalid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          asyncData(context) {
            if(context.isServer) {
              const foo = 'bar'
            }
          },
          fetch(context) {
            if(context.isClient) {
              const foo = 'bar'
            }
          }
        }
      `,
      errors: [{
        message: 'Unexpected isServer in asyncData.',
        type: 'MemberExpression'
      }, {
        message: 'Unexpected isClient in fetch.',
        type: 'MemberExpression'
      }],
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
        export default {
          asyncData(context) {
            if(context['isClient']) {
              const foo = 'bar'
            }
          },
          fetch(context) {
            if(context['isServer']) {
              const foo = 'bar'
            }
          }
        }
      `,
      errors: [{
        message: 'Unexpected isClient in asyncData.',
        type: 'MemberExpression'
      }, {
        message: 'Unexpected isServer in fetch.',
        type: 'MemberExpression'
      }],
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
        export default {
          asyncData({ isClient }) {
            if(isClient) {
              const foo = 'bar'
            }
          },
          fetch({ isServer }) {
            if(isServer) {
              const foo = 'bar'
            }
          }
        }
      `,
      errors: [{
        message: 'Unexpected isClient in asyncData.',
        type: 'Property'
      }, {
        message: 'Unexpected isServer in fetch.',
        type: 'Property'
      }],
      parserOptions
    }
  ]
})
