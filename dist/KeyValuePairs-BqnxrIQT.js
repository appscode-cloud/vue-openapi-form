import { _ as S, m as T, v as q } from "./entry-CF8Lj2uG.js";
import { t as B, c as J } from "./classes-BayuRM9v.js";
import { s as R } from "./size-BtoaE7vX.js";
import { resolveComponent as r, openBlock as t, createElementBlock as V, normalizeClass as y, createElementVNode as v, createVNode as o, createTextVNode as z, toDisplayString as I, Fragment as b, renderList as E, createBlock as u, withCtx as m, withModifiers as F, createCommentVNode as k, defineComponent as L, defineAsyncComponent as G } from "vue";
import { AcButton as H } from "@ac-design/design-system";
import { Plus as Q, Minus as W } from "@lucide/vue";
const X = L({
  name: "KeyValuePairs",
  components: {
    AcButton: H,
    Minus: W,
    Plus: Q,
    KeyValuePairItems: G(
      () => import("./KeyValuePairItems-C5Exca61.js").then(
        (e) => e.default
      )
    )
  },
  mixins: [T, B, q, R],
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
    errors: {
      type: Object,
      default: () => ({})
    },
    isLastChild: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    return { cls: J };
  },
  data() {
    return {
      newData: null,
      updatePass: 0,
      keyValueArray: null,
      referencekeyValueArray: null,
      newKey: "",
      newValue: null
    };
  },
  computed: {
    additionalProperties() {
      return this.schema.additionalProperties || {};
    }
  },
  watch: {
    keyValueArray: {
      immediate: !0,
      deep: !0,
      handler(e, a) {
        if (a != null) {
          const s = JSON.stringify(e);
          this.modelData = this.reconstructObject(JSON.parse(s));
        }
      }
    },
    activeTab() {
      this.initKeyValueArray(), this.initReferenceKeyValueArray();
    },
    modelValue: {
      deep: !0,
      immediate: !0,
      handler(e, a) {
        const s = JSON.stringify(e), h = JSON.stringify(a);
        s !== h && this.initKeyValueArray(), this.initReferenceKeyValueArray();
      }
    }
  },
  methods: {
    initKeyValueArray() {
      this.keyValueArray = Object.keys(this.modelValue).map((e) => ({
        key: e,
        value: this.modelValue[e] || null
      }));
    },
    initReferenceKeyValueArray() {
      this.referencekeyValueArray = Object.keys(this.referenceModel).map(
        (e) => ({
          key: e,
          value: this.referenceModel[e] || null
        })
      );
    },
    updateKeyValueArray(e) {
      this.keyValueArray = Object.keys(e).map((a) => ({
        key: a,
        value: e[a]
      }));
    },
    reconstructObject(e) {
      let a = {};
      return e.forEach((s) => {
        a = Object.assign(
          {},
          { ...a },
          {
            [`${s.key}`]: s.value
          }
        );
      }), a;
    },
    async addProp(e) {
      const { valid: a } = await e();
      a && (this.keyValueArray.push({
        key: this.newKey,
        value: this.newValue
      }), this.newKey = "", this.newValue = null, this.updatePass += 1);
    },
    deleteProp(e) {
      this.keyValueArray.splice(e, 1), this.updatePass += 1;
    }
  }
});
function Y(e, a, s, h, Z, _) {
  const P = r("Minus"), A = r("component-errors"), U = r("tabs"), K = r("key-value-pair-items"), w = r("simple-input"), p = r("v-field"), g = r("object-form-wrapper"), $ = r("key-value-pairs", !0), j = r("array-input"), O = r("Plus"), D = r("ac-button"), C = r("v-form"), N = r("yaml-form"), M = r("json-form");
  return t(), V("div", {
    "data-vof-nested": "",
    class: y([e.cls.nested, "flex flex-col gap-2"])
  }, [
    v("div", {
      class: y(e.cls.header)
    }, [
      v("h6", {
        class: y(e.cls.title)
      }, [
        v("div", {
          class: y([e.cls.foldIcon, "cursor-not-allowed"])
        }, [
          o(P, { "aria-hidden": "true" })
        ], 2),
        z(" " + I(e.schema.title || "Array Item Description") + " ", 1),
        o(A, {
          errors: e.calcFormErrors(e.errors, e.fieldName)
        }, null, 8, ["errors"])
      ], 2),
      o(U, {
        modelValue: e.activeTab,
        "onUpdate:modelValue": a[0] || (a[0] = (i) => e.activeTab = i)
      }, null, 8, ["modelValue"])
    ], 2),
    e.activeTab === "form" ? (t(), V(b, { key: 0 }, [
      (t(!0), V(b, null, E(e.keyValueArray, (i, n) => (t(), V("div", {
        key: `${n}-${e.schema.title}-form`
      }, [
        o(K, {
          modelValue: e.keyValueArray[n],
          "onUpdate:modelValue": (l) => e.keyValueArray[n] = l,
          "field-name": e.fieldName,
          "reference-model": e.referencekeyValueArray[n] || {},
          index: n,
          schema: e.schema,
          "additional-properties": e.additionalProperties,
          errors: e.errors,
          onDeleteKeyValue: e.deleteProp
        }, null, 8, ["modelValue", "onUpdate:modelValue", "field-name", "reference-model", "index", "schema", "additional-properties", "errors", "onDeleteKeyValue"])
      ]))), 128)),
      (t(), u(C, {
        id: `${e.schema.title.replace(/ /g, "-")}-new-observer`,
        key: e.updatePass,
        as: "div",
        class: y(e.cls.keyValueRow)
      }, {
        default: m(({ validate: i, errors: n }) => [
          o(p, {
            id: `${e.schema.title.replace(/ /g, "-")}-key-provider`,
            modelValue: e.newKey,
            "onUpdate:modelValue": a[1] || (a[1] = (l) => e.newKey = l),
            rules: "required",
            name: "newKey",
            label: `${e.schema.title} new key`,
            as: "div"
          }, {
            default: m(({ field: l, handleChange: d, errors: f, meta: c }) => [
              o(w, {
                "model-value": l.value,
                schema: {
                  title: "Key",
                  type: "string",
                  ui: { tag: "input", type: "text" }
                },
                type: "string",
                "validation-ob": { errors: f, ...c },
                "reference-model": "",
                "onUpdate:modelValue": d
              }, null, 8, ["model-value", "validation-ob", "onUpdate:modelValue"])
            ]),
            _: 1
          }, 8, ["id", "modelValue", "label"]),
          e.additionalProperties.type === "object" ? (t(), u(p, {
            key: 0,
            id: `${e.schema.title.replace(/ /g, "-")}-value-provider`,
            modelValue: e.newValue,
            "onUpdate:modelValue": a[2] || (a[2] = (l) => e.newValue = l),
            rules: "required",
            name: "newValue",
            label: `${e.schema.title} new value`,
            as: ""
          }, {
            default: m(({ field: l, handleChange: d }) => [
              o(g, {
                "field-name": "newValue",
                "model-value": l.value,
                "is-last-child": !0,
                "is-self-required": !0,
                schema: e.additionalProperties,
                type: e.additionalProperties.type,
                errors: n,
                "reference-model": {},
                "onUpdate:modelValue": d
              }, null, 8, ["model-value", "schema", "type", "errors", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1032, ["id", "modelValue", "label"])) : e.additionalProperties.type === "key-value-pairs" ? (t(), u(p, {
            key: 1,
            id: `${e.schema.title.replace(/ /g, "-")}-value-provider`,
            modelValue: e.newValue,
            "onUpdate:modelValue": a[3] || (a[3] = (l) => e.newValue = l),
            rules: "required",
            name: "newValue",
            label: `${e.schema.title} new value`,
            as: ""
          }, {
            default: m(({ field: l, handleChange: d }) => [
              o($, {
                "field-name": "newValue",
                "model-value": l.value,
                "is-last-child": !0,
                schema: e.additionalProperties,
                type: e.additionalProperties.type,
                errors: n,
                "reference-model": {},
                "onUpdate:modelValue": d
              }, null, 8, ["model-value", "schema", "type", "errors", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1032, ["id", "modelValue", "label"])) : e.additionalProperties.type === "array" ? (t(), u(p, {
            key: 2,
            id: `${e.schema.title.replace(/ /g, "-")}-value-provider`,
            modelValue: e.newValue,
            "onUpdate:modelValue": a[4] || (a[4] = (l) => e.newValue = l),
            rules: "required",
            name: "newValue",
            label: `${e.schema.title} new value`,
            as: ""
          }, {
            default: m(({ field: l, handleChange: d }) => [
              o(j, {
                "field-name": "newValue",
                "model-value": l.value,
                "is-last-child": !0,
                schema: e.additionalProperties,
                type: e.additionalProperties.type,
                errors: n,
                "reference-model": [],
                "onUpdate:modelValue": d
              }, null, 8, ["model-value", "schema", "type", "errors", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1032, ["id", "modelValue", "label"])) : (t(), u(p, {
            key: 3,
            id: `${e.schema.title.replace(/ /g, "-")}-value-provider`,
            modelValue: e.newValue,
            "onUpdate:modelValue": a[5] || (a[5] = (l) => e.newValue = l),
            rules: "required",
            name: "newValue",
            label: `${e.schema.title} new value`,
            as: ""
          }, {
            default: m(({ field: l, handleChange: d, errors: f, meta: c }) => [
              o(w, {
                "model-value": l.value,
                schema: e.additionalProperties,
                type: e.additionalProperties.type,
                "validation-ob": { errors: f, ...c },
                "reference-model": "",
                "onUpdate:modelValue": d
              }, null, 8, ["model-value", "schema", "type", "validation-ob", "onUpdate:modelValue"])
            ]),
            _: 1
          }, 8, ["id", "modelValue", "label"])),
          o(D, {
            color: "white",
            size: "small",
            class: "mt-1",
            "aria-label": "Add",
            onClick: F((l) => e.addProp(i), ["prevent"])
          }, {
            icon: m(() => [
              o(O, { "aria-hidden": "true" })
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["id", "class"]))
    ], 64)) : k("", !0),
    e.activeTab === "yaml" ? (t(), u(N, {
      key: 1,
      modelValue: e.modelData,
      "onUpdate:modelValue": a[6] || (a[6] = (i) => e.modelData = i),
      "reference-model": e.referenceModel || {},
      "onCode::modelDataUpdated": e.updateKeyValueArray
    }, null, 8, ["modelValue", "reference-model", "onCode::modelDataUpdated"])) : e.activeTab === "json" ? (t(), u(M, {
      key: 2,
      modelValue: e.modelData,
      "onUpdate:modelValue": a[7] || (a[7] = (i) => e.modelData = i),
      "reference-model": e.referenceModel || {},
      "onCode::modelDataUpdated": e.updateKeyValueArray
    }, null, 8, ["modelValue", "reference-model", "onCode::modelDataUpdated"])) : k("", !0)
  ], 2);
}
const te = /* @__PURE__ */ S(X, [["render", Y]]);
export {
  te as default
};
