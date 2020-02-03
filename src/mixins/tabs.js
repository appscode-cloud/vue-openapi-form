import Tabs from "../components/Tabs.vue";
import JsonForm from "../components/JsonForm.vue";
import YamlForm from "../components/YamlForm.vue";

export default {
  data() {
    return {
      activeTab: "form"
    };
  },
  components: {
    Tabs,
    JsonForm,
    YamlForm
  }
};
