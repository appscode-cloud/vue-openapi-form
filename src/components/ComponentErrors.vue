<template>
  <p v-show="errors.length > 0" class="is-warning">
    <span class="warning"><i class="fa fa-warning"></i></span>
    {{ errors[0] }}
  </p>
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
