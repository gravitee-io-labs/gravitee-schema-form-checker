"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4800],{4800:(m,a,t)=>{t.r(a),t.d(a,{yacas:()=>T});var f=function p(e){for(var n={},r=e.split(" "),o=0;o<r.length;++o)n[r[o]]=!0;return n}("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While"),u="(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)",s=new RegExp("(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)"),d=new RegExp(u),h=new RegExp(u+"?_"+u),v=new RegExp(u+"\\s*\\(");function l(e,n){var r;if('"'===(r=e.next()))return n.tokenize=b,n.tokenize(e,n);if("/"===r){if(e.eat("*"))return n.tokenize=g,n.tokenize(e,n);if(e.eat("/"))return e.skipToEnd(),"comment"}e.backUp(1);var o=e.match(/^(\w+)\s*\(/,!1);null!==o&&f.hasOwnProperty(o[1])&&n.scopes.push("bodied");var i=c(n);if("bodied"===i&&"["===r&&n.scopes.pop(),("["===r||"{"===r||"("===r)&&n.scopes.push(r),("["===(i=c(n))&&"]"===r||"{"===i&&"}"===r||"("===i&&")"===r)&&n.scopes.pop(),";"===r)for(;"bodied"===i;)n.scopes.pop(),i=c(n);return e.match(/\d+ *#/,!0,!1)?"qualifier":e.match(s,!0,!1)?"number":e.match(h,!0,!1)?"variableName.special":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(v,!0,!1)?(e.backUp(1),"variableName.function"):e.match(d,!0,!1)?"variable":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/,!0,!1)?"operator":"error"}function b(e,n){for(var r,o=!1,i=!1;null!=(r=e.next());){if('"'===r&&!i){o=!0;break}i=!i&&"\\"===r}return o&&!i&&(n.tokenize=l),"string"}function g(e,n){for(var r,o;null!=(o=e.next());){if("*"===r&&"/"===o){n.tokenize=l;break}r=o}return"comment"}function c(e){var n=null;return e.scopes.length>0&&(n=e.scopes[e.scopes.length-1]),n}const T={startState:function(){return{tokenize:l,scopes:[]}},token:function(e,n){return e.eatSpace()?null:n.tokenize(e,n)},indent:function(e,n,r){if(e.tokenize!==l&&null!==e.tokenize)return null;var o=0;return("]"===n||"];"===n||"}"===n||"};"===n||");"===n)&&(o=-1),(e.scopes.length+o)*r.unit},languageData:{electricInput:/[{}\[\]()\;]/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}}]);