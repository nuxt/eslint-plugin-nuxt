# nuxt/no-timing-in-fetch-data

> disallow `setTimeout/setInterval` in `asyncData/fetch`

- :gear: This rule is included in `"plugin:nuxt/recommended"`.

## Rule Details

This rule is for preventing using `setTimeout/setInterval` in `asyncData/fetch` since it may lead to memory leak

Examples of **incorrect** code for this rule:

```js

export default {
  asyncData() {
    let foo = 'bar'
    setTimeout(() => {
      foo = 'baz'
    }, 0)
  },
  fetch() {
    let foo = 'bar'
    setInterval(() => {
      foo = 'baz'
    }, 0)
  }
}

```

Examples of **correct** code for this rule:


```js

export default {
  async asyncData() {
    let foo = 'baz'
  },
  fetch() {
    let foo = 'baz'
  }
}

```

## :mag: Implementation

- [Rule source](../../lib/rules/no-timing-in-fetch-data.js)
- [Test source](../../lib/rules/__tests__/no-timing-in-fetch-data.test.js)
