/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of MH(t))TH.call(e,o)||!i&&"default"===o||EH(e,o,{get:()=>t[o],enumerable:!(n=IH(t,o))||n.enumerable})})(AH,NH);var OH={},RH={},PH=class{static getOrCreate(e){return RH[e]||(RH[e]=new PH(e)),RH[e]}_languageId;_loadingTriggered;_lazyLoadPromise;_lazyLoadPromiseResolve;_lazyLoadPromiseReject;constructor(e){this._languageId=e,this._loadingTriggered=!1,this._lazyLoadPromise=new Promise(((e,t)=>{this._lazyLoadPromiseResolve=e,this._lazyLoadPromiseReject=t}))}load(){return this._loadingTriggered||(this._loadingTriggered=!0,OH[this._languageId].loader().then((e=>this._lazyLoadPromiseResolve(e)),(e=>this._lazyLoadPromiseReject(e)))),this._lazyLoadPromise}};function FH(e){const t=e.id;OH[t]=e,AH.languages.register(e);const i=PH.getOrCreate(t);AH.languages.registerTokensProviderFactory(t,{create:async()=>(await i.load()).language}),AH.languages.onLanguage(t,(async()=>{const e=await i.load();AH.languages.setLanguageConfiguration(t,e.conf)}))}
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/FH({id:"abap",extensions:[".abap"],aliases:["abap","ABAP"],loader:()=>Promise.resolve().then((function(){return require("./abap-2f71773d.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"apex",extensions:[".cls"],aliases:["Apex","apex"],mimetypes:["text/x-apex-source","text/x-apex"],loader:()=>Promise.resolve().then((function(){return require("./apex-4ec94859.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:()=>Promise.resolve().then((function(){return require("./azcli-a4e449a4.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:()=>Promise.resolve().then((function(){return require("./bat-71f1be91.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"bicep",extensions:[".bicep"],aliases:["Bicep"],loader:()=>Promise.resolve().then((function(){return require("./bicep-b373c963.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"cameligo",extensions:[".mligo"],aliases:["Cameligo"],loader:()=>Promise.resolve().then((function(){return require("./cameligo-1899bf56.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:()=>Promise.resolve().then((function(){return require("./clojure-8ee59aaa.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"coffeescript",extensions:[".coffee"],aliases:["CoffeeScript","coffeescript","coffee"],mimetypes:["text/x-coffeescript","text/coffeescript"],loader:()=>Promise.resolve().then((function(){return require("./coffee-589d41dc.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"c",extensions:[".c",".h"],aliases:["C","c"],loader:()=>Promise.resolve().then((function(){return require("./cpp-9cd006a2.js")}))}),FH({id:"cpp",extensions:[".cpp",".cc",".cxx",".hpp",".hh",".hxx"],aliases:["C++","Cpp","cpp"],loader:()=>Promise.resolve().then((function(){return require("./cpp-9cd006a2.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"csharp",extensions:[".cs",".csx",".cake"],aliases:["C#","csharp"],loader:()=>Promise.resolve().then((function(){return require("./csharp-6560f9d4.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"csp",extensions:[],aliases:["CSP","csp"],loader:()=>Promise.resolve().then((function(){return require("./csp-c4b27a3f.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"css",extensions:[".css"],aliases:["CSS","css"],mimetypes:["text/css"],loader:()=>Promise.resolve().then((function(){return require("./css-b5b8ae8c.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"dart",extensions:[".dart"],aliases:["Dart","dart"],mimetypes:["text/x-dart-source","text/x-dart"],loader:()=>Promise.resolve().then((function(){return require("./dart-a6b1d48b.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"dockerfile",extensions:[".dockerfile"],filenames:["Dockerfile"],aliases:["Dockerfile"],loader:()=>Promise.resolve().then((function(){return require("./dockerfile-f04fb2f5.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"ecl",extensions:[".ecl"],aliases:["ECL","Ecl","ecl"],loader:()=>Promise.resolve().then((function(){return require("./ecl-90479b29.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"elixir",extensions:[".ex",".exs"],aliases:["Elixir","elixir","ex"],loader:()=>Promise.resolve().then((function(){return require("./elixir-4e5ebb2e.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"flow9",extensions:[".flow"],aliases:["Flow9","Flow","flow9","flow"],loader:()=>Promise.resolve().then((function(){return require("./flow9-01ee6eed.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"fsharp",extensions:[".fs",".fsi",".ml",".mli",".fsx",".fsscript"],aliases:["F#","FSharp","fsharp"],loader:()=>Promise.resolve().then((function(){return require("./fsharp-064ac398.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"freemarker2",extensions:[".ftl",".ftlh",".ftlx"],aliases:["FreeMarker2","Apache FreeMarker2"],loader:()=>Promise.resolve().then((function(){return require("./freemarker2-9cd70f99.js")})).then((e=>e.TagAutoInterpolationDollar))}),FH({id:"freemarker2.tag-angle.interpolation-dollar",aliases:["FreeMarker2 (Angle/Dollar)","Apache FreeMarker2 (Angle/Dollar)"],loader:()=>Promise.resolve().then((function(){return require("./freemarker2-9cd70f99.js")})).then((e=>e.TagAngleInterpolationDollar))}),FH({id:"freemarker2.tag-bracket.interpolation-dollar",aliases:["FreeMarker2 (Bracket/Dollar)","Apache FreeMarker2 (Bracket/Dollar)"],loader:()=>Promise.resolve().then((function(){return require("./freemarker2-9cd70f99.js")})).then((e=>e.TagBracketInterpolationDollar))}),FH({id:"freemarker2.tag-angle.interpolation-bracket",aliases:["FreeMarker2 (Angle/Bracket)","Apache FreeMarker2 (Angle/Bracket)"],loader:()=>Promise.resolve().then((function(){return require("./freemarker2-9cd70f99.js")})).then((e=>e.TagAngleInterpolationBracket))}),FH({id:"freemarker2.tag-bracket.interpolation-bracket",aliases:["FreeMarker2 (Bracket/Bracket)","Apache FreeMarker2 (Bracket/Bracket)"],loader:()=>Promise.resolve().then((function(){return require("./freemarker2-9cd70f99.js")})).then((e=>e.TagBracketInterpolationBracket))}),FH({id:"freemarker2.tag-auto.interpolation-dollar",aliases:["FreeMarker2 (Auto/Dollar)","Apache FreeMarker2 (Auto/Dollar)"],loader:()=>Promise.resolve().then((function(){return require("./freemarker2-9cd70f99.js")})).then((e=>e.TagAutoInterpolationDollar))}),FH({id:"freemarker2.tag-auto.interpolation-bracket",aliases:["FreeMarker2 (Auto/Bracket)","Apache FreeMarker2 (Auto/Bracket)"],loader:()=>Promise.resolve().then((function(){return require("./freemarker2-9cd70f99.js")})).then((e=>e.TagAutoInterpolationBracket))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"go",extensions:[".go"],aliases:["Go"],loader:()=>Promise.resolve().then((function(){return require("./go-1cd19a5d.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"graphql",extensions:[".graphql",".gql"],aliases:["GraphQL","graphql","gql"],mimetypes:["application/graphql"],loader:()=>Promise.resolve().then((function(){return require("./graphql-8f792b2f.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"handlebars",extensions:[".handlebars",".hbs"],aliases:["Handlebars","handlebars","hbs"],mimetypes:["text/x-handlebars-template"],loader:()=>Promise.resolve().then((function(){return require("./handlebars-54e50eb7.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"hcl",extensions:[".tf",".tfvars",".hcl"],aliases:["Terraform","tf","HCL","hcl"],loader:()=>Promise.resolve().then((function(){return require("./hcl-60df4ce8.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"html",extensions:[".html",".htm",".shtml",".xhtml",".mdoc",".jsp",".asp",".aspx",".jshtm"],aliases:["HTML","htm","html","xhtml"],mimetypes:["text/html","text/x-jshtm","text/template","text/ng-template"],loader:()=>Promise.resolve().then((function(){return require("./html-793470ac.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"ini",extensions:[".ini",".properties",".gitconfig"],filenames:["config",".gitattributes",".gitconfig",".editorconfig"],aliases:["Ini","ini"],loader:()=>Promise.resolve().then((function(){return require("./ini-38da5693.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"java",extensions:[".java",".jav"],aliases:["Java","java"],mimetypes:["text/x-java-source","text/x-java"],loader:()=>Promise.resolve().then((function(){return require("./java-996f72e9.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"javascript",extensions:[".js",".es6",".jsx",".mjs",".cjs"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"],loader:()=>Promise.resolve().then((function(){return require("./javascript-1c4ff531.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"julia",extensions:[".jl"],aliases:["julia","Julia"],loader:()=>Promise.resolve().then((function(){return require("./julia-708043a1.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"kotlin",extensions:[".kt"],aliases:["Kotlin","kotlin"],mimetypes:["text/x-kotlin-source","text/x-kotlin"],loader:()=>Promise.resolve().then((function(){return require("./kotlin-27861ec1.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"less",extensions:[".less"],aliases:["Less","less"],mimetypes:["text/x-less","text/less"],loader:()=>Promise.resolve().then((function(){return require("./less-2fa2abc7.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"lexon",extensions:[".lex"],aliases:["Lexon"],loader:()=>Promise.resolve().then((function(){return require("./lexon-4a7f091b.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"lua",extensions:[".lua"],aliases:["Lua","lua"],loader:()=>Promise.resolve().then((function(){return require("./lua-95b11558.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"liquid",extensions:[".liquid",".html.liquid"],aliases:["Liquid","liquid"],mimetypes:["application/liquid"],loader:()=>Promise.resolve().then((function(){return require("./liquid-3f778f7d.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"m3",extensions:[".m3",".i3",".mg",".ig"],aliases:["Modula-3","Modula3","modula3","m3"],loader:()=>Promise.resolve().then((function(){return require("./m3-2eabbaaa.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"markdown",extensions:[".md",".markdown",".mdown",".mkdn",".mkd",".mdwn",".mdtxt",".mdtext"],aliases:["Markdown","markdown"],loader:()=>Promise.resolve().then((function(){return require("./markdown-1aa8cc89.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"mips",extensions:[".s"],aliases:["MIPS","MIPS-V"],mimetypes:["text/x-mips","text/mips","text/plaintext"],loader:()=>Promise.resolve().then((function(){return require("./mips-8efa74d5.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"msdax",extensions:[".dax",".msdax"],aliases:["DAX","MSDAX"],loader:()=>Promise.resolve().then((function(){return require("./msdax-8c8e485b.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"mysql",extensions:[],aliases:["MySQL","mysql"],loader:()=>Promise.resolve().then((function(){return require("./mysql-8a64c7e0.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"objective-c",extensions:[".m"],aliases:["Objective-C"],loader:()=>Promise.resolve().then((function(){return require("./objective-c-ae1ba7a5.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"pascal",extensions:[".pas",".p",".pp"],aliases:["Pascal","pas"],mimetypes:["text/x-pascal-source","text/x-pascal"],loader:()=>Promise.resolve().then((function(){return require("./pascal-7c51273f.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"pascaligo",extensions:[".ligo"],aliases:["Pascaligo","ligo"],loader:()=>Promise.resolve().then((function(){return require("./pascaligo-8e8167e7.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"perl",extensions:[".pl"],aliases:["Perl","pl"],loader:()=>Promise.resolve().then((function(){return require("./perl-6e501070.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"pgsql",extensions:[],aliases:["PostgreSQL","postgres","pg","postgre"],loader:()=>Promise.resolve().then((function(){return require("./pgsql-5d9938c5.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],loader:()=>Promise.resolve().then((function(){return require("./php-fece230d.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"pla",extensions:[".pla"],loader:()=>Promise.resolve().then((function(){return require("./pla-465a96bd.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"postiats",extensions:[".dats",".sats",".hats"],aliases:["ATS","ATS/Postiats"],loader:()=>Promise.resolve().then((function(){return require("./postiats-f0a86d4a.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"powerquery",extensions:[".pq",".pqm"],aliases:["PQ","M","Power Query","Power Query M"],loader:()=>Promise.resolve().then((function(){return require("./powerquery-555d3d23.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"powershell",extensions:[".ps1",".psm1",".psd1"],aliases:["PowerShell","powershell","ps","ps1"],loader:()=>Promise.resolve().then((function(){return require("./powershell-731f6020.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"proto",extensions:[".proto"],aliases:["protobuf","Protocol Buffers"],loader:()=>Promise.resolve().then((function(){return require("./protobuf-c48339ee.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"pug",extensions:[".jade",".pug"],aliases:["Pug","Jade","jade"],loader:()=>Promise.resolve().then((function(){return require("./pug-2544e14d.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"python",extensions:[".py",".rpy",".pyw",".cpy",".gyp",".gypi"],aliases:["Python","py"],firstLine:"^#!/.*\\bpython[0-9.-]*\\b",loader:()=>Promise.resolve().then((function(){return require("./python-ade409b6.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"qsharp",extensions:[".qs"],aliases:["Q#","qsharp"],loader:()=>Promise.resolve().then((function(){return require("./qsharp-6ad37c67.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"r",extensions:[".r",".rhistory",".rmd",".rprofile",".rt"],aliases:["R","r"],loader:()=>Promise.resolve().then((function(){return require("./r-22f5d106.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:()=>Promise.resolve().then((function(){return require("./razor-2dbfb9d4.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"redis",extensions:[".redis"],aliases:["redis"],loader:()=>Promise.resolve().then((function(){return require("./redis-32ed01de.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"redshift",extensions:[],aliases:["Redshift","redshift"],loader:()=>Promise.resolve().then((function(){return require("./redshift-cc2840ac.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"restructuredtext",extensions:[".rst"],aliases:["reStructuredText","restructuredtext"],loader:()=>Promise.resolve().then((function(){return require("./restructuredtext-a11916eb.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"ruby",extensions:[".rb",".rbx",".rjs",".gemspec",".pp"],filenames:["rakefile","Gemfile"],aliases:["Ruby","rb"],loader:()=>Promise.resolve().then((function(){return require("./ruby-358f28c8.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"rust",extensions:[".rs",".rlib"],aliases:["Rust","rust"],loader:()=>Promise.resolve().then((function(){return require("./rust-903bcdfe.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"sb",extensions:[".sb"],aliases:["Small Basic","sb"],loader:()=>Promise.resolve().then((function(){return require("./sb-53fc32d1.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"scala",extensions:[".scala",".sc",".sbt"],aliases:["Scala","scala","SBT","Sbt","sbt","Dotty","dotty"],mimetypes:["text/x-scala-source","text/x-scala","text/x-sbt","text/x-dotty"],loader:()=>Promise.resolve().then((function(){return require("./scala-68ff0047.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"scheme",extensions:[".scm",".ss",".sch",".rkt"],aliases:["scheme","Scheme"],loader:()=>Promise.resolve().then((function(){return require("./scheme-b9e63a3d.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:()=>Promise.resolve().then((function(){return require("./scss-ab73fa81.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"shell",extensions:[".sh",".bash"],aliases:["Shell","sh"],loader:()=>Promise.resolve().then((function(){return require("./shell-a626c1d3.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"sol",extensions:[".sol"],aliases:["sol","solidity","Solidity"],loader:()=>Promise.resolve().then((function(){return require("./solidity-34f01501.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"aes",extensions:[".aes"],aliases:["aes","sophia","Sophia"],loader:()=>Promise.resolve().then((function(){return require("./sophia-594118ee.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"sparql",extensions:[".rq"],aliases:["sparql","SPARQL"],loader:()=>Promise.resolve().then((function(){return require("./sparql-0a2cea00.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"sql",extensions:[".sql"],aliases:["SQL"],loader:()=>Promise.resolve().then((function(){return require("./sql-85955375.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib"],aliases:["StructuredText","scl","stl"],loader:()=>Promise.resolve().then((function(){return require("./st-d132ae76.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"swift",aliases:["Swift","swift"],extensions:[".swift"],mimetypes:["text/swift"],loader:()=>Promise.resolve().then((function(){return require("./swift-b8712276.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"systemverilog",extensions:[".sv",".svh"],aliases:["SV","sv","SystemVerilog","systemverilog"],loader:()=>Promise.resolve().then((function(){return require("./systemverilog-1a618649.js")}))}),FH({id:"verilog",extensions:[".v",".vh"],aliases:["V","v","Verilog","verilog"],loader:()=>Promise.resolve().then((function(){return require("./systemverilog-1a618649.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"tcl",extensions:[".tcl"],aliases:["tcl","Tcl","tcltk","TclTk","tcl/tk","Tcl/Tk"],loader:()=>Promise.resolve().then((function(){return require("./tcl-583e5299.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"twig",extensions:[".twig"],aliases:["Twig","twig"],mimetypes:["text/x-twig"],loader:()=>Promise.resolve().then((function(){return require("./twig-52dbefd1.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"typescript",extensions:[".ts",".tsx"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"],loader:()=>Promise.resolve().then((function(){return require("./typescript-3c740f94.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"vb",extensions:[".vb"],aliases:["Visual Basic","vb"],loader:()=>Promise.resolve().then((function(){return require("./vb-950b9ec8.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"xml",extensions:[".xml",".dtd",".ascx",".csproj",".config",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:()=>Promise.resolve().then((function(){return require("./xml-95137716.js")}))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
FH({id:"yaml",extensions:[".yaml",".yml"],aliases:["YAML","yaml","YML","yml"],mimetypes:["application/x-yaml","text/x-yaml"],loader:()=>Promise.resolve().then((function(){return require("./yaml-40fd9ff0.js")}))});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var BH=Object.defineProperty,VH=Object.getOwnPropertyDescriptor,WH=Object.getOwnPropertyNames,HH=Object.prototype.hasOwnProperty,zH={};((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of WH(t))HH.call(e,o)||!i&&"default"===o||BH(e,o,{get:()=>t[o],enumerable:!(n=VH(t,o))||n.enumerable})})(zH,NH);var UH=class{_onDidChange=new zH.Emitter;_options;_modeConfiguration;_languageId;constructor(e,t,i){this._languageId=e,this.setOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this.options}get options(){return this._options}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setDiagnosticsOptions(e){this.setOptions(e)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},KH={validate:!0,lint:{compatibleVendorPrefixes:"ignore",vendorPrefix:"warning",duplicateProperties:"warning",emptyRules:"warning",importStatement:"ignore",boxModel:"ignore",universalSelector:"ignore",zeroUnits:"ignore",fontFaceProperties:"warning",hexColorLength:"error",argumentsInColorFunction:"error",unknownProperties:"warning",ieHack:"ignore",unknownVendorSpecificProperties:"ignore",propertyIgnoredDueToDisplay:"warning",important:"ignore",float:"ignore",idSelector:"ignore"},data:{useDefaultDataProvider:!0}},jH={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0},$H=new UH("css",KH,jH),qH=new UH("scss",KH,jH),GH=new UH("less",KH,jH);function ZH(){return Promise.resolve().then((function(){return require("./cssMode-5ec032d6.js")}))}zH.languages.css={cssDefaults:$H,lessDefaults:GH,scssDefaults:qH},zH.languages.onLanguage("less",(()=>{ZH().then((e=>e.setupMode(GH)))})),zH.languages.onLanguage("scss",(()=>{ZH().then((e=>e.setupMode(qH)))})),zH.languages.onLanguage("css",(()=>{ZH().then((e=>e.setupMode($H)))}));
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var YH=Object.defineProperty,XH=Object.getOwnPropertyDescriptor,QH=Object.getOwnPropertyNames,JH=Object.prototype.hasOwnProperty,ez={};((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of QH(t))JH.call(e,o)||!i&&"default"===o||YH(e,o,{get:()=>t[o],enumerable:!(n=XH(t,o))||n.enumerable})})(ez,NH);var tz={format:{tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',contentUnformatted:"pre",indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:void 0,indentHandlebars:!1,endWithNewline:!1,extraLiners:"head, body, /html",wrapAttributes:"auto"},suggest:{},data:{useDefaultDataProvider:!0}};function iz(e){return{completionItems:!0,hovers:!0,documentSymbols:!0,links:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,selectionRanges:!0,diagnostics:e===nz,documentFormattingEdits:e===nz,documentRangeFormattingEdits:e===nz}}var nz="html",oz="handlebars",sz="razor",rz=uz(nz,tz,iz(nz)),az=rz.defaults,lz=uz(oz,tz,iz(oz)),hz=lz.defaults,dz=uz(sz,tz,iz(sz)),cz=dz.defaults;function uz(e,t=tz,i=iz(e)){const n=new class{_onDidChange=new ez.Emitter;_options;_modeConfiguration;_languageId;constructor(e,t,i){this._languageId=e,this.setOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get options(){return this._options}get modeConfiguration(){return this._modeConfiguration}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}}(e,t,i);let o;const s=ez.languages.onLanguage(e,(async()=>{o=(await Promise.resolve().then((function(){return require("./htmlMode-7e08439a.js")}))).setupMode(n)}));return{defaults:n,dispose(){s.dispose(),o?.dispose(),o=void 0}}}
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ez.languages.html={htmlDefaults:az,razorDefaults:cz,handlebarDefaults:hz,htmlLanguageService:rz,handlebarLanguageService:lz,razorLanguageService:dz,registerHTMLLanguageService:uz};var gz=Object.defineProperty,pz=Object.getOwnPropertyDescriptor,mz=Object.getOwnPropertyNames,fz=Object.prototype.hasOwnProperty,_z={};((e,t,i,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of mz(t))fz.call(e,o)||!i&&"default"===o||gz(e,o,{get:()=>t[o],enumerable:!(n=pz(t,o))||n.enumerable})})(_z,NH);var vz=new class{_onDidChange=new _z.Emitter;_diagnosticsOptions;_modeConfiguration;_languageId;constructor(e,t,i){this._languageId=e,this.setDiagnosticsOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}}("json",{validate:!0,allowComments:!0,schemas:[],enableSchemaRequest:!1,schemaRequest:"warning",schemaValidation:"warning",comments:"error",trailingCommas:"error"},{documentFormattingEdits:!0,documentRangeFormattingEdits:!0,completionItems:!0,hovers:!0,documentSymbols:!0,tokens:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0});_z.languages.json={jsonDefaults:vz},_z.languages.register({id:"json",extensions:[".json",".bowerrc",".jshintrc",".jscsrc",".eslintrc",".babelrc",".har"],aliases:["JSON","json"],mimetypes:["application/json"]}),_z.languages.onLanguage("json",(()=>{Promise.resolve().then((function(){return require("./jsonMode-8bb2b6dd.js")})).then((e=>e.setupMode(vz)))}));
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/