import { _ as J, m as B, v as E } from "./entry-Do6WmZZA.js";
import { t as q } from "./tabs-BSCBgGlv.js";
import { s as z } from "./size-BtoaE7vX.js";
import { resolveComponent as l, resolveDirective as F, openBlock as s, createElementBlock as p, createElementVNode as i, createVNode as n, createTextVNode as L, toDisplayString as G, Fragment as H, renderList as K, withDirectives as b, withModifiers as c, normalizeClass as w, withCtx as d, createBlock as u, createCommentVNode as Q, defineComponent as R, defineAsyncComponent as W } from "vue";
import { AcButton as X } from "@ac-design/design-system";
import { Trash2 as Y, Plus as Z, Minus as x, ChevronUp as ee, ChevronDown as ae } from "@lucide/vue";
const oe = R({
  name: "ArrayInput",
  components: {
    AcButton: X,
    ChevronDown: ae,
    ChevronUp: ee,
    Minus: x,
    Plus: Z,
    Trash2: Y,
    ArrayInputItems: W(
      () => import("./ArrayInputItems-_0mV_bA-.js").then(
        (e) => e.default
      )
    )
  },
  mixins: [B, q, E, z],
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
      const f = JSON.parse(JSON.stringify(this.modelData[e]));
      this.modelData[e] = JSON.parse(JSON.stringify(this.modelData[a])), this.modelData[a] = f, this.updatePass += 1;
    },
    async addNewValue(e) {
      const { valid: a } = await e();
      a && (this.modelData.push(this.newData), this.newData = null, this.updatePass += 1);
    },
    deleteValue(e) {
      this.modelData.splice(e, 1), this.updatePass += 1;
    }
  }
}), le = { class: "vof-nested" }, te = { class: "vof-nested-header" }, ne = { class: "vof-nested-title" }, se = { class: "vof-collapse-icon is-disabled" }, re = {
  key: 0,
  class: "vof-array-body"
}, me = { class: "vof-array-item-controls" }, ie = { class: "vof-updown" }, de = ["disabled", "onClick"], ue = ["disabled", "onClick"], pe = { class: "vof-value-list-save" };
function ve(e, a, f, ce, fe, he) {
  const V = l("Minus"), D = l("component-errors"), k = l("tabs"), C = l("array-input-items"), U = l("ChevronUp"), $ = l("ChevronDown"), N = l("Trash2"), h = l("ac-button"), I = l("object-form-wrapper"), v = l("v-field"), _ = l("key-value-pairs"), g = l("array-input", !0), j = l("simple-input"), O = l("Plus"), M = l("v-form"), S = l("yaml-form"), T = l("json-form"), y = F("tooltip");
  return s(), p("div", le, [
    i("div", te, [
      i("h6", ne, [
        i("div", se, [
          n(V, { "aria-hidden": "true" })
        ]),
        L(" " + G(e.schema.title || "Array Item Description") + " ", 1),
        n(D, {
          errors: e.calcFormErrors(e.errors, e.fieldName)
        }, null, 8, ["errors"])
      ]),
      n(k, {
        modelValue: e.activeTab,
        "onUpdate:modelValue": a[0] || (a[0] = (r) => e.activeTab = r)
      }, null, 8, ["modelValue"])
    ]),
    e.activeTab === "form" ? (s(), p("div", re, [
      (s(!0), p(H, null, K(e.modelData, (r, t) => (s(), p("div", {
        key: `${t}-${e.schema.title}-form`,
        class: "vof-array-item"
      }, [
        n(C, {
          "field-name": e.fieldName,
          items: e.items,
          schema: e.schema,
          index: t,
          "model-value": JSON.parse(JSON.stringify(e.modelData)),
          errors: e.errors,
          "reference-model": e.referenceModel || []
        }, null, 8, ["field-name", "items", "schema", "index", "model-value", "errors", "reference-model"]),
        i("div", null, [
          i("div", me, [
            i("div", ie, [
              b((s(), p("button", {
                type: "button",
                "aria-label": "Move up",
                class: w({ "is-primary": t !== 0 }),
                disabled: t === 0,
                onClick: c((o) => e.swapElems(t - 1, t), ["prevent"])
              }, [
                n(U, { "aria-hidden": "true" })
              ], 10, de)), [
                [y, {
                  content: "move up",
                  placement: "top"
                }]
              ]),
              b((s(), p("button", {
                type: "button",
                "aria-label": "Move down",
                class: w({ "is-primary": t !== e.modelData.length - 1 }),
                disabled: t === e.modelData.length - 1,
                onClick: c((o) => e.swapElems(t, t + 1), ["prevent"])
              }, [
                n($, { "aria-hidden": "true" })
              ], 10, ue)), [
                [y, {
                  content: "move down",
                  placement: "bottom"
                }]
              ])
            ]),
            n(h, {
              class: "vof-icon-btn",
              color: "danger",
              variant: "outlined",
              "aria-label": "Delete",
              onClick: c((o) => e.deleteValue(t), ["prevent"])
            }, {
              icon: d(() => [
                n(N, { "aria-hidden": "true" })
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ])
      ]))), 128)),
      (s(), u(M, {
        key: e.updatePass,
        as: ""
      }, {
        default: d(({ validate: r, errors: t }) => [
          i("div", pe, [
            e.items.type === "object" ? (s(), u(v, {
              key: 0,
              modelValue: e.newData,
              "onUpdate:modelValue": a[1] || (a[1] = (o) => e.newData = o),
              rules: e.ruleObject(!0),
              name: "newItem",
              label: `${e.schema.title} new value`,
              as: ""
            }, {
              default: d(({ field: o, handleChange: m }) => [
                n(I, {
                  "field-name": "newItem",
                  "model-value": o.value,
                  "is-last-child": !0,
                  "expand-form": !0,
                  "is-self-required": !0,
                  schema: {
                    ...e.items,
                    title: `${e.schema.title} new value`
                  },
                  type: e.items.type,
                  errors: t,
                  "reference-model": {},
                  "onUpdate:modelValue": m
                }, null, 8, ["model-value", "schema", "type", "errors", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["modelValue", "rules", "label"])) : e.items.type === "key-value-pairs" ? (s(), u(v, {
              key: 1,
              modelValue: e.newData,
              "onUpdate:modelValue": a[2] || (a[2] = (o) => e.newData = o),
              rules: e.ruleObject(!0),
              name: "newItem",
              label: `${e.schema.title} new value`,
              as: ""
            }, {
              default: d(({ field: o, handleChange: m }) => [
                n(_, {
                  "field-name": "newItem",
                  "model-value": o.value,
                  "is-last-child": !0,
                  schema: {
                    ...e.items,
                    title: `${e.schema.title} new value`
                  },
                  errors: t,
                  type: e.items.type,
                  "reference-model": {},
                  "onUpdate:modelValue": m
                }, null, 8, ["model-value", "schema", "errors", "type", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["modelValue", "rules", "label"])) : e.items.type === "array" ? (s(), u(v, {
              key: 2,
              modelValue: e.newData,
              "onUpdate:modelValue": a[3] || (a[3] = (o) => e.newData = o),
              rules: e.ruleArray(!0),
              name: "newItem",
              label: `${e.schema.title} new value`,
              as: ""
            }, {
              default: d(({ field: o, handleChange: m }) => [
                n(g, {
                  "field-name": "newItem",
                  "model-value": o.value,
                  "is-last-child": !0,
                  schema: {
                    ...e.items,
                    title: `${e.schema.title} new value`
                  },
                  errors: t,
                  type: e.items.type,
                  "reference-model": [],
                  "onUpdate:modelValue": m
                }, null, 8, ["model-value", "schema", "errors", "type", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["modelValue", "rules", "label"])) : (s(), u(v, {
              key: 3,
              modelValue: e.newData,
              "onUpdate:modelValue": a[4] || (a[4] = (o) => e.newData = o),
              rules: e.ruleString(!0),
              name: "newItem",
              label: `${e.schema.title} new value`,
              as: ""
            }, {
              default: d(({ field: o, handleChange: m, errors: A, meta: P }) => [
                n(j, {
                  "model-value": o.value,
                  schema: {
                    ...e.items,
                    title: `${e.schema.title} new value`
                  },
                  required: !0,
                  type: e.items.type,
                  "validation-ob": { errors: A, ...P },
                  "reference-model": "",
                  "onUpdate:modelValue": m
                }, null, 8, ["model-value", "schema", "type", "validation-ob", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "rules", "label"])),
            n(h, {
              class: "vof-icon-btn",
              color: "primary",
              variant: "outlined",
              "aria-label": "Add",
              onClick: c((o) => e.addNewValue(r), ["prevent"])
            }, {
              icon: d(() => [
                n(O, { "aria-hidden": "true" })
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
      }))
    ])) : e.activeTab === "yaml" ? (s(), u(S, {
      key: 1,
      modelValue: e.modelData,
      "onUpdate:modelValue": a[5] || (a[5] = (r) => e.modelData = r),
      "reference-model": e.referenceModel || []
    }, null, 8, ["modelValue", "reference-model"])) : e.activeTab === "json" ? (s(), u(T, {
      key: 2,
      modelValue: e.modelData,
      "onUpdate:modelValue": a[6] || (a[6] = (r) => e.modelData = r),
      "reference-model": e.referenceModel || []
    }, null, 8, ["modelValue", "reference-model"])) : Q("", !0)
  ]);
}
const Ce = /* @__PURE__ */ J(oe, [["render", ve]]);
export {
  Ce as default
};
