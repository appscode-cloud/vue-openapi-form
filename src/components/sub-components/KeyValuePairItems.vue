<template>
  <div class="key-value-save">
    <v-field
      :id="`${schema.title.replace(/ /g, '-')}-key-${index + 1}-provider`"
      v-slot="{ field, handleChange, errors: fieldErrors, meta }"
      v-model="modelData.key"
      rules="required"
      :name="`${fieldName}/key/${index + 1}`"
      :label="`${schema.title} key ${index + 1}`"
      as="div"
    >
      <simple-input
        :model-value="field.value"
        :schema="{
          title: 'Key',
          type: 'string',
          ui: { tag: 'input', type: 'text' },
        }"
        :type="`string`"
        :validation-ob="{ errors: fieldErrors, ...meta }"
        :reference-model="referenceModel.key || ''"
        @update:modelValue="handleChange"
      />
    </v-field>
    <template v-if="additionalProperties.type === 'object'">
      <v-field
        :id="`${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`"
        v-slot="{ field, handleChange }"
        v-model="modelData.value"
        :rules="ruleObject(true)"
        :name="`${fieldName}/value/${index + 1}`"
        :label="`${schema.title} value ${index + 1}`"
        as=""
      >
        <object-form-wrapper
          :field-name="`${fieldName}/value/${index + 1}`"
          :model-value="field.value"
          :schema="additionalProperties"
          :is-self-required="true"
          :type="additionalProperties.type"
          :errors="errors"
          :reference-model="referenceModel.value || {}"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else-if="additionalProperties.type === 'key-value-pairs'">
      <v-field
        :id="`${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`"
        v-slot="{ field, handleChange }"
        v-model="modelData.value"
        :rules="ruleObject(true)"
        :name="`${fieldName}/value/${index + 1}`"
        :label="`${schema.title} value ${index + 1}`"
        as=""
      >
        <key-value-pairs
          :field-name="`${fieldName}/value/${index + 1}`"
          :model-value="field.value"
          :schema="additionalProperties"
          :type="additionalProperties.type"
          :errors="errors"
          :reference-model="referenceModel.value || {}"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else-if="additionalProperties.type === 'array'">
      <v-field
        :id="`${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`"
        v-slot="{ field, handleChange }"
        v-model="modelData.value"
        :rules="ruleArray(true)"
        :name="`${fieldName}/value/${index + 1}`"
        :label="`${schema.title} value ${index + 1}`"
        as=""
      >
        <array-input
          :field-name="`${fieldName}/value/${index + 1}`"
          :model-value="field.value"
          :schema="additionalProperties"
          :type="additionalProperties.type"
          :errors="errors"
          :reference-model="referenceModel.value || []"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else>
      <v-field
        :id="`${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`"
        v-slot="{ field, handleChange, errors: fieldErrors, meta }"
        v-model="modelData.value"
        :rules="ruleString(true)"
        :name="`${fieldName}/value/${index + 1}`"
        :label="`${schema.title} value ${index + 1}`"
        as=""
      >
        <simple-input
          :model-value="field.value"
          :schema="additionalProperties"
          :type="additionalProperties.type"
          :validation-ob="{ errors: fieldErrors, ...meta }"
          :reference-model="referenceModel.value || ''"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <button
      class="button ac-button is-medium"
      @click.prevent="deleteProp(index)"
    >
      <span class="icon is-small">
        <span class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </span>
      </span>
    </button>
  </div>
</template>

<script>
import validation from '../../mixins/validation.js';
import { model } from '../../mixins/model.js';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyValuePairItems',
  mixins: [model, validation],
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    fieldName: {
      type: String,
      default: '',
    },
    errors: {
      type: Object,
      default: () => ({}),
    },
    index: { type: Number, default: 0 },
    schema: {
      type: Object,
      default: () => ({}),
    },
    additionalProperties: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['delete-key-value'],
  methods: {
    deleteProp(index) {
      this.$emit('delete-key-value', index);
    },
  },
});
</script>
