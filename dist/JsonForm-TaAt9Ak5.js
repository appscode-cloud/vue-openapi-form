import { _ as r, m as a } from "./entry-CF8Lj2uG.js";
import { resolveComponent as i, openBlock as t, createElementBlock as m, createBlock as s, defineComponent as c, defineAsyncComponent as p } from "vue";
const u = c({
  name: "YamlForm",
  components: {
    AcCodeEditor: p(
      () => import("@ac-design/design-system/editor").then((e) => e.AcCodeEditor)
    )
  },
  mixins: [a],
  inject: ["providedData"],
  props: {
    modelValue: {
      type: null,
      default: () => ({})
    }
  },
  emits: ["code::model-data-updated"],
  computed: {
    originalValueString() {
      return JSON.stringify(this.referenceModel, null, 2);
    },
    theme() {
      return this.providedData.theme || "light";
    },
    editorModel: {
      get() {
        return JSON.stringify(this.modelValue, null, 2);
      },
      set(e) {
        let o = null;
        try {
          o = JSON.parse(e);
        } catch {
          o = this.modelData;
        }
        this.modelData = o, this.$emit("code::model-data-updated", o);
      }
    }
  }
}), h = { class: "ml-8" };
function f(e, o, n, g, _, V) {
  const l = i("ac-code-editor");
  return t(), m("div", h, [
    (t(), s(l, {
      key: e.theme,
      modelValue: e.editorModel,
      "onUpdate:modelValue": o[0] || (o[0] = (d) => e.editorModel = d),
      original: e.originalValueString,
      language: "json",
      height: "70vh",
      label: "JSON"
    }, null, 8, ["modelValue", "original"]))
  ]);
}
const v = /* @__PURE__ */ r(u, [["render", f]]);
export {
  v as default
};
