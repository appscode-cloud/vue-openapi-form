<template>
  <validation-observer
    tag="form"
    :ref="`${schema.title.replace(/ /g, '-')}-observer`"
    :vid="`${schema.title.replace(/ /g, '-')}-observer`"
    v-slot="{ errors: observerErrors }"
    class="vue-schema-form-object"
    :class="{ 'stop-line': isLastChild, 'hide-upper-line': isRoot }"
  >
    <!-- {{ calcObserverError(observerErrors) }} -->
    <div class="ac-level">
      <div class="ac-level-left">
        <div class="ac-collaps-button">
          <div v-if="!isRoot" class="collaps-button">
            <div
              class="button button-circle"
              :disabled="!formShow"
              @click.prevent="toggleFold()"
            >
              <i
                :class="['fa', isFolded ? 'fa-plus' : 'fa-minus']"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div class="ac-form-title">
          <h4>
            {{ schema.title || "Array Item Description" }}
            <!-- show errors-->
            <component-errors
              :errors="[...errors, ...calcObserverError(observerErrors)]"
            />
          </h4>
        </div>
      </div>
      <div class="ac-level-right">
        <tabs v-model="formShow" />

        <button
          v-if="isRoot"
          class="button is-primary is-pulled-right"
          @click.prevent="submit()"
        >
          DONE
        </button>
      </div>
    </div>
    <!-- form for all the object's properties -->
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
import { model } from "../mixins/model.js";
import fold from "../mixins/fold.js";
import tabs from "../mixins/tabs.js";
import validation from "../mixins/validation.js";

export default {
  name: "object-form-wrapper",
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
    },
    isLastChild: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    submit() {
      this.$emit("vof:submitted");
    }
  },

  mixins: [model, fold, tabs, validation]
};
</script>
