/**
 * @fileoverview disallow `this` in asyncData
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../no-this-in-async-data')

var RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-this-in-async-data', rule, {

  valid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          ...foo,
          asyncData() {
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
          asyncData() {
            if(this.$route.path === 'foo') {}
          }
        }
      `,
      errors: [{
        message: 'Unexpected this in asyncData.',
        type: 'Identifier'
      }],
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
        export default {
          ...foo,
          async asyncData() {
            if(this.$route.path === 'foo') {}
          }
        }
      `,
      errors: [{
        message: 'Unexpected this in asyncData.',
        type: 'Identifier'
      }],
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
      export default {
        ...foo,
        asyncData: () => {
          if(this.$route.path === 'foo') {}
        }
      }
      `,
      errors: [{
        message: 'Unexpected this in asyncData.',
        type: 'Identifier'
      }],
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
      export default {
        ...foo,
        asyncData: function test() {
          if(this.$route.path === 'foo') {}
        }
      }
      `,
      errors: [{
        message: 'Unexpected this in asyncData.',
        type: 'Identifier'
      }],
      parserOptions
    }
  ]
})
