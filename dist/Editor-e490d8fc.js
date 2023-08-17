import{defineComponent as e,defineAsyncComponent as a,ref as t,computed as o,watch as l,openBlock as i,createElementBlock as n,createBlock as d,unref as r,createCommentVNode as u,normalizeClass as s}from"vue";var m=e({__name:"Editor",props:{modelValue:{default:""},originalValue:{default:""},readOnly:{type:Boolean,default:!1},language:{default:""},showMinimap:{type:Boolean,default:!1},editorHeight:{default:40},editorTheme:{default:""},wordWrap:{default:"on"}},emits:["update:modelValue"],setup(e,{emit:m}){const p=e,v=a((()=>import("./EditorTabs-7be0f4d5.js"))),c=a((()=>import("./Preloader-e17b7349.js"))),g=a((()=>import("./Banner-3286242e.js"))),f=a({loader:()=>import("./MonacoEditor-1f52a2f5.js").then((function(e){return e.M})),loadingComponent:c,delay:200,errorComponent:g,timeout:1e5}),h=t("edit"),y=t(""),b=t(""),E=o((()=>{const e=y.value.split("\n").length;return p.showMinimap&&2*e>p.editorHeight})),B=o((()=>p.editorTheme||(document.documentElement.classList.contains("is-dark-theme")?"vs-dark":"vs"))),T=e=>{"string"==typeof e&&(y.value=e)},V=e=>{e.onDidBlurEditorText instanceof Function&&e.onDidBlurEditorText((()=>{m("update:modelValue",y.value)}))};return l((()=>p.modelValue),(e=>{y.value!==e&&(y.value=e)}),{immediate:!0}),l((()=>p.originalValue),(e=>{b.value!==e&&(b.value=e)}),{immediate:!0}),(e,a)=>(i(),n("div",null,[e.readOnly?u("",!0):(i(),d(r(v),{key:0,onTabchange:a[0]||(a[0]=e=>h.value=e),"active-tab":h.value},null,8,["active-tab"])),"edit"===h.value?(i(),d(r(f),{onEditorDidMount:V,key:"edit",class:s(`vh-${e.editorHeight} is-clipped`),value:y.value,onChange:T,language:e.language,options:{minimap:{enabled:E.value},theme:B.value,readOnly:e.readOnly,wordWrap:e.wordWrap,scrollBeyondLastLine:!1},"data-testid":"monaco-editor-edit-section"},null,8,["class","value","language","options"])):u("",!0)]))}});export{m as default};