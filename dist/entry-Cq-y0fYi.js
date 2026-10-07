import { defineComponent as y, defineAsyncComponent as o, resolveComponent as a, openBlock as $, createBlock as D, withCtx as u, createVNode as h, createElementVNode as d, normalizeClass as w, renderSlot as j, getCurrentInstance as k } from "vue";
import { AcForm as x } from "@mohin4/design-system";
import { defineRule as s } from "vee-validate";
import { required as P, email as F, image as J } from "@vee-validate/rules";
const N = function(e) {
  return e = e.charAt(0).toUpperCase() + e.slice(1), e.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}, p = function(e, t) {
  let r = Object.assign({}, { title: t }, { ...e });
  if (e.type === "object") {
    let i = {};
    try {
      e.properties ? (Object.keys(e.properties).forEach((n) => {
        const l = N(n);
        i = Object.assign(
          {},
          { ...i },
          { [`${n}`]: { ...p(e.properties[n], l) } }
        );
      }), r = Object.assign(
        {},
        { ...r },
        { properties: { ...i } }
      )) : e.additionalProperties && (r = Object.assign(
        {},
        { ...r },
        { type: "key-value-pairs" }
      ), r.additionalProperties = Object.assign(
        {},
        { ...e.additionalProperties },
        {
          ...p(e.additionalProperties, "Value")
        }
      ));
    } catch {
    }
  } else if (e.type === "array") {
    let i = {};
    i = Object.assign(
      {},
      { ...i },
      { ...p(e.items, "") }
    ), r = Object.assign({}, { ...r }, { items: { ...i } });
  } else {
    let i = "";
    e.type === "number" || e.type === "integer" ? i = "number" : e.type === "boolean" ? i = "checkbox" : i = "text", r = Object.assign(
      {},
      { ...r },
      {
        ui: {
          tag: "input",
          type: i
        }
      }
    );
  }
  return r;
};
function q(e, t) {
  return p(e, t);
}
const A = y({
  components: {
    VForm: o(
      () => import("vee-validate").then(({ Form: e }) => e)
    ),
    VField: o(
      () => import("vee-validate").then(({ Field: e }) => e)
    ),
    ComponentErrors: o(
      () => import("./ComponentErrors-BH6zCsrf.js").then(
        (e) => e.default
      )
    ),
    RightWrongSigns: o(
      () => import("./RightWrongSigns-CRLMAceY.js").then(
        (e) => e.default
      )
    )
  },
  props: {
    isSelfRequired: {
      type: Boolean,
      default: !1
    }
  },
  methods: {
    ruleString(e) {
      let t = "";
      return e && (t += "required"), t;
    },
    ruleArray(e) {
      let t = {};
      return e && (t.required = !0), t;
    },
    ruleObject(e) {
      let t = {};
      return e && (t.requiredOb = !0), t;
    },
    calcFormErrors(e, t) {
      return Object.keys(e).filter((r) => r.startsWith(t)).map((r) => {
        const i = r.replace(/^(\$\/)/, ""), n = t.replace(/^(\$\/)/, ""), l = i.replace(n + "/", "");
        return `${l.includes("/") ? `${l}: ` : ""}${e[r]}`;
      });
    }
  }
}), C = y({
  components: {
    ObjectFormWrapper: o(
      () => import("./ObjectFormWrapper-BlPeLORr.js").then(
        (e) => e.default
      )
    ),
    ObjectForm: o(
      () => import("./ObjectForm-B3UltE2O.js").then((e) => e.default)
    ),
    ArrayInput: o(
      () => import("./ArrayInput-D_9zSAOC.js").then((e) => e.default)
    ),
    KeyValuePairs: o(
      () => import("./KeyValuePairs-CTOVvgYp.js").then((e) => e.default)
    ),
    SimpleInput: o(
      () => import("./SimpleInput-DQe5KDPa.js").then((e) => e.default)
    )
  },
  props: {
    type: {
      type: String,
      default: "string"
    },
    referenceModel: {
      type: null,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      modelData: null
    };
  },
  watch: {
    modelData: {
      immediate: !0,
      deep: !0,
      handler(e, t) {
        t != null && (this.cleanObject && this.clean(e), this.type === "number" || this.type === "integer" ? e === "" ? this.$emit("update:modelValue", null) : this.$emit("update:modelValue", +e) : this.$emit("update:modelValue", e));
      }
    },
    modelValue: {
      deep: !0,
      handler(e, t) {
        JSON.stringify(t) !== JSON.stringify(e) && this.initModelData();
      }
    }
  },
  created() {
    this.initModelData();
  },
  methods: {
    initModelData() {
      this.modelValue ? (this.type === "object" || this.type === "key-value-pairs") && Object.keys(this.modelValue).length > 0 ? this.modelData = JSON.parse(JSON.stringify(this.modelValue)) : this.type === "array" && this.modelValue.length > 0 ? this.modelData = JSON.parse(JSON.stringify(this.modelValue)) : this.type === "boolean" && this.modelValue !== null ? this.modelData = this.modelValue : this.type === "string" || this.type === "number" || this.type === "integer" ? this.modelData = this.modelValue : this.modelData = this.initWithBlank() : this.modelData = this.initWithBlank();
    },
    initWithBlank() {
      return this.type === "object" || this.type === "key-value-pairs" ? {} : this.type === "array" ? [] : this.type === "boolean" ? !1 : this.type === "number" || this.type === "integer" ? null : "";
    },
    clean(e) {
      this.type === "object" || this.type === "key-value-pairs" ? Object.keys(e).forEach((t) => {
        let r = "";
        typeof e[t] != "string" ? r = JSON.stringify(e[t]) : r = e[t], (r === void 0 || r === "null" || r === "" || r === "{}" || r === "[]") && delete e[t];
      }) : this.type === "array" && e.map((r, i) => ({ item: r, idx: i })).filter((r) => {
        const i = r.item;
        let n = "";
        return typeof i != "string" ? n = JSON.stringify(i) : n = i, n === void 0 || n === "null" || n === "" || n === "{}" || n === "[]";
      }).map((r) => r.idx).forEach((r) => e.splice(r, 1));
    }
  }
}), B = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [i, n] of t)
    r[i] = n;
  return r;
}, E = y({
  name: "VueOpenapiForm",
  components: {
    AcForm: x
  },
  mixins: [C, A],
  provide() {
    const e = {};
    return Object.defineProperty(e, "theme", {
      enumerable: !0,
      get: () => this.themeMode
    }), {
      providedData: e
    };
  },
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    formTitle: {
      type: String,
      default: ""
    },
    onlyJson: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "small"
    },
    themeMode: {
      type: String,
      default: "light"
    }
  },
  computed: {
    extendedSchema() {
      return q(this.schema, this.formTitle);
    }
  }
}), M = { class: "vof-footer" }, I = { class: "vof-footer-group" }, W = { class: "vof-footer-group" };
function R(e, t, r, i, n, l) {
  const g = a("object-form-wrapper"), v = a("v-field"), V = a("ac-form"), _ = a("v-form");
  return $(), D(_, {
    ref: "v-form",
    as: ""
  }, {
    default: u(({ meta: b, validate: O, errors: m }) => [
      h(V, { width: "full" }, {
        footer: u(() => [
          d("div", M, [
            d("div", I, [
              j(e.$slots, "left-controls", {
                validate: O,
                formStatus: b,
                errors: m
              })
            ]),
            d("div", W, [
              j(e.$slots, "right-controls", {
                validate: O,
                formStatus: b,
                errors: m
              })
            ])
          ])
        ]),
        default: u(() => [
          d("div", {
            class: w(["vue-openapi-form vof-root", { "is-medium": e.size === "medium" }])
          }, [
            h(v, {
              modelValue: e.modelData,
              "onUpdate:modelValue": t[0] || (t[0] = (c) => e.modelData = c),
              name: e.extendedSchema.title,
              label: e.extendedSchema.title,
              rules: e.ruleObject(!0),
              as: ""
            }, {
              default: u(({ field: c, handleChange: S }) => [
                h(g, {
                  "field-name": "$",
                  "model-value": c.value,
                  "expand-form": !0,
                  "is-root": !0,
                  level: 1,
                  "is-self-required": !0,
                  "only-json": e.onlyJson,
                  schema: e.extendedSchema,
                  "reference-model": e.referenceModel || {},
                  errors: m,
                  showRootTab: !0,
                  "onUpdate:modelValue": S
                }, null, 8, ["model-value", "only-json", "schema", "reference-model", "errors", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["modelValue", "name", "label", "rules"])
          ], 2)
        ]),
        _: 2
      }, 1024)
    ]),
    _: 3
  }, 512);
}
const L = /* @__PURE__ */ B(E, [["render", R]]), T = function() {
  s("required", P), s("requiredArray", (e) => e !== null && typeof e == "object" && Array.isArray(e) && e.length < 2 ? "{_field_} array must contain more than one element" : !0), s("requiredOb", (e) => e !== null && typeof e == "object" && Object.keys(e).length === 0 ? "{_field_} object must not be empty" : !0), s("email", F), s("image", J), s("private_username", async (e) => {
    const { app: t } = k(), r = t?.appContext.config.globalProperties.$axios, i = e.length;
    if (i < 5 || i > 40)
      return "{_field_} length must be between 5 and 40 characters";
    {
      const n = new FormData();
      n.set("user_name", e);
      const { data: l } = await r.post("/user/validate/username", n);
      return l.valid ? !0 : l.message;
    }
  }), s("password", (e, [t]) => {
    if (e !== t)
      return "The passwords do not match.";
  });
}, z = (e, t) => {
  T(), e.mixin({
    data: function() {
      return {
        get cleanObject() {
          return t.cleanObject || !1;
        }
      };
    }
  });
}, U = {
  install: z
};
let f = null;
typeof window < "u" ? f = window.Vue : typeof global < "u" && (f = global.Vue);
f && f.use(U);
export {
  L as V,
  B as _,
  C as m,
  U as p,
  A as v
};
