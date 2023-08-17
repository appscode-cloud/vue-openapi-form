import{defineComponent as e,defineAsyncComponent as a,ref as t,computed as l,watch as o,openBlock as i,createElementBlock as n,createBlock as d,unref as r,createCommentVNode as u,normalizeClass as s}from"vue";var p=e({__name:"Editor",props:{modelValue:{default:""},originalValue:{default:""},readOnly:{type:Boolean,default:!1},language:{default:""},showMinimap:{type:Boolean,default:!1},editorHeight:{default:40},editorTheme:{default:""},wordWrap:{default:"on"}},emits:["update:modelValue"],setup(e,{emit:p}){const m=e,v=a((()=>import("./EditorTabs-7be0f4d5.js"))),g=a((()=>import("./Preloader-e17b7349.js"))),c=a((()=>import("./Banner-3286242e.js"))),f=a({loader:()=>import("./MonacoEditor-a99457f1.js").then((function(e){return e.M})),loadingComponent:g,delay:200,errorComponent:c,timeout:1e5}),h=t("edit"),y=t(""),w=t(""),b=l((()=>{const e=y.value.split("\n").length;return m.showMinimap&&2*e>m.editorHeight})),B=l((()=>m.editorTheme||(document.documentElement.classList.contains("is-dark-theme")?"vs-dark":"vs"))),E=e=>{"string"==typeof e&&(y.value=e)},T=e=>{e.onDidBlurEditorText instanceof Function&&e.onDidBlurEditorText((()=>{p("update:modelValue",y.value)}))};return o((()=>m.modelValue),(e=>{y.value!==e&&(y.value=e)}),{immediate:!0}),o((()=>m.originalValue),(e=>{w.value!==e&&(w.value=e)}),{immediate:!0}),(e,a)=>(i(),n("div",null,[e.readOnly?u("",!0):(i(),d(r(v),{key:0,onTabchange:a[0]||(a[0]=e=>h.value=e),"active-tab":h.value},null,8,["active-tab"])),"edit"===h.value?(i(),d(r(f),{onEditorDidMount:T,key:"edit",class:s(`vh-${e.editorHeight} is-clipped`),value:y.value,onChange:E,language:e.language,options:{minimap:{enabled:b.value},theme:B.value,readOnly:e.readOnly,wordWrap:e.wordWrap,scrollBeyondLastLine:!1},"data-testid":"monaco-editor-edit-section"},null,8,["class","value","language","options"])):u("",!0),"preview"===h.value?(i(),d(r(f),{key:"preview",class:s(`vh-${e.editorHeight} is-clipped`),value:y.value,language:e.language,options:{minimap:{enabled:b.value},theme:B.value,readOnly:!0,wordWrap:e.wordWrap,scrollBeyondLastLine:!1},original:w.value,"diff-editor":!0,"data-testid":"monaco-editor-preview-section"},null,8,["class","value","language","options","original"])):u("",!0)]))}});export{p as default};