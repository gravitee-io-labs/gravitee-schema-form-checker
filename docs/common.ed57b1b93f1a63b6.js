"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4653:(S,h,a)=>{function l(n){g(n,"start");var i={},e=n.languageData||{},u=!1;for(var o in n)if(o!=e&&n.hasOwnProperty(o))for(var d=i[o]=[],r=n[o],t=0;t<r.length;t++){var f=r[t];d.push(new x(f,n)),(f.indent||f.dedent)&&(u=!0)}return{startState:function(){return{state:"start",pending:null,indent:u?[]:null}},copyState:function(p){var c={state:p.state,pending:p.pending,indent:p.indent&&p.indent.slice(0)};return p.stack&&(c.stack=p.stack.slice(0)),c},token:w(i),indent:_(i,e),languageData:e}}function g(n,i){if(!n.hasOwnProperty(i))throw new Error("Undefined state "+i+" in simple mode")}function x(n,i){(n.next||n.push)&&g(i,n.next||n.push),this.regex=function s(n,i){if(!n)return/(?:)/;var e="";return n instanceof RegExp?(n.ignoreCase&&(e="i"),n=n.source):n=String(n),new RegExp((!1===i?"":"^")+"(?:"+n+")",e)}(n.regex),this.token=function k(n){if(!n)return null;if(n.apply)return n;if("string"==typeof n)return n.replace(/\./g," ");for(var i=[],e=0;e<n.length;e++)i.push(n[e]&&n[e].replace(/\./g," "));return i}(n.token),this.data=n}function w(n){return function(i,e){if(e.pending){var u=e.pending.shift();return 0==e.pending.length&&(e.pending=null),i.pos+=u.text.length,u.token}for(var o=n[e.state],d=0;d<o.length;d++){var r=o[d],t=(!r.data.sol||i.sol())&&i.match(r.regex);if(t){r.data.next?e.state=r.data.next:r.data.push?((e.stack||(e.stack=[])).push(e.state),e.state=r.data.push):r.data.pop&&e.stack&&e.stack.length&&(e.state=e.stack.pop()),r.data.indent&&e.indent.push(i.indentation()+i.indentUnit),r.data.dedent&&e.indent.pop();var f=r.token;if(f&&f.apply&&(f=f(t)),t.length>2&&r.token&&"string"!=typeof r.token){e.pending=[];for(var p=2;p<t.length;p++)t[p]&&e.pending.push({text:t[p],token:r.token[p-1]});return i.backUp(t[0].length-(t[1]?t[1].length:0)),f[0]}return f&&f.join?f[0]:f}}return i.next(),null}}function _(n,i){return function(e,u){if(null==e.indent||i.dontIndentStates&&i.doneIndentState.indexOf(e.state)>-1)return null;var o=e.indent.length-1,d=n[e.state];n:for(;;){for(var r=0;r<d.length;r++){var t=d[r];if(t.data.dedent&&!1!==t.data.dedentIfLineStart){var f=t.regex.exec(u);if(f&&f[0]){o--,(t.next||t.push)&&(d=n[t.next||t.push]),u=u.slice(f[0].length);continue n}}}break}return o<0?0:e.indent[o]}}a.d(h,{Q:()=>l})}}]);