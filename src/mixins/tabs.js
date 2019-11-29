export default {
  data() {
    return {
      formShow: true
    };
  },
  components: {
    tabs: () => import("@/components/Tabs"),
    "json-form": () => import("@/components/JsonForm")
  }
};
