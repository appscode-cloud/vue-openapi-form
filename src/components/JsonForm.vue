<template>
  <div>
    <codemirror v-model="valueString" :options="cmOptions" />
  </div>
</template>

<script>
import { model } from "@/mixins/model.js";
import fold from "@/mixins/fold.js";
import { codemirror } from "vue-codemirror";
import "codemirror/mode/javascript/javascript.js";

export default {
  props: {
    value: {
      type: Object,
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
      this.modelData = JSON.parse(n);
    }
  }
};
</script>
