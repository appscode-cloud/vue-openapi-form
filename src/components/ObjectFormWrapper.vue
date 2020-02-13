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
      <div class="ac-level-right is-root-done-button">
        <tabs v-if="!onlyJson" v-model="activeTab" />

        <button
          v-if="isRoot"
          class="done-button button is-primary is-pulled-right"
          @click.prevent="submit()"
        >
          <span>DONE</span>
        </button>
      </div>
    </div>
    <!-- form for all the object's properties -->
    <object-form
      v-if="!onlyJson && activeTab === 'form'"
      :key="`${schema.title}-form`"
      :properties="schema.properties"
      :title="schema.title"
      :required="schema.required"
      :isSelfRequired="isSelfRequired"
      :type="schema.type"
      :isRoot="isRoot"
      :isSelfFolded="isRoot ? false : isFolded"
      v-model="modelData"
    />
    <!-- declared in tabs component -->
    <template v-else-if="activeTab === 'yaml'">
      <yaml-form v-model="modelData" />

      <!-- required for validation obserber and validation provider to show proper validation in yaml tab -->
      <object-form
        v-show="false"
        :key="`${schema.title}-yaml-${JSON.stringify(modelData)}`"
        :properties="schema.properties"
        :title="schema.title"
        :required="schema.required"
        :isSelfRequired="isSelfRequired"
        :type="schema.type"
        :isSelfFolded="isRoot ? false : isFolded"
        v-model="modelData"
      />
    </template>
    <template v-else>
      <json-form v-model="modelData" />

      <!-- required for validation obserber and validation provider to show proper validation in json tab -->
      <object-form
        v-show="false"
        :key="`${schema.title}-json-${JSON.stringify(modelData)}`"
        :properties="schema.properties"
        :title="schema.title"
        :required="schema.required"
        :isSelfRequired="isSelfRequired"
        :type="schema.type"
        :isSelfFolded="isRoot ? false : isFolded"
        v-model="modelData"
      />
    </template>
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
    },
    onlyJson: {
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
