import { _ as y, m as v, v as b } from "./entry-CiSu1Krq.js";
import { f as c } from "./fold-D-kLFRsg.js";
import { t as V } from "./tabs-DnKM5ngn.js";
import { resolveComponent as a, openBlock as r, createElementBlock as n, normalizeClass as h, createElementVNode as d, withModifiers as T, createBlock as s, resolveDynamicComponent as j, createCommentVNode as t, createTextVNode as D, toDisplayString as k, createVNode as N, withDirectives as w, vShow as B, defineComponent as C } from "vue";
import { Plus as F, Minus as q } from "lucide-vue-next";
const M = C({
  name: "ObjectFormWrapper",
  components: { Minus: q, Plus: F },
  mixins: [v, c, V, b],
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
  }
}), $ = { class: "vof-nested-header" }, O = ["disabled"];
function R(e, o, g, S, U, E) {
  const m = a("component-errors"), i = a("tabs"), f = a("object-form"), p = a("yaml-form"), u = a("json-form");
  return r(), n("form", {
    class: h(["vof-nested", {
      "vof-collapsed": e.isFolded
    }])
  }, [
    d("div", $, [
      d("h6", {
        class: "vof-nested-title",
        onClick: o[0] || (o[0] = T((l) => e.toggleFold(), ["prevent"]))
      }, [
        e.isRoot ? t("", !0) : (r(), n("div", {
          key: 0,
          class: "vof-collapse-icon",
          disabled: e.activeTab !== "form"
        }, [
          (r(), s(j(e.isFolded ? "Plus" : "Minus"), { "aria-hidden": "true" }))
        ], 8, O)),
        D(" " + k(e.schema.title || "Array Item Description") + " ", 1),
        N(m, {
          errors: e.calcFormErrors(e.errors, e.fieldName)
        }, null, 8, ["errors"])
      ]),
      e.onlyJson ? t("", !0) : (r(), s(i, {
        key: 0,
        modelValue: e.activeTab,
        "onUpdate:modelValue": o[1] || (o[1] = (l) => e.activeTab = l),
        showTab: e.showRootTab
      }, null, 8, ["modelValue", "showTab"]))
    ]),
    w((r(), s(f, {
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
    e.activeTab === "yaml" ? (r(), s(p, {
      key: 0,
      modelValue: e.modelData,
      "onUpdate:modelValue": o[3] || (o[3] = (l) => e.modelData = l),
      "reference-model": e.referenceModel || {}
    }, null, 8, ["modelValue", "reference-model"])) : e.activeTab === "json" ? (r(), s(u, {
      key: 1,
      modelValue: e.modelData,
      "onUpdate:modelValue": o[4] || (o[4] = (l) => e.modelData = l),
      "reference-model": e.referenceModel || {}
    }, null, 8, ["modelValue", "reference-model"])) : t("", !0)
  ], 2);
}
const I = /* @__PURE__ */ y(M, [["render", R]]);
export {
  I as default
};
