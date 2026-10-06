import { defineComponent as e } from "vue";
const s = e({
  data() {
    return {
      isMedium: !1
    };
  },
  mounted() {
    document.querySelector(".vue-openapi-form").classList.contains("is-medium") && (this.isMedium = !0);
  }
});
export {
  s
};
