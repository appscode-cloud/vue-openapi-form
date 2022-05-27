// Import vue components
export { default as VueOpenapiForm } from '@/components/VueOpenapiForm.vue';
// Import custom js that are required
import { registerValidationRules } from '@/plugins/vee-validate';

const install = (app, options) => {
  registerValidationRules();
  app.mixin({
    data: function () {
      return {
        get cleanObject() {
          return options.cleanObject || false;
        },
      };
    },
  });
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;
