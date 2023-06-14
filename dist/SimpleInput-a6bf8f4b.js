"use strict";var e=require("./entry-581f2b18.js"),t=require("./size-b27329fd.js"),a=require("vue"),n=a.defineComponent({name:"SimpleInput",mixins:[e.m,e.v,t.s],props:{schema:{type:Object,default:function(){return{}}},modelValue:{type:null,default:""},validationOb:{type:Object,default:function(){return{}}}},emits:["update:modelValue"],data:function(){return{labelShow:!1,isIntegerSetToNull:!1,isMultilineValue:!1}},computed:{ui:function(){return this.schema.ui||{tag:"input",type:"text"}},identifier:function(){return"id-".concat(this.schema.title.replace(" ","-"),"-").concat(JSON.stringify((new Date).valueOf()))}},watch:{modelData:{immediate:!0,deep:!0,handler:function(e,t){var a=this;this.isMultilineValue&&setTimeout((function(){a.$refs.textareaField.focus()}),0),"string"==typeof e&&e.includes("\n")&&(this.isMultilineValue=!0),this.labelShow=!!e,(this.isIntegerSetToNull||null!=t)&&(this.isIntegerSetToNull&&e&&(this.isIntegerSetToNull=!1),"number"===this.type||"integer"===this.type?""===e?(this.isIntegerSetToNull=!0,this.$emit("update:modelValue",null)):this.$emit("update:modelValue",+e):this.$emit("update:modelValue",e))}}},mounted:function(){var e;this.modelData&&(this.labelShow=!0),null===(e=this.$refs.inputField)||void 0===e||e.addEventListener("keydown",this.handleKeyDownEvent)},destroyed:function(){var e;null===(e=this.$refs.inputField)||void 0===e||e.removeEventListener("keydown",this.handleKeyDownEvent)},methods:{triggerInput:function(){this.labelShow=!0},unTriggerInput:function(){this.modelData||(this.labelShow=!1)},focusInput:function(){this.labelShow=!0,this.$refs.inputField.focus()},onPaste:function(e){var t=(e.clipboardData||window.clipboardData).getData("text"),a=this.updatedModelDataAfterPasteAndKeyDown(e.target,t);t.includes("\n")&&(this.isMultilineValue=!0,this.modelData=a)},handleKeyDownEvent:function(e){if("Enter"===e.code&&e.shiftKey){e.preventDefault();var t=this.updatedModelDataAfterPasteAndKeyDown(e.target);this.isMultilineValue=!0,this.modelData=t}},updatedModelDataAfterPasteAndKeyDown:function(e,t){var a=e.selectionStart,n=e.selectionEnd;return this.modelData.substring(0,a)+(t=t||"\n")+this.modelData.substring(n,this.modelData.length)}}}),i={class:"ac-single-input is-small is-information"},l={key:0,class:"ac-single-switch is-small is-flex pb-10"},o=["id"],r=["for"],s={key:0},c=["type","placeholder"],d=["type","placeholder"],u={key:0,class:"button is-information"},m=[a.createElementVNode("i",{class:"fa fa-check"},null,-1)],p={key:1,class:"button is-information is-warning"},h=[a.createElementVNode("i",{class:"fa fa-times"},null,-1)],f={key:3,class:"is-error"},v=a.createElementVNode("span",{class:"warning"},[a.createElementVNode("i",{class:"fa fa-warning"})],-1),g=["type","placeholder"],y={key:0,class:"button is-information is-success"},b=[a.createElementVNode("i",{class:"fa fa-check"},null,-1)],k={key:1,class:"button is-information is-warning"},D=[a.createElementVNode("i",{class:"fa fa-times"},null,-1)],w={key:1,class:"is-warning"},V=a.createElementVNode("i",{class:"fa fa-warning warning"},null,-1);n.render=function(e,t,n,E,B,N){return a.openBlock(),a.createElementBlock("div",i,["input"===e.ui.tag?(a.openBlock(),a.createElementBlock(a.Fragment,{key:0},["checkbox"===e.ui.type?(a.openBlock(),a.createElementBlock("div",l,[a.withDirectives(a.createElementVNode("input",{id:e.identifier,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.modelData=t}),type:"checkbox",name:"switchRoundedDefault",class:"switch ac-switch is-rounded is-primary"},null,8,o),[[a.vModelCheckbox,e.modelData]]),a.createElementVNode("label",{class:"switch-label",for:e.identifier},a.toDisplayString(e.schema.title),9,r)])):(a.openBlock(),a.createElementBlock(a.Fragment,{key:1},[a.createElementVNode("label",{class:a.normalizeClass([e.labelShow?"show-label":"","ac-label"]),onClick:t[1]||(t[1]=a.withModifiers((function(t){return e.focusInput()}),["prevent"]))},a.toDisplayString(e.schema.title),3),"input"===e.ui.tag?(a.openBlock(),a.createElementBlock("div",s,[e.isMultilineValue?a.withDirectives((a.openBlock(),a.createElementBlock("textarea",{key:0,ref:"textareaField","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.modelData=t}),class:a.normalizeClass(["ac-input",{"is-success":e.validationOb.dirty&&e.validationOb.valid,"is-danger":e.validationOb.dirty&&!e.validationOb.valid,"bg-white":e.modelData}]),style:{"min-height":"100px"},type:e.ui.type,placeholder:e.ui.placeholder||"",onChange:t[3]||(t[3]=function(t){return e.modelData=t.target.value}),onFocus:t[4]||(t[4]=function(t){return e.triggerInput()}),onFocusout:t[5]||(t[5]=function(t){return e.unTriggerInput()}),onPaste:t[6]||(t[6]=function(){return e.onPaste&&e.onPaste.apply(e,arguments)})},null,42,c)),[[a.vModelText,e.modelData]]):a.withDirectives((a.openBlock(),a.createElementBlock("input",{key:1,ref:"inputField","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.modelData=t}),class:a.normalizeClass(["ac-input",{"is-success":e.validationOb.dirty&&e.validationOb.valid,"is-danger":e.validationOb.dirty&&!e.validationOb.valid,"bg-white":e.modelData}]),type:e.ui.type,placeholder:e.ui.placeholder||"",onChange:t[8]||(t[8]=function(t){return e.modelData=t.target.value}),onFocus:t[9]||(t[9]=function(t){return e.triggerInput()}),onFocusout:t[10]||(t[10]=function(t){return e.unTriggerInput()}),onPaste:t[11]||(t[11]=function(){return e.onPaste&&e.onPaste.apply(e,arguments)})},null,42,d)),[[a.vModelDynamic,e.modelData]]),e.validationOb.dirty?(a.openBlock(),a.createElementBlock(a.Fragment,{key:2},[e.validationOb.valid?(a.openBlock(),a.createElementBlock("span",u,m)):a.createCommentVNode("",!0),e.validationOb.valid?a.createCommentVNode("",!0):(a.openBlock(),a.createElementBlock("span",p,h))],64)):a.createCommentVNode("",!0),e.validationOb&&e.validationOb.errors&&e.validationOb.errors.length>0?(a.openBlock(),a.createElementBlock("p",f,[v,a.createTextVNode(" "+a.toDisplayString(e.validationOb.errors[0]),1)])):a.createCommentVNode("",!0)])):a.createCommentVNode("",!0)],64))],64)):a.createCommentVNode("",!0),"textarea"===e.ui.tag?(a.openBlock(),a.createElementBlock(a.Fragment,{key:1},[a.withDirectives(a.createElementVNode("textarea",{"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.modelData=t}),class:a.normalizeClass(["input",{"is-success":e.validationOb.dirty&&e.validationOb.valid,"is-danger":e.validationOb.dirty&&!e.validationOb.valid}]),type:e.ui.type,placeholder:e.ui.placeholder||"",onChange:t[13]||(t[13]=function(t){return e.modelData=t.target.value})},null,42,g),[[a.vModelText,e.modelData]]),e.validationOb.dirty?(a.openBlock(),a.createElementBlock(a.Fragment,{key:0},[e.valid?(a.openBlock(),a.createElementBlock("button",y,b)):a.createCommentVNode("",!0),e.invalid?(a.openBlock(),a.createElementBlock("button",k,D)):a.createCommentVNode("",!0)],64)):a.createCommentVNode("",!0),e.validationOb.errors.length>0?(a.openBlock(),a.createElementBlock("span",w,[V,a.createTextVNode(" "+a.toDisplayString(e.validationOb.errors[0]),1)])):a.createCommentVNode("",!0)],64)):a.createCommentVNode("",!0)])},exports.default=n;