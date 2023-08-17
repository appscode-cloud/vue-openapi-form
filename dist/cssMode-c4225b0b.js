import{m as e}from"./MonacoEditor-4bf1c6b1.js";import"vue";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,o={};((e,o,a,s)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let u of r(o))i.call(e,u)||!a&&"default"===u||t(e,u,{get:()=>o[u],enumerable:!(s=n(o,u))||s.enumerable})})(o,e);var a,s,u,c,d,g,l,h,f,p,v,m,_,w,b,k,y,C,E,x,I,A,S,T,R,M,D,P,L,j,F,O,N,U,W,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee,te=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=o.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(s=a||(a={})).MIN_VALUE=-2147483648,s.MAX_VALUE=2147483647,(c=u||(u={})).MIN_VALUE=0,c.MAX_VALUE=2147483647,(g=d||(d={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=u.MAX_VALUE),t===Number.MAX_VALUE&&(t=u.MAX_VALUE),{line:e,character:t}},g.is=function(e){var t=e;return tt.objectLiteral(t)&&tt.uinteger(t.line)&&tt.uinteger(t.character)},(h=l||(l={})).create=function(e,t,n,r){if(tt.uinteger(e)&&tt.uinteger(t)&&tt.uinteger(n)&&tt.uinteger(r))return{start:d.create(e,t),end:d.create(n,r)};if(d.is(e)&&d.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},h.is=function(e){var t=e;return tt.objectLiteral(t)&&d.is(t.start)&&d.is(t.end)},(p=f||(f={})).create=function(e,t){return{uri:e,range:t}},p.is=function(e){var t=e;return tt.defined(t)&&l.is(t.range)&&(tt.string(t.uri)||tt.undefined(t.uri))},(m=v||(v={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},m.is=function(e){var t=e;return tt.defined(t)&&l.is(t.targetRange)&&tt.string(t.targetUri)&&(l.is(t.targetSelectionRange)||tt.undefined(t.targetSelectionRange))&&(l.is(t.originSelectionRange)||tt.undefined(t.originSelectionRange))},(w=_||(_={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},w.is=function(e){var t=e;return tt.numberRange(t.red,0,1)&&tt.numberRange(t.green,0,1)&&tt.numberRange(t.blue,0,1)&&tt.numberRange(t.alpha,0,1)},(k=b||(b={})).create=function(e,t){return{range:e,color:t}},k.is=function(e){var t=e;return l.is(t.range)&&_.is(t.color)},(C=y||(y={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},C.is=function(e){var t=e;return tt.string(t.label)&&(tt.undefined(t.textEdit)||U.is(t))&&(tt.undefined(t.additionalTextEdits)||tt.typedArray(t.additionalTextEdits,U.is))},(x=E||(E={})).Comment="comment",x.Imports="imports",x.Region="region",(A=I||(I={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return tt.defined(n)&&(o.startCharacter=n),tt.defined(r)&&(o.endCharacter=r),tt.defined(i)&&(o.kind=i),o},A.is=function(e){var t=e;return tt.uinteger(t.startLine)&&tt.uinteger(t.startLine)&&(tt.undefined(t.startCharacter)||tt.uinteger(t.startCharacter))&&(tt.undefined(t.endCharacter)||tt.uinteger(t.endCharacter))&&(tt.undefined(t.kind)||tt.string(t.kind))},(T=S||(S={})).create=function(e,t){return{location:e,message:t}},T.is=function(e){var t=e;return tt.defined(t)&&f.is(t.location)&&tt.string(t.message)},(M=R||(R={})).Error=1,M.Warning=2,M.Information=3,M.Hint=4,(P=D||(D={})).Unnecessary=1,P.Deprecated=2,(L||(L={})).is=function(e){var t=e;return null!=t&&tt.string(t.href)},(F=j||(j={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return tt.defined(n)&&(a.severity=n),tt.defined(r)&&(a.code=r),tt.defined(i)&&(a.source=i),tt.defined(o)&&(a.relatedInformation=o),a},F.is=function(e){var t,n=e;return tt.defined(n)&&l.is(n.range)&&tt.string(n.message)&&(tt.number(n.severity)||tt.undefined(n.severity))&&(tt.integer(n.code)||tt.string(n.code)||tt.undefined(n.code))&&(tt.undefined(n.codeDescription)||tt.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(tt.string(n.source)||tt.undefined(n.source))&&(tt.undefined(n.relatedInformation)||tt.typedArray(n.relatedInformation,S.is))},(N=O||(O={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return tt.defined(n)&&n.length>0&&(i.arguments=n),i},N.is=function(e){var t=e;return tt.defined(t)&&tt.string(t.title)&&tt.string(t.command)},(W=U||(U={})).replace=function(e,t){return{range:e,newText:t}},W.insert=function(e,t){return{range:{start:e,end:e},newText:t}},W.del=function(e){return{range:e,newText:""}},W.is=function(e){var t=e;return tt.objectLiteral(t)&&tt.string(t.newText)&&l.is(t.range)},(H=V||(V={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},H.is=function(e){var t=e;return void 0!==t&&tt.objectLiteral(t)&&tt.string(t.label)&&(tt.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(tt.string(t.description)||void 0===t.description)},(K||(K={})).is=function(e){return"string"==typeof e},(X=z||(z={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},X.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},X.del=function(e,t){return{range:e,newText:"",annotationId:t}},X.is=function(e){var t=e;return U.is(t)&&(V.is(t.annotationId)||K.is(t.annotationId))},($=B||(B={})).create=function(e,t){return{textDocument:e,edits:t}},$.is=function(e){var t=e;return tt.defined(t)&&ae.is(t.textDocument)&&Array.isArray(t.edits)},(Q=q||(q={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},Q.is=function(e){var t=e;return t&&"create"===t.kind&&tt.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||tt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||tt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||K.is(t.annotationId))},(J=G||(G={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},J.is=function(e){var t=e;return t&&"rename"===t.kind&&tt.string(t.oldUri)&&tt.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||tt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||tt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||K.is(t.annotationId))},(Z=Y||(Y={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},Z.is=function(e){var t=e;return t&&"delete"===t.kind&&tt.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||tt.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||tt.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||K.is(t.annotationId))},(ee||(ee={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return tt.string(e.kind)?q.is(e)||G.is(e)||Y.is(e):B.is(e)})))};var ne,re,ie,oe,ae,se,ue,ce,de,ge,le,he,fe,pe,ve,me,_e,we,be,ke,ye,Ce,Ee,xe,Ie,Ae,Se,Te,Re,Me,De,Pe,Le,je,Fe,Oe,Ne,Ue,We,Ve,He,Ke,ze,Xe,Be,$e,qe,Qe,Ge,Je,Ye,Ze=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=U.insert(e,t):K.is(n)?(i=n,r=z.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=z.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=U.replace(e,t):K.is(n)?(i=n,r=z.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=z.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=U.del(e):K.is(t)?(r=t,n=z.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=z.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),et=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(K.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new et(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(B.is(e)){var n=new Ze(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new Ze(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(ae.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new Ze(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new Ze(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new et,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(V.is(t)||K.is(t)?r=t:n=t,void 0===r?i=q.create(e,n):(o=K.is(r)?r:this._changeAnnotations.manage(r),i=q.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(V.is(n)||K.is(n)?i=n:r=n,void 0===i?o=G.create(e,t,r):(a=K.is(i)?i:this._changeAnnotations.manage(i),o=G.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(V.is(t)||K.is(t)?r=t:n=t,void 0===r?i=Y.create(e,n):(o=K.is(r)?r:this._changeAnnotations.manage(r),i=Y.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(re=ne||(ne={})).create=function(e){return{uri:e}},re.is=function(e){var t=e;return tt.defined(t)&&tt.string(t.uri)},(oe=ie||(ie={})).create=function(e,t){return{uri:e,version:t}},oe.is=function(e){var t=e;return tt.defined(t)&&tt.string(t.uri)&&tt.integer(t.version)},(se=ae||(ae={})).create=function(e,t){return{uri:e,version:t}},se.is=function(e){var t=e;return tt.defined(t)&&tt.string(t.uri)&&(null===t.version||tt.integer(t.version))},(ce=ue||(ue={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},ce.is=function(e){var t=e;return tt.defined(t)&&tt.string(t.uri)&&tt.string(t.languageId)&&tt.integer(t.version)&&tt.string(t.text)},(ge=de||(de={})).PlainText="plaintext",ge.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(de||(de={})),(le||(le={})).is=function(e){var t=e;return tt.objectLiteral(e)&&de.is(t.kind)&&tt.string(t.value)},(fe=he||(he={})).Text=1,fe.Method=2,fe.Function=3,fe.Constructor=4,fe.Field=5,fe.Variable=6,fe.Class=7,fe.Interface=8,fe.Module=9,fe.Property=10,fe.Unit=11,fe.Value=12,fe.Enum=13,fe.Keyword=14,fe.Snippet=15,fe.Color=16,fe.File=17,fe.Reference=18,fe.Folder=19,fe.EnumMember=20,fe.Constant=21,fe.Struct=22,fe.Event=23,fe.Operator=24,fe.TypeParameter=25,(ve=pe||(pe={})).PlainText=1,ve.Snippet=2,(me||(me={})).Deprecated=1,(we=_e||(_e={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},we.is=function(e){var t=e;return t&&tt.string(t.newText)&&l.is(t.insert)&&l.is(t.replace)},(ke=be||(be={})).asIs=1,ke.adjustIndentation=2,(ye||(ye={})).create=function(e){return{label:e}},(Ce||(Ce={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(xe=Ee||(Ee={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},xe.is=function(e){var t=e;return tt.string(t)||tt.objectLiteral(t)&&tt.string(t.language)&&tt.string(t.value)},(Ie||(Ie={})).is=function(e){var t=e;return!!t&&tt.objectLiteral(t)&&(le.is(t.contents)||Ee.is(t.contents)||tt.typedArray(t.contents,Ee.is))&&(void 0===e.range||l.is(e.range))},(Ae||(Ae={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(Se||(Se={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return tt.defined(t)&&(i.documentation=t),tt.defined(n)?i.parameters=n:i.parameters=[],i},(Re=Te||(Te={})).Text=1,Re.Read=2,Re.Write=3,(Me||(Me={})).create=function(e,t){var n={range:e};return tt.number(t)&&(n.kind=t),n},(Pe=De||(De={})).File=1,Pe.Module=2,Pe.Namespace=3,Pe.Package=4,Pe.Class=5,Pe.Method=6,Pe.Property=7,Pe.Field=8,Pe.Constructor=9,Pe.Enum=10,Pe.Interface=11,Pe.Function=12,Pe.Variable=13,Pe.Constant=14,Pe.String=15,Pe.Number=16,Pe.Boolean=17,Pe.Array=18,Pe.Object=19,Pe.Key=20,Pe.Null=21,Pe.EnumMember=22,Pe.Struct=23,Pe.Event=24,Pe.Operator=25,Pe.TypeParameter=26,(Le||(Le={})).Deprecated=1,(je||(je={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Oe=Fe||(Fe={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Oe.is=function(e){var t=e;return t&&tt.string(t.name)&&tt.number(t.kind)&&l.is(t.range)&&l.is(t.selectionRange)&&(void 0===t.detail||tt.string(t.detail))&&(void 0===t.deprecated||tt.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(Ue=Ne||(Ne={})).Empty="",Ue.QuickFix="quickfix",Ue.Refactor="refactor",Ue.RefactorExtract="refactor.extract",Ue.RefactorInline="refactor.inline",Ue.RefactorRewrite="refactor.rewrite",Ue.Source="source",Ue.SourceOrganizeImports="source.organizeImports",Ue.SourceFixAll="source.fixAll",(Ve=We||(We={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},Ve.is=function(e){var t=e;return tt.defined(t)&&tt.typedArray(t.diagnostics,j.is)&&(void 0===t.only||tt.typedArray(t.only,tt.string))},(Ke=He||(He={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):O.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},Ke.is=function(e){var t=e;return t&&tt.string(t.title)&&(void 0===t.diagnostics||tt.typedArray(t.diagnostics,j.is))&&(void 0===t.kind||tt.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||O.is(t.command))&&(void 0===t.isPreferred||tt.boolean(t.isPreferred))&&(void 0===t.edit||ee.is(t.edit))},(Xe=ze||(ze={})).create=function(e,t){var n={range:e};return tt.defined(t)&&(n.data=t),n},Xe.is=function(e){var t=e;return tt.defined(t)&&l.is(t.range)&&(tt.undefined(t.command)||O.is(t.command))},($e=Be||(Be={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},$e.is=function(e){var t=e;return tt.defined(t)&&tt.uinteger(t.tabSize)&&tt.boolean(t.insertSpaces)},(Qe=qe||(qe={})).create=function(e,t,n){return{range:e,target:t,data:n}},Qe.is=function(e){var t=e;return tt.defined(t)&&l.is(t.range)&&(tt.undefined(t.target)||tt.string(t.target))},(Je=Ge||(Ge={})).create=function(e,t){return{range:e,parent:t}},Je.is=function(e){var t=e;return void 0!==t&&l.is(t.range)&&(void 0===t.parent||Je.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new it(e,t,n,r)},e.is=function(e){var t=e;return!!(tt.defined(t)&&tt.string(t.uri)&&(tt.undefined(t.languageId)||tt.string(t.languageId))&&tt.uinteger(t.lineCount)&&tt.func(t.getText)&&tt.func(t.positionAt)&&tt.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(Ye||(Ye={}));var tt,nt,rt,it=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return d.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return d.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();nt=tt||(tt={}),rt=Object.prototype.toString,nt.defined=function(e){return void 0!==e},nt.undefined=function(e){return void 0===e},nt.boolean=function(e){return!0===e||!1===e},nt.string=function(e){return"[object String]"===rt.call(e)},nt.number=function(e){return"[object Number]"===rt.call(e)},nt.numberRange=function(e,t,n){return"[object Number]"===rt.call(e)&&t<=e&&e<=n},nt.integer=function(e){return"[object Number]"===rt.call(e)&&-2147483648<=e&&e<=2147483647},nt.uinteger=function(e){return"[object Number]"===rt.call(e)&&0<=e&&e<=2147483647},nt.func=function(e){return"[object Function]"===rt.call(e)},nt.objectLiteral=function(e){return null!==e&&"object"==typeof e},nt.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var ot=class{constructor(e,t,n){this._languageId=e,this._worker=t;const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{o.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(o.editor.onDidCreateModel(r)),this._disposables.push(o.editor.onWillDisposeModel(i)),this._disposables.push(o.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{o.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{o.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),o.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:at(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=o.editor.getModel(e);i&&i.getLanguageId()===t&&o.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function at(e){switch(e){case R.Error:return o.MarkerSeverity.Error;case R.Warning:return o.MarkerSeverity.Warning;case R.Information:return o.MarkerSeverity.Info;case R.Hint:return o.MarkerSeverity.Hint;default:return o.MarkerSeverity.Info}}var st=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),ut(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new o.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),a=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:gt(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:dt(e.textEdit.insert),replace:dt(e.textEdit.replace)}:t.range=dt(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(lt)),e.insertTextFormat===pe.Snippet&&(t.insertTextRules=o.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:a}}))}};function ut(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ct(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function dt(e){if(e)return new o.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function gt(e){const t=o.languages.CompletionItemKind;switch(e){case he.Text:return t.Text;case he.Method:return t.Method;case he.Function:return t.Function;case he.Constructor:return t.Constructor;case he.Field:return t.Field;case he.Variable:return t.Variable;case he.Class:return t.Class;case he.Interface:return t.Interface;case he.Module:return t.Module;case he.Property:return t.Property;case he.Unit:return t.Unit;case he.Value:return t.Value;case he.Enum:return t.Enum;case he.Keyword:return t.Keyword;case he.Snippet:return t.Snippet;case he.Color:return t.Color;case he.File:return t.File;case he.Reference:return t.Reference}return t.Property}function lt(e){if(e)return{range:dt(e.range),text:e.newText}}var ht=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),ut(t)))).then((e=>{if(e)return{range:dt(e.range),contents:pt(e.contents)}}))}};function ft(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function pt(e){if(e)return Array.isArray(e)?e.map(ft):[ft(e)]}var vt=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),ut(t)))).then((e=>{if(e)return e.map((e=>({range:dt(e.range),kind:mt(e.kind)})))}))}};function mt(e){switch(e){case Te.Read:return o.languages.DocumentHighlightKind.Read;case Te.Write:return o.languages.DocumentHighlightKind.Write;case Te.Text:return o.languages.DocumentHighlightKind.Text}return o.languages.DocumentHighlightKind.Text}var _t=class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),ut(t)))).then((e=>{if(e)return[wt(e)]}))}};function wt(e){return{uri:o.Uri.parse(e.uri),range:dt(e.range)}}var bt=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),ut(t)))).then((e=>{if(e)return e.map(wt)}))}},kt=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),ut(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=o.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,edit:{range:dt(i.range),text:i.newText}})}return{edits:t}}(e)))}};var yt=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:Ct(e.kind),range:dt(e.location.range),selectionRange:dt(e.location.range),tags:[]})))}))}};function Ct(e){let t=o.languages.SymbolKind;switch(e){case De.File:return t.Array;case De.Module:return t.Module;case De.Namespace:return t.Namespace;case De.Package:return t.Package;case De.Class:return t.Class;case De.Method:return t.Method;case De.Property:return t.Property;case De.Field:return t.Field;case De.Constructor:return t.Constructor;case De.Enum:return t.Enum;case De.Interface:return t.Interface;case De.Function:return t.Function;case De.Variable:return t.Variable;case De.Constant:return t.Constant;case De.String:return t.String;case De.Number:return t.Number;case De.Boolean:return t.Boolean;case De.Array:return t.Array}return t.Function}var Et=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:dt(e.range),url:e.target})))}}))}},xt=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,At(t)).then((e=>{if(e&&0!==e.length)return e.map(lt)}))))}},It=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),ct(t),At(n)).then((e=>{if(e&&0!==e.length)return e.map(lt)}))))}};function At(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var St=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:dt(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,ct(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=lt(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(lt)),t}))}))}},Tt=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case E.Comment:return o.languages.FoldingRangeKind.Comment;case E.Imports:return o.languages.FoldingRangeKind.Imports;case E.Region:return o.languages.FoldingRangeKind.Region}return}(e.kind)),t}))}))}};var Rt=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(ut)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:dt(e.range)}),e=e.parent;return t}))}))}};function Mt(e){const t=[],n=[],r=new te(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);return function(){const{languageId:t,modeConfiguration:r}=e;Pt(n),r.completionItems&&n.push(o.languages.registerCompletionItemProvider(t,new st(i,["/","-",":"]))),r.hovers&&n.push(o.languages.registerHoverProvider(t,new ht(i))),r.documentHighlights&&n.push(o.languages.registerDocumentHighlightProvider(t,new vt(i))),r.definitions&&n.push(o.languages.registerDefinitionProvider(t,new _t(i))),r.references&&n.push(o.languages.registerReferenceProvider(t,new bt(i))),r.documentSymbols&&n.push(o.languages.registerDocumentSymbolProvider(t,new yt(i))),r.rename&&n.push(o.languages.registerRenameProvider(t,new kt(i))),r.colors&&n.push(o.languages.registerColorProvider(t,new St(i))),r.foldingRanges&&n.push(o.languages.registerFoldingRangeProvider(t,new Tt(i))),r.diagnostics&&n.push(new ot(t,i,e.onDidChange)),r.selectionRanges&&n.push(o.languages.registerSelectionRangeProvider(t,new Rt(i)))}(),t.push(Dt(n)),Dt(t)}function Dt(e){return{dispose:()=>Pt(e)}}function Pt(e){for(;e.length;)e.pop().dispose()}export{st as CompletionAdapter,_t as DefinitionAdapter,ot as DiagnosticsAdapter,St as DocumentColorAdapter,xt as DocumentFormattingEditProvider,vt as DocumentHighlightAdapter,Et as DocumentLinkAdapter,It as DocumentRangeFormattingEditProvider,yt as DocumentSymbolAdapter,Tt as FoldingRangeAdapter,ht as HoverAdapter,bt as ReferenceAdapter,kt as RenameAdapter,Rt as SelectionRangeAdapter,te as WorkerManager,ut as fromPosition,ct as fromRange,Mt as setupMode,dt as toRange,lt as toTextEdit};