import Vue from 'vue'
import { config } from '@vue/test-utils'
import createRouterStub from '@test-utils/router-stub'

const { routerStub } = createRouterStub()

config.stubs.RouterView = true

Vue.use(routerStub)
