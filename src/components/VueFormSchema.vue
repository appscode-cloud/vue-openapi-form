<template>
  <form class="vue-schema-form-object">
    <h4 class="title">{{ schema.title }}</h4>
    <hr />
    <object-form
      :properties="schema.properties"
      type="object"
      v-model="modelData"
    />
  </form>
</template>

<script>
import { model } from "@/mixins/model.js";

export default {
  props: {
    schema: {
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
    "object-form": () => import("@/components/ObjectForm")
  }
};
</script>
