import{f as M,i as U,j as ce,k as h,l as G,m as Ce,n as xe,r as I,h as e,o as a,p as B,w as N,q as y,d as z,t as S,s as le,c,v as w,x as Te,y as O,z as K,A as de,B as ie,b as m,F as E,C as A,a as x,D as W,E as Se,G as Be,T as he,H,I as pe,J as X,K as Y,L as ve,u as _e,g as P,M as fe,N as me,O as be,e as Me,P as ge,Q as Ne,R as V,S as J,U as De,V as F,W as Pe,X as Ee,_ as Re}from"./app.b15ef2a4.js";const Ie=["href","rel","target","aria-label"],Ae=M({inheritAttrs:!1});function Oe(l){const t=l,s=U(),r=Te(),{item:n}=ce(t),$=h(()=>G(n.value.link)),_=h(()=>Ce(n.value.link)||xe(n.value.link)),b=h(()=>{if(!_.value){if(n.value.target)return n.value.target;if($.value)return"_blank"}}),o=h(()=>b.value==="_blank"),i=h(()=>!$.value&&!_.value&&!o.value),u=h(()=>{if(!_.value){if(n.value.rel)return n.value.rel;if(o.value)return"noopener noreferrer"}}),v=h(()=>n.value.ariaLabel||n.value.text),d=h(()=>{const k=Object.keys(r.value.locales);return k.length?!k.some(p=>p===n.value.link):n.value.link!=="/"}),g=h(()=>d.value?s.path.startsWith(n.value.link):!1),f=h(()=>i.value?n.value.activeMatch?new RegExp(n.value.activeMatch).test(s.path):g.value:!1);return(k,p)=>{const L=I("RouterLink"),T=I("OutboundLink");return e(i)?(a(),B(L,le({key:0,class:["nav-link",{"router-link-active":e(f)}],to:e(n).link,"aria-label":e(v)},k.$attrs),{default:N(()=>[y(k.$slots,"before"),z(" "+S(e(n).text)+" ",1),y(k.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),c("a",le({key:1,class:"nav-link external",href:e(n).link,rel:e(u),target:e(b),"aria-label":e(v)},k.$attrs),[y(k.$slots,"before"),z(" "+S(e(n).text)+" ",1),e(o)?(a(),B(T,{key:0})):w("",!0),y(k.$slots,"after")],16,Ie))}}const R=M({...Ae,props:{item:{type:Object,required:!0}},setup:Oe}),He=["aria-labelledby"],ze={class:"hero"},Fe=["src","alt"],We={key:1,id:"main-title"},Ue={key:2,class:"description"},je={key:3,class:"actions"},Ve={key:0,class:"features"},Ge={class:"theme-default-content custom"},Ke=["innerHTML"],qe=["textContent"],Xe=M({setup(l){const t=O(),s=K(),r=h(()=>t.value.heroImage?de(t.value.heroImage):null),n=h(()=>t.value.heroText===null?null:t.value.heroText||s.value.title||"Hello"),$=h(()=>t.value.heroAlt||n.value||"hero"),_=h(()=>t.value.tagline===null?null:t.value.tagline||s.value.description||"Welcome to your VuePress site"),b=h(()=>ie(t.value.actions)?t.value.actions.map(({text:v,link:d,type:g="primary"})=>({text:v,link:d,type:g})):[]),o=h(()=>ie(t.value.features)?t.value.features:[]),i=h(()=>t.value.footer),u=h(()=>t.value.footerHtml);return(v,d)=>{const g=I("Content");return a(),c("main",{class:"home","aria-labelledby":e(n)?"main-title":void 0},[m("header",ze,[e(r)?(a(),c("img",{key:0,src:e(r),alt:e($)},null,8,Fe)):w("",!0),e(n)?(a(),c("h1",We,S(e(n)),1)):w("",!0),e(_)?(a(),c("p",Ue,S(e(_)),1)):w("",!0),e(b).length?(a(),c("p",je,[(a(!0),c(E,null,A(e(b),f=>(a(),B(R,{key:f.text,class:W(["action-button",[f.type]]),item:f},null,8,["class","item"]))),128))])):w("",!0)]),e(o).length?(a(),c("div",Ve,[(a(!0),c(E,null,A(e(o),f=>(a(),c("div",{key:f.title,class:"feature"},[m("h2",null,S(f.title),1),m("p",null,S(f.details),1)]))),128))])):w("",!0),m("div",Ge,[x(g)]),e(i)?(a(),c(E,{key:1},[e(u)?(a(),c("div",{key:0,class:"footer",innerHTML:e(i)},null,8,Ke)):(a(),c("div",{key:1,class:"footer",textContent:S(e(i))},null,8,qe))],64)):w("",!0)],8,He)}}}),ke=l=>!G(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,Ye={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Je=({docsRepo:l,docsBranch:t,docsDir:s,filePathRelative:r,editLinkPattern:n})=>{const $=ke(l);let _;return n?_=n:$!==null&&(_=Ye[$]),_?_.replace(/:repo/,G(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,Se(`${Be(s)}/${r}`)):null},Qe=M({setup(l){const t=r=>{r.style.height=r.scrollHeight+"px"},s=r=>{r.style.height=""};return(r,n)=>(a(),B(he,{name:"dropdown",onEnter:t,onAfterEnter:s,onBeforeLeave:t},{default:N(()=>[y(r.$slots,"default")]),_:3}))}}),Ze=["aria-label"],et={class:"title"},tt=m("span",{class:"arrow down"},null,-1),nt=["aria-label"],at={class:"title"},st={class:"nav-dropdown"},ot={class:"dropdown-subtitle"},rt={key:1},lt={class:"dropdown-subitem-wrapper"},it=M({props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:s}=ce(t),r=h(()=>s.value.ariaLabel||s.value.text),n=H(!1),$=U();pe(()=>$.path,()=>{n.value=!1});const _=o=>{o.detail===0?n.value=!n.value:n.value=!1},b=(o,i)=>i[i.length-1]===o;return(o,i)=>(a(),c("div",{class:W(["dropdown-wrapper",{open:n.value}])},[m("button",{class:"dropdown-title",type:"button","aria-label":e(r),onClick:_},[m("span",et,S(e(s).text),1),tt],8,Ze),m("button",{class:"mobile-dropdown-title",type:"button","aria-label":e(r),onClick:i[0]||(i[0]=u=>n.value=!n.value)},[m("span",at,S(e(s).text),1),m("span",{class:W(["arrow",n.value?"down":"right"])},null,2)],8,nt),x(Qe,null,{default:N(()=>[X(m("ul",st,[(a(!0),c(E,null,A(e(s).children,(u,v)=>(a(),c("li",{key:u.link||v,class:"dropdown-item"},[u.children?(a(),c(E,{key:0},[m("h4",ot,[u.link?(a(),B(R,{key:0,item:u,onFocusout:d=>b(u,e(s).children)&&u.children.length===0&&(n.value=!1)},null,8,["item","onFocusout"])):(a(),c("span",rt,S(u.text),1))]),m("ul",lt,[(a(!0),c(E,null,A(u.children,d=>(a(),c("li",{key:d.link,class:"dropdown-subitem"},[x(R,{item:d,onFocusout:g=>b(d,u.children)&&b(u,e(s).children)&&(n.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),B(R,{key:1,item:u,onFocusout:d=>b(u,e(s).children)&&(n.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[Y,n.value]])]),_:1})],2))}}),ut={key:0,class:"navbar-links"},$e=M({setup(l){const t=()=>{const i=ve(),u=_e(),v=K(),d=P();return h(()=>{var L,T;const g=Object.keys(v.value.locales);if(g.length<2)return[];const f=i.currentRoute.value.path,k=i.currentRoute.value.fullPath;return[{text:(L=d.value.selectLanguageText)!=null?L:"unkown language",ariaLabel:(T=d.value.selectLanguageAriaLabel)!=null?T:"unkown language",children:g.map(C=>{var ee,te,ne,ae,se,oe;const D=(te=(ee=v.value.locales)==null?void 0:ee[C])!=null?te:{},Q=(ae=(ne=d.value.locales)==null?void 0:ne[C])!=null?ae:{},Z=`${D.lang}`,ye=(se=Q.selectLanguageName)!=null?se:Z;let j;if(Z===v.value.lang)j=k;else{const re=f.replace(u.value,C);i.getRoutes().some(we=>we.path===re)?j=re:j=(oe=Q.home)!=null?oe:C}return{text:ye,link:j}})}]})},s=()=>{const i=P(),u=h(()=>i.value.repo),v=h(()=>u.value?ke(u.value):null),d=h(()=>u.value&&!G(u.value)?`https://github.com/${u.value}`:u.value),g=h(()=>d.value?i.value.repoLabel?i.value.repoLabel:v.value===null?"Source":v.value:null);return h(()=>!d.value||!g.value?[]:[{text:g.value,link:d.value}])},r=i=>fe(i)?me(i):i.children?{...i,children:i.children.map(r)}:i,$=(()=>{const i=P();return h(()=>(i.value.navbar||[]).map(r))})(),_=t(),b=s(),o=h(()=>[...$.value,..._.value,...b.value]);return(i,u)=>e(o).length?(a(),c("nav",ut,[(a(!0),c(E,null,A(e(o),v=>(a(),c("div",{key:v.text,class:"navbar-links-item"},[v.children?(a(),B(it,{key:0,item:v},null,8,["item"])):(a(),B(R,{key:1,item:v},null,8,["item"]))]))),128))])):w("",!0)}}),ct=["title"],dt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},ht=Me('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),pt=[ht],vt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},_t=m("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),ft=[_t],mt=M({setup(l){const t=P(),s=be(),r=()=>{s.value=!s.value};return(n,$)=>(a(),c("button",{class:"toggle-dark-button",title:e(t).toggleDarkMode,onClick:r},[X((a(),c("svg",dt,pt,512)),[[Y,!e(s)]]),X((a(),c("svg",vt,ft,512)),[[Y,e(s)]])],8,ct))}}),bt=["title"],gt=m("div",{class:"icon","aria-hidden":"true"},[m("span"),m("span"),m("span")],-1),kt=[gt],$t=M({emits:["toggle"],setup(l){const t=P();return(s,r)=>(a(),c("div",{class:"toggle-sidebar-button",title:e(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:r[0]||(r[0]=n=>s.$emit("toggle"))},kt,8,bt))}}),Lt=["src","alt"],yt=M({emits:["toggle-sidebar"],setup(l){const t=_e(),s=K(),r=P(),n=be(),$=H(null),_=H(null),b=h(()=>r.value.home||t.value),o=h(()=>n.value&&r.value.logoDark!==void 0?r.value.logoDark:r.value.logo),i=h(()=>s.value.title),u=H(0),v=h(()=>u.value?{maxWidth:u.value+"px"}:{}),d=h(()=>r.value.darkMode);ge(()=>{const k=g($.value,"paddingLeft")+g($.value,"paddingRight"),p=()=>{var L;window.innerWidth<=719?u.value=0:u.value=$.value.offsetWidth-k-(((L=_.value)==null?void 0:L.offsetWidth)||0)};p(),window.addEventListener("resize",p,!1),window.addEventListener("orientationchange",p,!1)});function g(f,k){var T,C,D;const p=(D=(C=(T=f==null?void 0:f.ownerDocument)==null?void 0:T.defaultView)==null?void 0:C.getComputedStyle(f,null))==null?void 0:D[k],L=Number.parseInt(p,10);return Number.isNaN(L)?0:L}return(f,k)=>{const p=I("ClientOnly"),L=I("RouterLink"),T=I("NavbarSearch");return a(),c("header",{ref:(C,D)=>{D.navbar=C,$.value=C},class:"navbar"},[x($t,{onToggle:k[0]||(k[0]=C=>f.$emit("toggle-sidebar"))}),m("span",{ref:(C,D)=>{D.siteBrand=C,_.value=C}},[x(L,{to:e(b)},{default:N(()=>[x(p,null,{default:N(()=>[e(o)?(a(),c("img",{key:0,class:"logo",src:e(de)(e(o)),alt:e(i)},null,8,Lt)):w("",!0)]),_:1}),e(i)?(a(),c("span",{key:0,class:W(["site-name",{"can-hide":e(o)}])},S(e(i)),3)):w("",!0)]),_:1},8,["to"])],512),m("div",{class:"navbar-links-wrapper",style:Ne(e(v))},[y(f.$slots,"before"),x($e,{class:"can-hide"}),y(f.$slots,"after"),e(d)?(a(),B(mt,{key:0})):w("",!0),x(T)],4)],512)}}}),wt={class:"page-meta"},Ct={key:0,class:"meta-item edit-link"},xt={key:1,class:"meta-item last-updated"},Tt={class:"meta-item-label"},St={class:"meta-item-info"},Bt={key:2,class:"meta-item contributors"},Mt={class:"meta-item-label"},Nt={class:"meta-item-info"},Dt=["title"],Pt=z(", "),Et=M({setup(l){const t=()=>{const o=P(),i=V(),u=O();return h(()=>{var T,C,D;if(!((C=(T=u.value.editLink)!=null?T:o.value.editLink)!=null?C:!0))return null;const{repo:d,docsRepo:g=d,docsBranch:f="main",docsDir:k="",editLinkText:p}=o.value;if(!g)return null;const L=Je({docsRepo:g,docsBranch:f,docsDir:k,filePathRelative:i.value.filePathRelative,editLinkPattern:(D=u.value.editLinkPattern)!=null?D:o.value.editLinkPattern});return L?{text:p!=null?p:"Edit this page",link:L}:null})},s=()=>{const o=K(),i=P(),u=V(),v=O();return h(()=>{var f,k,p,L;return!((k=(f=v.value.lastUpdated)!=null?f:i.value.lastUpdated)!=null?k:!0)||!((p=u.value.git)!=null&&p.updatedTime)?null:new Date((L=u.value.git)==null?void 0:L.updatedTime).toLocaleString(o.value.lang)})},r=()=>{const o=P(),i=V(),u=O();return h(()=>{var d,g,f,k;return((g=(d=u.value.contributors)!=null?d:o.value.contributors)!=null?g:!0)&&(k=(f=i.value.git)==null?void 0:f.contributors)!=null?k:null})},n=P(),$=t(),_=s(),b=r();return(o,i)=>(a(),c("footer",wt,[e($)?(a(),c("div",Ct,[x(R,{class:"meta-item-label",item:e($)},null,8,["item"])])):w("",!0),e(_)?(a(),c("div",xt,[m("span",Tt,S(e(n).lastUpdatedText)+": ",1),m("span",St,S(e(_)),1)])):w("",!0),e(b)&&e(b).length?(a(),c("div",Bt,[m("span",Mt,S(e(n).contributorsText)+": ",1),m("span",Nt,[(a(!0),c(E,null,A(e(b),(u,v)=>(a(),c(E,{key:v},[m("span",{class:"contributor",title:`email: ${u.email}`},S(u.name),9,Dt),v!==e(b).length-1?(a(),c(E,{key:0},[Pt],64)):w("",!0)],64))),128))])])):w("",!0)]))}}),Rt={key:0,class:"page-nav"},It={class:"inner"},At={key:0,class:"prev"},Ot=z(" \u2190 "),Ht={key:1,class:"next"},zt=z(" \u2192 "),Ft=M({setup(l){const t=o=>o===!1?null:fe(o)?me(o):De(o)?o:!1,s=(o,i,u)=>{const v=o.findIndex(d=>d.link===i);if(v!==-1){const d=o[v+u];return d!=null&&d.link?d:null}for(const d of o)if(d.children){const g=s(d.children,i,u);if(g)return g}return null},r=O(),n=J(),$=U(),_=h(()=>{const o=t(r.value.prev);return o!==!1?o:s(n.value,$.path,-1)}),b=h(()=>{const o=t(r.value.next);return o!==!1?o:s(n.value,$.path,1)});return(o,i)=>e(_)||e(b)?(a(),c("nav",Rt,[m("p",It,[e(_)?(a(),c("span",At,[Ot,x(R,{item:e(_)},null,8,["item"])])):w("",!0),e(b)?(a(),c("span",Ht,[x(R,{item:e(b)},null,8,["item"]),zt])):w("",!0)])])):w("",!0)}}),Wt={class:"page"},Ut={class:"theme-default-content"},jt=M({setup(l){return(t,s)=>{const r=I("Content");return a(),c("main",Wt,[y(t.$slots,"top"),m("div",Ut,[x(r)]),x(Et),x(Ft),y(t.$slots,"bottom")])}}}),ue=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Vt=(l,t)=>{if(t===void 0)return!1;if(l.hash===t)return!0;const s=ue(l.path),r=ue(t);return s===r},Le=(l,t)=>Vt(l,t.link)?!0:t.children?t.children.some(s=>Le(l,s)):!1,Gt=(l,t)=>l.link?F(R,{...t,item:l}):F("p",t,l.text),Kt=(l,t)=>{var s;return!((s=l.children)===null||s===void 0)&&s.length?F("ul",{class:{"sidebar-sub-items":t>0}},l.children.map(r=>F("li",F(q,{item:r,depth:t+1})))):null},q=({item:l,depth:t=0})=>{const s=U(),r=Le(s,l);return[Gt(l,{class:{"sidebar-heading":t===0,"sidebar-item":!0,active:r}}),Kt(l,t)]};q.displayName="SidebarChild";q.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const qt={class:"sidebar"},Xt={class:"sidebar-links"},Yt=M({setup(l){const t=J();return(s,r)=>(a(),c("aside",qt,[x($e),y(s.$slots,"top"),m("ul",Xt,[(a(!0),c(E,null,A(e(t),n=>(a(),B(e(q),{key:n.link||n.text,item:n},null,8,["item"]))),128))]),y(s.$slots,"bottom")]))}}),Jt=M({setup(l){const t=V(),s=O(),r=P(),n=h(()=>s.value.navbar!==!1&&r.value.navbar!==!1),$=J(),_=H(!1),b=p=>{_.value=typeof p=="boolean"?p:!_.value},o={x:0,y:0},i=p=>{o.x=p.changedTouches[0].clientX,o.y=p.changedTouches[0].clientY},u=p=>{const L=p.changedTouches[0].clientX-o.x,T=p.changedTouches[0].clientY-o.y;Math.abs(L)>Math.abs(T)&&Math.abs(L)>40&&(L>0&&o.x<=80?b(!0):b(!1))},v=h(()=>[{"no-navbar":!n.value,"no-sidebar":!$.value.length,"sidebar-open":_.value},s.value.pageClass]);let d;ge(()=>{d=ve().afterEach(()=>{b(!1)})}),Pe(()=>{d()});const g=Ee(),f=g.resolve,k=g.pending;return(p,L)=>(a(),c("div",{class:W(["theme-container",e(v)]),onTouchstart:i,onTouchend:u},[y(p.$slots,"navbar",{},()=>[e(n)?(a(),B(yt,{key:0,onToggleSidebar:b},{before:N(()=>[y(p.$slots,"navbar-before")]),after:N(()=>[y(p.$slots,"navbar-after")]),_:3})):w("",!0)]),m("div",{class:"sidebar-mask",onClick:L[0]||(L[0]=T=>b(!1))}),y(p.$slots,"sidebar",{},()=>[x(Yt,null,{top:N(()=>[y(p.$slots,"sidebar-top")]),bottom:N(()=>[y(p.$slots,"sidebar-bottom")]),_:3})]),y(p.$slots,"page",{},()=>[e(s).home?(a(),B(Xe,{key:0})):(a(),B(he,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(f),onBeforeLeave:e(k)},{default:N(()=>[x(jt,{key:e(t).path},{top:N(()=>[y(p.$slots,"page-top")]),bottom:N(()=>[y(p.$slots,"page-bottom")]),_:3})]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});const Qt={components:{Layout:Jt},setup(){const l=U();let t=H(`https://visitor-badge.glitch.me/badge?page_id=shengxinjing-cn.${l.path}`);return pe(()=>l.path,s=>{t.value=`https://visitor-badge.glitch.me/badge?page_id=shengxinjing-cn.${s}`}),{badge:t}}},Zt={class:"copyright"},en=["src"],tn=z(" | Copyright \xA9 \u4EACICP\u590718000331\u53F7-1 ");function nn(l,t,s,r,n,$){const _=I("Layout",!0);return a(),B(_,null,{"page-bottom":N(()=>[m("p",Zt,[r.badge?(a(),c("img",{key:0,src:r.badge,alt:""},null,8,en)):w("",!0),tn])]),_:1})}var sn=Re(Qt,[["render",nn]]);export{sn as default};
