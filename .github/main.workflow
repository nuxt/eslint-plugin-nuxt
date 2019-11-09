name: Github ActionCI
on:
  pull_request
  push:
    branches:
      - master
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: nuxt/actions-yarn@master
        with:
          cmd: install
      - uses: nuxt/actions-yarn@master
        with:
          cmd: test
      - uses: nuxt/actions-yarn@master
        with:
          cmd: audit
