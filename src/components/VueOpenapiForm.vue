<template>
  <div class="vue-openapi-form" :class="{ 'is-medium': size === 'medium' }">
    <v-form v-slot="{ meta, validate }" as="">
      <v-field
        v-slot="{ field, handleChange }"
        v-model="modelData"
        :name="extendedSchema.title"
        :label="extendedSchema.title"
        :rules="ruleObject(true)"
        as=""
      >
        <object-form-wrapper
          :model-value="field.value"
          :expand-form="true"
          :level="1"
          :is-self-required="true"
          :only-json="onlyJson"
          :schema="extendedSchema"
          :reference-model="referenceModel || {}"
          :is-form-submitting="meta.pending || isFormSubmitting"
          @vof:submitted="onSubmit(validate)"
          @update:modelValue="handleChange"
        />
      </v-field>
    </v-form>
  </div>
</template>

<script>
import ExtendSchema from '../functional-components/extend-schema.js';
import validation from '../mixins/validation.js';
import { model } from '../mixins/model.js';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueOpenapiForm',
  mixins: [model, validation],
  provide() {
    const providedData = {};

    // using defineProperty to make provide data reactive
    // ref : https://stackoverflow.com/a/65720394
    Object.defineProperty(providedData, 'theme', {
      enumerable: true,
      get: () => this.themeMode,
    });
    return {
      providedData,
    };
  },
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    formTitle: {
      type: String,
      default: '',
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
      default: 'small',
    },
    themeMode: {
      type: String,
      default: 'light',
    },
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
    async onSubmit(validate) {
      this.isFormSubmitting = true;
      const { valid } = await validate();
      if (valid) {
        // console.log("validated");
        await this.onValid();
      } else {
        await this.onInvalid();
      }
      this.isFormSubmitting = false;
    },
  },
});
</script>

<style lang="scss">
@import 'font-awesome/css/font-awesome.min.css';
@import '../assets/scss/main.scss';
</style>
