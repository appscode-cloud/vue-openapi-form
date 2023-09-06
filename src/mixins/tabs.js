import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    Tabs: defineAsyncComponent(() =>
      import('../components/Tabs.vue').then((module) => module.default)
    ),
    JsonForm: defineAsyncComponent(() =>
      import('../components/JsonForm.vue').then((module) => module.default)
    ),
    YamlForm: defineAsyncComponent(() =>
      import('../components/YamlForm.vue').then((module) => module.default)
    ),
  },
  data() {
    return {
      activeTab: 'form',
    };
  },
});
