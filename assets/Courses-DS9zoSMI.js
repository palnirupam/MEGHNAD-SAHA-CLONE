import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{a,i as o,n as s,o as c,r as l,s as u}from"./coursesViewAllSlice-UK8FJneo.js";var d=e(n(),1),f=r(),p=9,m=typeof window<`u`?window.location.origin.replace(/\/+$/,``):``,h=String.raw`
.csx-wrap{
  --csx-brand: var(--primary-color, #9E363A);
  --csx-ink: #0f172a;
  --csx-muted: #64748b;
  --csx-bg: var(--page-bg, #ffffff);
  --csx-card: var(--surface, #ffffff);
  --csx-line: var(--line-soft, rgba(15,23,42,.10));
  --csx-shadow: 0 10px 24px rgba(2,6,23,.08);

  --csx-card-h: 426.4px;
  --csx-media-h: 240px;

  max-width: 1320px;
  margin: 18px auto 54px;
  padding: 0 12px;
  background: transparent;
  position: relative;
  overflow: visible;
}

.csx-head{
  background: var(--csx-card);
  border: 1px solid var(--csx-line);
  border-radius: 16px;
  box-shadow: var(--csx-shadow);
  padding: 14px 16px;
  margin-bottom: 16px;

  display:flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.csx-title{
  margin: 0;
  font-weight: 950;
  letter-spacing: .2px;
  color: var(--csx-ink);
  font-size: 28px;
  display:flex;
  align-items:center;
  gap: 10px;
  white-space: nowrap;
}
.csx-title i{ color: var(--csx-brand); }
.csx-sub{
  margin: 6px 0 0;
  color: var(--csx-muted);
  font-size: 14px;
}

.csx-tools{
  display:flex;
  gap: 10px;
  align-items:center;
  flex-wrap: nowrap;
}

.csx-search{
  position: relative;
  min-width: 260px;
  max-width: 520px;
  flex: 1 1 320px;
}
.csx-search i{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .65;
  color: var(--csx-muted);
  pointer-events:none;
}
.csx-search input{
  width:100%;
  height: 42px;
  border-radius: 999px;
  padding: 11px 12px 11px 42px;
  border: 1px solid var(--csx-line);
  background: var(--csx-card);
  color: var(--csx-ink);
  outline: none;
}
.csx-search input:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.csx-select{
  position: relative;
  min-width: 260px;
  max-width: 360px;
  flex: 0 1 320px;
}
.csx-select.csx-level{
  min-width: 210px;
  max-width: 260px;
  flex: 0 1 260px;
}

.csx-select__icon{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--csx-muted);
  pointer-events:none;
  font-size: 14px;
}
.csx-select__caret{
  position:absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--csx-muted);
  pointer-events:none;
  font-size: 12px;
}
.csx-select select{
  width: 100%;
  height: 42px;
  border-radius: 999px;
  padding: 10px 38px 10px 42px;
  border: 1px solid var(--csx-line);
  background: var(--csx-card);
  color: var(--csx-ink);
  outline: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.csx-select select:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.csx-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
  align-items: stretch;
}

.csx-card{
  width:100%;
  height: var(--csx-card-h);
  position:relative;
  display:flex;
  flex-direction:column;
  border: 1px solid rgba(2,6,23,.08);
  border-radius: 16px;
  background: #fff;
  box-shadow: var(--csx-shadow);
  overflow:hidden;
  transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
  will-change: transform;
}
.csx-card:hover{
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(2,6,23,.12);
  border-color: rgba(158,54,58,.22);
}

.csx-media{
  width:100%;
  height: var(--csx-media-h);
  flex: 0 0 auto;
  background: var(--csx-brand);
  position:relative;
  overflow:hidden;
  user-select:none;
}
.csx-media .csx-fallback{
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-weight:950;
  font-size: 26px;
  letter-spacing:.2px;
  z-index: 0;
  padding: 0 16px;
  text-align:center;
  line-height: 1.15;
}
.csx-media img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  z-index: 1;
}

.csx-body{
  padding: 16px 16px 14px;
  display:flex;
  flex-direction:column;
  flex: 1 1 auto;
  min-height: 0;
}
.csx-h{
  font-size: 20px;
  line-height: 1.25;
  font-weight: 950;
  margin: 0 0 10px 0;
  color: var(--csx-ink);

  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
  overflow-wrap:anywhere;
  word-break:break-word;
}
.csx-p{
  margin:0;
  color:#475569;
  font-size: 14.5px;
  line-height: 1.7;

  display:-webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient:vertical;
  overflow:hidden;
  overflow-wrap:anywhere;
  word-break:break-word;
  hyphens:auto;
}

.csx-link{
  position:absolute;
  inset:0;
  z-index:2;
  border-radius: 16px;
}

.csx-state{
  background: var(--csx-card);
  border: 1px solid var(--csx-line);
  border-radius: 16px;
  box-shadow: var(--csx-shadow);
  padding: 18px;
  color: var(--csx-muted);
  text-align:center;
}

.csx-skeleton{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
}
.csx-sk{
  border-radius: 16px;
  border: 1px solid var(--csx-line);
  background: #fff;
  overflow:hidden;
  position:relative;
  box-shadow: 0 10px 24px rgba(2,6,23,.08);
  height: var(--csx-card-h);
}
.csx-sk:before{
  content:'';
  position:absolute; inset:0;
  transform: translateX(-60%);
  background: linear-gradient(90deg, transparent, rgba(148,163,184,.22), transparent);
  animation: csxSkMove 1.15s ease-in-out infinite;
}
@keyframes csxSkMove{ to{ transform: translateX(60%);} }

.csx-pagination{
  display:flex;
  justify-content:center;
  margin-top: 18px;
}
.csx-pagination .csx-pager{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  padding: 10px;
}
.csx-pagebtn{
  border:1px solid var(--csx-line);
  background: var(--csx-card);
  color: var(--csx-ink);
  border-radius: 12px;
  padding: 9px 12px;
  font-size: 13px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(2,6,23,.06);
  cursor:pointer;
  user-select:none;
}
.csx-pagebtn:hover{ background: rgba(2,6,23,.03); }
.csx-pagebtn[disabled]{ opacity:.55; cursor:not-allowed; }
.csx-pagebtn.active{
  background: rgba(201,75,80,.12);
  border-color: rgba(201,75,80,.35);
  color: var(--csx-brand);
}

@media (max-width: 640px){
  .csx-head{ flex-wrap: wrap; align-items: flex-end; }
  .csx-tools{ flex-wrap: wrap; }

  .csx-title{ font-size: 24px; white-space: normal; }
  .csx-search{ min-width: 220px; flex: 1 1 240px; }
  .csx-select{ min-width: 220px; flex: 1 1 240px; }
  .csx-select.csx-level{ min-width: 220px; flex: 1 1 240px; }
  .csx-wrap{ --csx-media-h: 210px; }
  .csx-media .csx-fallback{ font-size: 22px; }
}

.dynamic-navbar .navbar-nav .dropdown-menu{
  position: absolute !important;
  inset: auto !important;
}
.dynamic-navbar .dropdown-menu.is-portaled{
  position: fixed !important;
}
`,g=e=>{let t=String(e||``).replace(/<\s*br\s*\/?>/gi,` `).replace(/<\/\s*(p|div|li|h[1-6]|tr|td|th|section|article)\s*>/gi,`$& `).replace(/<\s*(p|div|li|h[1-6]|tr|td|th|section|article)\b[^>]*>/gi,` `),n=document.createElement(`div`);return n.innerHTML=t,(n.textContent||n.innerText||``).replace(/\s+/g,` `).trim()},_=e=>{let t=(e||``).toString().trim();return t?/^(data:|blob:|https?:\/\/)/i.test(t)?t:t.startsWith(`/`)?m+t:m+`/`+t:``},v=(e,t)=>{let n=new URL(window.location.href),r=(n.searchParams.get(`department`)||n.searchParams.get(`dept`)||``).trim();if(r)return t.has(r.toLowerCase())?t.get(r.toLowerCase()):r;let i=`${n.search} ${n.href}`.match(/d-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{12})/i);return i?i[1]:``},y=(e,t)=>{let n=new URL(window.location.href);if(e){let r=t.get(e);r?.shortcode?(n.searchParams.set(`dept`,r.shortcode),n.searchParams.delete(`department`)):(n.searchParams.set(`department`,e),n.searchParams.delete(`dept`))}else n.searchParams.delete(`department`),n.searchParams.delete(`dept`);history.replaceState({},``,n.pathname+n.search+n.hash)},b=()=>{if(document.querySelector(`link[href*="font-awesome"]`))return;let e=document.createElement(`link`);e.rel=`stylesheet`,e.href=`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`,document.head.appendChild(e)},x=e=>(e??``).toString().trim().toLowerCase(),S=e=>{let t=(e??``).toString().trim();if(!t)return``;let n=t.toLowerCase();return n===`ug`?`UG`:n===`pg`?`PG`:t.replace(/[_-]+/g,` `).replace(/\s+/g,` `).trim().replace(/\b\w/g,e=>e.toUpperCase())},C=e=>String(e?.title||`Course`),w=e=>String(e?.summary||e?.career_scope||e?.body||``),T=e=>_(e?.cover_image_url||e?.cover_image||e?.image_url||``),E=e=>String(e?.uuid||e?.slug||``),D=e=>String(e?.department_id===null||e?.department_id===void 0?``:e.department_id),O=e=>String(e?.department_uuid||``);function k({item:e,viewBase:t}){let[n,r]=(0,d.useState)(!1),i=C(e),a=g(w(e)),o=T(e),s=e?.uuid?String(e.uuid):``,c=(e?.slug?String(e.slug):``)||s,l=c?`${t}/${encodeURIComponent(c)}`:`#`,u=a;return u.length>90&&(u=u.slice(0,90).trim().replace(/[,\.;:\-\s]+$/g,``),u+=`......`),(0,f.jsxs)(`div`,{className:`csx-card`,children:[(0,f.jsxs)(`div`,{className:`csx-media`,children:[(0,f.jsx)(`div`,{className:`csx-fallback`,children:`Course`}),o&&!n?(0,f.jsx)(`img`,{className:`csx-img`,src:o,alt:i,loading:`lazy`,onError:()=>r(!0)}):null]}),(0,f.jsxs)(`div`,{className:`csx-body`,children:[(0,f.jsx)(`div`,{className:`csx-h`,children:i}),(0,f.jsx)(`p`,{className:`csx-p`,children:u||``})]}),c?(0,f.jsx)(`a`,{className:`csx-link`,href:l,"aria-label":`Open ${i}`}):(0,f.jsx)(`div`,{className:`csx-link`,title:`Missing UUID`})]})}function A(){let e=t(),n=i(o),r=i(a),_=i(u),w=i(c),[T,A]=(0,d.useState)(``),[j,M]=(0,d.useState)(``),[N,P]=(0,d.useState)(``),[F,I]=(0,d.useState)(``),[L,R]=(0,d.useState)(``),[z,ee]=(0,d.useState)(``),[B,V]=(0,d.useState)(1),[H,U]=(0,d.useState)(!1),[W,G]=(0,d.useState)(!1);(0,d.useEffect)(()=>{b(),e(s()),e(l()),G(!0)},[e]);let K=(0,d.useMemo)(()=>new Map((n||[]).map(e=>[e.uuid,e])),[n]),q=(0,d.useMemo)(()=>new Map((n||[]).filter(e=>e.shortcode).map(e=>[e.shortcode,e.uuid])),[n]),J=(0,d.useMemo)(()=>{let e=new Map;return(Array.isArray(w)?w:[]).forEach(t=>{let n=x(t?.program_level||``);n&&(e.has(n)||e.set(n,S(n)))}),Array.from(e.entries()).map(([e,t])=>({value:e,label:t})).sort((e,t)=>e.label.localeCompare(t.label))},[w]);(0,d.useEffect)(()=>{if(!W||H||r===`loading`||_===`loading`||r===`idle`||_===`idle`)return;let e=v(K,q);if(e&&K.has(e)){let t=K.get(e);A(e),M(t?.id!==null&&t?.id!==void 0?String(t.id):``),P(t?.title||``)}else A(``),M(``),P(``);U(!0),V(1)},[W,H,r,_,K,q]),(0,d.useEffect)(()=>{if(H)if(y(T,K),T){let e=K.get(T);M(e?.id!==null&&e?.id!==void 0?String(e.id):``),P(e?.title||``)}else M(``),P(``)},[H,T,K]),(0,d.useEffect)(()=>{let e=setTimeout(()=>{ee(L.trim()),V(1)},260);return()=>clearTimeout(e)},[L]);let Y=!W||r===`loading`||_===`loading`||!H,X=(0,d.useMemo)(()=>{let e=Array.isArray(w)?w.slice():[];if(T&&(e=e.filter(e=>{let t=D(e),n=O(e);return j&&t===j||n&&n===T})),F){let t=String(F);e=e.filter(e=>x(e?.program_level||``)===t)}let t=z.toLowerCase();return t&&(e=e.filter(e=>{let n=C(e).toLowerCase(),r=g(e?.summary||``).toLowerCase(),i=g(e?.career_scope||``).toLowerCase(),a=g(e?.body||``).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)||a.includes(t)})),e},[w,T,j,F,z]),Z=Math.max(1,Math.ceil(X.length/p)),Q=Math.min(B,Z);(0,d.useEffect)(()=>{B>Z&&V(Z)},[Z,B]);let $=(0,d.useMemo)(()=>{let e=(Q-1)*p;return X.slice(e,e+p)},[X,Q]),te=N?F?`Courses for ${N} · Level: ${S(F)}`:`Courses for ${N}`:F?`Browse all published programs & courses · Level: ${S(F)}`:`Browse all published programs & courses.`;return(0,f.jsxs)(`div`,{className:`csx-wrap`,children:[(0,f.jsx)(`style`,{children:h}),(0,f.jsxs)(`div`,{className:`csx-head`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`h1`,{className:`csx-title`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-graduation-cap`}),`Courses`]}),(0,f.jsx)(`div`,{className:`csx-sub`,children:te})]}),(0,f.jsxs)(`div`,{className:`csx-tools`,children:[(0,f.jsxs)(`div`,{className:`csx-search`,children:[(0,f.jsx)(`i`,{className:`fa fa-magnifying-glass`}),(0,f.jsx)(`input`,{value:L,onChange:e=>R(e.target.value),type:`search`,placeholder:`Search courses (title/summary/body/career scope)…`})]}),(0,f.jsxs)(`div`,{className:`csx-select csx-level`,title:`Filter by level`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-layer-group csx-select__icon`}),(0,f.jsxs)(`select`,{value:F,onChange:e=>{I((e.target.value||``).toString()),V(1)},"aria-label":`Filter by level`,children:[(0,f.jsx)(`option`,{value:``,children:`All Levels`}),J.map(e=>(0,f.jsx)(`option`,{value:e.value,children:e.label},e.value))]}),(0,f.jsx)(`i`,{className:`fa-solid fa-chevron-down csx-select__caret`})]}),(0,f.jsxs)(`div`,{className:`csx-select`,title:`Filter by department`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-building-columns csx-select__icon`}),(0,f.jsxs)(`select`,{value:T,onChange:e=>{A((e.target.value||``).toString()),V(1)},"aria-label":`Filter by department`,children:[(0,f.jsx)(`option`,{value:``,children:`All Departments`}),(n||[]).slice().sort((e,t)=>e.title.localeCompare(t.title)).map(e=>(0,f.jsx)(`option`,{value:e.uuid,children:e.title},e.uuid))]}),(0,f.jsx)(`i`,{className:`fa-solid fa-chevron-down csx-select__caret`})]})]})]}),Y?(0,f.jsx)(`div`,{className:`csx-skeleton`,children:Array.from({length:6}).map((e,t)=>(0,f.jsx)(`div`,{className:`csx-sk`},t))}):$.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:`csx-grid`,children:$.map(e=>(0,f.jsx)(k,{item:e,viewBase:`${m}/courses/view`},E(e)||`${e?.title||`course`}-${e?.uuid||``}`))}),Z>1?(0,f.jsx)(`div`,{className:`csx-pagination`,children:(0,f.jsxs)(`div`,{className:`csx-pager`,children:[(0,f.jsx)(`button`,{className:`csx-pagebtn`,disabled:Q<=1,onClick:()=>{V(Math.max(1,Q-1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Previous`}),(()=>{let e=Math.max(1,Q-2),t=Math.min(Z,Q+2),n=[];e>1&&(n.push((0,f.jsx)(`button`,{className:`csx-pagebtn ${Q===1?`active`:``}`,onClick:()=>{V(1),window.scrollTo({top:0,behavior:`smooth`})},children:`1`},`p1`)),e>2&&n.push((0,f.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots1`)));for(let r=e;r<=t;r++)n.push((0,f.jsx)(`button`,{className:`csx-pagebtn ${Q===r?`active`:``}`,onClick:()=>{V(r),window.scrollTo({top:0,behavior:`smooth`})},children:r},r));return t<Z&&(t<Z-1&&n.push((0,f.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots2`)),n.push((0,f.jsx)(`button`,{className:`csx-pagebtn ${Q===Z?`active`:``}`,onClick:()=>{V(Z),window.scrollTo({top:0,behavior:`smooth`})},children:Z},Z))),n})(),(0,f.jsx)(`button`,{className:`csx-pagebtn`,disabled:Q>=Z,onClick:()=>{V(Math.min(Z,Q+1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Next`})]})}):null]}):(0,f.jsxs)(`div`,{className:`csx-state`,children:[(0,f.jsx)(`div`,{"aria-hidden":`true`,style:{width:`170px`,maxWidth:`100%`,margin:`0 auto 10px`,display:`block`,color:`var(--csx-brand)`},children:(0,f.jsxs)(`svg`,{viewBox:`0 0 220 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,style:{display:`block`,width:`100%`,height:`auto`},children:[(0,f.jsx)(`rect`,{x:`10`,y:`18`,width:`200`,height:`112`,rx:`16`,fill:`white`,stroke:`rgba(15,23,42,0.10)`}),(0,f.jsx)(`rect`,{x:`24`,y:`32`,width:`172`,height:`84`,rx:`12`,fill:`rgba(148,163,184,0.08)`,stroke:`rgba(148,163,184,0.18)`}),(0,f.jsx)(`circle`,{cx:`70`,cy:`66`,r:`16`,fill:`rgba(158,54,58,0.14)`,stroke:`currentColor`,strokeWidth:`2`}),(0,f.jsx)(`path`,{d:`M49 97c5-11 16-16 21-16s16 5 21 16`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`}),(0,f.jsx)(`rect`,{x:`100`,y:`52`,width:`72`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.20)`}),(0,f.jsx)(`rect`,{x:`100`,y:`68`,width:`54`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.16)`}),(0,f.jsx)(`rect`,{x:`100`,y:`84`,width:`64`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.12)`}),(0,f.jsx)(`circle`,{cx:`182`,cy:`26`,r:`12`,fill:`rgba(158,54,58,0.10)`,stroke:`currentColor`,strokeWidth:`1.8`}),(0,f.jsx)(`path`,{d:`M177.5 26h9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,f.jsx)(`path`,{d:`M182 21.5v9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}),`No courses found.`]})]})}export{A as default};