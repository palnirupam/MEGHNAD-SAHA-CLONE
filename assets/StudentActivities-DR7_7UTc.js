import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./studentActivitiesSlice-C3N9rK9L.js";var p=e(n(),1),m=r(),h=9,g=String.raw`
.sa-wrap{
  --sa-brand: var(--primary-color, #9E363A);
  --sa-ink: #0f172a;
  --sa-muted: #64748b;
  --sa-bg: var(--page-bg, #ffffff);
  --sa-card: var(--surface, #ffffff);
  --sa-line: var(--line-soft, rgba(15,23,42,.10));
  --sa-shadow: 0 10px 24px rgba(2,6,23,.08);

  --sa-card-h: 426.4px;
  --sa-media-h: 240px;

  max-width: 1320px;
  margin: 18px auto 54px;
  padding: 0 12px;
  background: transparent;
  position: relative;
  overflow: visible;
}

.sa-head{
  background: var(--sa-card);
  border: 1px solid var(--sa-line);
  border-radius: 16px;
  box-shadow: var(--sa-shadow);
  padding: 14px 16px;
  margin-bottom: 16px;

  display:flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}
.sa-head > div:first-child{ flex: 0 0 auto; }

.sa-title{
  margin: 0;
  font-weight: 950;
  letter-spacing: .2px;
  color: var(--sa-ink);
  font-size: 28px;
  display:flex;
  align-items:center;
  gap: 10px;
}
.sa-title i{ color: var(--sa-brand); }
.sa-sub{
  margin: 6px 0 0;
  color: var(--sa-muted);
  font-size: 14px;
}

.sa-tools{
  display:flex;
  gap: 10px;
  align-items:center;
  flex-wrap: nowrap;
  justify-content: flex-end;
  flex: 1 1 auto;
}

.sa-search{
  position: relative;
  min-width: 260px;
  max-width: 520px;
  flex: 1 1 320px;
}
.sa-search i{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .65;
  color: var(--sa-muted);
  pointer-events:none;
}
.sa-search input{
  width:100%;
  height: 42px;
  border-radius: 999px;
  padding: 11px 12px 11px 42px;
  border: 1px solid var(--sa-line);
  background: var(--sa-card);
  color: var(--sa-ink);
  outline: none;
}
.sa-search input:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.sa-select{
  position: relative;
  min-width: 260px;
  max-width: 360px;
  flex: 0 1 320px;
}
.sa-select__icon{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--sa-muted);
  pointer-events:none;
  font-size: 14px;
}
.sa-select__caret{
  position:absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--sa-muted);
  pointer-events:none;
  font-size: 12px;
}
.sa-select select{
  width: 100%;
  height: 42px;
  border-radius: 999px;
  padding: 10px 38px 10px 42px;
  border: 1px solid var(--sa-line);
  background: var(--sa-card);
  color: var(--sa-ink);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.sa-select select:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.sa-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
  align-items: stretch;
}

.sa-card{
  width:100%;
  height: var(--sa-card-h);
  position:relative;
  display:flex;
  flex-direction:column;
  border: 1px solid rgba(2,6,23,.08);
  border-radius: 16px;
  background: #fff;
  box-shadow: var(--sa-shadow);
  overflow:hidden;
  transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
  will-change: transform;
}
.sa-card:hover{
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(2,6,23,.12);
  border-color: rgba(158,54,58,.22);
}

.sa-media{
  width:100%;
  height: var(--sa-media-h);
  flex: 0 0 auto;
  background: var(--sa-brand);
  position:relative;
  overflow:hidden;
  user-select:none;
}
.sa-media .sa-fallback{
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
}
.sa-media img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  z-index: 1;
}

.sa-body{
  padding: 16px 16px 14px;
  display:flex;
  flex-direction:column;
  flex: 1 1 auto;
  min-height: 0;
}
.sa-h{
  font-size: 20px;
  line-height: 1.25;
  font-weight: 950;
  margin: 0 0 10px 0;
  color: var(--sa-ink);
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
  overflow-wrap:anywhere;
  word-break:break-word;
}
.sa-p{
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

.sa-date{
  margin-top:auto;
  color:#94a3b8;
  font-size: 13px;
  padding-top: 12px;
  display:flex;
  align-items:center;
  gap: 6px;
}

.sa-link{
  position:absolute;
  inset:0;
  z-index:2;
  border-radius: 16px;
}

.sa-state{
  background: var(--sa-card);
  border: 1px solid var(--sa-line);
  border-radius: 16px;
  box-shadow: var(--sa-shadow);
  padding: 18px;
  color: var(--sa-muted);
  text-align:center;
}

.sa-skeleton{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
}
.sa-sk{
  border-radius: 16px;
  border: 1px solid var(--sa-line);
  background: #fff;
  overflow:hidden;
  position:relative;
  box-shadow: 0 10px 24px rgba(2,6,23,.08);
  height: var(--sa-card-h);
}
.sa-sk:before{
  content:'';
  position:absolute; inset:0;
  transform: translateX(-60%);
  background: linear-gradient(90deg, transparent, rgba(148,163,184,.22), transparent);
  animation: saSkMove 1.15s ease-in-out infinite;
}
@keyframes saSkMove{ to{ transform: translateX(60%);} }

.sa-pagination{
  display:flex;
  justify-content:center;
  margin-top: 18px;
}
.sa-pagination .sa-pager{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  padding: 10px;
}
.sa-pagebtn{
  border:1px solid var(--sa-line);
  background: var(--sa-card);
  color: var(--sa-ink);
  border-radius: 12px;
  padding: 9px 12px;
  font-size: 13px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(2,6,23,.06);
  cursor:pointer;
  user-select:none;
}
.sa-pagebtn:hover{ background: rgba(2,6,23,.03); }
.sa-pagebtn[disabled]{ opacity:.55; cursor:not-allowed; }
.sa-pagebtn.active{
  background: rgba(201,75,80,.12);
  border-color: rgba(201,75,80,.35);
  color: var(--sa-brand);
}

@media (max-width: 992px){
  .sa-head{ flex-wrap: wrap; align-items: flex-end; }
  .sa-tools{ flex-wrap: wrap; justify-content: flex-start; }
}

@media (max-width: 640px){
  .sa-title{ font-size: 24px; white-space: normal; }
  .sa-search{ min-width: 220px; flex: 1 1 240px; }
  .sa-select{ min-width: 220px; flex: 1 1 240px; }
  .sa-wrap{ --sa-media-h: 210px; }
  .sa-media .sa-fallback{ font-size: 22px; }
}

.dynamic-navbar .navbar-nav .dropdown-menu{
  position: absolute !important;
  inset: auto !important;
}
.dynamic-navbar .dropdown-menu.is-portaled{
  position: fixed !important;
}
`,_=e=>{let t=String(e||``).replace(/<\s*br\s*\/?>/gi,` `).replace(/<\/\s*(p|div|li|h[1-6]|tr|td|th|section|article)\s*>/gi,`$& `).replace(/<\s*(p|div|li|h[1-6]|tr|td|th|section|article)\b[^>]*>/gi,` `),n=document.createElement(`div`);return n.innerHTML=t,(n.textContent||n.innerText||``).replace(/\s+/g,` `).trim()},v=e=>{if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:new Intl.DateTimeFormat(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`}).format(t)},y=e=>{let t=(e||``).toString().trim();return t?/^(data:|blob:|https?:\/\/)/i.test(t)?t:t.startsWith(`/`)?window.location.origin+t:window.location.origin+`/`+t:``},b=(e,t)=>{let n=new URL(window.location.href),r=(n.searchParams.get(`department`)||n.searchParams.get(`dept`)||``).trim();if(r)return t.has(r.toLowerCase())?t.get(r.toLowerCase()):r;let i=`${n.search} ${n.href}`.match(/d-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{12})/i);return i?i[1]:``},ee=(e,t)=>{let n=new URL(window.location.href);if(e){let r=t.get(e);r?.shortcode?(n.searchParams.set(`dept`,r.shortcode),n.searchParams.delete(`department`)):(n.searchParams.set(`department`,e),n.searchParams.delete(`dept`))}else n.searchParams.delete(`department`),n.searchParams.delete(`dept`);history.replaceState({},``,n.pathname+n.search+n.hash)},x=()=>{if(document.querySelector(`link[href*="font-awesome"]`))return;let e=document.createElement(`link`);e.rel=`stylesheet`,e.href=`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`,document.head.appendChild(e)},S=e=>String(e?.title||`Untitled`),C=e=>String(e?.body||``),w=e=>y(e?.cover_image_url||e?.cover_image||e?.image_url||``),T=e=>String(e?.uuid||e?.slug||``),E=e=>String(e?.department_id===null||e?.department_id===void 0?``:e.department_id),D=e=>String(e?.department_uuid||``);function O({item:e,viewBase:t}){let[n,r]=(0,p.useState)(!1),i=S(e),a=_(C(e)),o=v(e?.created_at||null),s=w(e),c=e?.uuid?String(e.uuid):``,l=(e?.slug?String(e.slug):``)||c,u=l?`${t}/${encodeURIComponent(l)}`:`#`,d=a;return d.length>90&&(d=d.slice(0,90).trim().replace(/[,\.;:\-\s]+$/g,``),d+=`......`),(0,m.jsxs)(`div`,{className:`sa-card`,children:[(0,m.jsxs)(`div`,{className:`sa-media`,children:[(0,m.jsx)(`div`,{className:`sa-fallback`,children:`Activity`}),s&&!n?(0,m.jsx)(`img`,{className:`sa-img`,src:s,alt:i,loading:`lazy`,onError:()=>r(!0)}):null]}),(0,m.jsxs)(`div`,{className:`sa-body`,children:[(0,m.jsx)(`div`,{className:`sa-h`,children:i}),(0,m.jsx)(`p`,{className:`sa-p`,children:d||``}),(0,m.jsxs)(`div`,{className:`sa-date`,children:[(0,m.jsx)(`i`,{className:`fa-regular fa-calendar`}),(0,m.jsxs)(`span`,{children:[`Created: `,o||`—`]})]})]}),l?(0,m.jsx)(`a`,{className:`sa-link`,href:u,"aria-label":`Open ${i}`}):(0,m.jsx)(`div`,{className:`sa-link`,title:`Missing UUID`})]})}function k(){let e=t(),n=i(u),r=i(a),v=i(s),y=i(d),w=i(o),k=i(l),[A,j]=(0,p.useState)(``),[M,N]=(0,p.useState)(``),[P,F]=(0,p.useState)(``),[I,L]=(0,p.useState)(``),[R,z]=(0,p.useState)(``),[B,V]=(0,p.useState)(1),[H,U]=(0,p.useState)(!1),[W,G]=(0,p.useState)(!1);(0,p.useEffect)(()=>{x(),e(f()),e(c()),G(!0)},[e]);let K=(0,p.useMemo)(()=>new Map((n||[]).map(e=>[e.uuid,e])),[n]),q=(0,p.useMemo)(()=>new Map((n||[]).filter(e=>e.shortcode).map(e=>[e.shortcode,e.uuid])),[n]);(0,p.useEffect)(()=>{if(!W||H||r===`loading`||w===`loading`)return;let e=b(K,q);if(e&&K.has(e)){let t=K.get(e);j(e),N(t?.id!==null&&t?.id!==void 0?String(t.id):``),F(t?.title||``)}else j(``),N(``),F(``);U(!0),V(1)},[W,H,r,w,K,q]),(0,p.useEffect)(()=>{if(H)if(ee(A,K),A){let e=K.get(A);N(e?.id!==null&&e?.id!==void 0?String(e.id):``),F(e?.title||``)}else N(``),F(``)},[H,A,K]),(0,p.useEffect)(()=>{let e=setTimeout(()=>{z(I.trim()),V(1)},260);return()=>clearTimeout(e)},[I]);let J=!W||r===`loading`||w===`loading`||!H,Y=(0,p.useMemo)(()=>{let e=Array.isArray(y)?y.slice():[];A&&(e=e.filter(e=>{let t=E(e),n=D(e);return M&&t===M||n&&n===A}));let t=R.toLowerCase();return t&&(e=e.filter(e=>{let n=S(e).toLowerCase(),r=_(C(e)).toLowerCase();return n.includes(t)||r.includes(t)})),e},[y,A,M,R]),X=Math.max(1,Math.ceil(Y.length/h)),Z=Math.min(B,X);(0,p.useEffect)(()=>{B>X&&V(X)},[X,B]);let Q=(0,p.useMemo)(()=>{let e=(Z-1)*h;return Y.slice(e,e+h)},[Y,Z]),te=P?`Student Activities for ${P}`:`Latest updates, workshops, events, and campus highlights.`,$=A?`No student activities found for this department.`:`No student activities found.`;return(0,m.jsxs)(`div`,{className:`sa-wrap`,children:[(0,m.jsx)(`style`,{children:g}),(0,m.jsxs)(`div`,{className:`sa-head`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`h1`,{className:`sa-title`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-people-group`}),`Student Activities`]}),(0,m.jsx)(`div`,{className:`sa-sub`,children:te})]}),(0,m.jsxs)(`div`,{className:`sa-tools`,children:[(0,m.jsxs)(`div`,{className:`sa-search`,children:[(0,m.jsx)(`i`,{className:`fa fa-magnifying-glass`}),(0,m.jsx)(`input`,{value:I,onChange:e=>L(e.target.value),type:`search`,placeholder:`Search activities (title/body)…`})]}),(0,m.jsxs)(`div`,{className:`sa-select`,title:`Filter by department`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-building-columns sa-select__icon`}),(0,m.jsxs)(`select`,{value:A,onChange:e=>j(e.target.value),"aria-label":`Filter by department`,children:[(0,m.jsx)(`option`,{value:``,children:`All Departments`}),(n||[]).slice().sort((e,t)=>e.title.localeCompare(t.title)).map(e=>(0,m.jsx)(`option`,{value:e.uuid,children:e.title},e.uuid))]}),(0,m.jsx)(`i`,{className:`fa-solid fa-chevron-down sa-select__caret`})]})]})]}),J?(0,m.jsx)(`div`,{className:`sa-skeleton`,children:Array.from({length:6}).map((e,t)=>(0,m.jsx)(`div`,{className:`sa-sk`},t))}):(v||k)&&!Q.length?(0,m.jsxs)(`div`,{className:`sa-state`,children:[(0,m.jsx)(`div`,{"aria-hidden":`true`,style:{width:`170px`,maxWidth:`100%`,margin:`0 auto 10px`,display:`block`,color:`var(--sa-brand)`},children:(0,m.jsxs)(`svg`,{viewBox:`0 0 220 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,style:{display:`block`,width:`100%`,height:`auto`},children:[(0,m.jsx)(`rect`,{x:`10`,y:`18`,width:`200`,height:`112`,rx:`16`,fill:`white`,stroke:`rgba(15,23,42,0.10)`}),(0,m.jsx)(`rect`,{x:`24`,y:`32`,width:`172`,height:`84`,rx:`12`,fill:`rgba(148,163,184,0.08)`,stroke:`rgba(148,163,184,0.18)`}),(0,m.jsx)(`circle`,{cx:`70`,cy:`66`,r:`16`,fill:`rgba(158,54,58,0.14)`,stroke:`currentColor`,strokeWidth:`2`}),(0,m.jsx)(`path`,{d:`M49 97c5-11 16-16 21-16s16 5 21 16`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`}),(0,m.jsx)(`rect`,{x:`100`,y:`52`,width:`72`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.20)`}),(0,m.jsx)(`rect`,{x:`100`,y:`68`,width:`54`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.16)`}),(0,m.jsx)(`rect`,{x:`100`,y:`84`,width:`64`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.12)`}),(0,m.jsx)(`circle`,{cx:`182`,cy:`26`,r:`12`,fill:`rgba(158,54,58,0.10)`,stroke:`currentColor`,strokeWidth:`1.8`}),(0,m.jsx)(`path`,{d:`M177.5 26h9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,m.jsx)(`path`,{d:`M182 21.5v9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}),$]}):Q.length?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`sa-grid`,children:Q.map(e=>(0,m.jsx)(O,{item:e,viewBase:`${window.location.origin.replace(/\/+$/,``)}/student-activities/view`},T(e)||`${e?.title||`activity`}-${e?.created_at||``}`))}),X>1?(0,m.jsx)(`div`,{className:`sa-pagination`,children:(0,m.jsxs)(`div`,{className:`sa-pager`,children:[(0,m.jsx)(`button`,{className:`sa-pagebtn`,disabled:Z<=1,onClick:()=>{V(Math.max(1,Z-1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Previous`}),(()=>{let e=Math.max(1,Z-2),t=Math.min(X,Z+2),n=[];e>1&&(n.push((0,m.jsx)(`button`,{className:`sa-pagebtn ${Z===1?`active`:``}`,onClick:()=>{V(1),window.scrollTo({top:0,behavior:`smooth`})},children:`1`},`p1`)),e>2&&n.push((0,m.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots1`)));for(let r=e;r<=t;r++)n.push((0,m.jsx)(`button`,{className:`sa-pagebtn ${Z===r?`active`:``}`,onClick:()=>{V(r),window.scrollTo({top:0,behavior:`smooth`})},children:r},r));return t<X&&(t<X-1&&n.push((0,m.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots2`)),n.push((0,m.jsx)(`button`,{className:`sa-pagebtn ${Z===X?`active`:``}`,onClick:()=>{V(X),window.scrollTo({top:0,behavior:`smooth`})},children:X},X))),n})(),(0,m.jsx)(`button`,{className:`sa-pagebtn`,disabled:Z>=X,onClick:()=>{V(Math.min(X,Z+1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Next`})]})}):null]}):(0,m.jsxs)(`div`,{className:`sa-state`,children:[(0,m.jsx)(`div`,{"aria-hidden":`true`,style:{width:`170px`,maxWidth:`100%`,margin:`0 auto 10px`,display:`block`,color:`var(--sa-brand)`},children:(0,m.jsxs)(`svg`,{viewBox:`0 0 220 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,style:{display:`block`,width:`100%`,height:`auto`},children:[(0,m.jsx)(`rect`,{x:`10`,y:`18`,width:`200`,height:`112`,rx:`16`,fill:`white`,stroke:`rgba(15,23,42,0.10)`}),(0,m.jsx)(`rect`,{x:`24`,y:`32`,width:`172`,height:`84`,rx:`12`,fill:`rgba(148,163,184,0.08)`,stroke:`rgba(148,163,184,0.18)`}),(0,m.jsx)(`circle`,{cx:`70`,cy:`66`,r:`16`,fill:`rgba(158,54,58,0.14)`,stroke:`currentColor`,strokeWidth:`2`}),(0,m.jsx)(`path`,{d:`M49 97c5-11 16-16 21-16s16 5 21 16`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`}),(0,m.jsx)(`rect`,{x:`100`,y:`52`,width:`72`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.20)`}),(0,m.jsx)(`rect`,{x:`100`,y:`68`,width:`54`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.16)`}),(0,m.jsx)(`rect`,{x:`100`,y:`84`,width:`64`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.12)`}),(0,m.jsx)(`circle`,{cx:`182`,cy:`26`,r:`12`,fill:`rgba(158,54,58,0.10)`,stroke:`currentColor`,strokeWidth:`1.8`}),(0,m.jsx)(`path`,{d:`M177.5 26h9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,m.jsx)(`path`,{d:`M182 21.5v9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}),$]})]})}export{k as default};