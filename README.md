# eslint-plugin-nuxt

ESLint plugin for Nuxt.js

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nuxt`:

```
$ npm install eslint-plugin-nuxt --save-dev
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

## Supported Rules

* Fill in provided rules here
