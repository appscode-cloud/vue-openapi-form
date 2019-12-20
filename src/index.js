// Import vue component
import component from "./components/VueOpenapiForm.vue";
import ExtendSchema from "./functional-components/extend-schema.js";
// global components
import ObjectForm from "./components/ObjectForm.vue";
import ArrayInput from "./components/ArrayInput.vue";
import KeyValuePairs from "./components/KeyValuePairs.vue";
import SimpleInput from "./components/SimpleInput.vue";

// export ExtendSchema
export const extendSchema = ExtendSchema;

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueOpenapiForm", component);

  Vue.component("object-form", ObjectForm);
  Vue.component("array-input", ArrayInput);
  Vue.component("key-value-pairs", KeyValuePairs);
  Vue.component("simple-input", SimpleInput);
}

// Create module definition for Vue.use()
const plugin = {
  install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default component;
