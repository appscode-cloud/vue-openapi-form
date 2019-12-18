<template>
  <validation-observer
    tag="div"
    :ref="`${schema.title.replace(/ /g, '-')}-observer`"
    :vid="`${schema.title.replace(/ /g, '-')}-observer`"
    v-slot="{ errors: observerErrors }"
    class="vue-schema-form-key-value-pairs"
    :key="updatePass"
  >
    <div class="level">
      <div class="level-left">
        <h4 class="title is-5">
          {{ schema.title || "Array Item Description"
          }}<!-- show errors-->
          <component-errors
            :errors="[...errors, ...calcObserverError(observerErrors)]"
          />
        </h4>
      </div>
      <div class="level-right">
        <tabs v-model="formShow" />
      </div>
    </div>
    <hr />
    <template v-if="formShow">
      <!-- existing key values -->
      <div
        class="columns is-multiline"
        v-for="(prop, index) in keyValueArray"
        :key="index"
      >
        <div class="column is-3">
          <div class="field">
            <label class="label">Key</label>
            <validation-provider
              :vid="
                `${schema.title.replace(/ /g, '-')}-key-${index + 1}-provider`
              "
              rules="required"
              :name="`${schema.title.replace(/ /g, '-')}-key-${index + 1}`"
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
                v-model="prop.key"
              />

              <!-- right or wrong signs -->
              <right-wrong-signs
                v-if="validated"
                :valid="valid"
                :invalid="invalid"
              />

              <!-- error show -->
              <component-errors :errors="errors" />
            </validation-provider>
          </div>
        </div>
        <div class="column is-8">
          <template v-if="additionalProperties.type === 'object'">
            <validation-provider
              v-slot="{ errors }"
              :rules="ruleObject(true)"
              :name="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
              :vid="
                `${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`
              "
              slim
            >
              <vue-openapi-form
                :schema="additionalProperties"
                :type="additionalProperties.type"
                :errors="errors"
                v-model="prop.value"
              />
            </validation-provider>
          </template>
          <template v-else-if="additionalProperties.type === 'key-value-pairs'">
            <validation-provider
              v-slot="{ errors }"
              :rules="ruleObject(true)"
              :name="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
              :vid="
                `${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`
              "
              slim
            >
              <key-value-pairs
                :schema="additionalProperties"
                :type="additionalProperties.type"
                :errors="errors"
                v-model="prop.value"
              />
            </validation-provider>
          </template>
          <template v-else-if="additionalProperties.type === 'array'">
            <validation-provider
              v-slot="{ errors }"
              :rules="ruleArray(true)"
              :name="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
              :vid="
                `${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`
              "
              slim
            >
              <array-input
                :schema="additionalProperties"
                :type="additionalProperties.type"
                :errors="errors"
                v-model="prop.value"
              />
            </validation-provider>
          </template>
          <template v-else>
            <validation-provider
              v-slot="validationOb"
              :rules="ruleString(true)"
              :name="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
              :vid="
                `${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`
              "
              slim
            >
              <simple-input
                :schema="additionalProperties"
                :type="additionalProperties.type"
                :validationOb="validationOb"
                v-model="prop.value"
              />
            </validation-provider>
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

      <!-- key input -->
      <validation-observer
        :ref="`${schema.title.replace(/ /g, '-')}-new`"
        :vid="`${schema.title.replace(/ /g, '-')}-new-observer`"
        :disabled="true"
        tag="div"
        class="columns is-multiline"
      >
        <div class="column is-3">
          <div class="field">
            <label class="label">Key</label>
            <validation-provider
              :vid="`${schema.title.replace(/ /g, '-')}-key-provider`"
              rules="required"
              :name="`${schema.title.replace(/ /g, '-')}-key`"
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
              <right-wrong-signs
                v-if="validated"
                :valid="valid"
                :invalid="invalid"
              />

              <!-- error show -->
              <component-errors :errors="errors" />
            </validation-provider>
          </div>
        </div>

        <!-- new value input -->

        <div class="column is-8">
          <!-- if value is object -->
          <template v-if="additionalProperties.type === 'object'">
            <validation-provider
              v-slot="{ errors }"
              rules="required"
              :name="`${schema.title.replace(/ /g, '-')}-value`"
              :vid="`${schema.title.replace(/ /g, '-')}-value-provider`"
              slim
            >
              <vue-openapi-form
                :schema="additionalProperties"
                :type="additionalProperties.type"
                :errors="errors"
                v-model="newValue"
              />
            </validation-provider>
          </template>
          <!-- if value is key value pairs -->
          <template v-else-if="additionalProperties.type === 'key-value-pairs'">
            <validation-provider
              v-slot="{ errors }"
              rules="required"
              :name="`${schema.title.replace(/ /g, '-')}-value`"
              :vid="`${schema.title.replace(/ /g, '-')}-value-provider`"
              slim
            >
              <key-value-pairs
                :schema="additionalProperties"
                :type="additionalProperties.type"
                :errors="errors"
                v-model="newValue"
              />
            </validation-provider>
          </template>
          <!-- if value is array -->
          <template v-else-if="additionalProperties.type === 'array'">
            <validation-provider
              v-slot="{ errors }"
              rules="required"
              :name="`${schema.title.replace(/ /g, '-')}-value`"
              :vid="`${schema.title.replace(/ /g, '-')}-value-provider`"
              slim
            >
              <array-input
                :schema="additionalProperties"
                :type="additionalProperties.type"
                :errors="errors"
                v-model="newValue"
              />
            </validation-provider>
          </template>
          <!-- if value is simple input -->
          <template v-else>
            <validation-provider
              v-slot="validationOb"
              rules="required"
              :name="`${schema.title.replace(/ /g, '-')}-value`"
              :vid="`${schema.title.replace(/ /g, '-')}-value-provider`"
              slim
            >
              <simple-input
                :schema="additionalProperties"
                :type="additionalProperties.type"
                :validationOb="validationOb"
                v-model="newValue"
              />
            </validation-provider>
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
  </validation-observer>
</template>

<script>
import { model } from "@/mixins/model.js";
import tabs from "@/mixins/tabs.js";
import validation from "@/mixins/validation.js";

import VueOpenapiForm from "@/components/VueOpenapiForm";
import ArrayInput from "@/components/ArrayInput";
import SimpleInput from "@/components/SimpleInput";
import KeyValuePairs from "@/components/KeyValuePairs";

export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Object,
      default: () => ({})
    },
    errors: {
      type: Array,
      default: () => []
    }
  },

  mixins: [model, tabs, validation],

  components: {
    VueOpenapiForm,
    ArrayInput,
    SimpleInput,
    KeyValuePairs
  },

  data() {
    return {
      newData: null,
      updatePass: 0,
      keyValueArray: null,
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

    async addProp() {
      const observerRef = `${this.schema.title.replace(/ /g, "-")}-new`;
      const isValid = await this.$refs[observerRef].validate();

      if (isValid) {
        this.keyValueArray.push({
          key: this.newKey,
          value: this.newValue
        });

        this.newKey = "";
        this.newValue = null;

        this.updatePass += 1;
      }
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
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (oldVal !== null && oldVal !== undefined) {
          this.modelData = this.reconstructObject(newVal);
        }
      }
    }
  }
};
</script>
