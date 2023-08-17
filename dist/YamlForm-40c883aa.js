import{m as e}from"./entry-9e18d6d0.js";import{defineComponent as t,defineAsyncComponent as n,resolveComponent as i,openBlock as r,createElementBlock as o,createBlock as a}from"vue";function l(e){return null==e}var u={isNothing:l,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:l(e)?[]:[e]},repeat:function(e,t){var n,i="";for(n=0;n<t;n+=1)i+=e;return i},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var n,i,r,o;if(t)for(n=0,i=(o=Object.keys(t)).length;n<i;n+=1)e[r=o[n]]=t[r];return e}};function c(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}c.prototype=Object.create(Error.prototype),c.prototype.constructor=c,c.prototype.toString=function(e){var t=this.name+": ";return t+=this.reason||"(unknown reason)",!e&&this.mark&&(t+=" "+this.mark.toString()),t};var s=c;function p(e,t,n,i,r){this.name=e,this.buffer=t,this.position=n,this.line=i,this.column=r}p.prototype.getSnippet=function(e,t){var n,i,r,o,a;if(!this.buffer)return null;for(e=e||4,t=t||75,n="",i=this.position;i>0&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i-1));)if(i-=1,this.position-i>t/2-1){n=" ... ",i+=5;break}for(r="",o=this.position;o<this.buffer.length&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(o));)if((o+=1)-this.position>t/2-1){r=" ... ",o-=5;break}return a=this.buffer.slice(i,o),u.repeat(" ",e)+n+a+r+"\n"+u.repeat(" ",e+this.position-i+n.length)+"^"},p.prototype.toString=function(e){var t,n="";return this.name&&(n+='in "'+this.name+'" '),n+="at line "+(this.line+1)+", column "+(this.column+1),e||(t=this.getSnippet())&&(n+=":\n"+t),n};var f=p,d=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],h=["scalar","sequence","mapping"];var g=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===d.indexOf(t))throw new s('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.defaultStyle=t.defaultStyle||null,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(n){e[n].forEach((function(e){t[String(e)]=n}))})),t}(t.styleAliases||null),-1===h.indexOf(this.kind))throw new s('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function m(e,t,n){var i=[];return e.include.forEach((function(e){n=m(e,t,n)})),e[t].forEach((function(e){n.forEach((function(t,n){t.tag===e.tag&&t.kind===e.kind&&i.push(n)})),n.push(e)})),n.filter((function(e,t){return-1===i.indexOf(t)}))}function y(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach((function(e){if(e.loadKind&&"scalar"!==e.loadKind)throw new s("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")})),this.compiledImplicit=m(this,"implicit",[]),this.compiledExplicit=m(this,"explicit",[]),this.compiledTypeMap=function(){var e,t,n={scalar:{},sequence:{},mapping:{},fallback:{}};function i(e){n[e.kind][e.tag]=n.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(i);return n}(this.compiledImplicit,this.compiledExplicit)}y.DEFAULT=null,y.create=function(){var e,t;switch(arguments.length){case 1:e=y.DEFAULT,t=arguments[0];break;case 2:e=arguments[0],t=arguments[1];break;default:throw new s("Wrong number of arguments for Schema.create function")}if(e=u.toArray(e),t=u.toArray(t),!e.every((function(e){return e instanceof y})))throw new s("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!t.every((function(e){return e instanceof g})))throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new y({include:e,explicit:t})};var v=y,A=new v({explicit:[new g("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),new g("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),new g("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})]});var b=new g("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"});var w=new g("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function C(e){return 48<=e&&e<=55}function k(e){return 48<=e&&e<=57}var x=new g("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,i=e.length,r=0,o=!1;if(!i)return!1;if("-"!==(t=e[r])&&"+"!==t||(t=e[++r]),"0"===t){if(r+1===i)return!0;if("b"===(t=e[++r])){for(r++;r<i;r++)if("_"!==(t=e[r])){if("0"!==t&&"1"!==t)return!1;o=!0}return o&&"_"!==t}if("x"===t){for(r++;r<i;r++)if("_"!==(t=e[r])){if(!(48<=(n=e.charCodeAt(r))&&n<=57||65<=n&&n<=70||97<=n&&n<=102))return!1;o=!0}return o&&"_"!==t}for(;r<i;r++)if("_"!==(t=e[r])){if(!C(e.charCodeAt(r)))return!1;o=!0}return o&&"_"!==t}if("_"===t)return!1;for(;r<i;r++)if("_"!==(t=e[r])){if(":"===t)break;if(!k(e.charCodeAt(r)))return!1;o=!0}return!(!o||"_"===t)&&(":"!==t||/^(:[0-5]?[0-9])+$/.test(e.slice(r)))},construct:function(e){var t,n,i=e,r=1,o=[];return-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(t=i[0])&&"+"!==t||("-"===t&&(r=-1),t=(i=i.slice(1))[0]),"0"===i?0:"0"===t?"b"===i[1]?r*parseInt(i.slice(2),2):"x"===i[1]?r*parseInt(i,16):r*parseInt(i,8):-1!==i.indexOf(":")?(i.split(":").forEach((function(e){o.unshift(parseInt(e,10))})),i=0,n=1,o.forEach((function(e){i+=e*n,n*=60})),r*i):r*parseInt(i,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!u.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),S=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var I=/^[-+]?[0-9]+e/;var j=new v({include:[A],implicit:[b,w,x,new g("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!S.test(e)||"_"===e[e.length-1])},construct:function(e){var t,n,i,r;return n="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,r=[],"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:t.indexOf(":")>=0?(t.split(":").forEach((function(e){r.unshift(parseFloat(e,10))})),t=0,i=1,r.forEach((function(e){t+=e*i,i*=60})),n*t):n*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||u.isNegativeZero(e))},represent:function(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(u.isNegativeZero(e))return"-0.0";return n=e.toString(10),I.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"})]}),E=new v({include:[j]}),O=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),F=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var M=new g("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==O.exec(e)||null!==F.exec(e))},construct:function(e){var t,n,i,r,o,a,l,u,c=0,s=null;if(null===(t=O.exec(e))&&(t=F.exec(e)),null===t)throw new Error("Date resolve error");if(n=+t[1],i=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,i,r));if(o=+t[4],a=+t[5],l=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(s=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(s=-s)),u=new Date(Date.UTC(n,i,r,o,a,l,c)),s&&u.setTime(u.getTime()-s),u},instanceOf:Date,represent:function(e){return e.toISOString()}});var N,T=new g("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}});function L(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.')}try{N=L("buffer").Buffer}catch(e){}var _="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var D=new g("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,i=0,r=e.length,o=_;for(n=0;n<r;n++)if(!((t=o.indexOf(e.charAt(n)))>64)){if(t<0)return!1;i+=6}return i%8==0},construct:function(e){var t,n,i=e.replace(/[\r\n=]/g,""),r=i.length,o=_,a=0,l=[];for(t=0;t<r;t++)t%4==0&&t&&(l.push(a>>16&255),l.push(a>>8&255),l.push(255&a)),a=a<<6|o.indexOf(i.charAt(t));return 0===(n=r%4*6)?(l.push(a>>16&255),l.push(a>>8&255),l.push(255&a)):18===n?(l.push(a>>10&255),l.push(a>>2&255)):12===n&&l.push(a>>4&255),N?N.from?N.from(l):new N(l):l},predicate:function(e){return N&&N.isBuffer(e)},represent:function(e){var t,n,i="",r=0,o=e.length,a=_;for(t=0;t<o;t++)t%3==0&&t&&(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]),r=(r<<8)+e[t];return 0===(n=o%3)?(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]):2===n?(i+=a[r>>10&63],i+=a[r>>4&63],i+=a[r<<2&63],i+=a[64]):1===n&&(i+=a[r>>2&63],i+=a[r<<4&63],i+=a[64],i+=a[64]),i}}),U=Object.prototype.hasOwnProperty,Y=Object.prototype.toString;var q=new g("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,i,r,o,a=[],l=e;for(t=0,n=l.length;t<n;t+=1){if(i=l[t],o=!1,"[object Object]"!==Y.call(i))return!1;for(r in i)if(U.call(i,r)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==a.indexOf(r))return!1;a.push(r)}return!0},construct:function(e){return null!==e?e:[]}}),R=Object.prototype.toString;var V=new g("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,i,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(i=a[t],"[object Object]"!==R.call(i))return!1;if(1!==(r=Object.keys(i)).length)return!1;o[t]=[r[0],i[r[0]]]}return!0},construct:function(e){if(null===e)return[];var t,n,i,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1)i=a[t],r=Object.keys(i),o[t]=[r[0],i[r[0]]];return o}}),W=Object.prototype.hasOwnProperty;var B=new v({include:[E],implicit:[M,T],explicit:[D,q,V,new g("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,n=e;for(t in n)if(W.call(n,t)&&null!==n[t])return!1;return!0},construct:function(e){return null!==e?e:{}}})]});var P=new g("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:function(){return!0},construct:function(){},predicate:function(e){return void 0===e},represent:function(){return""}});var $,K=new g("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:function(e){if(null===e)return!1;if(0===e.length)return!1;var t=e,n=/\/([gim]*)$/.exec(e),i="";if("/"===t[0]){if(n&&(i=n[1]),i.length>3)return!1;if("/"!==t[t.length-i.length-1])return!1}return!0},construct:function(e){var t=e,n=/\/([gim]*)$/.exec(e),i="";return"/"===t[0]&&(n&&(i=n[1]),t=t.slice(1,t.length-i.length-1)),new RegExp(t,i)},predicate:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},represent:function(e){var t="/"+e.source+"/";return e.global&&(t+="g"),e.multiline&&(t+="m"),e.ignoreCase&&(t+="i"),t}});try{$=L("esprima")}catch(e){"undefined"!=typeof window&&($=window.esprima)}var H=new g("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:function(e){if(null===e)return!1;try{var t="("+e+")",n=$.parse(t,{range:!0});return"Program"===n.type&&1===n.body.length&&"ExpressionStatement"===n.body[0].type&&("ArrowFunctionExpression"===n.body[0].expression.type||"FunctionExpression"===n.body[0].expression.type)}catch(e){return!1}},construct:function(e){var t,n="("+e+")",i=$.parse(n,{range:!0}),r=[];if("Program"!==i.type||1!==i.body.length||"ExpressionStatement"!==i.body[0].type||"ArrowFunctionExpression"!==i.body[0].expression.type&&"FunctionExpression"!==i.body[0].expression.type)throw new Error("Failed to resolve function");return i.body[0].expression.params.forEach((function(e){r.push(e.name)})),t=i.body[0].expression.body.range,"BlockStatement"===i.body[0].expression.body.type?new Function(r,n.slice(t[0]+1,t[1]-1)):new Function(r,"return "+n.slice(t[0],t[1]))},predicate:function(e){return"[object Function]"===Object.prototype.toString.call(e)},represent:function(e){return e.toString()}}),G=v.DEFAULT=new v({include:[B],explicit:[P,K,H]}),Z=Object.prototype.hasOwnProperty,z=1,J=2,Q=3,X=4,ee=1,te=2,ne=3,ie=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,re=/[\x85\u2028\u2029]/,oe=/[,\[\]\{\}]/,ae=/^(?:!|!!|![a-z\-]+!)$/i,le=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function ue(e){return Object.prototype.toString.call(e)}function ce(e){return 10===e||13===e}function se(e){return 9===e||32===e}function pe(e){return 9===e||32===e||10===e||13===e}function fe(e){return 44===e||91===e||93===e||123===e||125===e}function de(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function he(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function ge(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var me=new Array(256),ye=new Array(256),ve=0;ve<256;ve++)me[ve]=he(ve)?1:0,ye[ve]=he(ve);function Ae(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||G,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function be(e,t){return new s(t,new f(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function we(e,t){throw be(e,t)}function Ce(e,t){e.onWarning&&e.onWarning.call(null,be(e,t))}var ke={YAML:function(e,t,n){var i,r,o;null!==e.version&&we(e,"duplication of %YAML directive"),1!==n.length&&we(e,"YAML directive accepts exactly one argument"),null===(i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&we(e,"ill-formed argument of the YAML directive"),r=parseInt(i[1],10),o=parseInt(i[2],10),1!==r&&we(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&Ce(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var i,r;2!==n.length&&we(e,"TAG directive accepts exactly two arguments"),i=n[0],r=n[1],ae.test(i)||we(e,"ill-formed tag handle (first argument) of the TAG directive"),Z.call(e.tagMap,i)&&we(e,'there is a previously declared suffix for "'+i+'" tag handle'),le.test(r)||we(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagMap[i]=r}};function xe(e,t,n,i){var r,o,a,l;if(t<n){if(l=e.input.slice(t,n),i)for(r=0,o=l.length;r<o;r+=1)9===(a=l.charCodeAt(r))||32<=a&&a<=1114111||we(e,"expected valid JSON character");else ie.test(l)&&we(e,"the stream contains non-printable characters");e.result+=l}}function Se(e,t,n,i){var r,o,a,l;for(u.isObject(n)||we(e,"cannot merge mappings; the provided source object is unacceptable"),a=0,l=(r=Object.keys(n)).length;a<l;a+=1)o=r[a],Z.call(t,o)||(t[o]=n[o],i[o]=!0)}function Ie(e,t,n,i,r,o,a,l){var u,c;if(Array.isArray(r))for(u=0,c=(r=Array.prototype.slice.call(r)).length;u<c;u+=1)Array.isArray(r[u])&&we(e,"nested arrays are not supported inside keys"),"object"==typeof r&&"[object Object]"===ue(r[u])&&(r[u]="[object Object]");if("object"==typeof r&&"[object Object]"===ue(r)&&(r="[object Object]"),r=String(r),null===t&&(t={}),"tag:yaml.org,2002:merge"===i)if(Array.isArray(o))for(u=0,c=o.length;u<c;u+=1)Se(e,t,o[u],n);else Se(e,t,o,n);else e.json||Z.call(n,r)||!Z.call(t,r)||(e.line=a||e.line,e.position=l||e.position,we(e,"duplicated mapping key")),t[r]=o,delete n[r];return t}function je(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):we(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function Ee(e,t,n){for(var i=0,r=e.input.charCodeAt(e.position);0!==r;){for(;se(r);)r=e.input.charCodeAt(++e.position);if(t&&35===r)do{r=e.input.charCodeAt(++e.position)}while(10!==r&&13!==r&&0!==r);if(!ce(r))break;for(je(e),r=e.input.charCodeAt(e.position),i++,e.lineIndent=0;32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return-1!==n&&0!==i&&e.lineIndent<n&&Ce(e,"deficient indentation"),i}function Oe(e){var t,n=e.position;return!(45!==(t=e.input.charCodeAt(n))&&46!==t||t!==e.input.charCodeAt(n+1)||t!==e.input.charCodeAt(n+2)||(n+=3,0!==(t=e.input.charCodeAt(n))&&!pe(t)))}function Fe(e,t){1===t?e.result+=" ":t>1&&(e.result+=u.repeat("\n",t-1))}function Me(e,t){var n,i,r=e.tag,o=e.anchor,a=[],l=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),i=e.input.charCodeAt(e.position);0!==i&&45===i&&pe(e.input.charCodeAt(e.position+1));)if(l=!0,e.position++,Ee(e,!0,-1)&&e.lineIndent<=t)a.push(null),i=e.input.charCodeAt(e.position);else if(n=e.line,Le(e,t,Q,!1,!0),a.push(e.result),Ee(e,!0,-1),i=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==i)we(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!l&&(e.tag=r,e.anchor=o,e.kind="sequence",e.result=a,!0)}function Ne(e){var t,n,i,r,o=!1,a=!1;if(33!==(r=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&we(e,"duplication of a tag property"),60===(r=e.input.charCodeAt(++e.position))?(o=!0,r=e.input.charCodeAt(++e.position)):33===r?(a=!0,n="!!",r=e.input.charCodeAt(++e.position)):n="!",t=e.position,o){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&62!==r);e.position<e.length?(i=e.input.slice(t,e.position),r=e.input.charCodeAt(++e.position)):we(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==r&&!pe(r);)33===r&&(a?we(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),ae.test(n)||we(e,"named tag handle cannot contain such characters"),a=!0,t=e.position+1)),r=e.input.charCodeAt(++e.position);i=e.input.slice(t,e.position),oe.test(i)&&we(e,"tag suffix cannot contain flow indicator characters")}return i&&!le.test(i)&&we(e,"tag name cannot contain such characters: "+i),o?e.tag=i:Z.call(e.tagMap,n)?e.tag=e.tagMap[n]+i:"!"===n?e.tag="!"+i:"!!"===n?e.tag="tag:yaml.org,2002:"+i:we(e,'undeclared tag handle "'+n+'"'),!0}function Te(e){var t,n;if(38!==(n=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&we(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!pe(n)&&!fe(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&we(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function Le(e,t,n,i,r){var o,a,l,c,s,p,f,d,h=1,g=!1,m=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=a=l=X===n||Q===n,i&&Ee(e,!0,-1)&&(g=!0,e.lineIndent>t?h=1:e.lineIndent===t?h=0:e.lineIndent<t&&(h=-1)),1===h)for(;Ne(e)||Te(e);)Ee(e,!0,-1)?(g=!0,l=o,e.lineIndent>t?h=1:e.lineIndent===t?h=0:e.lineIndent<t&&(h=-1)):l=!1;if(l&&(l=g||r),1!==h&&X!==n||(f=z===n||J===n?t:t+1,d=e.position-e.lineStart,1===h?l&&(Me(e,d)||function(e,t,n){var i,r,o,a,l,u=e.tag,c=e.anchor,s={},p={},f=null,d=null,h=null,g=!1,m=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=s),l=e.input.charCodeAt(e.position);0!==l;){if(i=e.input.charCodeAt(e.position+1),o=e.line,a=e.position,63!==l&&58!==l||!pe(i)){if(!Le(e,n,J,!1,!0))break;if(e.line===o){for(l=e.input.charCodeAt(e.position);se(l);)l=e.input.charCodeAt(++e.position);if(58===l)pe(l=e.input.charCodeAt(++e.position))||we(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(Ie(e,s,p,f,d,null),f=d=h=null),m=!0,g=!1,r=!1,f=e.tag,d=e.result;else{if(!m)return e.tag=u,e.anchor=c,!0;we(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!m)return e.tag=u,e.anchor=c,!0;we(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===l?(g&&(Ie(e,s,p,f,d,null),f=d=h=null),m=!0,g=!0,r=!0):g?(g=!1,r=!0):we(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,l=i;if((e.line===o||e.lineIndent>t)&&(Le(e,t,X,!0,r)&&(g?d=e.result:h=e.result),g||(Ie(e,s,p,f,d,h,o,a),f=d=h=null),Ee(e,!0,-1),l=e.input.charCodeAt(e.position)),e.lineIndent>t&&0!==l)we(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&Ie(e,s,p,f,d,null),m&&(e.tag=u,e.anchor=c,e.kind="mapping",e.result=s),m}(e,d,f))||function(e,t){var n,i,r,o,a,l,u,c,s,p,f=!0,d=e.tag,h=e.anchor,g={};if(91===(p=e.input.charCodeAt(e.position)))r=93,l=!1,i=[];else{if(123!==p)return!1;r=125,l=!0,i={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),p=e.input.charCodeAt(++e.position);0!==p;){if(Ee(e,!0,t),(p=e.input.charCodeAt(e.position))===r)return e.position++,e.tag=d,e.anchor=h,e.kind=l?"mapping":"sequence",e.result=i,!0;f||we(e,"missed comma between flow collection entries"),s=null,o=a=!1,63===p&&pe(e.input.charCodeAt(e.position+1))&&(o=a=!0,e.position++,Ee(e,!0,t)),n=e.line,Le(e,t,z,!1,!0),c=e.tag,u=e.result,Ee(e,!0,t),p=e.input.charCodeAt(e.position),!a&&e.line!==n||58!==p||(o=!0,p=e.input.charCodeAt(++e.position),Ee(e,!0,t),Le(e,t,z,!1,!0),s=e.result),l?Ie(e,i,g,c,u,s):o?i.push(Ie(e,null,g,c,u,s)):i.push(u),Ee(e,!0,t),44===(p=e.input.charCodeAt(e.position))?(f=!0,p=e.input.charCodeAt(++e.position)):f=!1}we(e,"unexpected end of the stream within a flow collection")}(e,f)?m=!0:(a&&function(e,t){var n,i,r,o,a,l=ee,c=!1,s=!1,p=t,f=0,d=!1;if(124===(o=e.input.charCodeAt(e.position)))i=!1;else{if(62!==o)return!1;i=!0}for(e.kind="scalar",e.result="";0!==o;)if(43===(o=e.input.charCodeAt(++e.position))||45===o)ee===l?l=43===o?ne:te:we(e,"repeat of a chomping mode identifier");else{if(!((r=48<=(a=o)&&a<=57?a-48:-1)>=0))break;0===r?we(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?we(e,"repeat of an indentation width identifier"):(p=t+r-1,s=!0)}if(se(o)){do{o=e.input.charCodeAt(++e.position)}while(se(o));if(35===o)do{o=e.input.charCodeAt(++e.position)}while(!ce(o)&&0!==o)}for(;0!==o;){for(je(e),e.lineIndent=0,o=e.input.charCodeAt(e.position);(!s||e.lineIndent<p)&&32===o;)e.lineIndent++,o=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>p&&(p=e.lineIndent),ce(o))f++;else{if(e.lineIndent<p){l===ne?e.result+=u.repeat("\n",c?1+f:f):l===ee&&c&&(e.result+="\n");break}for(i?se(o)?(d=!0,e.result+=u.repeat("\n",c?1+f:f)):d?(d=!1,e.result+=u.repeat("\n",f+1)):0===f?c&&(e.result+=" "):e.result+=u.repeat("\n",f):e.result+=u.repeat("\n",c?1+f:f),c=!0,s=!0,f=0,n=e.position;!ce(o)&&0!==o;)o=e.input.charCodeAt(++e.position);xe(e,n,e.position,!1)}}return!0}(e,f)||function(e,t){var n,i,r;if(39!==(n=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,i=r=e.position;0!==(n=e.input.charCodeAt(e.position));)if(39===n){if(xe(e,i,e.position,!0),39!==(n=e.input.charCodeAt(++e.position)))return!0;i=e.position,e.position++,r=e.position}else ce(n)?(xe(e,i,r,!0),Fe(e,Ee(e,!1,t)),i=r=e.position):e.position===e.lineStart&&Oe(e)?we(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);we(e,"unexpected end of the stream within a single quoted scalar")}(e,f)||function(e,t){var n,i,r,o,a,l,u;if(34!==(l=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=i=e.position;0!==(l=e.input.charCodeAt(e.position));){if(34===l)return xe(e,n,e.position,!0),e.position++,!0;if(92===l){if(xe(e,n,e.position,!0),ce(l=e.input.charCodeAt(++e.position)))Ee(e,!1,t);else if(l<256&&me[l])e.result+=ye[l],e.position++;else if((a=120===(u=l)?2:117===u?4:85===u?8:0)>0){for(r=a,o=0;r>0;r--)(a=de(l=e.input.charCodeAt(++e.position)))>=0?o=(o<<4)+a:we(e,"expected hexadecimal character");e.result+=ge(o),e.position++}else we(e,"unknown escape sequence");n=i=e.position}else ce(l)?(xe(e,n,i,!0),Fe(e,Ee(e,!1,t)),n=i=e.position):e.position===e.lineStart&&Oe(e)?we(e,"unexpected end of the document within a double quoted scalar"):(e.position++,i=e.position)}we(e,"unexpected end of the stream within a double quoted scalar")}(e,f)?m=!0:!function(e){var t,n,i;if(42!==(i=e.input.charCodeAt(e.position)))return!1;for(i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!pe(i)&&!fe(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&we(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),Z.call(e.anchorMap,n)||we(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],Ee(e,!0,-1),!0}(e)?function(e,t,n){var i,r,o,a,l,u,c,s,p=e.kind,f=e.result;if(pe(s=e.input.charCodeAt(e.position))||fe(s)||35===s||38===s||42===s||33===s||124===s||62===s||39===s||34===s||37===s||64===s||96===s)return!1;if((63===s||45===s)&&(pe(i=e.input.charCodeAt(e.position+1))||n&&fe(i)))return!1;for(e.kind="scalar",e.result="",r=o=e.position,a=!1;0!==s;){if(58===s){if(pe(i=e.input.charCodeAt(e.position+1))||n&&fe(i))break}else if(35===s){if(pe(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&Oe(e)||n&&fe(s))break;if(ce(s)){if(l=e.line,u=e.lineStart,c=e.lineIndent,Ee(e,!1,-1),e.lineIndent>=t){a=!0,s=e.input.charCodeAt(e.position);continue}e.position=o,e.line=l,e.lineStart=u,e.lineIndent=c;break}}a&&(xe(e,r,o,!1),Fe(e,e.line-l),r=o=e.position,a=!1),se(s)||(o=e.position+1),s=e.input.charCodeAt(++e.position)}return xe(e,r,o,!1),!!e.result||(e.kind=p,e.result=f,!1)}(e,f,z===n)&&(m=!0,null===e.tag&&(e.tag="?")):(m=!0,null===e.tag&&null===e.anchor||we(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===h&&(m=l&&Me(e,d))),null!==e.tag&&"!"!==e.tag)if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&we(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),c=0,s=e.implicitTypes.length;c<s;c+=1)if((p=e.implicitTypes[c]).resolve(e.result)){e.result=p.construct(e.result),e.tag=p.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else Z.call(e.typeMap[e.kind||"fallback"],e.tag)?(p=e.typeMap[e.kind||"fallback"][e.tag],null!==e.result&&p.kind!==e.kind&&we(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+p.kind+'", not "'+e.kind+'"'),p.resolve(e.result)?(e.result=p.construct(e.result),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):we(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):we(e,"unknown tag !<"+e.tag+">");return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||m}function _e(e){var t,n,i,r,o=e.position,a=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};0!==(r=e.input.charCodeAt(e.position))&&(Ee(e,!0,-1),r=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==r));){for(a=!0,r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!pe(r);)r=e.input.charCodeAt(++e.position);for(i=[],(n=e.input.slice(t,e.position)).length<1&&we(e,"directive name must not be less than one character in length");0!==r;){for(;se(r);)r=e.input.charCodeAt(++e.position);if(35===r){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&!ce(r));break}if(ce(r))break;for(t=e.position;0!==r&&!pe(r);)r=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}0!==r&&je(e),Z.call(ke,n)?ke[n](e,n,i):Ce(e,'unknown document directive "'+n+'"')}Ee(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,Ee(e,!0,-1)):a&&we(e,"directives end mark is expected"),Le(e,e.lineIndent-1,X,!1,!0),Ee(e,!0,-1),e.checkLineBreaks&&re.test(e.input.slice(o,e.position))&&Ce(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Oe(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,Ee(e,!0,-1)):e.position<e.length-1&&we(e,"end of the stream or a document separator is expected")}function De(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new Ae(e,t),i=e.indexOf("\0");for(-1!==i&&(n.position=i,we(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)_e(n);return n.documents}function Ue(e,t,n){null!==t&&"object"==typeof t&&void 0===n&&(n=t,t=null);var i=De(e,n);if("function"!=typeof t)return i;for(var r=0,o=i.length;r<o;r+=1)t(i[r])}function Ye(e,t){var n=De(e,t);if(0!==n.length){if(1===n.length)return n[0];throw new s("expected a single document in the stream, but found more")}}var qe={loadAll:Ue,load:Ye,safeLoadAll:function(e,t,n){return"object"==typeof t&&null!==t&&void 0===n&&(n=t,t=null),Ue(e,t,u.extend({schema:B},n))},safeLoad:function(e,t){return Ye(e,u.extend({schema:B},t))}},Re=Object.prototype.toString,Ve=Object.prototype.hasOwnProperty,We=9,Be=10,Pe=13,$e=32,Ke=33,He=34,Ge=35,Ze=37,ze=38,Je=39,Qe=42,Xe=44,et=45,tt=58,nt=61,it=62,rt=63,ot=64,at=91,lt=93,ut=96,ct=123,st=124,pt=125,ft={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},dt=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function ht(e){var t,n,i;if(t=e.toString(16).toUpperCase(),e<=255)n="x",i=2;else if(e<=65535)n="u",i=4;else{if(!(e<=4294967295))throw new s("code point within a string may not be greater than 0xFFFFFFFF");n="U",i=8}return"\\"+n+u.repeat("0",i-t.length)+t}function gt(e){this.schema=e.schema||G,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=u.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var n,i,r,o,a,l,u;if(null===t)return{};for(n={},r=0,o=(i=Object.keys(t)).length;r<o;r+=1)a=i[r],l=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(u=e.compiledTypeMap.fallback[a])&&Ve.call(u.styleAliases,l)&&(l=u.styleAliases[l]),n[a]=l;return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function mt(e,t){for(var n,i=u.repeat(" ",t),r=0,o=-1,a="",l=e.length;r<l;)-1===(o=e.indexOf("\n",r))?(n=e.slice(r),r=l):(n=e.slice(r,o+1),r=o+1),n.length&&"\n"!==n&&(a+=i),a+=n;return a}function yt(e,t){return"\n"+u.repeat(" ",e.indent*t)}function vt(e){return e===$e||e===We}function At(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function bt(e,t){return At(e)&&65279!==e&&e!==Xe&&e!==at&&e!==lt&&e!==ct&&e!==pt&&e!==tt&&(e!==Ge||t&&function(e){return At(e)&&!vt(e)&&65279!==e&&e!==Pe&&e!==Be}(t))}function wt(e){return/^\n* /.test(e)}var Ct=1,kt=2,xt=3,St=4,It=5;function jt(e,t,n,i,r){var o,a,l,u,c=!1,s=!1,p=-1!==i,f=-1,d=At(u=e.charCodeAt(0))&&65279!==u&&!vt(u)&&u!==et&&u!==rt&&u!==tt&&u!==Xe&&u!==at&&u!==lt&&u!==ct&&u!==pt&&u!==Ge&&u!==ze&&u!==Qe&&u!==Ke&&u!==st&&u!==nt&&u!==it&&u!==Je&&u!==He&&u!==Ze&&u!==ot&&u!==ut&&!vt(e.charCodeAt(e.length-1));if(t)for(o=0;o<e.length;o++){if(!At(a=e.charCodeAt(o)))return It;l=o>0?e.charCodeAt(o-1):null,d=d&&bt(a,l)}else{for(o=0;o<e.length;o++){if((a=e.charCodeAt(o))===Be)c=!0,p&&(s=s||o-f-1>i&&" "!==e[f+1],f=o);else if(!At(a))return It;l=o>0?e.charCodeAt(o-1):null,d=d&&bt(a,l)}s=s||p&&o-f-1>i&&" "!==e[f+1]}return c||s?n>9&&wt(e)?It:s?St:xt:d&&!r(e)?Ct:kt}function Et(e,t,n,i){e.dump=function(){if(0===t.length)return"''";if(!e.noCompatMode&&-1!==dt.indexOf(t))return"'"+t+"'";var r=e.indent*Math.max(1,n),o=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-r),a=i||e.flowLevel>-1&&n>=e.flowLevel;switch(jt(t,a,e.indent,o,(function(t){return function(e,t){var n,i;for(n=0,i=e.implicitTypes.length;n<i;n+=1)if(e.implicitTypes[n].resolve(t))return!0;return!1}(e,t)}))){case Ct:return t;case kt:return"'"+t.replace(/'/g,"''")+"'";case xt:return"|"+Ot(t,e.indent)+Ft(mt(t,r));case St:return">"+Ot(t,e.indent)+Ft(mt(function(e,t){var n,i,r=/(\n+)([^\n]*)/g,o=(l=e.indexOf("\n"),l=-1!==l?l:e.length,r.lastIndex=l,Mt(e.slice(0,l),t)),a="\n"===e[0]||" "===e[0];var l;for(;i=r.exec(e);){var u=i[1],c=i[2];n=" "===c[0],o+=u+(a||n||""===c?"":"\n")+Mt(c,t),a=n}return o}(t,o),r));case It:return'"'+function(e){for(var t,n,i,r="",o=0;o<e.length;o++)(t=e.charCodeAt(o))>=55296&&t<=56319&&(n=e.charCodeAt(o+1))>=56320&&n<=57343?(r+=ht(1024*(t-55296)+n-56320+65536),o++):r+=!(i=ft[t])&&At(t)?e[o]:i||ht(t);return r}(t)+'"';default:throw new s("impossible error: invalid scalar style")}}()}function Ot(e,t){var n=wt(e)?String(t):"",i="\n"===e[e.length-1];return n+(i&&("\n"===e[e.length-2]||"\n"===e)?"+":i?"":"-")+"\n"}function Ft(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Mt(e,t){if(""===e||" "===e[0])return e;for(var n,i,r=/ [^ ]/g,o=0,a=0,l=0,u="";n=r.exec(e);)(l=n.index)-o>t&&(i=a>o?a:l,u+="\n"+e.slice(o,i),o=i+1),a=l;return u+="\n",e.length-o>t&&a>o?u+=e.slice(o,a)+"\n"+e.slice(a+1):u+=e.slice(o),u.slice(1)}function Nt(e,t,n){var i,r,o,a,l,u;for(o=0,a=(r=n?e.explicitTypes:e.implicitTypes).length;o<a;o+=1)if(((l=r[o]).instanceOf||l.predicate)&&(!l.instanceOf||"object"==typeof t&&t instanceof l.instanceOf)&&(!l.predicate||l.predicate(t))){if(e.tag=n?l.tag:"?",l.represent){if(u=e.styleMap[l.tag]||l.defaultStyle,"[object Function]"===Re.call(l.represent))i=l.represent(t,u);else{if(!Ve.call(l.represent,u))throw new s("!<"+l.tag+'> tag resolver accepts not "'+u+'" style');i=l.represent[u](t,u)}e.dump=i}return!0}return!1}function Tt(e,t,n,i,r,o){e.tag=null,e.dump=n,Nt(e,n,!1)||Nt(e,n,!0);var a=Re.call(e.dump);i&&(i=e.flowLevel<0||e.flowLevel>t);var l,u,c="[object Object]"===a||"[object Array]"===a;if(c&&(u=-1!==(l=e.duplicates.indexOf(n))),(null!==e.tag&&"?"!==e.tag||u||2!==e.indent&&t>0)&&(r=!1),u&&e.usedDuplicates[l])e.dump="*ref_"+l;else{if(c&&u&&!e.usedDuplicates[l]&&(e.usedDuplicates[l]=!0),"[object Object]"===a)i&&0!==Object.keys(e.dump).length?(!function(e,t,n,i){var r,o,a,l,u,c,p="",f=e.tag,d=Object.keys(n);if(!0===e.sortKeys)d.sort();else if("function"==typeof e.sortKeys)d.sort(e.sortKeys);else if(e.sortKeys)throw new s("sortKeys must be a boolean or a function");for(r=0,o=d.length;r<o;r+=1)c="",i&&0===r||(c+=yt(e,t)),l=n[a=d[r]],Tt(e,t+1,a,!0,!0,!0)&&((u=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&Be===e.dump.charCodeAt(0)?c+="?":c+="? "),c+=e.dump,u&&(c+=yt(e,t)),Tt(e,t+1,l,!0,u)&&(e.dump&&Be===e.dump.charCodeAt(0)?c+=":":c+=": ",p+=c+=e.dump));e.tag=f,e.dump=p||"{}"}(e,t,e.dump,r),u&&(e.dump="&ref_"+l+e.dump)):(!function(e,t,n){var i,r,o,a,l,u="",c=e.tag,s=Object.keys(n);for(i=0,r=s.length;i<r;i+=1)l="",0!==i&&(l+=", "),e.condenseFlow&&(l+='"'),a=n[o=s[i]],Tt(e,t,o,!1,!1)&&(e.dump.length>1024&&(l+="? "),l+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Tt(e,t,a,!1,!1)&&(u+=l+=e.dump));e.tag=c,e.dump="{"+u+"}"}(e,t,e.dump),u&&(e.dump="&ref_"+l+" "+e.dump));else if("[object Array]"===a){var p=e.noArrayIndent&&t>0?t-1:t;i&&0!==e.dump.length?(!function(e,t,n,i){var r,o,a="",l=e.tag;for(r=0,o=n.length;r<o;r+=1)Tt(e,t+1,n[r],!0,!0)&&(i&&0===r||(a+=yt(e,t)),e.dump&&Be===e.dump.charCodeAt(0)?a+="-":a+="- ",a+=e.dump);e.tag=l,e.dump=a||"[]"}(e,p,e.dump,r),u&&(e.dump="&ref_"+l+e.dump)):(!function(e,t,n){var i,r,o="",a=e.tag;for(i=0,r=n.length;i<r;i+=1)Tt(e,t,n[i],!1,!1)&&(0!==i&&(o+=","+(e.condenseFlow?"":" ")),o+=e.dump);e.tag=a,e.dump="["+o+"]"}(e,p,e.dump),u&&(e.dump="&ref_"+l+" "+e.dump))}else{if("[object String]"!==a){if(e.skipInvalid)return!1;throw new s("unacceptable kind of an object to dump "+a)}"?"!==e.tag&&Et(e,e.dump,t,o)}null!==e.tag&&"?"!==e.tag&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function Lt(e,t){var n,i,r=[],o=[];for(_t(e,r,o),n=0,i=o.length;n<i;n+=1)t.duplicates.push(r[o[n]]);t.usedDuplicates=new Array(i)}function _t(e,t,n){var i,r,o;if(null!==e&&"object"==typeof e)if(-1!==(r=t.indexOf(e)))-1===n.indexOf(r)&&n.push(r);else if(t.push(e),Array.isArray(e))for(r=0,o=e.length;r<o;r+=1)_t(e[r],t,n);else for(r=0,o=(i=Object.keys(e)).length;r<o;r+=1)_t(e[i[r]],t,n)}function Dt(e,t){var n=new gt(t=t||{});return n.noRefs||Lt(e,n),Tt(n,0,e,!0,!0)?n.dump+"\n":""}var Ut={dump:Dt,safeDump:function(e,t){return Dt(e,u.extend({schema:B},t))}};function Yt(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}var qt={Type:g,Schema:v,FAILSAFE_SCHEMA:A,JSON_SCHEMA:j,CORE_SCHEMA:E,DEFAULT_SAFE_SCHEMA:B,DEFAULT_FULL_SCHEMA:G,load:qe.load,loadAll:qe.loadAll,safeLoad:qe.safeLoad,safeLoadAll:qe.safeLoadAll,dump:Ut.dump,safeDump:Ut.safeDump,YAMLException:s,MINIMAL_SCHEMA:A,SAFE_SCHEMA:B,DEFAULT_SCHEMA:G,scan:Yt("scan"),parse:Yt("parse"),compose:Yt("compose"),addConstructor:Yt("addConstructor")},Rt=t({name:"YamlForm",components:{Editor:n((function(){return import("./Editor-6bf5913f.js")}))},mixins:[e],inject:["providedData"],props:{modelValue:{type:null,default:function(){return{}}}},emits:["code::model-data-updated"],computed:{originalValueString:function(){return qt.safeDump(this.referenceModel,{lineWidth:2e3})},theme:function(){return this.providedData.theme||"light"},editorModel:{get:function(){return qt.safeDump(this.modelValue,{lineWidth:2e3})},set:function(e){var t=null;try{t=qt.safeLoad(e,{json:!0})}catch(e){t=this.modelData}this.modelData=t,this.$emit("code::model-data-updated",t)}}}}),Vt={class:"ml-30"};Rt.render=function(e,t,n,l,u,c){var s=i("editor");return r(),o("div",Vt,[(r(),a(s,{key:e.theme,modelValue:e.editorModel,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.editorModel=t}),"original-value":e.originalValueString,language:"yaml","editor-height":80},null,8,["modelValue","original-value"]))])};export{Rt as default};