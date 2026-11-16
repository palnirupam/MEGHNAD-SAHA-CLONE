import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{A as t,C as n,E as r,F as i,I as a,i as o,k as s,m as c,n as l,p as u,r as d,t as f,w as p}from"./react-vendor-CMR_y1jB.js";import{n as m,r as h,t as g}from"./vendor-BvoUBe9j.js";import{a as ee,c as _,n as v,o as te,r as y,s as b,t as x}from"./headerSlice-BsCWhg37.js";var S=e(a(),1),C=u(),w=`
.w3-loader-overlay{
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  font-family: var(--font-sans, inherit);
  background:
    radial-gradient(circle at top, rgba(148,163,255,0.18), transparent 55%),
    linear-gradient(135deg,
      color-mix(in oklab, var(--bg-body, #0b1220) 80%, #020617 20%),
      color-mix(in oklab, var(--bg-body, #0b1220) 90%, #020617 10%)
    );
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.w3-loader-backdrop{
  position:absolute;
  inset:0;
  pointer-events:none;
  background:
    radial-gradient(circle at bottom,
      rgba(15,23,42,0.7),
      transparent 55%);
  opacity:.9;
}

.w3-loader-inner{
  position: relative;
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 24px 22px 18px;
  border-radius: 20px;
  border: 1px solid var(--line-strong, rgba(148,163,184,0.5));
  background:
    radial-gradient(circle at top left,
      color-mix(in oklab, var(--t-primary, rgba(59,130,246,0.16)) 70%, transparent),
      transparent 60%),
    var(--surface, #ffffff);
  box-shadow: var(--shadow-3, 0 22px 45px rgba(15,23,42,0.55));
  color: var(--ink, #0f172a);
  text-align: center;
  overflow: hidden;
}

.w3-loader-logo-wrap{
  position: relative;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom: 14px;
}

.w3-loader-logo-ring{
  width: 76px;
  height: 76px;
  border-radius: 999px;
  padding: 3px;
  background:
    conic-gradient(
      from 180deg,
      color-mix(in oklab, var(--primary-color,#6366f1) 80%, #020617 20%),
      color-mix(in oklab, var(--accent-color,#ec4899) 80%, #020617 20%),
      color-mix(in oklab, var(--primary-color,#6366f1) 80%, #020617 20%)
    );
  display:flex;
  align-items:center;
  justify-content:center;
  animation: w3-loader-pulse 1.6s ease-in-out infinite;
}

.w3-loader-logo{
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: var(--surface,#ffffff);
  padding: 8px;
  object-fit: contain;
}

.w3-loader-orbit{
  position:absolute;
  width:110px;
  height:110px;
  border-radius:999px;
  border:1px dashed color-mix(in oklab, var(--accent-color,#ec4899) 35%, transparent);
  display:flex;
  align-items:center;
  justify-content:center;
  animation: w3-loader-spin 7s linear infinite;
}

.w3-loader-orbit-dot{
  position:absolute;
  width:9px;
  height:9px;
  border-radius:999px;
  background: color-mix(in oklab, var(--accent-color,#ec4899) 75%, #020617 25%);
  box-shadow:0 0 0 4px color-mix(in oklab, var(--accent-color,#ec4899) 18%, transparent);
}
.w3-loader-orbit-dot:nth-child(1){ top:-4px; left:50%; transform:translateX(-50%); }
.w3-loader-orbit-dot:nth-child(2){ bottom:-4px; right:10px; }
.w3-loader-orbit-dot:nth-child(3){ top:18px; left:-2px; }

.w3-loader-text h2{
  font-family: var(--font-head, inherit);
  font-size: 1.25rem;
  margin: 2px 0 4px;
}
.w3-loader-text p{
  margin:0;
  font-size: var(--fs-13, 0.85rem);
  color: var(--muted-color,#6b7280);
}

.w3-loader-bar{
  margin-top: 14px;
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--page-hover,#e5e7eb) 70%, transparent);
  overflow:hidden;
  position:relative;
}
.w3-loader-bar-fill{
  position:absolute;
  inset:0;
  transform-origin:left;
  background: linear-gradient(90deg,
    var(--primary-color,#6366f1),
    var(--accent-color,#ec4899));
  animation: w3-loader-bar 1.7s ease-in-out infinite;
}

.w3-loader-hint{
  margin-top: 10px;
  font-size: var(--fs-12, 0.8rem);
  color: var(--muted-color,#6b7280);
}

@keyframes w3-loader-spin{
  to { transform: rotate(360deg); }
}
@keyframes w3-loader-pulse{
  0%,100%{ transform:scale(1); box-shadow:0 0 0 0 rgba(0,0,0,0.12); }
  50%{ transform:scale(1.04); box-shadow:0 0 0 10px rgba(0,0,0,0.07); }
}
@keyframes w3-loader-bar{
  0%{ transform:scaleX(0.18); opacity:.5; }
  40%{ transform:scaleX(0.9); opacity:1; }
  100%{ transform:scaleX(0.2) translateX(40%); opacity:.6; }
}

html.theme-dark .w3-loader-overlay{
  background:
    radial-gradient(circle at top, rgba(56,189,248,0.16), transparent 55%),
    linear-gradient(135deg,#020617,#020617);
}
html.theme-dark .w3-loader-inner{
  background:
    radial-gradient(circle at top left,
      color-mix(in oklab, var(--t-primary,rgba(59,130,246,0.25)) 85%, transparent),
      transparent 60%),
    #020617;
  color:#e5e7eb;
  border-color: rgba(148,163,184,0.6);
}
html.theme-dark .w3-loader-text p,
html.theme-dark .w3-loader-hint{
  color:#9ca3af;
}
html.theme-dark .w3-loader-bar{
  background:#020617;
}
`,T=()=>{if(typeof document>`u`)return`Application`;let e=document.querySelector(`meta[property="og:title"]`)?.getAttribute(`content`)?.split(`|`)[0]?.trim(),t=document.title?.split(`|`)[0]?.trim();return e||t||`Application`},E=(0,S.memo)(function({show:e=!0,appName:t,title:n,subtitle:r=`Loading your workspace…`,hint:i=`Theme will match your last choice automatically.`,logoSrc:a=`/msit_logo.jpg`}){let o=(0,S.useMemo)(()=>t||n||T(),[t,n]);return e?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`style`,{children:w}),(0,C.jsxs)(`div`,{id:`pageOverlay`,className:`w3-loader-overlay`,role:`status`,"aria-live":`polite`,children:[(0,C.jsx)(`div`,{className:`w3-loader-backdrop`}),(0,C.jsxs)(`div`,{className:`w3-loader-inner`,children:[(0,C.jsxs)(`div`,{className:`w3-loader-logo-wrap`,children:[(0,C.jsxs)(`div`,{className:`w3-loader-orbit`,"aria-hidden":`true`,children:[(0,C.jsx)(`span`,{className:`w3-loader-orbit-dot`}),(0,C.jsx)(`span`,{className:`w3-loader-orbit-dot`}),(0,C.jsx)(`span`,{className:`w3-loader-orbit-dot`})]}),(0,C.jsx)(`div`,{className:`w3-loader-logo-ring`,children:(0,C.jsx)(`img`,{src:a,alt:o,className:`w3-loader-logo`})})]}),(0,C.jsxs)(`div`,{className:`w3-loader-text`,children:[(0,C.jsx)(`h2`,{children:o}),(0,C.jsx)(`p`,{children:r})]}),(0,C.jsx)(`div`,{className:`w3-loader-bar`,"aria-hidden":`true`,children:(0,C.jsx)(`div`,{className:`w3-loader-bar-fill`})}),(0,C.jsxs)(`div`,{className:`w3-loader-hint`,children:[(0,C.jsx)(`i`,{className:`fa-regular fa-circle-check me-1`}),` `,i]})]})]})]}):null});function D(...e){return m(h(e))}function ne({...e}){return(0,C.jsx)(d,{"data-slot":`dropdown-menu`,...e})}function re({...e}){return(0,C.jsx)(o,{"data-slot":`dropdown-menu-trigger`,...e})}function ie({className:e,align:t=`start`,sideOffset:n=4,...r}){return(0,C.jsx)(l,{children:(0,C.jsx)(f,{"data-slot":`dropdown-menu-content`,sideOffset:n,align:t,className:D(`z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,e),...r})})}function ae({...e}){return(0,C.jsx)(g.Root,{"data-slot":`drawer`,...e})}function oe({...e}){return(0,C.jsx)(g.Trigger,{"data-slot":`drawer-trigger`,...e})}function se({...e}){return(0,C.jsx)(g.Portal,{"data-slot":`drawer-portal`,...e})}function O({...e}){return(0,C.jsx)(g.Close,{"data-slot":`drawer-close`,...e})}function k({className:e,...t}){return(0,C.jsx)(g.Overlay,{"data-slot":`drawer-overlay`,className:D(`fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0`,e),...t})}function A({className:e,children:t,...n}){return(0,C.jsxs)(se,{"data-slot":`drawer-portal`,children:[(0,C.jsx)(k,{}),(0,C.jsxs)(g.Content,{"data-slot":`drawer-content`,className:D(`group/drawer-content fixed z-50 flex h-auto flex-col bg-popover text-sm text-popover-foreground data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm`,e),...n,children:[(0,C.jsx)(`div`,{className:`mx-auto mt-4 hidden h-1 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block`}),t]})]})}function ce({className:e,...t}){return(0,C.jsx)(`div`,{"data-slot":`drawer-header`,className:D(`flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left`,e),...t})}function j({className:e,...t}){return(0,C.jsx)(g.Title,{"data-slot":`drawer-title`,className:D(`font-heading text-base font-medium text-foreground`,e),...t})}var M=5,N=`/images/custom-mobile-logo.png`,P=(...e)=>{for(let t of e)if(t!=null&&String(t).trim()!==``)return String(t).trim();return``},le=e=>!e||e===`/`?`__HOME__`:e.startsWith(`/view/`)?e.replace(`/view/`,``).replace(/^\/+/,``):e.startsWith(`/page/`)?e.replace(`/page/`,``).replace(/^\/+/,``):``,F=(e=[])=>[...e].sort((e,t)=>Number(e?.position||0)-Number(t?.position||0)),ue=(e=[],t=5)=>{let n=[];for(let r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},de=(e=[])=>ue(F(e||[]),M),fe=(e=[])=>{let t=Array.isArray(e)?e.length:0;return`min(${Math.max(1,Math.ceil(t/M))*270}px, calc(100vw - 32px))`},pe=(e,t,n=[])=>{for(let r of e||[]){let e=[...n,r];if(t(r))return e;if(r.children?.length){let n=pe(r.children,t,e);if(n.length)return n}}return[]},I=e=>{try{return new URL(e,window.location.href).origin===window.location.origin}catch{return!1}},L=e=>{try{return new URL(e,window.location.href).origin!==window.location.origin}catch{return!1}},R=e=>/^(mailto:|tel:|sms:|whatsapp:)/i.test(String(e||``).trim()),me=e=>{let t=String(e||``).trim();if(!t)return``;try{return new URL(t,window.location.href).href}catch{return t}},z=e=>P(e?.page_url,e?.pageUrl,e?.link,e?.url,e?.href),he=e=>P(e?.page_slug,e?.pageSlug),ge=e=>P(e?.slug),_e=e=>P(e?.shortcode,e?.page_shortcode,e?.pageShortcode,e?.short_code),ve=e=>{let t=String(e||``).trim();return t?`${window.location.origin}/view/${encodeURIComponent(t)}`:`#`},ye=(e,t)=>{let n=P(e?.department?.short_name,e?.department?.shortName,e?.department?.slug,e?.departmentShortcode);if(n)return n;let r=P(e?.department_id,e?.departmentId);if(!r)return``;let i=t?.[Number(r)];return i?P(i?.short_name,i?.shortName,i?.slug):``},be=(e,t)=>{let n=String(t||``).trim();if(!n||!e||e===`#`)return e;try{let t=new URL(e,window.location.origin);if(t.origin!==window.location.origin)return e;let r=(t.search||``).replace(/^\?/,``),i=(r?r.split(`&`).filter(Boolean):[]).filter(e=>{let t=(e.split(`=`)[0]||``).trim();return!(!t||t===`department_uuid`||t===`dept`||t.startsWith(`d-`))});return i.push(`dept=${n}`),t.search=`?${i.join(`&`)}`,t.toString()}catch{return`${e}${e.includes(`?`)?`&`:`?`}dept=${n}`}},B=e=>{if(!e)return{type:``,value:``};let t=z(e);if(t)return{type:`link`,value:t};let n=he(e);if(n)return{type:`page_slug`,value:n};let r=ge(e);if(r)return{type:`menu_slug`,value:r};let i=_e(e);if(i)return{type:`shortcode`,value:i};let a=Array.isArray(e.children)?F(e.children):[];for(let e of a){let t=B(e);if(t?.value)return t}return{type:``,value:``}},xe=(e,t)=>{let n=B(e),r=`#`;if(n.type===`link`){if(r=me(n.value)||`#`,R(r)||!I(r))return r}else (n.type===`page_slug`||n.type===`menu_slug`||n.type===`shortcode`)&&(r=ve(n.value));if(!r||r===`#`)return`#`;if(I(r)){let n=ye(e,t);r=be(r,n)}return r},Se=(...e)=>{let t=[],n=e=>{let n=String(e||``).trim();n&&t.push(n)},r=e=>{if(e!=null){if(Array.isArray(e)){e.forEach(r);return}if(typeof e==`object`){let t=P(e?.text,e?.title,e?.name,e?.label,e?.value,e?.content,e?.message);if(t){n(t);return}if(Array.isArray(e?.items)){r(e.items);return}Array.isArray(e?.data)&&r(e.data);return}if(typeof e==`string`){let t=e.trim();if(!t)return;if(t.startsWith(`[`)&&t.endsWith(`]`)||t.startsWith(`{`)&&t.endsWith(`}`))try{r(JSON.parse(t));return}catch{}if(t.includes(`
`)||t.includes(`|`)||t.includes(`;`)){t.split(/\n|\||;/g).map(e=>e.trim()).filter(Boolean).forEach(n);return}n(t);return}n(e)}};return e.forEach(r),[...new Set(t)]};function Ce({show:e,title:t}){return(0,C.jsx)(E,{show:e,title:t,subtitle:`Loading header menu…`,hint:`Menus are being prepared for this page.`})}function we(){let e=n(),r=t(),i=s(),{menus:a,status:o}=p(b),{item:l,status:u}=p(te),d=p(ee),f=(0,S.useRef)(null),m=(0,S.useRef)(null),h=(0,S.useRef)(null),[g,_]=(0,S.useState)(!1),[y,w]=(0,S.useState)(null),[T,E]=(0,S.useState)(``),[D,se]=(0,S.useState)(!1),[k,M]=(0,S.useState)(!1),[ue,I]=(0,S.useState)(!1),[me,he]=(0,S.useState)(!1),[ge,_e]=(0,S.useState)(!1),[ve,ye]=(0,S.useState)(()=>new Set),[be,B]=(0,S.useState)([]),[we,Te]=(0,S.useState)(!1),[Ee,V]=(0,S.useState)(0);(0,S.useEffect)(()=>{o===`idle`&&e(v())},[e,o]),(0,S.useEffect)(()=>{u===`idle`&&e(x())},[e,u]),(0,S.useEffect)(()=>{window.innerWidth>=992&&_(!1)},[i.pathname,i.search]),(0,S.useEffect)(()=>()=>{h.current&&window.clearTimeout(h.current)},[]),(0,S.useEffect)(()=>{let e=()=>{if(window.innerWidth>=992){Te(!1);return}let e=m.current;e&&Te(e.getBoundingClientRect().top<=.5)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]);let H=(0,S.useMemo)(()=>le(i.pathname),[i.pathname]),U=H===`__HOME__`,W=(0,S.useMemo)(()=>F(a||[]),[a]),G=(0,S.useMemo)(()=>P(l?.headerText)||`Meghnad Saha Institute of Technology`,[l?.headerText]),K=(0,S.useMemo)(()=>N,[]),q=(0,S.useMemo)(()=>Se(l?.rotatingTexts,l?.rotating_texts,l?.rotatingText,l?.rotating_text,l?.headerRotatingTexts,l?.header_rotating_texts,l?.headerTextRotate,l?.header_text_rotate,l?.marqueeTexts,l?.marquee_texts,l?.rotatingMessages,l?.rotating_messages),[l]);(0,S.useEffect)(()=>{V(0)},[q]),(0,S.useEffect)(()=>{if(q.length<=1)return;let e=window.setInterval(()=>{V(e=>(e+1)%q.length)},2400);return()=>window.clearInterval(e)},[q]);let J=q[Ee]||q[0]||``,Y=(0,S.useMemo)(()=>U?[]:pe(W,e=>[P(e?.page_slug,e?.pageSlug),P(e?.slug),P(e?.shortcode,e?.page_shortcode,e?.pageShortcode,e?.short_code)].map(e=>String(e||``).trim()).filter(Boolean).includes(H),[]),[W,H,U]),X=(0,S.useMemo)(()=>new Set(Y.map(e=>e.id)),[Y]);(0,S.useEffect)(()=>{ye(new Set(Y.map(e=>e.id)))},[Y]),(0,S.useEffect)(()=>{w(null),B([])},[i.pathname,i.search]),(0,S.useEffect)(()=>{_e(o===`succeeded`)},[o]);let Z=W.length+1,De=()=>T===`ultra-compact`?`px-[.25rem] text-[.76rem]`:T===`very-compact`?`px-[.4rem] text-[.8rem]`:T===`compact`?`px-[.6rem] text-[.85rem]`:`px-[.8rem] text-[.95rem]`,Oe=()=>{h.current&&=(window.clearTimeout(h.current),null)},ke=()=>{Oe(),h.current=window.setTimeout(()=>{w(null),B([])},350)},Ae=e=>!Y.length||Number(Y[0]?.id)!==Number(e)?[]:Y.slice(1).map(e=>e.id),Q=e=>{Oe(),w(e),B(Ae(e))};(0,S.useEffect)(()=>{let e=f.current;if(!e)return;let t=()=>{se(!1),M(!1),I(!1),he(!1)},n=()=>{if(!ge){t();return}let n=Math.max(0,e.scrollWidth-e.clientWidth);if(!(n>2)){t();return}let r=e.scrollLeft<=1,i=e.scrollLeft>=n-1;se(!r),M(!i),I(!r),he(!i)},r=()=>{if(window.innerWidth<992){E(``);return}let t=e.offsetWidth||e.clientWidth||0;if(!t||!Z){E(``);return}let n=t/Z;E(n<70?`ultra-compact`:n<85?`very-compact`:n<115?`compact`:``)},i=()=>{n(),r()};i();let a=t=>{window.innerWidth<992||Math.max(0,e.scrollWidth-e.clientWidth)<=2||!t.shiftKey&&Math.abs(t.deltaY)>0&&(e.scrollLeft+=t.deltaY,t.preventDefault())};return e.addEventListener(`scroll`,n,{passive:!0}),e.addEventListener(`wheel`,a,{passive:!1}),window.addEventListener(`resize`,i,{passive:!0}),()=>{e.removeEventListener(`scroll`,n),e.removeEventListener(`wheel`,a),window.removeEventListener(`resize`,i)}},[ge,Z]);let $=(e,t,n=!1)=>{if(!t||t===`#`){e?.preventDefault?.();return}if(!(e?.metaKey||e?.ctrlKey||e?.shiftKey||e?.altKey||e?.button===1)){if(e?.preventDefault?.(),e?.stopPropagation?.(),n){window.open(t,`_blank`,`noopener,noreferrer`);return}if(R(t)){window.location.href=t;return}try{let e=new URL(t,window.location.origin);if(e.origin===window.location.origin){r(`${e.pathname}${e.search}${e.hash}`);return}window.location.href=t}catch{window.location.href=t}}},je=e=>{ye(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},Me=(e,t=[])=>{let n=xe(e,d),r=!!e.children?.length,i=P(e?.slug,e?.page_slug,e?.pageSlug),a=X.has(e.id)||H&&i&&H===i,o=[...t,e.id],s=be.includes(e.id),c=z(e),l=c&&!R(c)&&L(n),u=n=>{n.preventDefault(),n.stopPropagation(),B(n=>{if(n.includes(e.id)){let t=n.indexOf(e.id);return n.slice(0,t)}return[...t,e.id]})};return(0,C.jsxs)(`li`,{className:`relative`,children:[(0,C.jsx)(`a`,{href:n,onClick:e=>{if(r){u(e);return}w(null),B([]),$(e,n,l)},className:[`flex w-full items-center justify-between gap-[10px] rounded-[10px] bg-transparent px-[.95rem] py-[.62rem] text-left text-[.93rem] font-normal leading-[1.35] text-white outline outline-1 outline-transparent transition`,a?`relative bg-white/13 outline-white/16 before:absolute before:left-2 before:top-1/2 before:h-[18px] before:w-[3px] before:-translate-y-1/2 before:rounded-[3px] before:bg-[#f1c40f] before:content-['']`:`hover:bg-white/10 hover:outline-white/10 hover:translate-x-[2px]`,r?`after:ml-[10px] after:flex-none after:text-[.95rem] after:font-extrabold after:leading-none after:text-white/95 after:opacity-90 after:transition after:content-['▾']`:``,r&&s?`after:translate-y-[1px] after:rotate-180 after:opacity-100`:`after:-translate-y-[1px]`].join(` `),children:(0,C.jsx)(`span`,{children:e.title})}),r&&s?(0,C.jsx)(`ul`,{className:`my-[6px] ml-0 list-none border-l border-dashed border-white/25 pl-3 pt-[6px]`,children:F(e.children).map(e=>Me(e,o))}):null]},e.id)},Ne=e=>{let t=F(e?.children||[]),n=de(t);return t.length?(0,C.jsx)(ie,{align:`start`,side:`bottom`,sideOffset:0,collisionPadding:16,onCloseAutoFocus:e=>e.preventDefault(),className:`z-[12001] rounded-b-[12px] rounded-t-none border border-white/12 border-t-0 bg-[var(--secondary-color)] p-0 text-white shadow-[0_16px_40px_rgba(0,0,0,.28)]`,style:{width:fe(t)},onMouseEnter:Oe,onMouseLeave:ke,children:(0,C.jsx)(`div`,{className:`max-h-[calc(100vh-150px)] overflow-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,children:(0,C.jsx)(`div`,{className:`grid gap-0`,style:{gridTemplateColumns:`repeat(${Math.max(n.length,1)}, minmax(270px, 270px))`},children:n.map((t,n)=>(0,C.jsx)(`div`,{className:n>0?`border-l border-white/12 p-2`:`p-2`,children:(0,C.jsx)(`ul`,{className:`list-none p-1`,children:t.map(e=>Me(e,[]))})},`desktop-col-${e.id}-${n}`))})})}):null},Pe=(e,t=0)=>F(e).map(e=>{let n=!!e.children?.length,r=xe(e,d),i=P(e?.slug,e?.page_slug,e?.pageSlug),a=X.has(e.id)||H&&i&&H===i,o=ve.has(e.id),s=z(e),c=s&&!R(s)&&L(r);return(0,C.jsxs)(`li`,{children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-2 rounded-[12px] px-[10px] py-2 transition hover:bg-white/8`,style:{paddingLeft:`${Math.min(t,7)*12+10}px`},children:[(0,C.jsx)(`a`,{href:r,onClick:e=>{_(!1),$(e,r,c)},className:[`flex-1 rounded-[10px] px-2 py-[6px] text-[.95rem] leading-[1.2] text-white transition`,a?`bg-white/14 shadow-[inset_0_0_0_1px_rgba(255,255,255,.18)]`:``].join(` `),children:e.title}),n?(0,C.jsx)(`button`,{type:`button`,className:`flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-white/18 bg-white/8 text-white transition hover:-translate-y-[1px] hover:bg-white/10`,"aria-expanded":o?`true`:`false`,onClick:()=>je(e.id),children:(0,C.jsx)(`span`,{className:`h-0 w-0 border-b-[5px] border-l-[6px] border-t-[5px] border-b-transparent border-l-white border-t-transparent opacity-90 transition ${o?`rotate-90`:`rotate-0`}`})}):null]}),n&&o?(0,C.jsx)(`ul`,{className:`my-1 list-none border-l border-dashed border-white/25 pl-[14px]`,children:Pe(e.children,t+1)}):null]},e.id)});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ce,{show:o===`loading`,title:G}),(0,C.jsxs)(ae,{direction:`left`,open:g,onOpenChange:_,children:[(0,C.jsx)(`nav`,{ref:m,className:`dynamic-navbar sticky top-0 z-[1000] w-full overflow-visible bg-[var(--primary-color)] shadow-[0_2px_4px_rgba(0,0,0,0.1)]`,onMouseLeave:ke,children:(0,C.jsxs)(`div`,{className:`relative mx-auto flex w-full max-w-[1280px] items-stretch justify-start overflow-visible px-[calc(clamp(10px,1.4vw,22px)/2)]`,children:[D?(0,C.jsx)(`div`,{className:`pointer-events-none absolute inset-y-0 left-0 z-[10500] w-[34px] bg-[linear-gradient(270deg,rgba(158,54,58,0),rgba(158,54,58,.65))]`}):null,k?(0,C.jsx)(`div`,{className:`pointer-events-none absolute inset-y-0 right-0 z-[10500] w-[54px] bg-[linear-gradient(90deg,rgba(158,54,58,0),rgba(158,54,58,.75))]`}):null,ue?(0,C.jsx)(`button`,{type:`button`,"aria-label":`Scroll menu left`,className:`absolute left-[6px] top-1/2 z-[11001] hidden h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-[12px] border border-white/22 bg-white/10 text-xl text-white shadow-[0_10px_22px_rgba(0,0,0,.22)] backdrop-blur-[2px] transition hover:bg-white/14 min-[992px]:flex`,onClick:()=>f.current?.scrollBy({left:-Math.max(240,Math.floor((f.current?.clientWidth||0)*.65)),behavior:`smooth`}),children:`‹`}):null,me?(0,C.jsx)(`button`,{type:`button`,"aria-label":`Scroll menu right`,className:`absolute right-[6px] top-1/2 z-[11001] hidden h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-[12px] border border-white/22 bg-white/10 text-xl text-white shadow-[0_10px_22px_rgba(0,0,0,.22)] backdrop-blur-[2px] transition hover:bg-white/14 min-[992px]:flex`,onClick:()=>f.current?.scrollBy({left:Math.max(240,Math.floor((f.current?.clientWidth||0)*.65)),behavior:`smooth`}),children:`›`}):null,(0,C.jsx)(`div`,{ref:f,className:`menu-row hidden w-full max-w-[1280px] overflow-x-auto overflow-y-visible pr-[44px] min-[992px]:flex [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,children:(0,C.jsxs)(`ul`,{className:`navbar-nav flex w-max min-w-0 list-none items-stretch`,children:[(0,C.jsx)(`li`,{className:`nav-item nav-home relative flex flex-none`,"data-id":`home_static`,"data-slug":`__HOME__`,children:(0,C.jsx)(`a`,{href:`/`,onClick:e=>$(e,`${window.location.origin}/`,!1),className:[`nav-link flex items-center justify-center whitespace-nowrap bg-transparent py-3 font-normal text-white transition min-w-[44px] px-[0.6rem]`,U?`active bg-[var(--secondary-color)]`:`hover:bg-[var(--secondary-color)]`].join(` `),children:(0,C.jsx)(`i`,{className:`fa-solid fa-house`})})}),W.map(e=>{let t=!!e.children?.length,n=xe(e,d),r=P(e?.slug,e?.page_slug,e?.pageSlug),i=X.has(e.id)||H&&r&&H===r,a=z(e),o=a&&!R(a)&&L(n);return t?(0,C.jsx)(`li`,{"data-id":e.id,"data-slug":r||``,className:`nav-item relative flex flex-none min-w-0`,onMouseEnter:()=>Q(e.id),onMouseLeave:ke,children:(0,C.jsxs)(ne,{open:y===e.id,modal:!1,onOpenChange:t=>{t?Q(e.id):(w(null),B([]))},children:[(0,C.jsx)(re,{asChild:!0,children:(0,C.jsxs)(`a`,{href:n,onClick:e=>$(e,n,o),className:[`nav-link flex items-center justify-center gap-1 whitespace-nowrap bg-transparent py-3 font-normal text-white transition outline-none`,De(),i||y===e.id?`active bg-[var(--secondary-color)]`:`hover:bg-[var(--secondary-color)]`].join(` `),children:[(0,C.jsx)(`span`,{children:e.title}),(0,C.jsx)(c,{className:`h-4 w-4 transition ${y===e.id?`rotate-180`:``}`})]})}),Ne(e)]})},e.id):(0,C.jsx)(`li`,{"data-id":e.id,"data-slug":r||``,className:`nav-item relative flex flex-none min-w-0`,children:(0,C.jsx)(`a`,{href:n,onClick:e=>$(e,n,o),className:[`nav-link flex items-center justify-center whitespace-nowrap bg-transparent py-3 font-normal text-white transition`,De(),i?`active bg-[var(--secondary-color)]`:`hover:bg-[var(--secondary-color)]`].join(` `),children:e.title})},e.id)})]})}),(0,C.jsxs)(`div`,{className:`flex min-h-[64px] w-full items-center justify-between gap-3 py-1 min-[992px]:hidden`,children:[we?(0,C.jsxs)(`a`,{href:`/`,onClick:e=>$(e,`${window.location.origin}/`,!1),className:`flex min-w-0 flex-1 items-center gap-2 rounded-[14px] border border-white/12 bg-white/8 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-[2px] transition hover:bg-white/10`,"aria-label":G,children:[K?(0,C.jsx)(`span`,{className:`flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-white/15 bg-white/95 shadow-[0_6px_16px_rgba(0,0,0,.12)]`,children:(0,C.jsx)(`img`,{src:K,alt:`Logo`,className:`h-full w-full object-contain`})}):(0,C.jsx)(`span`,{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-white/12 text-sm font-bold text-white`,children:G?.charAt(0)?.toUpperCase()||`M`}),(0,C.jsxs)(`span`,{className:`min-w-0 flex-1 overflow-hidden`,children:[(0,C.jsx)(`span`,{className:`block overflow-hidden break-words text-[0.82rem] font-semibold leading-[1.08] text-white`,style:{display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`},children:G}),J?(0,C.jsx)(`span`,{className:`mt-[3px] block min-h-[0.9rem] truncate text-[0.66rem] font-medium leading-[1.1] text-white/78 transition-all duration-300`,children:J},J):null]})]}):(0,C.jsx)(`div`,{className:`flex-1`}),(0,C.jsx)(oe,{asChild:!0,children:(0,C.jsx)(`button`,{type:`button`,className:`menu-toggle flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] border border-white/15 bg-white/8 text-white shadow-[0_8px_20px_rgba(0,0,0,.18)] transition hover:-translate-y-[1px] hover:bg-white/12`,"aria-label":`Open menu`,children:(0,C.jsxs)(`span`,{className:`burger relative inline-block h-4 w-[22px]`,children:[(0,C.jsx)(`span`,{className:`absolute left-0 right-0 top-[7px] h-[2px] rounded bg-white opacity-95`}),(0,C.jsx)(`span`,{className:`absolute left-0 right-0 top-0 h-[2px] rounded bg-white opacity-95`}),(0,C.jsx)(`span`,{className:`absolute bottom-0 left-0 right-0 h-[2px] rounded bg-white opacity-95`})]})})})]})]})}),(0,C.jsxs)(A,{className:`
            z-[13010] border-none bg-[var(--secondary-color)] p-0 text-white shadow-[0_18px_50px_rgba(0,0,0,.35)]
            data-[vaul-drawer-direction=left]:inset-y-0
            data-[vaul-drawer-direction=left]:left-0
            data-[vaul-drawer-direction=left]:right-auto
            data-[vaul-drawer-direction=left]:mt-0
            data-[vaul-drawer-direction=left]:h-full
            data-[vaul-drawer-direction=left]:w-[340px]
            data-[vaul-drawer-direction=left]:max-w-[92vw]
            data-[vaul-drawer-direction=left]:rounded-none
            data-[vaul-drawer-direction=left]:border-r
            data-[vaul-drawer-direction=left]:border-white/15
          `,children:[(0,C.jsx)(ce,{className:`border-b border-white/15 px-4 py-[14px] text-left`,children:(0,C.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,C.jsx)(j,{className:`m-0 text-base font-bold tracking-[0.2px] text-white`,children:`Menu`}),(0,C.jsx)(O,{asChild:!0,children:(0,C.jsx)(`button`,{type:`button`,className:`rounded-lg p-2 text-white transition hover:bg-white/10`,"aria-label":`Close`,children:`✕`})})]})}),(0,C.jsx)(`div`,{className:`overflow-y-auto px-[10px] pb-[18px] pt-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,children:(0,C.jsxs)(`ul`,{className:`offcanvas-menu list-none p-0`,children:[(0,C.jsx)(`li`,{children:(0,C.jsx)(`div`,{className:`oc-row flex items-center gap-2 rounded-[12px] px-[10px] py-2 transition hover:bg-white/8`,children:(0,C.jsx)(`a`,{href:`/`,onClick:e=>{_(!1),$(e,`${window.location.origin}/`,!1)},className:[`oc-link flex-1 rounded-[10px] px-2 py-[6px] text-[.95rem] leading-[1.2] text-white transition`,U?`bg-white/14 shadow-[inset_0_0_0_1px_rgba(255,255,255,.18)]`:``].join(` `),children:(0,C.jsx)(`i`,{className:`fa-solid fa-house`})})})}),Pe(W)]})})]})]})]})}var Te=`/images/custom-mobile-logo.png`,Ee=e=>e.length>2?[...e,...e]:e;function V({items:e,wrapperClassName:t=``,marqueeClassName:n=``,imageClassName:r=``,durationBase:i=18}){let a=(0,S.useMemo)(()=>(e||[]).filter(e=>e?.src),[e]),o=(0,S.useMemo)(()=>a.length<=2?0:Math.max(10,Math.min(30,a.length*3.6+i/2)),[a,i]);return(0,C.jsx)(`div`,{className:`mh-marquee ${t}`.trim(),children:(0,C.jsx)(`div`,{className:`mh-track ${a.length>2?`mh-track-run`:``} ${n}`.trim(),style:{"--mh-duration":`${o}s`},children:Ee(a).map((e,t)=>(0,C.jsx)(`img`,{src:e.src,alt:e.alt||`logo`,className:r,loading:`lazy`},`${e.src}-${t}`))})})}function H(){let e=n(),{item:t,status:i}=p(te),[a,o]=(0,S.useState)(0),[s,c]=(0,S.useState)(``),[l,u]=(0,S.useState)(!1),d=(0,S.useRef)(null),f=(0,S.useRef)(null);(0,S.useEffect)(()=>{i===`idle`&&e(x())},[e,i]);let m=(0,S.useMemo)(()=>Array.isArray(t?.rotatingTexts)?t.rotatingTexts.map(e=>(e??``).toString().trim()).filter(Boolean):[],[t?.rotatingTexts]);(0,S.useEffect)(()=>{o(0),c(m[0]||``),u(!1)},[t?.id,m]),(0,S.useEffect)(()=>{if(!m.length){c(``);return}c(m[a]||``)},[a,m]),(0,S.useEffect)(()=>{if(d.current&&=(window.clearTimeout(d.current),null),f.current&&=(window.clearInterval(f.current),null),!(m.length<=1))return f.current=window.setInterval(()=>{u(!0),d.current=window.setTimeout(()=>{o(e=>(e+1)%m.length),u(!1)},180)},2600),()=>{d.current&&=(window.clearTimeout(d.current),null),f.current&&=(window.clearInterval(f.current),null)}},[m]);let h=i===`loading`||i===`idle`&&!t,g=!!t?.admissionLink;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`style`,{children:`
          :root{
            --mh-red: var(--primary-color, #9E363A);
            --mh-red-dark: var(--secondary-color, #6B2528);
            --mh-ink: #111827;
            --mh-muted: #6B7280;
            --mh-line: #E5E7EB;
            --mh-bg: #FFFFFF;
          }

          .mh-bar,
          .mh-bar *{
            box-sizing:border-box;
          }

          .mh-bar{
            width:100%;
            background:var(--mh-bg);
            overflow:visible;
          }

          .mh-inner{
            width:100%;
            max-width:1520px;
            margin:0 auto;
            padding:8px 12px;
            display:flex;
            align-items:center;
            gap:14px;
            flex-wrap:nowrap;
            min-width:0;
          }

          .mh-sec1{
            flex:0 0 auto;
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .mh-primary-logo{
            width:92px;
            height:92px;
            object-fit:contain;
            display:block;
          }

          .mh-sec2{
            flex:1 1 auto;
            min-width:0;
            display:flex;
            flex-direction:column;
            justify-content:center;
            gap:6px;
          }

          .mh-title{
            display:block;
            width:100%;
            max-width:100%;
            color:var(--mh-red);
            font-weight:700;
            text-transform:uppercase;
            letter-spacing:.45px;
            line-height:1.08;
            font-size:clamp(18px, 2.28vw, 34px);
            padding-bottom:7px;
            border-bottom:3px solid var(--mh-red);
            white-space:nowrap;
            overflow:hidden;
            text-overflow:clip;
          }

          .mh-subrow{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:16px;
            min-width:0;
          }

          .mh-rotate{
            flex:1 1 auto;
            min-width:0;
            max-width:100%;
            color:var(--mh-red);
            font-size:clamp(.82rem, 1vw, 1.05rem);
            font-weight:400;
            line-height:1.2;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            transition:opacity .18s ease, transform .18s ease, color .15s ease .10s;
          }

          .mh-rotate.is-fading{
            opacity:0;
            transform:translateY(-2px);
          }

          .mh-rotate:hover{
            color:#0D29AC;
            cursor:pointer;
          }

          .mh-affil-wrap{
            flex:0 0 360px;
            max-width:360px;
            min-width:0;
          }

          .mh-affil-marquee{
            height:36px;
          }

          .mh-affil-logo,
          .mh-partner-logo{
            width:35px;
            height:35px;
            object-fit:contain;
            display:block;
            padding:1px;
            border:1px solid var(--mh-line);
            border-radius:5px;
            background:var(--mh-bg);
          }

          .mh-sec3{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            gap:10px;
            flex:0 0 auto;
            min-width:0;
          }

          .mh-secondary-logo{
            max-height:92px;
            width:auto;
            object-fit:contain;
            display:block;
            flex:0 0 auto;
          }

          .mh-desktop-custom-logo{
            max-height:92px;
            width:auto;
            object-fit:contain;
            display:block;
            flex:0 0 auto;
          }

          .mh-sec4{
            flex:0 0 235px;
            min-width:190px;
            display:flex;
            flex-direction:column;
            align-items:stretch;
            justify-content:center;
            gap:10px;
          }

          .mh-partner-marquee{
            height:40px;
          }

          .mh-admission-row{
            display:flex;
            align-items:center;
            justify-content:flex-end;
          }

          .mh-admission{
            flex:0 0 auto;
            display:flex;
            align-items:center;
            justify-content:flex-end;
            text-decoration:none;
          }

          .mh-badge{
            height:56px;
            width:auto;
            object-fit:contain;
            display:block;
            transition:transform .12s ease, filter .12s ease;
          }

          .mh-admission:hover .mh-badge{
            transform:translateY(-1px);
            filter:drop-shadow(0 6px 14px rgba(0,0,0,.12));
          }

          .mh-marquee{
            position:relative;
            overflow:hidden;
            border-radius:10px;
            background:transparent;
            width:100%;
          }

          .mh-marquee::before,
          .mh-marquee::after{
            content:"";
            position:absolute;
            top:0;
            bottom:0;
            width:22px;
            pointer-events:none;
            z-index:2;
          }

          .mh-marquee::before{
            left:0;
            background:linear-gradient(to right, var(--mh-bg), rgba(255,255,255,0));
          }

          .mh-marquee::after{
            right:0;
            background:linear-gradient(to left, var(--mh-bg), rgba(255,255,255,0));
          }

          .mh-track{
            display:flex;
            align-items:center;
            width:max-content;
            gap:14px;
            will-change:transform;
          }

          @keyframes mh-scroll{
            from { transform:translateX(0); }
            to { transform:translateX(-50%); }
          }

          .mh-track-run{
            animation:mh-scroll var(--mh-duration, 18s) linear infinite;
          }

          .mh-track-run:hover{
            animation-play-state:paused;
          }

          .mh-skel{
            background:linear-gradient(90deg, #f3f4f6, #e5e7eb, #f3f4f6);
            background-size:200% 100%;
            animation:mh-skel 1.1s ease-in-out infinite;
            border-radius:10px;
          }

          @keyframes mh-skel{
            0%{ background-position:200% 0; }
            100%{ background-position:-200% 0; }
          }

          .mh-title-skel{
            height:46px;
            width:92%;
            border-bottom:none;
          }

          .mh-rotate-skel{
            height:22px;
            width:55%;
          }

          .mh-affil-skel{
            height:36px;
            width:100%;
          }

          .mh-partner-skel{
            height:40px;
            width:100%;
          }

          .mh-secondary-skel{
            height:86px;
            width:170px;
          }

          .mh-badge-skel{
            height:56px;
            width:230px;
          }

          @media (max-width:1380px){
            .mh-inner{
              gap:12px;
              padding:7px 10px;
            }

            .mh-title{
              font-size:clamp(17px, 2.12vw, 31px);
              letter-spacing:.25px;
            }

            .mh-primary-logo{
              width:86px;
              height:86px;
            }

            .mh-secondary-logo,
            .mh-desktop-custom-logo{
              max-height:84px;
            }

            .mh-sec4{
              flex-basis:220px;
              min-width:185px;
            }

            .mh-badge{
              height:52px;
            }

            .mh-affil-wrap{
              flex-basis:330px;
              max-width:330px;
            }
          }

          @media (max-width:1250px){
            .mh-title{
              font-size:clamp(16px, 2.02vw, 27px) !important;
              letter-spacing:.15px;
            }

            .mh-inner{
              gap:10px;
              padding:7px 9px;
            }

            .mh-primary-logo{
              width:80px;
              height:80px;
            }

            .mh-secondary-logo,
            .mh-desktop-custom-logo{
              max-height:76px;
            }

            .mh-sec3{
              gap:7px;
            }

            .mh-sec4{
              flex-basis:205px;
              min-width:175px;
              gap:8px;
            }

            .mh-badge{
              height:48px;
            }

            .mh-affil-wrap{
              flex-basis:300px;
              max-width:300px;
            }

            .mh-affil-logo,
            .mh-partner-logo{
              width:32px;
              height:32px;
            }

            .mh-affil-marquee{
              height:34px;
            }

            .mh-partner-marquee{
              height:36px;
            }

            .mh-track{
              gap:11px;
            }
          }

          @media (max-width:1150px){
            .mh-title{
              font-size:clamp(15px, 1.9vw, 24px) !important;
            }

            .mh-primary-logo{
              width:74px;
              height:74px;
            }

            .mh-secondary-logo,
            .mh-desktop-custom-logo{
              max-height:68px;
            }

            .mh-sec4{
              flex-basis:190px;
              min-width:165px;
            }

            .mh-badge{
              height:44px;
            }

            .mh-affil-wrap{
              flex-basis:270px;
              max-width:270px;
            }
          }

          @media (max-width:1050px){
            .mh-title{
              font-size:clamp(14px, 1.78vw, 21px) !important;
            }

            .mh-primary-logo{
              width:68px;
              height:68px;
            }

            .mh-secondary-logo,
            .mh-desktop-custom-logo{
              max-height:62px;
            }

            .mh-sec3{
              gap:6px;
            }

            .mh-sec4{
              flex-basis:175px;
              min-width:155px;
            }

            .mh-badge{
              height:40px;
            }

            .mh-affil-wrap{
              flex-basis:240px;
              max-width:240px;
            }
          }

          @media (max-width:992px){
            .mh-sec3,
            .mh-sec4,
            .mh-affil-wrap{
              display:none !important;
            }

            .mh-inner{
              gap:12px;
              padding:8px 10px;
            }

            .mh-primary-logo{
              width:78px;
              height:78px;
            }

            .mh-title{
              font-size:clamp(14px, 2.4vw, 30px) !important;
              border-bottom-width:2px;
            }

            .mh-subrow{
              justify-content:flex-start;
              gap:10px;
            }
          }

          @media (max-width:520px){
            .mh-inner{
              gap:10px;
              padding:8px 8px;
            }

            .mh-primary-logo{
              width:68px;
              height:68px;
            }

            .mh-title{
              font-size:clamp(10px, 3.2vw, 16px) !important;
              letter-spacing:.2px !important;
              padding-bottom:6px;
              border-bottom-width:2px;
            }

            .mh-rotate{
              font-size:.7rem;
            }
          }

          @media (prefers-reduced-motion: reduce){
            .mh-track-run,
            .mh-skel{
              animation:none !important;
            }

            .mh-rotate{
              transition:none !important;
            }
          }
        `}),(0,C.jsx)(`header`,{className:`mh-bar`,children:(0,C.jsxs)(`div`,{className:`mh-inner`,children:[(0,C.jsx)(`div`,{className:`mh-sec1`,children:h?(0,C.jsx)(`div`,{className:`mh-primary-logo mh-skel`}):t?.primaryLogo?(0,C.jsx)(r,{to:`/`,children:(0,C.jsx)(`img`,{src:t.primaryLogo,alt:`Primary logo`,className:`mh-primary-logo`})}):null}),(0,C.jsxs)(`div`,{className:`mh-sec2`,children:[h?(0,C.jsx)(`div`,{className:`mh-title-skel mh-skel`}):(0,C.jsx)(`div`,{className:`mh-title`,children:t?.headerText}),(0,C.jsxs)(`div`,{className:`mh-subrow`,children:[(0,C.jsx)(`div`,{className:`mh-rotate ${l?`is-fading`:``}`.trim(),children:h?(0,C.jsx)(`div`,{className:`mh-rotate-skel mh-skel`}):s}),(0,C.jsx)(`div`,{className:`mh-affil-wrap`,children:h?(0,C.jsx)(`div`,{className:`mh-affil-skel mh-skel`}):(0,C.jsx)(V,{items:t?.affiliationLogos||[],wrapperClassName:`mh-affil-marquee`,imageClassName:`mh-affil-logo`})})]})]}),(0,C.jsx)(`div`,{className:`mh-sec3`,children:h?(0,C.jsx)(`div`,{className:`mh-secondary-skel mh-skel`}):(0,C.jsxs)(C.Fragment,{children:[t?.secondaryLogo?(0,C.jsx)(`img`,{src:t.secondaryLogo,alt:`Secondary logo`,className:`mh-secondary-logo`}):null,(0,C.jsx)(`img`,{src:Te,alt:`Custom desktop logo`,className:`mh-desktop-custom-logo`,loading:`lazy`})]})}),(0,C.jsxs)(`div`,{className:`mh-sec4`,children:[h?(0,C.jsx)(`div`,{className:`mh-partner-skel mh-skel`}):(0,C.jsx)(V,{items:t?.partnerRecruiters||[],wrapperClassName:`mh-partner-marquee`,imageClassName:`mh-partner-logo`}),(0,C.jsx)(`div`,{className:`mh-admission-row`,children:h?(0,C.jsx)(`div`,{className:`mh-badge-skel mh-skel`}):t?.admissionBadge?(0,C.jsx)(`a`,{href:g?t.admissionLink:`#`,target:g?`_blank`:void 0,rel:g?`noopener noreferrer`:void 0,className:`mh-admission`,style:g?void 0:{pointerEvents:`none`,opacity:.85},children:(0,C.jsx)(`img`,{src:t.admissionBadge,alt:`Admission badge`,className:`mh-badge`})}):null})]})]})})]})}var U=e(i(),1),W=()=>Math.max(10,Math.min(22,window.innerWidth*.014)),G=(...e)=>{for(let t of e)if(t!=null&&String(t).trim()!==``)return String(t).trim();return``},K=e=>{let t=String(e||`/`).trim();return t.startsWith(`/`)||(t=`/${t}`),t.length>1&&t.endsWith(`/`)&&(t=t.slice(0,-1)),t},q=e=>!e||e===`/`?`__HOME__`:e.startsWith(`/view/`)?e.replace(`/view/`,``).replace(/^\/+/,``):e.startsWith(`/page/`)?e.replace(`/page/`,``).replace(/^\/+/,``):``,J=e=>{try{return new URL(e,window.location.origin).origin===window.location.origin}catch{return!1}},Y=e=>{try{return new URL(e,window.location.origin).origin!==window.location.origin}catch{return!1}},X=(e=[])=>[...e].sort((e,t)=>Number(e?.position||0)-Number(t?.position||0)),Z=(e,t,n=[])=>{for(let r of e||[]){let e=[...n,r];if(t(r))return e;if(r.children?.length){let n=Z(r.children,t,e);if(n.length)return n}}return[]},De=e=>G(e?.slug,e?.page_slug,e?.pageSlug),Oe=e=>G(e?.url,e?.page_url,e?.pageUrl,e?.link,e?.href),ke=(e,t)=>{let n=G(e?.department?.slug,e?.department?.short_name,e?.department?.shortName,e?.departmentSlug,e?.department_slug,e?.dept_slug,e?.deptSlug);if(n)return n;let r=G(e?.department_id,e?.departmentId);if(!r)return``;let i=t?.[Number(r)];return i?G(i?.slug,i?.short_name,i?.shortName,i?.department_slug,i?.dept_slug):``},Ae=(e,t)=>{let n=String(t||``).trim();if(!n||!e||e===`#`)return e;try{let t=new URL(e,window.location.origin);if(t.origin!==window.location.origin)return e;let r=(t.search||``).replace(/^\?/,``),i=(r?r.split(`&`).filter(Boolean):[]).filter(e=>{let t=(e.split(`=`)[0]||``).trim();return!(!t||t===`department_uuid`||t===`dept`||t.startsWith(`d-`))}),a=i.length?`?${i.join(`&`)}&dept=${encodeURIComponent(n)}`:`?dept=${encodeURIComponent(n)}`;return`${t.origin}${t.pathname}${a}${t.hash||``}`}catch{return`${e}${e.includes(`?`)?`&`:`?`}dept=${encodeURIComponent(n)}`}},Q=(e,t)=>{let n=`#`,r=G(e?.url),i=G(e?.page_url,e?.pageUrl,e?.link,e?.href),a=G(e?.page_slug,e?.pageSlug),o=G(e?.slug);r?n=r.startsWith(`http`)?r:r.startsWith(`/`)?`${window.location.origin}${r}`:`${window.location.origin}/${r}`:i?n=i.startsWith(`http`)?i:`${window.location.origin}${i.startsWith(`/`)?i:`/${i}`}`:a?n=`${window.location.origin}/view/${a}`:o&&(n=`${window.location.origin}/view/${o}`);let s=ke(e,t);return Ae(n,s)},$=e=>{let t=G(e?.type,e?.key,e?.contact_type,e?.contactType).toLowerCase(),n=G(e?.value,e?.label).toLowerCase();return[`phone`,`mobile`,`tel`,`telephone`,`call`].includes(t)?`phone`:[`email`,`mail`].includes(t)?`email`:[`address`,`location`,`map`,`maps`].includes(t)?`address`:[`website`,`web`,`url`,`link`].includes(t)?`website`:[`whatsapp`,`wa`].includes(t)?`whatsapp`:n.includes(`@`)?`email`:n.replace(/[^\d+]/g,``).length>=8?`phone`:`text`},je=e=>{let t=String(e||``).trim().replace(/[^\d+]/g,``);return t.startsWith(`+`)?`+${t.slice(1).replace(/[^\d]/g,``)}`:t.replace(/[^\d]/g,``)},Me=e=>{let t=G(e?.url,e?.href);if(t)return t;let n=$(e),r=G(e?.value,e?.label);if(!r)return`#`;if(n===`email`)return`mailto:${r}`;if(n===`phone`)return`tel:${je(r)}`;if(n===`address`)return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r)}`;if(n===`whatsapp`){let e=je(r).replace(`+`,``);return e?`https://wa.me/${e}`:`#`}return n===`website`?/^https?:\/\//i.test(r)?r:`https://${r.replace(/^\/+/,``)}`:`#`},Ne={phone:{iconClass:`fa-solid fa-phone`},email:{iconClass:`fa-solid fa-envelope`},address:{iconClass:`fa-solid fa-location-dot`},website:{iconClass:`fa-solid fa-globe`},whatsapp:{iconClass:`fa-brands fa-whatsapp`},text:{iconClass:`fa-solid fa-circle-info`}};function Pe(){let e=n(),r=t(),i=s(),{menus:a,contacts:o,status:c}=p(_),l=p(ee),u=(0,S.useRef)(null),d=(0,S.useRef)(null),f=(0,S.useRef)(null),m=(0,S.useRef)(null),[h,g]=(0,S.useState)(null),[v,te]=(0,S.useState)(null),[b,x]=(0,S.useState)([]),[w,T]=(0,S.useState)(``),[E,D]=(0,S.useState)(!1),[ne,re]=(0,S.useState)(!1),[ie,ae]=(0,S.useState)(!1),[oe,se]=(0,S.useState)(!1);(0,S.useEffect)(()=>{c===`idle`&&e(y())},[e,c]),(0,S.useEffect)(()=>{g(null),x([])},[i.pathname,i.search]);let O=(0,S.useMemo)(()=>X(a||[]),[a]),k=(0,S.useMemo)(()=>(o||[]).slice(0,2),[o]),A=(0,S.useMemo)(()=>q(i.pathname),[i.pathname]),ce=(0,S.useMemo)(()=>K(i.pathname||`/`),[i.pathname]),j=(0,S.useMemo)(()=>Z(O,e=>{let t=De(e);if(A&&t&&t===A)return!0;let n=Oe(e);if(!n)return!1;try{let e=new URL(n.startsWith(`http`)?n:n.startsWith(`/`)?`${window.location.origin}${n}`:`${window.location.origin}/${n}`,window.location.origin);return e.origin===window.location.origin?K(e.pathname)===ce:!1}catch{return!1}},[]),[O,A,ce]),M=(0,S.useMemo)(()=>new Set(j.map(e=>e.id)),[j]),N=(0,S.useMemo)(()=>O.find(e=>Number(e.id)===Number(h))||null,[O,h]),P=k.length+O.length,le=()=>w===`ultra-compact`?`px-[.45rem] text-[.75rem]`:w===`very-compact`?`px-[.55rem] text-[.8rem]`:w===`compact`?`px-[.8rem] text-[.85rem]`:`px-[1.2rem] text-[.95rem]`,F=()=>{m.current&&=(window.clearTimeout(m.current),null)},ue=()=>{F(),m.current=window.setTimeout(()=>{g(null),x([])},140)},de=()=>{if(!u.current)return;let e=u.current.getBoundingClientRect(),t=W();te({top:Math.round(e.bottom),left:t,right:t})},fe=e=>{let t=f.current;if(!t||!e)return 0;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect().top-n.top;r=Math.max(0,r-4);let i=window.innerHeight-n.top-20,a=Math.max(0,i-140);return Math.min(r,a)},pe=e=>{F(),de();let t=O.find(t=>Number(t.id)===Number(e));if(g(e),!t?.children?.length){x([]);return}let n=(j.length&&Number(j[0]?.id)===Number(e)?j.slice(1):[])[0]?.id??null;x([{colIndex:0,items:X(t.children),alignTopPx:0,activeId:n}])},I=(e,t,n)=>{x(r=>{let i=r.filter(t=>t.colIndex<=e).map(n=>n.colIndex===e?{...n,activeId:t.id}:n);return t.children?.length&&i.push({colIndex:e+1,items:X(t.children),alignTopPx:fe(n),activeId:null}),i})};(0,S.useEffect)(()=>{if(!N||!b.length)return;let e=j.length&&Number(j[0]?.id)===Number(N.id)?j.slice(1):[];if(!e.length)return;let t=window.requestAnimationFrame(()=>{let t=[{colIndex:0,items:X(N.children||[]),alignTopPx:0,activeId:e[0]?.id??null}];for(let n=0;n<e.length;n+=1){let r=e[n],i=X(r?.children||[]);if(!i.length)break;t.push({colIndex:n+1,items:i,alignTopPx:0,activeId:e[n+1]?.id??null})}x(t)});return()=>window.cancelAnimationFrame(t)},[N,j]),(0,S.useEffect)(()=>{let e=d.current;if(!e)return;let t=()=>{let t=Math.max(0,e.scrollWidth-e.clientWidth),n=t>2,r=e.scrollLeft<=1,i=e.scrollLeft>=t-1;D(n&&!r),re(n&&!i),ae(n&&!r),se(n&&!i)},n=()=>{if(window.innerWidth<992||!e){T(``);return}let t=e.offsetWidth||e.clientWidth||0;if(!t||!P){T(``);return}let n=t/P;T(n<90?`ultra-compact`:n<110?`very-compact`:n<140?`compact`:``)},r=()=>{t(),n(),h&&de()};r();let i=t=>{window.innerWidth<992||Math.max(0,e.scrollWidth-e.clientWidth)<=2||!t.shiftKey&&Math.abs(t.deltaY)>0&&(e.scrollLeft+=t.deltaY,t.preventDefault())};return e.addEventListener(`scroll`,t,{passive:!0}),e.addEventListener(`wheel`,i,{passive:!1}),window.addEventListener(`resize`,r,{passive:!0}),window.addEventListener(`scroll`,r,{passive:!0}),()=>{e.removeEventListener(`scroll`,t),e.removeEventListener(`wheel`,i),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,r)}},[P,h]);let L=e=>{let t=new URL(e,window.location.origin);r(`${t.pathname}${t.search}${t.hash}`)},R=(e,t,n=!1)=>{if(!t||t===`#`){e.preventDefault();return}if(!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button===1)){if(e.preventDefault(),e.stopPropagation(),n){window.open(t,`_blank`,`noopener,noreferrer`);return}if(J(t)){L(t);return}window.location.href=t}};return(0,C.jsxs)(`div`,{className:`hidden min-[992px]:block`,children:[(0,C.jsx)(`nav`,{ref:u,className:`sticky top-0 z-[1000] w-full overflow-visible bg-[var(--primary-color)] px-[clamp(10px,1.4vw,22px)] shadow-[0_2px_4px_rgba(0,0,0,0.1)]`,onMouseLeave:ue,children:(0,C.jsxs)(`div`,{className:`relative mx-auto flex max-w-[1280px] items-stretch justify-start overflow-visible`,children:[E?(0,C.jsx)(`div`,{className:`pointer-events-none absolute inset-y-0 left-0 z-[10500] w-[34px] bg-[linear-gradient(270deg,rgba(158,54,58,0),rgba(158,54,58,.65))]`}):null,ne?(0,C.jsx)(`div`,{className:`pointer-events-none absolute inset-y-0 right-0 z-[10500] w-[54px] bg-[linear-gradient(90deg,rgba(158,54,58,0),rgba(158,54,58,.75))]`}):null,ie?(0,C.jsx)(`button`,{type:`button`,"aria-label":`Scroll menu left`,className:`absolute left-[6px] top-1/2 z-[11000] flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-[12px] border border-white/20 bg-white/10 text-xl text-white shadow-[0_10px_22px_rgba(0,0,0,.22)] transition hover:-translate-y-[calc(50%+1px)] hover:bg-white/14`,onClick:()=>d.current?.scrollBy({left:-Math.max(240,Math.floor((d.current?.clientWidth||0)*.65)),behavior:`smooth`}),children:`‹`}):null,oe?(0,C.jsx)(`button`,{type:`button`,"aria-label":`Scroll menu right`,className:`absolute right-[6px] top-1/2 z-[11000] flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-[12px] border border-white/20 bg-white/10 text-xl text-white shadow-[0_10px_22px_rgba(0,0,0,.22)] transition hover:-translate-y-[calc(50%+1px)] hover:bg-white/14`,onClick:()=>d.current?.scrollBy({left:Math.max(240,Math.floor((d.current?.clientWidth||0)*.65)),behavior:`smooth`}),children:`›`}):null,(0,C.jsx)(`div`,{ref:d,className:`w-full max-w-[1280px] overflow-x-auto overflow-y-hidden pr-[44px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,children:(0,C.jsxs)(`ul`,{className:`flex w-max min-w-0 list-none items-stretch`,children:[k.map((e,t)=>{let n=$(e),r=Ne[n]||Ne.text,i=Me(e),a=[`address`,`whatsapp`,`website`].includes(n)||/^https?:\/\//i.test(i);return(0,C.jsx)(`li`,{className:`flex flex-none`,children:(0,C.jsxs)(`a`,{href:i,onClick:e=>R(e,i,a),className:[`flex items-center justify-start gap-[.55rem] whitespace-nowrap px-[.95rem] py-3 text-[0.95rem] font-normal text-white transition`,`hover:bg-[var(--secondary-color)]`,t===k.length-1?`mr-[6px] shadow-[inset_-1px_0_0_rgba(255,255,255,.18)]`:``].join(` `),children:[(0,C.jsx)(`i`,{className:`${r.iconClass} opacity-95`}),(0,C.jsx)(`span`,{children:G(e?.value,e?.label)})]})},`${n}-${t}`)}),O.map(e=>{let t=Q(e,l),n=!!e.children?.length,r=M.has(e.id),i=G(e?.page_url,e?.pageUrl,e?.url),a=/^https?:\/\//i.test(i)&&Y(t);return(0,C.jsx)(`li`,{"data-id":e.id,className:`relative flex flex-none`,onMouseEnter:()=>n&&pe(e.id),children:(0,C.jsx)(`a`,{href:t,onClick:e=>R(e,t,a),className:[`flex items-center justify-center whitespace-nowrap bg-transparent py-3 font-normal text-white transition`,le(),r?`bg-[var(--secondary-color)]`:`hover:bg-[var(--secondary-color)]`].join(` `),children:e.title})},e.id)})]})})]})}),!N||!v||!b.length?null:(0,U.createPortal)((0,C.jsx)(`div`,{className:`fixed z-[12000]`,style:{top:`${v.top}px`,left:`${v.left}px`,right:`${v.right}px`},onMouseEnter:F,onMouseLeave:ue,children:(0,C.jsx)(`div`,{ref:f,className:`relative inline-flex max-w-full items-stretch overflow-x-auto overflow-y-hidden rounded-b-[10px] border border-white/10 border-t-0 bg-[var(--secondary-color)] shadow-[0_12px_30px_rgba(0,0,0,.22)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,children:b.map((e,t)=>(0,C.jsx)(`div`,{"data-col":e.colIndex,className:[`relative flex w-[270px] min-w-[270px] flex-col p-2`,t>0?`before:absolute before:bottom-0 before:left-0 before:top-0 before:w-px before:bg-white/15 before:content-['']`:``].join(` `),style:{marginTop:t>0&&e.alignTopPx>0?`${e.alignTopPx}px`:`0px`},children:(0,C.jsx)(`ul`,{className:`max-h-[calc(100vh-180px)] list-none overflow-auto p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,children:e.items.map(t=>{let n=Q(t,l),r=e.activeId===t.id||M.has(t.id),i=!!t.children?.length,a=G(t?.page_url,t?.pageUrl,t?.url),o=/^https?:\/\//i.test(a)&&Y(n);return(0,C.jsx)(`li`,{"data-id":t.id,children:(0,C.jsxs)(`a`,{href:n,"data-mid":t.id,"data-col":e.colIndex,onMouseEnter:n=>I(e.colIndex,t,n.currentTarget),onClick:e=>R(e,n,o),className:[`relative flex w-full items-center justify-between gap-[10px] rounded-[10px] px-[.95rem] py-[.62rem] text-left text-[.93rem] font-normal text-white outline outline-1 outline-transparent transition`,r?`bg-white/13 outline-white/16 before:absolute before:left-2 before:top-1/2 before:h-[18px] before:w-[3px] before:-translate-y-1/2 before:rounded-[3px] before:bg-[#f1c40f] before:content-['']`:`hover:bg-white/10 hover:outline-white/10`].join(` `),children:[(0,C.jsx)(`span`,{className:`pr-2`,children:t.title}),i?(0,C.jsx)(`span`,{className:`ml-[10px] flex-none text-[1.2rem] font-bold leading-none text-white/90 transition`,children:`›`}):null]})},t.id)})})},`mega-col-${e.colIndex}`))})}),document.body)]})}export{E as i,H as n,we as r,Pe as t};