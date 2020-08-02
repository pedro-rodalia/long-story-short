import Vue from "vue";
import Vuex from "vuex";
import Stories from "./modules/stories";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Stories }
});
