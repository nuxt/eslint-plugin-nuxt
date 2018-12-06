/**
 * @fileoverview disallow `this` in fetch
 * @author Clark Du
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../no-this-in-fetch')

var RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-this-in-fetch', rule, {

  valid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          ...foo,
          fetch() {
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
          ...foo,
          fetch() {
            if(this.$route.path === 'foo') {}
          }
        }
      `,
      errors: [{
        message: 'Unexpected this in fetch.',
        type: 'Identifier'
      }],
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
        export default {
          ...foo,
          async fetch() {
            if(this.$route.path === 'foo') {}
          }
        }
      `,
      errors: [{
        message: 'Unexpected this in fetch.',
        type: 'Identifier'
      }],
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
      export default {
        ...foo,
        fetch: () => {
          if(this.$route.path === 'foo') {}
        }
      }
      `,
      errors: [{
        message: 'Unexpected this in fetch.',
        type: 'Identifier'
      }],
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
      export default {
        ...foo,
        fetch: function test() {
          if(this.$route.path === 'foo') {}
        }
      }
      `,
      errors: [{
        message: 'Unexpected this in fetch.',
        type: 'Identifier'
      }],
      parserOptions
    }
  ]
})
