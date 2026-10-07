import { resolveComponent as n, openBlock as e, createElementBlock as o, createVNode as s, createCommentVNode as a, defineComponent as i } from "vue";
import { X as d, Check as p } from "@lucide/vue";
import { _ as l } from "./entry-Cq-y0fYi.js";
const m = i({
  name: "RightWrongSigns",
  components: { Check: p, X: d },
  props: {
    valid: {
      type: Boolean,
      default: !0
    },
    invalid: {
      type: Boolean,
      default: !0
    }
  }
}), u = {
  key: 0,
  class: "vof-status-ok"
}, _ = {
  key: 1,
  class: "vof-status-bad"
};
function f(t, h, k, v, g, C) {
  const r = n("Check"), c = n("X");
  return e(), o("div", null, [
    t.valid ? (e(), o("span", u, [
      s(r, { "aria-hidden": "true" })
    ])) : a("", !0),
    t.invalid ? (e(), o("span", _, [
      s(c, { "aria-hidden": "true" })
    ])) : a("", !0)
  ]);
}
const X = /* @__PURE__ */ l(m, [["render", f]]);
export {
  X as default
};
