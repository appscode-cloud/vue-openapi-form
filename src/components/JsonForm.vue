<template>
  <div class="vof-editor">
    <ac-code-editor
      :key="theme"
      v-model="editorModel"
      :original="originalValueString"
      language="json"
      height="70vh"
      label="JSON"
    />
  </div>
</template>

<script>
import { model } from '../mixins/model.js';
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'YamlForm',

  components: {
    AcCodeEditor: defineAsyncComponent(() =>
      import('@mohin4/design-system/editor').then((module) => module.AcCodeEditor)
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
