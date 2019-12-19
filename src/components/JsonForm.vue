<template>
  <div>
    <codemirror v-model="valueString" :options="cmOptions" />
  </div>
</template>

<script>
import { model } from "@appscode/vue-openapi-form/src/mixins/model.js";
import fold from "@appscode/vue-openapi-form/src/mixins/fold.js";
import { codemirror } from "vue-codemirror";
import "codemirror/mode/javascript/javascript.js";

export default {
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

    updateModelData(data) {
      let ans = null;
      try {
        ans = JSON.parse(data);
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
