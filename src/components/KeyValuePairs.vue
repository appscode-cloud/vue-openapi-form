<template>
  <div class="vue-schema-form-key-value-pairs" :key="updatePass">
    <div class="level">
      <div class="level-left">
        <h4 class="title is-5">
          {{ schema.title || "Array Item Description" }}
        </h4>
      </div>
      <div class="level-right">
        <tabs v-model="formShow" />
      </div>
    </div>
    <hr />
    <template v-if="formShow">
      <div
        class="columns is-multiline"
        v-for="(prop, index) in keyValueArray"
        :key="index"
      >
        <div class="column is-3">
          <div class="field">
            <label class="label">Key</label>
            <div class="control has-icons right">
              <input class="input" type="text" v-model="prop.key" />
            </div>
          </div>
        </div>
        <div class="column is-8">
          <template v-if="additionalProperties.type === 'object'">
            <vue-form-schema
              :schema="additionalProperties"
              :type="additionalProperties.type"
              v-model="prop.value"
            />
          </template>
          <template v-else-if="additionalProperties.type === 'key-value-pairs'">
            <key-value-pairs
              :schema="additionalProperties"
              :type="additionalProperties.type"
              v-model="prop.value"
            />
          </template>
          <template v-else-if="additionalProperties.type === 'array'">
            <array-input
              :schema="additionalProperties"
              :type="additionalProperties.type"
              v-model="prop.value"
            />
          </template>
          <template v-else>
            <simple-input
              :schema="additionalProperties"
              :type="additionalProperties.type"
              v-model="prop.value"
            />
          </template>
        </div>

        <div class="column is-1">
          <div class="buttons">
            <button
              class="button is-rounded is-danger ac-key-value-action-button"
              @click.prevent="deleteProp(index)"
            >
              <span class="icon is-small">
                <i class="fa fa-trash"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      <validation-observer
        :ref="`${schema.title}-new`"
        :vid="`${schema.title}-new-observer`"
        :disabled="true"
        tag="div"
        class="columns is-multiline"
      >
        <!-- key input -->
        <div class="column is-3">
          <div class="field">
            <label class="label">Key</label>
            <validation-provider
              :vid="`${schema.title}-key-provider`"
              rules="required"
              :name="`${schema.title}-key`"
              v-slot="{ errors, valid, invalid, validated }"
              tag="div"
              class="control has-icons-right"
            >
              <input
                class="input"
                type="text"
                :class="{
                  'is-success': validated && valid,
                  'is-danger': validated && invalid
                }"
                v-model="newKey"
              />

              <!-- right or wrong signs -->
              <template v-if="validated">
                <span class="icon is-small is-right is-success" v-if="valid">
                  <i class="fa fa-check"></i>
                </span>
                <span class="icon is-small is-right is-warning" v-if="invalid">
                  <i class="fa fa-times"></i>
                </span>
              </template>

              <!-- error show -->
              <p class="is-warning" v-if="errors && errors.length > 0">
                <span class="warning"><i class="fa fa-warning"></i></span>
                {{ errors[0] }}
              </p>
            </validation-provider>
          </div>
        </div>

        <!-- value input -->
        <div class="column is-8">
          <template v-if="additionalProperties.type === 'object'">
            <vue-form-schema
              :schema="additionalProperties"
              :type="additionalProperties.type"
              v-model="newValue"
            />
          </template>
          <template v-else-if="additionalProperties.type === 'key-value-pairs'">
            <key-value-pairs
              :schema="additionalProperties"
              :type="additionalProperties.type"
              v-model="newValue"
            />
          </template>
          <template v-else-if="additionalProperties.type === 'array'">
            <array-input
              :schema="additionalProperties"
              :type="additionalProperties.type"
              v-model="newValue"
            />
          </template>
          <template v-else>
            <simple-input
              :schema="additionalProperties"
              :type="additionalProperties.type"
              v-model="newValue"
            />
          </template>
        </div>
        <div class="column is-1">
          <div class="buttons">
            <button
              class="button is-rounded is-success ac-key-value-action-button"
              @click.prevent="addProp()"
            >
              <span class="icon is-small">
                <i class="fa fa-plus"></i>
              </span>
            </button>
          </div>
        </div>
      </validation-observer>
    </template>
    <template v-else>
      <!-- declared in tabs component -->
      <json-form v-model="modelData" />
    </template>
  </div>
</template>

<script>
import { model } from "@/mixins/model.js";
import tabs from "@/mixins/tabs.js";
import validation from "@/mixins/validation.js";

export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },

  mixins: [model, tabs, validation],

  components: {
    "vue-form-schema": () => import("@/components/VueFormSchema"),
    "array-input": () => import("@/components/ArrayInput"),
    "simple-input": () => import("@/components/SimpleInput"),
    "key-value-pairs": () => import("@/components/KeyValuePairs")
  },

  data() {
    return {
      newData: null,
      updatePass: 0,
      keyValueArray: [],
      newKey: "",
      newValue: null
    };
  },

  computed: {
    additionalProperties() {
      return this.schema.additionalProperties || {};
    }
  },

  methods: {
    initKeyValueArray() {
      return Object.keys(this.value).map(key => ({
        key,
        value: this.value[key]
      }));
    },

    reconstructObject(arr) {
      let result = {};
      arr.forEach(item => {
        result = Object.assign(
          {},
          { ...result },
          {
            [`${item.key}`]: item.value
          }
        );
      });
      return result;
    },

    addProp() {
      this.keyValueArray.push({
        key: this.newKey,
        value: this.newValue
      });

      this.newKey = "";
      this.newValue = null;

      this.updatePass += 1;
    },

    deleteProp(index) {
      this.$delete(this.keyValueArray, index);
      this.updatePass += 1;
    }
  },

  created() {
    this.keyValueArray = this.initKeyValueArray();
  },

  watch: {
    keyValueArray: {
      deep: true,
      handler(newVal) {
        this.modelData = this.reconstructObject(newVal);
      }
    }
  }
};
</script>
