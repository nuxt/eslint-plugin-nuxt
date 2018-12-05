/**
 * @fileoverview Prevent using this in asyncData
 * @author Clark Du
 */
'use strict'

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent using this in asyncData',
      category: 'Fill me in',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    messages: {
      noThis: 'Unexpected this in asyncData.'
    }
  },

  create: function (context) {
    // variables should be defined here

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
      'FunctionExpression:exit' (node) {

        // give me methods
      }
    }
  }
}
