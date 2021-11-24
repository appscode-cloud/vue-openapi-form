// Import vue components
import VueOpenapiForm from "@/components/VueOpenapiForm.vue";
// Import 3rt party components and plugins that are required
import VTooltip from "v-tooltip";
// Import custom js that are required
import { initVeeValidate } from "@/plugins/vee-validate";

// install function executed by Vue.use()
const install = function installVueOpenapiForm(Vue, options) {
  if (install.installed) return;
  install.installed = true;

  // for v-tooltip
  Vue.use(VTooltip);
  // declare vee-validate rules
  initVeeValidate();

  // This is a global mixin, it is applied to every vue instance
  Vue.mixin({
    data: function () {
      return {
        get cleanObject() {
          return options.cleanObject || false;
        },
      };
    },
  });

  Vue.component("vue-openapi-form", VueOpenapiForm);
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;

