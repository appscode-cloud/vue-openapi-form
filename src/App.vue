<template>
  <div id="app">
    <div class="vue-form-scema-body">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column">
            <div class="section-title has-text-centered">
              <h2>Vue Form Schema</h2>
              <p>Made with Vue, Bulma and Vee-validate</p>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-5">
            <div class="container">
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
          <div class="column is-7">
            <div class="container vue-openapi-form">
              <!-- key is required to properly update the new form when schema changes -->

              <validation-observer ref="mainObserver" slim>
                <validation-provider
                  v-slot="{ errors }"
                  :name="jsonSchema.title"
                  :vid="`${jsonSchema.title}-vpid`"
                  slim
                >
                  <vue-openapi-form
                    :isRoot="true"
                    :schema="jsonSchema"
                    v-model="model"
                    :key="JSON.stringify(selectedJsonSchema)"
                  />
                </validation-provider>
                <div class="buttons">
                  <button class="button is-primary" @click.prevent="submit">
                    Submit
                  </button>
                </div>
              </validation-observer>
              <!-- <key-value-pairs
        :schema="extendedSchema.properties.matchLabels"
        v-model="model.matchLabels"
      /> -->
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
import ExtendSchema from "@/functional-components/extend-schema";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import SchemaModel from "@/components/SchemaModel";

export default {
  name: "app",
  components: {
    VueOpenapiForm,
    ValidationObserver,
    ValidationProvider,
    SchemaModel
    // "key-value-pairs": () => import(s"@/components/KeyValuePairs")
  },

  data() {
    return {
      jsonSchemas: Schemas,
      selectedJsonSchema: Schemas[0],
      jsonSchema: {},
      model: {},
      modifiedSchema: false
    };
  },

  methods: {
    async submit() {
      const isValid = await this.$refs.mainObserver.validate();
      if (isValid) {
        // console.log("validated");
      }
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
        this.jsonSchema = JSON.parse(
          JSON.stringify(ExtendSchema(newVal.schema, newVal.title))
        );
        this.model = JSON.parse(JSON.stringify(newVal.model));
      }
    }
  }
};
</script>

<style lang="scss">
@import "~font-awesome/css/font-awesome.min.css";
@import "@/assets/scss/main.scss";
@import "~codemirror/lib/codemirror.css";

.section-title {
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
  p {
    font-size: 18px;
    color: #666;
  }
}

.vue-form-scema-body {
  padding: 30px 0;
}

label {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  display: block;
  font-weight: 500;
}

@for $i from 1 through 100 {
  .mt-#{$i} {
    margin-top: #{$i}px;
  }
}

.schema-input,
.model-input {
  margin-top: 30px;
  h3 {
    font-size: 24px;
  }
}

.vue-schema-form-object {
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.16);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.vue-schema-form-array {
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.16);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.vue-schema-form-key-value-pairs {
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.16);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.buttons .ac-list-action-button {
  margin-bottom: -3.375rem;
}

.buttons .ac-key-value-action-button {
  margin-bottom: -3.375rem;
  margin-top: 1.9rem;
}

.form-json-toggle-tabs,
.tabs:not(:last-child) {
  margin-bottom: 0;
  margin-right: 2rem;
}

.control.has-icons-right .icon.is-success {
  color: green;
}
.control.has-icons-right .icon.is-warning {
  color: red;
}

p.is-warning {
  color: red;
}
</style>
