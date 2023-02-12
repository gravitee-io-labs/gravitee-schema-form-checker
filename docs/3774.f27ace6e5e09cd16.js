"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3774],{3774:($,_,y)=>{function c(n,e){return new RegExp((e?"":"^")+"(?:"+n.join("|")+")"+(e?"$":"\\b"))}function o(n,e,r){return r.tokenize.push(n),n(e,r)}y.r(_),y.d(_,{crystal:()=>L});var d=/^(?:[-+/%|&^]|\*\*?|[<>]{2})/,F=/^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/,g=/^(?:\[\][?=]?)/,E=/^(?:\.(?:\.{2})?|->|[?:])/,a=/^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,k=/^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,S=c(["abstract","alias","as","asm","begin","break","case","class","def","do","else","elsif","end","ensure","enum","extend","for","fun","if","include","instance_sizeof","lib","macro","module","next","of","out","pointerof","private","protected","rescue","return","require","select","sizeof","struct","super","then","type","typeof","uninitialized","union","unless","until","when","while","with","yield","__DIR__","__END_LINE__","__FILE__","__LINE__"]),T=c(["true","false","nil","self"]),O=c(["def","fun","macro","class","module","struct","lib","enum","union","do","for"]),D=c(["if","unless","case","while","until","begin","then"]),b=["end","else","elsif","rescue","ensure"],N=c(b),x=["\\)","\\}","\\]"],Z=new RegExp("^(?:"+x.join("|")+")$"),I={def:s,fun:s,macro:function P(n,e){if(n.eatSpace())return null;var r;if(r=n.match(a)){if("def"==r)return"keyword";n.eat(/[?!]/)}return e.tokenize.pop(),"def"},class:l,module:l,struct:l,lib:l,enum:l,union:l},v={"[":"]","{":"}","(":")","<":">"};function z(n,e){if(n.eatSpace())return null;if("\\"!=e.lastToken&&n.match("{%",!1))return o(f("%","%"),n,e);if("\\"!=e.lastToken&&n.match("{{",!1))return o(f("{","}"),n,e);if("#"==n.peek())return n.skipToEnd(),"comment";var r;if(n.match(a))return n.eat(/[?!]/),r=n.current(),n.eat(":")?"atom":"."==e.lastToken?"property":S.test(r)?(O.test(r)?!("fun"==r&&e.blocks.indexOf("lib")>=0)&&!("def"==r&&"abstract"==e.lastToken)&&(e.blocks.push(r),e.currentIndent+=1):"operator"!=e.lastStyle&&e.lastStyle||!D.test(r)?"end"==r&&(e.blocks.pop(),e.currentIndent-=1):(e.blocks.push(r),e.currentIndent+=1),I.hasOwnProperty(r)&&e.tokenize.push(I[r]),"keyword"):T.test(r)?"atom":"variable";if(n.eat("@"))return"["==n.peek()?o(p("[","]","meta"),n,e):(n.eat("@"),n.match(a)||n.match(k),"propertyName");if(n.match(k))return"tag";if(n.eat(":"))return n.eat('"')?o(w('"',"atom",!1),n,e):n.match(a)||n.match(k)||n.match(d)||n.match(F)||n.match(g)?"atom":(n.eat(":"),"operator");if(n.eat('"'))return o(w('"',"string",!0),n,e);if("%"==n.peek()){var i,t="string",u=!0;if(n.match("%r"))t="string.special",i=n.next();else if(n.match("%w"))u=!1,i=n.next();else if(n.match("%q"))u=!1,i=n.next();else if(i=n.match(/^%([^\w\s=])/))i=i[1];else{if(n.match(/^%[a-zA-Z_\u009F-\uFFFF][\w\u009F-\uFFFF]*/))return"meta";if(n.eat("%"))return"operator"}return v.hasOwnProperty(i)&&(i=v[i]),o(w(i,t,u),n,e)}return(r=n.match(/^<<-('?)([A-Z]\w*)\1/))?o(function R(n,e){return function(r,t){if(r.sol()&&(r.eatSpace(),r.match(n)))return t.tokenize.pop(),"string";for(var u=!1;r.peek();)if(u)r.next(),u=!1;else{if(r.match("{%",!1))return t.tokenize.push(f("%","%")),"string";if(r.match("{{",!1))return t.tokenize.push(f("{","}")),"string";if(e&&r.match("#{",!1))return t.tokenize.push(p("#{","}","meta")),"string";u=e&&"\\"==r.next()}return"string"}}(r[2],!r[1]),n,e):n.eat("'")?(n.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/),n.eat("'"),"atom"):n.eat("0")?(n.eat("x")?n.match(/^[0-9a-fA-F_]+/):n.eat("o")?n.match(/^[0-7_]+/):n.eat("b")&&n.match(/^[01_]+/),"number"):n.eat(/^\d/)?(n.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?/),"number"):n.match(d)?(n.eat("="),"operator"):n.match(F)||n.match(E)?"operator":(r=n.match(/[({[]/,!1))?o(p(r=r[0],v[r],null),n,e):n.eat("\\")?(n.next(),"meta"):(n.next(),null)}function p(n,e,r,t){return function(u,i){if(!t&&u.match(n))return i.tokenize[i.tokenize.length-1]=p(n,e,r,!0),i.currentIndent+=1,r;var h=z(u,i);return u.current()===e&&(i.tokenize.pop(),i.currentIndent-=1,h=r),h}}function f(n,e,r){return function(t,u){return!r&&t.match("{"+n)?(u.currentIndent+=1,u.tokenize[u.tokenize.length-1]=f(n,e,!0),"meta"):t.match(e+"}")?(u.currentIndent-=1,u.tokenize.pop(),"meta"):z(t,u)}}function s(n,e){return n.eatSpace()?null:(n.match(a)?n.eat(/[!?]/):n.match(d)||n.match(F)||n.match(g),e.tokenize.pop(),"def")}function l(n,e){return n.eatSpace()?null:(n.match(k),e.tokenize.pop(),"def")}function w(n,e,r){return function(t,u){for(var i=!1;t.peek();)if(i)t.next(),i=!1;else{if(t.match("{%",!1))return u.tokenize.push(f("%","%")),e;if(t.match("{{",!1))return u.tokenize.push(f("{","}")),e;if(r&&t.match("#{",!1))return u.tokenize.push(p("#{","}","meta")),e;var h=t.next();if(h==n)return u.tokenize.pop(),e;i=r&&"\\"==h}return e}}const L={startState:function(){return{tokenize:[z],currentIndent:0,lastToken:null,lastStyle:null,blocks:[]}},token:function(n,e){var r=e.tokenize[e.tokenize.length-1](n,e),t=n.current();return r&&"comment"!=r&&(e.lastToken=t,e.lastStyle=r),r},indent:function(n,e,r){return e=e.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g,""),N.test(e)||Z.test(e)?r.unit*(n.currentIndent-1):r.unit*n.currentIndent},languageData:{indentOnInput:c(x.concat(b),!0),commentTokens:{line:"#"}}}}}]);