import Vue from 'vue'
import Vuex from 'vuex'
import Stories from './modules/stories'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Stories },
})
