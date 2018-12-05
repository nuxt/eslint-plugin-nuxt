/**
 * @fileoverview Prevent using this in asyncData
 * @author Clark Du
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-this-in-async-data')

var RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-this-in-async-data', rule, {

  valid: [

    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: 'this.await fetch(`/api${this.$route.path}`)',
      errors: [{
        message: 'Fill me in.',
        type: 'Me too'
      }]
    }
  ]
})
