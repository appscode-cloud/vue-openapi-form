import { defineComponent as e, defineAsyncComponent as o } from "vue";
const m = e({
  components: {
    Tabs: o(
      () => import("./Tabs-Bc0gwwLM.js").then((t) => t.default)
    ),
    JsonForm: o(
      () => import("./JsonForm-DA10DYcg.js").then((t) => t.default)
    ),
    YamlForm: o(
      () => import("./YamlForm-D7T2O1nb.js").then((t) => t.default)
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
