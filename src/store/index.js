import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editorTheme: "acLightTheme"
  },
  getters: {
    editorTheme: state => state.editorTheme
  },
  mutations: {
    editorTheme$set: (state, o) => {
      state.editorTheme = o || "acLightTheme";
    }
  },
  actions: {},
  modules: {}
});
