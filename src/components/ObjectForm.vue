<template>
  <div class="mb-15" :class="{ 'is-hidden': isSelfFolded }">
    <template v-for="(key, idx) in Object.keys(properties)">
      <!-- if the property is another object -->
      <v-field
        v-if="properties[key].type === 'object'"
        :key="key + '-object'"
        v-slot="{ field, handleChange }"
        v-model="modelData[key]"
        :name="`${fieldName}/${key}`"
        :rules="ruleObject(propertiesRequired && isRequired(key))"
        :label="`${properties[key].title}`"
        as=""
      >
        <object-form-wrapper
          :model-value="field.value"
          :field-name="`${fieldName}/${key}`"
          :expand-form="level < 2"
          :is-last-child="idx === Object.keys(properties).length - 1"
          :level="level + 1"
          :type="properties[key].type"
          :is-self-required="propertiesRequired && isRequired(key)"
          :schema="properties[key]"
          :errors="errors"
          :reference-model="referenceModel[key] || {}"
          :showRootTab="false"
          @update:modelValue="handleChange"
        />
      </v-field>
      <!-- if the property is additional property (key-value-pairs) -->
      <v-field
        v-else-if="properties[key].type === 'key-value-pairs'"
        :key="key + '-key-value-pairs'"
        v-slot="{ field, handleChange }"
        v-model="modelData[key]"
        :name="`${fieldName}/${key}`"
        :rules="ruleObject(propertiesRequired && isRequired(key))"
        :label="`${properties[key].title}`"
        as=""
      >
        <key-value-pairs
          :model-value="field.value"
          :field-name="`${fieldName}/${key}`"
          :is-last-child="idx === Object.keys(properties).length - 1"
          :type="properties[key].type"
          :schema="properties[key]"
          :errors="errors"
          :reference-model="referenceModel[key] || {}"
          @update:modelValue="handleChange"
        />
      </v-field>
      <!-- if the property is array -->
      <v-field
        v-else-if="properties[key].type === 'array'"
        :key="key + '-array'"
        v-slot="{ field, handleChange }"
        v-model="modelData[key]"
        :name="`${fieldName}/${key}`"
        :rules="ruleArray(propertiesRequired && isRequired(key))"
        :label="`${properties[key].title}`"
        as=""
      >
        <array-input
          :model-value="field.value"
          :field-name="`${fieldName}/${key}`"
          :is-last-child="idx === Object.keys(properties).length - 1"
          :type="properties[key].type"
          :schema="properties[key]"
          :errors="errors"
          :reference-model="referenceModel[key] || []"
          @update:modelValue="handleChange"
        />
      </v-field>
      <!-- if the property is simple string, number -->
      <v-field
        v-else
        :key="key"
        v-slot="{ field, handleChange, errors: fieldErrors, meta }"
        v-model="modelData[key]"
        :rules="ruleString(propertiesRequired && isRequired(key))"
        :name="`${fieldName}/${key}`"
        :label="`${properties[key].title}`"
        as=""
      >
        <simple-input
          :key="key"
          :model-value="field.value"
          :type="properties[key].type"
          :schema="properties[key]"
          :validation-ob="{ errors: fieldErrors, ...meta }"
          :reference-model="referenceModel[key] || ''"
          @update:modelValue="handleChange"
        />
      </v-field>
    </template>
  </div>
</template>

<script setup>
import { onMounted, watch, ref, defineAsyncComponent } from 'vue';

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
const VField = defineAsyncComponent(() =>
  import('vee-validate').then(({ Field }) => Field)
);

const props = defineProps({
  isSelfRequired: {
    type: Boolean,
    default: false,
  },
  isSelfFolded: {
    type: Boolean,
    default: () => false,
  },
  expandForm: {
    type: Boolean,
    default: () => false,
  },
  type: {
    type: String,
    default: 'string',
  },
  referenceModel: {
    type: null,
    default: () => ({}),
  },
  properties: {
    type: Object,
    default: () => ({}),
  },
  fieldName: {
    type: String,
    default: '',
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
  title: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  required: {
    type: Array,
    default: () => [],
  },
  level: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(['update:modelValue']);

const isFolded = ref(true);
const modelData = ref('');

// for calculating if the property is actually required or not (Based on parent object self requirement)
const propertiesRequired = () => {
  return props.isSelfRequired || Object.keys(modelData.value).length > 0;
};

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
  () => props.expandForm,
  (n) => {
    isFolded.value = !n;
  },
  { immediate: true }
);

onMounted(() => {
  initModelData();
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
const toggleFold = () => {
  isFolded.value = !isFolded.value;
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
const isRequired = (key) => {
  const item = props.required.find((itm) => itm === key);
  return item ? true : false;
};
</script>
