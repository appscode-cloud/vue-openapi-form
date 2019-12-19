import { _ as __vue_normalize__ } from './normalize-c7e3979a.js';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  data: function data() {
    return {
      formShow: {
        type: Boolean,
        default: true
      }
    };
  },
  methods: {
    showForm: function showForm() {
      this.formShow = true;
      this.$emit("input", true);
    },
    showJson: function showJson() {
      this.formShow = false;
      this.$emit("input", false);
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
  return _c("div", { staticClass: "tabs is-toggle form-json-toggle-tabs" }, [
    _c("ul", [
      _c("li", { class: { "is-active": _vm.formShow } }, [
        _c(
          "a",
          {
            on: {
              click: function($event) {
                $event.preventDefault();
                return _vm.showForm()
              }
            }
          },
          [_vm._m(0), _vm._v(" "), _c("span", [_vm._v("Form")])]
        )
      ]),
      _vm._v(" "),
      _c("li", { class: { "is-active": !_vm.formShow } }, [
        _c(
          "a",
          {
            on: {
              click: function($event) {
                $event.preventDefault();
                return _vm.showJson()
              }
            }
          },
          [_vm._m(1), _vm._v(" "), _c("span", [_vm._v("JSON")])]
        )
      ])
    ])
  ])
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-edit", attrs: { "aria-hidden": "true" } })
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-code", attrs: { "aria-hidden": "true" } })
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
