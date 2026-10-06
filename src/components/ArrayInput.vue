<template>
  <div class="vof-nested">
    <div class="vof-nested-header">
      <h6 class="vof-nested-title">
        <div class="vof-collapse-icon is-disabled">
          <Minus aria-hidden="true" />
        </div>
        {{ schema.title || 'Array Item Description' }}
        <component-errors :errors="calcFormErrors(errors, fieldName)" />
      </h6>
      <tabs v-model="activeTab" />
    </div>
    <div v-if="activeTab === 'form'" class="vof-array-body">
      <!-- existing values form -->
      <div
        v-for="(item, index) in modelData"
        :key="`${index}-${schema.title}-form`"
        class="vof-array-item"
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
        <div>
          <div class="vof-array-item-controls">
            <div class="vof-updown">
              <button
                v-tooltip="{
                  content: 'move up',
                  placement: 'top',
                }"
                type="button"
                aria-label="Move up"
                :class="{ 'is-primary': index !== 0 }"
                :disabled="index === 0"
                @click.prevent="swapElems(index - 1, index)"
              >
                <ChevronUp aria-hidden="true" />
              </button>
              <button
                v-tooltip="{
                  content: 'move down',
                  placement: 'bottom',
                }"
                type="button"
                aria-label="Move down"
                :class="{ 'is-primary': index !== modelData.length - 1 }"
                :disabled="index === modelData.length - 1"
                @click.prevent="swapElems(index, index + 1)"
              >
                <ChevronDown aria-hidden="true" />
              </button>
            </div>
            <ac-button
              class="vof-icon-btn"
              color="danger"
              variant="outlined"
              aria-label="Delete"
              @click.prevent="deleteValue(index)"
            >
              <template #icon><Trash2 aria-hidden="true" /></template>
            </ac-button>
          </div>
        </div>
      </div>

      <!-- new value input form -->
      <v-form v-slot="{ validate, errors: formErrors }" :key="updatePass" as="">
        <div class="vof-value-list-save">
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
          <ac-button
            class="vof-icon-btn"
            color="primary"
            variant="outlined"
            aria-label="Add"
            @click.prevent="addNewValue(validate)"
          >
            <template #icon><Plus aria-hidden="true" /></template>
          </ac-button>
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
import { AcButton } from '@mohin4/design-system';
import { ChevronDown, ChevronUp, Minus, Plus, Trash2 } from 'lucide-vue-next';

export default defineComponent({
  name: 'ArrayInput',
  components: {
    AcButton,
    ChevronDown,
    ChevronUp,
    Minus,
    Plus,
    Trash2,
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
