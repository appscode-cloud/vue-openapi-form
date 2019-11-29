<template>
  <form class="vue-schema-form-object">
    <div class="level">
      <div class="level-left">
        <h4 class="title is-5">
          {{ schema.title || "Array Item Description" }}
        </h4>
      </div>
      <div class="level-right">
        <div v-if="!isRoot" class="buttons">
          <button class="button" @click.prevent="toggleFold()">
            {{ isFolded ? "Expand" : "Collapse" }}
          </button>
        </div>
      </div>
    </div>
    <hr />
    <object-form
      :properties="schema.properties"
      :type="schema.type"
      :isSelfFolded="isRoot ? false : isFolded"
      v-model="modelData"
    />
  </form>
</template>

<script>
import { model } from "@/mixins/model.js";
import fold from "@/mixins/fold.js";

export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Object,
      default: () => ({})
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },

  mixins: [model, fold],

  components: {
    "object-form": () => import("@/components/ObjectForm")
  }
};
</script>
