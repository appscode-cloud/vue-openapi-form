export default {
  data() {
    return {
      formShow: true
    };
  },
  components: {
    tabs: () => import("@appscode/vue-openapi-form/src/components/Tabs"),
    "json-form": () => import("@appscode/vue-openapi-form/src/components/JsonForm")
  }
};
