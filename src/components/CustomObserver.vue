<template>
  <ValidationObserver
    v-bind="$attrs"
    v-slot="ctx"
    ref="observer"
    v-on="$listeners"
  >
    <slot v-bind="ctx"></slot>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  name: "custom-observer",
  components: {
    ValidationObserver
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // Save a bound reference to the validate function.
    const validate = this.$refs.observer.validate.bind(this.$refs.observer);

    this.$refs.observer.validate = async function() {
      // You want to wait for Vue to update the 'disabled' prop,
      await this.$nextTick();

      // If the form is disabled just return true.
      if (this.disabled) return true;

      // run the validation otherwise.
      return validate();
    };

    // If validation is triggered manually then force validation!
    this.validate = () => {
      return validate();
    };
  }
};
</script>
