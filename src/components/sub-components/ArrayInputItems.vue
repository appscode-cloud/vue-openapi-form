<template>
  <div class="form-left-item">
    <template v-if="items.type === 'object'">
      <v-field
        v-slot="{ field, handleChange, errors }"
        v-model="modelData[index]"
        :rules="ruleObject(true)"
        :name="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
        :label="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
        as=""
      >
        <object-form-wrapper
          :model-value="field.value"
          :schema="{
            ...items,
            ...{ title: `${schema.title} ${index + 1}` },
          }"
          :is-self-required="true"
          :type="items.type"
          :errors="errors"
          :reference-model="referenceModel[index] || {}"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else-if="items.type === 'key-value-pairs'">
      <v-field
        v-slot="{ field, handleChange, errors }"
        v-model="modelData[index]"
        :rules="ruleObject(true)"
        :name="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
        :label="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
        as=""
      >
        <key-value-pairs
          :model-value="field.value"
          :errors="errors"
          :schema="{
            ...items,
            ...{ title: `${schema.title} ${index + 1}` },
          }"
          :type="items.type"
          :reference-model="referenceModel[index] || {}"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else-if="items.type === 'array'">
      <v-field
        v-slot="{ field, handleChange, errors }"
        v-model="modelData[index]"
        :rules="ruleArray(true)"
        :name="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
        :label="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
        as=""
      >
        <array-input
          :model-value="field.value"
          :schema="{
            ...items,
            ...{ title: `${schema.title} ${index + 1}` },
          }"
          :type="items.type"
          :errors="errors"
          :reference-model="referenceModel[index] || []"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else>
      <v-field
        v-slot="{ field, handleChange, errors, meta }"
        v-model="modelData[index]"
        :rules="ruleString(true)"
        :name="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
        :label="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
        as=""
      >
        <simple-input
          :model-value="field.value"
          :schema="{
            ...items,
            ...{ title: `${schema.title} ${index + 1}` },
          }"
          :type="items.type"
          :required="true"
          :validation-ob="{ errors, ...meta }"
          :reference-model="referenceModel[index] || ''"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
  </div>
</template>

<script>
import validation from '../../mixins/validation.js';
import { model } from '../../mixins/model.js';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArrayInputItems',
  mixins: [model, validation],
  props: {
    items: {
      type: Object,
      default: () => ({}),
    },
    schema: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0,
    },
    modelValue: {
      type: null,
      default: () => [],
    },
  },
});
</script>
