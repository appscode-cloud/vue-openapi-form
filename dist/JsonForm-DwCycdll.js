import { _ as r, m as i } from "./entry-CiSu1Krq.js";
import { resolveComponent as a, openBlock as t, createElementBlock as s, createBlock as m, defineComponent as c, defineAsyncComponent as p } from "vue";
const u = c({
  name: "YamlForm",
  components: {
    AcCodeEditor: p(
      () => import("@mohin4/design-system/editor").then((e) => e.AcCodeEditor)
    )
  },
  mixins: [i],
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
}), h = { class: "vof-editor" };
function f(e, o, n, g, _, V) {
  const d = a("ac-code-editor");
  return t(), s("div", h, [
    (t(), m(d, {
      key: e.theme,
      modelValue: e.editorModel,
      "onUpdate:modelValue": o[0] || (o[0] = (l) => e.editorModel = l),
      original: e.originalValueString,
      language: "json",
      height: "70vh",
      label: "JSON"
    }, null, 8, ["modelValue", "original"]))
  ]);
}
const S = /* @__PURE__ */ r(u, [["render", f]]);
export {
  S as default
};
