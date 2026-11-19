import './assets/vof-demo.css';
import '@fontsource-variable/roboto';
import '@fontsource-variable/google-sans-flex/opsz.css';
import '@fontsource-variable/jetbrains-mono';

import { createApp } from 'vue';
import App from './App.vue';
import { registerValidationRules } from '@/plugins/vee-validate';

registerValidationRules();

createApp(App).mount('#app');
