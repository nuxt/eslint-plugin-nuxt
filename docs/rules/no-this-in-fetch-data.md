# nuxt/no-this-in-fetch-data

> disallow `this` in `asyncData/fetch`

- :gear: This rule is included in `"plugin:nuxt/base"`.

## Rule Details

This rule is for preventing using `this` in `asyncData/fetch`

> **NOTE**: `No this in fetch` is only for Nuxt.js < 2.12.0, Nuxt.js v2.12 has introduced new `fetch` API which supports `this`.

Examples of **incorrect** code for this rule:

```js

export default {
  ...foo,
  async asyncData() {
    if (this.$route.path === 'foo') {

    }
  }
}

```

Examples of **correct** code for this rule:

```js

export default {
  ...foo,
  async asyncData() {
    // no this
  }
}

```

## :mag: Implementation

- [Rule source](../../lib/rules/no-this-in-fetch-data.js)
- [Test source](../../lib/rules/__tests__/no-this-in-fetch-data.test.js)
