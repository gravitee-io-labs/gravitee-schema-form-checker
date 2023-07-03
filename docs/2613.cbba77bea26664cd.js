"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2613],{2613:(J,x,z)=>{function k(o){return new RegExp("^(("+o.join(")|(")+"))\\b")}z.r(x),z.d(x,{cython:()=>m,mkPython:()=>s,python:()=>B});var L=k(["and","or","not","is"]),S=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],_=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function t(o){return o.scopes[o.scopes.length-1]}function s(o){for(var p="error",D=o.delimiters||o.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,h=[o.singleOperators,o.doubleOperators,o.doubleDelimiters,o.tripleDelimiters,o.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],g=0;g<h.length;g++)h[g]||h.splice(g--,1);var v=o.hangingIndent,d=S,a=_;null!=o.extra_keywords&&(d=d.concat(o.extra_keywords)),null!=o.extra_builtins&&(a=a.concat(o.extra_builtins));var T=!(o.version&&Number(o.version)<3);if(T){var y=o.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;d=d.concat(["nonlocal","False","True","None","async","await"]),a=a.concat(["ascii","bytes","exec","print"]);var F=new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))","i")}else y=o.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/,d=d.concat(["exec","print"]),a=a.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"]),F=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i");var N=k(d),U=k(a);function E(n,e){var r=n.sol()&&"\\"!=e.lastToken;if(r&&(e.indent=n.indentation()),r&&"py"==t(e).type){var i=t(e).offset;if(n.eatSpace()){var l=n.indentation();return l>i?A(n,e):l<i&&O(n,e)&&"#"!=n.peek()&&(e.errorToken=!0),null}var c=w(n,e);return i>0&&O(n,e)&&(c+=" "+p),c}return w(n,e)}function w(n,e,r){if(n.eatSpace())return null;if(!r&&n.match(/^#.*/))return"comment";if(n.match(/^[0-9\.]/,!1)){var i=!1;if(n.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(i=!0),n.match(/^[\d_]+\.\d*/)&&(i=!0),n.match(/^\.\d+/)&&(i=!0),i)return n.eat(/J/i),"number";var l=!1;if(n.match(/^0x[0-9a-f_]+/i)&&(l=!0),n.match(/^0b[01_]+/i)&&(l=!0),n.match(/^0o[0-7_]+/i)&&(l=!0),n.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(n.eat(/J/i),l=!0),n.match(/^0(?![\dx])/i)&&(l=!0),l)return n.eat(/L/i),"number"}if(n.match(F))return-1!==n.current().toLowerCase().indexOf("f")?(e.tokenize=function P(n,e){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var r=1==n.length,i="string";function l(u){return function(f,b){var I=w(f,b,!0);return"punctuation"==I&&("{"==f.current()?b.tokenize=l(u+1):"}"==f.current()&&(b.tokenize=u>1?l(u-1):c)),I}}function c(u,f){for(;!u.eol();)if(u.eatWhile(/[^'"\{\}\\]/),u.eat("\\")){if(u.next(),r&&u.eol())return i}else{if(u.match(n))return f.tokenize=e,i;if(u.match("{{"))return i;if(u.match("{",!1))return f.tokenize=l(0),u.current()?i:f.tokenize(u,f);if(u.match("}}"))return i;if(u.match("}"))return p;u.eat(/['"]/)}if(r){if(o.singleLineStringErrors)return p;f.tokenize=e}return i}return c.isString=!0,c}(n.current(),e.tokenize),e.tokenize(n,e)):(e.tokenize=function Z(n,e){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var r=1==n.length,i="string";function l(c,u){for(;!c.eol();)if(c.eatWhile(/[^'"\\]/),c.eat("\\")){if(c.next(),r&&c.eol())return i}else{if(c.match(n))return u.tokenize=e,i;c.eat(/['"]/)}if(r){if(o.singleLineStringErrors)return p;u.tokenize=e}return i}return l.isString=!0,l}(n.current(),e.tokenize),e.tokenize(n,e));for(var u=0;u<h.length;u++)if(n.match(h[u]))return"operator";return n.match(D)?"punctuation":"."==e.lastToken&&n.match(y)?"property":n.match(N)||n.match(L)?"keyword":n.match(U)?"builtin":n.match(/^(self|cls)\b/)?"self":n.match(y)?"def"==e.lastToken||"class"==e.lastToken?"def":"variable":(n.next(),r?null:p)}function A(n,e){for(;"py"!=t(e).type;)e.scopes.pop();e.scopes.push({offset:t(e).offset+n.indentUnit,type:"py",align:null})}function O(n,e){for(var r=n.indentation();e.scopes.length>1&&t(e).offset>r;){if("py"!=t(e).type)return!0;e.scopes.pop()}return t(e).offset!=r}return{startState:function(){return{tokenize:E,scopes:[{offset:0,type:"py",align:null}],indent:0,lastToken:null,lambda:!1,dedent:0}},token:function(n,e){var r=e.errorToken;r&&(e.errorToken=!1);var i=function j(n,e){n.sol()&&(e.beginningOfLine=!0,e.dedent=!1);var r=e.tokenize(n,e),i=n.current();if(e.beginningOfLine&&"@"==i)return n.match(y,!1)?"meta":T?"operator":p;if(/\S/.test(i)&&(e.beginningOfLine=!1),("variable"==r||"builtin"==r)&&"meta"==e.lastToken&&(r="meta"),("pass"==i||"return"==i)&&(e.dedent=!0),"lambda"==i&&(e.lambda=!0),":"==i&&!e.lambda&&"py"==t(e).type&&n.match(/^\s*(?:#|$)/,!1)&&A(n,e),1==i.length&&!/string|comment/.test(r)){var l="[({".indexOf(i);if(-1!=l&&function $(n,e,r){var i=n.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:n.column()+1;e.scopes.push({offset:e.indent+(v||n.indentUnit),type:r,align:i})}(n,e,"])}".slice(l,l+1)),-1!=(l="])}".indexOf(i))){if(t(e).type!=i)return p;e.indent=e.scopes.pop().offset-(v||n.indentUnit)}}return e.dedent&&n.eol()&&"py"==t(e).type&&e.scopes.length>1&&e.scopes.pop(),r}(n,e);return i&&"comment"!=i&&(e.lastToken="keyword"==i||"punctuation"==i?n.current():i),"punctuation"==i&&(i=null),n.eol()&&e.lambda&&(e.lambda=!1),r?p:i},indent:function(n,e,r){if(n.tokenize!=E)return n.tokenize.isString?null:0;var i=t(n),l=i.type==e.charAt(0)||"py"==i.type&&!n.dedent&&/^(else:|elif |except |finally:)/.test(e);return null!=i.align?i.align-(l?1:0):i.offset-(l?v||r.unit:0)},languageData:{autocomplete:S.concat(_),indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,commentTokens:{line:"#"},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}const B=s({}),m=s({extra_keywords:("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE","by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE".split(" "))})}}]);