export default {
  props: {
    isSelfFolded: {
      type: Boolean,
      default: () => false
    }
  },

  data() {
    return {
      isFolded: true
    };
  },

  methods: {
    toggleFold() {
      this.isFolded = !this.isFolded;
    }
  }
};
