"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1413],{1413:(_,p,b)=>{function c(e,t,n){return function(r,k){for(;!r.eol();){if(r.match(t)){k.tokenize=o;break}r.next()}return n&&(k.tokenize=n),e}}function f(e){return function(t,n){for(;!t.eol();)t.next();return n.tokenize=o,e}}function o(e,t){function n(z){return t.tokenize=z,z(e,t)}var r=e.sol(),k=e.next();switch(k){case"{":return e.eat("/"),e.eatSpace(),e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/),t.tokenize=g,"tag";case"_":if(e.eat("_"))return n(c("strong","__",o));break;case"'":if(e.eat("'"))return n(c("em","''",o));break;case"(":if(e.eat("("))return n(c("link","))",o));break;case"[":return n(c("url","]",o));case"|":if(e.eat("|"))return n(c("comment","||"));break;case"-":if(e.eat("="))return n(c("header string","=-",o));if(e.eat("-"))return n(c("error tw-deleted","--",o));break;case"=":if(e.match("=="))return n(c("tw-underline","===",o));break;case":":if(e.eat(":"))return n(c("comment","::"));break;case"^":return n(c("tw-box","^"));case"~":if(e.match("np~"))return n(c("meta","~/np~"))}if(r)switch(k){case"!":return e.match("!!!!!")||e.match("!!!!")||e.match("!!!")||e.match("!!"),n(f("header string"));case"*":case"#":case"+":return n(f("tw-listitem bracket"))}return null}var d,s,i,l;function g(e,t){var n=e.next(),r=e.peek();return"}"==n?(t.tokenize=o,"tag"):"("==n||")"==n?"bracket":"="==n?(s="equals",">"==r&&(e.next(),r=e.peek()),/[\'\"]/.test(r)||(t.tokenize=function N(){return function(e,t){for(;!e.eol();){var n=e.next(),r=e.peek();if(" "==n||","==n||/[ )}]/.test(r)){t.tokenize=g;break}}return"string"}}()),"operator"):/[\'\"]/.test(n)?(t.tokenize=function L(e){return function(t,n){for(;!t.eol();)if(t.next()==e){n.tokenize=g;break}return"string"}}(n),t.tokenize(e,t)):(e.eatWhile(/[^\s\u00a0=\"\'\/?]/),"keyword")}function a(){for(var e=arguments.length-1;e>=0;e--)i.cc.push(arguments[e])}function u(){return a.apply(null,arguments),!0}function x(e,t){i.context={prev:i.context,pluginName:e,indent:i.indented,startOfLine:t,noIndent:i.context&&i.context.noIndent}}function v(){i.context&&(i.context=i.context.prev)}function P(e){if("openPlugin"==e)return i.pluginName=d,u(h,function O(e){return function(t){return"selfclosePlugin"==t||"endPlugin"==t||"endPlugin"==t&&x(i.pluginName,e),u()}}(i.startOfLine));if("closePlugin"==e){var t=!1;return i.context?(t=i.context.pluginName!=d,v()):t=!0,t&&(l="error"),u(function S(e){return function(t){return e&&(l="error"),"endPlugin"==t?u():a()}}(t))}return"string"==e&&((!i.context||"!cdata"!=i.context.name)&&x("!cdata"),i.tokenize==o&&v()),u()}function h(e){return"keyword"==e?(l="attribute",u(h)):"equals"==e?u(C,h):a()}function C(e){return"keyword"==e?(l="string",u()):"string"==e?u(w):a()}function w(e){return"string"==e?u(w):a()}b.r(p),b.d(p,{tiki:()=>I});const I={startState:function(){return{tokenize:o,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(e,t){if(e.sol()&&(t.startOfLine=!0,t.indented=e.indentation()),e.eatSpace())return null;l=s=d=null;var n=t.tokenize(e,t);if((n||s)&&"comment"!=n)for(i=t;!(t.cc.pop()||P)(s||n););return t.startOfLine=!1,l||n},indent:function(e,t,n){var r=e.context;if(r&&r.noIndent)return 0;for(r&&/^{\//.test(t)&&(r=r.prev);r&&!r.startOfLine;)r=r.prev;return r?r.indent+n.unit:0}}}}]);