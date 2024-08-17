<template>
  <div class="form-left-item">
    <template v-if="items.type === 'object'">
      <v-field
        v-slot="{ field, handleChange }"
        v-model="modelData[index]"
        :rules="ruleObject(true)"
        :name="`${fieldName}/${index + 1}`"
        :label="`${schema.title} ${index + 1}`"
        as=""
      >
        <object-form-wrapper
          :field-name="`${fieldName}/${index + 1}`"
          :model-value="field.value"
          :schema="{
            ...items,
            ...{ title: `${schema.title} ${index + 1}` },
          }"
          :is-self-required="true"
          :type="items.type"
          :errors="errors"
          :reference-model="referenceModel[index] || {}"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else-if="items.type === 'key-value-pairs'">
      <v-field
        v-slot="{ field, handleChange }"
        v-model="modelData[index]"
        :rules="ruleObject(true)"
        :name="`${fieldName}/${index + 1}`"
        :label="`${schema.title} ${index + 1}`"
        as=""
      >
        <key-value-pairs
          :field-name="`${fieldName}/${index + 1}`"
          :model-value="field.value"
          :errors="errors"
          :schema="{
            ...items,
            ...{ title: `${schema.title} ${index + 1}` },
          }"
          :type="items.type"
          :reference-model="referenceModel[index] || {}"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else-if="items.type === 'array'">
      <v-field
        v-slot="{ field, handleChange }"
        v-model="modelData[index]"
        :rules="ruleArray(true)"
        :name="`${fieldName}/${index + 1}`"
        :label="`${schema.title} ${index + 1}`"
        as=""
      >
        <array-input
          :field-name="`${fieldName}/${index + 1}`"
          :model-value="field.value"
          :schema="{
            ...items,
            ...{ title: `${schema.title} ${index + 1}` },
          }"
          :type="items.type"
          :errors="errors"
          :reference-model="referenceModel[index] || []"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
    <template v-else>
      <v-field
        v-slot="{ field, handleChange, errors: fieldErrors, meta }"
        v-model="modelData[index]"
        :rules="ruleString(true)"
        :name="`${fieldName}/${index + 1}`"
        :label="`${schema.title} ${index + 1}`"
        as=""
      >
        <simple-input
          :model-value="field.value"
          :schema="{
            ...items,
            ...{ title: `${schema.title} ${index + 1}` },
          }"
          :type="items.type"
          :required="true"
          :validation-ob="{ errors: fieldErrors, ...meta }"
          :reference-model="referenceModel[index] || ''"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
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
  isSelfRequired: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Object,
    default: () => ({}),
  },
  schema: {
    type: Object,
    default: () => ({}),
  },
  index: {
    type: Number,
    default: 0,
  },
  modelValue: {
    type: null,
    default: () => [],
  },
  fieldName: {
    type: String,
    default: '',
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(['update:modelValue']);
const modelData = ref([]);

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
  { immediate: true, deep: true }
);

watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    // do this only once, when the value object is initialized after api call or some delay
    if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) initModelData();
  }
);

onMounted(() => {
  initModelData();
});

const initModelData = () => {
  if (props.modelValue) {
    if (
      (props.type === 'object' || props.type === 'key-value-pairs') &&
      Object.keys(props.modelValue.value).length > 0
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
</script>
