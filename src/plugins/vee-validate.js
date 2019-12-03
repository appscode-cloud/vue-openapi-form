import { extend, setInteractionMode } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

export const initVeeValidate = function() {
  setInteractionMode("aggressive");

  extend("required", { ...required, message: en.messages.required });
};
