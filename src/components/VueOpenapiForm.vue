<template>
  <div class="vue-openapi-form" :class="{ 'is-medium': size === 'medium' }">
    <validation-observer ref="vofMainObserver" v-slot="{ pending }" slim>
      <validation-provider
        :name="extendedSchema.title"
        :rules="ruleObject(true)"
        :vid="`${extendedSchema.title}-vpid`"
        slim
      >
        <object-form-wrapper
          :expand-form="true"
          :isSelfRequired="true"
          :onlyJson="onlyJson"
          :schema="extendedSchema"
          v-model="modelData"
          :reference-model="referenceModel || {}"
          @vof:submitted="onSubmit"
          :is-form-submitting="pending || isFormSubmitting"
        />
      </validation-provider>
    </validation-observer>
  </div>
</template>

<script>
import ExtendSchema from "../functional-components/extend-schema.js";
import validation from "../mixins/validation.js";
import { model } from "../mixins/model.js";

export default {
  name: "vue-openapi-form",
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Object,
      default: () => ({}),
    },
    formTitle: {
      type: String,
      default: "",
    },
    onlyJson: {
      type: Boolean,
      default: false,
    },
    onValid: {
      type: Function,
      default: () => () => {},
    },
    onInvalid: {
      type: Function,
      default: () => () => {},
    },
    size: {
      type: String,
      default: "small",
    },
    themeMode: {
      type: String,
      default: "light",
    },
  },
  mixins: [model, validation],
  provide() {
    return {
      theme: this.themeMode,
    };
  },
  data() {
    return {
      isFormSubmitting: false,
    };
  },
  computed: {
    extendedSchema() {
      return ExtendSchema(this.schema, this.formTitle);
    },
  },
  methods: {
    async onSubmit() {
      this.isFormSubmitting = true;
      const isValid = await this.$refs.vofMainObserver.validate();
      if (isValid) {
        // console.log("validated");
        await this.onValid();
      } else {
        await this.onInvalid();
      }
      this.isFormSubmitting = false;
    },
  },
};
</script>

<style lang="scss">
@import "~font-awesome/css/font-awesome.min.css";
@import "../assets/scss/main.scss";
</style>
