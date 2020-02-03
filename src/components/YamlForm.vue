<template>
  <div>
    <codemirror v-model="valueString" :options="cmOptions" />
  </div>
</template>

<script>
import { model } from "../mixins/model.js";
import fold from "../mixins/fold.js";
import { codemirror } from "vue-codemirror";
import "codemirror/mode/yaml/yaml.js";
import jsyaml from "js-yaml";

export default {
  name: "json-form",
  props: {
    value: {
      type: null,
      default: () => ({})
    }
  },

  mixins: [model, fold],

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

    updateModelData(data) {
      let ans = null;
      try {
        ans = jsyaml.safeLoad(data, { json: true }); // yaml => jsObject
      } catch {
        ans = this.modelData;
      }

      return ans;
    }
  },

  created() {
    this.initValueString();
  },

  watch: {
    value() {
      this.initValueString();
    },

    valueString(n) {
      this.modelData = this.updateModelData(n);
    }
  }
};
</script>
