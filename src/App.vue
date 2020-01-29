<template>
  <div id="app">
    <div class="vue-form-scema-body mb-50">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column">
            <div class="section-title has-text-centered">
              <h2>Vue OpenAPI Form</h2>
              <p>Made with Vue, Bulma, vee-validate and v-tooltip</p>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-4">
            <div class="left-content-wrapper">
              <div class="select-box-wrapper" v-if="!modifiedSchema">
                <label for="schema-selection">Select Schema</label>
                <div class="select is-fullwidth">
                  <select id="schema-selection" v-model="selectedJsonSchema">
                    <option
                      v-for="jsonSchema in jsonSchemas"
                      :key="jsonSchema.title"
                      :value="jsonSchema"
                    >
                      {{ jsonSchema.title }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="level" v-else>
                <div class="level-left">
                  Schema has been modified
                </div>
                <div class="level-right">
                  <button
                    class="button is-warning"
                    @click.prevent="resetForm()"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <schema-model
                :key="JSON.stringify(selectedJsonSchema)"
                :schemaModel="selectedJsonSchema"
                @submit="updateSchema"
              />
            </div>
          </div>
          <div class="column is-8">
            <div class="container">
              <!-- key is required to properly update the new form when schema changes -->
              <vue-openapi-form
                :schema="jsonSchema"
                v-model="model"
                :formTitle="formTitle"
                :key="JSON.stringify(selectedJsonSchema)"
                :onValid="onValid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueOpenapiForm from "@/components/VueOpenapiForm";
import Schemas from "@/json-schema";
import SchemaModel from "@/components/SchemaModel";

export default {
  name: "app",
  components: {
    VueOpenapiForm,
    SchemaModel
  },

  data() {
    return {
      jsonSchemas: Schemas,
      selectedJsonSchema: Schemas[0],
      jsonSchema: {},
      model: {},
      formTitle: "",
      modifiedSchema: false
    };
  },

  methods: {
    onValid() {
      // console.log("Form is Valid");
    },
    updateSchema(e) {
      this.modifiedSchema = true;
      this.selectedJsonSchema = e;
    },
    resetForm() {
      this.modifiedSchema = false;
      this.selectedJsonSchema = Schemas[0];
    }
  },

  watch: {
    selectedJsonSchema: {
      deep: true,
      immediate: true,
      handler(newVal) {
        this.jsonSchema = JSON.parse(JSON.stringify(newVal.schema));
        this.model = JSON.parse(JSON.stringify(newVal.model));
        this.formTitle = newVal.title;
      }
    }
  }
};
</script>
