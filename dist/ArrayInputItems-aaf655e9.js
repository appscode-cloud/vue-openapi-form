import{m as e,v as a,_ as l}from"./entry-baab70cb.js";import{defineComponent as t,resolveComponent as n,openBlock as r,createElementBlock as o,createBlock as d,withCtx as c,createVNode as m}from"vue";var i=t({name:"ArrayInputItems",mixins:[e,a],props:{items:{type:Object,default:function(){return{}}},schema:{type:Object,default:function(){return{}}},index:{type:Number,default:0},modelValue:{type:null,default:function(){return[]}},fieldName:{type:String,default:""},errors:{type:Object,default:function(){return{}}}}}),u={class:"form-left-item"};i.render=function(e,a,t,i,s,f){var p=n("object-form-wrapper"),y=n("v-field"),x=n("key-value-pairs"),v=n("array-input"),h=n("simple-input");return r(),o("div",u,["object"===e.items.type?(r(),d(y,{key:0,modelValue:e.modelData[e.index],"onUpdate:modelValue":a[0]||(a[0]=function(a){return e.modelData[e.index]=a}),rules:e.ruleObject(!0),name:"".concat(e.fieldName,"/").concat(e.index+1),label:"".concat(e.schema.title," ").concat(e.index+1),as:""},{default:c((function(a){var t=a.field,n=a.handleChange;return[m(p,{"field-name":"".concat(e.fieldName,"/").concat(e.index+1),"model-value":t.value,schema:l(l({},e.items),{title:"".concat(e.schema.title," ").concat(e.index+1)}),"is-self-required":!0,type:e.items.type,errors:e.errors,"reference-model":e.referenceModel[e.index]||{},"onUpdate:modelValue":n},null,8,["field-name","model-value","schema","type","errors","reference-model","onUpdate:modelValue"])]})),_:1},8,["modelValue","rules","name","label"])):"key-value-pairs"===e.items.type?(r(),d(y,{key:1,modelValue:e.modelData[e.index],"onUpdate:modelValue":a[1]||(a[1]=function(a){return e.modelData[e.index]=a}),rules:e.ruleObject(!0),name:"".concat(e.fieldName,"/").concat(e.index+1),label:"".concat(e.schema.title," ").concat(e.index+1),as:""},{default:c((function(a){var t=a.field,n=a.handleChange;return[m(x,{"field-name":"".concat(e.fieldName,"/").concat(e.index+1),"model-value":t.value,errors:e.errors,schema:l(l({},e.items),{title:"".concat(e.schema.title," ").concat(e.index+1)}),type:e.items.type,"reference-model":e.referenceModel[e.index]||{},"onUpdate:modelValue":n},null,8,["field-name","model-value","errors","schema","type","reference-model","onUpdate:modelValue"])]})),_:1},8,["modelValue","rules","name","label"])):"array"===e.items.type?(r(),d(y,{key:2,modelValue:e.modelData[e.index],"onUpdate:modelValue":a[2]||(a[2]=function(a){return e.modelData[e.index]=a}),rules:e.ruleArray(!0),name:"".concat(e.fieldName,"/").concat(e.index+1),label:"".concat(e.schema.title," ").concat(e.index+1),as:""},{default:c((function(a){var t=a.field,n=a.handleChange;return[m(v,{"field-name":"".concat(e.fieldName,"/").concat(e.index+1),"model-value":t.value,schema:l(l({},e.items),{title:"".concat(e.schema.title," ").concat(e.index+1)}),type:e.items.type,errors:e.errors,"reference-model":e.referenceModel[e.index]||[],"onUpdate:modelValue":n},null,8,["field-name","model-value","schema","type","errors","reference-model","onUpdate:modelValue"])]})),_:1},8,["modelValue","rules","name","label"])):(r(),d(y,{key:3,modelValue:e.modelData[e.index],"onUpdate:modelValue":a[3]||(a[3]=function(a){return e.modelData[e.index]=a}),rules:e.ruleString(!0),name:"".concat(e.fieldName,"/").concat(e.index+1),label:"".concat(e.schema.title," ").concat(e.index+1),as:""},{default:c((function(a){var t=a.field,n=a.handleChange,r=a.errors,o=a.meta;return[m(h,{"model-value":t.value,schema:l(l({},e.items),{title:"".concat(e.schema.title," ").concat(e.index+1)}),type:e.items.type,required:!0,"validation-ob":l({errors:r},o),"reference-model":e.referenceModel[e.index]||"","onUpdate:modelValue":n},null,8,["model-value","schema","type","validation-ob","reference-model","onUpdate:modelValue"])]})),_:1},8,["modelValue","rules","name","label"]))])};export{i as default};