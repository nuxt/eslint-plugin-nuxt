/**
 * @fileoverview disallow `setTimeout/setInterval` in `asyncData/fetch`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../no-unresolved-middleware')

const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' }
})

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------
ruleTester.run('no-unresolved-middleware', rule, {
  valid: [
    {
      code: `
    <script>
    export default defineComponent({
      middleware: 'middleware-sample'
    })
    </script>`,
      options: [{ srcDir: 'lib/rules/mocks' }]
    }
  ],
  invalid: [
    {
      code: `
      <script>
      export default defineComponent({
        middleware: 'test'
      })
      </script>`,
      options: [{ srcDir: 'lib/rules/mocks' }],
      errors: [
        {
          messageId: 'noUnresolvedMiddleware'
        }
      ]
    },
    {
      code: `
      <script>
      export default defineComponent({
        middleware: ['test', 'test2']
      })
      </script>`,
      options: [{ srcDir: 'lib/rules/mocks' }],
      errors: [
        {
          messageId: 'noUnresolvedMiddleware'
        },
        {
          messageId: 'noUnresolvedMiddleware'
        }
      ]
    },
    {
      code: `
      <script>
      export default defineComponent({
        middleware: ['test', 'middleware-sample']
      })
      </script>`,
      options: [{ srcDir: 'lib/rules/mocks' }],
      errors: [
        {
          messageId: 'noUnresolvedMiddleware'
        }
      ]
    }
  ]
})
