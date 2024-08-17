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
              class="button ac-button is-medium is-square is-danger is-outlined mb-0"
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
            class="button ac-button is-medium is-square is-primary is-outlined"
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

<script setup>
import { computed, defineAsyncComponent, onMounted, watch, ref } from 'vue';

const ArrayInputItems = defineAsyncComponent(() =>
  import('./sub-components/ArrayInputItems.vue').then(
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
const VForm = defineAsyncComponent(() =>
  import('vee-validate').then(({ Form }) => Form)
);
const VField = defineAsyncComponent(() =>
  import('vee-validate').then(({ Field }) => Field)
);
const ComponentErrors = defineAsyncComponent(() =>
  import('../components/ComponentErrors.vue').then((module) => module.default)
);
const Tabs = defineAsyncComponent(() =>
  import('../components/Tabs.vue').then((module) => module.default)
);
const JsonForm = defineAsyncComponent(() =>
  import('../components/JsonForm.vue').then((module) => module.default)
);
const YamlForm = defineAsyncComponent(() =>
  import('../components/YamlForm.vue').then((module) => module.default)
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
});

const emit = defineEmits(['update:modelValue']);

const activeTab = ref('form');
const newData = ref(null);
const updatePass = ref(0);
const modelData = ref(null);
const isMedium = ref(false);

const items = computed(() => {
  return props.schema.items || {};
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

watch(()=>props.modelValue, (newVal, oldVal) => {
  // do this only once, when the value object is initialized after api call or some delay
  if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) initModelData();
});
onMounted(() => {
  initModelData();
  const form = document.querySelector('.vue-openapi-form');
  if (form.classList.contains('is-medium')) {
    isMedium.value = true;
  }
});

const ruleString = (required) => {
  let ans = '';
  if (required) ans += 'required';
  return ans;
};

const ruleArray = (required) => {
  let ans = {};
  if (required) ans.required = true;
  return ans;
};

const ruleObject = (required) => {
  let ans = {};
  if (required) ans.requiredOb = true;
  return ans;
};

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
const swapElems = (index1, index2) => {
  const temp = JSON.parse(JSON.stringify(modelData.value[index1]));
  modelData.value[index1] = JSON.parse(JSON.stringify(modelData.value[index2]));
  modelData.value[index2] = temp;
  updatePass.value += 1;
};

const addNewValue = async (validate) => {
  const { valid } = await validate();
  if (valid) {
    modelData.value.push(newData.value);
    newData.value = null;
    updatePass.value += 1;
  }
};

const deleteValue = (index) => {
  modelData.value.splice(index, 1);
  updatePass.value += 1;
};
</script>
