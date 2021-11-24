// rollup.config.js
import fs from "fs";
import path from "path";
import vue from "rollup-plugin-vue";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";
import minimist from "minimist";

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs
  .readFileSync("./.browserslistrc")
  .toString()
  .split("\n")
  .filter((entry) => entry && entry.substring(0, 2) !== "ie");

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, "");

const baseConfig = {
  input: "src/entry.js",
  plugins: {
    preVue: [
      json(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      alias({
        resolve: [".js", ".jsx", ".ts", ".tsx", ".vue"],
        entries: {
          "@": path.resolve(projectRoot, "src"),
        },
      }),
      resolve(),
      commonjs(),
      scss({ output: "dist/css/vue-openapi-form.css" }),
    ],
    vue: {
      css: false,
      template: {
        isProduction: true,
      },
    },
    babel: {
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime", {}],
    },
  },
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  "vue",
  "@babel/runtime/helpers/get",
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: "Vue",
  "/@babel/runtime/": "BabelRuntime",
};

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === "es") {
  const esConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      dir: "dist",
      format: "esm",
      name: "VueOpenapiForm",
      entryFileNames: "vue-openapi-form.esm.js",
      exports: "named",
      globals,
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      babel({
        ...baseConfig.plugins.babel,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: esbrowserslist,
            },
          ],
        ],
      }),
      terser(),
    ],
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === "cjs") {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      dir: "dist",
      format: "cjs",
      name: "VueOpenapiForm",
      entryFileNames: "vue-openapi-form.[format].js",
      exports: "named",
      globals,
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: true,
        },
      }),
      babel({ ...baseConfig.plugins.babel }),
      terser(),
    ],
  };
  buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === "iife") {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: "dist/vue-openapi-form.min.js",
      inlineDynamicImports: true,
      format: "iife",
      name: "VueOpenapiForm",
      exports: "named",
      globals,
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      babel({ ...baseConfig.plugins.babel }),
      terser(),
    ],
  };
  buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;
