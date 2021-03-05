export default {
  data() {
    return {
      isMedium: false,
    };
  },
  mounted() {
    const form = document.querySelector(".vue-openapi-form");
    if (form.classList.contains("is-medium")) {
      this.isMedium = true;
    }
  },
};
