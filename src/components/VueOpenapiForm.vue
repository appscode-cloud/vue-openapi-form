<template>
  <div class="vue-openapi-form">
    <validation-observer ref="vofMainObserver" slim>
      <validation-provider
        :name="extendedSchema.title"
        :vid="`${extendedSchema.title}-vpid`"
        slim
      >
        <object-form-wrapper
          :isRoot="true"
          :schema="extendedSchema"
          v-model="value"
          @vof:submitted="onSubmit()"
        />
      </validation-provider>
    </validation-observer>
  </div>
</template>

<script>
import ObjectFormWrapper from "./ObjectFormWrapper.vue";
import ExtendSchema from "../functional-components/extend-schema.js";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "vue-openapi-form",
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Object,
      default: () => ({})
    },
    formTitle: {
      type: String,
      default: "OpenAPI form"
    },
    onValid: {
      type: Function,
      default: () => () => {}
    },
    onInvalid: {
      type: Function,
      default: () => () => {}
    }
  },
  components: {
    "object-form-wrapper": ObjectFormWrapper,
    ValidationObserver,
    ValidationProvider
  },
  computed: {
    extendedSchema() {
      return ExtendSchema(this.schema, this.formTitle);
    }
  },
  methods: {
    async onSubmit() {
      const isValid = await this.$refs.vofMainObserver.validate();
      if (isValid) {
        // console.log("validated");
        this.onValid();
      } else {
        this.onInvalid();
      }
    }
  }
};
</script>

<style lang="scss">
@import "~font-awesome/css/font-awesome.min.css";
@import "../assets/scss/main.scss";
@import "~codemirror/lib/codemirror.css";
</style>
