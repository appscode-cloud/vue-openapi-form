import { defineRule } from 'vee-validate';
import { required, email, image } from '@vee-validate/rules';
import { getCurrentInstance } from 'vue';
export const registerValidationRules = function () {
  defineRule('required', required);
  defineRule('requiredArray', (value) => {
    if (value.length < 2)
      return '{_field_} array must contain more than one element';
    else return true;
  });
  defineRule('requiredOb', (value) => {
    if (Object.keys(value).length === 0)
      return '{_field_} object must not be empty';
    else return true;
  });
  defineRule('email', email);
  defineRule('image', image);
  defineRule('private_username', async (value) => {
    const { app } = getCurrentInstance();
    const axios = app?.appContext.config.globalProperties.$axios;

    const len = value.length;
    if (len < 5 || len > 40)
      return '{_field_} length must be between 5 and 40 characters';
    else {
      // make form data for backend
      const formData = new FormData();
      formData.set('user_name', value);
      // fetch the response
      const { data } = await axios.post('/user/validate/username', formData);
      if (!data.valid) return data.message;
      else return true;
    }
  });
  defineRule('password', (value, [other]) => {
    if (value !== other) {
      return 'The passwords do not match.';
    }
  });
};
