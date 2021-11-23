import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { initVeeValidate } from "@/plugins/vee-validate";
import VTooltip from "v-tooltip";
Vue.use(VTooltip);

Vue.config.productionTip = false;

initVeeValidate();

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
