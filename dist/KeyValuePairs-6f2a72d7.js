import { v as model } from './model-da405e97.js';
import { v as validation } from './validation-3731607b.js';
import './es.object.to-string-73027901.js';
import { t as tabs } from './tabs-6c5bb12a.js';
import { _ as __vue_normalize__ } from './normalize-c7e3979a.js';
import './object-create-f941e0c7.js';
import { a as _defineProperty, _ as _regeneratorRuntime } from './defineProperty-9169849f.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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
    errors: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  mixins: [model, tabs, validation],
  components: {
    "vue-openapi-form": function vueOpenapiForm() {
      return import('./VueOpenapiForm-def66cb2.js');
    },
    "array-input": function arrayInput() {
      return import('./ArrayInput-ab250694.js');
    },
    "simple-input": function simpleInput() {
      return import('./SimpleInput-ca27d170.js');
    },
    "key-value-pairs": function keyValuePairs() {
      return Promise.resolve().then(function () { return KeyValuePairs; });
    }
  },
  data: function data() {
    return {
      newData: null,
      updatePass: 0,
      keyValueArray: null,
      newKey: "",
      newValue: null
    };
  },
  computed: {
    additionalProperties: function additionalProperties() {
      return this.schema.additionalProperties || {};
    }
  },
  methods: {
    initKeyValueArray: function initKeyValueArray() {
      var _this = this;

      return Object.keys(this.value).map(function (key) {
        return {
          key: key,
          value: _this.value[key]
        };
      });
    },
    reconstructObject: function reconstructObject(arr) {
      var result = {};
      arr.forEach(function (item) {
        result = Object.assign({}, _objectSpread({}, result), _defineProperty({}, "".concat(item.key), item.value));
      });
      return result;
    },
    addProp: function addProp() {
      var observerRef, isValid;
      return _regeneratorRuntime.async(function addProp$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              observerRef = "".concat(this.schema.title.replace(/ /g, "-"), "-new");
              _context.next = 3;
              return _regeneratorRuntime.awrap(this.$refs[observerRef].validate());

            case 3:
              isValid = _context.sent;

              if (isValid) {
                this.keyValueArray.push({
                  key: this.newKey,
                  value: this.newValue
                });
                this.newKey = "";
                this.newValue = null;
                this.updatePass += 1;
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    deleteProp: function deleteProp(index) {
      this.$delete(this.keyValueArray, index);
      this.updatePass += 1;
    }
  },
  created: function created() {
    this.keyValueArray = this.initKeyValueArray();
  },
  watch: {
    keyValueArray: {
      immediate: true,
      deep: true,
      handler: function handler(newVal, oldVal) {
        if (oldVal !== null && oldVal !== undefined) {
          this.modelData = this.reconstructObject(newVal);
        }
      }
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
    key: _vm.updatePass,
    ref: _vm.schema.title.replace(/ /g, "-") + "-observer",
    staticClass: "vue-schema-form-key-value-pairs",
    attrs: {
      tag: "div",
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
                        _vm._s(_vm.schema.title || "Array Item Description")
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
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _vm.formShow
              ? [
                  _vm._l(_vm.keyValueArray, function(prop, index) {
                    return _c(
                      "div",
                      { key: index, staticClass: "columns is-multiline" },
                      [
                        _c("div", { staticClass: "column is-3" }, [
                          _c(
                            "div",
                            { staticClass: "field" },
                            [
                              _c("label", { staticClass: "label" }, [
                                _vm._v("Key")
                              ]),
                              _vm._v(" "),
                              _c("validation-provider", {
                                staticClass: "control has-icons-right",
                                attrs: {
                                  vid:
                                    _vm.schema.title.replace(/ /g, "-") +
                                    "-key-" +
                                    (index + 1) +
                                    "-provider",
                                  rules: "required",
                                  name:
                                    _vm.schema.title.replace(/ /g, "-") +
                                    "-key-" +
                                    (index + 1),
                                  tag: "div"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var errors = ref.errors;
                                        var valid = ref.valid;
                                        var invalid = ref.invalid;
                                        var validated = ref.validated;
                                        return [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: prop.key,
                                                expression: "prop.key"
                                              }
                                            ],
                                            staticClass: "input",
                                            class: {
                                              "is-success": validated && valid,
                                              "is-danger": validated && invalid
                                            },
                                            attrs: { type: "text" },
                                            domProps: { value: prop.key },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  prop,
                                                  "key",
                                                  $event.target.value
                                                );
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          validated
                                            ? _c("right-wrong-signs", {
                                                attrs: {
                                                  valid: valid,
                                                  invalid: invalid
                                                }
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c("component-errors", {
                                            attrs: { errors: errors }
                                          })
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "column is-8" },
                          [
                            _vm.additionalProperties.type === "object"
                              ? [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: _vm.ruleObject(true),
                                      name:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-value-" +
                                        (index + 1),
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-value-" +
                                        (index + 1) +
                                        "-provider",
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
                                                  schema:
                                                    _vm.additionalProperties,
                                                  type:
                                                    _vm.additionalProperties
                                                      .type,
                                                  errors: errors
                                                },
                                                model: {
                                                  value: prop.value,
                                                  callback: function($$v) {
                                                    _vm.$set(prop, "value", $$v);
                                                  },
                                                  expression: "prop.value"
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
                              : _vm.additionalProperties.type ===
                                "key-value-pairs"
                              ? [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: _vm.ruleObject(true),
                                      name:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-value-" +
                                        (index + 1),
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-value-" +
                                        (index + 1) +
                                        "-provider",
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
                                                  schema:
                                                    _vm.additionalProperties,
                                                  type:
                                                    _vm.additionalProperties
                                                      .type,
                                                  errors: errors
                                                },
                                                model: {
                                                  value: prop.value,
                                                  callback: function($$v) {
                                                    _vm.$set(prop, "value", $$v);
                                                  },
                                                  expression: "prop.value"
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
                              : _vm.additionalProperties.type === "array"
                              ? [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: _vm.ruleArray(true),
                                      name:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-value-" +
                                        (index + 1),
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-value-" +
                                        (index + 1) +
                                        "-provider",
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
                                                  schema:
                                                    _vm.additionalProperties,
                                                  type:
                                                    _vm.additionalProperties
                                                      .type,
                                                  errors: errors
                                                },
                                                model: {
                                                  value: prop.value,
                                                  callback: function($$v) {
                                                    _vm.$set(prop, "value", $$v);
                                                  },
                                                  expression: "prop.value"
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
                              : [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: _vm.ruleString(true),
                                      name:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-value-" +
                                        (index + 1),
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-value-" +
                                        (index + 1) +
                                        "-provider",
                                      slim: ""
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(validationOb) {
                                            return [
                                              _c("simple-input", {
                                                attrs: {
                                                  schema:
                                                    _vm.additionalProperties,
                                                  type:
                                                    _vm.additionalProperties
                                                      .type,
                                                  validationOb: validationOb
                                                },
                                                model: {
                                                  value: prop.value,
                                                  callback: function($$v) {
                                                    _vm.$set(prop, "value", $$v);
                                                  },
                                                  expression: "prop.value"
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
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "column is-1" }, [
                          _c("div", { staticClass: "buttons" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "button is-rounded is-danger ac-key-value-action-button",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault();
                                    return _vm.deleteProp(index)
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "icon is-small" }, [
                                  _c("i", { staticClass: "fa fa-trash" })
                                ])
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "validation-observer",
                    {
                      ref: _vm.schema.title.replace(/ /g, "-") + "-new",
                      staticClass: "columns is-multiline",
                      attrs: {
                        vid:
                          _vm.schema.title.replace(/ /g, "-") + "-new-observer",
                        disabled: true,
                        tag: "div"
                      }
                    },
                    [
                      _c("div", { staticClass: "column is-3" }, [
                        _c(
                          "div",
                          { staticClass: "field" },
                          [
                            _c("label", { staticClass: "label" }, [
                              _vm._v("Key")
                            ]),
                            _vm._v(" "),
                            _c("validation-provider", {
                              staticClass: "control has-icons-right",
                              attrs: {
                                vid:
                                  _vm.schema.title.replace(/ /g, "-") +
                                  "-key-provider",
                                rules: "required",
                                name:
                                  _vm.schema.title.replace(/ /g, "-") + "-key",
                                tag: "div"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var errors = ref.errors;
                                      var valid = ref.valid;
                                      var invalid = ref.invalid;
                                      var validated = ref.validated;
                                      return [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.newKey,
                                              expression: "newKey"
                                            }
                                          ],
                                          staticClass: "input",
                                          class: {
                                            "is-success": validated && valid,
                                            "is-danger": validated && invalid
                                          },
                                          attrs: { type: "text" },
                                          domProps: { value: _vm.newKey },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.newKey = $event.target.value;
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        validated
                                          ? _c("right-wrong-signs", {
                                              attrs: {
                                                valid: valid,
                                                invalid: invalid
                                              }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("component-errors", {
                                          attrs: { errors: errors }
                                        })
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "column is-8" },
                        [
                          _vm.additionalProperties.type === "object"
                            ? [
                                _c("validation-provider", {
                                  attrs: {
                                    rules: "required",
                                    name:
                                      _vm.schema.title.replace(/ /g, "-") +
                                      "-value",
                                    vid:
                                      _vm.schema.title.replace(/ /g, "-") +
                                      "-value-provider",
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
                                                schema:
                                                  _vm.additionalProperties,
                                                type:
                                                  _vm.additionalProperties.type,
                                                errors: errors
                                              },
                                              model: {
                                                value: _vm.newValue,
                                                callback: function($$v) {
                                                  _vm.newValue = $$v;
                                                },
                                                expression: "newValue"
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
                            : _vm.additionalProperties.type ===
                              "key-value-pairs"
                            ? [
                                _c("validation-provider", {
                                  attrs: {
                                    rules: "required",
                                    name:
                                      _vm.schema.title.replace(/ /g, "-") +
                                      "-value",
                                    vid:
                                      _vm.schema.title.replace(/ /g, "-") +
                                      "-value-provider",
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
                                                schema:
                                                  _vm.additionalProperties,
                                                type:
                                                  _vm.additionalProperties.type,
                                                errors: errors
                                              },
                                              model: {
                                                value: _vm.newValue,
                                                callback: function($$v) {
                                                  _vm.newValue = $$v;
                                                },
                                                expression: "newValue"
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
                            : _vm.additionalProperties.type === "array"
                            ? [
                                _c("validation-provider", {
                                  attrs: {
                                    rules: "required",
                                    name:
                                      _vm.schema.title.replace(/ /g, "-") +
                                      "-value",
                                    vid:
                                      _vm.schema.title.replace(/ /g, "-") +
                                      "-value-provider",
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
                                                schema:
                                                  _vm.additionalProperties,
                                                type:
                                                  _vm.additionalProperties.type,
                                                errors: errors
                                              },
                                              model: {
                                                value: _vm.newValue,
                                                callback: function($$v) {
                                                  _vm.newValue = $$v;
                                                },
                                                expression: "newValue"
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
                            : [
                                _c("validation-provider", {
                                  attrs: {
                                    rules: "required",
                                    name:
                                      _vm.schema.title.replace(/ /g, "-") +
                                      "-value",
                                    vid:
                                      _vm.schema.title.replace(/ /g, "-") +
                                      "-value-provider",
                                    slim: ""
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(validationOb) {
                                          return [
                                            _c("simple-input", {
                                              attrs: {
                                                schema:
                                                  _vm.additionalProperties,
                                                type:
                                                  _vm.additionalProperties.type,
                                                validationOb: validationOb
                                              },
                                              model: {
                                                value: _vm.newValue,
                                                callback: function($$v) {
                                                  _vm.newValue = $$v;
                                                },
                                                expression: "newValue"
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
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "column is-1" }, [
                        _c("div", { staticClass: "buttons" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "button is-rounded is-success ac-key-value-action-button",
                              on: {
                                click: function($event) {
                                  $event.preventDefault();
                                  return _vm.addProp()
                                }
                              }
                            },
                            [
                              _c("span", { staticClass: "icon is-small" }, [
                                _c("i", { staticClass: "fa fa-plus" })
                              ])
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ]
              : [
                  _c("json-form", {
                    model: {
                      value: _vm.modelData,
                      callback: function($$v) {
                        _vm.modelData = $$v;
                      },
                      expression: "modelData"
                    }
                  })
                ]
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

var KeyValuePairs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': __vue_component__
});

export default __vue_component__;
