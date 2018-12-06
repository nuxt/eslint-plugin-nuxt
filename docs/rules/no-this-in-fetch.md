# nuxt/no-this-in-fetch

> disallow `this` in fetch

- :gear: This rule is included in `"plugin:nuxt/base"`.

## Rule Details

This rule is for preventing using `this` in fetch

Examples of **incorrect** code for this rule:

```js

export default {
  ...foo,
  async fetch() {
    if(this.$route.path === 'foo') {

    }
  }
}

```

Examples of **correct** code for this rule:

```js

export default {
  ...foo,
  async fetch() {
    // no this
  }
}

```

## :mag: Implementation

- [Rule source](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/rules/no-this-in-fetch.js)
- [Test source](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/rules/__test__/no-this-in-fetch.test.js)