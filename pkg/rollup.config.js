import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs"; // Convert CommonJS modules to ES6
import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import buble from "@rollup/plugin-buble"; // Transpile/polyfill with reasonable browser support
export default {
  input: "src/wrapper.js", // Path relative to package.json
  output: {
    name: "VueOpenapiForm",
    exports: "named"
  },
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        "vue-codemirror": ["codemirror"]
      }
    }),

    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**",
      plugins: [
        "@babel/plugin-external-helpers",
        "@babel/plugin-transform-runtime"
      ]
    }),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function,
    }),
    buble() // Transpile to ES5
  ]
};
