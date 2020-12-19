# nuxt/no-env-in-hooks

> Disallow `process.server`, `process.client` and `process.browser` in the following lifecycle hooks: `beforeMount`, `mounted`, `beforeUpdate`, `updated`, `activated`, `deactivated`, `beforeDestroy` and `destroyed`.

- :gear: This rule is included in `"plugin:nuxt/base"`.

## Rule Details

This rule is for preventing using `process.server`/`process.client`/`process.browser` in client only Vue lifecycle hooks since they're only executed in client side.

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
  },
  beforeDestroy() {
    if (process.browser) {
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
  },
  beforeDestroy() {
    const foo = 'bar'
  }
}

```

## :mag: Implementation

- [Rule source](../../lib/rules/no-env-in-hooks.js)
- [Test source](../../lib/rules/__tests__/no-env-in-hooks.test.js)
