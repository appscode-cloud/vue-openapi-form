<template>
  <div
    as="div"
    class="ac-nested-elements vue-schema-form-array array-input"
    :class="{ 'stop-line': isLastChild }"
  >
    <div class="nested-header mb-5">
      <h6 class="is-flex is-semi-normal">
        <div class="collaps-icon is-disabled">
          <i class="fa fa-minus"></i>
        </div>
        {{ schema.title || 'Array Item Description' }}
        <component-errors :errors="calcFormErrors(errors, fieldName)" />
      </h6>
      <tabs v-model="activeTab" />
    </div>
    <div
      v-if="activeTab === 'form'"
      class="is-flex gap-16 is-flex-direction-column"
    >
      <!-- existing values form -->
      <div
        v-for="(item, index) in modelData"
        :key="`${index}-${schema.title}-form`"
        class="nested-body"
      >
        <!-- for each item generate form -->
        <array-input-items
          :field-name="fieldName"
          :items="items"
          :schema="schema"
          :index="index"
          :model-value="JSON.parse(JSON.stringify(modelData))"
          :errors="errors"
          :reference-model="referenceModel || []"
        />
        <!-- for each item add control buttons -->
        <div class="form-right-item">
          <div class="buttons" style="gap: 16px">
            <div
              class="buttons up-down-buttons"
              :class="{ 'is-small': !isMedium }"
            >
              <button
                v-tooltip="{
                  content: 'move up',
                  placement: 'top',
                  classes: ['is-primary'],
                  targetClasses: ['up-down-button'],
                }"
                class="up-down-button"
                :class="{ 'is-primary': index !== 0 }"
                :disabled="index === 0"
                @click.prevent="swapElems(index - 1, index)"
              >
                <span class="icon is-small">
                  <i class="fa fa-angle-up"></i>
                </span>
              </button>
              <button
                v-tooltip="{
                  content: 'move down',
                  placement: 'bottom',
                  classes: ['is-primary'],
                  targetClasses: ['up-down-button'],
                }"
                class="up-down-button"
                :class="{ 'is-primary': index !== modelData.length - 1 }"
                :disabled="index === modelData.length - 1"
                @click.prevent="swapElems(index, index + 1)"
              >
                <span class="icon is-small">
                  <i class="fa fa-angle-down"></i>
                </span>
              </button>
            </div>
            <button
              class="button ac-button is-medium is-danger is-outlined mb-0"
              @click.prevent="deleteValue(index)"
            >
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- new value input form -->
      <v-form v-slot="{ validate, errors: formErrors }" :key="updatePass" as="">
        <div class="value-list-save">
          <template v-if="items.type === 'object'">
            <v-field
              v-slot="{ field, handleChange }"
              v-model="newData"
              :rules="ruleObject(true)"
              name="newItem"
              :label="`${schema.title} new value`"
              as=""
            >
              <object-form-wrapper
                field-name="newItem"
                :model-value="field.value"
                :is-last-child="true"
                :expand-form="true"
                :is-self-required="true"
                :schema="{
                  ...items,
                  ...{ title: `${schema.title} new value` },
                }"
                :type="items.type"
                :errors="formErrors"
                :reference-model="{}"
                @update:modelValue="handleChange"
              />
            </v-field>
          </template>
          <template v-else-if="items.type === 'key-value-pairs'">
            <v-field
              v-slot="{ field, handleChange }"
              v-model="newData"
              :rules="ruleObject(true)"
              name="newItem"
              :label="`${schema.title} new value`"
              as=""
            >
              <key-value-pairs
                field-name="newItem"
                :model-value="field.value"
                :is-last-child="true"
                :schema="{
                  ...items,
                  ...{ title: `${schema.title} new value` },
                }"
                :errors="formErrors"
                :type="items.type"
                :reference-model="{}"
                @update:modelValue="handleChange"
              />
            </v-field>
          </template>
          <template v-else-if="items.type === 'array'">
            <v-field
              v-slot="{ field, handleChange }"
              v-model="newData"
              :rules="ruleArray(true)"
              name="newItem"
              :label="`${schema.title} new value`"
              as=""
            >
              <array-input
                field-name="newItem"
                :model-value="field.value"
                :is-last-child="true"
                :schema="{
                  ...items,
                  ...{ title: `${schema.title} new value` },
                }"
                :errors="formErrors"
                :type="items.type"
                :reference-model="[]"
                @update:modelValue="handleChange"
              />
            </v-field>
          </template>
          <template v-else>
            <v-field
              v-slot="{ field, handleChange, errors: fieldErrors, meta }"
              v-model="newData"
              :rules="ruleString(true)"
              name="newItem"
              :label="`${schema.title} new value`"
              as=""
            >
              <simple-input
                :model-value="field.value"
                :schema="{
                  ...items,
                  ...{ title: `${schema.title} new value` },
                }"
                :required="true"
                :type="items.type"
                :validation-ob="{ errors: fieldErrors, ...meta }"
                :reference-model="''"
                @update:modelValue="handleChange"
              />
            </v-field>
          </template>
          <button
            class="button ac-button is-medium is-primary is-outlined"
            @click.prevent="addNewValue(validate)"
          >
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </button>
        </div>
      </v-form>
    </div>
    <!-- declared in tabs component -->
    <yaml-form
      v-else-if="activeTab === 'yaml'"
      v-model="modelData"
      :reference-model="referenceModel || []"
    />
    <!-- declared in tabs component -->
    <json-form
      v-else-if="activeTab === 'json'"
      v-model="modelData"
      :reference-model="referenceModel || []"
    />
  </div>
</template>

<script>
import { model } from '../mixins/model.js';
import tabs from '../mixins/tabs.js';
import validation from '../mixins/validation.js';
import size from '../mixins/size.js';
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'ArrayInput',
  components: {
    ArrayInputItems: defineAsyncComponent(() =>
      import('./sub-components/ArrayInputItems.vue').then(
        (module) => module.default
      )
    ),
  },

  mixins: [model, tabs, validation, size],
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    fieldName: {
      type: String,
      default: '',
    },
    modelValue: {
      type: null,
      default: () => [],
    },
    errors: {
      type: Object,
      default: () => ({}),
    },
    isLastChild: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      newData: null,
      updatePass: 0,
    };
  },

  computed: {
    items() {
      return this.schema.items || {};
    },
  },

  methods: {
    swapElems(index1, index2) {
      const temp = JSON.parse(JSON.stringify(this.modelData[index1]));
      this.modelData[index1] = JSON.parse(JSON.stringify(this.modelData[index2]));
      this.modelData[index2] = temp;
      this.updatePass += 1;
    },

    async addNewValue(validate) {
      const { valid } = await validate();
      if (valid) {
        this.modelData.push(this.newData);
        this.newData = null;
        this.updatePass += 1;
      }
    },

    deleteValue(index) {
      this.modelData.splice(index, 1);
      this.updatePass += 1;
    },
  },
});
</script>
