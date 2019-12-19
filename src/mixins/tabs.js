export default {
  data() {
    return {
      formShow: true
    };
  },
  components: {
    tabs: () => import("../components/Tabs.vue"),
    "json-form": () => import("../components/JsonForm.vue")
  }
};
