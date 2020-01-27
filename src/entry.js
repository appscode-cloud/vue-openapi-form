// Import vue components
import * as components from "@/components/index";
// Import 3rt party components and plugins that are required
import VTooltip from "v-tooltip";
// Import custom js that are required
import { initVeeValidate } from "@/plugins/vee-validate";

// install function executed by Vue.use()
const install = function installVueOpenapiForm(Vue) {
  if (install.installed) return;
  install.installed = true;

  // for v-tooltip
  Vue.use(VTooltip);
  // declare vee-validate rules
  initVeeValidate();

  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

// Create module definition for Vue.use()
const plugin = {
  install
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

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from "@/components/index";
