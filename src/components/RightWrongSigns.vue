<template>
  <div>
    <button v-if="valid" class="button is-information is-success">
      <i class="fa fa-check"></i>
    </button>
    <button v-if="invalid" class="button is-information is-warning">
      <i class="fa fa-times"></i>
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RightWrongSigns',
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
