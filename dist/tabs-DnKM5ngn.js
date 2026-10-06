import { defineComponent as e, defineAsyncComponent as o } from "vue";
const m = e({
  components: {
    Tabs: o(
      () => import("./Tabs-GSZCVuZM.js").then((t) => t.default)
    ),
    JsonForm: o(
      () => import("./JsonForm-DwCycdll.js").then((t) => t.default)
    ),
    YamlForm: o(
      () => import("./YamlForm-9EaWJGqc.js").then((t) => t.default)
    )
  },
  data() {
    return {
      activeTab: "form"
    };
  }
});
export {
  m as t
};
