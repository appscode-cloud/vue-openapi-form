export default {
  data() {
    return {
      activeTab: "form",
    };
  },
  components: {
    Tabs: () =>
      import("../components/Tabs.vue").then((module) => module.default),
    JsonForm: () =>
      import("../components/JsonForm.vue").then((module) => module.default),
    YamlForm: () =>
      import("../components/YamlForm.vue").then((module) => module.default),
  },
};
