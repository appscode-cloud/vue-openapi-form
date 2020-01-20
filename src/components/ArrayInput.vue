<template>
  <validation-observer
    tag="div"
    :ref="`${schema.title.replace(/ /g, '-')}-observer`"
    :vid="`${schema.title.replace(/ /g, '-')}-observer`"
    v-slot="{ errors: observerErrors }"
    class="vue-schema-form-array"
    :class="{ 'stop-line': isLastChild }"
    :key="updatePass"
  >
    <div class="ac-level">
      <div class="ac-level-left">
        <div class="ac-form-title">
          <h4>
            {{ schema.title || "Array Item Description" }}
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
      <!-- existing values form -->
      <div
        class="form-container"
        v-for="(item, index) in modelData"
        :key="index"
      >
        <div class="form-left-item">
          <template v-if="items.type === 'object'">
            <validation-provider
              v-slot="{ errors }"
              :rules="ruleObject(true)"
              :name="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
              :vid="`${schema.title.replace(/ /g, '-')}-${index + 1}-provider`"
              slim
            >
              <vue-openapi-form
                :schema="{
                  ...items,
                  ...{ title: `${schema.title} ${index + 1}` }
                }"
                :type="items.type"
                :errors="errors"
                v-model="modelData[index]"
              />
            </validation-provider>
          </template>
          <template v-else-if="items.type === 'key-value-pairs'">
            <validation-provider
              v-slot="{ errors }"
              :rules="ruleObject(true)"
              :name="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
              :vid="`${schema.title.replace(/ /g, '-')}-${index + 1}-provider`"
              slim
            >
              <key-value-pairs
                :errors="errors"
                :schema="{
                  ...items,
                  ...{ title: `${schema.title} ${index + 1}` }
                }"
                :type="items.type"
                v-model="modelData[index]"
              />
            </validation-provider>
          </template>
          <template v-else-if="items.type === 'array'">
            <validation-provider
              v-slot="{ errors }"
              :rules="ruleArray(true)"
              :name="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
              :vid="`${schema.title.replace(/ /g, '-')}-${index + 1}-provider`"
              slim
            >
              <array-input
                :schema="{
                  ...items,
                  ...{ title: `${schema.title} ${index + 1}` }
                }"
                :type="items.type"
                :errors="errors"
                v-model="modelData[index]"
              />
            </validation-provider>
          </template>
          <template v-else>
            <validation-provider
              v-slot="validationOb"
              :rules="ruleString(true)"
              :name="`${schema.title.replace(/ /g, '-')}-${index + 1}`"
              :vid="`${schema.title.replace(/ /g, '-')}-${index + 1}-provider`"
              slim
            >
              <simple-input
                :schema="{
                  ...items,
                  ...{ title: `${schema.title} ${index + 1}` }
                }"
                :type="items.type"
                :required="true"
                :validationOb="validationOb"
                v-model="modelData[index]"
              />
            </validation-provider>
          </template>
        </div>
        <div class="form-right-item">
          <div class="buttons">
            <div class="group-buttons">
              <button
                class="up-down-button"
                :class="{ 'is-info': index !== 0 }"
                :disabled="index === 0"
                @click.prevent="swapElems(index - 1, index)"
              >
                <span class="icon is-small">
                  <i class="fa fa-angle-up"></i>
                </span>
              </button>
              <button
                class="up-down-button"
                :class="{ 'is-info': index !== modelData.length - 1 }"
                :disabled="index === modelData.length - 1"
                @click.prevent="swapElems(index, index + 1)"
              >
                <span class="icon is-small">
                  <i class="fa fa-angle-down"></i>
                </span>
              </button>
            </div>
            <button
              class="button is-danger ac-list-action-button"
              @click.prevent="deleteValue(index)"
            >
              <span class="icon is-small">
                <i class="fa fa-trash"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- new value input form -->
      <validation-observer
        :ref="`${schema.title.replace(/ /g, '-')}-new`"
        :vid="`${schema.title.replace(/ /g, '-')}-new-observer`"
        :disabled="true"
        slim
      >
        <div class="ac-level-from-button">
          <div class="ac-level-10">
            <template v-if="items.type === 'object'">
              <validation-provider
                v-slot="{ errors }"
                :rules="ruleObject(true)"
                :name="`${schema.title.replace(/ /g, '-')}-new-value`"
                :vid="`${schema.title.replace(/ /g, '-')}-new-value-provider`"
                slim
              >
                <vue-openapi-form
                  :is-last-child="true"
                  :schema="{
                    ...items,
                    ...{ title: `${schema.title} new value` }
                  }"
                  :type="items.type"
                  :errors="errors"
                  v-model="newData"
                />
              </validation-provider>
            </template>
            <template v-else-if="items.type === 'key-value-pairs'">
              <validation-provider
                v-slot="{ errors }"
                :rules="ruleObject(true)"
                :name="`${schema.title.replace(/ /g, '-')}-new-value`"
                :vid="`${schema.title.replace(/ /g, '-')}-new-value-provider`"
                slim
              >
                <key-value-pairs
                  :is-last-child="true"
                  :schema="{
                    ...items,
                    ...{ title: `${schema.title} new value` }
                  }"
                  :errors="errors"
                  :type="items.type"
                  v-model="newData"
                />
              </validation-provider>
            </template>
            <template v-else-if="items.type === 'array'">
              <validation-provider
                v-slot="{ errors }"
                :rules="ruleArray(true)"
                :name="`${schema.title.replace(/ /g, '-')}-new-value`"
                :vid="`${schema.title.replace(/ /g, '-')}-new-value-provider`"
                slim
              >
                <array-input
                  :is-last-child="true"
                  :schema="{
                    ...items,
                    ...{ title: `${schema.title} new value` }
                  }"
                  :errors="errors"
                  :type="items.type"
                  v-model="newData"
                />
              </validation-provider>
            </template>
            <template v-else>
              <validation-provider
                v-slot="validationOb"
                :rules="ruleString(true)"
                :name="`${schema.title.replace(/ /g, '-')}-new-value`"
                :vid="`${schema.title.replace(/ /g, '-')}-new-value-provider`"
                slim
              >
                <simple-input
                  :schema="{
                    ...items,
                    ...{ title: `${schema.title} new value` }
                  }"
                  :required="true"
                  :type="items.type"
                  :validationOb="validationOb"
                  v-model="newData"
                />
              </validation-provider>
            </template>
          </div>
          <div class="ac-level-2">
            <div class="buttons">
              <button
                class="button is-success ac-list-action-button"
                @click.prevent="addNewValue()"
              >
                <span class="icon is-small">
                  <i class="fa fa-plus"></i>
                </span>
              </button>
            </div>
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
import { model } from "../mixins/model.js";
import tabs from "../mixins/tabs.js";
import validation from "../mixins/validation.js";

export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: null,
      default: () => []
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
      updatePass: 0
    };
  },

  computed: {
    items() {
      return this.schema.items || {};
    },

    ruleOb() {
      let ans = {};
      if (this.required)
        ans = Object.assign({}, { ...ans }, { requiredArray: true });
      return ans;
    }
  },

  methods: {
    swapElems(index1, index2) {
      const temp = this.modelData[index1];
      this.$set(this.modelData, index1, this.modelData[index2]);
      this.$set(this.modelData, index2, temp);
      this.updatePass += 1;
    },

    async addNewValue() {
      const observerRef = `${this.schema.title.replace(/ /g, "-")}-new`;
      // console.log(observerRef);
      const isValid = await this.$refs[observerRef].validate();

      if (isValid) {
        this.modelData.push(this.newData);
        this.newData = null;
        this.updatePass += 1;
      }
    },

    deleteValue(index) {
      this.$delete(this.modelData, index);
      this.updatePass += 1;
    }
  }
};
</script>
