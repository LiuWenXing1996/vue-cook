import{f as l,a0 as L,a1 as x,r,o as u,c as g,b as o,J as _,a as m,w as d,d as B,u as h,k as C}from"./app.8fafd536.js";const N={class:"theme-container"},T={class:"theme-default-content"},b=o("h1",null,"404",-1),y=l({setup(i){var n,s,c;const a=L(),e=x(),t=(n=e.value.notFound)!=null?n:["Not Found"],p=()=>t[Math.floor(Math.random()*t.length)],f=(s=e.value.home)!=null?s:a.value,k=(c=e.value.backToHome)!=null?c:"Back to home";return(M,R)=>{const v=r("RouterLink");return u(),g("div",N,[o("div",T,[b,o("blockquote",null,_(p()),1),m(v,{to:h(f)},{default:d(()=>[B(_(h(k)),1)]),_:1},8,["to"])])])}}}),w=l({setup(i){return(a,e)=>{const t=r("ClientOnly");return u(),C(t,null,{default:d(()=>[m(y)]),_:1})}}});export{w as default};