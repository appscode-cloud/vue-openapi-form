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
      if (this.value) {
        if (
          (this.type === "object" || this.type === "key-value-pairs") &&
          Object.keys(this.value).length > 0
        )
          this.modelData = this.value;
        else if (this.type === "array" && this.value.length > 0)
          this.modelData = this.value;
        else if (this.type === "boolean" && this.value !== null)
          this.modelData = this.value;
        else if (this.type === "string" || this.type === "number")
          this.modelData = this.value;
        else this.modelData = this.initWithBlank();
      } else this.modelData = this.initWithBlank();
    },
    initWithBlank() {
      if (this.type === "object" || this.type === "key-value-pairs") return {};
      else if (this.type === "array") return [];
      else if (this.type === "boolean") return false;
      else if (this.type === "number") return null;
      else return "";
    },
    clean(ob) {
      if (this.type === "object" || this.type === "key-value-pairs") {
        Object.keys(ob).forEach(key => {
          let stringify = "";
          if (typeof ob[key] !== "string") stringify = JSON.stringify(ob[key]);
          else stringify = ob[key];
          if (
            stringify === undefined ||
            stringify === "null" ||
            stringify === "" ||
            stringify === "{}" ||
            stringify === "[]"
          ) {
            delete ob[key];
          }
        });
      } else if (this.type === "array") {
        let arrayOfDeleteIndexes = ob
          .map((item, idx) => ({ item, idx }))
          .filter(el => {
            const item = el.item;
            let stringify = "";
            if (typeof item !== "string") stringify = JSON.stringify(item);
            else stringify = item;

            if (
              stringify === undefined ||
              stringify === "null" ||
              stringify === "" ||
              stringify === "{}" ||
              stringify === "[]"
            ) {
              return true;
            } else return false;
          })
          .map(item => item.idx);
        arrayOfDeleteIndexes.forEach(idx => ob.splice(idx, 1));
      }
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
        if (oldVal !== null && oldVal !== undefined) {
          // clean the newVal if it's array or object
          this.clean(newVal);

          // prevent number from converting to string
          if (this.type === "number") {
            // if the newVal string is empty, emit null
            if (newVal === "") this.$emit("input", null);
            else this.$emit("input", +newVal);
          } else this.$emit("input", newVal);
        }
      }
    }
  }
};
