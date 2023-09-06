<template>
  <div class="ml-30">
    <editor
      :key="theme"
      v-model="editorModel"
      :original-value="originalValueString"
      language="json"
      :editor-height="70"
    />
  </div>
</template>

<script>
import { model } from '../mixins/model.js';
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'YamlForm',

  components: {
    Editor: defineAsyncComponent(() =>
      import('@appscode/design-system/vue-components/v3/editor/Editor.vue')
    ),
  },

  mixins: [model],
  inject: ['providedData'],
  props: {
    modelValue: {
      type: null,
      default: () => ({}),
    },
  },

  emits: ['code::model-data-updated'],

  computed: {
    originalValueString() {
      return JSON.stringify(this.referenceModel, null, 2);
    },
    theme() {
      return this.providedData.theme || 'light';
    },
    editorModel: {
      get() {
        return JSON.stringify(this.modelValue, null, 2);
      },
      set(n) {
        let ans = null;
        try {
          ans = JSON.parse(n); // json => jsObject
        } catch (e) {
          ans = this.modelData;
        }

        this.modelData = ans;
        this.$emit('code::model-data-updated', ans);
      },
    },
  },
});
</script>
