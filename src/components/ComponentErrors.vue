<template>
  <span v-show="errors.length > 0" class="is-warning" v-tooltip="errors[0]">
   <i class="fa fa-warning"></i>
    error in {{ errors.length }} filds
  </span>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
      default: () => []
    }
  }
};
</script>
