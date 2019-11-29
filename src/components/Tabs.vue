<template>
  <div class="tabs is-toggle form-json-toggle-tabs">
    <ul>
      <li :class="{ 'is-active': formShow }">
        <a @click.prevent="showForm()">
          <span class="icon is-small"
            ><i class="fa fa-edit" aria-hidden="true"></i
          ></span>
          <span>Form</span>
        </a>
      </li>
      <li :class="{ 'is-active': !formShow }">
        <a @click.prevent="showJson()">
          <span class="icon is-small"
            ><i class="fa fa-code" aria-hidden="true"></i
          ></span>
          <span>JSON</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formShow: {
        type: Boolean,
        default: true
      }
    };
  },

  methods: {
    showForm() {
      this.formShow = true;
      this.$emit("input", true);
    },
    showJson() {
      this.formShow = false;
      this.$emit("input", false);
    }
  }
};
</script>
