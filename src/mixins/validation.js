import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    VForm: defineAsyncComponent(() =>
      import('vee-validate').then(({ Form }) => Form)
    ),
    VField: defineAsyncComponent(() =>
      import('vee-validate').then(({ Field }) => Field)
    ),
    ComponentErrors: defineAsyncComponent(() =>
      import('../components/ComponentErrors.vue').then(
        (module) => module.default
      )
    ),
    RightWrongSigns: defineAsyncComponent(() =>
      import('../components/RightWrongSigns.vue').then(
        (module) => module.default
      )
    ),
  },

  props: {
    isSelfRequired: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    ruleString(required) {
      let ans = '';
      if (required) ans += 'required';
      return ans;
    },

    ruleArray(required) {
      let ans = {};
      if (required) ans.required = true;
      return ans;
    },

    ruleObject(required) {
      let ans = {};
      if (required) ans.requiredOb = true;
      return ans;
    },

    calcFormErrors(errors, prefix) {
      return Object.keys(errors)
        .filter((key) => key.startsWith(prefix))
        .map((key) => {
          const path = key.replace(/^(\$\/)/, '');
          const prefixedPath = prefix.replace(/^(\$\/)/, '');

          const relativePath = path.replace(prefixedPath + '/', '');

          const pfx = relativePath.includes('/') ? `${relativePath}: ` : '';
          return `${pfx}${errors[key]}`;
        });
    },
  },
});
