# nuxt/no-img-element

> Prohibit usage of HTML <img> element

- :gear: This rule is included in `"plugin:nuxt/recommended"`.

## Rule Details

This rule is for preventing using `<img>` element

Examples of **incorrect** code for this rule:

```js

<img src="/nuxt.png" />

```

Examples of **correct** code for this rule:

```js

<nuxt-img src="/nuxt.png" />

```

## :mag: Implementation

- [Rule source](../../lib/rules/no-img-element.js)
- [Test source](../../lib/rules/__tests__/no-cjs-in-config.test.js)
