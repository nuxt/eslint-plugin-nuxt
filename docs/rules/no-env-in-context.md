# nuxt/no-env-in-context

> disallow `context.isServer/context.isClient` in `asyncData/fetch/nuxtServerInit`

- :gear: This rule is included in `"plugin:nuxt/base"`.

## Rule Details

This rule is for preventing using `context.isServer/context.isClient` in `asyncData/fetch/nuxtServerInit`

Examples of **incorrect** code for this rule:

```js

export default {
  async asyncData() {
    if(process.server) {
      const foo = 'bar'
    }
  },
  fetch() {
    if(process.client) {
      const foo = 'bar'
    }
  }
}

```

Examples of **correct** code for this rule:

```js

export default {
  asyncData(context) {
    if(context.isServer) {
      const foo = 'bar'
    }
  },
  fetch({ isClient }) {
    if(isClient) {
      const foo = 'bar'
    }
  }
}

```

## :mag: Implementation

- [Rule source](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/rules/no-env-in-context.js)
- [Test source](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/rules/__test__/no-env-in-context.test.js)