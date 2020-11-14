/**
 * @fileoverview disallow `setTimeout/setInterval` in `asyncData/fetch`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../require-func-head')

const RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('require-func-head', rule, {

  valid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          head() {
            return {
              title: "My page"
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
          head: {
            title: "My page"
          }
        }
      `,
      errors: [{
        message: '`head` property in component must be a function.',
        type: 'Property'
      }],
      output: `
        export default {
          head: function() {
return {
            title: "My page"
          };
}
        }
      `,
      parserOptions
    }
  ]
})
