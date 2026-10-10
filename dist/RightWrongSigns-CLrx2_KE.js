import { resolveComponent as o, openBlock as e, createElementBlock as n, createVNode as s, createCommentVNode as i, defineComponent as c } from "vue";
import { X as l, Check as p } from "@lucide/vue";
import { _ as d } from "./entry-CF8Lj2uG.js";
const m = c({
  name: "RightWrongSigns",
  components: { Check: p, X: l },
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
}), _ = {
  key: 0,
  class: "inline-flex size-4 items-center text-success"
}, u = {
  key: 1,
  class: "inline-flex size-4 items-center text-warning"
};
function f(t, h, g, k, v, C) {
  const r = o("Check"), a = o("X");
  return e(), n("div", null, [
    t.valid ? (e(), n("span", _, [
      s(r, { "aria-hidden": "true" })
    ])) : i("", !0),
    t.invalid ? (e(), n("span", u, [
      s(a, { "aria-hidden": "true" })
    ])) : i("", !0)
  ]);
}
const $ = /* @__PURE__ */ d(m, [["render", f]]);
export {
  $ as default
};
