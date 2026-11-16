import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{A as t,C as n,E as r,I as i,M as a,p as o,w as s}from"./react-vendor-CMR_y1jB.js";import{t as c}from"./noticeSlice-DdVhUyiX.js";import{a as l,i as u,n as d,r as f}from"./achievementSlice-BUkw3rB0.js";var p=e(i(),1),m=o(),h=e=>{let t=String(e||``).replace(/<\s*br\s*\/?>/gi,` `).replace(/<\/\s*(p|div|li|h[1-6]|tr|td|th|section|article)\s*>/gi,`$& `).replace(/<\s*(p|div|li|h[1-6]|tr|td|th|section|article)\b[^>]*>/gi,` `),n=document.createElement(`div`);return n.innerHTML=t,(n.textContent||n.innerText||``).replace(/\s+/g,` `).trim()},g=(e,t=90)=>{let n=h(e||``);return n.length<=t?n:n.slice(0,t).trim().replace(/[,\.;:\-\s]+$/g,``)+`......`},_=e=>{if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:new Intl.DateTimeFormat(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`}).format(t)},v=(e,t=``)=>{let n=String(e||``).trim();if(!n)return``;if(/^(data:|blob:|https?:\/\/)/i.test(n))return n;if(n.startsWith(`//`))return`${window.location.protocol}${n}`;let r=String(t||``).trim().replace(/\/+$/,``);return n.startsWith(`/`)?r?`${r}${n}`:`${window.location.origin}${n}`:r?`${r}/${n.replace(/^\/+/,``)}`:`${window.location.origin}/${n.replace(/^\/+/,``)}`},y=e=>String(e?.workflow_status||``).toLowerCase()===`approved`,b=(e,t)=>{let n=[],r=Math.max(1,e-2),i=Math.min(t,e+2);r>1&&(n.push(1),r>2&&n.push(`...`));for(let e=r;e<=i;e+=1)n.push(e);return i<t&&(i<t-1&&n.push(`...`),n.push(t)),n};function x(){return(0,m.jsx)(`div`,{className:`achx-skeleton`,children:Array.from({length:6}).map((e,t)=>(0,m.jsx)(`div`,{className:`achx-sk`},t))})}function S({deptName:e}){return(0,m.jsxs)(`div`,{className:`achx-state`,children:[(0,m.jsx)(`div`,{className:`achx-empty-ill`,"aria-hidden":`true`,children:(0,m.jsxs)(`svg`,{viewBox:`0 0 220 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,style:{display:`block`,width:`100%`,height:`auto`},children:[(0,m.jsx)(`rect`,{x:`10`,y:`18`,width:`200`,height:`112`,rx:`16`,fill:`white`,stroke:`rgba(15,23,42,0.10)`}),(0,m.jsx)(`rect`,{x:`24`,y:`32`,width:`172`,height:`84`,rx:`12`,fill:`rgba(148,163,184,0.08)`,stroke:`rgba(148,163,184,0.18)`}),(0,m.jsx)(`circle`,{cx:`70`,cy:`66`,r:`16`,fill:`rgba(158,54,58,0.14)`,stroke:`currentColor`,strokeWidth:`2`}),(0,m.jsx)(`path`,{d:`M49 97c5-11 16-16 21-16s16 5 21 16`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`}),(0,m.jsx)(`rect`,{x:`100`,y:`52`,width:`72`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.20)`}),(0,m.jsx)(`rect`,{x:`100`,y:`68`,width:`54`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.16)`}),(0,m.jsx)(`rect`,{x:`100`,y:`84`,width:`64`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.12)`}),(0,m.jsx)(`circle`,{cx:`182`,cy:`26`,r:`12`,fill:`rgba(158,54,58,0.10)`,stroke:`currentColor`,strokeWidth:`1.8`}),(0,m.jsx)(`path`,{d:`M177.5 26h9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,m.jsx)(`path`,{d:`M182 21.5v9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}),(0,m.jsx)(`div`,{children:`No achievements found.`}),e?(0,m.jsxs)(`div`,{style:{marginTop:6,fontSize:12.5,opacity:.95},children:[`Department: `,(0,m.jsx)(`b`,{children:e})]}):null]})}function C({item:e,imageBaseUrl:t,detailPath:n}){let i=e?.title||`Untitled`,a=g(e?.body||``),o=_(e?.created_at||e?.publish_at||e?.updated_at),s=v(e?.cover_image_url||e?.cover_image||e?.image_url||e?.image||e?.thumbnail||``,t);return(0,m.jsxs)(`div`,{className:`achx-card`,children:[(0,m.jsxs)(`div`,{className:`achx-media`,children:[(0,m.jsx)(`div`,{className:`achx-fallback`,children:`Achievement`}),s?(0,m.jsx)(`img`,{src:s,alt:i,loading:`lazy`,onError:e=>{e.currentTarget.style.display=`none`}}):null]}),(0,m.jsxs)(`div`,{className:`achx-body`,children:[(0,m.jsx)(`div`,{className:`achx-h`,children:i}),(0,m.jsx)(`p`,{className:`achx-p`,children:a}),(0,m.jsxs)(`div`,{className:`achx-date`,children:[(0,m.jsx)(`i`,{className:`fa-regular fa-calendar`}),(0,m.jsxs)(`span`,{children:[`Created: `,o||`—`]})]})]}),(0,m.jsx)(r,{to:n,className:`achx-link`,"aria-label":`Open ${i}`})]})}function w(){let e=n(),r=t(),[i]=a(),o=`https://biswakarma.msit.edu.in/`.replace(/\/+$/,``),{achievements:g=[],search:_=``,deptUuid:v=``,deptId:w=null,deptName:T=``,page:E=1,perPage:D=10,loading:O=!1}=s(e=>e.achievements),{departments:k=[]}=s(e=>e.notices),[A,j]=(0,p.useState)(_||``),[M]=(0,p.useState)(()=>(i.get(`dept`)||``).trim().toLowerCase());(0,p.useEffect)(()=>{e(d()),e(c())},[e]),(0,p.useEffect)(()=>{j(_||``)},[_]),(0,p.useEffect)(()=>{let t=setTimeout(()=>{A!==_&&(e(l(A)),e(u(1)))},260);return()=>clearTimeout(t)},[A,_,e]);let N=(0,p.useMemo)(()=>k.filter(e=>!e?.uuid||!(e?.title||e?.name)?!1:e?.active===void 0||e?.active===null?!0:String(e.active)===`1`).sort((e,t)=>String(e?.title||e?.name||``).localeCompare(String(t?.title||t?.name||``))),[k]);(0,p.useEffect)(()=>{if(!N.length)return;let t=(i.get(`dept`)||``).trim().toLowerCase();if(!t){e(f({}));return}e(f(N.find(e=>String(e?.slug||``).trim().toLowerCase()===t)||N.find(e=>String(e?.uuid||``).trim().toLowerCase()===t)||{}))},[N,i,e]);let P=(0,p.useMemo)(()=>!M||!N.length?!1:N.some(e=>String(e?.slug||``).trim().toLowerCase()===M||String(e?.uuid||``).trim().toLowerCase()===M),[N,M]),F=(0,p.useMemo)(()=>{let e=Array.isArray(g)?[...g]:[];if(e=e.filter(y),v&&(e=e.filter(e=>String(e?.department_id??``)===String(w??``)||String(e?.department_uuid??``)===String(v))),_){let t=_.toLowerCase().trim();t&&(e=e.filter(e=>`${e?.title||``} ${h(e?.body||``)}`.toLowerCase().includes(t)))}return e},[g,v,w,_]),I=(0,p.useMemo)(()=>Math.max(1,Math.ceil(F.length/D)),[F.length,D]);(0,p.useEffect)(()=>{E>I&&e(u(I))},[E,I,e]);let L=(0,p.useMemo)(()=>{let e=(E-1)*D;return F.slice(e,e+D)},[F,E,D]),R=t=>{let n=N.find(e=>String(e.uuid)===String(t));if(e(f(n||{})),e(u(1)),!t||!n){r(`/achievements`);return}let i=n.slug||n.uuid;r(`/achievements?dept=${encodeURIComponent(i)}`)},z=e=>`/achievements/view/${e?.slug||e?.uuid||``}`,B=(0,p.useMemo)(()=>b(E,I),[E,I]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`style`,{children:`
.achx-wrap{
  --achx-brand: var(--primary-color, #9E363A);
  --achx-ink: #0f172a;
  --achx-muted: #64748b;
  --achx-card: var(--surface, #ffffff);
  --achx-line: var(--line-soft, rgba(15,23,42,.10));
  --achx-shadow: 0 10px 24px rgba(2,6,23,.08);
  --achx-card-h: 426.4px;
  --achx-media-h: 240px;

  max-width: 1320px;
  margin: 18px auto 54px;
  padding: 0 12px;
  background: transparent;
  position: relative;
  overflow: visible;
}

.achx-head{
  background: var(--achx-card);
  border: 1px solid var(--achx-line);
  border-radius: 16px;
  box-shadow: var(--achx-shadow);
  padding: 14px 16px;
  margin-bottom: 16px;
  display:flex;
  gap: 12px;
  align-items:flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.achx-head > div:first-child{
  flex: 1 1 280px;
  min-width: 0;
}

.achx-title{
  margin: 0;
  font-weight: 950;
  letter-spacing: .2px;
  color: var(--achx-ink);
  font-size: 28px;
  display:flex;
  align-items:center;
  gap: 10px;
  white-space: nowrap;
}

.achx-title i{
  color: var(--achx-brand);
}

.achx-sub{
  margin: 6px 0 0;
  color: var(--achx-muted);
  font-size: 14px;
}

.achx-tools{
  display:grid;
  grid-template-columns: minmax(0,1fr) minmax(220px,360px);
  gap: 10px;
  align-items:center;
  justify-content:end;
  min-width: 0;
  flex: 1 1 620px;
  width: min(100%, 920px);
}

.achx-tools > *{
  min-width: 0;
}

.achx-search{
  position: relative;
  min-width: 0;
  width:100%;
}

.achx-search i{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .65;
  color: var(--achx-muted);
  pointer-events:none;
}

.achx-search input{
  width:100%;
  max-width:100%;
  height: 42px;
  border-radius: 999px;
  padding: 11px 12px 11px 42px;
  border: 1px solid var(--achx-line);
  background: var(--achx-card);
  color: var(--achx-ink);
  outline: none;
}

.achx-search input:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.achx-select{
  position: relative;
  min-width: 0;
  width:100%;
}

.achx-select__icon{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--achx-muted);
  pointer-events:none;
  font-size: 14px;
}

.achx-select__caret{
  position:absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--achx-muted);
  pointer-events:none;
  font-size: 12px;
}

.achx-select select{
  width: 100%;
  max-width:100%;
  height: 42px;
  border-radius: 999px;
  padding: 10px 38px 10px 42px;
  border: 1px solid var(--achx-line);
  background: var(--achx-card);
  color: var(--achx-ink);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.achx-select select:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.achx-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
  align-items: stretch;
}

.achx-card{
  width:100%;
  height: var(--achx-card-h);
  position:relative;
  display:flex;
  flex-direction:column;
  border: 1px solid rgba(2,6,23,.08);
  border-radius: 16px;
  background: #fff;
  box-shadow: var(--achx-shadow);
  overflow:hidden;
  transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
  will-change: transform;
}

.achx-card:hover{
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(2,6,23,.12);
  border-color: rgba(158,54,58,.22);
}

.achx-media{
  width:100%;
  height: var(--achx-media-h);
  flex: 0 0 auto;
  background: var(--achx-brand);
  position:relative;
  overflow:hidden;
  user-select:none;
}

.achx-media .achx-fallback{
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

.achx-media img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  z-index: 1;
}

.achx-body{
  padding: 16px 16px 14px;
  display:flex;
  flex-direction:column;
  flex: 1 1 auto;
  min-height: 0;
}

.achx-h{
  font-size: 20px;
  line-height: 1.25;
  font-weight: 950;
  margin: 0 0 10px 0;
  color: var(--achx-ink);
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
  overflow-wrap:anywhere;
  word-break:break-word;
}

.achx-p{
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

.achx-date{
  margin-top:auto;
  color:#94a3b8;
  font-size: 13px;
  padding-top: 12px;
  display:flex;
  align-items:center;
  gap: 6px;
}

.achx-link{
  position:absolute;
  inset:0;
  z-index:2;
  border-radius: 16px;
}

.achx-state{
  background: var(--achx-card);
  border: 1px solid var(--achx-line);
  border-radius: 16px;
  box-shadow: var(--achx-shadow);
  padding: 18px;
  color: var(--achx-muted);
  text-align:center;
}

.achx-empty-ill{
  width: 170px;
  max-width: 100%;
  margin: 0 auto 10px;
  display: block;
  color: var(--achx-brand);
}

.achx-skeleton{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
}

.achx-sk{
  border-radius: 16px;
  border: 1px solid var(--achx-line);
  background: #fff;
  overflow:hidden;
  position:relative;
  box-shadow: 0 10px 24px rgba(2,6,23,.08);
  height: var(--achx-card-h);
}

.achx-sk:before{
  content:'';
  position:absolute;
  inset:0;
  transform: translateX(-60%);
  background: linear-gradient(90deg, transparent, rgba(148,163,184,.22), transparent);
  animation: achxSkMove 1.15s ease-in-out infinite;
}

@keyframes achxSkMove{
  to{ transform: translateX(60%); }
}

.achx-pagination{
  display:flex;
  justify-content:center;
  margin-top: 18px;
}

.achx-pager{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  padding: 10px;
}

.achx-pagebtn{
  border:1px solid var(--achx-line);
  background: var(--achx-card);
  color: var(--achx-ink);
  border-radius: 12px;
  padding: 9px 12px;
  font-size: 13px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(2,6,23,.06);
  cursor:pointer;
  user-select:none;
}

.achx-pagebtn:hover{
  background: rgba(2,6,23,.03);
}

.achx-pagebtn[disabled]{
  opacity:.55;
  cursor:not-allowed;
}

.achx-pagebtn.active{
  background: rgba(201,75,80,.12);
  border-color: rgba(201,75,80,.35);
  color: var(--achx-brand);
}

.achx-pagegap{
  opacity:.6;
  padding: 0 4px;
  display:flex;
  align-items:center;
}

@media (max-width: 980px){
  .achx-head{
    align-items:flex-end;
  }

  .achx-tools{
    grid-template-columns: 1fr;
    width: 100%;
    flex: 1 1 100%;
  }

  .achx-search,
  .achx-select{
    width:100%;
    max-width:none;
  }
}

@media (max-width: 640px){
  .achx-title{
    font-size: 24px;
    white-space: normal;
  }

  .achx-search,
  .achx-select{
    min-width: 0;
  }

  .achx-wrap{
    --achx-media-h: 210px;
  }

  .achx-media .achx-fallback{
    font-size: 22px;
  }
}
        `}),(0,m.jsxs)(`div`,{className:`achx-wrap`,children:[P?null:(0,m.jsxs)(`div`,{className:`achx-head`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`h1`,{className:`achx-title`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-trophy`}),(0,m.jsx)(`span`,{children:`Achievements`})]}),(0,m.jsx)(`div`,{className:`achx-sub`,children:T?`Achievements for ${T}`:`Awards, recognitions, and proud moments.`})]}),(0,m.jsxs)(`div`,{className:`achx-tools`,children:[(0,m.jsxs)(`div`,{className:`achx-search`,children:[(0,m.jsx)(`i`,{className:`fa fa-magnifying-glass`}),(0,m.jsx)(`input`,{type:`search`,placeholder:`Search achievements (title/body)…`,value:A,onChange:e=>j(e.target.value)})]}),(0,m.jsxs)(`div`,{className:`achx-select`,title:`Filter by department`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-building-columns achx-select__icon`}),(0,m.jsxs)(`select`,{value:v||``,onChange:e=>R(e.target.value),"aria-label":`Filter by department`,children:[(0,m.jsx)(`option`,{value:``,children:`All Departments`}),N.map(e=>(0,m.jsx)(`option`,{value:e.uuid,children:e.title||e.name},e.uuid))]}),(0,m.jsx)(`i`,{className:`fa-solid fa-chevron-down achx-select__caret`})]})]})]}),O?(0,m.jsx)(x,{}):null,!O&&L.length===0?(0,m.jsx)(S,{deptName:T}):null,!O&&L.length>0?(0,m.jsx)(`div`,{className:`achx-grid`,children:L.map((e,t)=>(0,m.jsx)(C,{item:e,imageBaseUrl:o,detailPath:z(e)},e?.uuid||e?.slug||e?.id||t))}):null,!O&&I>1?(0,m.jsx)(`div`,{className:`achx-pagination`,children:(0,m.jsxs)(`div`,{className:`achx-pager`,children:[(0,m.jsx)(`button`,{className:`achx-pagebtn`,disabled:E===1,onClick:()=>e(u(Math.max(1,E-1))),children:`Previous`}),B.map((t,n)=>t===`...`?(0,m.jsx)(`span`,{className:`achx-pagegap`,children:`…`},`gap-${n}`):(0,m.jsx)(`button`,{className:`achx-pagebtn ${t===E?`active`:``}`,onClick:()=>e(u(t)),children:t},t)),(0,m.jsx)(`button`,{className:`achx-pagebtn`,disabled:E===I,onClick:()=>e(u(Math.min(I,E+1))),children:`Next`})]})}):null]})]})}export{w as AchievementContent,w as default};