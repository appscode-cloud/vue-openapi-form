import { defineComponent as h, defineAsyncComponent as o, resolveComponent as u, openBlock as D, createBlock as w, withCtx as a, createVNode as d, createElementVNode as k, normalizeClass as x, renderSlot as O, getCurrentInstance as F } from "vue";
import { AcFormFooter as A, AcForm as P, AcCard as C } from "@ac-design/design-system";
import { defineRule as s } from "vee-validate";
import { required as J, email as N, image as q } from "@vee-validate/rules";
const B = function(e) {
  return e = e.charAt(0).toUpperCase() + e.slice(1), e.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}, p = function(e, t) {
  let r = Object.assign({}, { title: t }, { ...e });
  if (e.type === "object") {
    let n = {};
    try {
      e.properties ? (Object.keys(e.properties).forEach((i) => {
        const l = B(i);
        n = Object.assign(
          {},
          { ...n },
          { [`${i}`]: { ...p(e.properties[i], l) } }
        );
      }), r = Object.assign(
        {},
        { ...r },
        { properties: { ...n } }
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
    let n = {};
    n = Object.assign(
      {},
      { ...n },
      { ...p(e.items, "") }
    ), r = Object.assign({}, { ...r }, { items: { ...n } });
  } else {
    let n = "";
    e.type === "number" || e.type === "integer" ? n = "number" : e.type === "boolean" ? n = "checkbox" : n = "text", r = Object.assign(
      {},
      { ...r },
      {
        ui: {
          tag: "input",
          type: n
        }
      }
    );
  }
  return r;
};
function E(e, t) {
  return p(e, t);
}
const M = h({
  components: {
    VForm: o(
      () => import("vee-validate").then(({ Form: e }) => e)
    ),
    VField: o(
      () => import("vee-validate").then(({ Field: e }) => e)
    ),
    ComponentErrors: o(
      () => import("./ComponentErrors-Cilia1dF.js").then(
        (e) => e.default
      )
    ),
    RightWrongSigns: o(
      () => import("./RightWrongSigns--55aMKtR.js").then(
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
        const n = r.replace(/^(\$\/)/, ""), i = t.replace(/^(\$\/)/, ""), l = n.replace(i + "/", "");
        return `${l.includes("/") ? `${l}: ` : ""}${e[r]}`;
      });
    }
  }
}), I = h({
  components: {
    ObjectFormWrapper: o(
      () => import("./ObjectFormWrapper-CIqLlgeu.js").then(
        (e) => e.default
      )
    ),
    ObjectForm: o(
      () => import("./ObjectForm-B24UX91s.js").then((e) => e.default)
    ),
    ArrayInput: o(
      () => import("./ArrayInput-DdkQrE-e.js").then((e) => e.default)
    ),
    KeyValuePairs: o(
      () => import("./KeyValuePairs-BVrra47A.js").then((e) => e.default)
    ),
    SimpleInput: o(
      () => import("./SimpleInput-BCXxmZff.js").then((e) => e.default)
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
      }) : this.type === "array" && e.map((r, n) => ({ item: r, idx: n })).filter((r) => {
        const n = r.item;
        let i = "";
        return typeof n != "string" ? i = JSON.stringify(n) : i = n, i === void 0 || i === "null" || i === "" || i === "{}" || i === "[]";
      }).map((r) => r.idx).forEach((r) => e.splice(r, 1));
    }
  }
}), W = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, R = h({
  name: "VueOpenapiForm",
  components: {
    AcCard: C,
    AcForm: P,
    AcFormFooter: A
  },
  mixins: [I, M],
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
      return E(this.schema, this.formTitle);
    }
  }
});
function T(e, t, r, n, i, l) {
  const y = u("object-form-wrapper"), j = u("v-field"), _ = u("ac-form-footer"), V = u("ac-form"), S = u("ac-card"), v = u("v-form");
  return D(), w(v, {
    ref: "v-form",
    as: ""
  }, {
    default: a(({ meta: g, validate: b, errors: m }) => [
      d(S, null, {
        default: a(() => [
          d(V, {
            width: "full",
            variant: "plain"
          }, {
            footer: a(() => [
              d(_, { sticky: "none" }, {
                left: a(() => [
                  O(e.$slots, "left-controls", {
                    validate: b,
                    formStatus: g,
                    errors: m
                  })
                ]),
                right: a(() => [
                  O(e.$slots, "right-controls", {
                    validate: b,
                    formStatus: g,
                    errors: m
                  })
                ]),
                _: 2
              }, 1024)
            ]),
            default: a(() => [
              k("div", {
                class: x(["vue-openapi-form w-full font-sans text-body", { "is-medium": e.size === "medium" }])
              }, [
                d(j, {
                  modelValue: e.modelData,
                  "onUpdate:modelValue": t[0] || (t[0] = (c) => e.modelData = c),
                  name: e.extendedSchema.title,
                  label: e.extendedSchema.title,
                  rules: e.ruleObject(!0),
                  as: ""
                }, {
                  default: a(({ field: c, handleChange: $ }) => [
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
                      "onUpdate:modelValue": $
                    }, null, 8, ["model-value", "only-json", "schema", "reference-model", "errors", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["modelValue", "name", "label", "rules"])
              ], 2)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024)
    ]),
    _: 3
  }, 512);
}
const Q = /* @__PURE__ */ W(R, [["render", T]]), z = function() {
  s("required", J), s("requiredArray", (e) => e !== null && typeof e == "object" && Array.isArray(e) && e.length < 2 ? "{_field_} array must contain more than one element" : !0), s("requiredOb", (e) => e !== null && typeof e == "object" && Object.keys(e).length === 0 ? "{_field_} object must not be empty" : !0), s("email", N), s("image", q), s("private_username", async (e) => {
    const { app: t } = F(), r = t?.appContext.config.globalProperties.$axios, n = e.length;
    if (n < 5 || n > 40)
      return "{_field_} length must be between 5 and 40 characters";
    {
      const i = new FormData();
      i.set("user_name", e);
      const { data: l } = await r.post("/user/validate/username", i);
      return l.valid ? !0 : l.message;
    }
  }), s("password", (e, [t]) => {
    if (e !== t)
      return "The passwords do not match.";
  });
}, U = (e, t) => {
  z(), e.mixin({
    data: function() {
      return {
        get cleanObject() {
          return t.cleanObject || !1;
        }
      };
    }
  });
}, G = {
  install: U
};
let f = null;
typeof window < "u" ? f = window.Vue : typeof global < "u" && (f = global.Vue);
f && f.use(G);
export {
  Q as V,
  W as _,
  I as m,
  G as p,
  M as v
};
