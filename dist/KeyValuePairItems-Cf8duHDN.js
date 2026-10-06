import { _ as V, m as k, v as h } from "./entry-CiSu1Krq.js";
import { resolveComponent as d, openBlock as m, createElementBlock as P, createVNode as r, withCtx as i, mergeProps as U, createBlock as t, withModifiers as g, defineComponent as D } from "vue";
import { AcButton as N } from "@mohin4/design-system";
import { Trash2 as j } from "lucide-vue-next";
const M = D({
  name: "KeyValuePairItems",
  components: { AcButton: N, Trash2: j },
  mixins: [k, h],
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    fieldName: {
      type: String,
      default: ""
    },
    errors: {
      type: Object,
      default: () => ({})
    },
    index: { type: Number, default: 0 },
    schema: {
      type: Object,
      default: () => ({})
    },
    additionalProperties: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["delete-key-value"],
  methods: {
    deleteProp(e) {
      this.$emit("delete-key-value", e);
    }
  }
}), O = { class: "vof-key-value-save" };
function w(e, a, B, C, K, T) {
  const s = d("simple-input"), n = d("v-field"), p = d("object-form-wrapper"), v = d("key-value-pairs"), f = d("array-input"), y = d("Trash2"), $ = d("ac-button");
  return m(), P("div", O, [
    r(n, {
      id: `${e.schema.title.replace(/ /g, "-")}-key-${e.index + 1}-provider`,
      modelValue: e.modelData.key,
      "onUpdate:modelValue": a[0] || (a[0] = (l) => e.modelData.key = l),
      rules: "required",
      name: `${e.fieldName}/key/${e.index + 1}`,
      label: `${e.schema.title} key ${e.index + 1}`,
      as: "div"
    }, {
      default: i(({ componentField: l, errors: o, meta: u }) => [
        r(s, U(l, {
          schema: {
            title: "Key",
            type: "string",
            ui: { tag: "input", type: "text" }
          },
          type: "string",
          "validation-ob": { errors: o, ...u },
          "reference-model": e.referenceModel.key || ""
        }), null, 16, ["validation-ob", "reference-model"])
      ]),
      _: 1
    }, 8, ["id", "modelValue", "name", "label"]),
    e.additionalProperties.type === "object" ? (m(), t(n, {
      key: 0,
      id: `${e.schema.title.replace(/ /g, "-")}-value-${e.index + 1}-provider`,
      modelValue: e.modelData.value,
      "onUpdate:modelValue": a[1] || (a[1] = (l) => e.modelData.value = l),
      rules: e.ruleObject(!0),
      name: `${e.fieldName}/value/${e.index + 1}`,
      label: `${e.schema.title} value ${e.index + 1}`,
      as: ""
    }, {
      default: i(({ field: l, handleChange: o }) => [
        r(p, {
          "field-name": `${e.fieldName}/value/${e.index + 1}`,
          "model-value": l.value,
          schema: e.additionalProperties,
          "is-self-required": !0,
          type: e.additionalProperties.type,
          errors: e.errors,
          "reference-model": e.referenceModel.value || {},
          "onUpdate:modelValue": o
        }, null, 8, ["field-name", "model-value", "schema", "type", "errors", "reference-model", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["id", "modelValue", "rules", "name", "label"])) : e.additionalProperties.type === "key-value-pairs" ? (m(), t(n, {
      key: 1,
      id: `${e.schema.title.replace(/ /g, "-")}-value-${e.index + 1}-provider`,
      modelValue: e.modelData.value,
      "onUpdate:modelValue": a[2] || (a[2] = (l) => e.modelData.value = l),
      rules: e.ruleObject(!0),
      name: `${e.fieldName}/value/${e.index + 1}`,
      label: `${e.schema.title} value ${e.index + 1}`,
      as: ""
    }, {
      default: i(({ field: l, handleChange: o }) => [
        r(v, {
          "field-name": `${e.fieldName}/value/${e.index + 1}`,
          "model-value": l.value,
          schema: e.additionalProperties,
          type: e.additionalProperties.type,
          errors: e.errors,
          "reference-model": e.referenceModel.value || {},
          "onUpdate:modelValue": o
        }, null, 8, ["field-name", "model-value", "schema", "type", "errors", "reference-model", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["id", "modelValue", "rules", "name", "label"])) : e.additionalProperties.type === "array" ? (m(), t(n, {
      key: 2,
      id: `${e.schema.title.replace(/ /g, "-")}-value-${e.index + 1}-provider`,
      modelValue: e.modelData.value,
      "onUpdate:modelValue": a[3] || (a[3] = (l) => e.modelData.value = l),
      rules: e.ruleArray(!0),
      name: `${e.fieldName}/value/${e.index + 1}`,
      label: `${e.schema.title} value ${e.index + 1}`,
      as: ""
    }, {
      default: i(({ field: l, handleChange: o }) => [
        r(f, {
          "field-name": `${e.fieldName}/value/${e.index + 1}`,
          "model-value": l.value,
          schema: e.additionalProperties,
          type: e.additionalProperties.type,
          errors: e.errors,
          "reference-model": e.referenceModel.value || [],
          "onUpdate:modelValue": o
        }, null, 8, ["field-name", "model-value", "schema", "type", "errors", "reference-model", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["id", "modelValue", "rules", "name", "label"])) : (m(), t(n, {
      key: 3,
      id: `${e.schema.title.replace(/ /g, "-")}-value-${e.index + 1}-provider`,
      modelValue: e.modelData.value,
      "onUpdate:modelValue": a[4] || (a[4] = (l) => e.modelData.value = l),
      rules: e.ruleString(!0),
      name: `${e.fieldName}/value/${e.index + 1}`,
      label: `${e.schema.title} value ${e.index + 1}`,
      as: ""
    }, {
      default: i(({ field: l, handleChange: o, errors: u, meta: b }) => [
        r(s, {
          "model-value": l.value,
          schema: e.additionalProperties,
          type: e.additionalProperties.type,
          "validation-ob": { errors: u, ...b },
          "reference-model": e.referenceModel.value || "",
          "onUpdate:modelValue": o
        }, null, 8, ["model-value", "schema", "type", "validation-ob", "reference-model", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["id", "modelValue", "rules", "name", "label"])),
    r($, {
      class: "vof-icon-btn",
      color: "danger",
      variant: "outlined",
      "aria-label": "Delete",
      onClick: a[5] || (a[5] = g((l) => e.deleteProp(e.index), ["prevent"]))
    }, {
      icon: i(() => [
        r(y, { "aria-hidden": "true" })
      ]),
      _: 1
    })
  ]);
}
const E = /* @__PURE__ */ V(M, [["render", w]]);
export {
  E as default
};
