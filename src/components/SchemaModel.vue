<template>
  <div class="schema-model-wrapper mt-30">
    <div class="schema-input mb-30">
      <h5 class="mb-15">Schema</h5>
      <monaco-editor
        :value="schema"
        language="json"
        class="editor-writable vh-50 is-clipped"
        :options="{
          minimap: {
            enabled: false,
          },
          theme: editorTheme,
          readOnly: false,
        }"
        @change="onSchemaChange"
      />

      <p v-if="schemaError" class="is-warning mt-10">
        <span class="warning"><i class="fa fa-warning"></i></span>
        The format is not correct
      </p>
    </div>
    <div class="model-input">
      <h5 class="mb-15">Model</h5>
      <monaco-editor
        :value="model"
        language="json"
        class="editor-writable vh-50 is-clipped"
        :options="{
          minimap: {
            enabled: false,
          },
          theme: editorTheme,
          readOnly: false,
        }"
        @change="onModelChange"
      />

      <p v-if="modelError" class="is-warning mt-10">
        <span class="warning"><i class="fa fa-warning"></i></span>
        The format is not correct
      </p>
    </div>

    <div class="buttons mt-20">
      <button class="button ac-button is-primary" @click.prevent="updateForm()">
        Update
      </button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'SchemaModel',

  components: {
    MonacoEditor: defineAsyncComponent(() =>
      import(
        '@appscode/design-system/vue-components/v3/editor/MonacoEditor.vue'
      ).then((module) => module.default)
    ),
  },
  props: {
    schemaModel: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['submit'],

  data() {
    return {
      schema: '',
      model: '',

      schemaError: false,
      modelError: false,
    };
  },

  computed: {
    editorTheme() {
      return document.documentElement.classList.contains('is-dark-theme')
        ? 'vs-dark'
        : 'vs';
    },
  },

  watch: {
    schemaModel: {
      deep: true,
      immediate: true,
      handler() {
        this.initSchemaModel();
      },
    },
    schema() {
      this.schemaError = false;
    },
    model() {
      this.modelError = false;
    },
  },

  created() {
    this.initSchemaModel();
  },

  methods: {
    initSchemaModel() {
      this.schema = JSON.stringify(this.schemaModel.schema, null, 2);
      this.model = JSON.stringify(this.schemaModel.model, null, 2);
    },

    updateForm() {
      const newOb = { ...this.schemaModel };
      try {
        newOb.schema = JSON.parse(this.schema);
        this.schemaError = false;
      } catch {
        newOb.schema = this.schemaModel.schema;
        this.schemaError = true;
      }

      try {
        newOb.model = JSON.parse(this.model);
        this.modelError = false;
      } catch {
        newOb.model = this.schemaModel.model;
        this.modelError = true;
      }

      if (!this.schemaError && !this.modelError) {
        this.$emit('submit', newOb);
      }
    },

    onSchemaChange(e) {
      if (typeof e === 'string') this.schema = e;
    },
    onModelChange(e) {
      if (typeof e === 'string') this.model = e;
    },
  },
});
</script>
