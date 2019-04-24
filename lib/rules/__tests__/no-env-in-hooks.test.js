/**
 * @fileoverview disallow `process.server/process.client` in `Vue Lifecycle Hooks`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../no-env-in-hooks')

var RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-env-in-hooks', rule, {

  valid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          mounted() {
            const foo = 'bar'
          },
          beforeMount() {
            const foo = 'bar'
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
          mounted() {
            if(process.server) {
              const foo = 'bar'
            }
          },
          beforeMount() {
            if(process.client) {
              const foo = 'bar'
            }
          }
        }
      `,
      errors: [{
        message: 'Unexpected process.server in mounted.',
        type: 'MemberExpression'
      }, {
        message: 'Unexpected process.client in beforeMount.',
        type: 'MemberExpression'
      }],
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
        export default {
          mounted() {
            if(process['client']) {
              const foo = 'bar'
            }
          },
          beforeMount() {
            if(process['server']) {
              const foo = 'bar'
            }
          }
        }
      `,
      errors: [{
        message: 'Unexpected process.client in mounted.',
        type: 'MemberExpression'
      }, {
        message: 'Unexpected process.server in beforeMount.',
        type: 'MemberExpression'
      }],
      parserOptions
    }
  ]
})
