import { _ as M, m as S, v as T } from "./entry-Cq-y0fYi.js";
import { t as q } from "./tabs-CS74BSKH.js";
import { s as B } from "./size-BtoaE7vX.js";
import { resolveComponent as r, openBlock as t, createElementBlock as y, createElementVNode as v, createVNode as o, createTextVNode as J, toDisplayString as R, Fragment as b, renderList as E, createBlock as u, withCtx as m, withModifiers as F, createCommentVNode as w, defineComponent as I, defineAsyncComponent as L } from "vue";
import { AcButton as z } from "@mohin4/design-system";
import { Plus as G, Minus as H } from "@lucide/vue";
const Q = I({
  name: "KeyValuePairs",
  components: {
    AcButton: z,
    Minus: H,
    Plus: G,
    KeyValuePairItems: L(
      () => import("./KeyValuePairItems-BKCJfGYc.js").then(
        (e) => e.default
      )
    )
  },
  mixins: [S, q, T, B],
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
        const s = JSON.stringify(e), c = JSON.stringify(a);
        s !== c && this.initKeyValueArray(), this.initReferenceKeyValueArray();
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
}), W = { class: "vof-nested vof-key-value-pairs" }, X = { class: "vof-nested-header" }, Y = { class: "vof-nested-title" }, Z = { class: "vof-collapse-icon is-disabled" };
function _(e, a, s, c, x, ee) {
  const k = r("Minus"), P = r("component-errors"), A = r("tabs"), U = r("key-value-pair-items"), h = r("simple-input"), p = r("v-field"), K = r("object-form-wrapper"), g = r("key-value-pairs", !0), $ = r("array-input"), j = r("Plus"), O = r("ac-button"), D = r("v-form"), C = r("yaml-form"), N = r("json-form");
  return t(), y("div", W, [
    v("div", X, [
      v("h6", Y, [
        v("div", Z, [
          o(k, { "aria-hidden": "true" })
        ]),
        J(" " + R(e.schema.title || "Array Item Description") + " ", 1),
        o(P, {
          errors: e.calcFormErrors(e.errors, e.fieldName)
        }, null, 8, ["errors"])
      ]),
      o(A, {
        modelValue: e.activeTab,
        "onUpdate:modelValue": a[0] || (a[0] = (i) => e.activeTab = i)
      }, null, 8, ["modelValue"])
    ]),
    e.activeTab === "form" ? (t(), y(b, { key: 0 }, [
      (t(!0), y(b, null, E(e.keyValueArray, (i, n) => (t(), y("div", {
        key: `${n}-${e.schema.title}-form`
      }, [
        o(U, {
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
      (t(), u(D, {
        id: `${e.schema.title.replace(/ /g, "-")}-new-observer`,
        key: e.updatePass,
        as: "div",
        class: "vof-key-value-save"
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
            default: m(({ field: l, handleChange: d, errors: V, meta: f }) => [
              o(h, {
                "model-value": l.value,
                schema: {
                  title: "Key",
                  type: "string",
                  ui: { tag: "input", type: "text" }
                },
                type: "string",
                "validation-ob": { errors: V, ...f },
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
              o(K, {
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
              o(g, {
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
              o($, {
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
            default: m(({ field: l, handleChange: d, errors: V, meta: f }) => [
              o(h, {
                "model-value": l.value,
                schema: e.additionalProperties,
                type: e.additionalProperties.type,
                "validation-ob": { errors: V, ...f },
                "reference-model": "",
                "onUpdate:modelValue": d
              }, null, 8, ["model-value", "schema", "type", "validation-ob", "onUpdate:modelValue"])
            ]),
            _: 1
          }, 8, ["id", "modelValue", "label"])),
          o(O, {
            class: "vof-icon-btn",
            color: "primary",
            variant: "outlined",
            "aria-label": "Add",
            onClick: F((l) => e.addProp(i), ["prevent"])
          }, {
            icon: m(() => [
              o(j, { "aria-hidden": "true" })
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["id"]))
    ], 64)) : w("", !0),
    e.activeTab === "yaml" ? (t(), u(C, {
      key: 1,
      modelValue: e.modelData,
      "onUpdate:modelValue": a[6] || (a[6] = (i) => e.modelData = i),
      "reference-model": e.referenceModel || {},
      "onCode::modelDataUpdated": e.updateKeyValueArray
    }, null, 8, ["modelValue", "reference-model", "onCode::modelDataUpdated"])) : e.activeTab === "json" ? (t(), u(N, {
      key: 2,
      modelValue: e.modelData,
      "onUpdate:modelValue": a[7] || (a[7] = (i) => e.modelData = i),
      "reference-model": e.referenceModel || {},
      "onCode::modelDataUpdated": e.updateKeyValueArray
    }, null, 8, ["modelValue", "reference-model", "onCode::modelDataUpdated"])) : w("", !0)
  ]);
}
const de = /* @__PURE__ */ M(Q, [["render", _]]);
export {
  de as default
};
