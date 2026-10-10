<template>
  <v-form ref="v-form" v-slot="{ meta, validate, errors }" as="">
    <ac-form width="full">
      <!-- `vue-openapi-form` and `is-medium` carry no styles; mixins/size.js looks them up -->
      <div
        class="vue-openapi-form w-full font-sans text-body"
        :class="{ 'is-medium': size === 'medium' }"
      >
        <v-field
          v-slot="{ field, handleChange }"
          v-model="modelData"
          :name="extendedSchema.title"
          :label="extendedSchema.title"
          :rules="ruleObject(true)"
          as=""
        >
          <object-form-wrapper
            field-name="$"
            :model-value="field.value"
            :expand-form="true"
            :is-root="true"
            :level="1"
            :is-self-required="true"
            :only-json="onlyJson"
            :schema="extendedSchema"
            :reference-model="referenceModel || {}"
            :errors="errors"
            :showRootTab="true"
            @update:modelValue="handleChange"
          />
        </v-field>
      </div>
      <template #footer>
        <ac-form-footer sticky="none">
          <template #left>
            <slot
              name="left-controls"
              :validate="validate"
              :form-status="meta"
              :errors="errors"
            />
          </template>
          <template #right>
            <slot
              name="right-controls"
              :validate="validate"
              :form-status="meta"
              :errors="errors"
            />
          </template>
        </ac-form-footer>
      </template>
    </ac-form>
  </v-form>
</template>

<script>
import ExtendSchema from '../functional-components/extend-schema.js';
import validation from '../mixins/validation.js';
import { model } from '../mixins/model.js';
import { defineComponent } from 'vue';
import { AcForm, AcFormFooter } from '@ac-design/design-system';

export default defineComponent({
  name: 'VueOpenapiForm',
  components: {
    AcForm,
    AcFormFooter,
  },
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
    size: {
      type: String,
      default: 'small',
    },
    themeMode: {
      type: String,
      default: 'light',
    },
  },
  computed: {
    extendedSchema() {
      return ExtendSchema(this.schema, this.formTitle);
    },
  },
});
</script>
