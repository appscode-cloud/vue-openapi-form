import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isSelfFolded: {
      type: Boolean,
      default: () => false,
    },
    expandForm: {
      type: Boolean,
      default: () => false,
    },
  },

  data() {
    return {
      isFolded: true,
    };
  },

  watch: {
    expandForm: {
      immediate: true,
      handler(n) {
        this.isFolded = !n;
      },
    },
  },

  methods: {
    toggleFold() {
      this.isFolded = !this.isFolded;
    },
  },
});
