"use strict";var e=require("./entry-c60ce212.js"),i=require("./MonacoEditor-f6b00a1c.js");require("vue");var t={name:"yaml-form",props:{value:{type:null,default:function(){return{}}}},mixins:[e.m],inject:["providedData"],components:{MonacoEditor:i._},data:function(){return{activeTab:"file",valueString:""}},computed:{originalValueString:function(){return i.j.safeDump(this.referenceModel,{lineWidth:2e3})},theme:function(){return this.providedData.theme||"light"},editorTheme:function(){return"dark"===this.theme?"vs-".concat(this.theme):"vs"}},methods:{initValueString:function(){this.valueString=i.j.safeDump(this.value,{lineWidth:2e3})},updateModelData:function(){var e=null;try{e=i.j.safeLoad(this.valueString,{json:!0})}catch(i){e=this.modelData}this.modelData=e,this.$emit("code::model-data-updated",e)},onEditorMount:function(e){e.onDidBlurEditorText(this.updateModelData)}},created:function(){this.initValueString()},watch:{value:function(){this.initValueString()}}},a=e.n({render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"ml-30"},[e._ssrNode('<div class="tabs ac-tabs is-line"><ul><li'+e._ssrClass(null,{"is-active":"file"===e.activeTab})+"><a><span>File</span></a></li> <li"+e._ssrClass(null,{"is-active":"preview-changes"===e.activeTab})+"><a><span>Preview Changes</span></a></li></ul></div> "),"file"===e.activeTab?e._ssrNode("<div>","</div>",[t("monaco-editor",{key:e.editorTheme,staticClass:"editor-writable vh-80 is-clipped",attrs:{options:{minimap:{enabled:!0},theme:e.editorTheme,readOnly:!1},"diff-editor":"preview-changes"===e.activeTab,language:"yaml"},on:{editorDidMount:e.onEditorMount},model:{value:e.valueString,callback:function(i){e.valueString=i},expression:"valueString"}})],1):e._ssrNode("<div>","</div>",[t("monaco-editor",{key:e.activeTab+e.editorTheme,staticClass:"editor-writable vh-80 is-clipped",attrs:{options:{minimap:{enabled:!0},theme:e.editorTheme,readOnly:!0},value:e.valueString,"diff-editor":!0,original:e.originalValueString,language:"yaml"}})],1)],2)},staticRenderFns:[]},undefined,t,undefined,false,"data-v-40feb621",!1,void 0,void 0,void 0);exports.default=a;