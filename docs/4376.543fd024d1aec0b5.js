"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4376],{4376:(p,e,l)=>{l.r(e),l.d(e,{yaml:()=>c});var u=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");const c={token:function(n,i){var r=n.peek(),f=i.escaped;if(i.escaped=!1,"#"==r&&(0==n.pos||/\s/.test(n.string.charAt(n.pos-1))))return n.skipToEnd(),"comment";if(n.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(i.literal&&n.indentation()>i.keyCol)return n.skipToEnd(),"string";if(i.literal&&(i.literal=!1),n.sol()){if(i.keyCol=0,i.pair=!1,i.pairStart=!1,n.match("---")||n.match("..."))return"def";if(n.match(/^\s*-\s+/))return"meta"}if(n.match(/^(\{|\}|\[|\])/))return"{"==r?i.inlinePairs++:"}"==r?i.inlinePairs--:"["==r?i.inlineList++:i.inlineList--,"meta";if(i.inlineList>0&&!f&&","==r)return n.next(),"meta";if(i.inlinePairs>0&&!f&&","==r)return i.keyCol=0,i.pair=!1,i.pairStart=!1,n.next(),"meta";if(i.pairStart){if(n.match(/^\s*(\||\>)\s*/))return i.literal=!0,"meta";if(n.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable";if(0==i.inlinePairs&&n.match(/^\s*-?[0-9\.\,]+\s?$/)||i.inlinePairs>0&&n.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(n.match(u))return"keyword"}return!i.pair&&n.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(i.pair=!0,i.keyCol=n.indentation(),"atom"):i.pair&&n.match(/^:\s*/)?(i.pairStart=!0,"meta"):(i.pairStart=!1,i.escaped="\\"==r,n.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},languageData:{commentTokens:{line:"#"}}}}}]);