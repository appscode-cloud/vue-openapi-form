<template>
  <div>
    <span v-if="valid" class="inline-flex size-4 items-center text-success">
      <Check aria-hidden="true" />
    </span>
    <span v-if="invalid" class="inline-flex size-4 items-center text-warning">
      <X aria-hidden="true" />
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Check, X } from '@lucide/vue';

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
