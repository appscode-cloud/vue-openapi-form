import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

const alias = {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
};

// Demo app (npm run dev / npm run build): Tailwind + the design-system theme come from src/assets/vof-demo.css
const demoConfig = defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: { alias },
  build: {
    outDir: 'dist-app',
  },
});

// Library (npm run pkg): the consuming app provides the design system, so its styles and state are shared
const libConfig = defineConfig({
  plugins: [vue()],
  resolve: { alias },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/entry.js', import.meta.url)),
      name: 'VueOpenapiForm',
      // the proper extensions are added: vue-openapi-form.js and vue-openapi-form.umd.cjs
      fileName: 'vue-openapi-form',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [
        'vue',
        'vee-validate',
        '@vee-validate/rules',
        'floating-vue',
        'js-yaml',
        '@lucide/vue',
        /^@ac-design\/design-system/,
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'vee-validate': 'VeeValidate',
          '@vee-validate/rules': 'VeeValidateRules',
          'floating-vue': 'FloatingVue',
          'js-yaml': 'jsyaml',
          '@lucide/vue': 'LucideVue',
          '@ac-design/design-system': 'AcDesignSystem',
          '@ac-design/design-system/editor': 'AcDesignSystemEditor',
        },
      },
    },
    copyPublicDir: false,
  },
});

export default defineConfig(({ command }) => {
  if (command === 'build' && process.env.MODE === 'lib') return libConfig;
  return demoConfig;
});
