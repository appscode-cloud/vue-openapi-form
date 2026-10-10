<template>
  <!-- Shown on hover of the block header (group/header), and always on the root form -->
  <div
    class="max-w-full transition-[opacity,visibility] duration-300 ease-in-out motion-reduce:transition-none"
    :class="
      showTab
        ? 'visible opacity-100'
        : 'invisible opacity-0 group-hover/header:visible group-hover/header:opacity-100'
    "
  >
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
import { AcSegmentedControl } from '@ac-design/design-system';

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
      // Text-only: the labels say it all, and YAML and JSON would share one icon
      options: [
        { value: 'form', label: 'Form' },
        { value: 'yaml', label: 'YAML' },
        { value: 'json', label: 'JSON' },
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
