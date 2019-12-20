import { v as model } from './model-da405e97.js';
import { v as validation } from './validation-3731607b.js';
import { _ as __vue_normalize__ } from './normalize-c7e3979a.js';

//
var script = {
  props: {
    schema: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    value: {
      default: ""
    },
    validationOb: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  mixins: [model, validation],
  computed: {
    ui: function ui() {
      return this.schema.ui || {
        tag: "input",
        type: "text"
      };
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
    { staticClass: "field" },
    [
      _vm.ui.tag === "input"
        ? [
            _vm.ui.type === "checkbox"
              ? [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.modelData,
                        expression: "modelData"
                      }
                    ],
                    staticClass: "switch is-rounded",
                    attrs: {
                      id: _vm.schema.title.replace(" ", "-"),
                      type: "checkbox",
                      name: "switchRoundedDefault"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.modelData)
                        ? _vm._i(_vm.modelData, null) > -1
                        : _vm.modelData
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.modelData,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false;
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v);
                          if ($$el.checked) {
                            $$i < 0 && (_vm.modelData = $$a.concat([$$v]));
                          } else {
                            $$i > -1 &&
                              (_vm.modelData = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)));
                          }
                        } else {
                          _vm.modelData = $$c;
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "label",
                      attrs: { for: _vm.schema.title.replace(" ", "-") }
                    },
                    [_vm._v(_vm._s(_vm.schema.title))]
                  )
                ]
              : [
                  _c("label", { staticClass: "label" }, [
                    _vm._v(_vm._s(_vm.schema.title))
                  ]),
                  _vm._v(" "),
                  _vm.ui.tag === "input"
                    ? _c(
                        "div",
                        { staticClass: "control has-icons-right" },
                        [
                          _vm.ui.type === "checkbox"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.modelData,
                                    expression: "modelData"
                                  }
                                ],
                                staticClass: "input",
                                class: {
                                  "is-success":
                                    _vm.validationOb.validated &&
                                    _vm.validationOb.valid,
                                  "is-danger":
                                    _vm.validationOb.validated &&
                                    _vm.validationOb.invalid
                                },
                                attrs: {
                                  placeholder: _vm.ui.placeholder || "",
                                  type: "checkbox"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.modelData)
                                    ? _vm._i(_vm.modelData, null) > -1
                                    : _vm.modelData
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$a = _vm.modelData,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false;
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v);
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.modelData = $$a.concat([$$v]));
                                        } else {
                                          $$i > -1 &&
                                            (_vm.modelData = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)));
                                        }
                                      } else {
                                        _vm.modelData = $$c;
                                      }
                                    },
                                    function($event) {
                                      _vm.modelData = $event.target.value;
                                    }
                                  ]
                                }
                              })
                            : _vm.ui.type === "radio"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.modelData,
                                    expression: "modelData"
                                  }
                                ],
                                staticClass: "input",
                                class: {
                                  "is-success":
                                    _vm.validationOb.validated &&
                                    _vm.validationOb.valid,
                                  "is-danger":
                                    _vm.validationOb.validated &&
                                    _vm.validationOb.invalid
                                },
                                attrs: {
                                  placeholder: _vm.ui.placeholder || "",
                                  type: "radio"
                                },
                                domProps: {
                                  checked: _vm._q(_vm.modelData, null)
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      _vm.modelData = null;
                                    },
                                    function($event) {
                                      _vm.modelData = $event.target.value;
                                    }
                                  ]
                                }
                              })
                            : _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.modelData,
                                    expression: "modelData"
                                  }
                                ],
                                staticClass: "input",
                                class: {
                                  "is-success":
                                    _vm.validationOb.validated &&
                                    _vm.validationOb.valid,
                                  "is-danger":
                                    _vm.validationOb.validated &&
                                    _vm.validationOb.invalid
                                },
                                attrs: {
                                  placeholder: _vm.ui.placeholder || "",
                                  type: _vm.ui.type
                                },
                                domProps: { value: _vm.modelData },
                                on: {
                                  change: function($event) {
                                    _vm.modelData = $event.target.value;
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.modelData = $event.target.value;
                                  }
                                }
                              }),
                          _vm._v(" "),
                          _vm.validationOb.validated
                            ? [
                                _vm.validationOb.valid
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "icon is-small is-right is-success"
                                      },
                                      [_c("i", { staticClass: "fa fa-check" })]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.validationOb.invalid
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "icon is-small is-right is-warning"
                                      },
                                      [_c("i", { staticClass: "fa fa-times" })]
                                    )
                                  : _vm._e()
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.validationOb &&
                          _vm.validationOb.errors &&
                          _vm.validationOb.errors.length > 0
                            ? _c("p", { staticClass: "is-warning" }, [
                                _vm._m(0),
                                _vm._v(
                                  "\n          " +
                                    _vm._s(_vm.validationOb.errors[0]) +
                                    "\n        "
                                )
                              ])
                            : _vm._e()
                        ],
                        2
                      )
                    : _vm._e()
                ]
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.ui.tag === "textarea"
        ? [
            _c(
              "div",
              { staticClass: "control has-icons-right" },
              [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.modelData,
                      expression: "modelData"
                    }
                  ],
                  staticClass: "input",
                  class: {
                    "is-success":
                      _vm.validationOb.validated && _vm.validationOb.valid,
                    "is-danger":
                      _vm.validationOb.validated && _vm.validationOb.invalid
                  },
                  attrs: {
                    type: _vm.ui.type,
                    placeholder: _vm.ui.placeholder || ""
                  },
                  domProps: { value: _vm.modelData },
                  on: {
                    change: function($event) {
                      _vm.modelData = $event.target.value;
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.modelData = $event.target.value;
                    }
                  }
                }),
                _vm._v(" "),
                _vm.validationOb.validated
                  ? [
                      _vm.valid
                        ? _c(
                            "span",
                            {
                              staticClass: "icon is-small is-right is-success"
                            },
                            [_c("i", { staticClass: "fa fa-check" })]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.invalid
                        ? _c(
                            "span",
                            {
                              staticClass: "icon is-small is-right is-warning"
                            },
                            [_c("i", { staticClass: "fa fa-times" })]
                          )
                        : _vm._e()
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationOb.errors.length > 0
                  ? _c("p", { staticClass: "is-warning" }, [
                      _vm._m(1),
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.validationOb.errors[0]) +
                          "\n      "
                      )
                    ])
                  : _vm._e()
              ],
              2
            )
          ]
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", { staticClass: "warning" }, [
      _c("i", { staticClass: "fa fa-warning" })
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", { staticClass: "warning" }, [
      _c("i", { staticClass: "fa fa-warning" })
    ])
  }
];
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
