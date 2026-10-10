import { defineComponent as r, defineAsyncComponent as t } from "vue";
const m = r({
  components: {
    Tabs: t(
      () => import("./Tabs-CfTdShhK.js").then((e) => e.default)
    ),
    JsonForm: t(
      () => import("./JsonForm-TaAt9Ak5.js").then((e) => e.default)
    ),
    YamlForm: t(
      () => import("./YamlForm-CEIVhm8k.js").then((e) => e.default)
    )
  },
  data() {
    return {
      activeTab: "form"
    };
  }
}), o = [
  "relative z-[1] pl-5",
  "after:absolute after:top-[25px] after:left-[27px] after:-z-[1] after:h-[calc(100%-50px)] after:w-0 after:border-l after:border-dashed after:border-border",
  "before:absolute before:bottom-3 before:left-[22px] before:-z-[1] before:size-3 before:rounded-full before:bg-border"
].join(" "), n = "before:hidden after:hidden", a = "group/header mb-1 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-1", f = "m-0 flex min-w-0 items-center text-base font-medium text-heading", d = "mr-2.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted [&>svg]:size-2.5", s = [
  "grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-start gap-4",
  "[&>[data-vof-single]]:ml-0",
  "[&>[data-vof-nested]]:pl-0 [&>[data-vof-nested]]:after:left-2 [&>[data-vof-nested]]:before:left-1"
].join(" "), l = "mt-1 flex shrink-0 items-center gap-2", b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  foldIcon: d,
  header: a,
  keyValueRow: s,
  nested: o,
  nestedFolded: n,
  rowActions: l,
  title: f
}, Symbol.toStringTag, { value: "Module" }));
export {
  b as c,
  m as t
};
