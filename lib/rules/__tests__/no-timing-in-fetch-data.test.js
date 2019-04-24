/**
 * @fileoverview disallow `setTimeout/setInterval` in `asyncData/fetch`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../no-timing-in-fetch-data')

var RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-timing-in-fetch-data', rule, {

  valid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          async asyncData() {
            let foo = 'baz'
          },
          fetch() {
            let foo = 'baz'
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
          asyncData() {
            let foo = 'bar'
            setTimeout(() => {
              foo = 'baz'
            }, 0)
          },
          fetch() {
            let foo = 'bar'
            setInterval(() => {
              foo = 'baz'
            }, 0)
          }
        }
      `,
      errors: [{
        message: 'Unexpected setTimeout in asyncData.',
        type: 'CallExpression'
      }, {
        message: 'Unexpected setInterval in fetch.',
        type: 'CallExpression'
      }],
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
        export default {
          asyncData() {
            let timer = setInterval
          },
          fetch() {
            let timer = setTimeout
          }
        }
      `,
      errors: [{
        message: 'Unexpected setInterval in asyncData.',
        type: 'VariableDeclarator'
      }, {
        message: 'Unexpected setTimeout in fetch.',
        type: 'VariableDeclarator'
      }],
      parserOptions
    }
  ]
})
