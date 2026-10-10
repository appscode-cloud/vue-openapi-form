<template>
  <div data-vof-nested :class="[cls.nested, 'flex flex-col gap-2']">
    <div :class="cls.header">
      <h6 :class="cls.title">
        <div :class="[cls.foldIcon, 'cursor-not-allowed']">
          <Minus aria-hidden="true" />
        </div>
        {{ schema.title || 'Array Item Description'
        }}<!-- show errors-->
        <component-errors :errors="calcFormErrors(errors, fieldName)" />
      </h6>
      <tabs v-model="activeTab" />
    </div>
    <!-- existing key values -->
    <template v-if="activeTab === 'form'">
      <div
        v-for="(prop, index) in keyValueArray"
        :key="`${index}-${schema.title}-form`"
      >
        <key-value-pair-items
          v-model="keyValueArray[index]"
          :field-name="fieldName"
          :reference-model="referencekeyValueArray[index] || {}"
          :index="index"
          :schema="schema"
          :additional-properties="additionalProperties"
          :errors="errors"
          @delete-key-value="deleteProp"
        />
      </div>
      <!-- key input -->
      <v-form
        :id="`${schema.title.replace(/ /g, '-')}-new-observer`"
        v-slot="{ validate, errors: formErrors }"
        :key="updatePass"
        as="div"
        :class="cls.keyValueRow"
      >
        <v-field
          :id="`${schema.title.replace(/ /g, '-')}-key-provider`"
          v-slot="{ field, handleChange, errors: fieldErrors, meta }"
          v-model="newKey"
          rules="required"
          name="newKey"
          :label="`${schema.title} new key`"
          as="div"
        >
          <simple-input
            :model-value="field.value"
            :schema="{
              title: 'Key',
              type: 'string',
              ui: { tag: 'input', type: 'text' },
            }"
            :type="`string`"
            :validation-ob="{ errors: fieldErrors, ...meta }"
            :reference-model="''"
            @update:modelValue="handleChange"
          />
        </v-field>

        <!-- new value input -->
        <!-- if value is object -->
        <template v-if="additionalProperties.type === 'object'">
          <v-field
            :id="`${schema.title.replace(/ /g, '-')}-value-provider`"
            v-slot="{ field, handleChange }"
            v-model="newValue"
            rules="required"
            name="newValue"
            :label="`${schema.title} new value`"
            as=""
          >
            <object-form-wrapper
              field-name="newValue"
              :model-value="field.value"
              :is-last-child="true"
              :is-self-required="true"
              :schema="additionalProperties"
              :type="additionalProperties.type"
              :errors="formErrors"
              :reference-model="{}"
              @update:modelValue="handleChange"
            />
          </v-field>
        </template>
        <!-- if value is key value pairs -->
        <template v-else-if="additionalProperties.type === 'key-value-pairs'">
          <v-field
            :id="`${schema.title.replace(/ /g, '-')}-value-provider`"
            v-slot="{ field, handleChange }"
            v-model="newValue"
            rules="required"
            name="newValue"
            :label="`${schema.title} new value`"
            as=""
          >
            <key-value-pairs
              field-name="newValue"
              :model-value="field.value"
              :is-last-child="true"
              :schema="additionalProperties"
              :type="additionalProperties.type"
              :errors="formErrors"
              :reference-model="{}"
              @update:modelValue="handleChange"
            />
          </v-field>
        </template>
        <!-- if value is array -->
        <template v-else-if="additionalProperties.type === 'array'">
          <v-field
            :id="`${schema.title.replace(/ /g, '-')}-value-provider`"
            v-slot="{ field, handleChange }"
            v-model="newValue"
            rules="required"
            name="newValue"
            :label="`${schema.title} new value`"
            as=""
          >
            <array-input
              field-name="newValue"
              :model-value="field.value"
              :is-last-child="true"
              :schema="additionalProperties"
              :type="additionalProperties.type"
              :errors="formErrors"
              :reference-model="[]"
              @update:modelValue="handleChange"
            />
          </v-field>
        </template>
        <!-- if value is simple input -->
        <template v-else>
          <v-field
            :id="`${schema.title.replace(/ /g, '-')}-value-provider`"
            v-slot="{ field, handleChange, errors: fieldErrors, meta }"
            v-model="newValue"
            rules="required"
            name="newValue"
            :label="`${schema.title} new value`"
            as=""
          >
            <simple-input
              :model-value="field.value"
              :schema="additionalProperties"
              :type="additionalProperties.type"
              :validation-ob="{ errors: fieldErrors, ...meta }"
              :reference-model="''"
              @update:modelValue="handleChange"
            />
          </v-field>
        </template>
        <ac-button
          color="white"
          size="small"
          class="mt-1"
          aria-label="Add"
          @click.prevent="addProp(validate)"
        >
          <template #icon><Plus aria-hidden="true" /></template>
        </ac-button>
      </v-form>
    </template>
    <!-- declared in tabs component -->
    <yaml-form
      v-if="activeTab === 'yaml'"
      v-model="modelData"
      :reference-model="referenceModel || {}"
      @code::model-data-updated="updateKeyValueArray"
    />
    <!-- declared in tabs component -->
    <json-form
      v-else-if="activeTab === 'json'"
      v-model="modelData"
      :reference-model="referenceModel || {}"
      @code::model-data-updated="updateKeyValueArray"
    />
  </div>
</template>

<script>
import { model } from '../mixins/model.js';
import tabs from '../mixins/tabs.js';
import validation from '../mixins/validation.js';
import size from '../mixins/size.js';
import { defineAsyncComponent, defineComponent } from 'vue';
import { AcButton } from '@ac-design/design-system';
import { Minus, Plus } from '@lucide/vue';
import * as cls from './classes.js';

export default defineComponent({
  name: 'KeyValuePairs',

  components: {
    AcButton,
    Minus,
    Plus,
    KeyValuePairItems: defineAsyncComponent(() =>
      import('./sub-components/KeyValuePairItems.vue').then(
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
      type: Object,
      default: () => ({}),
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
  setup() {
    return { cls };
  },

  data() {
    return {
      newData: null,
      updatePass: 0,
      keyValueArray: null,
      referencekeyValueArray: null,
      newKey: '',
      newValue: null,
    };
  },

  computed: {
    additionalProperties() {
      return this.schema.additionalProperties || {};
    },
  },

  watch: {
    keyValueArray: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (oldVal !== null && oldVal !== undefined) {
          const stringNewVal = JSON.stringify(newVal);
          this.modelData = this.reconstructObject(JSON.parse(stringNewVal));
        }
      },
    },

    activeTab() {
      // re-calculate keyValueArray
      this.initKeyValueArray();
      this.initReferenceKeyValueArray();
    },

    modelValue: {
      deep: true,
      immediate: true,
      handler(n, o) {
        const newStringifiedObject = JSON.stringify(n);
        const oldStringifiedObject = JSON.stringify(o);
        if (newStringifiedObject !== oldStringifiedObject)
          this.initKeyValueArray();

        this.initReferenceKeyValueArray();
      },
    },
  },

  methods: {
    initKeyValueArray() {
      this.keyValueArray = Object.keys(this.modelValue).map((key) => ({
        key,
        value: this.modelValue[key] || null,
      }));
    },
    initReferenceKeyValueArray() {
      this.referencekeyValueArray = Object.keys(this.referenceModel).map(
        (key) => ({
          key,
          value: this.referenceModel[key] || null,
        })
      );
    },

    updateKeyValueArray(value) {
      this.keyValueArray = Object.keys(value).map((key) => ({
        key,
        value: value[key],
      }));
    },

    reconstructObject(arr) {
      let result = {};
      arr.forEach((item) => {
        result = Object.assign(
          {},
          { ...result },
          {
            [`${item.key}`]: item.value,
          }
        );
      });
      return result;
    },

    async addProp(validate) {
      const { valid } = await validate();

      if (valid) {
        this.keyValueArray.push({
          key: this.newKey,
          value: this.newValue,
        });

        this.newKey = '';
        this.newValue = null;

        this.updatePass += 1;
      }
    },

    deleteProp(index) {
      this.keyValueArray.splice(index, 1);
      this.updatePass += 1;
    },
  },
});
</script>
