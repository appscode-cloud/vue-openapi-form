import { extend, setInteractionMode } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

export const initVeeValidate = function() {
  setInteractionMode("aggressive");

  extend("required", { ...required, message: en.messages.required });
  extend("requiredArray", {
    validate(value) {
      console.log({ value });
      if (value.length < 2)
        return "{_field_} array must contain more than one element";
      else return true;
    }
  });
};
