import{defineComponent as e,defineAsyncComponent as a,ref as t,computed as l,watch as o,openBlock as i,createElementBlock as n,createBlock as d,unref as r,createCommentVNode as u,normalizeClass as s,createElementVNode as p}from"vue";const m=p("div",null," Okay this is a div ",-1);var v=e({__name:"Editor",props:{modelValue:{default:""},originalValue:{default:""},readOnly:{type:Boolean,default:!1},language:{default:""},showMinimap:{type:Boolean,default:!1},editorHeight:{default:40},editorTheme:{default:""},wordWrap:{default:"on"}},emits:["update:modelValue"],setup(e,{emit:p}){const v=e,c=a((()=>import("./EditorTabs-7be0f4d5.js"))),g=a((()=>import("./Preloader-e17b7349.js"))),h=a((()=>import("./Banner-3286242e.js"))),f=a({loader:()=>import("./MonacoEditor-4bf1c6b1.js").then((function(e){return e.M})),loadingComponent:g,delay:200,errorComponent:h,timeout:1e5}),y=t("edit"),b=t(""),w=t(""),k=l((()=>{const e=b.value.split("\n").length;return v.showMinimap&&2*e>v.editorHeight})),B=l((()=>v.editorTheme||(document.documentElement.classList.contains("is-dark-theme")?"vs-dark":"vs"))),E=e=>{"string"==typeof e&&(b.value=e)},M=e=>{e.onDidBlurEditorText instanceof Function&&console.log("Mounted")};return o((()=>v.modelValue),(e=>{b.value!==e&&(b.value=e)}),{immediate:!0}),o((()=>v.originalValue),(e=>{w.value!==e&&(w.value=e)}),{immediate:!0}),(e,a)=>(i(),n("div",null,[e.readOnly?u("",!0):(i(),d(r(c),{key:0,onTabchange:a[0]||(a[0]=e=>y.value=e),"active-tab":y.value},null,8,["active-tab"])),m,"edit"===y.value?(i(),d(r(f),{onEditorDidMount:M,key:"edit",class:s(`vh-${e.editorHeight} is-clipped`),value:b.value,onChange:E,language:e.language,options:{minimap:{enabled:k.value},theme:B.value,readOnly:e.readOnly,wordWrap:e.wordWrap,scrollBeyondLastLine:!1},"data-testid":"monaco-editor-edit-section"},null,8,["class","value","language","options"])):u("",!0),"preview"===y.value?(i(),d(r(f),{key:"preview",class:s(`vh-${e.editorHeight} is-clipped`),value:b.value,language:e.language,options:{minimap:{enabled:k.value},theme:B.value,readOnly:!0,wordWrap:e.wordWrap,scrollBeyondLastLine:!1},original:w.value,"diff-editor":!0,"data-testid":"monaco-editor-preview-section"},null,8,["class","value","language","options","original"])):u("",!0)]))}});export{v as default};