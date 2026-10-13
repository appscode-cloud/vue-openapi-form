import { _ as k, m as h, v as P } from "./entry-BPe3zgVM.js";
import { resolveComponent as d, openBlock as m, createElementBlock as U, normalizeClass as p, createVNode as o, withCtx as i, mergeProps as g, createBlock as t, withModifiers as D, defineComponent as N } from "vue";
import { AcButton as j } from "@ac-design/design-system";
import { Trash2 as w } from "@lucide/vue";
import { c as M } from "./classes-Bjjgf3hO.js";
const O = N({
  name: "KeyValuePairItems",
  components: { AcButton: j, Trash2: w },
  mixins: [h, P],
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
  setup() {
    return { cls: M };
  },
  methods: {
    deleteProp(e) {
      this.$emit("delete-key-value", e);
    }
  }
});
function C(e, a, B, I, K, T) {
  const s = d("simple-input"), n = d("v-field"), v = d("object-form-wrapper"), f = d("key-value-pairs"), y = d("array-input"), $ = d("Trash2"), b = d("ac-button");
  return m(), U("div", {
    class: p(e.cls.keyValueRow)
  }, [
    o(n, {
      id: `${e.schema.title.replace(/ /g, "-")}-key-${e.index + 1}-provider`,
      modelValue: e.modelData.key,
      "onUpdate:modelValue": a[0] || (a[0] = (l) => e.modelData.key = l),
      rules: "required",
      name: `${e.fieldName}/key/${e.index + 1}`,
      label: `${e.schema.title} key ${e.index + 1}`,
      as: "div"
    }, {
      default: i(({ componentField: l, errors: r, meta: u }) => [
        o(s, g(l, {
          schema: {
            title: "Key",
            type: "string",
            ui: { tag: "input", type: "text" }
          },
          type: "string",
          "validation-ob": { errors: r, ...u },
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
      default: i(({ field: l, handleChange: r }) => [
        o(v, {
          "field-name": `${e.fieldName}/value/${e.index + 1}`,
          "model-value": l.value,
          schema: e.additionalProperties,
          "is-self-required": !0,
          type: e.additionalProperties.type,
          errors: e.errors,
          "reference-model": e.referenceModel.value || {},
          "onUpdate:modelValue": r
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
      default: i(({ field: l, handleChange: r }) => [
        o(f, {
          "field-name": `${e.fieldName}/value/${e.index + 1}`,
          "model-value": l.value,
          schema: e.additionalProperties,
          type: e.additionalProperties.type,
          errors: e.errors,
          "reference-model": e.referenceModel.value || {},
          "onUpdate:modelValue": r
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
      default: i(({ field: l, handleChange: r }) => [
        o(y, {
          "field-name": `${e.fieldName}/value/${e.index + 1}`,
          "model-value": l.value,
          schema: e.additionalProperties,
          type: e.additionalProperties.type,
          errors: e.errors,
          "reference-model": e.referenceModel.value || [],
          "onUpdate:modelValue": r
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
      default: i(({ field: l, handleChange: r, errors: u, meta: V }) => [
        o(s, {
          "model-value": l.value,
          schema: e.additionalProperties,
          type: e.additionalProperties.type,
          "validation-ob": { errors: u, ...V },
          "reference-model": e.referenceModel.value || "",
          "onUpdate:modelValue": r
        }, null, 8, ["model-value", "schema", "type", "validation-ob", "reference-model", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["id", "modelValue", "rules", "name", "label"])),
    o(b, {
      color: "white",
      size: "small",
      class: p(e.cls.besideInput),
      "aria-label": "Delete",
      onClick: a[5] || (a[5] = D((l) => e.deleteProp(e.index), ["prevent"]))
    }, {
      icon: i(() => [
        o($, {
          class: "text-danger",
          "aria-hidden": "true"
        })
      ]),
      _: 1
    }, 8, ["class"])
  ], 2);
}
const R = /* @__PURE__ */ k(O, [["render", C]]);
export {
  R as default
};
