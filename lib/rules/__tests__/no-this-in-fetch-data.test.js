/**
 * @fileoverview disallow `this` in `asyncData/fetch`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../no-this-in-fetch-data')

const RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('no-this-in-fetch-data', rule, {

  valid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          ...foo,
          asyncData() {
          },
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
          asyncData() {
            if(this.$route.path === 'foo') {}
          }
        }
      `,
      errors: [{
        message: 'Unexpected this in asyncData.',
        type: 'ThisExpression'
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
        type: 'ThisExpression'
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
        type: 'ThisExpression'
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
        type: 'ThisExpression'
      }],
      parserOptions
    },
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
        type: 'ThisExpression'
      }],
      options: [{ methods: ['fetch'] }],
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
        type: 'ThisExpression'
      }],
      options: [{ methods: ['fetch'] }],
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
        type: 'ThisExpression'
      }],
      options: [{ methods: ['fetch'] }],
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
        type: 'ThisExpression'
      }],
      options: [{ methods: ['fetch'] }],
      parserOptions
    }
  ]
})
