import './model-da405e97.js';
import './validation-3731607b.js';
import './es.object.to-string-73027901.js';
import './fold-77a567b4.js';
import './tabs-6c5bb12a.js';
import './normalize-c7e3979a.js';
import component from './VueOpenapiForm-def66cb2.js';

// Import vue component

function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component("VueOpenapiForm", component);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component

export default component;
export { install };
