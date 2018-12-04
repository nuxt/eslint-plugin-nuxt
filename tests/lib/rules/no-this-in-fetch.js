/**
 * @fileoverview Prevent using this in fetch
 * @author Clark Du
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-this-in-fetch"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-this-in-fetch", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "console.log('route path:', this.$route.path)",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
