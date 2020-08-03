import Vue from 'vue'
import App from './App.vue'
import Zondicon from 'vue-zondicons'
import '@/assets/scss/main.scss'
import '@/registerServiceWorker'
import router from './router'
import store from './store'
import moment from 'moment'

moment.locale('es-ES')

Vue.config.productionTip = false
Vue.component('Zondicon', Zondicon)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
