<template>
  <div :class="{ 'is-hidden': isSelfFolded }">
    <template v-for="key in Object.keys(properties)">
      <vue-form-schema
        v-if="properties[key].type === 'object'"
        :key="key"
        :type="properties[key].type"
        :schema="properties[key]"
        v-model="modelData[key]"
      />
      <key-value-pairs
        v-else-if="properties[key].type === 'key-value-pairs'"
        :key="key"
        :type="properties[key].type"
        :schema="properties[key]"
        v-model="modelData[key]"
      />
      <validation-provider
        v-else-if="properties[key].type === 'array'"
        :key="key"
        v-slot="validationOb"
        :rules="ruleArray(true)"
        :name="`${properties[key].title}`"
        :vid="`${properties[key].title}-vpid`"
        slim
      >
        <array-input
          :type="properties[key].type"
          :schema="properties[key]"
          :validationOb="validationOb"
          v-model="modelData[key]"
        />
      </validation-provider>
      <simple-input
        v-else
        :key="key"
        :required="isRequired(key)"
        :type="properties[key].type"
        :schema="properties[key]"
        v-model="modelData[key]"
      />
    </template>
  </div>
</template>

<script>
import { model } from "@/mixins/model.js";
import fold from "@/mixins/fold.js";
import validation from "@/mixins/validation.js";

export default {
  props: {
    properties: {
      type: Object,
      default: () => ({})
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
    "vue-form-schema": () => import("@/components/VueFormSchema"),
    "array-input": () => import("@/components/ArrayInput"),
    "simple-input": () => import("@/components/SimpleInput"),
    "key-value-pairs": () => import("@/components/KeyValuePairs")
  }
};
</script>
