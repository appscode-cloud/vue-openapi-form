"use strict";var e=require("vue");const n=e.createElementVNode("div",null," Okay this is a div ",-1);var a=e.defineComponent({__name:"Editor",props:{modelValue:{default:""},originalValue:{default:""},readOnly:{type:Boolean,default:!1},language:{default:""},showMinimap:{type:Boolean,default:!1},editorHeight:{default:40},editorTheme:{default:""},wordWrap:{default:"on"}},emits:["update:modelValue"],setup(a,{emit:o}){const t=a,l=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./EditorTabs-b2305569.js")})))),i=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./Preloader-46710ac3.js")})))),r=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./Banner-bfcd6aac.js")})))),d=e.defineAsyncComponent({loader:()=>Promise.resolve().then((function(){return require("./MonacoEditor-3e3a41cf.js")})).then((function(e){return e.M})),loadingComponent:i,delay:200,errorComponent:r,timeout:1e5}),u=e.ref("edit"),s=e.ref(""),c=e.ref(""),m=e.computed((()=>{const e=s.value.split("\n").length;return t.showMinimap&&2*e>t.editorHeight})),p=e.computed((()=>t.editorTheme||(document.documentElement.classList.contains("is-dark-theme")?"vs-dark":"vs"))),v=e=>{"string"==typeof e&&(s.value=e)},f=e=>{e.onDidBlurEditorText instanceof Function&&console.log("Mounted")};return e.watch((()=>t.modelValue),(e=>{s.value!==e&&(s.value=e)}),{immediate:!0}),e.watch((()=>t.originalValue),(e=>{c.value!==e&&(c.value=e)}),{immediate:!0}),(a,o)=>(e.openBlock(),e.createElementBlock("div",null,[a.readOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.unref(l),{key:0,onTabchange:o[0]||(o[0]=e=>u.value=e),"active-tab":u.value},null,8,["active-tab"])),n,"edit"===u.value?(e.openBlock(),e.createBlock(e.unref(d),{onEditorDidMount:f,key:"edit",class:e.normalizeClass(`vh-${a.editorHeight} is-clipped`),value:s.value,onChange:v,language:a.language,options:{minimap:{enabled:m.value},theme:p.value,readOnly:a.readOnly,wordWrap:a.wordWrap,scrollBeyondLastLine:!1},"data-testid":"monaco-editor-edit-section"},null,8,["class","value","language","options"])):e.createCommentVNode("",!0),"preview"===u.value?(e.openBlock(),e.createBlock(e.unref(d),{key:"preview",class:e.normalizeClass(`vh-${a.editorHeight} is-clipped`),value:s.value,language:a.language,options:{minimap:{enabled:m.value},theme:p.value,readOnly:!0,wordWrap:a.wordWrap,scrollBeyondLastLine:!1},original:c.value,"diff-editor":!0,"data-testid":"monaco-editor-preview-section"},null,8,["class","value","language","options","original"])):e.createCommentVNode("",!0)]))}});exports.default=a;