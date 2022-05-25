import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { registerValidationRules } from '@/plugins/vee-validate';
import FloatingVue from 'floating-vue';

import { useMonaco } from './plugins/monaco';
useMonaco();

registerValidationRules();

createApp(App).use(store).use(FloatingVue).mount('#app');
