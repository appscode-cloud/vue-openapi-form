<template>
  <form
    class="ac-nested-elements object-form-wrapper"
    :class="{
      'stop-line': isLastChild,
      'is-collapsed': isFolded,
    }"
  >
    <div class="nested-header mb-5">
      <h6 class="is-flex is-semi-normal" @click.prevent="toggleFold()">
        <div
          v-if="!isRoot"
          class="collaps-icon"
          :disabled="activeTab !== 'form'"
        >
          <i
            :class="['fa', isFolded ? 'fa-plus' : 'fa-minus']"
            aria-hidden="true"
          ></i>
        </div>
        {{ schema.title || 'Array Item Description' }}
        <!-- show errors-->
        <component-errors :errors="calcFormErrors(errors, fieldName)" />
      </h6>
      <tabs v-if="!onlyJson" v-model="activeTab" :showTab="showRootTab" />
    </div>
    <!-- form for all the object's properties -->
    <object-form
      v-show="!onlyJson && activeTab === 'form'"
      :key="`${schema.title}-form`"
      v-model="modelData"
      :field-name="fieldName"
      :properties="schema.properties"
      :title="schema.title"
      :required="schema.required"
      :is-self-required="isSelfRequired"
      :type="schema.type"
      :level="level"
      :is-self-folded="isFolded"
      :reference-model="referenceModel || {}"
      :errors="errors"
    />
    <!-- declared in tabs component -->
    <yaml-form
      v-if="activeTab === 'yaml'"
      v-model="modelData"
      :reference-model="referenceModel || {}"
    />
    <json-form
      v-else-if="activeTab === 'json'"
      v-model="modelData"
      :reference-model="referenceModel || {}"
    />
  </form>
</template>

<script setup>
import { defineAsyncComponent, watch, onMounted, ref } from 'vue';

const ComponentErrors = defineAsyncComponent(() =>
  import('./ComponentErrors.vue').then((module) => module.default)
);
const ObjectForm = defineAsyncComponent(() =>
  import('@/components/ObjectForm.vue').then((module) => module.default)
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
  isSelfFolded: {
    type: Boolean,
    default: () => false,
  },
  expandForm: {
    type: Boolean,
    default: () => false,
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
  isRoot: {
    type: Boolean,
    default: false,
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
  isLastChild: {
    type: Boolean,
    default: false,
  },
  onlyJson: {
    type: Boolean,
    default: false,
  },
  level: {
    type: Number,
    default: 1,
  },
  showRootTab: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const activeTab = ref('form');
const isFolded = ref(true);
const modelData = ref(null);

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
</script>
