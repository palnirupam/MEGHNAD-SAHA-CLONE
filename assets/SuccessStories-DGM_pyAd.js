import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./successStoriesSlice-RItf2uPJ.js";var p=e(n(),1),m=r(),h=9,g=String.raw`
.ss-wrap{
  --ss-brand: var(--primary-color, #9E363A);
  --ss-ink: #0f172a;
  --ss-muted: #64748b;
  --ss-bg: var(--page-bg, #ffffff);
  --ss-card: var(--surface, #ffffff);
  --ss-line: var(--line-soft, rgba(15,23,42,.10));
  --ss-shadow: 0 10px 24px rgba(2,6,23,.08);

  --ss-card-h: 426.4px;
  --ss-media-h: 240px;

  max-width: 1320px;
  margin: 18px auto 54px;
  padding: 0 12px;
  background: transparent;
  position: relative;
  overflow: visible;
}

/* Header */
.ss-head{
  background: var(--ss-card);
  border: 1px solid var(--ss-line);
  border-radius: 16px;
  box-shadow: var(--ss-shadow);
  padding: 14px 16px;
  margin-bottom: 16px;

  display:flex;
  gap: 12px;
  align-items: flex-end;
  justify-content: space-between;
}
.ss-head > div:first-child{
  flex: 1 1 auto;
  min-width: 260px;
}

.ss-title{
  margin: 0;
  font-weight: 950;
  letter-spacing: .2px;
  color: var(--ss-ink);
  font-size: 28px;
  display:flex;
  align-items:center;
  gap: 10px;
  white-space: nowrap;
}
.ss-title i{ color: var(--ss-brand); }
.ss-sub{
  margin: 6px 0 0;
  color: var(--ss-muted);
  font-size: 14px;
}

.ss-tools{
  display:flex;
  gap: 10px;
  align-items:center;
  flex-wrap: nowrap;
  flex: 0 0 auto;
}

/* Search */
.ss-search{
  position: relative;
  min-width: 260px;
  max-width: 520px;
  flex: 1 1 320px;
}
.ss-search i{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .65;
  color: var(--ss-muted);
  pointer-events:none;
}
.ss-search input{
  width:100%;
  height: 42px;
  border-radius: 999px;
  padding: 11px 12px 11px 42px;
  border: 1px solid var(--ss-line);
  background: var(--ss-card);
  color: var(--ss-ink);
  outline: none;
}
.ss-search input:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

/* Dept dropdown */
.ss-select{
  position: relative;
  min-width: 260px;
  max-width: 360px;
  flex: 0 1 320px;
}
.ss-select__icon{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--ss-muted);
  pointer-events:none;
  font-size: 14px;
}
.ss-select__caret{
  position:absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--ss-muted);
  pointer-events:none;
  font-size: 12px;
}
.ss-select select{
  width: 100%;
  height: 42px;
  border-radius: 999px;
  padding: 10px 38px 10px 42px;
  border: 1px solid var(--ss-line);
  background: var(--ss-card);
  color: var(--ss-ink);
  outline: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.ss-select select:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

/* Grid */
.ss-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
  align-items: stretch;
}

/* Card */
.ss-card{
  width:100%;
  height: var(--ss-card-h);
  position:relative;
  display:flex;
  flex-direction:column;
  border: 1px solid rgba(2,6,23,.08);
  border-radius: 16px;
  background: #fff;
  box-shadow: var(--ss-shadow);
  overflow:hidden;
  transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
  will-change: transform;
}
.ss-card:hover{
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(2,6,23,.12);
  border-color: rgba(158,54,58,.22);
}

.ss-media{
  width:100%;
  height: var(--ss-media-h);
  flex: 0 0 auto;
  background: var(--ss-brand);
  position:relative;
  overflow:hidden;
  user-select:none;
}
.ss-media .ss-fallback{
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
}
.ss-media img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  z-index: 1;
}

.ss-body{
  padding: 16px 16px 14px;
  display:flex;
  flex-direction:column;
  flex: 1 1 auto;
  min-height: 0;
}
.ss-h{
  font-size: 20px;
  line-height: 1.25;
  font-weight: 950;
  margin: 0 0 8px 0;
  color: var(--ss-ink);

  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;

  overflow-wrap:anywhere;
  word-break:break-word;
}
.ss-subline{
  margin: 0 0 10px 0;
  color: #334155;
  font-weight: 800;
  font-size: 13px;

  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
  overflow:hidden;

  min-height: 17px;
}
.ss-p{
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

.ss-date{
  margin-top:auto;
  color:#94a3b8;
  font-size: 13px;
  padding-top: 12px;
  display:flex;
  align-items:center;
  gap: 6px;
}

.ss-link{
  position:absolute;
  inset:0;
  z-index:2;
  border-radius: 16px;
}

/* State / empty */
.ss-state{
  background: var(--ss-card);
  border: 1px solid var(--ss-line);
  border-radius: 16px;
  box-shadow: var(--ss-shadow);
  padding: 18px;
  color: var(--ss-muted);
  text-align:center;
}

/* Skeleton */
.ss-skeleton{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
}
.ss-sk{
  border-radius: 16px;
  border: 1px solid var(--ss-line);
  background: #fff;
  overflow:hidden;
  position:relative;
  box-shadow: 0 10px 24px rgba(2,6,23,.08);
  height: var(--ss-card-h);
}
.ss-sk:before{
  content:'';
  position:absolute; inset:0;
  transform: translateX(-60%);
  background: linear-gradient(90deg, transparent, rgba(148,163,184,.22), transparent);
  animation: ssSkMove 1.15s ease-in-out infinite;
}
@keyframes ssSkMove{ to{ transform: translateX(60%);} }

/* Pagination */
.ss-pagination{
  display:flex;
  justify-content:center;
  margin-top: 18px;
}
.ss-pagination .ss-pager{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  padding: 10px;
}
.ss-pagebtn{
  border:1px solid var(--ss-line);
  background: var(--ss-card);
  color: var(--ss-ink);
  border-radius: 12px;
  padding: 9px 12px;
  font-size: 13px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(2,6,23,.06);
  cursor:pointer;
  user-select:none;
}
.ss-pagebtn:hover{ background: rgba(2,6,23,.03); }
.ss-pagebtn[disabled]{ opacity:.55; cursor:not-allowed; }
.ss-pagebtn.active{
  background: rgba(201,75,80,.12);
  border-color: rgba(201,75,80,.35);
  color: var(--ss-brand);
}

@media (max-width: 640px){
  .ss-head{ flex-wrap: wrap; align-items: flex-end; }
  .ss-tools{ flex-wrap: wrap; }

  .ss-title{ font-size: 24px; white-space: normal; }
  .ss-search{ min-width: 220px; flex: 1 1 240px; }
  .ss-select{ min-width: 220px; flex: 1 1 240px; }
  .ss-wrap{ --ss-media-h: 210px; }
  .ss-media .ss-fallback{ font-size: 22px; }
}

/* Bootstrap guard */
.dynamic-navbar .navbar-nav .dropdown-menu{
  position: absolute !important;
  inset: auto !important;
}
.dynamic-navbar .dropdown-menu.is-portaled{
  position: fixed !important;
}
`,_=e=>{let t=String(e||``).replace(/<\s*br\s*\/?>/gi,` `).replace(/<\/\s*(p|div|li|h[1-6]|tr|td|th|section|article)\s*>/gi,`$& `).replace(/<\s*(p|div|li|h[1-6]|tr|td|th|section|article)\b[^>]*>/gi,` `),n=document.createElement(`div`);return n.innerHTML=t,(n.textContent||n.innerText||``).replace(/\s+/g,` `).trim()},v=e=>{if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:new Intl.DateTimeFormat(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`}).format(t)},y=e=>{let t=(e||``).toString().trim();return t?/^(data:|blob:|https?:\/\/)/i.test(t)?t:t.startsWith(`/`)?window.location.origin+t:window.location.origin+`/`+t:``},b=(e,t)=>{let n=new URL(window.location.href),r=(n.searchParams.get(`department`)||n.searchParams.get(`dept`)||``).trim();if(r)return t.has(r.toLowerCase())?t.get(r.toLowerCase()):r;let i=`${n.search} ${n.href}`.match(/d-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{12})/i);return i?i[1]:``},x=(e,t)=>{let n=new URL(window.location.href);if(e){let r=t.get(e);r?.shortcode?(n.searchParams.set(`dept`,r.shortcode),n.searchParams.delete(`department`)):(n.searchParams.set(`department`,e),n.searchParams.delete(`dept`))}else n.searchParams.delete(`department`),n.searchParams.delete(`dept`);history.replaceState({},``,n.pathname+n.search+n.hash)},S=()=>{if(document.querySelector(`link[href*="font-awesome"]`))return;let e=document.createElement(`link`);e.rel=`stylesheet`,e.href=`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`,document.head.appendChild(e)},C=e=>String(e?.name||`Student`),w=e=>String(e?.title||``),T=e=>String(e?.quote||e?.description||``),E=e=>y(e?.photo_full_url||e?.photo_url||e?.photo||e?.cover_image_url||e?.cover_image||``),D=e=>String(e?.department_id===null||e?.department_id===void 0?``:e.department_id),O=e=>String(e?.department_uuid||``);function k({item:e,viewBase:t}){let[n,r]=(0,p.useState)(!1),i=C(e),a=w(e),o=_(T(e)),s=v(e?.created_at||null),c=e?.uuid?String(e.uuid):``,l=(e?.slug?String(e.slug):``)||c,u=l?`${t}/${encodeURIComponent(l)}`:`#`,d=E(e),f=o;return f.length>110&&(f=f.slice(0,110).trim().replace(/[,\.;:\-\s]+$/g,``),f+=`......`),(0,m.jsxs)(`div`,{className:`ss-card`,children:[(0,m.jsxs)(`div`,{className:`ss-media`,children:[(0,m.jsx)(`div`,{className:`ss-fallback`,children:`Success Story`}),d&&!n?(0,m.jsx)(`img`,{className:`ss-img`,src:d,alt:i,loading:`lazy`,onError:()=>r(!0)}):null]}),(0,m.jsxs)(`div`,{className:`ss-body`,children:[(0,m.jsx)(`div`,{className:`ss-h`,children:i}),(0,m.jsx)(`div`,{className:`ss-subline`,children:a||`\xA0`}),(0,m.jsx)(`p`,{className:`ss-p`,children:f||``}),(0,m.jsxs)(`div`,{className:`ss-date`,children:[(0,m.jsx)(`i`,{className:`fa-regular fa-calendar`}),(0,m.jsxs)(`span`,{children:[`Created: `,s||`—`]})]})]}),l?(0,m.jsx)(`a`,{className:`ss-link`,href:u,"aria-label":`Open ${i}`}):(0,m.jsx)(`div`,{className:`ss-link`,title:`Missing identifier`})]})}function A(){let e=t(),n=i(u),r=i(a),v=i(s),y=i(d),E=i(o),A=i(l),[j,M]=(0,p.useState)(``),[N,P]=(0,p.useState)(``),[F,I]=(0,p.useState)(``),[L,R]=(0,p.useState)(``),[z,B]=(0,p.useState)(``),[V,H]=(0,p.useState)(1),[U,W]=(0,p.useState)(!1),[G,K]=(0,p.useState)(!1);(0,p.useEffect)(()=>{S(),e(f()),e(c()),K(!0)},[e]);let q=(0,p.useMemo)(()=>new Map((n||[]).map(e=>[e.uuid,e])),[n]),J=(0,p.useMemo)(()=>new Map((n||[]).filter(e=>e.shortcode).map(e=>[e.shortcode,e.uuid])),[n]);(0,p.useEffect)(()=>{if(!G||U||r===`loading`||E===`loading`)return;let e=b(q,J);if(e&&q.has(e)){let t=q.get(e);M(e),P(t?.id!==null&&t?.id!==void 0?String(t.id):``),I(t?.title||``)}else M(``),P(``),I(``);W(!0),H(1)},[G,U,r,E,q,J]),(0,p.useEffect)(()=>{if(U)if(x(j,q),j){let e=q.get(j);P(e?.id!==null&&e?.id!==void 0?String(e.id):``),I(e?.title||``)}else P(``),I(``)},[U,j,q]),(0,p.useEffect)(()=>{let e=setTimeout(()=>{B(L.trim()),H(1)},260);return()=>clearTimeout(e)},[L]);let Y=!G||r===`loading`||E===`loading`||!U,X=(0,p.useMemo)(()=>{let e=Array.isArray(y)?y.slice():[];j&&(e=e.filter(e=>{let t=D(e),n=O(e);return N&&t===N||n&&n===j}));let t=z.toLowerCase();return t&&(e=e.filter(e=>{let n=C(e).toLowerCase(),r=w(e).toLowerCase(),i=_(T(e)).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)})),e},[y,j,N,z]),Z=Math.max(1,Math.ceil(X.length/h)),Q=Math.min(V,Z);(0,p.useEffect)(()=>{V>Z&&H(Z)},[Z,V]);let $=(0,p.useMemo)(()=>{let e=(Q-1)*h;return X.slice(e,e+h)},[X,Q]),ee=F?`Success stories for ${F}`:`Alumni journeys, placements, and inspiring wins.`,te=j?`No success stories found for this department.`:`No success stories found.`;return(0,m.jsxs)(`div`,{className:`ss-wrap`,children:[(0,m.jsx)(`style`,{children:g}),(0,m.jsxs)(`div`,{className:`ss-head`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`h1`,{className:`ss-title`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-trophy`}),`Success Stories`]}),(0,m.jsx)(`div`,{className:`ss-sub`,children:ee})]}),(0,m.jsxs)(`div`,{className:`ss-tools`,children:[(0,m.jsxs)(`div`,{className:`ss-search`,children:[(0,m.jsx)(`i`,{className:`fa fa-magnifying-glass`}),(0,m.jsx)(`input`,{value:L,onChange:e=>R(e.target.value),type:`search`,placeholder:`Search success stories (name/title/quote)…`})]}),(0,m.jsxs)(`div`,{className:`ss-select`,title:`Filter by department`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-building-columns ss-select__icon`}),(0,m.jsxs)(`select`,{value:j,onChange:e=>M(e.target.value),"aria-label":`Filter by department`,children:[(0,m.jsx)(`option`,{value:``,children:`All Departments`}),(n||[]).slice().sort((e,t)=>e.title.localeCompare(t.title)).map(e=>(0,m.jsx)(`option`,{value:e.uuid,children:e.title},e.uuid))]}),(0,m.jsx)(`i`,{className:`fa-solid fa-chevron-down ss-select__caret`})]})]})]}),Y?(0,m.jsx)(`div`,{className:`ss-skeleton`,children:Array.from({length:6}).map((e,t)=>(0,m.jsx)(`div`,{className:`ss-sk`},t))}):(v||A)&&!$.length?(0,m.jsxs)(`div`,{className:`ss-state`,children:[(0,m.jsx)(`div`,{style:{fontSize:34,opacity:.6,marginBottom:6},children:(0,m.jsx)(`i`,{className:`fa-regular fa-face-frown`})}),`No success stories found.`]}):$.length?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`ss-grid`,children:$.map(e=>(0,m.jsx)(k,{item:e,viewBase:`${window.location.origin.replace(/\/+$/,``)}/success-stories/view`},e?.uuid||e?.slug||e?.id||C(e)))}),Z>1?(0,m.jsx)(`div`,{className:`ss-pagination`,children:(0,m.jsxs)(`div`,{className:`ss-pager`,children:[(0,m.jsx)(`button`,{className:`ss-pagebtn`,disabled:Q<=1,onClick:()=>{H(Math.max(1,Q-1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Previous`}),(()=>{let e=Math.max(1,Q-2),t=Math.min(Z,Q+2),n=[];e>1&&(n.push((0,m.jsx)(`button`,{className:`ss-pagebtn ${Q===1?`active`:``}`,onClick:()=>{H(1),window.scrollTo({top:0,behavior:`smooth`})},children:`1`},`p1`)),e>2&&n.push((0,m.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots1`)));for(let r=e;r<=t;r++)n.push((0,m.jsx)(`button`,{className:`ss-pagebtn ${Q===r?`active`:``}`,onClick:()=>{H(r),window.scrollTo({top:0,behavior:`smooth`})},children:r},r));return t<Z&&(t<Z-1&&n.push((0,m.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots2`)),n.push((0,m.jsx)(`button`,{className:`ss-pagebtn ${Q===Z?`active`:``}`,onClick:()=>{H(Z),window.scrollTo({top:0,behavior:`smooth`})},children:Z},Z))),n})(),(0,m.jsx)(`button`,{className:`ss-pagebtn`,disabled:Q>=Z,onClick:()=>{H(Math.min(Z,Q+1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Next`})]})}):null]}):(0,m.jsxs)(`div`,{className:`ss-state`,children:[(0,m.jsx)(`div`,{style:{fontSize:34,opacity:.6,marginBottom:6},children:(0,m.jsx)(`i`,{className:`fa-regular fa-face-frown`})}),te]})]})}export{A as default};