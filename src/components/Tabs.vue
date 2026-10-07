<template>
  <div class="vof-tabs" :class="{ 'is-visible': showTab }">
    <ac-segmented-control
      v-model="activeTab"
      size="small"
      label="Editor mode"
      :options="options"
      @change="onChange"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { AcSegmentedControl } from '@mohin4/design-system';
import { Code, FileText } from '@lucide/vue';

export default defineComponent({
  name: 'Tabs',
  components: { AcSegmentedControl },
  props: {
    modelValue: {
      type: String,
      default: 'form',
    },
    showTab: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],

  data() {
    return {
      activeTab: 'form',
      options: [
        { value: 'form', label: 'Form', icon: FileText },
        { value: 'yaml', label: 'YAML', icon: Code },
        { value: 'json', label: 'JSON', icon: Code },
      ],
    };
  },

  methods: {
    onChange(tab) {
      this.$emit('update:modelValue', tab);
    },
  },
});
</script>
