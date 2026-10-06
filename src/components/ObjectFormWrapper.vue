<template>
  <form
    class="vof-nested"
    :class="{
      'vof-collapsed': isFolded,
    }"
  >
    <div class="vof-nested-header">
      <h6 class="vof-nested-title" @click.prevent="toggleFold()">
        <div
          v-if="!isRoot"
          class="vof-collapse-icon"
          :disabled="activeTab !== 'form'"
        >
          <component :is="isFolded ? 'Plus' : 'Minus'" aria-hidden="true" />
        </div>
        {{ schema.title || 'Array Item Description' }}
        <!-- show errors-->
        <component-errors :errors="calcFormErrors(errors, fieldName)" />
      </h6>
      <tabs v-if="!onlyJson" v-model="activeTab" :showTab="showRootTab"/>
    </div>
    <!-- form for all the object's properties -->
    <object-form
      v-show="!onlyJson && activeTab === 'form'"
      :key="`${schema.title}-form`"
      v-model="modelData"
      :field-name="fieldName"
      :properties="schema.properties"
      :title="schema.title"
      :required="schema.required"
      :is-self-required="isSelfRequired"
      :type="schema.type"
      :level="level"
      :is-self-folded="isFolded"
      :reference-model="referenceModel || {}"
      :errors="errors"
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
  </form>
</template>

<script>
import { model } from '../mixins/model.js';
import fold from '../mixins/fold.js';
import tabs from '../mixins/tabs.js';
import validation from '../mixins/validation.js';
import { defineComponent } from 'vue';
import { Minus, Plus } from 'lucide-vue-next';

export default defineComponent({
  name: 'ObjectFormWrapper',
  components: { Minus, Plus },

  mixins: [model, fold, tabs, validation],
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    fieldName: {
      type: String,
      default: '',
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
      type: Object,
      default: () => ({}),
    },
    isLastChild: {
      type: Boolean,
      default: false,
    },
    onlyJson: {
      type: Boolean,
      default: false,
    },
    level: {
      type: Number,
      default: 1,
    },
    showRootTab: {
      type: Boolean,
      default: false,
    }
  },
});
</script>
