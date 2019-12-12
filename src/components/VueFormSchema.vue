<template>
  <validation-observer
    tag="form"
    :ref="`${schema.title.replace(/ /g, '-')}-observer`"
    :vid="`${schema.title.replace(/ /g, '-')}-observer`"
    v-slot="{ errors: observerErrors }"
    class="vue-schema-form-object"
  >
    <!-- {{ calcObserverError(observerErrors) }} -->
    <div class="level">
      <div class="level-left">
        <h4 class="title is-5">
          {{ schema.title || "Array Item Description" }}
          <!-- show errors-->
          <component-errors
            :errors="[...errors, ...calcObserverError(observerErrors)]"
          />
        </h4>
      </div>
      <div class="level-right">
        <tabs v-model="formShow" />

        <div v-if="!isRoot" class="buttons">
          <button
            class="button"
            :disabled="!formShow"
            @click.prevent="toggleFold()"
          >
            {{ isFolded ? "Expand" : "Collapse" }}
          </button>
        </div>
      </div>
    </div>
    <hr />
    <object-form
      v-if="formShow"
      :properties="schema.properties"
      :title="schema.title"
      :required="schema.required"
      :type="schema.type"
      :isSelfFolded="isRoot ? false : isFolded"
      v-model="modelData"
    />
    <!-- declared in tabs component -->
    <json-form v-else v-model="modelData" />
  </validation-observer>
</template>

<script>
import { model } from "@/mixins/model.js";
import fold from "@/mixins/fold.js";
import tabs from "@/mixins/tabs.js";
import validation from "@/mixins/validation.js";

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
    },
    errors: {
      type: Array,
      default: () => []
    }
  },

  mixins: [model, fold, tabs, validation],

  components: {
    "object-form": () => import("@/components/ObjectForm")
  }
};
</script>
