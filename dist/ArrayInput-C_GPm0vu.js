import { _ as z, m as B, v as J } from "./entry-CF8Lj2uG.js";
import { t as E, c as q } from "./classes-BayuRM9v.js";
import { s as F } from "./size-BtoaE7vX.js";
import { resolveComponent as o, openBlock as n, createElementBlock as v, normalizeClass as u, createElementVNode as p, createVNode as t, createTextVNode as L, toDisplayString as R, Fragment as G, renderList as H, withCtx as r, withModifiers as h, createBlock as d, createCommentVNode as K, defineComponent as Q, defineAsyncComponent as W } from "vue";
import { AcButtons as X, AcButton as Y } from "@ac-design/design-system";
import { Trash2 as Z, Plus as _, Minus as x, ChevronUp as ee, ChevronDown as ae } from "@lucide/vue";
const le = Q({
  name: "ArrayInput",
  components: {
    AcButton: Y,
    AcButtons: X,
    ChevronDown: ae,
    ChevronUp: ee,
    Minus: x,
    Plus: _,
    Trash2: Z,
    ArrayInputItems: W(
      () => import("./ArrayInputItems-DPScdHtC.js").then(
        (e) => e.default
      )
    )
  },
  mixins: [B, E, J, F],
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
      type: null,
      default: () => []
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
    return { cls: q };
  },
  data() {
    return {
      newData: null,
      updatePass: 0
    };
  },
  computed: {
    items() {
      return this.schema.items || {};
    }
  },
  methods: {
    swapElems(e, a) {
      const y = JSON.parse(JSON.stringify(this.modelData[e]));
      this.modelData[e] = JSON.parse(JSON.stringify(this.modelData[a])), this.modelData[a] = y, this.updatePass += 1;
    },
    async addNewValue(e) {
      const { valid: a } = await e();
      a && (this.modelData.push(this.newData), this.newData = null, this.updatePass += 1);
    },
    deleteValue(e) {
      this.modelData.splice(e, 1), this.updatePass += 1;
    }
  }
}), oe = {
  key: 0,
  class: "flex flex-col gap-4"
}, te = { class: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4" };
function se(e, a, y, ne, re, me) {
  const w = o("Minus"), b = o("component-errors"), V = o("tabs"), D = o("array-input-items"), k = o("ChevronUp"), c = o("ac-button"), C = o("ChevronDown"), U = o("ac-buttons"), $ = o("Trash2"), N = o("object-form-wrapper"), f = o("v-field"), g = o("key-value-pairs"), I = o("array-input", !0), j = o("simple-input"), A = o("Plus"), O = o("v-form"), M = o("yaml-form"), S = o("json-form");
  return n(), v("div", {
    "data-vof-nested": "",
    class: u(e.cls.nested)
  }, [
    p("div", {
      class: u(e.cls.header)
    }, [
      p("h6", {
        class: u(e.cls.title)
      }, [
        p("div", {
          class: u([e.cls.foldIcon, "cursor-not-allowed"])
        }, [
          t(w, { "aria-hidden": "true" })
        ], 2),
        L(" " + R(e.schema.title || "Array Item Description") + " ", 1),
        t(b, {
          errors: e.calcFormErrors(e.errors, e.fieldName)
        }, null, 8, ["errors"])
      ], 2),
      t(V, {
        modelValue: e.activeTab,
        "onUpdate:modelValue": a[0] || (a[0] = (m) => e.activeTab = m)
      }, null, 8, ["modelValue"])
    ], 2),
    e.activeTab === "form" ? (n(), v("div", oe, [
      (n(!0), v(G, null, H(e.modelData, (m, s) => (n(), v("div", {
        key: `${s}-${e.schema.title}-form`,
        class: "flex items-start gap-4"
      }, [
        t(D, {
          "field-name": e.fieldName,
          items: e.items,
          schema: e.schema,
          index: s,
          "model-value": JSON.parse(JSON.stringify(e.modelData)),
          errors: e.errors,
          "reference-model": e.referenceModel || []
        }, null, 8, ["field-name", "items", "schema", "index", "model-value", "errors", "reference-model"]),
        p("div", {
          class: u(e.cls.rowActions)
        }, [
          t(U, {
            attached: "",
            inline: "",
            label: "Reorder"
          }, {
            default: r(() => [
              t(c, {
                color: "white",
                size: "small",
                "aria-label": "Move up",
                disabled: s === 0,
                onClick: h((l) => e.swapElems(s - 1, s), ["prevent"])
              }, {
                icon: r(() => [
                  t(k, { "aria-hidden": "true" })
                ]),
                _: 1
              }, 8, ["disabled", "onClick"]),
              t(c, {
                color: "white",
                size: "small",
                "aria-label": "Move down",
                disabled: s === e.modelData.length - 1,
                onClick: h((l) => e.swapElems(s, s + 1), ["prevent"])
              }, {
                icon: r(() => [
                  t(C, { "aria-hidden": "true" })
                ]),
                _: 1
              }, 8, ["disabled", "onClick"])
            ]),
            _: 2
          }, 1024),
          t(c, {
            color: "white",
            size: "small",
            "aria-label": "Delete",
            onClick: h((l) => e.deleteValue(s), ["prevent"])
          }, {
            icon: r(() => [
              t($, {
                class: "text-danger",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }, 8, ["onClick"])
        ], 2)
      ]))), 128)),
      (n(), d(O, {
        key: e.updatePass,
        as: ""
      }, {
        default: r(({ validate: m, errors: s }) => [
          p("div", te, [
            e.items.type === "object" ? (n(), d(f, {
              key: 0,
              modelValue: e.newData,
              "onUpdate:modelValue": a[1] || (a[1] = (l) => e.newData = l),
              rules: e.ruleObject(!0),
              name: "newItem",
              label: `${e.schema.title} new value`,
              as: ""
            }, {
              default: r(({ field: l, handleChange: i }) => [
                t(N, {
                  "field-name": "newItem",
                  "model-value": l.value,
                  "is-last-child": !0,
                  "expand-form": !0,
                  "is-self-required": !0,
                  schema: {
                    ...e.items,
                    title: `${e.schema.title} new value`
                  },
                  type: e.items.type,
                  errors: s,
                  "reference-model": {},
                  "onUpdate:modelValue": i
                }, null, 8, ["model-value", "schema", "type", "errors", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["modelValue", "rules", "label"])) : e.items.type === "key-value-pairs" ? (n(), d(f, {
              key: 1,
              modelValue: e.newData,
              "onUpdate:modelValue": a[2] || (a[2] = (l) => e.newData = l),
              rules: e.ruleObject(!0),
              name: "newItem",
              label: `${e.schema.title} new value`,
              as: ""
            }, {
              default: r(({ field: l, handleChange: i }) => [
                t(g, {
                  "field-name": "newItem",
                  "model-value": l.value,
                  "is-last-child": !0,
                  schema: {
                    ...e.items,
                    title: `${e.schema.title} new value`
                  },
                  errors: s,
                  type: e.items.type,
                  "reference-model": {},
                  "onUpdate:modelValue": i
                }, null, 8, ["model-value", "schema", "errors", "type", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["modelValue", "rules", "label"])) : e.items.type === "array" ? (n(), d(f, {
              key: 2,
              modelValue: e.newData,
              "onUpdate:modelValue": a[3] || (a[3] = (l) => e.newData = l),
              rules: e.ruleArray(!0),
              name: "newItem",
              label: `${e.schema.title} new value`,
              as: ""
            }, {
              default: r(({ field: l, handleChange: i }) => [
                t(I, {
                  "field-name": "newItem",
                  "model-value": l.value,
                  "is-last-child": !0,
                  schema: {
                    ...e.items,
                    title: `${e.schema.title} new value`
                  },
                  errors: s,
                  type: e.items.type,
                  "reference-model": [],
                  "onUpdate:modelValue": i
                }, null, 8, ["model-value", "schema", "errors", "type", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["modelValue", "rules", "label"])) : (n(), d(f, {
              key: 3,
              modelValue: e.newData,
              "onUpdate:modelValue": a[4] || (a[4] = (l) => e.newData = l),
              rules: e.ruleString(!0),
              name: "newItem",
              label: `${e.schema.title} new value`,
              as: ""
            }, {
              default: r(({ field: l, handleChange: i, errors: T, meta: P }) => [
                t(j, {
                  "model-value": l.value,
                  schema: {
                    ...e.items,
                    title: `${e.schema.title} new value`
                  },
                  required: !0,
                  type: e.items.type,
                  "validation-ob": { errors: T, ...P },
                  "reference-model": "",
                  "onUpdate:modelValue": i
                }, null, 8, ["model-value", "schema", "type", "validation-ob", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "rules", "label"])),
            t(c, {
              color: "white",
              size: "small",
              class: "mt-1",
              "aria-label": "Add",
              onClick: h((l) => e.addNewValue(m), ["prevent"])
            }, {
              icon: r(() => [
                t(A, { "aria-hidden": "true" })
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
      }))
    ])) : e.activeTab === "yaml" ? (n(), d(M, {
      key: 1,
      modelValue: e.modelData,
      "onUpdate:modelValue": a[5] || (a[5] = (m) => e.modelData = m),
      "reference-model": e.referenceModel || []
    }, null, 8, ["modelValue", "reference-model"])) : e.activeTab === "json" ? (n(), d(S, {
      key: 2,
      modelValue: e.modelData,
      "onUpdate:modelValue": a[6] || (a[6] = (m) => e.modelData = m),
      "reference-model": e.referenceModel || []
    }, null, 8, ["modelValue", "reference-model"])) : K("", !0)
  ], 2);
}
const ve = /* @__PURE__ */ z(le, [["render", se]]);
export {
  ve as default
};
