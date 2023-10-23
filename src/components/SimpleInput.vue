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

<script>
import { model } from '../mixins/model.js';
import validation from '../mixins/validation.js';
import size from '../mixins/size.js';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SimpleInput',

  mixins: [model, validation, size],

  props: {
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
  },
  emits: ['update:modelValue'],

  data() {
    return {
      labelShow: false,
      isIntegerSetToNull: false,
      isMultilineValue: false,
    };
  },

  computed: {
    ui() {
      return this.schema.ui || { tag: 'input', type: 'text' };
    },
    identifier() {
      return `id-${this.schema.title.replace(' ', '-')}-${JSON.stringify(
        new Date().valueOf()
      )}`;
    },
  },

  watch: {
    modelData: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (this.isMultilineValue) {
          setTimeout(() => {
            this.$refs.textareaField.focus();
          }, 0);
        }

        if (typeof newVal === 'string' && newVal.includes('\n')) {
          this.isMultilineValue = true;
        }

        if (newVal) this.labelShow = true;
        else this.labelShow = false;

        if (
          this.isIntegerSetToNull ||
          (oldVal !== null && oldVal !== undefined)
        ) {
          if (this.isIntegerSetToNull && newVal) {
            this.isIntegerSetToNull = false;
          }
          if (this.type === 'number' || this.type === 'integer') {
            // if the newVal string is empty, emit null
            if (newVal === '') {
              this.isIntegerSetToNull = true;
              this.$emit('update:modelValue', null);
            } else this.$emit('update:modelValue', +newVal);
          } else this.$emit('update:modelValue', newVal);
        }
      },
    },
  },

  mounted() {
    if (this.modelData) this.labelShow = true;
    this.$refs.inputField?.addEventListener('keydown', this.handleKeyDownEvent);
  },
  destroyed() {
    this.$refs.inputField?.removeEventListener(
      'keydown',
      this.handleKeyDownEvent
    );
  },
  methods: {
    // to float up label when input is focused
    triggerInput() {
      this.labelShow = true;
    },
    // to float down label when input is unfocused and value field is empty
    unTriggerInput() {
      if (!this.modelData) this.labelShow = false;
    },
    // to float up label and input field is focused when label is clicked in placeholder mode
    focusInput() {
      this.labelShow = true;
      const inputField = this.$refs.inputField;
      inputField.focus();
    },
    onPaste(evt) {
      let pasteData = (evt.clipboardData || window.clipboardData).getData(
        'text'
      );

      const finalData = this.updatedModelDataAfterPasteAndKeyDown(
        evt.target,
        pasteData
      );

      if (pasteData.includes('\n')) {
        this.isMultilineValue = true;

        this.modelData = finalData;
      }
    },
    handleKeyDownEvent(evt) {
      if (evt.code === 'Enter' && evt.shiftKey) {
        evt.preventDefault();

        const finalData = this.updatedModelDataAfterPasteAndKeyDown(evt.target);

        this.isMultilineValue = true;

        this.modelData = finalData;
      }
    },

    updatedModelDataAfterPasteAndKeyDown(el, addedData) {
      const { selectionStart, selectionEnd } = el;

      const prefix = this.modelData.substring(0, selectionStart);
      const suffix = this.modelData.substring(
        selectionEnd,
        this.modelData.length
      );

      addedData = addedData ? addedData : '\n';

      return prefix + addedData + suffix;
    },
  },
});
</script>
