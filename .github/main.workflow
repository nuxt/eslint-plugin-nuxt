workflow "Nuxt.js Actions" {
  on = "push"
  resolves = ["Lint", "Test", "Audit"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Lint" {
  needs = "Install"
  uses = "nuxt/actions-yarn@master"
  args = "lint"
}

action "Test" {
  needs = "Install"
  uses = "nuxt/actions-yarn@master"
  args = "test"
}

action "Audit" {
  needs = "Install"
  uses = "nuxt/actions-yarn@master"
  args = "audit"
}
