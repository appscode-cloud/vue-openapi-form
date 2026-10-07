import { defineComponent as e, defineAsyncComponent as o } from "vue";
const m = e({
  components: {
    Tabs: o(
      () => import("./Tabs-ClEj88Vk.js").then((t) => t.default)
    ),
    JsonForm: o(
      () => import("./JsonForm-CPNkKFzD.js").then((t) => t.default)
    ),
    YamlForm: o(
      () => import("./YamlForm-DvPq267y.js").then((t) => t.default)
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
