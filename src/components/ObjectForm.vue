<template>
  <div>
    <template v-for="key in Object.keys(properties)">
      <vue-form-schema
        v-if="properties[key].type === 'object'"
        :key="key"
        :schema="properties[key]"
        :model="model[key]"
      />
      <array-input
        v-else-if="properties[key].type === 'array'"
        :key="key"
        :schema="properties[key]"
        :model="model[key]"
      />
      <simple-input
        v-else
        :key="key"
        :schema="properties[key]"
        :model="model[key]"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    properties: {
      type: Object,
      default: () => ({})
    },
    model: {
      type: Object,
      default: () => ({})
    }
  },

  components: {
    "vue-form-schema": () => import("@/components/VueFormSchema"),
    "array-input": () => import("@/components/ArrayInput"),
    "simple-input": () => import("@/components/SimpleInput")
  }
};
</script>
