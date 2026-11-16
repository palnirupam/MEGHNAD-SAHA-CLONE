import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f}from"./T_PCellSlice-BMgUpaAb.js";var p=e(n(),1),m=r(),h=9,g=String.raw`
.pox-wrap{
  --pox-brand: var(--primary-color, #9E363A);
  --pox-ink: #0f172a;
  --pox-muted: #64748b;
  --pox-bg: var(--page-bg, #ffffff);
  --pox-card: var(--surface, #ffffff);
  --pox-line: var(--line-soft, rgba(15,23,42,.10));
  --pox-shadow: 0 10px 24px rgba(2,6,23,.08);

  --pox-card-h: 426.4px;
  --pox-media-h: 240px;

  max-width: 1320px;
  margin: 18px auto 54px;
  padding: 0 12px;
  background: transparent;
  position: relative;
  overflow: visible;
}

.pox-head{
  background: var(--pox-card);
  border: 1px solid var(--pox-line);
  border-radius: 16px;
  box-shadow: var(--pox-shadow);
  padding: 14px 16px;
  margin-bottom: 16px;
  display:flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}
.pox-title{
  margin: 0;
  font-weight: 950;
  letter-spacing: .2px;
  color: var(--pox-ink);
  font-size: 28px;
  display:flex;
  align-items:center;
  gap: 10px;
  white-space: nowrap;
}
.pox-title i{ color: var(--pox-brand); }
.pox-sub{
  margin: 6px 0 0;
  color: var(--pox-muted);
  font-size: 14px;
}

.pox-tools{
  display:flex;
  gap: 10px;
  align-items:center;
  flex-wrap: nowrap;
}

.pox-search{
  position: relative;
  min-width: 260px;
  max-width: 520px;
  flex: 1 1 320px;
}
.pox-search i{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .65;
  color: var(--pox-muted);
  pointer-events:none;
}
.pox-search input{
  width:100%;
  height: 42px;
  border-radius: 999px;
  padding: 11px 12px 11px 42px;
  border: 1px solid var(--pox-line);
  background: var(--pox-card);
  color: var(--pox-ink);
  outline: none;
}
.pox-search input:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.pox-select{
  position: relative;
  min-width: 260px;
  max-width: 360px;
  flex: 0 1 320px;
}
.pox-select__icon{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--pox-muted);
  pointer-events:none;
  font-size: 14px;
}
.pox-select__caret{
  position:absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--pox-muted);
  pointer-events:none;
  font-size: 12px;
}
.pox-select select{
  width: 100%;
  height: 42px;
  border-radius: 999px;
  padding: 10px 38px 10px 42px;
  border: 1px solid var(--pox-line);
  background: var(--pox-card);
  color: var(--pox-ink);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.pox-select select:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.pox-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
  align-items: stretch;
}

.pox-card{
  width:100%;
  height: var(--pox-card-h);
  position:relative;
  display:flex;
  flex-direction:column;
  border: 1px solid rgba(2,6,23,.08);
  border-radius: 16px;
  background: #fff;
  box-shadow: var(--pox-shadow);
  overflow:hidden;
  transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
  will-change: transform;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.pox-card:hover{
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(2,6,23,.12);
  border-color: rgba(158,54,58,.22);
}

.pox-media{
  width:100%;
  height: var(--pox-media-h);
  flex: 0 0 auto;
  background: var(--pox-brand);
  position:relative;
  overflow:hidden;
  user-select:none;
}
.pox-media .pox-fallback{
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
  gap:10px;
}
.pox-media .pox-fallback i{ opacity:.9; }
.pox-media img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  z-index: 1;
}

.pox-body{
  padding: 16px 16px 14px;
  display:flex;
  flex-direction:column;
  flex: 1 1 auto;
  min-height: 0;
}
.pox-h{
  font-size: 20px;
  line-height: 1.25;
  font-weight: 950;
  margin: 0 0 10px 0;
  color: var(--pox-ink);
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
  overflow-wrap:anywhere;
  word-break:break-word;
}
.pox-p{
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

.pox-meta{
  margin-top:auto;
  color:#94a3b8;
  font-size: 13px;
  padding-top: 12px;
  display:flex;
  align-items:center;
  gap: 10px;
  flex-wrap:wrap;
}
.pox-meta .it{
  display:flex;
  align-items:center;
  gap: 6px;
}

.pox-state{
  background: var(--pox-card);
  border: 1px solid var(--pox-line);
  border-radius: 16px;
  box-shadow: var(--pox-shadow);
  padding: 18px;
  color: var(--pox-muted);
  text-align:center;
}

.pox-skeleton{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
}
.pox-sk{
  border-radius: 16px;
  border: 1px solid var(--pox-line);
  background: #fff;
  overflow:hidden;
  position:relative;
  box-shadow: 0 10px 24px rgba(2,6,23,.08);
  height: var(--pox-card-h);
}
.pox-sk:before{
  content:'';
  position:absolute; inset:0;
  transform: translateX(-60%);
  background: linear-gradient(90deg, transparent, rgba(148,163,184,.22), transparent);
  animation: poxSkMove 1.15s ease-in-out infinite;
}
@keyframes poxSkMove{ to{ transform: translateX(60%);} }

.pox-pagination{
  display:flex;
  justify-content:center;
  margin-top: 18px;
}
.pox-pagination .pox-pager{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  padding: 10px;
}
.pox-pagebtn{
  border:1px solid var(--pox-line);
  background: var(--pox-card);
  color: var(--pox-ink);
  border-radius: 12px;
  padding: 9px 12px;
  font-size: 13px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(2,6,23,.06);
  cursor:pointer;
  user-select:none;
}
.pox-pagebtn:hover{ background: rgba(2,6,23,.03); }
.pox-pagebtn[disabled]{ opacity:.55; cursor:not-allowed; }
.pox-pagebtn.active{
  background: rgba(201,75,80,.12);
  border-color: rgba(201,75,80,.35);
  color: var(--pox-brand);
}

@media (max-width: 992px){
  .pox-head{ flex-wrap: wrap; align-items: flex-end; }
  .pox-tools{ flex-wrap: wrap; }
}

@media (max-width: 640px){
  .pox-title{ font-size: 24px; }
  .pox-search{ min-width: 220px; flex: 1 1 240px; }
  .pox-select{ min-width: 220px; flex: 1 1 240px; }
  .pox-wrap{ --pox-media-h: 210px; }
  .pox-media .pox-fallback{ font-size: 22px; }
}

.dynamic-navbar .navbar-nav .dropdown-menu{
  position: absolute !important;
  inset: auto !important;
}
.dynamic-navbar .dropdown-menu.is-portaled{
  position: fixed !important;
}
`,_=e=>{let t=document.createElement(`div`);return t.innerHTML=String(e||``),(t.textContent||t.innerText||``).replace(/\s+/g,` `).trim()},v=e=>{let t=(e||``).toString().trim();return t?/^(data:|blob:|https?:\/\/)/i.test(t)?t:t.startsWith(`/`)?window.location.origin+t:window.location.origin+`/`+t:``},y=(e,t)=>{for(let n of t){let t=e?.[n];if(t!=null&&String(t).trim()!==``)return t}return``},b=e=>String(y(e,[`name`,`user_name`,`full_name`])||`Training & Placement Official`),x=e=>String(y(e,[`email`])||``),S=e=>String(y(e,[`designation`])||e?.user?.designation||``),C=e=>v(y(e,[`image_full_url`,`image_url`,`photo_url`,`profile_image_url`])||y(e,[`image`])||``),w=e=>{let t=y(e,[`department_id`,`dept_id`,`departmentId`,`deptId`,`department`]);return t==null||String(t).trim()===``?``:String(t).trim()},T=e=>{let t=y(e,[`department_uuid`,`dept_uuid`,`departmentUuid`,`deptUuid`]);return String(t||``).trim()},E=e=>e?`${window.location.origin.replace(/\/+$/,``)}/user/profile/${encodeURIComponent(e)}`:`#`,D=(e,t)=>{let n=new URL(window.location.href),r=(n.searchParams.get(`department`)||n.searchParams.get(`dept`)||``).trim();if(r)return t.has(r.toLowerCase())?t.get(r.toLowerCase()):r;let i=`${n.search} ${n.href}`.match(/d-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i);return i?i[1]:``},O=(e,t)=>{let n=new URL(window.location.href);if(e){let r=t.get(e);r?.shortcode?(n.searchParams.set(`dept`,r.shortcode),n.searchParams.delete(`department`)):(n.searchParams.set(`department`,e),n.searchParams.delete(`dept`))}else n.searchParams.delete(`department`),n.searchParams.delete(`dept`);history.replaceState({},``,n.pathname+n.search+n.hash)},k=()=>{if(document.querySelector(`link[href*="font-awesome"]`))return;let e=document.createElement(`link`);e.rel=`stylesheet`,e.href=`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`,document.head.appendChild(e)};function A({item:e,deptName:t}){let[n,r]=(0,p.useState)(!1),i=b(e),a=_(S(e)),o=x(e),s=C(e),c=y(e,[`uuid`,`user_uuid`,`id`])||``;return(0,m.jsxs)(`a`,{className:`pox-card`,href:E(c),onClick:e=>{c||e.preventDefault()},"aria-label":c?`Open ${i} profile`:`${i} profile unavailable`,children:[(0,m.jsxs)(`div`,{className:`pox-media`,children:[(0,m.jsxs)(`div`,{className:`pox-fallback`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-user-tie`}),`Training & Placement Official`]}),s&&!n?(0,m.jsx)(`img`,{className:`pox-img`,src:s,alt:i,loading:`lazy`,onError:()=>r(!0)}):null]}),(0,m.jsxs)(`div`,{className:`pox-body`,children:[(0,m.jsx)(`div`,{className:`pox-h`,children:i}),a?(0,m.jsx)(`p`,{className:`pox-p`,children:a}):null,(0,m.jsxs)(`div`,{className:`pox-meta`,children:[(0,m.jsxs)(`div`,{className:`it`,title:`Email`,children:[(0,m.jsx)(`i`,{className:`fa-regular fa-envelope`}),(0,m.jsx)(`span`,{children:o||`—`})]}),(0,m.jsxs)(`div`,{className:`it`,title:`Department`,children:[(0,m.jsx)(`i`,{className:`fa-regular fa-building`}),(0,m.jsx)(`span`,{children:t||`All Departments`})]})]})]})]})}function j(){let e=t(),n=i(s),r=i(u),v=i(a),y=i(o),C=i(c),E=i(f),[j,M]=(0,p.useState)(``),[N,ee]=(0,p.useState)(``),[P,F]=(0,p.useState)(``),[I,L]=(0,p.useState)(1),[R,z]=(0,p.useState)(!1),[B,V]=(0,p.useState)(!1);(0,p.useEffect)(()=>{k(),e(l()),e(d()),V(!0)},[e]);let H=(0,p.useMemo)(()=>new Map((n||[]).map(e=>[e.uuid,e])),[n]),U=(0,p.useMemo)(()=>new Map((n||[]).filter(e=>e.shortcode).map(e=>[e.shortcode,e.uuid])),[n]),W=j&&H.get(j)||null,G=W?.id!==null&&W?.id!==void 0?String(W.id):``,K=W?.title||``;(0,p.useEffect)(()=>{!B||R||r===`loading`||C===`loading`||r===`idle`&&C===`idle`||(M(D(H,U)||``),z(!0),L(1))},[B,R,r,C,H,U]),(0,p.useEffect)(()=>{R&&O(j,H)},[R,j,H]),(0,p.useEffect)(()=>{let e=setTimeout(()=>{F(N.trim()),L(1)},260);return()=>clearTimeout(e)},[N]);let q=!B||r===`loading`||C===`loading`||!R,J=(0,p.useMemo)(()=>{let e=Array.isArray(y)?y.slice():[];j&&(e=e.filter(e=>{let t=w(e),n=T(e);return G&&t===G||n&&n===j}));let t=P.toLowerCase();return t&&(e=e.filter(e=>{let n=b(e).toLowerCase(),r=_(S(e)).toLowerCase(),i=x(e).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)})),e},[y,j,G,P]),Y=Math.max(1,Math.ceil(J.length/h)),X=Math.min(I,Y);(0,p.useEffect)(()=>{I>Y&&L(Y)},[Y,I]);let Z=(0,p.useMemo)(()=>{let e=(X-1)*h;return J.slice(e,e+h)},[J,X]),Q=K?`Training & Placement Officials for ${K}`:`Meet our Placement & Training team.`,$=j?`No training & placement officials found for this department.`:`No training & placement officials found.`;return(0,m.jsxs)(`div`,{className:`pox-wrap`,children:[(0,m.jsx)(`style`,{children:g}),(0,m.jsxs)(`div`,{className:`pox-head`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`h1`,{className:`pox-title`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-bullhorn`}),`Training & Placement Officials`]}),(0,m.jsx)(`div`,{className:`pox-sub`,children:Q})]}),(0,m.jsx)(`div`,{className:`pox-tools`,children:(0,m.jsxs)(`div`,{className:`pox-select`,title:`Filter by department`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-building-columns pox-select__icon`}),(0,m.jsxs)(`select`,{value:j,onChange:e=>M(e.target.value),"aria-label":`Filter by department`,children:[(0,m.jsx)(`option`,{value:``,children:`All Departments`}),(n||[]).slice().sort((e,t)=>e.title.localeCompare(t.title)).map(e=>(0,m.jsx)(`option`,{value:e.uuid,children:e.title},e.uuid))]}),(0,m.jsx)(`i`,{className:`fa-solid fa-chevron-down pox-select__caret`})]})})]}),q?(0,m.jsx)(`div`,{className:`pox-skeleton`,children:Array.from({length:6}).map((e,t)=>(0,m.jsx)(`div`,{className:`pox-sk`},t))}):(v||E)&&!Z.length?(0,m.jsxs)(`div`,{className:`pox-state`,children:[(0,m.jsx)(`div`,{style:{fontSize:34,opacity:.6,marginBottom:6},children:(0,m.jsx)(`i`,{className:`fa-regular fa-face-frown`})}),`No training & placement officials found.`,K?(0,m.jsxs)(`div`,{style:{marginTop:6,fontSize:12.5,opacity:.95},children:[`Department: `,(0,m.jsx)(`b`,{children:K})]}):null]}):Z.length?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`pox-grid`,children:Z.map(e=>(0,m.jsx)(A,{item:e,deptName:K||`All Departments`},e?.uuid||e?.user_uuid||e?.id||b(e)))}),Y>1?(0,m.jsx)(`div`,{className:`pox-pagination`,children:(0,m.jsxs)(`div`,{className:`pox-pager`,children:[(0,m.jsx)(`button`,{className:`pox-pagebtn`,disabled:X<=1,onClick:()=>{L(Math.max(1,X-1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Previous`}),(()=>{let e=Math.max(1,X-2),t=Math.min(Y,X+2),n=[];e>1&&(n.push((0,m.jsx)(`button`,{className:`pox-pagebtn ${X===1?`active`:``}`,onClick:()=>{L(1),window.scrollTo({top:0,behavior:`smooth`})},children:`1`},`p1`)),e>2&&n.push((0,m.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots1`)));for(let r=e;r<=t;r++)n.push((0,m.jsx)(`button`,{className:`pox-pagebtn ${X===r?`active`:``}`,onClick:()=>{L(r),window.scrollTo({top:0,behavior:`smooth`})},children:r},r));return t<Y&&(t<Y-1&&n.push((0,m.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots2`)),n.push((0,m.jsx)(`button`,{className:`pox-pagebtn ${X===Y?`active`:``}`,onClick:()=>{L(Y),window.scrollTo({top:0,behavior:`smooth`})},children:Y},Y))),n})(),(0,m.jsx)(`button`,{className:`pox-pagebtn`,disabled:X>=Y,onClick:()=>{L(Math.min(Y,X+1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Next`})]})}):null]}):(0,m.jsxs)(`div`,{className:`pox-state`,children:[(0,m.jsx)(`div`,{style:{fontSize:34,opacity:.6,marginBottom:6},children:(0,m.jsx)(`i`,{className:`fa-regular fa-face-frown`})}),$]})]})}export{j as default};