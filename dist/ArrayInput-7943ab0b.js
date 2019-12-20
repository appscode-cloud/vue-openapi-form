import { m as model, v as validation } from './validation-bc9757cc.js';
import './es.object.to-string-46945359.js';
import { t as tabs } from './tabs-28f55ab7.js';
import { _ as __vue_normalize__ } from './normalize-c7e3979a.js';
import './object-create-f806414b.js';
import { _ as _regeneratorRuntime, a as _defineProperty } from './defineProperty-96bff401.js';

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
      type: null,
      default: function _default() {
        return [];
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
      return import('./VueOpenapiForm-7dacdc23.js');
    },
    "array-input": function arrayInput() {
      return Promise.resolve().then(function () { return ArrayInput; });
    },
    "simple-input": function simpleInput() {
      return import('./SimpleInput-56886dc4.js');
    },
    "key-value-pairs": function keyValuePairs() {
      return import('./KeyValuePairs-a5b3b7cb.js');
    }
  },
  data: function data() {
    return {
      newData: null,
      updatePass: 0
    };
  },
  computed: {
    items: function items() {
      return this.schema.items || {};
    },
    ruleOb: function ruleOb() {
      var ans = {};
      if (this.required) { ans = Object.assign({}, _objectSpread({}, ans), {
        requiredArray: true
      }); }
      return ans;
    }
  },
  methods: {
    swapElems: function swapElems(index1, index2) {
      var temp = this.modelData[index1];
      this.$set(this.modelData, index1, this.modelData[index2]);
      this.$set(this.modelData, index2, temp);
      this.updatePass += 1;
    },
    addNewValue: function addNewValue() {
      var observerRef, isValid;
      return _regeneratorRuntime.async(function addNewValue$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              observerRef = "".concat(this.schema.title.replace(/ /g, "-"), "-new"); // console.log(observerRef);

              _context.next = 3;
              return _regeneratorRuntime.awrap(this.$refs[observerRef].validate());

            case 3:
              isValid = _context.sent;

              if (isValid) {
                this.modelData.push(this.newData);
                this.newData = null;
                this.updatePass += 1;
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    deleteValue: function deleteValue(index) {
      this.$delete(this.modelData, index);
      this.updatePass += 1;
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
    staticClass: "vue-schema-form-array",
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
                        _vm._s(_vm.schema.title || "Array Item Description") +
                        "\n        "
                    ),
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
                  _vm._l(_vm.modelData, function(item, index) {
                    return _c(
                      "div",
                      { key: index, staticClass: "columns is-multiline" },
                      [
                        _c(
                          "div",
                          { staticClass: "column is-10" },
                          [
                            _vm.items.type === "object"
                              ? [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: _vm.ruleObject(true),
                                      name:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-" +
                                        (index + 1),
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-" +
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
                                                  schema: Object.assign(
                                                    {},
                                                    _vm.items,
                                                    {
                                                      title:
                                                        _vm.schema.title +
                                                        " " +
                                                        (index + 1)
                                                    }
                                                  ),
                                                  type: _vm.items.type,
                                                  errors: errors
                                                },
                                                model: {
                                                  value: _vm.modelData[index],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.modelData,
                                                      index,
                                                      $$v
                                                    );
                                                  },
                                                  expression: "modelData[index]"
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
                              : _vm.items.type === "key-value-pairs"
                              ? [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: _vm.ruleObject(true),
                                      name:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-" +
                                        (index + 1),
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-" +
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
                                                  errors: errors,
                                                  schema: Object.assign(
                                                    {},
                                                    _vm.items,
                                                    {
                                                      title:
                                                        _vm.schema.title +
                                                        " " +
                                                        (index + 1)
                                                    }
                                                  ),
                                                  type: _vm.items.type
                                                },
                                                model: {
                                                  value: _vm.modelData[index],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.modelData,
                                                      index,
                                                      $$v
                                                    );
                                                  },
                                                  expression: "modelData[index]"
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
                              : _vm.items.type === "array"
                              ? [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: _vm.ruleArray(true),
                                      name:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-" +
                                        (index + 1),
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-" +
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
                                                  schema: Object.assign(
                                                    {},
                                                    _vm.items,
                                                    {
                                                      title:
                                                        _vm.schema.title +
                                                        " " +
                                                        (index + 1)
                                                    }
                                                  ),
                                                  type: _vm.items.type,
                                                  errors: errors
                                                },
                                                model: {
                                                  value: _vm.modelData[index],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.modelData,
                                                      index,
                                                      $$v
                                                    );
                                                  },
                                                  expression: "modelData[index]"
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
                                        "-" +
                                        (index + 1),
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-" +
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
                                                  schema: Object.assign(
                                                    {},
                                                    _vm.items,
                                                    {
                                                      title:
                                                        _vm.schema.title +
                                                        " " +
                                                        (index + 1)
                                                    }
                                                  ),
                                                  type: _vm.items.type,
                                                  required: true,
                                                  validationOb: validationOb
                                                },
                                                model: {
                                                  value: _vm.modelData[index],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.modelData,
                                                      index,
                                                      $$v
                                                    );
                                                  },
                                                  expression: "modelData[index]"
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
                        _c("div", { staticClass: "column is-2" }, [
                          _c("div", { staticClass: "buttons" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "button is-rounded is-info ac-list-action-button",
                                attrs: { disabled: index === 0 },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault();
                                    return _vm.swapElems(index - 1, index)
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "icon is-small" }, [
                                  _c("i", { staticClass: "fa fa-arrow-up" })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "button is-rounded is-info ac-list-action-button",
                                attrs: {
                                  disabled: index === _vm.modelData.length - 1
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault();
                                    return _vm.swapElems(index, index + 1)
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "icon is-small" }, [
                                  _c("i", { staticClass: "fa fa-arrow-down" })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "button is-rounded is-danger ac-list-action-button",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault();
                                    return _vm.deleteValue(index)
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
                      attrs: {
                        vid:
                          _vm.schema.title.replace(/ /g, "-") + "-new-observer",
                        disabled: true,
                        slim: ""
                      }
                    },
                    [
                      _c("div", { staticClass: "columns is-multiline" }, [
                        _c(
                          "div",
                          { staticClass: "column is-10" },
                          [
                            _vm.items.type === "object"
                              ? [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: _vm.ruleObject(true),
                                      name:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-new-value",
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-new-value-provider",
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
                                                  schema: Object.assign(
                                                    {},
                                                    _vm.items,
                                                    {
                                                      title:
                                                        _vm.schema.title +
                                                        " new value"
                                                    }
                                                  ),
                                                  type: _vm.items.type,
                                                  errors: errors
                                                },
                                                model: {
                                                  value: _vm.newData,
                                                  callback: function($$v) {
                                                    _vm.newData = $$v;
                                                  },
                                                  expression: "newData"
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
                              : _vm.items.type === "key-value-pairs"
                              ? [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: _vm.ruleObject(true),
                                      name:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-new-value",
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-new-value-provider",
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
                                                  schema: Object.assign(
                                                    {},
                                                    _vm.items,
                                                    {
                                                      title:
                                                        _vm.schema.title +
                                                        " new value"
                                                    }
                                                  ),
                                                  errors: errors,
                                                  type: _vm.items.type
                                                },
                                                model: {
                                                  value: _vm.newData,
                                                  callback: function($$v) {
                                                    _vm.newData = $$v;
                                                  },
                                                  expression: "newData"
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
                              : _vm.items.type === "array"
                              ? [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: _vm.ruleArray(true),
                                      name:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-new-value",
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-new-value-provider",
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
                                                  schema: Object.assign(
                                                    {},
                                                    _vm.items,
                                                    {
                                                      title:
                                                        _vm.schema.title +
                                                        " new value"
                                                    }
                                                  ),
                                                  errors: errors,
                                                  type: _vm.items.type
                                                },
                                                model: {
                                                  value: _vm.newData,
                                                  callback: function($$v) {
                                                    _vm.newData = $$v;
                                                  },
                                                  expression: "newData"
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
                                        "-new-value",
                                      vid:
                                        _vm.schema.title.replace(/ /g, "-") +
                                        "-new-value-provider",
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
                                                  schema: Object.assign(
                                                    {},
                                                    _vm.items,
                                                    {
                                                      title:
                                                        _vm.schema.title +
                                                        " new value"
                                                    }
                                                  ),
                                                  required: true,
                                                  type: _vm.items.type,
                                                  validationOb: validationOb
                                                },
                                                model: {
                                                  value: _vm.newData,
                                                  callback: function($$v) {
                                                    _vm.newData = $$v;
                                                  },
                                                  expression: "newData"
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
                        _c("div", { staticClass: "column is-2" }, [
                          _c("div", { staticClass: "buttons" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "button is-rounded is-success ac-list-action-button",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault();
                                    return _vm.addNewValue()
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
                      ])
                    ]
                  )
                ]
              : void 0
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

var ArrayInput = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': __vue_component__
});

export default __vue_component__;
