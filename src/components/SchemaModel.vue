<template>
  <div class="schema-model-wrapper">
    <div class="schema-input">
      <h3>Schema</h3>
      <codemirror v-model="schema" :options="cmOptions" />

      <p class="is-warning mt-10" v-if="schemaError">
        <span class="warning"><i class="fa fa-warning"></i></span>
        The format is not correct
      </p>
    </div>
    <div class="model-input">
      <h3>Model</h3>
      <codemirror v-model="model" :options="cmOptions" />

      <p class="is-warning mt-10" v-if="modelError">
        <span class="warning"><i class="fa fa-warning"></i></span>
        The format is not correct
      </p>
    </div>

    <div class="buttons mt-20">
      <button class="button is-primary" @click.prevent="updateForm()">
        Update
      </button>
    </div>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/mode/javascript/javascript.js";

export default {
  name: "schema-model",
  props: {
    schemaModel: {
      type: Object,
      default: () => ({})
    }
  },

  components: { codemirror },

  data() {
    return {
      schema: "",
      model: "",

      cmOptions: {
        mode: "application/json",
        theme: "default",
        readOnly: false,
        lineNumbers: true
      },

      schemaError: false,
      modelError: false
    };
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
        this.$emit("submit", newOb);
      }
    }
  },

  created() {
    this.initSchemaModel();
  },

  watch: {
    schemaModel: {
      deep: true,
      immediate: true,
      handler() {
        this.initSchemaModel();
      }
    },
    schema() {
      this.schemaError = false;
    },
    model() {
      this.modelError = false;
    }
  }
};
</script>
