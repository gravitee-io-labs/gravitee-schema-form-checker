"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7521],{7521:(k,u,l)=>{function o(e){for(var r={},n=0,t=e.length;n<t;++n)r[e[n]]=!0;return r}l.r(u),l.d(u,{eiffel:()=>h});var c=o(["note","across","when","variant","until","unique","undefine","then","strip","select","retry","rescue","require","rename","reference","redefine","prefix","once","old","obsolete","loop","local","like","is","inspect","infix","include","if","frozen","from","external","export","ensure","end","elseif","else","do","creation","create","check","alias","agent","separate","invariant","inherit","indexing","feature","expanded","deferred","class","Void","True","Result","Precursor","False","Current","create","attached","detachable","as","and","implies","not","or"]),s=o([":=","and then","and","or","<<",">>"]);function p(e,r){if(e.eatSpace())return null;var n=e.next();return'"'==n||"'"==n?function f(e,r,n){return n.tokenize.push(e),e(r,n)}(function d(e,r,n){return function(t,b){for(var i,a=!1;null!=(i=t.next());){if(i==e&&(n||!a)){b.tokenize.pop();break}a=!a&&"%"==i}return r}}(n,"string"),e,r):"-"==n&&e.eat("-")?(e.skipToEnd(),"comment"):":"==n&&e.eat("=")?"operator":/[0-9]/.test(n)?(e.eatWhile(/[xXbBCc0-9\.]/),e.eat(/[\?\!]/),"variable"):/[a-zA-Z_0-9]/.test(n)?(e.eatWhile(/[a-zA-Z_0-9]/),e.eat(/[\?\!]/),"variable"):/[=+\-\/*^%<>~]/.test(n)?(e.eatWhile(/[=+\-\/*^%<>~]/),"operator"):null}const h={startState:function(){return{tokenize:[p]}},token:function(e,r){var n=r.tokenize[r.tokenize.length-1](e,r);if("variable"==n){var t=e.current();n=c.propertyIsEnumerable(e.current())?"keyword":s.propertyIsEnumerable(e.current())?"operator":/^[A-Z][A-Z_0-9]*$/g.test(t)?"tag":/^0[bB][0-1]+$/g.test(t)||/^0[cC][0-7]+$/g.test(t)||/^0[xX][a-fA-F0-9]+$/g.test(t)||/^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(t)||/^[0-9]+$/g.test(t)?"number":"variable"}return n},languageData:{commentTokens:{line:"--"}}}}}]);