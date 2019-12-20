import './model-a2dbe01c.js';
import './validation-de903b65.js';
import './es.object.to-string-cda2fcde.js';
import './fold-77a567b4.js';
import './tabs-1fa86cb8.js';
import './normalize-c7e3979a.js';
import component from './VueOpenapiForm-66b0bcce.js';
import './object-create-e86df5b7.js';
import { _ as _defineProperty } from './defineProperty-a1b865f4.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getTitleFromProp = function getTitleFromProp(prop) {
  prop = prop.charAt(0).toUpperCase() + prop.slice(1);
  return prop.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
};

var recurse = function recurse(schema, title) {
  var newSchema = Object.assign({}, {
    title: title
  }, _objectSpread({}, schema));

  if (schema.type === "object") {
    var newProperties = {}; // extend schema of old properties

    try {
      if (schema.properties) {
        Object.keys(schema.properties).forEach(function (prop) {
          var title = getTitleFromProp(prop);
          newProperties = Object.assign({}, _objectSpread({}, newProperties), _defineProperty({}, "".concat(prop), _objectSpread({}, recurse(schema.properties[prop], title))));
        }); // assign new properties to newSchema

        newSchema = Object.assign({}, _objectSpread({}, newSchema), {
          properties: _objectSpread({}, newProperties)
        });
      } // for additional properties
      else if (schema.additionalProperties) {
          newSchema = Object.assign({}, _objectSpread({}, newSchema), {
            type: "key-value-pairs"
          }); // console.log({ newSchema });

          newSchema.additionalProperties = Object.assign({}, _objectSpread({}, schema.additionalProperties), {
            title: "Value",
            ui: {
              tag: "input",
              type: "text"
            }
          });
        }
    } catch (e) {// console.log(schema);
      // console.log(e);
    }
  } else if (schema.type === "array") {
    var newItems = {}; // extend old items

    var _title = "";
    newItems = Object.assign({}, _objectSpread({}, newItems), _objectSpread({}, recurse(schema.items, _title))); // assign new items to newSchema

    newSchema = Object.assign({}, _objectSpread({}, newSchema), {
      items: _objectSpread({}, newItems)
    });
  } else {
    var type = "";
    if (schema.type === "number") { type = "number"; }else if (schema.type === "boolean") { type = "checkbox"; }else { type = "text"; }
    newSchema = Object.assign({}, _objectSpread({}, newSchema), {
      ui: {
        tag: "input",
        type: type
      }
    }); // if (schema.type === "boolean") // console.log(newSchema);
  }

  return newSchema;
};

function ExtendSchema (schema, title) {
  return recurse(schema, title + " Form");
}

// Import vue component

var extendSchema = ExtendSchema; // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component("VueOpenapiForm", component);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component

export default component;
export { extendSchema, install };
