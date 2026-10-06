<template>
  <span v-show="errors.length > 0" v-tooltip="tooltipObj" class="vof-error-count">
    <TriangleAlert aria-hidden="true" />
    Error in {{ errors.length }} field{{ errors.length > 1 ? 's' : '' }}
  </span>
</template>

<script>
import { defineComponent } from 'vue';
import { TriangleAlert } from 'lucide-vue-next';

// Lucide "triangle-alert", inlined because the tooltip content is an HTML string
const warningIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>';

export default defineComponent({
  name: 'ComponentErrors',
  components: { TriangleAlert },
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    tooltipObj() {
      return {
        content: this.htmlContent,
        html: true,
      };
    },
    htmlContent() {
      let str = "<ul class='vof-errors-wrapper'>";
      this.errors.forEach((error) => {
        str += `<li class='vof-error-element'>${warningIcon}<span>${error}</span></li>`;
      });
      str += '</ul>';
      return str;
    },
  },
});
</script>
