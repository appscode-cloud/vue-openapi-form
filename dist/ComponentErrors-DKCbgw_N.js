import { resolveComponent as s, resolveDirective as i, withDirectives as l, openBlock as a, createElementBlock as p, createVNode as c, createTextVNode as h, toDisplayString as o, vShow as d, defineComponent as m } from "vue";
import { TriangleAlert as u } from "@lucide/vue";
import { _ as f } from "./entry-Do6WmZZA.js";
const v = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>', g = m({
  name: "ComponentErrors",
  components: { TriangleAlert: u },
  props: {
    errors: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    tooltipObj() {
      return {
        content: this.htmlContent,
        html: !0
      };
    },
    htmlContent() {
      let r = "<ul class='vof-errors-wrapper'>";
      return this.errors.forEach((e) => {
        r += `<li class='vof-error-element'>${v}<span>${e}</span></li>`;
      }), r += "</ul>", r;
    }
  }
}), w = { class: "vof-error-count" };
function _(r, e, C, k, $, A) {
  const t = s("TriangleAlert"), n = i("tooltip");
  return l((a(), p("span", w, [
    c(t, { "aria-hidden": "true" }),
    h(" Error in " + o(r.errors.length) + " field" + o(r.errors.length > 1 ? "s" : ""), 1)
  ])), [
    [d, r.errors.length > 0],
    [n, r.tooltipObj]
  ]);
}
const y = /* @__PURE__ */ f(g, [["render", _]]);
export {
  y as default
};
