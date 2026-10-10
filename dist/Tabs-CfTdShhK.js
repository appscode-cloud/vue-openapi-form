import { resolveComponent as t, openBlock as l, createElementBlock as i, normalizeClass as s, createVNode as r, defineComponent as m } from "vue";
import { AcSegmentedControl as p } from "@ac-design/design-system";
import { _ as d } from "./entry-CF8Lj2uG.js";
const u = m({
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
      // Text-only: the labels say it all, and YAML and JSON would share one icon
      options: [
        { value: "form", label: "Form" },
        { value: "yaml", label: "YAML" },
        { value: "json", label: "JSON" }
      ]
    };
  },
  methods: {
    onChange(e) {
      this.$emit("update:modelValue", e);
    }
  }
});
function c(e, o, f, b, v, h) {
  const a = t("ac-segmented-control");
  return l(), i("div", {
    class: s([
      "max-w-full transition-[opacity,visibility] duration-300 ease-in-out motion-reduce:transition-none",
      e.showTab ? "visible opacity-100" : "invisible opacity-0 group-hover/header:visible group-hover/header:opacity-100"
    ])
  }, [
    r(a, {
      modelValue: e.activeTab,
      "onUpdate:modelValue": o[0] || (o[0] = (n) => e.activeTab = n),
      size: "small",
      label: "Editor mode",
      options: e.options,
      onChange: e.onChange
    }, null, 8, ["modelValue", "options", "onChange"])
  ], 2);
}
const T = /* @__PURE__ */ d(u, [["render", c]]);
export {
  T as default
};
