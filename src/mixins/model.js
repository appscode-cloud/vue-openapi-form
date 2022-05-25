import { defineAsyncComponent, defineComponent } from 'vue';

export const model = defineComponent({
  components: {
    ObjectFormWrapper: defineAsyncComponent(() =>
      import('@/components/ObjectFormWrapper.vue').then(
        (module) => module.default
      )
    ),
    ObjectForm: defineAsyncComponent(() =>
      import('@/components/ObjectForm.vue').then((module) => module.default)
    ),
    ArrayInput: defineAsyncComponent(() =>
      import('@/components/ArrayInput.vue').then((module) => module.default)
    ),
    KeyValuePairs: defineAsyncComponent(() =>
      import('@/components/KeyValuePairs.vue').then((module) => module.default)
    ),
    SimpleInput: defineAsyncComponent(() =>
      import('@/components/SimpleInput.vue').then((module) => module.default)
    ),
  },

  props: {
    type: {
      type: String,
      default: 'string',
    },
    referenceModel: {
      type: null,
      default: () => ({}),
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      modelData: null,
    };
  },

  watch: {
    modelData: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (oldVal !== null && oldVal !== undefined) {
          // clean the newVal if it's array or object if the cleanObject gloabl data is true
          if (this.cleanObject) this.clean(newVal);

          // prevent number from converting to string
          if (this.type === 'number' || this.type === 'integer') {
            // if the newVal string is empty, emit null
            if (newVal === '') this.$emit('update:modelValue', null);
            else this.$emit('update:modelValue', +newVal);
          } else this.$emit('update:modelValue', newVal);
        }
      },
    },
    modelValue: {
      deep: true,
      handler(newVal, oldVal) {
        // do this only once, when the value object is initialized after api call or some delay
        if (JSON.stringify(oldVal) !== JSON.stringify(newVal))
          this.initModelData();
      },
    },
  },

  created() {
    this.initModelData();
  },

  methods: {
    initModelData() {
      if (this.modelValue) {
        if (
          (this.type === 'object' || this.type === 'key-value-pairs') &&
          Object.keys(this.modelValue).length > 0
        )
          this.modelData = this.modelValue;
        else if (this.type === 'array' && this.modelValue.length > 0)
          this.modelData = this.modelValue;
        else if (this.type === 'boolean' && this.modelValue !== null)
          this.modelData = this.modelValue;
        else if (
          this.type === 'string' ||
          this.type === 'number' ||
          this.type === 'integer'
        )
          this.modelData = this.modelValue;
        else this.modelData = this.initWithBlank();
      } else this.modelData = this.initWithBlank();
    },
    initWithBlank() {
      if (this.type === 'object' || this.type === 'key-value-pairs') return {};
      else if (this.type === 'array') return [];
      else if (this.type === 'boolean') return false;
      else if (this.type === 'number' || this.type === 'integer') return null;
      else return '';
    },
    clean(ob) {
      if (this.type === 'object' || this.type === 'key-value-pairs') {
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
      } else if (this.type === 'array') {
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
    },
  },
});
