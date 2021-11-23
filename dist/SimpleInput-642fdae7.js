"use strict";var t=require("./entry-940ae5c5.js"),i=require("./add-to-unscopables-2c6ce36f.js"),e=require("./size-0b1802de.js");require("vue"),require("./object-create-965f41a9.js");var a=t.l.includes;t._({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i.a("includes");var s=function(i){if(t.p(i))throw TypeError("The method doesn't accept regular expressions");return i},n=t.w("match");t._({target:"String",proto:!0,forced:!function(t){var i=/./;try{"/./"[t](i)}catch(e){try{return i[n]=!1,"/./"[t](i)}catch(t){}}return!1}("includes")},{includes:function(i){return!!~String(t.q(this)).indexOf(s(i),arguments.length>1?arguments[1]:void 0)}});var l={name:"simple-input",data:function(){return{labelShow:!1,isIntegerSetToNull:!1,isMultilineValue:!1}},methods:{triggerInput:function(){this.labelShow=!0},unTriggerInput:function(){this.modelData||(this.labelShow=!1)},focusInput:function(){this.labelShow=!0,this.$refs.inputField.focus()},onPaste:function(t){var i=(t.clipboardData||window.clipboardData).getData("text"),e=this.updatedModelDataAfterPasteAndKeyDown(t.target,i);i.includes("\n")&&(this.isMultilineValue=!0,this.modelData=e)},handleKeyDownEvent:function(t){if("Enter"===t.code&&t.shiftKey){t.preventDefault();var i=this.updatedModelDataAfterPasteAndKeyDown(t.target);this.isMultilineValue=!0,this.modelData=i}},updatedModelDataAfterPasteAndKeyDown:function(t,i){var e=t.selectionStart,a=t.selectionEnd;return this.modelData.substring(0,e)+(i=i||"\n")+this.modelData.substring(a,this.modelData.length)}},props:{schema:{type:Object,default:function(){return{}}},value:{default:""},validationOb:{type:Object,default:function(){return{}}}},mounted:function(){var t;this.modelData&&(this.labelShow=!0),null===(t=this.$refs.inputField)||void 0===t||t.addEventListener("keydown",this.handleKeyDownEvent)},destroyed:function(){var t;null===(t=this.$refs.inputField)||void 0===t||t.removeEventListener("keydown",this.handleKeyDownEvent)},mixins:[t.m,t.v,e.s],computed:{ui:function(){return this.schema.ui||{tag:"input",type:"text"}},identifier:function(){return"id-".concat(this.schema.title.replace(" ","-"),"-").concat(JSON.stringify((new Date).valueOf()))}},watch:{modelData:{immediate:!0,deep:!0,handler:function(t,i){var e=this;this.isMultilineValue&&setTimeout((function(){e.$refs.textareaField.focus()}),0),"string"==typeof t&&t.includes("\n")&&(this.isMultilineValue=!0),this.labelShow=!!t,(this.isIntegerSetToNull||null!=i)&&(this.isIntegerSetToNull&&t&&(this.isIntegerSetToNull=!1),"number"===this.type||"integer"===this.type?""===t?(this.isIntegerSetToNull=!0,this.$emit("input",null)):this.$emit("input",+t):this.$emit("input",t))}}}},r=t.n({render:function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"ac-single-input is-small is-information"},[t._ssrNode(("input"===t.ui.tag?"checkbox"===t.ui.type?'<div class="ac-single-switch is-small is-flex pb-10"><input'+t._ssrAttr("id",t.identifier)+' type="checkbox" name="switchRoundedDefault"'+t._ssrAttr("checked",Array.isArray(t.modelData)?t._i(t.modelData,null)>-1:t.modelData)+' class="switch ac-switch is-rounded is-primary"> <label'+t._ssrAttr("for",t.identifier)+' class="switch-label">'+t._ssrEscape(t._s(t.schema.title))+"</label></div>":"<label"+t._ssrClass(null,[t.labelShow?"show-label":"","ac-label"])+">"+t._ssrEscape(t._s(t.schema.title))+"</label> "+("input"===t.ui.tag?"<div>"+(t.isMultilineValue?"<textarea"+t._ssrAttr("type",t.ui.type)+t._ssrAttr("placeholder",t.ui.placeholder||"")+t._ssrClass("ac-input",{"is-success":t.validationOb.validated&&t.validationOb.valid,"is-danger":t.validationOb.validated&&t.validationOb.invalid,"bg-white":t.modelData})+' style="min-height: 100px">'+t._ssrEscape(t._s(t.modelData))+"</textarea>":"checkbox"===t.ui.type?"<input"+t._ssrAttr("placeholder",t.ui.placeholder||"")+' type="checkbox"'+t._ssrAttr("checked",Array.isArray(t.modelData)?t._i(t.modelData,null)>-1:t.modelData)+t._ssrClass("ac-input",{"is-success":t.validationOb.validated&&t.validationOb.valid,"is-danger":t.validationOb.validated&&t.validationOb.invalid,"bg-white":t.modelData})+">":"radio"===t.ui.type?"<input"+t._ssrAttr("placeholder",t.ui.placeholder||"")+' type="radio"'+t._ssrAttr("checked",t._q(t.modelData,null))+t._ssrClass("ac-input",{"is-success":t.validationOb.validated&&t.validationOb.valid,"is-danger":t.validationOb.validated&&t.validationOb.invalid,"bg-white":t.modelData})+">":"<input"+t._ssrAttr("placeholder",t.ui.placeholder||"")+t._ssrAttr("type",t.ui.type)+t._ssrAttr("value",t.modelData)+t._ssrClass("ac-input",{"is-success":t.validationOb.validated&&t.validationOb.valid,"is-danger":t.validationOb.validated&&t.validationOb.invalid,"bg-white":t.modelData})+">")+" "+(t.validationOb.validated?(t.validationOb.valid?'<span class="button is-information"><i class="fa fa-check"></i></span>':"\x3c!----\x3e")+" "+(t.validationOb.invalid?'<span class="button is-information is-warning"><i class="fa fa-times"></i></span>':"\x3c!----\x3e"):"\x3c!----\x3e")+" "+(t.validationOb&&t.validationOb.errors&&t.validationOb.errors.length>0?'<p class="is-error"><span class="warning"><i class="fa fa-warning"></i></span>'+t._ssrEscape("\n          "+t._s(t.validationOb.errors[0])+"\n        ")+"</p>":"\x3c!----\x3e")+"</div>":"\x3c!----\x3e"):"\x3c!----\x3e")+" "+("textarea"===t.ui.tag?"<textarea"+t._ssrAttr("type",t.ui.type)+t._ssrAttr("placeholder",t.ui.placeholder||"")+t._ssrClass("input",{"is-success":t.validationOb.validated&&t.validationOb.valid,"is-danger":t.validationOb.validated&&t.validationOb.invalid})+">"+t._ssrEscape(t._s(t.modelData))+"</textarea> "+(t.validationOb.validated?(t.valid?'<button class="button is-information is-success"><i class="fa fa-check"></i></button>':"\x3c!----\x3e")+" "+(t.invalid?'<button class="button is-information is-warning"><i class="fa fa-times"></i></button>':"\x3c!----\x3e"):"\x3c!----\x3e")+" "+(t.validationOb.errors.length>0?'<span class="is-warning"><i class="fa fa-warning warning"></i>'+t._ssrEscape("\n      "+t._s(t.validationOb.errors[0])+"\n    ")+"</span>":"\x3c!----\x3e"):"\x3c!----\x3e"))])},staticRenderFns:[]},void 0,l,void 0,!1,"data-v-618f6ffa",!1,void 0,void 0,void 0);exports.default=r;