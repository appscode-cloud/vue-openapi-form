export const model = {
  props: {
    type: {
      type: String,
      default: "string"
    }
  },

  data() {
    return {
      modelData: null
    };
  },

  methods: {
    initModelData() {
      this.modelData = this.value || this.initWithBlank();
    },
    initWithBlank() {
      if (this.type === "object") return {};
      else if (this.type === "array") return [];
      else return "";
    }
  },

  created() {
    this.initModelData();
  },

  watch: {
    model() {
      this.initModelData();
    },

    modelData(newVal) {
      this.$emit("input", newVal);
    }
  }
};
