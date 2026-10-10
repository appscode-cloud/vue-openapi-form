<template>
  <div :class="cls.keyValueRow">
    <v-field
      :id="`${schema.title.replace(/ /g, '-')}-key-${index + 1}-provider`"
      v-slot="{ componentField, errors: fieldErrors, meta }"
      v-model="modelData.key"
      rules="required"
      :name="`${fieldName}/key/${index + 1}`"
      :label="`${schema.title} key ${index + 1}`"
      as="div"
    >
      <simple-input
        v-bind="componentField"
        :schema="{
          title: 'Key',
          type: 'string',
          ui: { tag: 'input', type: 'text' },
        }"
        :type="`string`"
        :validation-ob="{ errors: fieldErrors, ...meta }"
        :reference-model="referenceModel.key || ''"
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
    <ac-button
      color="white"
      size="small"
      class="mt-1"
      aria-label="Delete"
      @click.prevent="deleteProp(index)"
    >
      <template #icon><Trash2 class="text-danger" aria-hidden="true" /></template>
    </ac-button>
  </div>
</template>

<script>
import validation from '../../mixins/validation.js';
import { model } from '../../mixins/model.js';
import { defineComponent } from 'vue';
import { AcButton } from '@ac-design/design-system';
import { Trash2 } from '@lucide/vue';
import * as cls from '../classes.js';

export default defineComponent({
  name: 'KeyValuePairItems',
  components: { AcButton, Trash2 },
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
  setup() {
    return { cls };
  },
  methods: {
    deleteProp(index) {
      this.$emit('delete-key-value', index);
    },
  },
});
</script>
