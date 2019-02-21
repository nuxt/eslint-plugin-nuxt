/**
 * @fileoverview Disallow `require/modules.exports/exports` in `nuxt.config.js`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../no-cjs-in-config')

var RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-cjs-in-config', rule, {

  valid: [
    {
      filename: 'nuxt.config.js',
      code: `
        import { name } from './package.json'

        export default {
          mode: 'universal',
          name
        }
      `,
      parserOptions
    }
  ],

  invalid: [
    {
      filename: 'nuxt.config.js',
      code: `
        const { name } = require('./package.json')
      `,
      errors: [{
        message: 'Unexpected require, please use import instead.',
        type: 'Identifier'
      }],
      parserOptions
    },
    {
      filename: 'nuxt.config.js',
      code: `
        module.exports = {
          mode: 'universal',
          name
        }
      `,
      errors: [{
        message: 'Unexpected module.exports, please use export default instead.',
        type: 'MemberExpression'
      }],
      parserOptions
    },
    {
      filename: 'nuxt.config.js',
      code: `
        exports.test = {
          mode: 'universal',
          name
        }
      `,
      errors: [{
        message: 'Unexpected exports, please use export default instead.',
        type: 'MemberExpression'
      }],
      parserOptions
    }
  ]
})
