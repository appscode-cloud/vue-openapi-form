<template>
  <div class="vof-single">
    <template v-if="ui.tag === 'input'">
      <template v-if="ui.type === 'checkbox'">
        <div class="vof-single-switch">
          <ac-switch v-model="modelData" :label="schema.title" />
        </div>
      </template>
      <template v-else>
        <ac-textarea
          v-if="isMultilineValue"
          ref="textareaField"
          v-model="modelData"
          :label="schema.title"
          :rows="4"
          :error-msg="errorMessage"
          @paste="onPaste"
        />
        <ac-input
          v-else
          ref="inputField"
          v-model="modelData"
          :label="schema.title"
          :type="ui.type"
          :error-msg="errorMessage"
          @paste="onPaste"
          @keydown="handleKeyDownEvent"
        >
          <template v-if="validationOb.dirty" #suffix>
            <span v-if="validationOb.valid" class="vof-status-ok">
              <Check aria-hidden="true" />
            </span>
            <span v-else class="vof-status-bad">
              <X aria-hidden="true" />
            </span>
          </template>
        </ac-input>
      </template>
    </template>

    <template v-if="ui.tag === 'textarea'">
      <ac-textarea
        v-model="modelData"
        :label="schema.title"
        :rows="4"
        :error-msg="errorMessage"
      />
    </template>
  </div>
</template>

<script>
import { model } from '../mixins/model.js';
import validation from '../mixins/validation.js';
import size from '../mixins/size.js';
import { defineComponent } from 'vue';
import { AcInput, AcSwitch, AcTextarea } from '@ac-design/design-system';
import { Check, X } from '@lucide/vue';

export default defineComponent({
  name: 'SimpleInput',

  components: { AcInput, AcSwitch, AcTextarea, Check, X },

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
      isIntegerSetToNull: false,
      isMultilineValue: false,
    };
  },

  computed: {
    ui() {
      return this.schema.ui || { tag: 'input', type: 'text' };
    },
    errorMessage() {
      const errors = this.validationOb && this.validationOb.errors;
      return errors && errors.length > 0 ? errors[0] : '';
    },
  },

  watch: {
    modelData: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (this.isMultilineValue) {
          setTimeout(() => {
            this.$refs.textareaField?.focus();
          }, 0);
        }

        if (typeof newVal === 'string' && newVal.includes('\n')) {
          this.isMultilineValue = true;
        }

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

  methods: {
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
