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
import "codemirror/mode/yaml/yaml.js";
import jsyaml from "js-yaml";

export default {
  name: "yaml-form",
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
        mode: "yaml",
        theme: "default",
        readOnly: false,
        lineNumbers: true
      }
    };
  },

  methods: {
    initValueString() {
      this.valueString = jsyaml.safeDump(this.value, { lineWidth: 2000 }); // jsObject => yaml
    },

    updateModelData() {
      let ans = null;
      try {
        ans = jsyaml.safeLoad(this.valueString, {
          json: true
        }); // yaml => jsObject
      } catch (e) {
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
