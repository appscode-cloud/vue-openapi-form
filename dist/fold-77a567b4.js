var fold = {
  props: {
    isSelfFolded: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      isFolded: true
    };
  },
  methods: {
    toggleFold: function toggleFold() {
      this.isFolded = !this.isFolded;
    }
  }
};

export { fold as f };
