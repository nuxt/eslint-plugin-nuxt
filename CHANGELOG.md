# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0](https://github.com/nuxt/eslint-plugin-nuxt/compare/v3.2.0...v4.0.0) (2022-08-31)

## 3.2.0 (2022-03-13)


### Features

* add base config ([fb94d7b](https://github.com/nuxt/eslint-plugin-nuxt/commit/fb94d7b20b6eded652b911cd82626c798192ea9e))
* add no-env-in-context ([42ada82](https://github.com/nuxt/eslint-plugin-nuxt/commit/42ada82b306c3c259388392da565bd5fef260c76))
* add no-env-in-hooks ([016f609](https://github.com/nuxt/eslint-plugin-nuxt/commit/016f6096cef49f5956d37c024faa64b7ac5ac96d))
* add no-env-in-mounted ([4b32052](https://github.com/nuxt/eslint-plugin-nuxt/commit/4b3205269be683d258a45f06f9cddb3a4126f4ad))
* add no-this-in-fetch ([94552c7](https://github.com/nuxt/eslint-plugin-nuxt/commit/94552c73299f2b60d58e895c1ab89917e2fca099))
* add no-timing-in-fetch-data ([1436642](https://github.com/nuxt/eslint-plugin-nuxt/commit/1436642cdd6bf41f95f53c17020be80b25fed296))
* add rule no-this-in-async-data ([96ce607](https://github.com/nuxt/eslint-plugin-nuxt/commit/96ce6077102c51bbabc51e606c0659c8b7ea1543))
* init no-this-in-async-data ([cb03b4d](https://github.com/nuxt/eslint-plugin-nuxt/commit/cb03b4d9e05d10d4646b584a26ee227a7db2c72e))
* init no-this-in-fetch ([581005a](https://github.com/nuxt/eslint-plugin-nuxt/commit/581005a1753e3394e021ee423d215e540f61c54c))
* move ssr to base ([1da2f0c](https://github.com/nuxt/eslint-plugin-nuxt/commit/1da2f0cb61f4a2edce473784934eb5e93d66f70d))
* **rule:** add no-globals-in-created ([09eaa50](https://github.com/nuxt/eslint-plugin-nuxt/commit/09eaa505a2a4691b94f7e1ae7e7ce2e19d5042c3))
* **rule:** add require-func-head in recommended ([#62](https://github.com/nuxt/eslint-plugin-nuxt/issues/62)) ([f7e7b87](https://github.com/nuxt/eslint-plugin-nuxt/commit/f7e7b87670c510358811b4bc2847c176c77f6f03))
* **rule:** no commonjs api in nuxt config ([eb02e0e](https://github.com/nuxt/eslint-plugin-nuxt/commit/eb02e0ebdb32608b67ad4de497313d5e10055b38))
* upgrade eslint to v7 ([3e46242](https://github.com/nuxt/eslint-plugin-nuxt/commit/3e4624268fd2678539c34e0119554a8fadc81484))
* upgrade eslint-plugin-vue to v6 ([b5b1bf4](https://github.com/nuxt/eslint-plugin-nuxt/commit/b5b1bf4c8abf5f2df66232130e83ef5412bce5a7))


### Bug Fixes

* correct category for no-timing-in-fetch-data ([ae6b499](https://github.com/nuxt/eslint-plugin-nuxt/commit/ae6b499653252e126b9d524dbe9a700d8e48cd5b))
* disallow `process.browser` in `no-env-in-hooks` ([#127](https://github.com/nuxt/eslint-plugin-nuxt/issues/127)) ([e421323](https://github.com/nuxt/eslint-plugin-nuxt/commit/e421323256ced99f8210105e3f2d215d7d4078a6))
* enable no-this-in-fetch only for nuxt < 2.12 ([a0e3f73](https://github.com/nuxt/eslint-plugin-nuxt/commit/a0e3f736c94d3504cad7b09a718d86df8b54f0e4))
* incompatible version of vue-eslint-parser ([a0e355f](https://github.com/nuxt/eslint-plugin-nuxt/commit/a0e355fb19613746810c4fa84b314a3724a78451))
* not-null check for hooks ([ee73e8b](https://github.com/nuxt/eslint-plugin-nuxt/commit/ee73e8b68d541580a7017dbe8ed5c8e51bb257c7))
* nuxt/require-func-head doesnt work with factories ([11492e2](https://github.com/nuxt/eslint-plugin-nuxt/commit/11492e20fb0a6ceaf9b7d379dada7e6b48da63ed)), closes [#94](https://github.com/nuxt/eslint-plugin-nuxt/issues/94)
* remove require-func-head from recommend ([25d108c](https://github.com/nuxt/eslint-plugin-nuxt/commit/25d108cbb30005048d1972d285e70e8e67ceefe5)), closes [#93](https://github.com/nuxt/eslint-plugin-nuxt/issues/93)
* rule not found ([976f28d](https://github.com/nuxt/eslint-plugin-nuxt/commit/976f28d5a3f6e7f75c082f4c941e2c36b86331b1))
* undefined value in nuxt/no-env-in-context ([b9fed00](https://github.com/nuxt/eslint-plugin-nuxt/commit/b9fed007783217495c2c324f0d74576d3fb665a6))
* use filename instead of full path ([d22e011](https://github.com/nuxt/eslint-plugin-nuxt/commit/d22e011c90700cc51279345740b2e6648c442c59))
* wrong index file ([f95cf1d](https://github.com/nuxt/eslint-plugin-nuxt/commit/f95cf1d923ebb4a2fb7c0e8675c7ec54fb828671))

## [3.1.0](https://github.com/nuxt/eslint-plugin-nuxt/compare/v3.0.0...v3.1.0) (2021-11-28)

## [3.0.0](https://github.com/nuxt/eslint-plugin-nuxt/compare/v2.0.2...v3.0.0) (2021-10-24)

### [2.0.2](https://github.com/nuxt/eslint-plugin-nuxt/compare/v2.0.0...v2.0.2) (2021-10-24)


### Bug Fixes

* disallow `process.browser` in `no-env-in-hooks` ([#127](https://github.com/nuxt/eslint-plugin-nuxt/issues/127)) ([07299c0](https://github.com/nuxt/eslint-plugin-nuxt/commit/07299c0ef16dc8efeef19bb2a29df9381aa99e77))

### [2.0.1](https://github.com/nuxt/eslint-plugin-nuxt/compare/v2.0.0...v2.0.1) (2021-10-24)


### Bug Fixes

* disallow `process.browser` in `no-env-in-hooks` ([#127](https://github.com/nuxt/eslint-plugin-nuxt/issues/127)) ([07299c0](https://github.com/nuxt/eslint-plugin-nuxt/commit/07299c0ef16dc8efeef19bb2a29df9381aa99e77))

## [2.0.0](https://github.com/nuxt/eslint-plugin-nuxt/compare/v1.0.0...v2.0.0) (2020-11-14)

## [1.0.0](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.5.2...v1.0.0) (2020-05-12)


### Features

* upgrade eslint to v7 ([c57a3de](https://github.com/nuxt/eslint-plugin-nuxt/commit/c57a3de0aaa71d33b09a1710d6b5c7ce478f71e3))


### Bug Fixes

* nuxt/require-func-head doesnt work with factories ([5480fd0](https://github.com/nuxt/eslint-plugin-nuxt/commit/5480fd0d8eda0d6a5794548d60d3d84db8cbf86e)), closes [#94](https://github.com/nuxt/eslint-plugin-nuxt/issues/94)
* remove require-func-head from recommend ([580ffa2](https://github.com/nuxt/eslint-plugin-nuxt/commit/580ffa26fa533c6e2cef2330965609ca879b118d)), closes [#93](https://github.com/nuxt/eslint-plugin-nuxt/issues/93)

### [0.5.2](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.5.1...v0.5.2) (2020-03-20)


### Bug Fixes

* enable no-this-in-fetch only for nuxt < 2.12 ([66fc2e0](https://github.com/nuxt/eslint-plugin-nuxt/commit/66fc2e0f517865b3bf160eb096a5c81f788b33af))

### [0.5.1](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.5.0...v0.5.1) (2020-02-09)


### Features

* **rule:** add require-func-head in recommended ([#62](https://github.com/nuxt/eslint-plugin-nuxt/issues/62)) ([7d0926f](https://github.com/nuxt/eslint-plugin-nuxt/commit/7d0926f4a73bbd3c91496f7ab8e0fc232f38d423))


### Bug Fixes

* correct category for no-timing-in-fetch-data ([bbf6ce9](https://github.com/nuxt/eslint-plugin-nuxt/commit/bbf6ce985b0e40c1c9450fd3b3a7188d3a7a214a))

## [0.5.0](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.4.3...v0.5.0) (2019-11-09)


### Features

* upgrade eslint-plugin-vue to v6 ([ecf42f2](https://github.com/nuxt/eslint-plugin-nuxt/commit/ecf42f2))

## [0.4.3](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.4.0...v0.4.3) (2019-03-12)


### Bug Fixes

* incompatible version of vue-eslint-parser ([9bb12ae](https://github.com/nuxt/eslint-plugin-nuxt/commit/9bb12ae))



## [0.4.2](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.4.0...v0.4.2) (2019-02-21)


### Bug Fixes

* use filename instead of full path ([4c62a37](https://github.com/nuxt/eslint-plugin-nuxt/commit/4c62a37))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.2.0...v0.3.0) (2018-12-19)


### Bug Fixes

* not-null check for hooks ([daa93f3](https://github.com/nuxt/eslint-plugin-nuxt/commit/daa93f3))


### Features

* add no-env-in-hooks ([bdcc9ec](https://github.com/nuxt/eslint-plugin-nuxt/commit/bdcc9ec))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.1.3...v0.2.0) (2018-12-10)


### Features

* add no-env-in-mounted ([0037b34](https://github.com/nuxt/eslint-plugin-nuxt/commit/0037b34))
* move ssr to base ([8f408dd](https://github.com/nuxt/eslint-plugin-nuxt/commit/8f408dd))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.1.2...v0.1.3) (2018-12-10)



<a name="0.1.2"></a>
## [0.1.2](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.1.1...v0.1.2) (2018-12-10)


### Bug Fixes

* rule not found ([c63f657](https://github.com/nuxt/eslint-plugin-nuxt/commit/c63f657))
* undefined value in nuxt/no-env-in-context ([17cb2d9](https://github.com/nuxt/eslint-plugin-nuxt/commit/17cb2d9))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/nuxt/eslint-plugin-nuxt/compare/v0.1.0...v0.1.1) (2018-12-10)


### Bug Fixes

* wrong index file ([c50e96f](https://github.com/nuxt/eslint-plugin-nuxt/commit/c50e96f))



<a name="0.1.0"></a>
# 0.1.0 (2018-12-10)


### Features

* add base config ([bf0759a](https://github.com/nuxt/eslint-plugin-nuxt/commit/bf0759a))
* **rule:** add no-globals-in-created ([d8736e9](https://github.com/nuxt/eslint-plugin-nuxt/commit/d8736e9))
* add no-env-in-context ([71b09e9](https://github.com/nuxt/eslint-plugin-nuxt/commit/71b09e9))
* add no-this-in-fetch ([fe4d381](https://github.com/nuxt/eslint-plugin-nuxt/commit/fe4d381))
* add no-timing-in-fetch-data ([2945b70](https://github.com/nuxt/eslint-plugin-nuxt/commit/2945b70))
* add rule no-this-in-async-data ([9a56aae](https://github.com/nuxt/eslint-plugin-nuxt/commit/9a56aae))
* init no-this-in-async-data ([e23f4ed](https://github.com/nuxt/eslint-plugin-nuxt/commit/e23f4ed))
* init no-this-in-fetch ([4bf0385](https://github.com/nuxt/eslint-plugin-nuxt/commit/4bf0385))
