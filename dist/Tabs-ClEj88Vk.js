import { resolveComponent as l, openBlock as s, createElementBlock as m, normalizeClass as r, createVNode as i, defineComponent as d } from "vue";
import { AcSegmentedControl as p } from "@mohin4/design-system";
import { FileText as c, Code as a } from "@lucide/vue";
import { _ as u } from "./entry-Cq-y0fYi.js";
const f = d({
  name: "Tabs",
  components: { AcSegmentedControl: p },
  props: {
    modelValue: {
      type: String,
      default: "form"
    },
    showTab: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      activeTab: "form",
      options: [
        { value: "form", label: "Form", icon: c },
        { value: "yaml", label: "YAML", icon: a },
        { value: "json", label: "JSON", icon: a }
      ]
    };
  },
  methods: {
    onChange(e) {
      this.$emit("update:modelValue", e);
    }
  }
});
function b(e, o, v, C, g, T) {
  const n = l("ac-segmented-control");
  return s(), m("div", {
    class: r(["vof-tabs", { "is-visible": e.showTab }])
  }, [
    i(n, {
      modelValue: e.activeTab,
      "onUpdate:modelValue": o[0] || (o[0] = (t) => e.activeTab = t),
      size: "small",
      label: "Editor mode",
      options: e.options,
      onChange: e.onChange
    }, null, 8, ["modelValue", "options", "onChange"])
  ], 2);
}
const y = /* @__PURE__ */ u(f, [["render", b]]);
export {
  y as default
};
