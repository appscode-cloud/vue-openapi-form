<template>
  <div>
    <span v-if="valid" class="vof-status-ok">
      <Check aria-hidden="true" />
    </span>
    <span v-if="invalid" class="vof-status-bad">
      <X aria-hidden="true" />
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Check, X } from 'lucide-vue-next';

export default defineComponent({
  name: 'RightWrongSigns',
  components: { Check, X },
  props: {
    valid: {
      type: Boolean,
      default: true,
    },
    invalid: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
