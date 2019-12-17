import { extend, configure } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

const config = {
  bails: true,
  skipOptional: true,
  mode: "aggressive",
  useConstraintAttrs: true,
  inject: false
};

export const initVeeValidate = function() {
  configure(config);

  extend("required", { ...required, message: en.messages.required });
  extend("requiredArray", {
    validate(value) {
      // console.log({ value });
      if (value.length < 2)
        return "{_field_} array must contain more than one element";
      else return true;
    }
  });
  extend("requiredOb", {
    validate(value) {
      if (Object.keys(value).length === 0)
        return "{_field_} object must not be empty";
      else return true;
    }
  });
};
