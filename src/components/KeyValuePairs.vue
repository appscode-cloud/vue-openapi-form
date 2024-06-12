<template>
  <div
    class="ac-nested-elements key-value-pairs is-flex is-flex-direction-column gap-8"
    :class="{ 'stop-line': isLastChild }"
  >
    <div class="nested-header mb-5">
      <h6 class="is-flex is-semi-normal">
        <div class="collaps-icon is-disabled">
          <i aria-hidden="true" class="fa fa-minus"></i>
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
        class="key-value-save"
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
        <button
          class="button ac-button is-medium is-square is-primary is-outlined"
          @click.prevent="addProp(validate)"
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
        </button>
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

<script setup>
import { defineAsyncComponent, onMounted, watch, ref, computed } from 'vue';

const Tabs = defineAsyncComponent(() =>
  import('./Tabs.vue').then((module) => module.default)
);
const JsonForm = defineAsyncComponent(() =>
  import('./JsonForm.vue').then((module) => module.default)
);
const YamlForm = defineAsyncComponent(() =>
  import('./YamlForm.vue').then((module) => module.default)
);
const VForm = defineAsyncComponent(() =>
  import('vee-validate').then(({ Form }) => Form)
);
const VField = defineAsyncComponent(() =>
  import('vee-validate').then(({ Field }) => Field)
);
const ComponentErrors = defineAsyncComponent(() =>
  import('./ComponentErrors.vue').then((module) => module.default)
);
const KeyValuePairItems = defineAsyncComponent(() =>
  import('./sub-components/KeyValuePairItems.vue').then(
    (module) => module.default
  )
);
const ObjectFormWrapper = defineAsyncComponent(() =>
  import('@/components/ObjectFormWrapper.vue').then((module) => module.default)
);
const ArrayInput = defineAsyncComponent(() =>
  import('@/components/ArrayInput.vue').then((module) => module.default)
);
const KeyValuePairs = defineAsyncComponent(() =>
  import('@/components/KeyValuePairs.vue').then((module) => module.default)
);
const SimpleInput = defineAsyncComponent(() =>
  import('@/components/SimpleInput.vue').then((module) => module.default)
);

const props = defineProps({
  isSelfRequired: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'string',
  },
  referenceModel: {
    type: null,
    default: () => ({}),
  },
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
});
const emit = defineEmits(['update:modelValue']);

const activeTab = ref('form');
const isMedium = ref(false);
const updatePass = ref(0);
const keyValueArray = ref(null);
const referencekeyValueArray = ref(null);
const newKey = ref('');
const modelData = ref(null);
const newValue = ref(null);

const additionalProperties = computed(() => {
  return props.schema.additionalProperties || {};
});

watch(
  modelData,
  (newVal, oldVal) => {
    if (oldVal !== null && oldVal !== undefined) {
      // clean the newVal if it's array or object if the cleanObject global data is true
      // if (this.cleanObject) this.clean(newVal);

      // prevent number from converting to string
      if (props.type === 'number' || props.type === 'integer') {
        // if the newVal string is empty, emit null
        if (newVal === '') emit('update:modelValue', null);
        else emit('update:modelValue', +newVal);
      } else emit('update:modelValue', newVal);
    }
  },
  { immediate: true, deep: true }
);

watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    // do this only once, when the value object is initialized after api call or some delay
    if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) initModelData();
  },
  { deep: true }
);

watch(
  keyValueArray,
  (newVal, oldVal) => {
    if (oldVal !== null && oldVal !== undefined) {
      const stringNewVal = JSON.stringify(newVal);
      modelData.value = reconstructObject(JSON.parse(stringNewVal));
    }
  },
  { immediate: true, deep: true }
);

watch(activeTab, () => {
  // re-calculate keyValueArray
  initKeyValueArray();
  initReferenceKeyValueArray();
});

watch(
  () => props.modelValue,
  (n, o) => {
    const newStringifiedObject = JSON.stringify(n);
    const oldStringifiedObject = JSON.stringify(o);
    if (newStringifiedObject !== oldStringifiedObject) initKeyValueArray();

    initReferenceKeyValueArray();
  }
);

onMounted(() => {
  initModelData();
  const form = document.querySelector('.vue-openapi-form');
  if (form.classList.contains('is-medium')) {
    isMedium.value = true;
  }
});

const calcFormErrors = (errors, prefix) => {
  return Object.keys(errors)
    .filter((key) => key.startsWith(prefix))
    .map((key) => {
      const path = key.replace(/^(\$\/)/, '');
      const prefixedPath = prefix.replace(/^(\$\/)/, '');

      const relativePath = path.replace(prefixedPath + '/', '');

      const pfx = relativePath.includes('/') ? `${relativePath}: ` : '';
      return `${pfx}${errors[key]}`;
    });
};
const initModelData = () => {
  if (props.modelValue) {
    if (
      (props.type === 'object' || props.type === 'key-value-pairs') &&
      Object.keys(props.modelValue).length > 0
    )
      modelData.value = JSON.parse(JSON.stringify(props.modelValue));
    else if (props.type === 'array' && props.modelValue.length > 0)
      modelData.value = JSON.parse(JSON.stringify(props.modelValue));
    else if (props.type === 'boolean' && props.modelValue !== null)
      modelData.value = props.modelValue;
    else if (
      props.type === 'string' ||
      props.type === 'number' ||
      props.type === 'integer'
    )
      modelData.value = props.modelValue;
    else modelData.value = initWithBlank();
  } else modelData.value = initWithBlank();
};

const initWithBlank = () => {
  if (props.type === 'object' || props.type === 'key-value-pairs') return {};
  else if (props.type === 'array') return [];
  else if (props.type === 'boolean') return false;
  else if (props.type === 'number' || props.type === 'integer') return null;
  else return '';
};

const clean = (ob) => {
  if (props.type === 'object' || props.type === 'key-value-pairs') {
    Object.keys(ob).forEach((key) => {
      let stringify = '';
      if (typeof ob[key] !== 'string') stringify = JSON.stringify(ob[key]);
      else stringify = ob[key];
      if (
        stringify === undefined ||
        stringify === 'null' ||
        stringify === '' ||
        stringify === '{}' ||
        stringify === '[]'
      ) {
        delete ob[key];
      }
    });
  } else if (props.type === 'array') {
    let arrayOfDeleteIndexes = ob
      .map((item, idx) => ({ item, idx }))
      .filter((el) => {
        const item = el.item;
        let stringify = '';
        if (typeof item !== 'string') stringify = JSON.stringify(item);
        else stringify = item;

        if (
          stringify === undefined ||
          stringify === 'null' ||
          stringify === '' ||
          stringify === '{}' ||
          stringify === '[]'
        ) {
          return true;
        } else return false;
      })
      .map((item) => item.idx);
    arrayOfDeleteIndexes.forEach((idx) => ob.splice(idx, 1));
  }
};

const initKeyValueArray = () => {
  keyValueArray.value = Object.keys(props.modelValue).map((key) => ({
    key,
    value: props.modelValue[key] || null,
  }));
};

const initReferenceKeyValueArray = () => {
  referencekeyValueArray.value = Object.keys(props.referenceModel).map(
    (key) => ({
      key,
      value: props.referenceModel[key] || null,
    })
  );
};

const updateKeyValueArray = (value) => {
  keyValueArray.value = Object.keys(value).map((key) => ({
    key,
    value: value[key],
  }));
};

const reconstructObject = (arr) => {
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
};

const addProp = async (validate) => {
  const { valid } = await validate();

  if (valid) {
    keyValueArray.value.push({
      key: newKey.value,
      value: newValue.value,
    });

    newKey.value = '';
    newValue.value = null;

    updatePass.value += 1;
  }
};

const deleteProp = (index) => {
  keyValueArray.value.splice(index, 1);
  updatePass.value += 1;
};
</script>
