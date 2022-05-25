<template>
  <v-form
    v-slot="{ errors: observerErrors }"
    as="form"
    class="ac-nested-elements object-form-wrapper"
    :class="{
      'stop-line': isLastChild,
      'hide-upper-line': isRoot,
      'is-collapsed': isFolded,
    }"
  >
    <!-- {{ calcObserverError(observerErrors) }} -->
    <div class="nested-header mb-5">
      <h6 class="is-flex is-semi-normal" @click.prevent="toggleFold()">
        <div
          v-if="!isRoot"
          class="collaps-icon"
          :disabled="activeTab !== 'form'"
        >
          <i
            :class="['fa', isFolded ? 'fa-plus' : 'fa-minus']"
            aria-hidden="true"
          ></i>
        </div>
        {{ schema.title || 'Array Item Description' }}
        <!-- show errors-->
        <component-errors
          :errors="[...errors, ...calcObserverError(observerErrors)]"
        />
      </h6>
      <tabs v-if="!onlyJson" v-model="activeTab" />
      <!-- 
          <button
            v-if="isRoot"
            class="done-button button ac-button is-primary is-pulled-right"
            :class="{ 'is-loading': isFormSubmitting }"
            @click.prevent="submit()"
          >
            <span>DONE</span>
          </button> -->
    </div>
    <!-- form for all the object's properties -->
    <!-- <object-form
      v-show="!onlyJson && activeTab === 'form'"
      :key="`${schema.title}-form`"
      v-model="modelData"
      :properties="schema.properties"
      :title="schema.title"
      :required="schema.required"
      :is-self-required="isSelfRequired"
      :type="schema.type"
      :is-root="isRoot"
      :level="level"
      :is-self-folded="isRoot ? false : isFolded"
      :reference-model="referenceModel || {}"
    /> -->
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
  </v-form>
</template>

<script>
import { model } from '../mixins/model.js';
import fold from '../mixins/fold.js';
import tabs from '../mixins/tabs.js';
import validation from '../mixins/validation.js';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ObjectFormWrapper',

  mixins: [model, fold, tabs, validation],
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    modelValue: {
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
    level: {
      type: Number,
      default: 1,
    },
  },

  emits: ['vof:submitted'],

  methods: {
    submit() {
      this.$emit('vof:submitted');
    },
  },
});
</script>
