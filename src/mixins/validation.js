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

    calcObserverError(errors, title) {
      let ansErrors = [];
      Object.keys(errors).forEach((key) => {
        // calculate new title
        let newKey = key.charAt(0).toUpperCase() + key.slice(1);

        // remove the observer or provider word and replace '-' with ''
        let split = newKey.split('-') || '';
        if (split.length > 0) {
          const lastW = split[split.length - 1];
          if (lastW === 'provider' || lastW === 'observer') split.pop();
          // console.log({ split });

          newKey = split.join(' ');
        }
        newKey.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
        const newTitle = title ? title + ' -> ' + newKey : newKey;

        // console.log({ newKey });

        // check if the value is object or array
        if (Array.isArray(errors[key])) {
          // this is a validation provider
          try {
            ansErrors = [
              ...ansErrors,
              ...errors[key].map((err) => `${newTitle}: ${err}`),
            ];
          } catch (e) {
            // console.log(e);
            // console.log({ errors: errors[key], newTitle });
          }
        } else {
          // this is a vaidation observer, so we have to make recursive call
          try {
            ansErrors = [
              ...ansErrors,
              ...this.calcObserverError(errors[key], newTitle),
            ];
          } catch (e) {
            // console.log(e);
            // console.log({ errors: errors[key], newTitle });
          }
        }

        // console.log({ ansErrors });
      });
      return ansErrors;
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
