/**
 * @fileoverview disallow `process.server`/`process.client`/`process.browser` in `Vue Lifecycle Hooks`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../no-env-in-hooks')

const RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester()
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
          },
          beforeDestroy() {
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
          },
          beforeDestroy() {
            if(process.browser) {
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
      }, {
        message: 'Unexpected process.browser in beforeDestroy.',
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
          },
          beforeDestroy() {
            if(process['browser']) {
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
      }, {
        message: 'Unexpected process.browser in beforeDestroy.',
        type: 'MemberExpression'
      }],
      parserOptions
    }
  ]
})
