<template>
  <ac-tooltip v-if="errors.length > 0" placement="top">
    <span
      tabindex="0"
      class="inline-flex items-center gap-1 rounded-6 pl-2 text-sm font-normal italic text-danger focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring [&>svg]:size-3.5"
    >
      <TriangleAlert aria-hidden="true" />
      Error in {{ errors.length }} field{{ errors.length > 1 ? 's' : '' }}
    </span>
    <template #content>
      <ul class="m-0 list-none p-0">
        <li
          v-for="(error, idx) in errors"
          :key="idx"
          class="flex items-start gap-1.5 py-0.5"
        >
          <TriangleAlert class="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          <span>{{ error }}</span>
        </li>
      </ul>
    </template>
  </ac-tooltip>
</template>

<script>
import { defineComponent } from 'vue';
import { AcTooltip } from '@ac-design/design-system';
import { TriangleAlert } from '@lucide/vue';

export default defineComponent({
  name: 'ComponentErrors',
  components: { AcTooltip, TriangleAlert },
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
