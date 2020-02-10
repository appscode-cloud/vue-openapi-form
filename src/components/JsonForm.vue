<template>
  <div>
    <codemirror
      @blur="updateModelData()"
      v-model="valueString"
      :options="cmOptions"
    />
  </div>
</template>

<script>
import { model } from "../mixins/model.js";
import { codemirror } from "vue-codemirror";
import "codemirror/mode/javascript/javascript.js";

export default {
  name: "json-form",
  props: {
    value: {
      type: null,
      default: () => ({})
    }
  },

  mixins: [model],

  components: {
    codemirror
  },

  data() {
    return {
      valueString: "",

      cmOptions: {
        mode: "application/json",
        theme: "default",
        readOnly: false,
        lineNumbers: true
      }
    };
  },

  methods: {
    initValueString() {
      this.valueString = JSON.stringify(this.value, null, 2);
    },

    updateModelData() {
      let ans = null;
      try {
        ans = JSON.parse(this.valueString);
      } catch {
        ans = this.modelData;
      }

      this.modelData = ans;
      this.$emit("code::model-data-updated", ans);
    }
  },

  created() {
    this.initValueString();
  },

  watch: {
    value() {
      this.initValueString();
    }
  }
};
</script>
