<template>
  <div :class="{ 'is-hidden': isSelfFolded }">
    <validation-observer
      :ref="`${title.replace(/ /g, '-')}Observer`"
      :vid="`${title.replace(/ /g, '-')}-void`"
    >
      <template v-for="key in Object.keys(properties)">
        <validation-provider
          v-if="properties[key].type === 'object'"
          :key="key"
          v-slot="{ errors }"
          :rules="ruleObject(isRequired(key))"
          :name="`${properties[key].title}`"
          :vid="`${properties[key].title}-vpid`"
          slim
        >
          <vue-form-schema
            :type="properties[key].type"
            :schema="properties[key]"
            :errors="errors"
            v-model="modelData[key]"
          />
        </validation-provider>
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
          :rules="ruleArray(isRequired(key))"
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
        <validation-provider
          v-else
          :key="key"
          v-slot="validationOb"
          :rules="ruleString(isRequired(key))"
          :name="`${properties[key].title}`"
          :vid="`${properties[key].title}`"
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
    </validation-observer>
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
    "vue-form-schema": () => import("@/components/VueFormSchema"),
    "array-input": () => import("@/components/ArrayInput"),
    "simple-input": () => import("@/components/SimpleInput"),
    "key-value-pairs": () => import("@/components/KeyValuePairs")
  },

  methods: {
    isRequired(key) {
      const item = this.required.find(itm => itm === key);
      return item ? true : false;
    }
  }
};
</script>
