import { _ as v, m as V, v as b } from "./entry-CF8Lj2uG.js";
import { resolveComponent as o, openBlock as r, createElementBlock as h, createBlock as n, withCtx as i, createVNode as s, defineComponent as U } from "vue";
const k = U({
  name: "ArrayInputItems",
  mixins: [V, b],
  props: {
    items: {
      type: Object,
      default: () => ({})
    },
    schema: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    },
    modelValue: {
      type: null,
      default: () => []
    },
    fieldName: {
      type: String,
      default: ""
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  }
}), N = { class: "min-w-0 flex-1" };
function j(e, a, D, O, w, I) {
  const u = o("object-form-wrapper"), m = o("v-field"), t = o("key-value-pairs"), p = o("array-input"), f = o("simple-input");
  return r(), h("div", N, [
    e.items.type === "object" ? (r(), n(m, {
      key: 0,
      modelValue: e.modelData[e.index],
      "onUpdate:modelValue": a[0] || (a[0] = (l) => e.modelData[e.index] = l),
      rules: e.ruleObject(!0),
      name: `${e.fieldName}/${e.index + 1}`,
      label: `${e.schema.title} ${e.index + 1}`,
      as: ""
    }, {
      default: i(({ field: l, handleChange: d }) => [
        s(u, {
          "field-name": `${e.fieldName}/${e.index + 1}`,
          "model-value": l.value,
          schema: {
            ...e.items,
            title: `${e.schema.title} ${e.index + 1}`
          },
          "is-self-required": !0,
          type: e.items.type,
          errors: e.errors,
          "reference-model": e.referenceModel[e.index] || {},
          "onUpdate:modelValue": d
        }, null, 8, ["field-name", "model-value", "schema", "type", "errors", "reference-model", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["modelValue", "rules", "name", "label"])) : e.items.type === "key-value-pairs" ? (r(), n(m, {
      key: 1,
      modelValue: e.modelData[e.index],
      "onUpdate:modelValue": a[1] || (a[1] = (l) => e.modelData[e.index] = l),
      rules: e.ruleObject(!0),
      name: `${e.fieldName}/${e.index + 1}`,
      label: `${e.schema.title} ${e.index + 1}`,
      as: ""
    }, {
      default: i(({ field: l, handleChange: d }) => [
        s(t, {
          "field-name": `${e.fieldName}/${e.index + 1}`,
          "model-value": l.value,
          errors: e.errors,
          schema: {
            ...e.items,
            title: `${e.schema.title} ${e.index + 1}`
          },
          type: e.items.type,
          "reference-model": e.referenceModel[e.index] || {},
          "onUpdate:modelValue": d
        }, null, 8, ["field-name", "model-value", "errors", "schema", "type", "reference-model", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["modelValue", "rules", "name", "label"])) : e.items.type === "array" ? (r(), n(m, {
      key: 2,
      modelValue: e.modelData[e.index],
      "onUpdate:modelValue": a[2] || (a[2] = (l) => e.modelData[e.index] = l),
      rules: e.ruleArray(!0),
      name: `${e.fieldName}/${e.index + 1}`,
      label: `${e.schema.title} ${e.index + 1}`,
      as: ""
    }, {
      default: i(({ field: l, handleChange: d }) => [
        s(p, {
          "field-name": `${e.fieldName}/${e.index + 1}`,
          "model-value": l.value,
          schema: {
            ...e.items,
            title: `${e.schema.title} ${e.index + 1}`
          },
          type: e.items.type,
          errors: e.errors,
          "reference-model": e.referenceModel[e.index] || [],
          "onUpdate:modelValue": d
        }, null, 8, ["field-name", "model-value", "schema", "type", "errors", "reference-model", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["modelValue", "rules", "name", "label"])) : (r(), n(m, {
      key: 3,
      modelValue: e.modelData[e.index],
      "onUpdate:modelValue": a[3] || (a[3] = (l) => e.modelData[e.index] = l),
      rules: e.ruleString(!0),
      name: `${e.fieldName}/${e.index + 1}`,
      label: `${e.schema.title} ${e.index + 1}`,
      as: ""
    }, {
      default: i(({ field: l, handleChange: d, errors: y, meta: $ }) => [
        s(f, {
          "model-value": l.value,
          schema: {
            ...e.items,
            title: `${e.schema.title} ${e.index + 1}`
          },
          type: e.items.type,
          required: !0,
          "validation-ob": { errors: y, ...$ },
          "reference-model": e.referenceModel[e.index] || "",
          "onUpdate:modelValue": d
        }, null, 8, ["model-value", "schema", "type", "validation-ob", "reference-model", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["modelValue", "rules", "name", "label"]))
  ]);
}
const B = /* @__PURE__ */ v(k, [["render", j]]);
export {
  B as default
};
