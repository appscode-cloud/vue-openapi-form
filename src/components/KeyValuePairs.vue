<template>
  <validation-observer
    tag="div"
    :ref="`${schema.title.replace(/ /g, '-')}-observer`"
    :vid="`${schema.title.replace(/ /g, '-')}-observer`"
    v-slot="{ errors: observerErrors }"
    class="vue-schema-form-key-value-pairs"
    :class="{ 'stop-line': isLastChild }"
    :key="updatePass"
  >
    <div class="ac-level">
      <div class="ac-level-left">
        <div class="ac-form-title">
          <h4>
            {{ schema.title || "Array Item Description"
            }}<!-- show errors-->
            <component-errors
              :errors="[...errors, ...calcObserverError(observerErrors)]"
            />
          </h4>
        </div>
      </div>
      <div class="ac-level-right">
        <tabs v-model="formShow" />
      </div>
    </div>
    <template v-if="formShow">
      <!-- existing key values -->
      <div class="ac-key-value-pairs-wrapper">
        <div
          class="ac-key-value-pairs"
          v-for="(prop, index) in keyValueArray"
          :key="index"
        >
          <div class="ac-is-3">
            <validation-provider
              :vid="
                `${schema.title.replace(/ /g, '-')}-key-${index + 1}-provider`
              "
              rules="required"
              :name="`${schema.title.replace(/ /g, '-')}-key-${index + 1}`"
              v-slot="validationOb"
              tag="div"
              class="control has-icons-right"
            >
              <!-- <input
                class="input"
                type="text"
                :class="{
                  'is-success': validated && valid,
                  'is-danger': validated && invalid
                }"
                v-model="prop.key"
                @focus="triggerInput()"
                @focusout="unTriggerInput()"
              /> -->

              <simple-input
                :schema="{
                  title: 'Key',
                  type: 'string',
                  ui: { tag: 'input', type: 'text' }
                }"
                :type="`string`"
                :validationOb="validationOb"
                v-model="prop.key"
              />
            </validation-provider>
          </div>
          <div class="ac-is-8">
            <template v-if="additionalProperties.type === 'object'">
              <validation-provider
                v-slot="{ errors }"
                :rules="ruleObject(true)"
                :name="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
                :vid="
                  `${schema.title.replace(/ /g, '-')}-value-${index +
                    1}-provider`
                "
                slim
              >
                <object-form-wrapper
                  :schema="additionalProperties"
                  :type="additionalProperties.type"
                  :errors="errors"
                  v-model="prop.value"
                />
              </validation-provider>
            </template>
            <template
              v-else-if="additionalProperties.type === 'key-value-pairs'"
            >
              <validation-provider
                v-slot="{ errors }"
                :rules="ruleObject(true)"
                :name="`${schema.title.replace(/ /g, '-')}-value-${index + 1}`"
                :vid="
                  `${schema.title.replace(/ /g, '-')}-value-${index +
                    1}-provider`
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
                  `${schema.title.replace(/ /g, '-')}-value-${index +
                    1}-provider`
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
                  `${schema.title.replace(/ /g, '-')}-value-${index +
                    1}-provider`
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

          <div class="ac-is-1">
            <div class="buttons">
              <button
                class="button is-danger ac-key-value-action-button"
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
          class="ac-key-value-pairs"
        >
          <div class="ac-is-3">
            <validation-provider
              :vid="`${schema.title.replace(/ /g, '-')}-key-provider`"
              rules="required"
              :name="`${schema.title.replace(/ /g, '-')}-key`"
              v-slot="validationOb"
              tag="div"
              class="control has-icons-right"
            >
              <!-- <input
                  class="input"
                  type="text"
                  :class="{
                    'is-success': validated && valid,
                    'is-danger': validated && invalid
                  }"
                  v-model="newKey"
                /> -->

              <simple-input
                :schema="{
                  title: 'Key',
                  type: 'string',
                  ui: { tag: 'input', type: 'text' }
                }"
                :type="`string`"
                :validationOb="validationOb"
                v-model="newKey"
              />
            </validation-provider>
          </div>

          <!-- new value input -->

          <div class="ac-is-8">
            <!-- if value is object -->
            <template v-if="additionalProperties.type === 'object'">
              <validation-provider
                v-slot="{ errors }"
                rules="required"
                :name="`${schema.title.replace(/ /g, '-')}-value`"
                :vid="`${schema.title.replace(/ /g, '-')}-value-provider`"
                slim
              >
                <object-form-wrapper
                  :is-last-child="true"
                  :schema="additionalProperties"
                  :type="additionalProperties.type"
                  :errors="errors"
                  v-model="newValue"
                />
              </validation-provider>
            </template>
            <!-- if value is key value pairs -->
            <template
              v-else-if="additionalProperties.type === 'key-value-pairs'"
            >
              <validation-provider
                v-slot="{ errors }"
                rules="required"
                :name="`${schema.title.replace(/ /g, '-')}-value`"
                :vid="`${schema.title.replace(/ /g, '-')}-value-provider`"
                slim
              >
                <key-value-pairs
                  :is-last-child="true"
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
                  :is-last-child="true"
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
          <div class="ac-is-1">
            <div class="buttons">
              <button
                class="button is-success ac-key-value-action-button"
                @click.prevent="addProp()"
              >
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </validation-observer>
      </div>
    </template>
    <template v-else>
      <!-- declared in tabs component -->
      <json-form v-model="modelData" />
    </template>
  </validation-observer>
</template>

<script>
import { model } from "../mixins/model.js";
import tabs from "../mixins/tabs.js";
import validation from "../mixins/validation.js";

export default {
  name: "key-value-pairs",
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
    },
    isLastChild: {
      type: Boolean,
      default: false
    }
  },

  mixins: [model, tabs, validation],

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
