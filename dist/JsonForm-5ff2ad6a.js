import{m as e,n as i}from"./entry-f499d5be.js";import{M as t,j as a}from"./vue-monaco.es-8016bf07.js";import"vue";var n=i({render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"ml-30"},[t("div",{staticClass:"tabs ac-tabs is-line"},[t("ul",[t("li",{class:{"is-active":"file"===e.activeTab}},[t("a",{on:{click:function(i){i.preventDefault(),e.activeTab="file"}}},[t("span",[e._v("File")])])]),e._v(" "),t("li",{class:{"is-active":"preview-changes"===e.activeTab}},[t("a",{on:{click:function(i){i.preventDefault(),e.activeTab="preview-changes"}}},[t("span",[e._v("Preview Changes")])])])])]),e._v(" "),"file"===e.activeTab?t("div",[t("monaco-editor",{ref:"monacoEditor",staticClass:"editor-writable vh-80 is-clipped",attrs:{options:{minimap:{enabled:!0},theme:e.editorTheme,readOnly:!1},"diff-editor":"preview-changes"===e.activeTab,language:"yaml"},on:{editorDidMount:e.onEditorMount},model:{value:e.valueString,callback:function(i){e.valueString=i},expression:"valueString"}})],1):t("div",[t("monaco-editor",{key:e.activeTab,ref:"monacoDiffEditor",staticClass:"editor-writable vh-80 is-clipped",attrs:{options:{minimap:{enabled:!0},theme:e.editorTheme,readOnly:!0},value:e.valueString,"diff-editor":!0,original:e.originalValueString,language:"yaml"}})],1)])},staticRenderFns:[]},void 0,{name:"yaml-form",props:{value:{type:null,default:function(){return{}}}},inject:["theme"],mixins:[e],components:{MonacoEditor:t},data:function(){return{activeTab:"file",valueString:""}},computed:{originalValueString:function(){return JSON.stringify(this.referenceModel,null,2)},editorTheme:function(){return"dark"===this.theme?"vs-".concat(this.theme):"vs"}},methods:{initValueString:function(){this.valueString=JSON.stringify(this.value,null,2)},updateModelData:function(){var e=null;try{e=a.safeLoad(this.valueString,{json:!0})}catch(i){e=this.modelData}this.modelData=e,this.$emit("code::model-data-updated",e)},onEditorMount:function(){this.$refs.monacoEditor.getEditor().onDidBlurEditorText(this.updateModelData)}},created:function(){this.initValueString()},watch:{value:function(){this.initValueString()}}},void 0,!1,void 0,!1,void 0,void 0,void 0);export default n;