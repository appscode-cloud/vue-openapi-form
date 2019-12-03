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
      <array-input
        v-else-if="properties[key].type === 'array'"
        :key="key"
        :type="properties[key].type"
        :schema="properties[key]"
        v-model="modelData[key]"
      />
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

  mixins: [model, fold],

  components: {
    "vue-form-schema": () => import("@/components/VueFormSchema"),
    "array-input": () => import("@/components/ArrayInput"),
    "simple-input": () => import("@/components/SimpleInput"),
    "key-value-pairs": () => import("@/components/KeyValuePairs")
  },

  data() {
    return {
      modelData: {}
    };
  },

  methods: {
    initModelData() {
      this.modelData = this.value;
    },

    isRequired(key) {
      return this.required.includes(key);
    }
  },

  created() {
    this.initModelData();
  },

  watch: {
    model() {
      this.initModelData();
    }
  }
};
</script>
