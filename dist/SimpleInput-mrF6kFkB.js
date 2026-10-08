import { _ as b, m as V, v as k } from "./entry-Do6WmZZA.js";
import { s as v } from "./size-BtoaE7vX.js";
import { resolveComponent as s, openBlock as a, createElementBlock as l, Fragment as f, createVNode as n, createBlock as r, createSlots as M, withCtx as w, createCommentVNode as h, defineComponent as P } from "vue";
import { AcTextarea as S, AcSwitch as A, AcInput as I } from "@ac-design/design-system";
import { X as K, Check as $ } from "@lucide/vue";
const C = P({
  name: "SimpleInput",
  components: { AcInput: I, AcSwitch: A, AcTextarea: S, Check: $, X: K },
  mixins: [V, k, v],
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: null,
      default: ""
    },
    validationOb: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isIntegerSetToNull: !1,
      isMultilineValue: !1
    };
  },
  computed: {
    ui() {
      return this.schema.ui || { tag: "input", type: "text" };
    },
    errorMessage() {
      const e = this.validationOb && this.validationOb.errors;
      return e && e.length > 0 ? e[0] : "";
    }
  },
  watch: {
    modelData: {
      immediate: !0,
      deep: !0,
      handler(e, t) {
        this.isMultilineValue && setTimeout(() => {
          this.$refs.textareaField?.focus();
        }, 0), typeof e == "string" && e.includes(`
`) && (this.isMultilineValue = !0), (this.isIntegerSetToNull || t != null) && (this.isIntegerSetToNull && e && (this.isIntegerSetToNull = !1), this.type === "number" || this.type === "integer" ? e === "" ? (this.isIntegerSetToNull = !0, this.$emit("update:modelValue", null)) : this.$emit("update:modelValue", +e) : this.$emit("update:modelValue", e));
      }
    }
  },
  methods: {
    onPaste(e) {
      let t = (e.clipboardData || window.clipboardData).getData(
        "text"
      );
      const i = this.updatedModelDataAfterPasteAndKeyDown(
        e.target,
        t
      );
      t.includes(`
`) && (this.isMultilineValue = !0, this.modelData = i);
    },
    handleKeyDownEvent(e) {
      if (e.code === "Enter" && e.shiftKey) {
        e.preventDefault();
        const t = this.updatedModelDataAfterPasteAndKeyDown(e.target);
        this.isMultilineValue = !0, this.modelData = t;
      }
    },
    updatedModelDataAfterPasteAndKeyDown(e, t) {
      const { selectionStart: i, selectionEnd: u } = e, d = this.modelData.substring(0, i), m = this.modelData.substring(
        u,
        this.modelData.length
      );
      return t = t || `
`, d + t + m;
    }
  }
}), N = { class: "vof-single" }, O = {
  key: 0,
  class: "vof-single-switch"
}, T = {
  key: 0,
  class: "vof-status-ok"
}, E = {
  key: 1,
  class: "vof-status-bad"
};
function F(e, t, i, u, d, m) {
  const c = s("ac-switch"), p = s("ac-textarea"), g = s("Check"), y = s("X"), D = s("ac-input");
  return a(), l("div", N, [
    e.ui.tag === "input" ? (a(), l(f, { key: 0 }, [
      e.ui.type === "checkbox" ? (a(), l("div", O, [
        n(c, {
          modelValue: e.modelData,
          "onUpdate:modelValue": t[0] || (t[0] = (o) => e.modelData = o),
          label: e.schema.title
        }, null, 8, ["modelValue", "label"])
      ])) : (a(), l(f, { key: 1 }, [
        e.isMultilineValue ? (a(), r(p, {
          key: 0,
          ref: "textareaField",
          modelValue: e.modelData,
          "onUpdate:modelValue": t[1] || (t[1] = (o) => e.modelData = o),
          label: e.schema.title,
          rows: 4,
          "error-msg": e.errorMessage,
          onPaste: e.onPaste
        }, null, 8, ["modelValue", "label", "error-msg", "onPaste"])) : (a(), r(D, {
          key: 1,
          ref: "inputField",
          modelValue: e.modelData,
          "onUpdate:modelValue": t[2] || (t[2] = (o) => e.modelData = o),
          label: e.schema.title,
          type: e.ui.type,
          "error-msg": e.errorMessage,
          onPaste: e.onPaste,
          onKeydown: e.handleKeyDownEvent
        }, M({ _: 2 }, [
          e.validationOb.dirty ? {
            name: "suffix",
            fn: w(() => [
              e.validationOb.valid ? (a(), l("span", T, [
                n(g, { "aria-hidden": "true" })
              ])) : (a(), l("span", E, [
                n(y, { "aria-hidden": "true" })
              ]))
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["modelValue", "label", "type", "error-msg", "onPaste", "onKeydown"]))
      ], 64))
    ], 64)) : h("", !0),
    e.ui.tag === "textarea" ? (a(), r(p, {
      key: 1,
      modelValue: e.modelData,
      "onUpdate:modelValue": t[3] || (t[3] = (o) => e.modelData = o),
      label: e.schema.title,
      rows: 4,
      "error-msg": e.errorMessage
    }, null, 8, ["modelValue", "label", "error-msg"])) : h("", !0)
  ]);
}
const q = /* @__PURE__ */ b(C, [["render", F]]);
export {
  q as default
};
