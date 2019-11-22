<template>
  <form class="vue-schema-form-object">
    <h4 class="title">{{ schema.title }}</h4>
    <hr />
    <object-form :properties="schema.properties" :model="model" />
  </form>
</template>

<script>
export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    model: {
      type: Object,
      default: () => ({})
    }
  },

  components: {
    "object-form": () => import("@/components/ObjectForm")
  }
};
</script>
