<template>
  <div class="mb-15" :class="{ 'is-hidden': isSelfFolded }">
    <template v-for="(key, idx) in Object.keys(properties)">
      <!-- if the property is another object -->
      <v-field
        v-if="properties[key].type === 'object'"
        :key="key + '-object'"
        v-slot="{ field, handleChange }"
        v-model="modelData[key]"
        :name="`${fieldName}/${key}`"
        :rules="ruleObject(propertiesRequired && isRequired(key))"
        :label="`${properties[key].title}`"
        as=""
      >
        <object-form-wrapper
          :model-value="field.value"
          :field-name="`${fieldName}/${key}`"
          :expand-form="level < 2"
          :is-last-child="idx === Object.keys(properties).length - 1"
          :level="level + 1"
          :type="properties[key].type"
          :is-self-required="propertiesRequired && isRequired(key)"
          :schema="properties[key]"
          :errors="errors"
          :reference-model="referenceModel[key] || {}"
          :showRootTab="false"
          @update:modelValue="handleChange"
        />
      </v-field>
      <!-- if the property is additional property (key-value-pairs) -->
      <v-field
        v-else-if="properties[key].type === 'key-value-pairs'"
        :key="key + '-key-value-pairs'"
        v-slot="{ field, handleChange }"
        v-model="modelData[key]"
        :name="`${fieldName}/${key}`"
        :rules="ruleObject(propertiesRequired && isRequired(key))"
        :label="`${properties[key].title}`"
        as=""
      >
        <key-value-pairs
          :model-value="field.value"
          :field-name="`${fieldName}/${key}`"
          :is-last-child="idx === Object.keys(properties).length - 1"
          :type="properties[key].type"
          :schema="properties[key]"
          :errors="errors"
          :reference-model="referenceModel[key] || {}"
          @update:modelValue="handleChange"
        />
      </v-field>
      <!-- if the property is array -->
      <v-field
        v-else-if="properties[key].type === 'array'"
        :key="key + '-array'"
        v-slot="{ field, handleChange }"
        v-model="modelData[key]"
        :name="`${fieldName}/${key}`"
        :rules="ruleArray(propertiesRequired && isRequired(key))"
        :label="`${properties[key].title}`"
        as=""
      >
        <array-input
          :model-value="field.value"
          :field-name="`${fieldName}/${key}`"
          :is-last-child="idx === Object.keys(properties).length - 1"
          :type="properties[key].type"
          :schema="properties[key]"
          :errors="errors"
          :reference-model="referenceModel[key] || []"
          @update:modelValue="handleChange"
        />
      </v-field>
      <!-- if the property is simple string, number -->
      <v-field
        v-else
        :key="key"
        v-slot="{ field, handleChange, errors: fieldErrors, meta }"
        v-model="modelData[key]"
        :rules="ruleString(propertiesRequired && isRequired(key))"
        :name="`${fieldName}/${key}`"
        :label="`${properties[key].title}`"
        as=""
      >
        <simple-input
          :key="key"
          :model-value="field.value"
          :type="properties[key].type"
          :schema="properties[key]"
          :validation-ob="{ errors: fieldErrors, ...meta }"
          :reference-model="referenceModel[key] || ''"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
  </div>
</template>

<script>
import { model } from '../mixins/model.js';
import fold from '../mixins/fold.js';
import validation from '../mixins/validation.js';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ObjectForm',

  mixins: [model, fold, validation],
  props: {
    properties: {
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
    title: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    required: {
      type: Array,
      default: () => [],
    },
    level: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    // for calculating if the property is actually required or not (Based on parent object self requirement)
    propertiesRequired() {
      return this.isSelfRequired || Object.keys(this.modelData).length > 0;
    },
  },

  methods: {
    isRequired(key) {
      const item = this.required.find((itm) => itm === key);
      return item ? true : false;
    },
  },
});
</script>
