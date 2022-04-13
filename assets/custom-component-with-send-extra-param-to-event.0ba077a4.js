import{f as o,o as s,c,P as i,G as p,p as k,j as _,q as m,k as l,u,s as v}from"./app.8fafd536.js";const f=o({emits:["overwriteClick"],setup(t,{emit:e}){const r=a=>{e("overwriteClick",a,"\u4F60\u597D","\u4E16\u754C")};return(a,n)=>(s(),c("button",{onClick:r},"\u70B9\u6211"))}});var E=i({name:"\u6309\u94AE",pkg:"test-pkg",makeEventOptions:()=>["overwriteClick"],make:()=>f}),C=p({name:"alert",pkg:"test-pkg",make:()=>(t,e,r)=>{alert(`
\u4F60\u597D\uFF0C\u6309\u94AE\u88AB\u70B9\u51FB\u4E86,\u4F4D\u7F6E\u5728${t.x},${t.y}
\u989D\u5916\u4FE1\u606F\uFF1A${e},${r}
            `)}});const w=o({setup(t){const e=k({makerList:[E,C,..._]}),a=m().query.preview;return(n,F)=>(s(),l(u(v),{state:u(e),preview:u(a)},null,8,["state","preview"]))}});export{w as default};
