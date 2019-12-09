import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  props: {
    required: {
      type: Boolean,
      default: false
    }
  },

  components: {
    ValidationObserver,
    ValidationProvider
  },

  methods: {
    ruleString(required) {
      let ans = "";
      if (required) ans += "required";
      return ans;
    },

    ruleArray(required) {
      let ans = {};
      if (required) ans.required = true;
      return ans;
    }
  }
};
