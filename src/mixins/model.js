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
      if (this.validationOb) this.validationOb.reset();
      if (
        (this.type === "object" || this.type === "key-value-pairs") &&
        Object.keys(this.value).length > 0
      )
        this.modelData = this.value;
      else if (this.type === "array" && this.value.length > 0)
        this.modelData = this.value;
      else if (this.type === "boolean" && this.value !== null)
        this.modelData = this.value;
      else if (this.type === "string" && this.value)
        this.modelData = this.value;
      else this.modelData = this.initWithBlank();
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
    modelData: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        console.log({ newVal, oldVal });
        if (oldVal !== null && oldVal !== undefined) {
          this.$emit("input", newVal);
        }
      }
    }
  }
};
