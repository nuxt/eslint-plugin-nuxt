# nuxt/no-env-in-mounted

> Disallow `process.server` and `process.client` in the following lifecycle hooks
- `beforeMount`
- `mounted`
- `beforeUpdate`
- `updated`
- `activated`
- `deactivated`
- `beforeDestroy`
- `destroyed`

- :gear: This rule is included in `"plugin:nuxt/base"`.

## Rule Details

This rule is for preventing using `process.server/process.client` in `mounted/beforeMount` since they're only executed in client side.

Examples of **incorrect** code for this rule:

```js

export default {
  mounted() {
    if (process.server) {
      const foo = 'bar'
    }
  },
  beforeMount() {
    if (process.client) {
      const foo = 'bar'
    }
  }
}

```

Examples of **correct** code for this rule:


```js

export default {
  mounted() {
    const foo = 'bar'
  },
  beforeMount() {
    const foo = 'bar'
  }
}

```

## :mag: Implementation

- [Rule source](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/rules/no-env-in-mounted.js)
- [Test source](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/rules/__test__/no-env-in-mounted.test.js)
