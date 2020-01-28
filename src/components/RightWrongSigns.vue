<template>
  <div>
    <span class="icon is-small is-right is-success" v-if="valid">
      <i class="fa fa-check"></i>
    </span>
    <span class="icon is-small is-right is-warning" v-if="invalid">
      <i class="fa fa-times"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "right-wrong-signs",
  props: {
    valid: {
      type: Boolean,
      default: true
    },
    invalid: {
      type: Boolean,
      default: true
    }
  }
};
</script>
