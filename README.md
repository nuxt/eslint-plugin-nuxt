# eslint-plugin-nuxt

ESLint plugin for Nuxt.js

## Installation

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

## Usage

Add `nuxt` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nuxt"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
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
|  | [nuxt/no-env-in-mounted](./docs/rules/no-env-in-mounted.md) | Disallow `process.server/process.client` in `mounted/beforeMount` |
|  | [nuxt/no-globals-in-created](./docs/rules/no-globals-in-created.md) | Disallow `window/document` in `created/beforeCreate` |
|  | [nuxt/no-this-in-fetch-data](./docs/rules/no-this-in-fetch-data.md) | Disallow `this` in `asyncData/fetch` |

### Recommended Rules

Include all the below rules, as well as all priority rules in above categories, with:

```json
{
  "extends": "plugin:nuxt/recommended"
}
```

|    | Rule ID | Description |
|:---|:--------|:------------|
| :wrench: | [nuxt/no-timing-in-fetch-data](./docs/rules/no-timing-in-fetch-data.md) | Disallow `setTimeout/setInterval` in `asyncData/fetch` |