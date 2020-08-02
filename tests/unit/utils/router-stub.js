const createRouterStub = function() {
  const pushStub = jest.fn()

  const routerStub = {
    install(instance) {
      instance.component('router-link', {})
      instance.prototype.$router = { push: pushStub }
      instance.prototype.$route = { params: {} }
      instance.prototype.pushStub = pushStub
    },
  }

  return { pushStub, routerStub }
}

export default createRouterStub
