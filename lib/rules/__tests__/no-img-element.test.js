/**
 * @fileoverview Prohibit usage of HTML <img> element
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../no-img-element')

const RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------
const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2018 }
})

ruleTester.run('no-img-element', rule, {

  valid: [
    {
      filename: 'page.vue',
      code: `
      <template>
        <nuxt-img src="nuxt.png" />
      </template>
      `
    }
  ],

  invalid: [
    {
      filename: 'page.vue',
      code: `
      <template>
        <img src="nuxt.png" />
      </template>
      `,
      errors: [{
        message: 'Do not use <img>. Use Image from \'@nuxt/image\' instead. See https://image.nuxtjs.org/getting-started/installation/.',
        type: 'VElement'
      }]
    }
  ]
})
