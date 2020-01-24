<template>
  <span v-show="errors.length > 0" class="is-warning" v-tooltip="tooltipObj">
    <i class="fa fa-warning"></i>
    Error in {{ errors.length }} field{{ errors.length > 1 ? "s" : "" }}
  </span>
</template>

<script>
export default {
  name: "component-errors",
  props: {
    errors: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    tooltipObj() {
      return {
        content: this.htmlContent,
        html: true,
        classes: ["is-errors-tooltip"],
        targetClasses: ["is-warning"]
      };
    },
    htmlContent() {
      let str = "<ul class='errors-wrapper'>";
      this.errors.forEach(error => {
        str += `<li class='error-element'><span class="pr-5"><i class="fa fa-warning"></i></span>${error}</li>`;
      });
      str += "</ul>";
      return str;
    }
  }
};
</script>
