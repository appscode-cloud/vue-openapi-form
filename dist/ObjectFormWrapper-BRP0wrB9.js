import { _ as b, m as v, v as c } from "./entry-CF8Lj2uG.js";
import { f as V } from "./fold-D-kLFRsg.js";
import { t as T, c as h } from "./classes-BayuRM9v.js";
import { resolveComponent as s, openBlock as r, createElementBlock as d, normalizeClass as n, createElementVNode as m, withModifiers as j, createBlock as a, resolveDynamicComponent as D, createCommentVNode as t, createTextVNode as k, toDisplayString as F, createVNode as N, withDirectives as w, vShow as B, defineComponent as C } from "vue";
import { Plus as q, Minus as M } from "@lucide/vue";
const $ = C({
  name: "ObjectFormWrapper",
  components: { Minus: M, Plus: q },
  mixins: [v, V, T, c],
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    fieldName: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    isRoot: {
      type: Boolean,
      default: !1
    },
    errors: {
      type: Object,
      default: () => ({})
    },
    isLastChild: {
      type: Boolean,
      default: !1
    },
    onlyJson: {
      type: Boolean,
      default: !1
    },
    level: {
      type: Number,
      default: 1
    },
    showRootTab: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    return { cls: h };
  }
}), O = ["disabled"];
function R(e, o, g, S, U, E) {
  const i = s("component-errors"), f = s("tabs"), p = s("object-form"), u = s("yaml-form"), y = s("json-form");
  return r(), d("form", {
    "data-vof-nested": "",
    class: n([e.cls.nested, e.isFolded && e.cls.nestedFolded])
  }, [
    m("div", {
      class: n(e.cls.header)
    }, [
      m("h6", {
        class: n([e.cls.title, "cursor-pointer"]),
        onClick: o[0] || (o[0] = j((l) => e.toggleFold(), ["prevent"]))
      }, [
        e.isRoot ? t("", !0) : (r(), d("div", {
          key: 0,
          class: n([e.cls.foldIcon, "cursor-pointer"]),
          disabled: e.activeTab !== "form"
        }, [
          (r(), a(D(e.isFolded ? "Plus" : "Minus"), { "aria-hidden": "true" }))
        ], 10, O)),
        k(" " + F(e.schema.title || "Array Item Description") + " ", 1),
        N(i, {
          errors: e.calcFormErrors(e.errors, e.fieldName)
        }, null, 8, ["errors"])
      ], 2),
      e.onlyJson ? t("", !0) : (r(), a(f, {
        key: 0,
        modelValue: e.activeTab,
        "onUpdate:modelValue": o[1] || (o[1] = (l) => e.activeTab = l),
        showTab: e.showRootTab
      }, null, 8, ["modelValue", "showTab"]))
    ], 2),
    w((r(), a(p, {
      key: `${e.schema.title}-form`,
      modelValue: e.modelData,
      "onUpdate:modelValue": o[2] || (o[2] = (l) => e.modelData = l),
      "field-name": e.fieldName,
      properties: e.schema.properties,
      title: e.schema.title,
      required: e.schema.required,
      "is-self-required": e.isSelfRequired,
      type: e.schema.type,
      level: e.level,
      "is-self-folded": e.isFolded,
      "reference-model": e.referenceModel || {},
      errors: e.errors
    }, null, 8, ["modelValue", "field-name", "properties", "title", "required", "is-self-required", "type", "level", "is-self-folded", "reference-model", "errors"])), [
      [B, !e.onlyJson && e.activeTab === "form"]
    ]),
    e.activeTab === "yaml" ? (r(), a(u, {
      key: 0,
      modelValue: e.modelData,
      "onUpdate:modelValue": o[3] || (o[3] = (l) => e.modelData = l),
      "reference-model": e.referenceModel || {}
    }, null, 8, ["modelValue", "reference-model"])) : e.activeTab === "json" ? (r(), a(y, {
      key: 1,
      modelValue: e.modelData,
      "onUpdate:modelValue": o[4] || (o[4] = (l) => e.modelData = l),
      "reference-model": e.referenceModel || {}
    }, null, 8, ["modelValue", "reference-model"])) : t("", !0)
  ], 2);
}
const A = /* @__PURE__ */ b($, [["render", R]]);
export {
  A as default
};
