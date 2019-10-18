# nuxt/no-cjs-in-config

> Disallow commonjs module api `require/modules.exports/exports` in `nuxt.config.js`

- :gear: This rule is included in `"plugin:nuxt/base"`.

## Rule Details

This rule is for preventing using `require/modules.exports/exports` in `nuxt.config.js`

Examples of **incorrect** code for this rule:

```js

const { name } = require('./package.json')

module.exports = {
  mode: 'universal',
  name
}

```

Examples of **correct** code for this rule:

```js

import { name } from './package.json'

export default {
  mode: 'universal',
  name
}

```

## :mag: Implementation

- [Rule source](../../lib/rules/no-cjs-in-config.js)
- [Test source](../../lib/rules/__tests__/no-cjs-in-config.test.js)
