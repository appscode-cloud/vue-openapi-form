<template>
  <div class="ml-30">
    <editor
      :key="theme"
      v-model="editorModel"
      :original-value="originalValueString"
      language="yaml"
      :editor-height="80"
    />
  </div>
</template>

<script>
import { model } from '../mixins/model.js';
import jsyaml from 'js-yaml';
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
      return jsyaml.safeDump(this.referenceModel, { lineWidth: 2000 }); // json -> yaml
    },
    theme() {
      return this.providedData.theme || 'light';
    },
    editorModel: {
      get() {
        return jsyaml.safeDump(this.modelValue, { lineWidth: 2000 });
      },
      set(n) {
        let ans = null;
        try {
          ans = jsyaml.safeLoad(n, {
            json: true,
          }); // yaml => jsObject
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

