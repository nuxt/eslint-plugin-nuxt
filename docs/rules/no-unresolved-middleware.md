# nuxt/no-unresolved-middleware

> Checks for the presence of Nuxt.js middleware.

## Rule Details

This rule outputs an error if a file that does not exist in the `middleware` directory is specified.

Examples of **incorrect** code for this rule:

```
middleware
  └─ middleware-sample.js
```

```vue
// pages/home.vue
<script lang="ts">
export default defineComponent({
  middleware: 'sample', // sample is not found.
});
</script>
```

Examples of **correct** code for this rule:

```
middleware
  └─ middleware-sample.js
```

```vue
// pages/home.vue
<script lang="ts">
export default defineComponent({
  middleware: 'middleware-sample',
});
</script>
```

## Options

`srcDir`: Define the source directory of your Nuxt application.

```json
{
  "plugins": ["nuxt"],
  "rules": {
    "nuxt/no-unresolved-middleware": [
      "error",
      {
        "srcDir": "src"
      }
    ]
  }
}
```

## :mag: Implementation

- [Rule source](../../lib/rules/no-unresolved-middleware.js)
- [Test source](../../lib/rules/__tests__/no-unresolved-middleware.test.js)
