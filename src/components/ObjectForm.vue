<template>
  <div :class="{ 'is-hidden': isSelfFolded }">
    <template v-for="(key, idx) in Object.keys(properties)">
      <!-- if the property is another object -->
      <validation-provider
        v-if="properties[key].type === 'object'"
        :key="key"
        v-slot="{ errors }"
        :rules="ruleObject(isRequired(key))"
        :name="`${properties[key].title}`"
        :vid="`${properties[key].title.replace(/ /g, '-')}-provider`"
        slim
      >
        <object-form-wrapper
          :is-last-child="idx === Object.keys(properties).length - 1"
          :type="properties[key].type"
          :schema="properties[key]"
          :errors="errors"
          v-model="modelData[key]"
        />
      </validation-provider>
      <!-- if the property is additional property (key-value-pairs) -->
      <validation-provider
        v-else-if="properties[key].type === 'key-value-pairs'"
        :key="key"
        v-slot="{ errors }"
        :rules="ruleObject(isRequired(key))"
        :name="`${properties[key].title}`"
        :vid="`${properties[key].title.replace(/ /g, '-')}-provider`"
        slim
      >
        <key-value-pairs
          :is-last-child="idx === Object.keys(properties).length - 1"
          :type="properties[key].type"
          :schema="properties[key]"
          :errors="errors"
          v-model="modelData[key]"
        />
      </validation-provider>
      <!-- if the property is array -->
      <validation-provider
        v-else-if="properties[key].type === 'array'"
        :key="key"
        v-slot="{ errors }"
        :rules="ruleArray(isRequired(key))"
        :name="`${properties[key].title}`"
        :vid="`${properties[key].title.replace(/ /g, '-')}-provider`"
        slim
      >
        <array-input
          :is-last-child="idx === Object.keys(properties).length - 1"
          :type="properties[key].type"
          :schema="properties[key]"
          :errors="errors"
          v-model="modelData[key]"
        />
      </validation-provider>
      <!-- if the property is simple string, number -->
      <validation-provider
        v-else
        :key="key"
        v-slot="validationOb"
        :rules="ruleString(isRequired(key))"
        :name="`${properties[key].title}`"
        :vid="`${properties[key].title.replace(/ /g, '-')}-provider`"
        slim
      >
        <simple-input
          :key="key"
          :type="properties[key].type"
          :schema="properties[key]"
          :validationOb="validationOb"
          v-model="modelData[key]"
        />
      </validation-provider>
    </template>
  </div>
</template>

<script>
import { model } from "../mixins/model.js";
import fold from "../mixins/fold.js";
import validation from "../mixins/validation.js";

export default {
  name: "object-form",
  props: {
    properties: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ""
    },
    value: {
      type: Object,
      default: () => ({})
    },
    required: {
      type: Array,
      default: () => []
    }
  },

  mixins: [model, fold, validation],

  methods: {
    isRequired(key) {
      const item = this.required.find(itm => itm === key);
      return item ? true : false;
    }
  }
};
</script>
