import{f as o,o as r,c,P as i,p,j as _,q as k,k as l,u as a,s as m}from"./app.8fafd536.js";import{A as d}from"./index.c34a75ca.js";const f=o({emits:["delayClick"],setup(n,{emit:t}){const s=e=>{setTimeout(()=>{t("delayClick",e)},2e3)};return(e,u)=>(r(),c("button",{onClick:s},"\u70B9\u6211\uFF0C2\u79D2\u540E\u89E6\u53D1\u4E8B\u4EF6"))}});var C=i({name:"\u6309\u94AE",pkg:"test-pkg",makeEventOptions:()=>["delayClick"],make:()=>f});const B=o({setup(n){const t=p({makerList:[C,d,..._]}),e=k().query.preview;return(u,v)=>(r(),l(a(m),{state:a(t),preview:a(e)},null,8,["state","preview"]))}});export{B as default};
