import { ValidationObserver, ValidationProvider } from "vee-validate";
import CustomObserver from "@/components/CustomObserver";

export default {
  props: {
    required: {
      type: Boolean,
      default: false
    }
  },

  components: {
    ValidationObserver,
    ValidationProvider,
    CustomObserver
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
    },

    ruleObject(required) {
      let ans = {};
      if (required) ans.requiredOb = true;
      return ans;
    }
  }
};
