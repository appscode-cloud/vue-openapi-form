"use strict";var e=require("./entry-620dacf9.js"),t=require("./size-27a9a503.js"),n=require("vue"),a=n.defineComponent({name:"SimpleInput",mixins:[e.m,e.v,t.s],props:{schema:{type:Object,default:function(){return{}}},modelValue:{type:null,default:""},validationOb:{type:Object,default:function(){return{}}}},emits:["update:modelValue"],data:function(){return{labelShow:!1,isIntegerSetToNull:!1,isMultilineValue:!1}},computed:{ui:function(){return this.schema.ui||{tag:"input",type:"text"}},identifier:function(){return"id-".concat(this.schema.title.replace(" ","-"),"-").concat(JSON.stringify((new Date).valueOf()))}},watch:{modelData:{immediate:!0,deep:!0,handler:function(e,t){var n=this;this.isMultilineValue&&setTimeout((function(){n.$refs.textareaField.focus()}),0),"string"==typeof e&&e.includes("\n")&&(this.isMultilineValue=!0),this.labelShow=!!e,(this.isIntegerSetToNull||null!=t)&&(this.isIntegerSetToNull&&e&&(this.isIntegerSetToNull=!1),"number"===this.type||"integer"===this.type?""===e?(this.isIntegerSetToNull=!0,this.$emit("update:modelValue",null)):this.$emit("update:modelValue",+e):this.$emit("update:modelValue",e))}}},mounted:function(){var e;this.modelData&&(this.labelShow=!0),null===(e=this.$refs.inputField)||void 0===e||e.addEventListener("keydown",this.handleKeyDownEvent)},destroyed:function(){var e;null===(e=this.$refs.inputField)||void 0===e||e.removeEventListener("keydown",this.handleKeyDownEvent)},methods:{triggerInput:function(){this.labelShow=!0},unTriggerInput:function(){this.modelData||(this.labelShow=!1)},focusInput:function(){this.labelShow=!0,this.$refs.inputField.focus()},onPaste:function(e){var t=(e.clipboardData||window.clipboardData).getData("text"),n=this.updatedModelDataAfterPasteAndKeyDown(e.target,t);t.includes("\n")&&(this.isMultilineValue=!0,this.modelData=n)},handleKeyDownEvent:function(e){if("Enter"===e.code&&e.shiftKey){e.preventDefault();var t=this.updatedModelDataAfterPasteAndKeyDown(e.target);this.isMultilineValue=!0,this.modelData=t}},updatedModelDataAfterPasteAndKeyDown:function(e,t){var n=e.selectionStart,a=e.selectionEnd;return this.modelData.substring(0,n)+(t=t||"\n")+this.modelData.substring(a,this.modelData.length)}}}),i={class:"ac-single-input is-small is-information"},o={key:0,class:"ac-single-switch is-small is-flex pb-10"},l=["id"],r=["for"],s={key:0},c=["type","placeholder"],d=["type","placeholder"],u={key:0,class:"button is-information"},m=[n.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[n.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})],-1)],p={key:1,class:"button is-information is-warning"},h=[n.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[n.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)],v={key:3,class:"is-error"},f=n.createElementVNode("span",{class:"warning"},[n.createElementVNode("i",{class:"fa fa-warning"})],-1),g=["type","placeholder"],k={key:0,class:"button is-information is-success"},w=[n.createElementVNode("span",{class:"icon"},[n.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[n.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1)],y={key:1,class:"button is-information is-warning"},b=[n.createElementVNode("span",{class:"icon"},[n.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[n.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])],-1)],D={key:1,class:"is-warning"},V=n.createElementVNode("i",{class:"fa fa-warning warning"},null,-1);a.render=function(e,t,a,E,B,N){return n.openBlock(),n.createElementBlock("div",i,["input"===e.ui.tag?(n.openBlock(),n.createElementBlock(n.Fragment,{key:0},["checkbox"===e.ui.type?(n.openBlock(),n.createElementBlock("div",o,[n.withDirectives(n.createElementVNode("input",{id:e.identifier,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.modelData=t}),type:"checkbox",name:"switchRoundedDefault",class:"switch ac-switch is-rounded is-primary"},null,8,l),[[n.vModelCheckbox,e.modelData]]),n.createElementVNode("label",{class:"switch-label",for:e.identifier},n.toDisplayString(e.schema.title),9,r)])):(n.openBlock(),n.createElementBlock(n.Fragment,{key:1},[n.createElementVNode("label",{class:n.normalizeClass([e.labelShow?"show-label":"","ac-label"]),onClick:t[1]||(t[1]=n.withModifiers((function(t){return e.focusInput()}),["prevent"]))},n.toDisplayString(e.schema.title),3),"input"===e.ui.tag?(n.openBlock(),n.createElementBlock("div",s,[e.isMultilineValue?n.withDirectives((n.openBlock(),n.createElementBlock("textarea",{key:0,ref:"textareaField","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.modelData=t}),class:n.normalizeClass(["ac-input",{"is-success":e.validationOb.dirty&&e.validationOb.valid,"is-danger":e.validationOb.dirty&&!e.validationOb.valid,"bg-white":e.modelData}]),style:{"min-height":"100px"},type:e.ui.type,placeholder:e.ui.placeholder||"",onChange:t[3]||(t[3]=function(t){return e.modelData=t.target.value}),onFocus:t[4]||(t[4]=function(t){return e.triggerInput()}),onFocusout:t[5]||(t[5]=function(t){return e.unTriggerInput()}),onPaste:t[6]||(t[6]=function(){return e.onPaste&&e.onPaste.apply(e,arguments)})},null,42,c)),[[n.vModelText,e.modelData]]):n.withDirectives((n.openBlock(),n.createElementBlock("input",{key:1,ref:"inputField","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.modelData=t}),class:n.normalizeClass(["ac-input",{"is-success":e.validationOb.dirty&&e.validationOb.valid,"is-danger":e.validationOb.dirty&&!e.validationOb.valid,"bg-white":e.modelData}]),type:e.ui.type,placeholder:e.ui.placeholder||"",onChange:t[8]||(t[8]=function(t){return e.modelData=t.target.value}),onFocus:t[9]||(t[9]=function(t){return e.triggerInput()}),onFocusout:t[10]||(t[10]=function(t){return e.unTriggerInput()}),onPaste:t[11]||(t[11]=function(){return e.onPaste&&e.onPaste.apply(e,arguments)})},null,42,d)),[[n.vModelDynamic,e.modelData]]),e.validationOb.dirty?(n.openBlock(),n.createElementBlock(n.Fragment,{key:2},[e.validationOb.valid?(n.openBlock(),n.createElementBlock("span",u,m)):n.createCommentVNode("",!0),e.validationOb.valid?n.createCommentVNode("",!0):(n.openBlock(),n.createElementBlock("span",p,h))],64)):n.createCommentVNode("",!0),e.validationOb&&e.validationOb.errors&&e.validationOb.errors.length>0?(n.openBlock(),n.createElementBlock("p",v,[f,n.createTextVNode(" "+n.toDisplayString(e.validationOb.errors[0]),1)])):n.createCommentVNode("",!0)])):n.createCommentVNode("",!0)],64))],64)):n.createCommentVNode("",!0),"textarea"===e.ui.tag?(n.openBlock(),n.createElementBlock(n.Fragment,{key:1},[n.withDirectives(n.createElementVNode("textarea",{"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.modelData=t}),class:n.normalizeClass(["input",{"is-success":e.validationOb.dirty&&e.validationOb.valid,"is-danger":e.validationOb.dirty&&!e.validationOb.valid}]),type:e.ui.type,placeholder:e.ui.placeholder||"",onChange:t[13]||(t[13]=function(t){return e.modelData=t.target.value})},null,42,g),[[n.vModelText,e.modelData]]),e.validationOb.dirty?(n.openBlock(),n.createElementBlock(n.Fragment,{key:0},[e.valid?(n.openBlock(),n.createElementBlock("button",k,w)):n.createCommentVNode("",!0),e.invalid?(n.openBlock(),n.createElementBlock("button",y,b)):n.createCommentVNode("",!0)],64)):n.createCommentVNode("",!0),e.validationOb.errors.length>0?(n.openBlock(),n.createElementBlock("span",D,[V,n.createTextVNode(" "+n.toDisplayString(e.validationOb.errors[0]),1)])):n.createCommentVNode("",!0)],64)):n.createCommentVNode("",!0)])},exports.default=a;