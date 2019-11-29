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
      if (this.type === "object" || this.type === "key-value-pairs") return {};
      else if (this.type === "array") return [];
      else if (this.type === "boolean") return false;
      else return "";
    }
  },

  created() {
    this.initModelData();
  },

  watch: {
    modelData(newVal) {
      this.$emit("input", newVal);
    }
  }
};
