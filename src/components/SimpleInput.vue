<template>
  <div class="ac-single-input is-small is-information">
    <template v-if="ui.tag === 'input'">
      <template v-if="ui.type === 'checkbox'">
        <div class="ac-single-switch is-small is-flex pb-10">
          <input
            :id="identifier"
            v-model="modelData"
            type="checkbox"
            name="switchRoundedDefault"
            class="switch ac-switch is-rounded is-primary"
          />
          <label class="switch-label" :for="identifier">{{
            schema.title
          }}</label>
        </div>
      </template>
      <template v-else>
        <label
          :class="[labelShow ? 'show-label' : '', 'ac-label']"
          @click.prevent="focusInput()"
          >{{ schema.title }}</label
        >
        <div v-if="ui.tag === 'input'">
          <textarea
            v-if="isMultilineValue"
            ref="textareaField"
            v-model="modelData"
            class="ac-input"
            style="min-height: 100px"
            :type="ui.type"
            :class="{
              'is-success': validationOb.dirty && validationOb.valid,
              'is-danger': validationOb.dirty && !validationOb.valid,
              'bg-white': modelData,
            }"
            :placeholder="ui.placeholder || ''"
            @change="modelData = $event.target.value"
            @focus="triggerInput()"
            @focusout="unTriggerInput()"
            @paste="onPaste"
          />
          <input
            v-else
            ref="inputField"
            v-model="modelData"
            class="ac-input"
            :type="ui.type"
            :class="{
              'is-success': validationOb.dirty && validationOb.valid,
              'is-danger': validationOb.dirty && !validationOb.valid,
              'bg-white': modelData,
            }"
            :placeholder="ui.placeholder || ''"
            @change="modelData = $event.target.value"
            @focus="triggerInput()"
            @focusout="unTriggerInput()"
            @paste="onPaste"
          />
          <template v-if="validationOb.dirty">
            <span v-if="validationOb.valid" class="button is-information">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
            <span
              v-if="!validationOb.valid"
              class="button is-information is-warning"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </template>
          <p
            v-if="
              validationOb &&
              validationOb.errors &&
              validationOb.errors.length > 0
            "
            class="is-flex gap-4 mt-4 has-text-danger"
          >
            {{ validationOb.errors[0] }}
          </p>
        </div>
      </template>
    </template>

    <template v-if="ui.tag === 'textarea'">
      <textarea
        v-model="modelData"
        class="input"
        :type="ui.type"
        :class="{
          'is-success': validationOb.dirty && validationOb.valid,
          'is-danger': validationOb.dirty && !validationOb.valid,
        }"
        :placeholder="ui.placeholder || ''"
        @change="modelData = $event.target.value"
      />
      <template v-if="validationOb.dirty">
        <button v-if="valid" class="button is-information is-success">
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
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </span>
        </button>
        <button v-if="invalid" class="button is-information is-warning">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </template>
      <span v-if="validationOb.errors.length > 0" class="is-warning">
        <i class="fa fa-warning warning"></i>
        {{ validationOb.errors[0] }}
      </span>
    </template>

    <!-- <div v-if="ui.tag === 'checkbox'" class="field">
      <label>Switch rounded default</label>
      <input
        type="checkbox"
        name="switchRoundedDefault"
        class="switch is-rounded"
        v-model="modelData"
      />
    </div> -->
    <!-- <p class="help is-danger">This username is available</p> -->
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

const isMedium = ref(false);
const labelShow = ref(false);
const isIntegerSetToNull = ref(false);
const isMultilineValue = ref(false);
const modelData = ref(null);

const props = defineProps({
  schema: {
    type: Object,
    default: () => ({}),
  },
  modelValue: {
    type: null,
    default: '',
  },
  validationOb: {
    type: Object,
    default: () => ({}),
  },
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
});
const emit = defineEmits(['update:modelValue']);

const ui = computed(() => {
  return props.schema.ui || { tag: 'input', type: 'text' };
});
const identifier = computed(() => {
  return `id-${props.schema.title.replace(' ', '-')}-${JSON.stringify(
    new Date().valueOf()
  )}`;
});
onMounted(() => {
  initModelData();
  const form = document.querySelector('.vue-openapi-form');
  if (form.classList.contains('is-medium')) {
    isMedium.value = true;
  }
  if (modelData.value) labelShow.value = true;
  const inputField = ref(null)
  inputField?.value?.addEventListener('keydown', this.handleKeyDownEvent);
});

onUnmounted(() => {
  const inputField = ref(null)
  inputField?.value?.removeEventListener(
    'keydown',
    this.handleKeyDownEvent
  );
});

watch(
  modelData,
  (newVal, oldVal) => {
    if (isMultilineValue.value) {
      setTimeout(() => {
        const textareaField = ref(null)
        textareaField.value.focus();
      }, 0);
    }

    if (typeof newVal === 'string' && newVal.includes('\n')) {
      isMultilineValue.value = true;
    }

    if (newVal) labelShow.value = true;
    else labelShow.value = false;

    if (isIntegerSetToNull.value || (oldVal !== null && oldVal !== undefined)) {
      if (isIntegerSetToNull.value && newVal) {
        isIntegerSetToNull.value = false;
      }
      if (props.type === 'number' || props.type === 'integer') {
        // if the newVal string is empty, emit null
        if (newVal === '') {
          isIntegerSetToNull.value = true;
          emit('update:modelValue', null);
        } else emit('update:modelValue', +newVal);
      } else emit('update:modelValue', newVal);
    }
  },
  { immediate: true, deep: true }
);

watch(()=>props.modelValue, (newVal, oldVal) => {
  // do this only once, when the value object is initialized after api call or some delay
  if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) initModelData();
});
// to float up label when input is focused
const triggerInput = () => {
  labelShow.value = true;
};
// to float down label when input is unfocused and value field is empty
const unTriggerInput = () => {
  if (!modelData.value) labelShow.value = false;
};
// to float up label and input field is focused when label is clicked in placeholder mode
const focusInput = () => {
  labelShow.value = true;
  
  const inputField = ref(null);
  inputField?.value?.focus();
};

const onPaste = (evt) => {
  let pasteData = (evt.clipboardData || window.clipboardData).getData('text');

  const finalData = updatedModelDataAfterPasteAndKeyDown(
    evt.target,
    pasteData
  );

  if (pasteData.includes('\n')) {
    isMultilineValue.value = true;

    modelData.value = finalData;
  }
};
const handleKeyDownEvent = (evt) => {
  if (evt.code === 'Enter' && evt.shiftKey) {
    evt.preventDefault();

    const finalData = updatedModelDataAfterPasteAndKeyDown(evt.target);

    isMultilineValue.value = true;

    modelData.value = finalData;
  }
};
const updatedModelDataAfterPasteAndKeyDown = (el, addedData) => {
  const { selectionStart, selectionEnd } = el;

  const prefix = modelData.value.substring(0, selectionStart);
  const suffix = modelData.value.substring(selectionEnd, modelData.value.length);

  addedData = addedData ? addedData : '\n';

  return prefix + addedData + suffix;
};
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
</script>
