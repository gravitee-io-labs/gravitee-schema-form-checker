"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8702],{8702:(k,c,u)=>{u.r(c),u.d(c,{commonLisp:()=>b});var l,d=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,f=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,p=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,s=/[^\s'`,@()\[\]";]/;function i(e){for(var n;n=e.next();)if("\\"==n)e.next();else if(!s.test(n)){e.backUp(1);break}return e.current()}function o(e,n){if(e.eatSpace())return l="ws",null;if(e.match(p))return"number";var t;if("\\"==(t=e.next())&&(t=e.next()),'"'==t)return(n.tokenize=a)(e,n);if("("==t)return l="open","bracket";if(")"==t||"]"==t)return l="close","bracket";if(";"==t)return e.skipToEnd(),l="ws","comment";if(/['`,@]/.test(t))return null;if("|"==t)return e.skipTo("|")?(e.next(),"variableName"):(e.skipToEnd(),"error");if("#"==t)return"("==(t=e.next())?(l="open","bracket"):/[+\-=\.']/.test(t)||/\d/.test(t)&&e.match(/^\d*#/)?null:"|"==t?(n.tokenize=x)(e,n):":"==t?(i(e),"meta"):"\\"==t?(e.next(),i(e),"string.special"):"error";var r=i(e);return"."==r?null:(l="symbol","nil"==r||"t"==r||":"==r.charAt(0)?"atom":"open"==n.lastType&&(d.test(r)||f.test(r))?"keyword":"&"==r.charAt(0)?"variableName.special":"variableName")}function a(e,n){for(var r,t=!1;r=e.next();){if('"'==r&&!t){n.tokenize=o;break}t=!t&&"\\"==r}return"string"}function x(e,n){for(var t,r;t=e.next();){if("#"==t&&"|"==r){n.tokenize=o;break}r=t}return l="ws","comment"}const b={startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:o}},token:function(e,n){e.sol()&&"number"!=typeof n.ctx.indentTo&&(n.ctx.indentTo=n.ctx.start+1),l=null;var t=n.tokenize(e,n);return"ws"!=l&&(null==n.ctx.indentTo?n.ctx.indentTo="symbol"==l&&f.test(e.current())?n.ctx.start+e.indentUnit:"next":"next"==n.ctx.indentTo&&(n.ctx.indentTo=e.column()),n.lastType=l),"open"==l?n.ctx={prev:n.ctx,start:e.column(),indentTo:null}:"close"==l&&(n.ctx=n.ctx.prev||n.ctx),t},indent:function(e){var n=e.ctx.indentTo;return"number"==typeof n?n:e.ctx.start+1},languageData:{commentTokens:{line:";;",block:{open:"#|",close:"|#"}},closeBrackets:{brackets:["(","[","{",'"']}}}}}]);