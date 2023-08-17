import{m as e,v as a,_ as l,c as r,a as t,b as n}from"./entry-baab70cb.js";import{t as o}from"./tabs-6636239a.js";import{s as i}from"./size-d02f66d9.js";import{defineComponent as u,defineAsyncComponent as d,resolveComponent as s,openBlock as c,createElementBlock as m,normalizeClass as p,createElementVNode as f,createTextVNode as y,toDisplayString as V,createVNode as v,Fragment as h,renderList as b,withCtx as k,createBlock as w,withModifiers as P,createCommentVNode as U}from"vue";var g=u({name:"KeyValuePairs",components:{KeyValuePairItems:d((function(){return import("./KeyValuePairItems-19f7744c.js").then((function(e){return e.default}))}))},mixins:[e,o,a,i],props:{schema:{type:Object,default:function(){return{}}},fieldName:{type:String,default:""},modelValue:{type:Object,default:function(){return{}}},errors:{type:Object,default:function(){return{}}},isLastChild:{type:Boolean,default:!1}},data:function(){return{newData:null,updatePass:0,keyValueArray:null,referencekeyValueArray:null,newKey:"",newValue:null}},computed:{additionalProperties:function(){return this.schema.additionalProperties||{}}},watch:{keyValueArray:{immediate:!0,deep:!0,handler:function(e,a){null!=a&&(this.modelData=this.reconstructObject(e))}},activeTab:function(){this.initKeyValueArray(),this.initReferenceKeyValueArray()},modelValue:{deep:!0,immediate:!0,handler:function(e,a){JSON.stringify(e)!==JSON.stringify(a)&&this.initKeyValueArray(),this.initReferenceKeyValueArray()}}},methods:{initKeyValueArray:function(){var e=this;this.keyValueArray=Object.keys(this.modelValue).map((function(a){return{key:a,value:e.modelValue[a]||null}}))},initReferenceKeyValueArray:function(){var e=this;this.referencekeyValueArray=Object.keys(this.referenceModel).map((function(a){return{key:a,value:e.referenceModel[a]||null}}))},updateKeyValueArray:function(e){this.keyValueArray=Object.keys(e).map((function(a){return{key:a,value:e[a]}}))},reconstructObject:function(e){var a={};return e.forEach((function(e){a=Object.assign({},l({},a),r({},"".concat(e.key),e.value))})),a},addProp:function(e){var a=this;return t(n().mark((function l(){var r;return n().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e();case 2:r=l.sent,r.valid&&(a.keyValueArray.push({key:a.newKey,value:a.newValue}),a.newKey="",a.newValue=null,a.updatePass+=1);case 5:case"end":return l.stop()}}),l)})))()},deleteProp:function(e){this.keyValueArray.splice(e,1),this.updatePass+=1}}}),A={class:"nested-header mb-5"},K={class:"is-flex is-semi-normal"},j=f("div",{class:"collaps-icon is-disabled"},[f("i",{"aria-hidden":"true",class:"fa fa-minus"})],-1),C=["onClick"],D=[f("span",{class:"icon"},[f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])],-1)];g.render=function(e,a,r,t,n,o){var i=s("component-errors"),u=s("tabs"),d=s("key-value-pair-items"),g=s("simple-input"),x=s("v-field"),O=s("object-form-wrapper"),_=s("key-value-pairs",!0),q=s("array-input"),T=s("v-form"),M=s("yaml-form"),N=s("json-form");return c(),m("div",{key:e.updatePass,as:"div",class:p(["ac-nested-elements key-value-pairs is-flex is-flex-direction-column gap-16",{"stop-line":e.isLastChild}])},[f("div",A,[f("h6",K,[j,y(" "+V(e.schema.title||"Array Item Description"),1),v(i,{errors:e.calcFormErrors(e.errors,e.fieldName)},null,8,["errors"])]),v(u,{modelValue:e.activeTab,"onUpdate:modelValue":a[0]||(a[0]=function(a){return e.activeTab=a})},null,8,["modelValue"])]),"form"===e.activeTab?(c(),m(h,{key:0},[(c(!0),m(h,null,b(e.keyValueArray,(function(a,l){return c(),m("div",{key:"".concat(l,"-").concat(e.schema.title,"-form")},[v(d,{modelValue:e.keyValueArray[l],"onUpdate:modelValue":function(a){return e.keyValueArray[l]=a},"field-name":e.fieldName,"reference-model":e.referencekeyValueArray[l]||{},index:l,schema:e.schema,"additional-properties":e.additionalProperties,errors:e.errors,onDeleteKeyValue:e.deleteProp},null,8,["modelValue","onUpdate:modelValue","field-name","reference-model","index","schema","additional-properties","errors","onDeleteKeyValue"])])})),128)),v(T,{id:"".concat(e.schema.title.replace(/ /g,"-"),"-new-observer"),as:"div",class:"key-value-save"},{default:k((function(r){var t=r.validate,n=r.errors;return[v(x,{id:"".concat(e.schema.title.replace(/ /g,"-"),"-key-provider"),modelValue:e.newKey,"onUpdate:modelValue":a[1]||(a[1]=function(a){return e.newKey=a}),rules:"required",name:"newKey",label:"".concat(e.schema.title," new key"),as:"div"},{default:k((function(e){var a=e.field,r=e.handleChange,t=e.errors,n=e.meta;return[v(g,{"model-value":a.value,schema:{title:"Key",type:"string",ui:{tag:"input",type:"text"}},type:"string","validation-ob":l({errors:t},n),"reference-model":"","onUpdate:modelValue":r},null,8,["model-value","validation-ob","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","label"]),"object"===e.additionalProperties.type?(c(),w(x,{key:0,id:"".concat(e.schema.title.replace(/ /g,"-"),"-value-provider"),modelValue:e.newValue,"onUpdate:modelValue":a[2]||(a[2]=function(a){return e.newValue=a}),rules:"required",name:"newValue",label:"".concat(e.schema.title," new value"),as:""},{default:k((function(a){var l=a.field,r=a.handleChange;return[v(O,{"field-name":"newValue","model-value":l.value,"is-last-child":!0,"is-self-required":!0,schema:e.additionalProperties,type:e.additionalProperties.type,errors:n,"reference-model":{},"onUpdate:modelValue":r},null,8,["model-value","schema","type","errors","onUpdate:modelValue"])]})),_:2},1032,["id","modelValue","label"])):"key-value-pairs"===e.additionalProperties.type?(c(),w(x,{key:1,id:"".concat(e.schema.title.replace(/ /g,"-"),"-value-provider"),modelValue:e.newValue,"onUpdate:modelValue":a[3]||(a[3]=function(a){return e.newValue=a}),rules:"required",name:"newValue",label:"".concat(e.schema.title," new value"),as:""},{default:k((function(a){var l=a.field,r=a.handleChange;return[v(_,{"field-name":"newValue","model-value":l.value,"is-last-child":!0,schema:e.additionalProperties,type:e.additionalProperties.type,errors:n,"reference-model":{},"onUpdate:modelValue":r},null,8,["model-value","schema","type","errors","onUpdate:modelValue"])]})),_:2},1032,["id","modelValue","label"])):"array"===e.additionalProperties.type?(c(),w(x,{key:2,id:"".concat(e.schema.title.replace(/ /g,"-"),"-value-provider"),modelValue:e.newValue,"onUpdate:modelValue":a[4]||(a[4]=function(a){return e.newValue=a}),rules:"required",name:"newValue",label:"".concat(e.schema.title," new value"),as:""},{default:k((function(a){var l=a.field,r=a.handleChange;return[v(q,{"field-name":"newValue","model-value":l.value,"is-last-child":!0,schema:e.additionalProperties,type:e.additionalProperties.type,errors:n,"reference-model":[],"onUpdate:modelValue":r},null,8,["model-value","schema","type","errors","onUpdate:modelValue"])]})),_:2},1032,["id","modelValue","label"])):(c(),w(x,{key:3,id:"".concat(e.schema.title.replace(/ /g,"-"),"-value-provider"),modelValue:e.newValue,"onUpdate:modelValue":a[5]||(a[5]=function(a){return e.newValue=a}),rules:"required",name:"newValue",label:"".concat(e.schema.title," new value"),as:""},{default:k((function(a){var r=a.field,t=a.handleChange,n=a.errors,o=a.meta;return[v(g,{"model-value":r.value,schema:e.additionalProperties,type:e.additionalProperties.type,"validation-ob":l({errors:n},o),"reference-model":"","onUpdate:modelValue":t},null,8,["model-value","schema","type","validation-ob","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","label"])),f("button",{class:"button ac-button is-medium is-primary is-outlined",onClick:P((function(a){return e.addProp(t)}),["prevent"])},D,8,C)]})),_:1},8,["id"])],64)):U("",!0),"yaml"===e.activeTab?(c(),w(M,{key:1,modelValue:e.modelData,"onUpdate:modelValue":a[6]||(a[6]=function(a){return e.modelData=a}),"reference-model":e.referenceModel||{},"onCode::modelDataUpdated":e.updateKeyValueArray},null,8,["modelValue","reference-model","onCode::modelDataUpdated"])):"json"===e.activeTab?(c(),w(N,{key:2,modelValue:e.modelData,"onUpdate:modelValue":a[7]||(a[7]=function(a){return e.modelData=a}),"reference-model":e.referenceModel||{},"onCode::modelDataUpdated":e.updateKeyValueArray},null,8,["modelValue","reference-model","onCode::modelDataUpdated"])):U("",!0)],2)};export{g as default};