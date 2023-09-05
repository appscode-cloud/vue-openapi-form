"use strict";var e=require("vue"),t=e.defineComponent({__name:"Editor",props:{modelValue:{default:""},originalValue:{default:""},readOnly:{type:Boolean,default:!1},language:{default:""},showMinimap:{type:Boolean,default:!1},editorHeight:{default:40},editorTheme:{default:""},wordWrap:{default:"on"}},emits:["update:modelValue"],setup(t,{emit:a}){const o=t,n=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./EditorTabs-6c4f69d6.js")})))),l=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./Preloader-46710ac3.js")})))),i=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./Banner-bfcd6aac.js")})))),r=e.defineAsyncComponent({loader:()=>Promise.resolve().then((function(){return require("./MonacoEditor-d4ecdf68.js")})),loadingComponent:l,delay:200,errorComponent:i,timeout:1e5}),u=e.ref("edit"),d=e.ref(""),s=e.ref(""),c=e.computed((()=>{const e=d.value.split("\n").length;return o.showMinimap&&e>25})),m=e.computed((()=>o.editorTheme||(document.documentElement.classList.contains("is-dark-theme")?"vs-dark":"vs"))),p=e=>{"string"==typeof e&&(d.value=e)},v=e=>{e.onDidBlurEditorText instanceof Function&&e.onDidBlurEditorText((()=>{a("update:modelValue",d.value)}))},f=e.computed((()=>"number"==typeof o.editorHeight?`vh-${o.editorHeight}`:"")),g=e.computed((()=>"string"==typeof o.editorHeight?{height:o.editorHeight}:{}));return e.watch((()=>o.modelValue),(e=>{d.value!==e&&(d.value=e)}),{immediate:!0}),e.watch((()=>o.originalValue),(e=>{s.value!==e&&(s.value=e)}),{immediate:!0}),(t,a)=>(e.openBlock(),e.createElementBlock("div",null,[t.readOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.unref(n),{key:0,onTabchange:a[0]||(a[0]=e=>u.value=e),"active-tab":u.value},null,8,["active-tab"])),"edit"===u.value?(e.openBlock(),e.createBlock(e.unref(r),{onEditorDidMount:v,key:"edit",class:e.normalizeClass(["is-clipped",f.value]),style:e.normalizeStyle(g.value),value:d.value,onChange:p,language:t.language,options:{minimap:{enabled:c.value},theme:m.value,readOnly:t.readOnly,wordWrap:t.wordWrap,scrollBeyondLastLine:!1},"data-testid":"monaco-editor-edit-section"},null,8,["class","style","value","language","options"])):e.createCommentVNode("",!0),"preview"===u.value?(e.openBlock(),e.createBlock(e.unref(r),{key:"preview",class:e.normalizeClass(["is-clipped",f.value]),style:e.normalizeStyle(g.value),value:d.value,language:t.language,options:{minimap:{enabled:c.value},theme:m.value,readOnly:!0,wordWrap:t.wordWrap,scrollBeyondLastLine:!1},original:s.value,"diff-editor":!0,"data-testid":"monaco-editor-preview-section"},null,8,["class","style","value","language","options","original"])):e.createCommentVNode("",!0)]))}});exports.default=t;