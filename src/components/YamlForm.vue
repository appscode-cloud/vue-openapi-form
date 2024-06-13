<template>
  <div class="ml-30">
    <editor
      :key="theme"
      v-model="editorModel"
      :original-value="originalValueString"
      language="yaml"
      :editor-height="70"
    />
  </div>
</template>

<script setup>
import jsyaml from 'js-yaml';
import {
  computed,
  defineAsyncComponent,
  inject,
  onMounted,
  watch,
  ref,
} from 'vue';

const Editor = defineAsyncComponent(() =>
  import('@appscode/design-system/vue-components/v3/editor/Editor.vue')
);

const providedData = inject('providedData');

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
    type: null,
    default: () => ({}),
  },
});

const emit = defineEmits(['update:modelValue', 'code::model-data-updated']);

const modelData = ref(null);

const originalValueString = computed(() => {
  return jsyaml.safeDump(props.referenceModel, { lineWidth: 2000 }); // json -> yaml
});
const theme = computed(() => {
  return providedData.theme || 'light';
});
const editorModel = computed({
  get() {
    return jsyaml.safeDump(props.modelValue, { lineWidth: 2000 });
  },
  set(n) {
    let ans = null;
    try {
      ans = jsyaml.safeLoad(n, {
        json: true,
      }); // yaml => jsObject
    } catch (e) {
      ans = modelData.value;
    }

    modelData.value = ans;
    emit('code::model-data-updated', ans);
  },
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
      props.type === 'number' ||
      props.type === 'string' ||
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
</script>
