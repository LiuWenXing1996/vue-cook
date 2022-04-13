var Se=Object.defineProperty,Me=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var ce=(o,t,a)=>t in o?Se(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,j=(o,t)=>{for(var a in t||(t={}))Ne.call(t,a)&&ce(o,a,t[a]);if(ue)for(var a of ue(t))De.call(t,a)&&ce(o,a,t[a]);return o},V=(o,t)=>Me(o,Be(t));import{f as M,q,t as de,D as h,a2 as G,a3 as Re,a4 as Ee,r as A,u as e,o as s,k as B,w as N,O as y,d as O,J as S,a5 as he,c,m as w,a6 as Pe,a7 as I,a8 as K,a9 as ve,aa as pe,b,F as R,E as H,ab as z,a as T,ac as Ae,ad as He,ae as fe,g as F,af as Ie,Q as J,ag as Q,ah as _e,a0 as me,a1 as E,ai as be,aj as ge,ak as ke,e as Oe,al as $e,am as ze,an as X,ao as Z,ap as Fe,C as W,aq as We,ar as Ue}from"./app.8fafd536.js";const je=["href","rel","target","aria-label"],Ve=M({inheritAttrs:!1});function qe(o){const t=o,a=q(),u=Pe(),{item:n}=de(t),$=h(()=>G(n.value.link)),_=h(()=>Re(n.value.link)||Ee(n.value.link)),m=h(()=>{if(!_.value){if(n.value.target)return n.value.target;if($.value)return"_blank"}}),r=h(()=>m.value==="_blank"),l=h(()=>!$.value&&!_.value&&!r.value),i=h(()=>{if(!_.value){if(n.value.rel)return n.value.rel;if(r.value)return"noopener noreferrer"}}),p=h(()=>n.value.ariaLabel||n.value.text),d=h(()=>{const k=Object.keys(u.value.locales);return k.length?!k.some(v=>v===n.value.link):n.value.link!=="/"}),g=h(()=>d.value?a.path.startsWith(n.value.link):!1),f=h(()=>l.value?n.value.activeMatch?new RegExp(n.value.activeMatch).test(a.path):g.value:!1);return(k,v)=>{const L=A("RouterLink"),x=A("OutboundLink");return e(l)?(s(),B(L,he({key:0,class:["nav-link",{"router-link-active":e(f)}],to:e(n).link,"aria-label":e(p)},k.$attrs),{default:N(()=>[y(k.$slots,"before"),O(" "+S(e(n).text)+" ",1),y(k.$slots,"after")]),_:3},16,["class","to","aria-label"])):(s(),c("a",he({key:1,class:"nav-link external",href:e(n).link,rel:e(i),target:e(m),"aria-label":e(p)},k.$attrs),[y(k.$slots,"before"),O(" "+S(e(n).text)+" ",1),e(r)?(s(),B(x,{key:0})):w("",!0),y(k.$slots,"after")],16,je))}}const P=M(V(j({},Ve),{props:{item:{type:Object,required:!0}},setup:qe})),Ge=["aria-labelledby"],Ke={class:"hero"},Xe=["src","alt"],Ye={key:1,id:"main-title"},Je={key:2,class:"description"},Qe={key:3,class:"actions"},Ze={key:0,class:"features"},et={class:"theme-default-content custom"},tt=["innerHTML"],at=["textContent"],nt=M({setup(o){const t=I(),a=K(),u=h(()=>t.value.heroImage?ve(t.value.heroImage):null),n=h(()=>t.value.heroText===null?null:t.value.heroText||a.value.title||"Hello"),$=h(()=>t.value.heroAlt||n.value||"hero"),_=h(()=>t.value.tagline===null?null:t.value.tagline||a.value.description||"Welcome to your VuePress site"),m=h(()=>pe(t.value.actions)?t.value.actions.map(({text:p,link:d,type:g="primary"})=>({text:p,link:d,type:g})):[]),r=h(()=>pe(t.value.features)?t.value.features:[]),l=h(()=>t.value.footer),i=h(()=>t.value.footerHtml);return(p,d)=>{const g=A("Content");return s(),c("main",{class:"home","aria-labelledby":e(n)?"main-title":void 0},[b("header",Ke,[e(u)?(s(),c("img",{key:0,src:e(u),alt:e($)},null,8,Xe)):w("",!0),e(n)?(s(),c("h1",Ye,S(e(n)),1)):w("",!0),e(_)?(s(),c("p",Je,S(e(_)),1)):w("",!0),e(m).length?(s(),c("p",Qe,[(s(!0),c(R,null,H(e(m),f=>(s(),B(P,{key:f.text,class:z(["action-button",[f.type]]),item:f},null,8,["class","item"]))),128))])):w("",!0)]),e(r).length?(s(),c("div",Ze,[(s(!0),c(R,null,H(e(r),f=>(s(),c("div",{key:f.title,class:"feature"},[b("h2",null,S(f.title),1),b("p",null,S(f.details),1)]))),128))])):w("",!0),b("div",et,[T(g)]),e(l)?(s(),c(R,{key:1},[e(i)?(s(),c("div",{key:0,class:"footer",innerHTML:e(l)},null,8,tt)):(s(),c("div",{key:1,class:"footer",textContent:S(e(l))},null,8,at))],64)):w("",!0)],8,Ge)}}}),Le=o=>!G(o)||/github\.com/.test(o)?"GitHub":/bitbucket\.org/.test(o)?"Bitbucket":/gitlab\.com/.test(o)?"GitLab":/gitee\.com/.test(o)?"Gitee":null,st={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ot=({docsRepo:o,docsBranch:t,docsDir:a,filePathRelative:u,editLinkPattern:n})=>{const $=Le(o);let _;return n?_=n:$!==null&&(_=st[$]),_?_.replace(/:repo/,G(o)?o:`https://github.com/${o}`).replace(/:branch/,t).replace(/:path/,Ae(`${He(a)}/${u}`)):null},rt=M({setup(o){const t=u=>{u.style.height=u.scrollHeight+"px"},a=u=>{u.style.height=""};return(u,n)=>(s(),B(fe,{name:"dropdown",onEnter:t,onAfterEnter:a,onBeforeLeave:t},{default:N(()=>[y(u.$slots,"default")]),_:3}))}}),lt=["aria-label"],it={class:"title"},ut=b("span",{class:"arrow down"},null,-1),ct=["aria-label"],dt={class:"title"},ht={class:"nav-dropdown"},vt={class:"dropdown-subtitle"},pt={key:1},ft={class:"dropdown-subitem-wrapper"},_t=M({props:{item:{type:Object,required:!0}},setup(o){const t=o,{item:a}=de(t),u=h(()=>a.value.ariaLabel||a.value.text),n=F(!1),$=q();Ie(()=>$.path,()=>{n.value=!1});const _=r=>{r.detail===0?n.value=!n.value:n.value=!1},m=(r,l)=>l[l.length-1]===r;return(r,l)=>(s(),c("div",{class:z(["dropdown-wrapper",{open:n.value}])},[b("button",{class:"dropdown-title",type:"button","aria-label":e(u),onClick:_},[b("span",it,S(e(a).text),1),ut],8,lt),b("button",{class:"mobile-dropdown-title",type:"button","aria-label":e(u),onClick:l[0]||(l[0]=i=>n.value=!n.value)},[b("span",dt,S(e(a).text),1),b("span",{class:z(["arrow",n.value?"down":"right"])},null,2)],8,ct),T(rt,null,{default:N(()=>[J(b("ul",ht,[(s(!0),c(R,null,H(e(a).children,(i,p)=>(s(),c("li",{key:i.link||p,class:"dropdown-item"},[i.children?(s(),c(R,{key:0},[b("h4",vt,[i.link?(s(),B(P,{key:0,item:i,onFocusout:d=>m(i,e(a).children)&&i.children.length===0&&(n.value=!1)},null,8,["item","onFocusout"])):(s(),c("span",pt,S(i.text),1))]),b("ul",ft,[(s(!0),c(R,null,H(i.children,d=>(s(),c("li",{key:d.link,class:"dropdown-subitem"},[T(P,{item:d,onFocusout:g=>m(d,i.children)&&m(i,e(a).children)&&(n.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(s(),B(P,{key:1,item:i,onFocusout:d=>m(i,e(a).children)&&(n.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[Q,n.value]])]),_:1})],2))}}),mt={key:0,class:"navbar-links"},ye=M({setup(o){const t=()=>{const l=_e(),i=me(),p=K(),d=E();return h(()=>{var L,x;const g=Object.keys(p.value.locales);if(g.length<2)return[];const f=l.currentRoute.value.path,k=l.currentRoute.value.fullPath;return[{text:(L=d.value.selectLanguageText)!=null?L:"unkown language",ariaLabel:(x=d.value.selectLanguageAriaLabel)!=null?x:"unkown language",children:g.map(C=>{var ae,ne,se,oe,re,le;const D=(ne=(ae=p.value.locales)==null?void 0:ae[C])!=null?ne:{},ee=(oe=(se=d.value.locales)==null?void 0:se[C])!=null?oe:{},te=`${D.lang}`,Te=(re=ee.selectLanguageName)!=null?re:te;let U;if(te===p.value.lang)U=k;else{const ie=f.replace(i.value,C);l.getRoutes().some(xe=>xe.path===ie)?U=ie:U=(le=ee.home)!=null?le:C}return{text:Te,link:U}})}]})},a=()=>{const l=E(),i=h(()=>l.value.repo),p=h(()=>i.value?Le(i.value):null),d=h(()=>i.value&&!G(i.value)?`https://github.com/${i.value}`:i.value),g=h(()=>d.value?l.value.repoLabel?l.value.repoLabel:p.value===null?"Source":p.value:null);return h(()=>!d.value||!g.value?[]:[{text:g.value,link:d.value}])},u=l=>be(l)?ge(l):l.children?V(j({},l),{children:l.children.map(u)}):l,$=(()=>{const l=E();return h(()=>(l.value.navbar||[]).map(u))})(),_=t(),m=a(),r=h(()=>[...$.value,..._.value,...m.value]);return(l,i)=>e(r).length?(s(),c("nav",mt,[(s(!0),c(R,null,H(e(r),p=>(s(),c("div",{key:p.text,class:"navbar-links-item"},[p.children?(s(),B(_t,{key:0,item:p},null,8,["item"])):(s(),B(P,{key:1,item:p},null,8,["item"]))]))),128))])):w("",!0)}}),bt=["title"],gt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},kt=Oe('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),$t=[kt],Lt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},yt=b("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),wt=[yt],Ct=M({setup(o){const t=E(),a=ke(),u=()=>{a.value=!a.value};return(n,$)=>(s(),c("button",{class:"toggle-dark-button",title:e(t).toggleDarkMode,onClick:u},[J((s(),c("svg",gt,$t,512)),[[Q,!e(a)]]),J((s(),c("svg",Lt,wt,512)),[[Q,e(a)]])],8,bt))}}),Tt=["title"],xt=b("div",{class:"icon","aria-hidden":"true"},[b("span"),b("span"),b("span")],-1),St=[xt],Mt=M({emits:["toggle"],setup(o){const t=E();return(a,u)=>(s(),c("div",{class:"toggle-sidebar-button",title:e(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=n=>a.$emit("toggle"))},St,8,Tt))}}),Bt=["src","alt"],Nt=M({emits:["toggle-sidebar"],setup(o){const t=me(),a=K(),u=E(),n=ke(),$=F(null),_=F(null),m=h(()=>u.value.home||t.value),r=h(()=>n.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),l=h(()=>a.value.title),i=F(0),p=h(()=>i.value?{maxWidth:i.value+"px"}:{}),d=h(()=>u.value.darkMode);$e(()=>{const f=719,k=g($.value,"paddingLeft")+g($.value,"paddingRight"),v=()=>{var L;window.innerWidth<=f?i.value=0:i.value=$.value.offsetWidth-k-(((L=_.value)==null?void 0:L.offsetWidth)||0)};v(),window.addEventListener("resize",v,!1),window.addEventListener("orientationchange",v,!1)});function g(f,k){var x,C,D;const v=(D=(C=(x=f==null?void 0:f.ownerDocument)==null?void 0:x.defaultView)==null?void 0:C.getComputedStyle(f,null))==null?void 0:D[k],L=Number.parseInt(v,10);return Number.isNaN(L)?0:L}return(f,k)=>{const v=A("ClientOnly"),L=A("RouterLink"),x=A("NavbarSearch");return s(),c("header",{ref:(C,D)=>{D.navbar=C,$.value=C},class:"navbar"},[T(Mt,{onToggle:k[0]||(k[0]=C=>f.$emit("toggle-sidebar"))}),b("span",{ref:(C,D)=>{D.siteBrand=C,_.value=C}},[T(L,{to:e(m)},{default:N(()=>[T(v,null,{default:N(()=>[e(r)?(s(),c("img",{key:0,class:"logo",src:e(ve)(e(r)),alt:e(l)},null,8,Bt)):w("",!0)]),_:1}),e(l)?(s(),c("span",{key:0,class:z(["site-name",{"can-hide":e(r)}])},S(e(l)),3)):w("",!0)]),_:1},8,["to"])],512),b("div",{class:"navbar-links-wrapper",style:ze(e(p))},[y(f.$slots,"before"),T(ye,{class:"can-hide"}),y(f.$slots,"after"),e(d)?(s(),B(Ct,{key:0})):w("",!0),T(x)],4)],512)}}}),Dt={class:"page-meta"},Rt={key:0,class:"meta-item edit-link"},Et={key:1,class:"meta-item last-updated"},Pt={class:"meta-item-label"},At={class:"meta-item-info"},Ht={key:2,class:"meta-item contributors"},It={class:"meta-item-label"},Ot={class:"meta-item-info"},zt=["title"],Ft=O(", "),Wt=M({setup(o){const t=()=>{const r=E(),l=X(),i=I();return h(()=>{var x,C,D;if(!((C=(x=i.value.editLink)!=null?x:r.value.editLink)!=null?C:!0))return null;const{repo:d,docsRepo:g=d,docsBranch:f="main",docsDir:k="",editLinkText:v}=r.value;if(!g)return null;const L=ot({docsRepo:g,docsBranch:f,docsDir:k,filePathRelative:l.value.filePathRelative,editLinkPattern:(D=i.value.editLinkPattern)!=null?D:r.value.editLinkPattern});return L?{text:v!=null?v:"Edit this page",link:L}:null})},a=()=>{const r=K(),l=E(),i=X(),p=I();return h(()=>{var f,k,v,L;return!((k=(f=p.value.lastUpdated)!=null?f:l.value.lastUpdated)!=null?k:!0)||!((v=i.value.git)==null?void 0:v.updatedTime)?null:new Date((L=i.value.git)==null?void 0:L.updatedTime).toLocaleString(r.value.lang)})},u=()=>{const r=E(),l=X(),i=I();return h(()=>{var d,g,f,k;return((g=(d=i.value.contributors)!=null?d:r.value.contributors)!=null?g:!0)&&(k=(f=l.value.git)==null?void 0:f.contributors)!=null?k:null})},n=E(),$=t(),_=a(),m=u();return(r,l)=>(s(),c("footer",Dt,[e($)?(s(),c("div",Rt,[T(P,{class:"meta-item-label",item:e($)},null,8,["item"])])):w("",!0),e(_)?(s(),c("div",Et,[b("span",Pt,S(e(n).lastUpdatedText)+": ",1),b("span",At,S(e(_)),1)])):w("",!0),e(m)&&e(m).length?(s(),c("div",Ht,[b("span",It,S(e(n).contributorsText)+": ",1),b("span",Ot,[(s(!0),c(R,null,H(e(m),(i,p)=>(s(),c(R,{key:p},[b("span",{class:"contributor",title:`email: ${i.email}`},S(i.name),9,zt),p!==e(m).length-1?(s(),c(R,{key:0},[Ft],64)):w("",!0)],64))),128))])])):w("",!0)]))}}),Ut={key:0,class:"page-nav"},jt={class:"inner"},Vt={key:0,class:"prev"},qt=O(" \u2190 "),Gt={key:1,class:"next"},Kt=O(" \u2192 "),Xt=M({setup(o){const t=r=>r===!1?null:be(r)?ge(r):Fe(r)?r:!1,a=(r,l,i)=>{const p=r.findIndex(d=>d.link===l);if(p!==-1){const d=r[p+i];return(d==null?void 0:d.link)?d:null}for(const d of r)if(d.children){const g=a(d.children,l,i);if(g)return g}return null},u=I(),n=Z(),$=q(),_=h(()=>{const r=t(u.value.prev);return r!==!1?r:a(n.value,$.path,-1)}),m=h(()=>{const r=t(u.value.next);return r!==!1?r:a(n.value,$.path,1)});return(r,l)=>e(_)||e(m)?(s(),c("nav",Ut,[b("p",jt,[e(_)?(s(),c("span",Vt,[qt,T(P,{item:e(_)},null,8,["item"])])):w("",!0),e(m)?(s(),c("span",Gt,[T(P,{item:e(m)},null,8,["item"]),Kt])):w("",!0)])])):w("",!0)}}),Yt={class:"page"},Jt={class:"theme-default-content"},Qt=M({setup(o){return(t,a)=>{const u=A("Content");return s(),c("main",Yt,[y(t.$slots,"top"),b("div",Jt,[T(u)]),T(Wt),T(Xt),y(t.$slots,"bottom")])}}}),we=o=>decodeURI(o).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Zt=(o,t)=>{if(t===void 0)return!1;if(o.hash===t)return!0;const a=we(o.path),u=we(t);return a===u},Ce=(o,t)=>Zt(o,t.link)?!0:t.children?t.children.some(a=>Ce(o,a)):!1,ea=(o,t)=>o.link?W(P,V(j({},t),{item:o})):W("p",t,o.text),ta=(o,t)=>{var a;return((a=o.children)===null||a===void 0?void 0:a.length)?W("ul",{class:{"sidebar-sub-items":t>0}},o.children.map(u=>W("li",W(Y,{item:u,depth:t+1})))):null},Y=({item:o,depth:t=0})=>{const a=q(),u=Ce(a,o);return[ea(o,{class:{"sidebar-heading":t===0,"sidebar-item":!0,active:u}}),ta(o,t)]};Y.displayName="SidebarChild";Y.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const aa={class:"sidebar"},na={class:"sidebar-links"},sa=M({setup(o){const t=Z();return(a,u)=>(s(),c("aside",aa,[T(ye),y(a.$slots,"top"),b("ul",na,[(s(!0),c(R,null,H(e(t),n=>(s(),B(e(Y),{key:n.link||n.text,item:n},null,8,["item"]))),128))]),y(a.$slots,"bottom")]))}}),la=M({setup(o){const t=X(),a=I(),u=E(),n=h(()=>a.value.navbar!==!1&&u.value.navbar!==!1),$=Z(),_=F(!1),m=v=>{_.value=typeof v=="boolean"?v:!_.value},r={x:0,y:0},l=v=>{r.x=v.changedTouches[0].clientX,r.y=v.changedTouches[0].clientY},i=v=>{const L=v.changedTouches[0].clientX-r.x,x=v.changedTouches[0].clientY-r.y;Math.abs(L)>Math.abs(x)&&Math.abs(L)>40&&(L>0&&r.x<=80?m(!0):m(!1))},p=h(()=>[{"no-navbar":!n.value,"no-sidebar":!$.value.length,"sidebar-open":_.value},a.value.pageClass]);let d;$e(()=>{d=_e().afterEach(()=>{m(!1)})}),We(()=>{d()});const g=Ue(),f=g.resolve,k=g.pending;return(v,L)=>(s(),c("div",{class:z(["theme-container",e(p)]),onTouchstart:l,onTouchend:i},[y(v.$slots,"navbar",{},()=>[e(n)?(s(),B(Nt,{key:0,onToggleSidebar:m},{before:N(()=>[y(v.$slots,"navbar-before")]),after:N(()=>[y(v.$slots,"navbar-after")]),_:3})):w("",!0)]),b("div",{class:"sidebar-mask",onClick:L[0]||(L[0]=x=>m(!1))}),y(v.$slots,"sidebar",{},()=>[T(sa,null,{top:N(()=>[y(v.$slots,"sidebar-top")]),bottom:N(()=>[y(v.$slots,"sidebar-bottom")]),_:3})]),y(v.$slots,"page",{},()=>[e(a).home?(s(),B(nt,{key:0})):(s(),B(fe,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(f),onBeforeLeave:e(k)},{default:N(()=>[T(Qt,{key:e(t).path},{top:N(()=>[y(v.$slots,"page-top")]),bottom:N(()=>[y(v.$slots,"page-bottom")]),_:3})]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});export{la as default};
