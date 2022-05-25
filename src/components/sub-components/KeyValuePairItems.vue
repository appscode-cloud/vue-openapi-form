<template>
  <div class="key-value-save">
    <v-field
      :id="`${schema.title.replace(/ /g, '-')}-key-${index + 1}-provider`"
      v-slot="{ field, handleChange, errors, meta }"
      v-model="modelData.key"
      rules="required"
      :name="`${schema.title.replace(/ /g, '-')}-key-${index + 1}`"
      :label="`${schema.title.replace(/ /g, '-')}-key-${index + 1}`"
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
        :validation-ob="{ errors, ...meta }"
        :reference-model="referenceModel.key || ''"
        @update:modelValue="handleChange"
      />
    </v-field>
    <template v-if="additionalProperties.type === 'object'">
      <v-field
        :id="`${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`"
        v-slot="{ field, handleChange, errors }"
        v-model="modelData.value"
        :rules="ruleObject(true)"
        :name="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
        :label="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
        as=""
      >
        <object-form-wrapper
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
        v-slot="{ field, handleChange, errors }"
        v-model="modelData.value"
        :rules="ruleObject(true)"
        :name="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
        :label="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
        as=""
      >
        <key-value-pairs
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
        v-slot="{ field, handleChange, errors }"
        v-model="modelData.value"
        :rules="ruleArray(true)"
        :name="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
        :label="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
        as=""
      >
        <array-input
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
        v-slot="{ field, handleChange, errors, meta }"
        v-model="modelData.value"
        :rules="ruleString(true)"
        :name="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
        :label="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
        as=""
      >
        <simple-input
          :model-value="field.value"
          :schema="additionalProperties"
          :type="additionalProperties.type"
          :validation-ob="{ errors, ...meta }"
          :reference-model="referenceModel.value || ''"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <button
      class="
        button
        ac-button
        is-small is-square is-outlined-gray is-transparent
      "
      @click.prevent="deleteProp(index)"
    >
      <span class="icon is-small">
        <i class="fa fa-trash"></i>
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
