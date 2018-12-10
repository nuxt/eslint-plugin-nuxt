# nuxt/no-globals-in-created

> disallow `window/document` in `created/beforeCreate`

- :gear: This rule is included in `"plugin:nuxt/base"`.

## Rule Details

This rule is for preventing using `window/document` in `created/beforeCreate`, since `created/beforeCreate` may be executed in server side in SSR.

Examples of **incorrect** code for this rule:

```js

export default {
  created() {
    window.foo = 'bar'
  }
}

```

Examples of **correct** code for this rule:

```js

export default {
  created() {
    const foo = 'bar'
  }
}

```

## :mag: Implementation

- [Rule source](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/rules/no-globals-in-created.js)
- [Test source](https://github.com/nuxt/eslint-plugin-nuxt/blob/master/lib/rules/__test__/no-globals-in-created.test.js)
