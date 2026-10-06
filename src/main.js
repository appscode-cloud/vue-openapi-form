import './assets/vof-demo.css';
import './assets/vof-next.css';
import 'floating-vue/dist/style.css';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';

import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { registerValidationRules } from '@/plugins/vee-validate';
import FloatingVue from 'floating-vue';

registerValidationRules();

createApp(App).use(store).use(FloatingVue).mount('#app');
