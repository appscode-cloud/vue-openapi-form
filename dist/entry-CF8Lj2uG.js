import { defineComponent as h, defineAsyncComponent as o, resolveComponent as u, openBlock as $, createBlock as D, withCtx as s, createVNode as d, createElementVNode as w, normalizeClass as k, renderSlot as O, getCurrentInstance as x } from "vue";
import { AcFormFooter as F, AcForm as P } from "@ac-design/design-system";
import { defineRule as a } from "vee-validate";
import { required as A, email as J, image as N } from "@vee-validate/rules";
const q = function(e) {
  return e = e.charAt(0).toUpperCase() + e.slice(1), e.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}, f = function(e, t) {
  let r = Object.assign({}, { title: t }, { ...e });
  if (e.type === "object") {
    let i = {};
    try {
      e.properties ? (Object.keys(e.properties).forEach((n) => {
        const l = q(n);
        i = Object.assign(
          {},
          { ...i },
          { [`${n}`]: { ...f(e.properties[n], l) } }
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
          ...f(e.additionalProperties, "Value")
        }
      ));
    } catch {
    }
  } else if (e.type === "array") {
    let i = {};
    i = Object.assign(
      {},
      { ...i },
      { ...f(e.items, "") }
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
function C(e, t) {
  return f(e, t);
}
const B = h({
  components: {
    VForm: o(
      () => import("vee-validate").then(({ Form: e }) => e)
    ),
    VField: o(
      () => import("vee-validate").then(({ Field: e }) => e)
    ),
    ComponentErrors: o(
      () => import("./ComponentErrors-RChpiBII.js").then(
        (e) => e.default
      )
    ),
    RightWrongSigns: o(
      () => import("./RightWrongSigns-CLrx2_KE.js").then(
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
}), E = h({
  components: {
    ObjectFormWrapper: o(
      () => import("./ObjectFormWrapper-BRP0wrB9.js").then(
        (e) => e.default
      )
    ),
    ObjectForm: o(
      () => import("./ObjectForm-BPBBiMby.js").then((e) => e.default)
    ),
    ArrayInput: o(
      () => import("./ArrayInput-C_GPm0vu.js").then((e) => e.default)
    ),
    KeyValuePairs: o(
      () => import("./KeyValuePairs-BqnxrIQT.js").then((e) => e.default)
    ),
    SimpleInput: o(
      () => import("./SimpleInput-DKkqRZD2.js").then((e) => e.default)
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
}), M = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [i, n] of t)
    r[i] = n;
  return r;
}, I = h({
  name: "VueOpenapiForm",
  components: {
    AcForm: P,
    AcFormFooter: F
  },
  mixins: [E, B],
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
      return C(this.schema, this.formTitle);
    }
  }
});
function W(e, t, r, i, n, l) {
  const y = u("object-form-wrapper"), j = u("v-field"), V = u("ac-form-footer"), _ = u("ac-form"), S = u("v-form");
  return $(), D(S, {
    ref: "v-form",
    as: ""
  }, {
    default: s(({ meta: g, validate: b, errors: m }) => [
      d(_, { width: "full" }, {
        footer: s(() => [
          d(V, { sticky: "none" }, {
            left: s(() => [
              O(e.$slots, "left-controls", {
                validate: b,
                formStatus: g,
                errors: m
              })
            ]),
            right: s(() => [
              O(e.$slots, "right-controls", {
                validate: b,
                formStatus: g,
                errors: m
              })
            ]),
            _: 2
          }, 1024)
        ]),
        default: s(() => [
          w("div", {
            class: k(["vue-openapi-form w-full font-sans text-body", { "is-medium": e.size === "medium" }])
          }, [
            d(j, {
              modelValue: e.modelData,
              "onUpdate:modelValue": t[0] || (t[0] = (c) => e.modelData = c),
              name: e.extendedSchema.title,
              label: e.extendedSchema.title,
              rules: e.ruleObject(!0),
              as: ""
            }, {
              default: s(({ field: c, handleChange: v }) => [
                d(y, {
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
                  "onUpdate:modelValue": v
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
const H = /* @__PURE__ */ M(I, [["render", W]]), R = function() {
  a("required", A), a("requiredArray", (e) => e !== null && typeof e == "object" && Array.isArray(e) && e.length < 2 ? "{_field_} array must contain more than one element" : !0), a("requiredOb", (e) => e !== null && typeof e == "object" && Object.keys(e).length === 0 ? "{_field_} object must not be empty" : !0), a("email", J), a("image", N), a("private_username", async (e) => {
    const { app: t } = x(), r = t?.appContext.config.globalProperties.$axios, i = e.length;
    if (i < 5 || i > 40)
      return "{_field_} length must be between 5 and 40 characters";
    {
      const n = new FormData();
      n.set("user_name", e);
      const { data: l } = await r.post("/user/validate/username", n);
      return l.valid ? !0 : l.message;
    }
  }), a("password", (e, [t]) => {
    if (e !== t)
      return "The passwords do not match.";
  });
}, T = (e, t) => {
  R(), e.mixin({
    data: function() {
      return {
        get cleanObject() {
          return t.cleanObject || !1;
        }
      };
    }
  });
}, z = {
  install: T
};
let p = null;
typeof window < "u" ? p = window.Vue : typeof global < "u" && (p = global.Vue);
p && p.use(z);
export {
  H as V,
  M as _,
  E as m,
  z as p,
  B as v
};
