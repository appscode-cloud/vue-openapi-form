import { v as model } from './model-a2dbe01c.js';
import { v as validation } from './validation-de903b65.js';
import './es.object.to-string-cda2fcde.js';
import { f as fold } from './fold-77a567b4.js';
import { t as tabs } from './tabs-1fa86cb8.js';
import { _ as __vue_normalize__ } from './normalize-c7e3979a.js';

var script = {
  props: {
    schema: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isRoot: {
      type: Boolean,
      default: false
    },
    errors: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  mixins: [model, fold, tabs, validation],
  components: {
    "object-form": function objectForm() {
      return import('./ObjectForm-033481a2.js');
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
                                return _vm.toggleFold()
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
          ]
        }
      }
    ])
  })
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
  

  
  var __vue_component__ = __vue_normalize__(
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

export default __vue_component__;
