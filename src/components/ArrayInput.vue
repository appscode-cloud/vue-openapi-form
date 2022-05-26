<template>
  <div
    :key="updatePass"
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
    <div v-show="activeTab === 'form'">
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
          :model-value="modelData"
          :errors="errors"
          :reference-model="referenceModel || []"
        />
        <!-- for each item add control buttons -->
        <div class="form-right-item">
          <div class="buttons">
            <div class="up-down-buttons" :class="{ 'is-small': !isMedium }">
              <button
                v-tooltip="{
                  content: 'move up',
                  placement: 'top',
                  classes: ['is-button-info'],
                  targetClasses: ['up-down-button'],
                }"
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
                v-tooltip="{
                  content: 'move down',
                  placement: 'bottom',
                  classes: ['is-button-info'],
                  targetClasses: ['up-down-button'],
                }"
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
              class="
                button
                ac-button
                is-small is-square is-outlined-gray is-transparent
                mb-0
              "
              :class="{ 'is-small': !isMedium }"
              @click.prevent="deleteValue(index)"
            >
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- new value input form -->
      <v-form v-slot="{ validate, errors: formErrors }" as="">
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
            class="
              button
              ac-button
              is-small is-square is-outlined-gray is-transparent
            "
            :class="{ 'is-small': !isMedium }"
            @click.prevent="addNewValue(validate)"
          >
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </v-form>
    </div>
    <!-- declared in tabs component -->
    <yaml-form
      v-if="activeTab === 'yaml'"
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
      const temp = this.modelData[index1];
      this.modelData[index1] = this.modelData[index2];
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
