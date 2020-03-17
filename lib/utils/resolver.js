module.exports = {
  __version: undefined,
  get version () {
    if (this.__version === undefined) {
      return this.loadNuxtPkg()
    }
    return this.__version
  },
  loadNuxtPkg () {
    try {
      const { version } = require('nuxt/package.json')
      this.__version = version
    } catch (e) {
      this.__version = false
    }

    return this.__version
  }
}
