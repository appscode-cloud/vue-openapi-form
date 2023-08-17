import{t as e,m as t}from"./MonacoEditor-4bf1c6b1.js";import"vue";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,a=(e,t,s)=>(((e,t,s)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s),o={};((e,t,a,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of r(t))n.call(e,l)||!a&&"default"===l||i(e,l,{get:()=>t[l],enumerable:!(o=s(t,l))||o.enumerable})})(o,t);var l=class{_modeId;_defaults;_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){if(!this._client){this._worker=o.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});let e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then((e=>this._worker?this._worker.withSyncedResources(o.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):e))),this._client=e}return this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}},c={};function d(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const r of e.next)s+=d(r,t,i);return s}function u(e){return e?e.map((e=>e.text)).join(""):""}c["lib.d.ts"]=!0,c["lib.dom.d.ts"]=!0,c["lib.dom.iterable.d.ts"]=!0,c["lib.es2015.collection.d.ts"]=!0,c["lib.es2015.core.d.ts"]=!0,c["lib.es2015.d.ts"]=!0,c["lib.es2015.generator.d.ts"]=!0,c["lib.es2015.iterable.d.ts"]=!0,c["lib.es2015.promise.d.ts"]=!0,c["lib.es2015.proxy.d.ts"]=!0,c["lib.es2015.reflect.d.ts"]=!0,c["lib.es2015.symbol.d.ts"]=!0,c["lib.es2015.symbol.wellknown.d.ts"]=!0,c["lib.es2016.array.include.d.ts"]=!0,c["lib.es2016.d.ts"]=!0,c["lib.es2016.full.d.ts"]=!0,c["lib.es2017.d.ts"]=!0,c["lib.es2017.full.d.ts"]=!0,c["lib.es2017.intl.d.ts"]=!0,c["lib.es2017.object.d.ts"]=!0,c["lib.es2017.sharedmemory.d.ts"]=!0,c["lib.es2017.string.d.ts"]=!0,c["lib.es2017.typedarrays.d.ts"]=!0,c["lib.es2018.asyncgenerator.d.ts"]=!0,c["lib.es2018.asynciterable.d.ts"]=!0,c["lib.es2018.d.ts"]=!0,c["lib.es2018.full.d.ts"]=!0,c["lib.es2018.intl.d.ts"]=!0,c["lib.es2018.promise.d.ts"]=!0,c["lib.es2018.regexp.d.ts"]=!0,c["lib.es2019.array.d.ts"]=!0,c["lib.es2019.d.ts"]=!0,c["lib.es2019.full.d.ts"]=!0,c["lib.es2019.object.d.ts"]=!0,c["lib.es2019.string.d.ts"]=!0,c["lib.es2019.symbol.d.ts"]=!0,c["lib.es2020.bigint.d.ts"]=!0,c["lib.es2020.d.ts"]=!0,c["lib.es2020.full.d.ts"]=!0,c["lib.es2020.intl.d.ts"]=!0,c["lib.es2020.promise.d.ts"]=!0,c["lib.es2020.sharedmemory.d.ts"]=!0,c["lib.es2020.string.d.ts"]=!0,c["lib.es2020.symbol.wellknown.d.ts"]=!0,c["lib.es2021.d.ts"]=!0,c["lib.es2021.full.d.ts"]=!0,c["lib.es2021.intl.d.ts"]=!0,c["lib.es2021.promise.d.ts"]=!0,c["lib.es2021.string.d.ts"]=!0,c["lib.es2021.weakref.d.ts"]=!0,c["lib.es5.d.ts"]=!0,c["lib.es6.d.ts"]=!0,c["lib.esnext.d.ts"]=!0,c["lib.esnext.full.d.ts"]=!0,c["lib.esnext.intl.d.ts"]=!0,c["lib.esnext.promise.d.ts"]=!0,c["lib.esnext.string.d.ts"]=!0,c["lib.esnext.weakref.d.ts"]=!0,c["lib.scripthost.d.ts"]=!0,c["lib.webworker.d.ts"]=!0,c["lib.webworker.importscripts.d.ts"]=!0,c["lib.webworker.iterable.d.ts"]=!0;var g=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:a,column:o}=s;return{startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o}}},m=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!c[e.path.slice(1)])}getOrCreateModel(t){const i=o.Uri.parse(t),s=o.editor.getModel(i);if(s)return s;if(this.isLibFile(i)&&this._hasFetchedLibFiles)return o.editor.createModel(this._libFiles[i.path.slice(1)],"typescript",i);const r=e.getExtraLibs()[t];return r?o.editor.createModel(r.content,"typescript",i):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},p=class extends g{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i;const r=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const r=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():o.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(s)}},t()},n=e=>{o.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(o.editor.onDidCreateModel((e=>r(e)))),this._disposables.push(o.editor.onWillDisposeModel(n)),this._disposables.push(o.editor.onDidChangeModelLanguage((e=>{n(e.model),r(e.model)}))),this._disposables.push({dispose(){for(const e of o.editor.getModels())n(e)}});const a=()=>{for(const e of o.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),o.editor.getModels().forEach((e=>r(e)))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const a=await Promise.all(i);if(!a||e.isDisposed())return;const l=a.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),c=l.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?o.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(c),e.isDisposed()||o.editor.setModelMarkers(e,this._selector,l.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:a,column:l}=e.getPositionAt(i+s),c=[];return t.reportsUnnecessary&&c.push(o.MarkerTag.Unnecessary),t.reportsDeprecated&&c.push(o.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:l,message:d(t.messageText,"\n"),code:t.code.toString(),tags:c,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const r=t.start||0,n=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(r),{lineNumber:l,column:c}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:c,message:d(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return o.MarkerSeverity.Error;case 3:return o.MarkerSeverity.Info;case 0:return o.MarkerSeverity.Warning;case 2:return o.MarkerSeverity.Hint}return o.MarkerSeverity.Info}},h=class extends g{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){const r=e.getWordUntilPosition(t),n=new o.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),a=e.uri,l=e.getOffsetAt(t),c=await this._worker(a);if(e.isDisposed())return;const d=await c.getCompletionsAtPosition(a.toString(),l);if(!d||e.isDisposed())return;return{suggestions:d.entries.map((i=>{let s=n;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),r=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);s=new o.Range(t.lineNumber,t.column,r.lineNumber,r.column)}const r=[];return-1!==i.kindModifiers?.indexOf("deprecated")&&r.push(o.languages.CompletionItemTag.Deprecated),{uri:a,position:t,offset:l,range:s,label:i.name,insertText:i.name,sortText:i.sortText,kind:h.convertKind(i.kind),tags:r}}))}}async resolveCompletionItem(e,t){const i=e,s=i.uri,r=i.position,n=i.offset,a=await this._worker(s),o=await a.getCompletionEntryDetails(s.toString(),n,i.label);return o?{uri:s,position:r,label:o.name,kind:h.convertKind(o.kind),detail:u(o.displayParts),documentation:{value:h.createDocumentationString(o)}}:i}static convertKind(e){switch(e){case k.primitiveType:case k.keyword:return o.languages.CompletionItemKind.Keyword;case k.variable:case k.localVariable:return o.languages.CompletionItemKind.Variable;case k.memberVariable:case k.memberGetAccessor:case k.memberSetAccessor:return o.languages.CompletionItemKind.Field;case k.function:case k.memberFunction:case k.constructSignature:case k.callSignature:case k.indexSignature:return o.languages.CompletionItemKind.Function;case k.enum:return o.languages.CompletionItemKind.Enum;case k.module:return o.languages.CompletionItemKind.Module;case k.class:return o.languages.CompletionItemKind.Class;case k.interface:return o.languages.CompletionItemKind.Interface;case k.warning:return o.languages.CompletionItemKind.File}return o.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=u(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${b(i)}`;return t}};function b(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var f=class extends g{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case o.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case o.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case o.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const o=await a.getSignatureHelpItems(r.toString(),n,{triggerReason:f._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;const l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:u(e.documentation)},t.label+=u(e.prefixDisplayParts),e.parameters.forEach(((i,s,r)=>{const n=u(i.displayParts),a={label:n,documentation:{value:u(i.documentation)}};t.label+=n,t.parameters.push(a),s<r.length-1&&(t.label+=u(e.separatorDisplayParts))})),t.label+=u(e.suffixDisplayParts),l.signatures.push(t)})),{value:l,dispose(){}}}},_=class extends g{async provideHover(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getQuickInfoAtPosition(s.toString(),r);if(!a||e.isDisposed())return;const o=u(a.documentation),l=a.tags?a.tags.map((e=>b(e))).join("  \n\n"):"",c=u(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},y=class extends g{async provideDocumentHighlights(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getOccurrencesAtPosition(s.toString(),r);return a&&!e.isDisposed()?a.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?o.languages.DocumentHighlightKind.Write:o.languages.DocumentHighlightKind.Text}))):void 0}},w=class extends g{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getDefinitionAtPosition(s.toString(),r);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>o.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let e of a){const t=this._libFiles.getOrCreateModel(e.fileName);t&&l.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return l}},S=class extends g{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const l=await a.getReferencesAtPosition(r.toString(),n);if(!l||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(l.map((e=>o.Uri.parse(e.fileName)))),e.isDisposed())return;const c=[];for(let e of l){const t=this._libFiles.getOrCreateModel(e.fileName);t&&c.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return c}},x=class extends g{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const r=await s.getNavigationBarItems(i.toString());if(!r||e.isDisposed())return;const n=(t,i,s)=>{let r={name:i.text,detail:"",kind:v[i.kind]||o.languages.SymbolKind.Variable,range:this._textSpanToRange(e,i.spans[0]),selectionRange:this._textSpanToRange(e,i.spans[0]),tags:[]};if(s&&(r.containerName=s),i.childItems&&i.childItems.length>0)for(let e of i.childItems)n(t,e,r.name);t.push(r)};let a=[];return r.forEach((e=>n(a,e))),a}},k=class{};a(k,"unknown",""),a(k,"keyword","keyword"),a(k,"script","script"),a(k,"module","module"),a(k,"class","class"),a(k,"interface","interface"),a(k,"type","type"),a(k,"enum","enum"),a(k,"variable","var"),a(k,"localVariable","local var"),a(k,"function","function"),a(k,"localFunction","local function"),a(k,"memberFunction","method"),a(k,"memberGetAccessor","getter"),a(k,"memberSetAccessor","setter"),a(k,"memberVariable","property"),a(k,"constructorImplementation","constructor"),a(k,"callSignature","call"),a(k,"indexSignature","index"),a(k,"constructSignature","construct"),a(k,"parameter","parameter"),a(k,"typeParameter","type parameter"),a(k,"primitiveType","primitive type"),a(k,"label","label"),a(k,"alias","alias"),a(k,"const","const"),a(k,"let","let"),a(k,"warning","warning");var v=Object.create(null);v[k.module]=o.languages.SymbolKind.Module,v[k.class]=o.languages.SymbolKind.Class,v[k.enum]=o.languages.SymbolKind.Enum,v[k.interface]=o.languages.SymbolKind.Interface,v[k.memberFunction]=o.languages.SymbolKind.Method,v[k.memberVariable]=o.languages.SymbolKind.Property,v[k.memberGetAccessor]=o.languages.SymbolKind.Property,v[k.memberSetAccessor]=o.languages.SymbolKind.Property,v[k.variable]=o.languages.SymbolKind.Variable,v[k.const]=o.languages.SymbolKind.Variable,v[k.localVariable]=o.languages.SymbolKind.Variable,v[k.variable]=o.languages.SymbolKind.Variable,v[k.function]=o.languages.SymbolKind.Function,v[k.localFunction]=o.languages.SymbolKind.Function;var C,D,F=class extends g{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},I=class extends F{async provideDocumentRangeFormattingEdits(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(r.toString(),n,a,F._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},L=class extends F{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,r){const n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,i,F._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},P=class extends F{async provideCodeActions(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=F._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(r);if(e.isDisposed())return;const d=await c.getCodeFixesAtPosition(r.toString(),n,a,l,o);if(!d||e.isDisposed())return{actions:[],dispose:()=>{}};return{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const t of i.changes)for(const i of t.textChanges)s.push({resource:e.uri,edit:{range:this._textSpanToRange(e,i.span),text:i.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},A=class extends g{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const r=e.uri,n=r.toString(),a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(n,a,!1,!1,!1);if(!c||e.isDisposed())return;const d=[];for(const e of c){const t=this._libFiles.getOrCreateModel(e.fileName);if(!t)throw new Error(`Unknown file ${e.fileName}.`);d.push({resource:t.uri,edit:{range:this._textSpanToRange(t,e.textSpan),text:i}})}return{edits:d}}},T=class extends g{async provideInlayHints(e,t,i){const s=e.uri,r=s.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);if(e.isDisposed())return null;return{hints:(await o.provideInlayHints(r,n,a)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?o.languages.InlayHintKind.Parameter:o.languages.InlayHintKind.Type}};function O(e){D=R(e,"typescript")}function N(e){C=R(e,"javascript")}function K(){return new Promise(((e,t)=>{if(!C)return t("JavaScript not registered!");e(C)}))}function M(){return new Promise(((e,t)=>{if(!D)return t("TypeScript not registered!");e(D)}))}function R(e,t){const i=new l(t,e),s=(...e)=>i.getLanguageServiceWorker(...e),r=new m(s);return o.languages.registerCompletionItemProvider(t,new h(s)),o.languages.registerSignatureHelpProvider(t,new f(s)),o.languages.registerHoverProvider(t,new _(s)),o.languages.registerDocumentHighlightProvider(t,new y(s)),o.languages.registerDefinitionProvider(t,new w(r,s)),o.languages.registerReferenceProvider(t,new S(r,s)),o.languages.registerDocumentSymbolProvider(t,new x(s)),o.languages.registerDocumentRangeFormattingEditProvider(t,new I(s)),o.languages.registerOnTypeFormattingEditProvider(t,new L(s)),o.languages.registerCodeActionProvider(t,new P(s)),o.languages.registerRenameProvider(t,new A(r,s)),o.languages.registerInlayHintsProvider(t,new T(s)),new p(r,e,t,s),s}export{g as Adapter,P as CodeActionAdaptor,w as DefinitionAdapter,p as DiagnosticsAdapter,I as FormatAdapter,F as FormatHelper,L as FormatOnTypeAdapter,T as InlayHintsAdapter,k as Kind,m as LibFiles,y as OccurrencesAdapter,x as OutlineAdapter,_ as QuickInfoAdapter,S as ReferenceAdapter,A as RenameAdapter,f as SignatureHelpAdapter,h as SuggestAdapter,l as WorkerManager,d as flattenDiagnosticMessageText,K as getJavaScriptWorker,M as getTypeScriptWorker,N as setupJavaScript,O as setupTypeScript};