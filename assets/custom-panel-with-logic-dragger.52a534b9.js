import{f as c,v as l,H as f,D as k,u as a,o as r,k as p,w as m,L as g,c as F,F as D,d as i,B as v,p as B,T as h,j as E,q as L,s as x}from"./app.8fafd536.js";import{F as y}from"./index.ac11026f.js";const S=i("fetch:\u62D6\u62FD\u903B\u8F91\u5230\u6B64\u5904\u6DFB\u52A0"),w=i("\u8BF7\u9009\u62E9\u7EC4\u4EF6"),C=c({setup(_){const s=l("cookEditorState"),u=f(s).get(),o=k(()=>{var t;return(t=u.value)==null?void 0:t.component}),n=t=>{const e=o.value;!e||(e.props=(e==null?void 0:e.props)||{},e.props.fetch=JSON.stringify(t))};return(t,e)=>a(o)?(r(),p(a(g),{key:0,onDrop:e[0]||(e[0]=d=>n(d))},{default:m(()=>[S]),_:1})):(r(),F(D,{key:1},[w],64))}});var M=v({name:"\u903B\u8F91\u62D6\u62FD\u6DFB\u52A0\u9762\u677F",pkg:"test-pkg",defaultSplitLayoutPaneName:"right",make:()=>C});const N=c({setup(_){const s=B({makerList:[h,y,M,...E]}),o=L().query.preview;return(n,t)=>(r(),p(a(x),{state:a(s),preview:a(o)},null,8,["state","preview"]))}});export{N as default};
