<template>
  <form class="vue-schema-form-object">
    <h4 class="title is-5">{{ schema.title || "Array Item Description" }}</h4>
    <hr />
    <object-form
      :properties="schema.properties"
      :type="schema.type"
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
