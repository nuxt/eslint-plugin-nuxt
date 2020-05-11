# eslint-plugin-nuxt

[![Standard JS][standard-js-src]][standard-js-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

[standard-js-src]: https://flat.badgen.net/badge/code%20style/standard/green
[standard-js-href]: https://standardjs.com
[circle-ci-src]: https://flat.badgen.net/circleci/github/nuxt/eslint-plugin-nuxt
[circle-ci-href]: https://circleci.com/gh/nuxt/eslint-plugin-nuxt
[codecov-src]: https://flat.badgen.net/codecov/c/github/nuxt/eslint-plugin-nuxt
[codecov-href]: https://codecov.io/gh/nuxt/eslint-plugin-nuxt
[npm-version-src]: https://flat.badgen.net/npm/v/eslint-plugin-nuxt/latest
[npm-version-href]: https://npmjs.com/package/eslint-plugin-nuxt
[npm-downloads-src]: https://flat.badgen.net/npm/dt/eslint-plugin-nuxt
[npm-downloads-href]: https://npmjs.com/package/eslint-plugin-nuxt

:sparkles: ESLint plugin for Nuxt.js

## :cd: Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
$ npm i eslint --save-dev
success Saved 1 new dependencies
```

Next, install `eslint-plugin-nuxt`:

```sh
$ npm install eslint-plugin-nuxt --save-dev
success Saved 1 new dependencies
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-nuxt` globally.

## :rocket: Usage

Add `nuxt` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

1. Use our preset to extend recommended defaults:

```json
{
  "extends": [
    "plugin:nuxt/recommended"
  ]
}
```

2. Or specify individual rules manually:

```json
{
    "plugins": [
        "nuxt"
    ],
    "rules": {
        "nuxt/rule-name": 2
    }
}
```

## :gear: Configs

This plugin provides four predefined configs:

- `plugin:nuxt/base` - Settings and rules to enable correct ESLint parsing
- `plugin:nuxt/recommended` - Above, plus rules to enforce subjective community defaults to ensure consistency

## :bulb: Rules

<!--RULES_TABLE_START-->

### Base Rules

```json
{
  "extends": "plugin:nuxt/base"
}
```

|    | Rule ID | Description |
|:---|:--------|:------------|
|  | [nuxt/no-env-in-context](./docs/rules/no-env-in-context.md) | Disallow `context.isServer/context.isClient` in `asyncData/fetch/nuxtServerInit` |
|  | [nuxt/no-env-in-hooks](./docs/rules/no-env-in-hooks.md) | Disallow `process.server/process.client` in client only Vue lifecycle hooks like: `mounted, beforeMount, updated...` |
|  | [nuxt/no-globals-in-created](./docs/rules/no-globals-in-created.md) | Disallow `window/document` in `created/beforeCreate` |
|  | [nuxt/no-this-in-fetch-data](./docs/rules/no-this-in-fetch-data.md) | Disallow `this` in `asyncData/fetch` |
|  | [nuxt/no-cjs-in-config](./docs/rules/no-cjs-in-config.md) | Disallow `require/modules.exports/exports` in `nuxt.config.js` |

### Recommended Rules

Include all the below rules, as well as all priority rules in above categories, with:

```json
{
  "extends": "plugin:nuxt/recommended"
}
```

|    | Rule ID | Description |
|:---|:--------|:------------|
|  | [nuxt/no-timing-in-fetch-data](./docs/rules/no-timing-in-fetch-data.md) | Disallow `setTimeout/setInterval` in `asyncData/fetch` |

### Other Rules

|    | Rule ID | Description |
|:---|:--------|:------------|
|  | [nuxt/require-func-head](./docs/rules/require-func-head.md) | Enforce `head` property in component to be a function. |
