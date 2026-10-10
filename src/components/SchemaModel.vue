<template>
  <div class="mt-8">
    <div class="mb-8">
      <h5 class="mb-3 text-lg font-semibold text-heading">Schema</h5>
      <ac-code-editor
        v-model="schema"
        language="json"
        label="Schema"
        height="50vh"
      />

      <ac-alert v-if="schemaError" color="warning" class="mt-2.5">
        The format is not correct
      </ac-alert>
    </div>
    <div class="mb-8">
      <h5 class="mb-3 text-lg font-semibold text-heading">Model</h5>
      <ac-code-editor
        v-model="model"
        language="json"
        label="Model"
        height="50vh"
      />

      <ac-alert v-if="modelError" color="warning" class="mt-2.5">
        The format is not correct
      </ac-alert>
    </div>

    <ac-button title="Update" @click.prevent="updateForm()" />
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';
import { AcAlert, AcButton } from '@ac-design/design-system';

export default defineComponent({
  name: 'SchemaModel',

  components: {
    AcAlert,
    AcButton,
    AcCodeEditor: defineAsyncComponent(() =>
      import('@ac-design/design-system/editor').then((module) => module.AcCodeEditor)
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
  },
});
</script>
