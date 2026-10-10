import { resolveComponent as s, openBlock as r, createBlock as d, withCtx as i, createElementVNode as t, createVNode as l, createTextVNode as f, toDisplayString as o, createElementBlock as a, Fragment as u, renderList as g, createCommentVNode as _, defineComponent as h } from "vue";
import { AcTooltip as x } from "@ac-design/design-system";
import { TriangleAlert as k } from "@lucide/vue";
import { _ as y } from "./entry-CF8Lj2uG.js";
const C = h({
  name: "ComponentErrors",
  components: { AcTooltip: x, TriangleAlert: k },
  props: {
    errors: {
      type: Array,
      default: () => []
    }
  }
}), v = {
  tabindex: "0",
  class: "inline-flex items-center gap-1 rounded-6 pl-2 text-sm font-normal italic text-danger focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring [&>svg]:size-3.5"
}, A = { class: "m-0 list-none p-0" };
function E(e, T, b, N, V, $) {
  const n = s("TriangleAlert"), c = s("ac-tooltip");
  return e.errors.length > 0 ? (r(), d(c, {
    key: 0,
    placement: "top"
  }, {
    content: i(() => [
      t("ul", A, [
        (r(!0), a(u, null, g(e.errors, (p, m) => (r(), a("li", {
          key: m,
          class: "flex items-start gap-1.5 py-0.5"
        }, [
          l(n, {
            class: "mt-0.5 size-3.5 shrink-0",
            "aria-hidden": "true"
          }),
          t("span", null, o(p), 1)
        ]))), 128))
      ])
    ]),
    default: i(() => [
      t("span", v, [
        l(n, { "aria-hidden": "true" }),
        f(" Error in " + o(e.errors.length) + " field" + o(e.errors.length > 1 ? "s" : ""), 1)
      ])
    ]),
    _: 1
  })) : _("", !0);
}
const F = /* @__PURE__ */ y(C, [["render", E]]);
export {
  F as default
};
