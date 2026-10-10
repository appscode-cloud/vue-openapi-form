import { _ as i, m as r } from "./entry-CF8Lj2uG.js";
import t from "js-yaml";
import { resolveComponent as m, openBlock as a, createElementBlock as s, createBlock as p, defineComponent as c, defineAsyncComponent as u } from "vue";
const h = c({
  name: "YamlForm",
  components: {
    AcCodeEditor: u(
      () => import("@ac-design/design-system/editor").then((e) => e.AcCodeEditor)
    )
  },
  mixins: [r],
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
      return t.safeDump(this.referenceModel, { lineWidth: 2e3 });
    },
    theme() {
      return this.providedData.theme || "light";
    },
    editorModel: {
      get() {
        return t.safeDump(this.modelValue, { lineWidth: 2e3 });
      },
      set(e) {
        let o = null;
        try {
          o = t.safeLoad(e, {
            json: !0
          });
        } catch {
          o = this.modelData;
        }
        this.modelData = o, this.$emit("code::model-data-updated", o);
      }
    }
  }
}), f = { class: "ml-8" };
function g(e, o, d, _, V, y) {
  const l = m("ac-code-editor");
  return a(), s("div", f, [
    (a(), p(l, {
      key: e.theme,
      modelValue: e.editorModel,
      "onUpdate:modelValue": o[0] || (o[0] = (n) => e.editorModel = n),
      original: e.originalValueString,
      language: "yaml",
      height: "70vh",
      label: "YAML"
    }, null, 8, ["modelValue", "original"]))
  ]);
}
const M = /* @__PURE__ */ i(h, [["render", g]]);
export {
  M as default
};
