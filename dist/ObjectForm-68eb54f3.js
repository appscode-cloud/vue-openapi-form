import { w as wellKnownSymbol, f as createNonEnumerableProperty, $, i as require$$0, m as model, v as validation } from './validation-bc9757cc.js';
import './es.object.to-string-46945359.js';
import { f as fold } from './fold-77a567b4.js';
import { _ as __vue_normalize__ } from './normalize-c7e3979a.js';
import { n as nativeObjectCreate } from './object-create-f806414b.js';

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, nativeObjectCreate(null));
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $find = require$$0.find;


var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) { Array(1)[FIND](function () { SKIPS_HOLES = false; }); }

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

var script = {
  props: {
    properties: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    title: {
      type: String,
      default: ""
    },
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    required: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  mixins: [model, fold, validation],
  components: {
    "vue-openapi-form": function vueOpenapiForm() {
      return import('./VueOpenapiForm-7dacdc23.js');
    },
    "array-input": function arrayInput() {
      return import('./ArrayInput-7943ab0b.js');
    },
    "simple-input": function simpleInput() {
      return import('./SimpleInput-56886dc4.js');
    },
    "key-value-pairs": function keyValuePairs() {
      return import('./KeyValuePairs-a5b3b7cb.js');
    }
  },
  methods: {
    isRequired: function isRequired(key) {
      var item = this.required.find(function (itm) {
        return itm === key;
      });
      return item ? true : false;
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
  return _c(
    "div",
    { class: { "is-hidden": _vm.isSelfFolded } },
    [
      _vm._l(Object.keys(_vm.properties), function(key) {
        return [
          _vm.properties[key].type === "object"
            ? _c("validation-provider", {
                key: key,
                attrs: {
                  rules: _vm.ruleObject(_vm.isRequired(key)),
                  name: "" + _vm.properties[key].title,
                  vid:
                    _vm.properties[key].title.replace(/ /g, "-") + "-provider",
                  slim: ""
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var errors = ref.errors;
                        return [
                          _c("vue-openapi-form", {
                            attrs: {
                              type: _vm.properties[key].type,
                              schema: _vm.properties[key],
                              errors: errors
                            },
                            model: {
                              value: _vm.modelData[key],
                              callback: function($$v) {
                                _vm.$set(_vm.modelData, key, $$v);
                              },
                              expression: "modelData[key]"
                            }
                          })
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
            : _vm.properties[key].type === "key-value-pairs"
            ? _c("validation-provider", {
                key: key,
                attrs: {
                  rules: _vm.ruleObject(_vm.isRequired(key)),
                  name: "" + _vm.properties[key].title,
                  vid:
                    _vm.properties[key].title.replace(/ /g, "-") + "-provider",
                  slim: ""
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var errors = ref.errors;
                        return [
                          _c("key-value-pairs", {
                            attrs: {
                              type: _vm.properties[key].type,
                              schema: _vm.properties[key],
                              errors: errors
                            },
                            model: {
                              value: _vm.modelData[key],
                              callback: function($$v) {
                                _vm.$set(_vm.modelData, key, $$v);
                              },
                              expression: "modelData[key]"
                            }
                          })
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
            : _vm.properties[key].type === "array"
            ? _c("validation-provider", {
                key: key,
                attrs: {
                  rules: _vm.ruleArray(_vm.isRequired(key)),
                  name: "" + _vm.properties[key].title,
                  vid:
                    _vm.properties[key].title.replace(/ /g, "-") + "-provider",
                  slim: ""
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var errors = ref.errors;
                        return [
                          _c("array-input", {
                            attrs: {
                              type: _vm.properties[key].type,
                              schema: _vm.properties[key],
                              errors: errors
                            },
                            model: {
                              value: _vm.modelData[key],
                              callback: function($$v) {
                                _vm.$set(_vm.modelData, key, $$v);
                              },
                              expression: "modelData[key]"
                            }
                          })
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
            : _c("validation-provider", {
                key: key,
                attrs: {
                  rules: _vm.ruleString(_vm.isRequired(key)),
                  name: "" + _vm.properties[key].title,
                  vid:
                    _vm.properties[key].title.replace(/ /g, "-") + "-provider",
                  slim: ""
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(validationOb) {
                        return [
                          _c("simple-input", {
                            key: key,
                            attrs: {
                              type: _vm.properties[key].type,
                              schema: _vm.properties[key],
                              validationOb: validationOb
                            },
                            model: {
                              value: _vm.modelData[key],
                              callback: function($$v) {
                                _vm.$set(_vm.modelData, key, $$v);
                              },
                              expression: "modelData[key]"
                            }
                          })
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
        ]
      })
    ],
    2
  )
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
