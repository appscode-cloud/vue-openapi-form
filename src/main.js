import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { initVeeValidate } from "@appscode/vue-openapi-form/src/plugins/vee-validate";

Vue.config.productionTip = false;

initVeeValidate();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
