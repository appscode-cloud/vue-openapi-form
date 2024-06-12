<template>
  <div class="key-value-save">
    <v-field
      :id="`${schema.title.replace(/ /g, '-')}-key-${index + 1}-provider`"
      v-slot="{ componentField, errors: fieldErrors, meta }"
      v-model="modelData.key"
      rules="required"
      :name="`${fieldName}/key/${index + 1}`"
      :label="`${schema.title} key ${index + 1}`"
      as="div"
    >
      <simple-input
        v-bind="componentField"
        :schema="{
          title: 'Key',
          type: 'string',
          ui: { tag: 'input', type: 'text' },
        }"
        :type="`string`"
        :validation-ob="{ errors: fieldErrors, ...meta }"
        :reference-model="referenceModel.key || ''"
      />
    </v-field>
    <template v-if="additionalProperties.type === 'object'">
      <v-field
        :id="`${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`"
        v-slot="{ field, handleChange }"
        v-model="modelData.value"
        :rules="ruleObject(true)"
        :name="`${fieldName}/value/${index + 1}`"
        :label="`${schema.title} value ${index + 1}`"
        as=""
      >
        <object-form-wrapper
          :field-name="`${fieldName}/value/${index + 1}`"
          :model-value="field.value"
          :schema="additionalProperties"
          :is-self-required="true"
          :type="additionalProperties.type"
          :errors="errors"
          :reference-model="referenceModel.value || {}"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else-if="additionalProperties.type === 'key-value-pairs'">
      <v-field
        :id="`${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`"
        v-slot="{ field, handleChange }"
        v-model="modelData.value"
        :rules="ruleObject(true)"
        :name="`${fieldName}/value/${index + 1}`"
        :label="`${schema.title} value ${index + 1}`"
        as=""
      >
        <key-value-pairs
          :field-name="`${fieldName}/value/${index + 1}`"
          :model-value="field.value"
          :schema="additionalProperties"
          :type="additionalProperties.type"
          :errors="errors"
          :reference-model="referenceModel.value || {}"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else-if="additionalProperties.type === 'array'">
      <v-field
        :id="`${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`"
        v-slot="{ field, handleChange }"
        v-model="modelData.value"
        :rules="ruleArray(true)"
        :name="`${fieldName}/value/${index + 1}`"
        :label="`${schema.title} value ${index + 1}`"
        as=""
      >
        <array-input
          :field-name="`${fieldName}/value/${index + 1}`"
          :model-value="field.value"
          :schema="additionalProperties"
          :type="additionalProperties.type"
          :errors="errors"
          :reference-model="referenceModel.value || []"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else>
      <v-field
        :id="`${schema.title.replace(/ /g, '-')}-value-${index + 1}-provider`"
        v-slot="{ field, handleChange, errors: fieldErrors, meta }"
        v-model="modelData.value"
        :rules="ruleString(true)"
        :name="`${fieldName}/value/${index + 1}`"
        :label="`${schema.title} value ${index + 1}`"
        as=""
      >
        <simple-input
          :model-value="field.value"
          :schema="additionalProperties"
          :type="additionalProperties.type"
          :validation-ob="{ errors: fieldErrors, ...meta }"
          :reference-model="referenceModel.value || ''"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <button
      class="button ac-button is-medium is-square is-danger is-outlined"
      @click.prevent="deleteProp(index)"
    >
      <span class="icon is-small">
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
      </span>
    </button>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref, watch } from 'vue';
const VField = defineAsyncComponent(() =>
  import('vee-validate').then(({ Field }) => Field)
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
  type: {
    type: String,
    default: 'string',
  },
  referenceModel: {
    type: null,
    default: () => ({}),
  },
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  isSelfRequired: {
    type: Boolean,
    default: false,
  },
  fieldName: {
    type: String,
    default: '',
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
  index: { type: Number, default: 0 },
  schema: {
    type: Object,
    default: () => ({}),
  },
  additionalProperties: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(['delete-key-value', 'update:modelValue']);

const modelData = ref({key:'',val:''});

watch(
  modelData,
  (newVal, oldVal) => {
    if (oldVal !== null && oldVal !== undefined) {
      // clean the newVal if it's array or object if the cleanObject global data is true
      // if (cleanObject) clean(newVal);

      // prevent number from converting to string
      if (props.type === 'number' || props.type === 'integer') {
        // if the newVal string is empty, emit null
        if (newVal === '') emit('update:modelValue', null);
        else emit('update:modelValue', +newVal);
      } else emit('update:modelValue', newVal);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    // do this only once, when the value object is initialized after api call or some delay
    if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) initModelData();
  },
  {
    deep: true,
  }
);
onMounted(() => {
  initModelData();
});

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
const deleteProp = (index) => {
  emit('delete-key-value', index);
};
</script>
