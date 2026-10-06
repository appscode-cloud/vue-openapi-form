<template>
  <div class="vof-demo-schema-model">
    <div class="vof-demo-schema-model-block">
      <h5 class="vof-demo-section-title">Schema</h5>
      <ac-code-editor
        v-model="schema"
        language="json"
        label="Schema"
        height="50vh"
      />

      <p v-if="schemaError" class="vof-demo-warning">
        <TriangleAlert aria-hidden="true" />
        The format is not correct
      </p>
    </div>
    <div class="vof-demo-schema-model-block">
      <h5 class="vof-demo-section-title">Model</h5>
      <ac-code-editor
        v-model="model"
        language="json"
        label="Model"
        height="50vh"
      />

      <p v-if="modelError" class="vof-demo-warning">
        <TriangleAlert aria-hidden="true" />
        The format is not correct
      </p>
    </div>

    <ac-button title="Update" @click.prevent="updateForm()" />
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';
import { AcButton } from '@mohin4/design-system';
import { TriangleAlert } from 'lucide-vue-next';

export default defineComponent({
  name: 'SchemaModel',

  components: {
    AcButton,
    TriangleAlert,
    AcCodeEditor: defineAsyncComponent(() =>
      import('@mohin4/design-system/editor').then((module) => module.AcCodeEditor)
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
