"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5429],{5429:(H,j,N)=>{function $(i){var o=i.statementIndentUnit,c=i.dontAlignCalls,f=i.noIndentKeywords||[],s=i.multiLineStrings,a=i.hooks||{};function h(e){for(var n={},t=e.split(" "),l=0;l<t.length;++l)n[t[l]]=!0;return n}var d,v,g=h("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),x=/[\+\-\*\/!~&|^%=?:]/,m=/[\[\]{}()]/,k=/\d[0-9_]*/,C=/\d*\s*'s?d\s*\d[0-9_]*/i,B=/\d*\s*'s?b\s*[xz01][xz01_]*/i,D=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,P=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,O=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,F=/^((\w+)|[)}\]])/,G=/[)}\]]/,J=h("case checker class clocking config function generate interface module package primitive program property specify sequence table task"),u={};for(var y in J)u[y]="end"+y;for(var Q in u.begin="end",u.casex="endcase",u.casez="endcase",u.do="while",u.fork="join;join_any;join_none",u.covergroup="endgroup",f)u[y=f[Q]]&&(u[y]=void 0);var X=h("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");function I(e,n){var l,t=e.peek();if(a[t]&&0!=(l=a[t](e,n))||a.tokenBase&&0!=(l=a.tokenBase(e,n)))return l;if(/[,;:\.]/.test(t))return d=e.next(),null;if(m.test(t))return d=e.next(),"bracket";if("`"==t)return e.next(),e.eatWhile(/[\w\$_]/)?"def":null;if("$"==t)return e.next(),e.eatWhile(/[\w\$_]/)?"meta":null;if("#"==t)return e.next(),e.eatWhile(/[\d_.]/),"def";if('"'==t)return e.next(),n.tokenize=function Y(e){return function(n,t){for(var r,l=!1,w=!1;null!=(r=n.next());){if(r==e&&!l){w=!0;break}l=!l&&"\\"==r}return(w||!(l||s))&&(t.tokenize=I),"string"}}(t),n.tokenize(e,n);if("/"==t){if(e.next(),e.eat("*"))return n.tokenize=T,T(e,n);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}if(e.match(O)||e.match(C)||e.match(B)||e.match(D)||e.match(P)||e.match(k)||e.match(O))return"number";if(e.eatWhile(x))return"meta";if(e.eatWhile(/[\w\$_]/)){var r=e.current();return g[r]?(u[r]&&(d="newblock"),X[r]&&(d="newstatement"),v=r,"keyword"):"variable"}return e.next(),null}function T(e,n){for(var l,t=!1;l=e.next();){if("/"==l&&t){n.tokenize=I;break}t="*"==l}return"comment"}function W(e,n,t,l,r){this.indented=e,this.column=n,this.type=t,this.align=l,this.prev=r}function p(e,n,t){var r=new W(e.indented,n,t,null,e.context);return e.context=r}function L(e){var n=e.context.type;return(")"==n||"]"==n||"}"==n)&&(e.indented=e.context.indented),e.context=e.context.prev}function M(e,n){if(e==n)return!0;var t=n.split(";");for(var l in t)if(e==t[l])return!0;return!1}return{startState:function(e){var n={tokenize:null,context:new W(-e,0,"top",!1),indented:0,startOfLine:!0};return a.startState&&a.startState(n),n},token:function(e,n){var l,t=n.context;if(e.sol()&&(null==t.align&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0),a.token&&void 0!==(l=a.token(e,n)))return l;if(e.eatSpace())return null;if(d=null,v=null,"comment"==(l=(n.tokenize||I)(e,n))||"meta"==l||"variable"==l)return l;if(null==t.align&&(t.align=!0),d==t.type)L(n);else if(";"==d&&"statement"==t.type||t.type&&M(v,t.type))for(t=L(n);t&&"statement"==t.type;)t=L(n);else if("{"==d)p(n,e.column(),"}");else if("["==d)p(n,e.column(),"]");else if("("==d)p(n,e.column(),")");else if(t&&"endcase"==t.type&&":"==d)p(n,e.column(),"statement");else if("newstatement"==d)p(n,e.column(),"statement");else if(!("newblock"!=d||"function"==v&&t&&("statement"==t.type||"endgroup"==t.type)||"task"==v&&t&&"statement"==t.type)){var r=u[v];p(n,e.column(),r)}return n.startOfLine=!1,l},indent:function(e,n,t){if(e.tokenize!=I&&null!=e.tokenize)return null;if(a.indent){var l=a.indent(e);if(l>=0)return l}var r=e.context,w=n&&n.charAt(0);"statement"==r.type&&"}"==w&&(r=r.prev);var z=!1,U=n.match(F);return U&&(z=M(U[0],r.type)),"statement"==r.type?r.indented+("{"==w?0:o||t.unit):G.test(r.type)&&r.align&&!c?r.column+(z?0:1):")"!=r.type||z?r.indented+(z?0:t.unit):r.indented+(o||t.unit)},languageData:{indentOnInput:function Z(){var e=[];for(var n in u)if(u[n]){var t=u[n].split(";");for(var l in t)e.push(t[l])}return new RegExp("[{}()\\[\\]]|("+e.join("|")+")$")}(),commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}N.r(j),N.d(j,{tlv:()=>R,verilog:()=>K});const K=$({});var S={"|":"link",">":"property",$:"variable",$$:"variable","?$":"qualifier","?*":"qualifier","-":"contentSeparator","/":"property","/-":"property","@":"variableName.special","@-":"variableName.special","@++":"variableName.special","@+=":"variableName.special","@+=-":"variableName.special","@--":"variableName.special","@-=":"variableName.special","%+":"tag","%-":"tag","%":"tag",">>":"tag","<<":"tag","<>":"tag","#":"tag","^":"attribute","^^":"attribute","^!":"attribute","*":"variable","**":"variable","\\":"keyword",'"':"comment"},E={"/":"beh-hier",">":"beh-hier","-":"phys-hier","|":"pipe","?":"when","@":"stage","\\":"keyword"},q=/^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/,V=/^[! ] */,A=/^\/[\/\*]/;const R=$({hooks:{electricInput:!1,token:function(i,o){var f,c=void 0;if(i.sol()&&!o.tlvInBlockComment){"\\"==i.peek()&&(c="def",i.skipToEnd(),i.string.match(/\\SV/)?o.tlvCodeActive=!1:i.string.match(/\\TLV/)&&(o.tlvCodeActive=!0)),o.tlvCodeActive&&0==i.pos&&0==o.indented&&(f=i.match(V,!1))&&(o.indented=f[0].length);var s=o.indented,a=s/3;if(a<=o.tlvIndentationStyle.length){var h=i.string.length==s,g=3*a;if(g<i.string.length){var x=i.string.slice(g),m=x[0];E[m]&&(f=x.match(q))&&S[f[1]]&&(s+=3,"\\"==m&&g>0||(o.tlvIndentationStyle[a]=E[m],a++))}if(!h)for(;o.tlvIndentationStyle.length>a;)o.tlvIndentationStyle.pop()}o.tlvNextIndent=s}if(o.tlvCodeActive){if(void 0===c)if(o.tlvInBlockComment)i.match(/^.*?\*\//)?o.tlvInBlockComment=!1:i.skipToEnd(),c="comment";else if((f=i.match(A))&&!o.tlvInBlockComment)"//"==f[0]?i.skipToEnd():o.tlvInBlockComment=!0,c="comment";else if(f=i.match(q)){var C=f[1],B=f[2];S.hasOwnProperty(C)&&(B.length>0||i.eol())?c=S[C]:i.backUp(i.current().length-1)}else i.match(/^\t+/)?c="invalid":i.match(/^[\[\]{}\(\);\:]+/)?c="meta":(f=i.match(/^[mM]4([\+_])?[\w\d_]*/))?c="+"==f[1]?"keyword.special":"keyword":i.match(/^ +/)?i.eol()&&(c="error"):i.match(/^[\w\d_]+/)?c="number":i.next()}else i.match(/^[mM]4([\w\d_]*)/)&&(c="keyword");return c},indent:function(i){return 1==i.tlvCodeActive?i.tlvNextIndent:-1},startState:function(i){i.tlvIndentationStyle=[],i.tlvCodeActive=!0,i.tlvNextIndent=-1,i.tlvInBlockComment=!1}}})}}]);