import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{A as t,C as n,E as r,I as i,M as a,p as o,w as s}from"./react-vendor-CMR_y1jB.js";import{a as c,i as l,n as u,o as d,t as f}from"./noticeSlice-DdVhUyiX.js";var p=e(i(),1),m=o(),h=e=>{let t=String(e||``).replace(/<\s*br\s*\/?>/gi,` `).replace(/<\/\s*(p|div|li|h[1-6]|tr|td|th|section|article)\s*>/gi,`$& `).replace(/<\s*(p|div|li|h[1-6]|tr|td|th|section|article)\b[^>]*>/gi,` `),n=document.createElement(`div`);return n.innerHTML=t,(n.textContent||n.innerText||``).replace(/\s+/g,` `).trim()},g=(e,t=90)=>{let n=h(e||``);return n.length<=t?n:n.slice(0,t).trim().replace(/[,\.;:\-\s]+$/g,``)+`......`},_=e=>{if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:new Intl.DateTimeFormat(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`}).format(t)},v=(e,t=``)=>{let n=String(e||``).trim();if(!n)return``;if(/^(data:|blob:|https?:\/\/)/i.test(n))return n;if(n.startsWith(`//`))return`${window.location.protocol}${n}`;let r=String(t||``).trim().replace(/\/+$/,``);return n.startsWith(`/`)?r?`${r}${n}`:`${window.location.origin}${n}`:r?`${r}/${n.replace(/^\/+/,``)}`:`${window.location.origin}/${n.replace(/^\/+/,``)}`},y=e=>String(e?.workflow_status||``).toLowerCase()===`approved`,b=(e,t)=>{let n=[],r=Math.max(1,e-2),i=Math.min(t,e+2);r>1&&(n.push(1),r>2&&n.push(`...`));for(let e=r;e<=i;e+=1)n.push(e);return i<t&&(i<t-1&&n.push(`...`),n.push(t)),n};function x(){return(0,m.jsx)(`div`,{className:`ntx-skeleton`,children:Array.from({length:6}).map((e,t)=>(0,m.jsx)(`div`,{className:`ntx-sk`},t))})}function S({deptName:e}){return(0,m.jsxs)(`div`,{className:`ntx-state`,children:[(0,m.jsx)(`div`,{className:`ntx-empty-ill`,"aria-hidden":`true`,children:(0,m.jsxs)(`svg`,{viewBox:`0 0 220 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,style:{display:`block`,width:`100%`,height:`auto`},children:[(0,m.jsx)(`rect`,{x:`10`,y:`18`,width:`200`,height:`112`,rx:`16`,fill:`white`,stroke:`rgba(15,23,42,0.10)`}),(0,m.jsx)(`rect`,{x:`24`,y:`32`,width:`172`,height:`84`,rx:`12`,fill:`rgba(148,163,184,0.08)`,stroke:`rgba(148,163,184,0.18)`}),(0,m.jsx)(`circle`,{cx:`70`,cy:`66`,r:`16`,fill:`rgba(158,54,58,0.14)`,stroke:`currentColor`,strokeWidth:`2`}),(0,m.jsx)(`path`,{d:`M49 97c5-11 16-16 21-16s16 5 21 16`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`}),(0,m.jsx)(`rect`,{x:`100`,y:`52`,width:`72`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.20)`}),(0,m.jsx)(`rect`,{x:`100`,y:`68`,width:`54`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.16)`}),(0,m.jsx)(`rect`,{x:`100`,y:`84`,width:`64`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.12)`}),(0,m.jsx)(`circle`,{cx:`182`,cy:`26`,r:`12`,fill:`rgba(158,54,58,0.10)`,stroke:`currentColor`,strokeWidth:`1.8`}),(0,m.jsx)(`path`,{d:`M177.5 26h9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,m.jsx)(`path`,{d:`M182 21.5v9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}),(0,m.jsx)(`div`,{children:`No notices found.`}),e?(0,m.jsxs)(`div`,{style:{marginTop:6,fontSize:12.5,opacity:.95},children:[`Department: `,(0,m.jsx)(`b`,{children:e})]}):null]})}function C({item:e,imageBaseUrl:t,detailPath:n}){let i=e?.title||`Untitled`,a=g(e?.body||``),o=_(e?.publish_at||e?.created_at||e?.updated_at),s=String(e?.department_title||``).trim(),c=v(e?.cover_image_url||e?.cover_image||e?.image_url||e?.image||e?.thumbnail||``,t);return(0,m.jsxs)(`div`,{className:`ntx-card`,children:[(0,m.jsxs)(`div`,{className:`ntx-media`,children:[(0,m.jsx)(`div`,{className:`ntx-fallback`,children:`Notice`}),c?(0,m.jsx)(`img`,{src:c,alt:i,loading:`lazy`,onError:e=>{e.currentTarget.style.display=`none`}}):null]}),(0,m.jsxs)(`div`,{className:`ntx-body`,children:[(0,m.jsx)(`div`,{className:`ntx-h`,children:i}),(0,m.jsx)(`p`,{className:`ntx-p`,children:a}),(0,m.jsxs)(`div`,{className:`ntx-date`,children:[(0,m.jsx)(`i`,{className:`fa-regular fa-calendar`}),(0,m.jsxs)(`span`,{children:[`Published: `,o||`—`]}),s?(0,m.jsx)(`span`,{className:`sep`,children:`•`}):null,s?(0,m.jsx)(`span`,{children:s}):null]})]}),(0,m.jsx)(r,{to:n,className:`ntx-link`,"aria-label":`Open ${i}`})]})}function w(){let e=n(),r=t(),[i]=a(),o=`https://biswakarma.msit.edu.in/`.replace(/\/+$/,``),{notices:g=[],departments:_=[],loading:v=!1,search:w=``,deptId:T=null,deptUuid:E=``,deptName:D=``,page:O=1,perPage:k=9}=s(e=>e.notices),[A,j]=(0,p.useState)(w||``);(0,p.useEffect)(()=>{e(u()),e(f())},[e]),(0,p.useEffect)(()=>{j(w||``)},[w]),(0,p.useEffect)(()=>{let t=setTimeout(()=>{A!==w&&(e(d(A)),e(c(1)))},260);return()=>clearTimeout(t)},[A,w,e]);let M=(0,p.useMemo)(()=>_.filter(e=>!(!e?.uuid||!(e?.title||e?.name))).sort((e,t)=>String(e?.title||e?.name||``).localeCompare(String(t?.title||t?.name||``))),[_]);(0,p.useEffect)(()=>{if(!M.length)return;let t=(i.get(`dept`)||``).trim().toLowerCase();if(!t){e(l({}));return}e(l(M.find(e=>String(e?.slug||``).trim().toLowerCase()===t)||M.find(e=>String(e?.uuid||``).trim().toLowerCase()===t)||{}))},[M,i,e]);let N=(0,p.useMemo)(()=>{let e=Array.isArray(g)?[...g]:[];if(e=e.filter(y),E?e=e.filter(e=>String(e?.department_id??``)===String(T??``)||String(e?.department_uuid??``)===String(E)):T&&(e=e.filter(e=>String(e?.department_id??``)===String(T))),w){let t=w.toLowerCase().trim();t&&(e=e.filter(e=>`${e?.title||``} ${e?.slug||``} ${h(e?.body||``)}`.toLowerCase().includes(t)))}return e},[g,w,T,E]),P=(0,p.useMemo)(()=>Math.max(1,Math.ceil(N.length/k)),[N.length,k]);(0,p.useEffect)(()=>{O>P&&e(c(P))},[O,P,e]);let F=(0,p.useMemo)(()=>{let e=(O-1)*k;return N.slice(e,e+k)},[N,O,k]),I=t=>{let n=M.find(e=>String(e.uuid)===String(t));if(e(l(n||{})),e(c(1)),!t||!n){r(`/notices`);return}let i=n.slug||n.uuid;r(`/notices?dept=${encodeURIComponent(i)}`)},L=e=>`/notices/view/${e?.slug||e?.uuid||e?.id||``}`,R=(0,p.useMemo)(()=>b(O,P),[O,P]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`style`,{children:`
.ntx-wrap{
  --ntx-brand: var(--primary-color, #9E363A);
  --ntx-ink: #0f172a;
  --ntx-muted: #64748b;
  --ntx-bg: var(--page-bg, #ffffff);
  --ntx-card: var(--surface, #ffffff);
  --ntx-line: var(--line-soft, rgba(15,23,42,.10));
  --ntx-shadow: 0 10px 24px rgba(2,6,23,.08);
  --ntx-card-h: 426.4px;
  --ntx-media-h: 240px;

  max-width: 1320px;
  margin: 18px auto 54px;
  padding: 0 12px;
  background: transparent;
  position: relative;
  overflow: visible;
}

.ntx-head{
  background: var(--ntx-card);
  border: 1px solid var(--ntx-line);
  border-radius: 16px;
  box-shadow: var(--ntx-shadow);
  padding: 14px 16px;
  margin-bottom: 16px;
  display:flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}

.ntx-head > div:first-child{
  flex: 0 0 auto;
}

.ntx-title{
  margin: 0;
  font-weight: 950;
  letter-spacing: .2px;
  color: var(--ntx-ink);
  font-size: 28px;
  display:flex;
  align-items:center;
  gap: 10px;
}

.ntx-title i{
  color: var(--ntx-brand);
}

.ntx-sub{
  margin: 6px 0 0;
  color: var(--ntx-muted);
  font-size: 14px;
}

.ntx-tools{
  display:flex;
  gap: 10px;
  align-items:center;
  flex-wrap: nowrap;
  justify-content: flex-end;
  flex: 1 1 auto;
}

.ntx-search{
  position: relative;
  min-width: 260px;
  max-width: 520px;
  flex: 1 1 320px;
}

.ntx-search i{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .65;
  color: var(--ntx-muted);
  pointer-events:none;
}

.ntx-search input{
  width:100%;
  height: 42px;
  border-radius: 999px;
  padding: 11px 12px 11px 42px;
  border: 1px solid var(--ntx-line);
  background: var(--ntx-card);
  color: var(--ntx-ink);
  outline: none;
}

.ntx-search input:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.ntx-select{
  position: relative;
  min-width: 260px;
  max-width: 360px;
  flex: 0 1 320px;
}

.ntx-select__icon{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--ntx-muted);
  pointer-events:none;
  font-size: 14px;
}

.ntx-select__caret{
  position:absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--ntx-muted);
  pointer-events:none;
  font-size: 12px;
}

.ntx-select select{
  width: 100%;
  height: 42px;
  border-radius: 999px;
  padding: 10px 38px 10px 42px;
  border: 1px solid var(--ntx-line);
  background: var(--ntx-card);
  color: var(--ntx-ink);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.ntx-select select:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.ntx-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
  align-items: stretch;
}

.ntx-card{
  width:100%;
  height: var(--ntx-card-h);
  position:relative;
  display:flex;
  flex-direction:column;
  border: 1px solid rgba(2,6,23,.08);
  border-radius: 16px;
  background: #fff;
  box-shadow: var(--ntx-shadow);
  overflow:hidden;
  transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
  will-change: transform;
}

.ntx-card:hover{
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(2,6,23,.12);
  border-color: rgba(158,54,58,.22);
}

.ntx-media{
  width:100%;
  height: var(--ntx-media-h);
  flex: 0 0 auto;
  background: var(--ntx-brand);
  position:relative;
  overflow:hidden;
  user-select:none;
}

.ntx-media .ntx-fallback{
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
  padding: 0 14px;
  text-align:center;
}

.ntx-media img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  z-index: 1;
}

.ntx-body{
  padding: 16px 16px 14px;
  display:flex;
  flex-direction:column;
  flex: 1 1 auto;
  min-height: 0;
}

.ntx-h{
  font-size: 20px;
  line-height: 1.25;
  font-weight: 950;
  margin: 0 0 10px 0;
  color: var(--ntx-ink);
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
  overflow-wrap:anywhere;
  word-break:break-word;
}

.ntx-p{
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

.ntx-date{
  margin-top:auto;
  color:#94a3b8;
  font-size: 13px;
  padding-top: 12px;
  display:flex;
  align-items:center;
  gap: 6px;
  flex-wrap: wrap;
}

.ntx-date .sep{
  opacity:.55;
  padding: 0 2px;
}

.ntx-link{
  position:absolute;
  inset:0;
  z-index:2;
  border-radius: 16px;
}

.ntx-state{
  background: var(--ntx-card);
  border: 1px solid var(--ntx-line);
  border-radius: 16px;
  box-shadow: var(--ntx-shadow);
  padding: 18px;
  color: var(--ntx-muted);
  text-align:center;
}

.ntx-empty-ill{
  width:170px;
  max-width:100%;
  margin:0 auto 10px;
  display:block;
  color:var(--ntx-brand);
}

.ntx-skeleton{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
}

.ntx-sk{
  border-radius: 16px;
  border: 1px solid var(--ntx-line);
  background: #fff;
  overflow:hidden;
  position:relative;
  box-shadow: 0 10px 24px rgba(2,6,23,.08);
  height: var(--ntx-card-h);
}

.ntx-sk:before{
  content:'';
  position:absolute;
  inset:0;
  transform: translateX(-60%);
  background: linear-gradient(90deg, transparent, rgba(148,163,184,.22), transparent);
  animation: ntxSkMove 1.15s ease-in-out infinite;
}

@keyframes ntxSkMove{
  to{ transform: translateX(60%); }
}

.ntx-pagination{
  display:flex;
  justify-content:center;
  margin-top: 18px;
}

.ntx-pager{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  padding: 10px;
}

.ntx-pagebtn{
  border:1px solid var(--ntx-line);
  background: var(--ntx-card);
  color: var(--ntx-ink);
  border-radius: 12px;
  padding: 9px 12px;
  font-size: 13px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(2,6,23,.06);
  cursor:pointer;
  user-select:none;
}

.ntx-pagebtn:hover{
  background: rgba(2,6,23,.03);
}

.ntx-pagebtn[disabled]{
  opacity:.55;
  cursor:not-allowed;
}

.ntx-pagebtn.active{
  background: rgba(201,75,80,.12);
  border-color: rgba(201,75,80,.35);
  color: var(--ntx-brand);
}

.ntx-pagegap{
  opacity:.6;
  padding: 0 4px;
  display:flex;
  align-items:center;
}

@media (max-width: 992px){
  .ntx-head{
    flex-wrap: wrap;
    align-items: flex-end;
  }

  .ntx-tools{
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

@media (max-width: 640px){
  .ntx-title{
    font-size: 24px;
  }

  .ntx-search{
    min-width: 220px;
    flex: 1 1 240px;
  }

  .ntx-select{
    min-width: 220px;
    flex: 1 1 240px;
  }

  .ntx-wrap{
    --ntx-media-h: 210px;
  }

  .ntx-media .ntx-fallback{
    font-size: 22px;
  }
}
        `}),(0,m.jsxs)(`div`,{className:`ntx-wrap`,children:[(0,m.jsxs)(`div`,{className:`ntx-head`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`h1`,{className:`ntx-title`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-bullhorn`}),(0,m.jsx)(`span`,{children:`Notices`})]}),(0,m.jsx)(`div`,{className:`ntx-sub`,children:D?`Notices for ${D}`:`Browse all published notices.`})]}),(0,m.jsxs)(`div`,{className:`ntx-tools`,children:[(0,m.jsxs)(`div`,{className:`ntx-search`,children:[(0,m.jsx)(`i`,{className:`fa fa-magnifying-glass`}),(0,m.jsx)(`input`,{type:`search`,placeholder:`Search notices (title/body/slug)…`,value:A,onChange:e=>j(e.target.value)})]}),(0,m.jsxs)(`div`,{className:`ntx-select`,title:`Filter by department`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-building-columns ntx-select__icon`}),(0,m.jsxs)(`select`,{value:E||``,onChange:e=>I(e.target.value),"aria-label":`Filter by department`,children:[(0,m.jsx)(`option`,{value:``,children:`All Departments`}),M.map(e=>(0,m.jsx)(`option`,{value:e.uuid,children:e.title||e.name},e.uuid))]}),(0,m.jsx)(`i`,{className:`fa-solid fa-chevron-down ntx-select__caret`})]})]})]}),v?(0,m.jsx)(x,{}):null,!v&&F.length===0?(0,m.jsx)(S,{deptName:D}):null,!v&&F.length>0?(0,m.jsx)(`div`,{className:`ntx-grid`,children:F.map((e,t)=>(0,m.jsx)(C,{item:e,imageBaseUrl:o,detailPath:L(e)},e?.uuid||e?.slug||e?.id||t))}):null,!v&&P>1?(0,m.jsx)(`div`,{className:`ntx-pagination`,children:(0,m.jsxs)(`div`,{className:`ntx-pager`,children:[(0,m.jsx)(`button`,{className:`ntx-pagebtn`,disabled:O===1,onClick:()=>e(c(Math.max(1,O-1))),children:`Previous`}),R.map((t,n)=>t===`...`?(0,m.jsx)(`span`,{className:`ntx-pagegap`,children:`…`},`gap-${n}`):(0,m.jsx)(`button`,{className:`ntx-pagebtn ${t===O?`active`:``}`,onClick:()=>e(c(t)),children:t},t)),(0,m.jsx)(`button`,{className:`ntx-pagebtn`,disabled:O===P,onClick:()=>e(c(Math.min(P,O+1))),children:`Next`})]})}):null]})]})}export{w as NoticeContent,w as default};