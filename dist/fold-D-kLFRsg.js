import { defineComponent as o } from "vue";
const t = o({
  props: {
    isSelfFolded: {
      type: Boolean,
      default: () => !1
    },
    expandForm: {
      type: Boolean,
      default: () => !1
    }
  },
  data() {
    return {
      isFolded: !0
    };
  },
  watch: {
    expandForm: {
      immediate: !0,
      handler(e) {
        this.isFolded = !e;
      }
    }
  },
  methods: {
    toggleFold() {
      this.isFolded = !this.isFolded;
    }
  }
});
export {
  t as f
};
