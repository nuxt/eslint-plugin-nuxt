module.exports = {
  __version: undefined,
  get version () {
    if (this.__version === undefined) {
      return this.loadNuxtPkg()
    }
    return this.__version
  },
  loadPkg (pkgName) {
    try {
      return require(`${pkgName}/package.json`)
    } catch (e) {
      return {}
    }
  },
  loadNuxtPkg () {
    const { version } = this.loadPkg('nuxt') || this.loadPkg('nuxt-edge')
    this.__version = version || false
    return this.__version
  }
}
