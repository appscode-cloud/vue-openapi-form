<template>
  <validation-observer
    tag="form"
    :ref="`${schema.title.replace(/ /g, '-')}-observer`"
    :vid="`${schema.title.replace(/ /g, '-')}-observer`"
    v-slot="{ errors: observerErrors }"
    class="ac-content-layout style-2 pt-20 pr-0 pb-0 pl-30 is-border-none"
    :class="{ 'stop-line': isLastChild, 'hide-upper-line': isRoot }"
  >
    <!-- {{ calcObserverError(observerErrors) }} -->
    <div class="ac-content-header">
      <div class="ac-cheader-left is-flex is-align-items-center">
        <div class="ac-collaps-button">
          <div v-if="!isRoot" class="collaps-button">
            <div
              class="button-circle"
              :disabled="activeTab !== 'form'"
              @click.prevent="toggleFold()"
            >
              <i
                :class="['fa', isFolded ? 'fa-plus' : 'fa-minus']"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div class="ac-content-header">
          <h6>
            {{ schema.title || "Array Item Description" }}
            <!-- show errors-->
            <component-errors
              :errors="[...errors, ...calcObserverError(observerErrors)]"
            />
          </h6>
        </div>
      </div>
      <div class="ac-cheader-right is-root-done-button">
        <tabs v-if="!onlyJson" v-model="activeTab" />

        <button
          v-if="isRoot"
          class="done-button button ac-button is-primary is-pulled-right"
          :class="{ 'is-loading': isFormSubmitting }"
          @click.prevent="submit()"
        >
          <span>DONE</span>
        </button>
      </div>
    </div>
    <!-- form for all the object's properties -->
    <object-form
      v-show="!onlyJson && activeTab === 'form'"
      :key="`${schema.title}-form`"
      :properties="schema.properties"
      :title="schema.title"
      :required="schema.required"
      :isSelfRequired="isSelfRequired"
      :type="schema.type"
      :isRoot="isRoot"
      :isSelfFolded="isRoot ? false : isFolded"
      v-model="modelData"
      :reference-model="referenceModel || {}"
    />
    <!-- declared in tabs component -->
    <yaml-form
      v-if="activeTab === 'yaml'"
      v-model="modelData"
      :reference-model="referenceModel || {}"
    />
    <json-form
      v-else-if="activeTab === 'json'"
      v-model="modelData"
      :reference-model="referenceModel || {}"
    />
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
      default: () => ({}),
    },
    value: {
      type: Object,
      default: () => ({}),
    },
    isRoot: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Array,
      default: () => [],
    },
    isLastChild: {
      type: Boolean,
      default: false,
    },
    onlyJson: {
      type: Boolean,
      default: false,
    },
    isFormSubmitting: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    submit() {
      this.$emit("vof:submitted");
    },
  },

  mixins: [model, fold, tabs, validation],
};
</script>
