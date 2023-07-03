"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4714],{4714:(_,d,k)=>{function o(e){for(var n={},r=0;r<e.length;++r)n[e[r]]=!0;return n}k.r(d),k.d(d,{r:()=>L});var t,v=["NULL","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_","TRUE","FALSE"],b=["list","quote","bquote","eval","return","call","parse","deparse"],s=["if","else","repeat","while","function","for","in","next","break"],N=o(v),w=o(b),A=o(s),E=o(["if","else","repeat","while","function","for"]),x=/[+\-*\/^<>=!&|~$:]/;function u(e,n){t=null;var r=e.next();if("#"==r)return e.skipToEnd(),"comment";if("0"==r&&e.eat("x"))return e.eatWhile(/[\da-f]/i),"number";if("."==r&&e.eat(/\d/))return e.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(r))return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if("'"==r||'"'==r)return n.tokenize=function I(e){return function(n,r){if(n.eat("\\")){var i=n.next();return"x"==i?n.match(/^[a-f0-9]{2}/i):("u"==i||"U"==i)&&n.eat("{")&&n.skipTo("}")?n.next():"u"==i?n.match(/^[a-f0-9]{4}/i):"U"==i?n.match(/^[a-f0-9]{8}/i):/[0-7]/.test(i)&&n.match(/^[0-7]{1,2}/),"string.special"}for(var l;null!=(l=n.next());){if(l==e){r.tokenize=u;break}if("\\"==l){n.backUp(1);break}}return"string"}}(r),"string";if("`"==r)return e.match(/[^`]+`/),"string.special";if("."==r&&e.match(/.(?:[.]|\d+)/))return"keyword";if(/[a-zA-Z\.]/.test(r)){e.eatWhile(/[\w\.]/);var i=e.current();return N.propertyIsEnumerable(i)?"atom":A.propertyIsEnumerable(i)?(E.propertyIsEnumerable(i)&&!e.match(/\s*if(\s+|$)/,!1)&&(t="block"),"keyword"):w.propertyIsEnumerable(i)?"builtin":"variable"}return"%"==r?(e.skipTo("%")&&e.next(),"variableName.special"):"<"==r&&e.eat("-")||"<"==r&&e.match("<-")||"-"==r&&e.match(/>>?/)||"="==r&&n.ctx.argList?"operator":x.test(r)?("$"==r||e.eatWhile(x),"operator"):/[\(\){}\[\];]/.test(r)?(t=r,";"==r?"punctuation":null):null}function f(e,n,r){e.ctx={type:n,indent:e.indent,flags:0,column:r.column(),prev:e.ctx}}function h(e,n){var r=e.ctx;e.ctx={type:r.type,indent:r.indent,flags:r.flags|n,column:r.column,prev:r.prev}}function p(e){e.indent=e.ctx.indent,e.ctx=e.ctx.prev}const L={startState:function(e){return{tokenize:u,ctx:{type:"top",indent:-e,flags:2},indent:0,afterIdent:!1}},token:function(e,n){if(e.sol()&&(3&n.ctx.flags||(n.ctx.flags|=2),4&n.ctx.flags&&p(n),n.indent=e.indentation()),e.eatSpace())return null;var r=n.tokenize(e,n);return"comment"!=r&&!(2&n.ctx.flags)&&h(n,1),(";"==t||"{"==t||"}"==t)&&"block"==n.ctx.type&&p(n),"{"==t?f(n,"}",e):"("==t?(f(n,")",e),n.afterIdent&&(n.ctx.argList=!0)):"["==t?f(n,"]",e):"block"==t?f(n,"block",e):t==n.ctx.type?p(n):"block"==n.ctx.type&&"comment"!=r&&h(n,4),n.afterIdent="variable"==r||"keyword"==r,r},indent:function(e,n,r){if(e.tokenize!=u)return 0;var i=n&&n.charAt(0),l=e.ctx,y=i==l.type;return 4&l.flags&&(l=l.prev),"block"==l.type?l.indent+("{"==i?0:r.unit):1&l.flags?l.column+(y?0:1):l.indent+(y?0:r.unit)},languageData:{wordChars:".",commentTokens:{line:"#"},autocomplete:v.concat(b,s)}}}}]);