"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[818],{818:(y,f,a)=>{a.r(f),a.d(f,{go:()=>v});var u,s={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0,error:!0,rune:!0},x={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,delete:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},p=/[+\-*&^%:=<>!|\/]/;function l(e,t){var n=e.next();if('"'==n||"'"==n||"`"==n)return t.tokenize=function g(e){return function(t,n){for(var i,r=!1,o=!1;null!=(i=t.next());){if(i==e&&!r){o=!0;break}r=!r&&"`"!=e&&"\\"==i}return(o||!(r||"`"==e))&&(n.tokenize=l),"string"}}(n),t.tokenize(e,t);if(/[\d\.]/.test(n))return"."==n?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==n?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(/[\[\]{}\(\),;\:\.]/.test(n))return u=n,null;if("/"==n){if(e.eat("*"))return t.tokenize=d,d(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(p.test(n))return e.eatWhile(p),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var r=e.current();return s.propertyIsEnumerable(r)?(("case"==r||"default"==r)&&(u="case"),"keyword"):x.propertyIsEnumerable(r)?"atom":"variable"}function d(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=l;break}n="*"==r}return"comment"}function k(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function c(e,t,n){return e.context=new k(e.indented,t,n,null,e.context)}const v={startState:function(e){return{tokenize:null,context:new k(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"case"==n.type&&(n.type="}")),e.eatSpace())return null;u=null;var r=(t.tokenize||l)(e,t);return"comment"==r||(null==n.align&&(n.align=!0),"{"==u?c(t,e.column(),"}"):"["==u?c(t,e.column(),"]"):"("==u?c(t,e.column(),")"):"case"==u?n.type="case":("}"==u&&"}"==n.type||u==n.type)&&function h(e){if(e.context.prev){var t=e.context.type;(")"==t||"]"==t||"}"==t)&&(e.indented=e.context.indented),e.context=e.context.prev}}(t),t.startOfLine=!1),r},indent:function(e,t,n){if(e.tokenize!=l&&null!=e.tokenize)return null;var r=e.context,i=t&&t.charAt(0);if("case"==r.type&&/^(?:case|default)\b/.test(t))return e.context.type="}",r.indented;var o=i==r.type;return r.align?r.column+(o?0:1):r.indented+(o?0:n.unit)},languageData:{indentOnInput:/^\s([{}]|case |default\s*:)$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}}]);