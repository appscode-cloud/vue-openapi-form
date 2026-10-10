import './assets/vof-demo.css';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';

import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { registerValidationRules } from '@/plugins/vee-validate';

registerValidationRules();

createApp(App).use(store).mount('#app');
