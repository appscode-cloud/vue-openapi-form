<template>
  <div :class="{ 'is-hidden': isSelfFolded }">
    <template v-for="key in Object.keys(properties)">
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
        <vue-openapi-form
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
import { model } from "@appscode/vue-openapi-form/src/mixins/model.js";
import fold from "@appscode/vue-openapi-form/src/mixins/fold.js";
import validation from "@appscode/vue-openapi-form/src/mixins/validation.js";

import VueOpenapiForm from "@appscode/vue-openapi-form/src/components/VueOpenapiForm";
import ArrayInput from "@appscode/vue-openapi-form/src/components/ArrayInput";
import SimpleInput from "@appscode/vue-openapi-form/src/components/SimpleInput";
import KeyValuePairs from "@appscode/vue-openapi-form/src/components/KeyValuePairs";

export default {
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

  components: {
    VueOpenapiForm,
    ArrayInput,
    SimpleInput,
    KeyValuePairs
  },

  methods: {
    isRequired(key) {
      const item = this.required.find(itm => itm === key);
      return item ? true : false;
    }
  }
};
</script>
