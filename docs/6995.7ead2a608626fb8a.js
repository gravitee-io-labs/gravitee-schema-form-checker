"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6995],{6995:(m,n,e)=>{e.r(n),e.d(n,{dockerFile:()=>d});var l=e(4653),t="from",x=new RegExp("^(\\s*)\\b("+t+")\\b","i"),r=["run","cmd","entrypoint","shell"],g=new RegExp("^(\\s*)("+r.join("|")+")(\\s+\\[)","i"),o="expose",u=new RegExp("^(\\s*)("+o+")(\\s+)","i"),s="("+[t,o].concat(r).concat(["arg","from","maintainer","label","env","add","copy","volume","user","workdir","onbuild","stopsignal","healthcheck","shell"]).join("|")+")",i=new RegExp("^(\\s*)"+s+"(\\s*)(#.*)?$","i"),p=new RegExp("^(\\s*)"+s+"(\\s+)","i");const d=(0,l.Q)({start:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:x,token:[null,"keyword"],sol:!0,next:"from"},{regex:i,token:[null,"keyword",null,"error"],sol:!0},{regex:g,token:[null,"keyword",null],sol:!0,next:"array"},{regex:u,token:[null,"keyword",null],sol:!0,next:"expose"},{regex:p,token:[null,"keyword",null],sol:!0,next:"arguments"},{regex:/./,token:null}],from:[{regex:/\s*$/,token:null,next:"start"},{regex:/(\s*)(#.*)$/,token:[null,"error"],next:"start"},{regex:/(\s*\S+\s+)(as)/i,token:[null,"keyword"],next:"start"},{token:null,next:"start"}],single:[{regex:/(?:[^\\']|\\.)/,token:"string"},{regex:/'/,token:"string",pop:!0}],double:[{regex:/(?:[^\\"]|\\.)/,token:"string"},{regex:/"/,token:"string",pop:!0}],array:[{regex:/\]/,token:null,next:"start"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"}],expose:[{regex:/\d+$/,token:"number",next:"start"},{regex:/[^\d]+$/,token:null,next:"start"},{regex:/\d+/,token:"number"},{regex:/[^\d]+/,token:null},{token:null,next:"start"}],arguments:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:/"(?:[^\\"]|\\.)*"?$/,token:"string",next:"start"},{regex:/"/,token:"string",push:"double"},{regex:/'(?:[^\\']|\\.)*'?$/,token:"string",next:"start"},{regex:/'/,token:"string",push:"single"},{regex:/[^#"']+[\\`]$/,token:null},{regex:/[^#"']+$/,token:null,next:"start"},{regex:/[^#"']+/,token:null},{token:null,next:"start"}],languageData:{commentTokens:{line:"#"}}})}}]);