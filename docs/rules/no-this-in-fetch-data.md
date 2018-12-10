# nuxt/no-this-in-fetch-data

> disallow `this` in `asyncData/fetch`

- :gear: This rule is included in `"plugin:nuxt/base"`.

## Rule Details

This rule is for preventing using `this` in `asyncData/fetch`

Examples of **incorrect** code for this rule:

```js

export default {
  ...foo,
  async asyncData() {
    if(this.$route.path === 'foo') {

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

- [Rule source](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/rules/no-this-in-fetch-data.js)
- [Test source](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/rules/__test__/no-this-in-fetch-data.test.js)