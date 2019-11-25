<template>
  <div>
    <template v-for="key in Object.keys(properties)">
      <vue-form-schema
        v-if="properties[key].type === 'object'"
        :key="key"
        type="object"
        :schema="properties[key]"
        v-model="modelData[key]"
      />
      <array-input
        v-else-if="properties[key].type === 'array'"
        :key="key"
        type="array"
        :schema="properties[key]"
        v-model="modelData[key]"
      />
      <simple-input
        v-else
        :key="key"
        type="string"
        :schema="properties[key]"
        v-model="modelData[key]"
      />
    </template>
  </div>
</template>

<script>
import { model } from "@/mixins/model.js";

export default {
  props: {
    properties: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },

  mixins: [model],

  components: {
    "vue-form-schema": () => import("@/components/VueFormSchema"),
    "array-input": () => import("@/components/ArrayInput"),
    "simple-input": () => import("@/components/SimpleInput")
  },

  data() {
    return {
      modelData: {}
    };
  },

  methods: {
    initModelData() {
      this.modelData = this.value;
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
