(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(
        exports,
        require("@/mixins/model.js"),
        require("@/mixins/fold.js"),
        require("@/mixins/tabs.js"),
        require("@/mixins/validation.js"),
        require("vue-runtime-helpers")
      )
    : typeof define === "function" && define.amd
    ? define([
        "exports",
        "@/mixins/model.js",
        "@/mixins/fold.js",
        "@/mixins/tabs.js",
        "@/mixins/validation.js",
        "vue-runtime-helpers"
      ], factory)
    : ((global = global || self),
      factory(
        (global.VueOpenapiForm = {}),
        global.model_js,
        global.fold,
        global.tabs,
        global.validation,
        global.vueRuntimeHelpers
      ));
})(this, function(
  exports,
  model_js,
  fold,
  tabs,
  validation,
  vueRuntimeHelpers
) {
  "use strict";

  fold = fold && fold.hasOwnProperty("default") ? fold["default"] : fold;
  tabs = tabs && tabs.hasOwnProperty("default") ? tabs["default"] : tabs;
  validation =
    validation && validation.hasOwnProperty("default")
      ? validation["default"]
      : validation;

  //

  var script = {
    props: {
      schema: {
        type: Object,
        default: function() {
          return {};
        }
      },
      value: {
        type: Object,
        default: function() {
          return {};
        }
      },
      isRoot: {
        type: Boolean,
        default: false
      },
      errors: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },

    mixins: [model_js.model, fold, tabs, validation],

    components: {
      "object-form": function() {
        return import("@/components/ObjectForm");
      }
    }
  };

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("validation-observer", {
      ref: _vm.schema.title.replace(/ /g, "-") + "-observer",
      staticClass: "vue-schema-form-object",
      attrs: {
        tag: "form",
        vid: _vm.schema.title.replace(/ /g, "-") + "-observer"
      },
      scopedSlots: _vm._u([
        {
          key: "default",
          fn: function(ref) {
            var observerErrors = ref.errors;
            return [
              _c("div", { staticClass: "level" }, [
                _c("div", { staticClass: "level-left" }, [
                  _c(
                    "h4",
                    { staticClass: "title is-5" },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.schema.title || "Array Item Description") +
                          "\n        "
                      ),
                      _vm._v(" "),
                      _c("component-errors", {
                        attrs: {
                          errors: _vm.errors.concat(
                            _vm.calcObserverError(observerErrors)
                          )
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "level-right" },
                  [
                    _c("tabs", {
                      model: {
                        value: _vm.formShow,
                        callback: function($$v) {
                          _vm.formShow = $$v;
                        },
                        expression: "formShow"
                      }
                    }),
                    _vm._v(" "),
                    !_vm.isRoot
                      ? _c("div", { staticClass: "buttons" }, [
                          _c(
                            "button",
                            {
                              staticClass: "button",
                              attrs: { disabled: !_vm.formShow },
                              on: {
                                click: function($event) {
                                  $event.preventDefault();
                                  return _vm.toggleFold();
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.isFolded ? "Expand" : "Collapse") +
                                  "\n        "
                              )
                            ]
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm.formShow
                ? _c("object-form", {
                    attrs: {
                      properties: _vm.schema.properties,
                      title: _vm.schema.title,
                      required: _vm.schema.required,
                      type: _vm.schema.type,
                      isSelfFolded: _vm.isRoot ? false : _vm.isFolded
                    },
                    model: {
                      value: _vm.modelData,
                      callback: function($$v) {
                        _vm.modelData = $$v;
                      },
                      expression: "modelData"
                    }
                  })
                : _c("json-form", {
                    model: {
                      value: _vm.modelData,
                      callback: function($$v) {
                        _vm.modelData = $$v;
                      },
                      expression: "modelData"
                    }
                  })
            ];
          }
        }
      ])
    });
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) {
      return;
    }
    install.installed = true;
    Vue.component("VueOpenapiForm", __vue_component__);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  exports.default = __vue_component__;
  exports.install = install;

  Object.defineProperty(exports, "__esModule", { value: true });
});
