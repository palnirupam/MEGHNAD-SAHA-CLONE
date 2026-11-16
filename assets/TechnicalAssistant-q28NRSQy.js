import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{A as t,C as n,I as r,k as i,p as a,w as o}from"./react-vendor-CMR_y1jB.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./technicalAssistantSlice-CU2Weu5R.js";var _=e(r(),1),v=a(),y=9,b=`
  .fmx-wrap{
    --fmx-brand: var(--primary-color, #9E363A);
    --fmx-ink: #0f172a;
    --fmx-muted: #64748b;
    --fmx-card: var(--surface, #ffffff);
    --fmx-line: var(--line-soft, rgba(15,23,42,.10));
    --fmx-shadow: 0 10px 24px rgba(2,6,23,.08);

    --fmx-card-h: 250px;
    max-width: 1320px;
    margin: 18px auto 54px;
    padding: 0 12px;
    background: transparent;
    position: relative;
    overflow: visible;
  }

  .fmx-head{
    background: var(--fmx-card);
    border: 1px solid var(--fmx-line);
    border-radius: 16px;
    box-shadow: var(--fmx-shadow);
    padding: 14px 16px;
    margin-bottom: 16px;
    display:flex;
    gap: 12px;
    align-items:flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .fmx-head > div:first-child{
    flex: 1 1 280px;
    min-width: 0;
  }

  .fmx-title{
    margin: 0;
    font-weight: 950;
    letter-spacing: .2px;
    color: var(--fmx-ink);
    font-size: 28px;
    display:flex;
    align-items:center;
    gap: 10px;
    white-space: nowrap;
  }
  .fmx-title i{ color: var(--fmx-brand); }
  .fmx-sub{margin: 6px 0 0;color: var(--fmx-muted);font-size: 14px;}

  .fmx-tools{
    display:flex;
    justify-content:flex-end;
    align-items:center;
    min-width: 0;
    flex: 0 1 360px;
    width: min(100%, 360px);
  }
  .fmx-tools > *{ min-width:0; }

  .fmx-select{
    position: relative;
    min-width: 0;
    max-width: none;
    flex: initial;
    width:100%;
  }
  .fmx-select__icon{
    position:absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    opacity: .70;
    color: var(--fmx-muted);
    pointer-events:none;
    font-size: 14px;
  }
  .fmx-select__caret{
    position:absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    opacity: .70;
    color: var(--fmx-muted);
    pointer-events:none;
    font-size: 12px;
  }
  .fmx-select select{
    width: 100%;
    max-width:100%;
    height: 42px;
    border-radius: 999px;
    padding: 10px 38px 10px 42px;
    border: 1px solid var(--fmx-line);
    background: var(--fmx-card);
    color: var(--fmx-ink);
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .fmx-select select:focus{
    border-color: rgba(201,75,80,.55);
    box-shadow: 0 0 0 4px rgba(201,75,80,.18);
  }
  .fmx-select select:disabled{
    cursor: not-allowed;
    opacity: .78;
    filter: brightness(.94);
  }

  .fmx-grid,
  .fmx-skeleton{
    max-width: 1040px;
    margin: 0 auto;
  }
  .fmx-grid{
    display:flex;
    flex-direction:column;
    gap: 18px;
    align-items: stretch;
  }

  .fmx-card{
    width:100%;
    position:relative;
    display:flex;
    flex-direction:column;
    border: 1px solid rgba(2,6,23,.08);
    border-radius: 16px;
    background: #fff;
    box-shadow: var(--fmx-shadow);
    overflow:hidden;
    transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
    will-change: transform;
    cursor: pointer;
    outline: none;
  }
  .fmx-card:hover{
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(2,6,23,.12);
    border-color: rgba(158,54,58,.22);
  }
  .fmx-card:focus-visible{
    box-shadow: 0 0 0 4px rgba(201,75,80,.18), 0 16px 34px rgba(2,6,23,.12);
    border-color: rgba(201,75,80,.55);
  }

  .fmx-body{padding: 16px 16px 14px;display:flex;flex-direction:column;}
  .fmx-top{ display:flex; gap: 12px; align-items:flex-start; }

  .fmx-avatar{
    width: 64px;
    height: 64px;
    border-radius: 999px;
    flex: 0 0 64px;
    overflow:hidden;
    border: 3px solid #fff;
    box-shadow: 0 10px 22px rgba(2,6,23,.12);
    background: radial-gradient(140px 140px at 30% 20%, rgba(201,75,80,.16), transparent 60%), linear-gradient(180deg, rgba(0,0,0,.03), rgba(0,0,0,.06));
    position: relative;
    display:grid;
    place-items:center;
  }
  .fmx-avatar img{ width:100%; height:100%; object-fit: cover; display:block; }
  .fmx-initial{
    position:absolute;
    inset:0;
    display:grid;
    place-items:center;
    font-weight: 950;
    color: rgba(158,54,58,.95);
    font-size: 18px;
    letter-spacing:.5px;
  }
  .fmx-avatar.has-img .fmx-initial{ opacity:0; pointer-events:none; }

  .fmx-name{
    margin: 0;
    font-weight: 950;
    color: var(--fmx-ink);
    font-size: 18px;
    line-height: 1.25;
    text-transform: uppercase;
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow:hidden;
    overflow-wrap:anywhere;
    word-break:break-word;
  }
  .fmx-desig{
    margin-top: 6px;
    color: #334155;
    font-size: 14px;
    font-weight: 800;
    display:-webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow:hidden;
  }

  .fmx-meta{ margin-top: 12px; display:grid; gap: 6px; }
  .fmx-line{ font-size: 14px; color: #334155; line-height: 1.55; overflow-wrap:anywhere; }
  .fmx-line b{ font-weight: 950; color: var(--fmx-ink); }

  .fmx-links{
    margin-top: 12px;
    display:flex;
    flex-direction:column;
    gap: 6px;
    font-size: 14px;
  }
  .fmx-links a{
    color: #1d4ed8;
    text-decoration: none;
    font-weight: 900;
    word-break: break-word;
  }
  .fmx-links a:hover{ text-decoration: underline; }

  .fmx-social{
    margin-top: 12px;
    display:flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .fmx-social a{
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display:grid;
    place-items:center;
    background: var(--fmx-brand);
    color:#fff;
    border: 1px solid rgba(255,255,255,.18);
    box-shadow: 0 12px 22px rgba(143,47,47,.18);
    transition: transform .14s ease, filter .14s ease;
    text-decoration:none;
  }
  .fmx-social a:hover{ transform: translateY(-1px); filter: brightness(1.06); }
  .fmx-social a i{ color:#fff; font-size: 16px; line-height: 1; }

  .fmx-state{
    max-width: 1040px;
    margin: 0 auto;
    background: var(--fmx-card);
    border: 1px solid var(--fmx-line);
    border-radius: 16px;
    box-shadow: var(--fmx-shadow);
    padding: 18px;
    color: var(--fmx-muted);
    text-align:center;
  }

  .fmx-empty-ill{
    width: 170px;
    max-width: 100%;
    margin: 0 auto 10px;
    display: block;
    color: var(--fmx-brand);
  }
  .fmx-empty-ill svg{
    display:block;
    width:100%;
    height:auto;
  }

  .fmx-skeleton{
    display:flex;
    flex-direction:column;
    gap: 18px;
  }
  .fmx-sk{
    border-radius: 16px;
    border: 1px solid var(--fmx-line);
    background: #fff;
    overflow:hidden;
    position:relative;
    box-shadow: 0 10px 24px rgba(2,6,23,.08);
    height: var(--fmx-card-h);
  }
  .fmx-sk:before{
    content:'';
    position:absolute;
    inset:0;
    transform: translateX(-60%);
    background: linear-gradient(90deg, transparent, rgba(148,163,184,.22), transparent);
    animation: fmxSkMove 1.15s ease-in-out infinite;
  }
  @keyframes fmxSkMove{ to{ transform: translateX(60%);} }

  .fmx-pagination{
    display:flex;
    justify-content:center;
    margin-top: 18px;
  }
  .fmx-pagination .fmx-pager{
    display:flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
    padding: 10px;
  }
  .fmx-pagebtn{
    border:1px solid var(--fmx-line);
    background: var(--fmx-card);
    color: var(--fmx-ink);
    border-radius: 12px;
    padding: 9px 12px;
    font-size: 13px;
    font-weight: 950;
    box-shadow: 0 8px 18px rgba(2,6,23,.06);
    cursor:pointer;
    user-select:none;
  }
  .fmx-pagebtn:hover{ background: rgba(2,6,23,.03); }
  .fmx-pagebtn[disabled]{ opacity:.55; cursor:not-allowed; }
  .fmx-pagebtn.active{
    background: rgba(201,75,80,.12);
    border-color: rgba(201,75,80,.35);
    color: var(--fmx-brand);
  }

  @media (max-width: 1024px){
    .fmx-tools{
      width: 100%;
      flex: 1 1 100%;
    }
    .fmx-select{
      width:100%;
      max-width:none;
    }
  }

  @media (max-width: 640px){
    .fmx-head{ align-items: flex-end; }
    .fmx-title{ font-size: 24px; white-space: normal; }
    .fmx-select{ min-width: 0; }
    .fmx-grid, .fmx-skeleton, .fmx-state{ max-width: 100%; }
    .fmx-empty-ill{ width: 146px; }
  }

  .dynamic-navbar .navbar-nav .dropdown-menu{position: absolute !important;inset: auto !important;}
  .dynamic-navbar .dropdown-menu.is-portaled{position: fixed !important;}
`,x=e=>(e??``).toString().trim(),S=(e,t)=>{for(let n of t){let t=e?.[n];if(t!=null&&x(t)!==``)return t}return``},C=e=>{if(e==null)return null;if(Array.isArray(e)||typeof e==`object`)return e;try{return JSON.parse(String(e))}catch{return null}},w=e=>x(e).toLowerCase().replace(/\s+/g,`-`),ee=()=>(0,v.jsx)(`div`,{className:`fmx-empty-ill`,"aria-hidden":`true`,children:(0,v.jsxs)(`svg`,{viewBox:`0 0 220 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,v.jsx)(`rect`,{x:`10`,y:`18`,width:`200`,height:`112`,rx:`16`,fill:`white`,stroke:`rgba(15,23,42,0.10)`}),(0,v.jsx)(`rect`,{x:`24`,y:`32`,width:`172`,height:`84`,rx:`12`,fill:`rgba(148,163,184,0.08)`,stroke:`rgba(148,163,184,0.18)`}),(0,v.jsx)(`circle`,{cx:`70`,cy:`66`,r:`16`,fill:`rgba(158,54,58,0.14)`,stroke:`currentColor`,strokeWidth:`2`}),(0,v.jsx)(`path`,{d:`M49 97c5-11 16-16 21-16s16 5 21 16`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`}),(0,v.jsx)(`rect`,{x:`100`,y:`52`,width:`72`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.20)`}),(0,v.jsx)(`rect`,{x:`100`,y:`68`,width:`54`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.16)`}),(0,v.jsx)(`rect`,{x:`100`,y:`84`,width:`64`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.12)`}),(0,v.jsx)(`circle`,{cx:`182`,cy:`26`,r:`12`,fill:`rgba(158,54,58,0.10)`,stroke:`currentColor`,strokeWidth:`1.8`}),(0,v.jsx)(`path`,{d:`M177.5 26h9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,v.jsx)(`path`,{d:`M182 21.5v9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}),T=e=>{let t=x(e);return t?/^(data:|blob:|https?:\/\/|mailto:|tel:)/i.test(t)?t:t.startsWith(`//`)?`https:${t}`:t.startsWith(`/`)?`${window.location.origin}${t}`:t.includes(`.`)&&!t.includes(` `)?`https://${t.replace(/^\/+/,``)}`:`${window.location.origin}/${t.replace(/^\/+/,``)}`:``},te=e=>{let t=x(e);return t?t.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join(``):`TA`},E=e=>{let t=Array.isArray(e)?e:C(e);if(!t)return``;if(Array.isArray(t)&&t.every(e=>typeof e==`string`))return t.join(`, `);let n=(Array.isArray(t)?t:[t]).map(e=>e?.title||e?.degree||e?.name).filter(Boolean);return n.length?n.join(`, `):``},D=e=>{let t=x(e).toLowerCase();return t.includes(`linkedin`)?`fa-brands fa-linkedin-in`:t.includes(`google`)||t.includes(`scholar`)?`fa-solid fa-graduation-cap`:t.includes(`university`)||t.includes(`profile`)||t.includes(`college`)?`fa-solid fa-building-columns`:t.includes(`researchgate`)?`fa-brands fa-researchgate`:t===`facebook`||t.includes(`fb`)?`fa-brands fa-facebook-f`:t.includes(`instagram`)||t.includes(`insta`)?`fa-brands fa-instagram`:t===`x`||t.includes(`twitter`)?`fa-brands fa-x-twitter`:t.includes(`github`)?`fa-brands fa-github`:t.includes(`youtube`)?`fa-brands fa-youtube`:`fa-solid fa-link`},O=e=>{let t=x(e);return t?t.startsWith(`fa-`)&&!t.includes(`fa-solid`)&&!t.includes(`fa-brands`)&&!t.includes(`fa-regular`)?`fa-brands ${t}`:t:``},k=e=>{let t=Array.isArray(e?.socials)?e.socials:[],n=C(e?.metadata)||{},r=[];if(t.length)r=t.map(e=>({url:x(e?.url),icon:O(e?.icon)||D(e?.platform),title:x(e?.platform||`Link`)}));else{let t=(...t)=>{for(let r of t){let t=n?.[r]??e?.[r];if(x(t))return t}return``},i=(e,t,n)=>{let i=x(e);i&&r.push({url:i,title:t,icon:n})};i(t(`linkedin`,`linkedin_url`,`linkedIn`,`linkedinLink`),`LinkedIn`,`fa-brands fa-linkedin-in`),i(t(`google_scholar`,`scholar`,`scholar_url`,`google_scholar_url`),`Google Scholar`,`fa-solid fa-graduation-cap`),i(t(`college_profile`,`university_profile`,`profile_url`,`msit_profile`,`institute_profile`),`Profile`,`fa-solid fa-building-columns`),i(t(`facebook`,`facebook_url`,`fb`,`fb_url`),`Facebook`,`fa-brands fa-facebook-f`),i(t(`instagram`,`instagram_url`,`insta`,`insta_url`),`Instagram`,`fa-brands fa-instagram`),i(t(`twitter`,`x`,`twitter_url`,`x_url`),`X`,`fa-brands fa-x-twitter`),i(t(`github`,`github_url`),`GitHub`,`fa-brands fa-github`),i(t(`youtube`,`youtube_url`),`YouTube`,`fa-brands fa-youtube`),i(t(`researchgate`,`researchgate_url`),`ResearchGate`,`fa-brands fa-researchgate`)}return r.map(e=>({...e,url:T(e.url)})).filter(e=>e.url)},A=(e,t)=>{let n=x(t);return n?(0,v.jsxs)(`div`,{className:`fmx-line`,children:[(0,v.jsxs)(`b`,{children:[e,`:`]}),` `,(0,v.jsx)(`span`,{children:n})]}):null},j=()=>{if(document.querySelector(`link[data-fmx-fa="1"]`))return;let e=document.createElement(`link`);e.rel=`stylesheet`,e.href=`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`,e.setAttribute(`data-fmx-fa`,`1`),document.head.appendChild(e)},ne=(e,t)=>{let n=Math.max(1,e-2),r=Math.min(t,e+2),i=[];n>1&&(i.push(1),n>2&&i.push(`dots-start`));for(let e=n;e<=r;e+=1)i.push(e);return r<t&&(r<t-1&&i.push(`dots-end`),i.push(t)),i},M=e=>{let t=x(S(e,[`__profile_slug`,`slug`,`user_slug`,`profile_slug`])||e?.user?.slug);return t?`/user/profile/${encodeURIComponent(t)}`:`#`};function N(){let e=n(),r=t(),a=i(),D=o(f),O=o(m),N=o(s),P=o(u),re=o(g),ie=o(c),ae=o(l),[F,I]=(0,_.useState)(h),[L,R]=(0,_.useState)(1),[z,B]=(0,_.useState)(!1),[V,H]=(0,_.useState)(!1);(0,_.useEffect)(()=>{j(),e(d())},[e]);let U=(0,_.useMemo)(()=>(D||[]).filter(e=>String(e?.order?.active??1)===`1`).map(e=>({id:e?.department?.id??null,uuid:x(e?.department?.uuid),slug:w(e?.department?.slug||e?.department?.short_name),title:x(e?.department?.title),count:parseInt(e?.order?.technical_assistant_count??e?.order?.assistant_count??e?.order?.count??e?.order?.staff_count??0,10)||0})).filter(e=>e.uuid&&e.slug&&e.title&&e.count>0).sort((e,t)=>e.title.localeCompare(t.title)),[D]),W=(0,_.useMemo)(()=>new Map(U.map(e=>[e.uuid,e])),[U]),G=(0,_.useMemo)(()=>new Map(U.map(e=>[x(e.uuid).toLowerCase(),e])),[U]),K=(0,_.useMemo)(()=>new Map(U.map(e=>[e.slug,e])),[U]),q=(0,_.useMemo)(()=>{let e=new URLSearchParams(a.search);return x(e.get(`dept`)||e.get(`department`))},[a.search]);(0,_.useEffect)(()=>{if(O!==`succeeded`)return;if(!q){I(h),H(!1),B(!0);return}let e=w(q),t=x(q).toLowerCase(),n=K.get(e)||G.get(t)||null;n?.uuid?(I(n.uuid),H(!0)):(I(h),H(!1)),B(!0)},[O,q,K,G]),(0,_.useEffect)(()=>{!z||O!==`succeeded`||(e(p({deptUuid:F})),R(1))},[z,F,O,e]),(0,_.useEffect)(()=>{if(!z)return;let e=new URL(window.location.href);if(F&&F!==`__all`){let t=W.get(F);t?.slug?(e.searchParams.set(`dept`,t.slug),e.searchParams.delete(`department`)):(e.searchParams.set(`department`,F),e.searchParams.delete(`dept`))}else e.searchParams.delete(`dept`),e.searchParams.delete(`department`);let t=`${e.pathname}${e.search}${e.hash}`;t!==`${window.location.pathname}${window.location.search}${window.location.hash}`&&window.history.replaceState({},``,t)},[z,F,W]);let oe=O===`loading`||re===`loading`||!z&&O!==`failed`,J=N||ie,se=F===`__all`?`Showing technical assistants from all departments.`:`Technical assistants of ${ae||`selected department`}`,Y=(0,_.useMemo)(()=>P||[],[P]),X=Math.max(1,Math.ceil(Y.length/y)),Z=Math.min(L,X);(0,_.useEffect)(()=>{L>X&&R(X)},[L,X]);let Q=(0,_.useMemo)(()=>{let e=(Z-1)*y;return Y.slice(e,e+y)},[Y,Z]),ce=(0,_.useMemo)(()=>ne(Z,X),[Z,X]),le=e=>{V||(I(e.target.value),R(1))},ue=F===`__all`?`No technical assistant found.`:`No technical assistant found for this department.`,$=e=>{!e||e===`#`||r(e)};return(0,v.jsxs)(`div`,{className:`fmx-wrap`,children:[(0,v.jsx)(`style`,{children:b}),V?null:(0,v.jsxs)(`div`,{className:`fmx-head`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`h1`,{className:`fmx-title`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-users`}),`Technical Assistants`]}),(0,v.jsx)(`div`,{className:`fmx-sub`,children:se})]}),(0,v.jsx)(`div`,{className:`fmx-tools`,children:(0,v.jsxs)(`div`,{className:`fmx-select`,title:`Filter by department`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-building-columns fmx-select__icon`}),(0,v.jsxs)(`select`,{value:F,onChange:le,"aria-label":`Filter by department`,children:[(0,v.jsx)(`option`,{value:h,children:`All Departments`}),U.map(e=>(0,v.jsx)(`option`,{value:e.uuid,children:e.title},e.uuid))]}),(0,v.jsx)(`i`,{className:`fa-solid fa-chevron-down fmx-select__caret`})]})})]}),oe?(0,v.jsx)(`div`,{className:`fmx-skeleton`,children:Array.from({length:6}).map((e,t)=>(0,v.jsx)(`div`,{className:`fmx-sk`},t))}):J?(0,v.jsxs)(`div`,{className:`fmx-state`,children:[(0,v.jsx)(`div`,{style:{fontSize:`34px`,opacity:.6,marginBottom:`6px`},children:(0,v.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`})}),`Technical assistant list is not available right now.`]}):Q.length?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`fmx-grid`,children:Q.map((e,t)=>{let n=M(e),r=x(S(e,[`user_uuid`,`uuid`,`__profile_slug`]))||`${x(S(e,[`name`,`user_name`,`title`]))}-${t}`,i=S(e,[`name`,`user_name`,`title`])||`Technical Assistant`,a=x(S(e,[`designation`])||e?.user?.designation||C(e?.metadata)?.designation||C(e?.metadata)?.role_title),o=E(e?.qualification),s=x(S(e,[`specification`])),c=x(S(e,[`experience`])),l=x(S(e,[`interest`])),u=x(S(e,[`administration`])),d=x(S(e,[`research_project`])),f=x(e?.__department_title),p=C(e?.metadata)||{},m=x(S(e,[`email`])||p.email),h=x(S(e,[`website`])||p.website),g=T(S(e,[`image_full_url`,`image`])),_=te(i),y=k(e);return(0,v.jsx)(`article`,{className:`fmx-card`,tabIndex:0,role:`link`,"aria-label":`${i} profile`,onClick:()=>$(n),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),$(n))},children:(0,v.jsxs)(`div`,{className:`fmx-body`,children:[(0,v.jsxs)(`div`,{className:`fmx-top`,children:[(0,v.jsxs)(`div`,{className:`fmx-avatar ${g?`has-img`:``}`,children:[(0,v.jsx)(`div`,{className:`fmx-initial`,children:_}),g?(0,v.jsx)(`img`,{className:`fmx-img`,src:g,alt:i,loading:`lazy`,decoding:`async`,onLoad:e=>{let t=e.currentTarget.closest(`.fmx-avatar`);t&&t.classList.add(`has-img`)},onError:e=>{let t=e.currentTarget.closest(`.fmx-avatar`);t&&t.classList.remove(`has-img`),e.currentTarget.remove()}}):null]}),(0,v.jsxs)(`div`,{style:{minWidth:0,flex:1},children:[(0,v.jsx)(`h3`,{className:`fmx-name`,children:i}),a?(0,v.jsx)(`div`,{className:`fmx-desig`,children:a}):null]})]}),(0,v.jsxs)(`div`,{className:`fmx-meta`,children:[F===`__all`?A(`Department`,f):null,A(`Qualification`,o),A(`Specification`,s),A(`Experience`,c),A(`Interest`,l),A(`Administration`,u),A(`Research Project`,d)]}),(0,v.jsxs)(`div`,{className:`fmx-links`,children:[m?(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`b`,{children:`Email:`}),` `,(0,v.jsx)(`a`,{href:`mailto:${m}`,onClick:e=>e.stopPropagation(),children:m})]}):null,h?(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`b`,{children:`Website:`}),` `,(0,v.jsx)(`a`,{href:T(h),target:`_blank`,rel:`noopener noreferrer`,onClick:e=>e.stopPropagation(),children:h})]}):null]}),y.length?(0,v.jsx)(`div`,{className:`fmx-social`,children:y.map((e,t)=>(0,v.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,title:e.title,onClick:e=>e.stopPropagation(),children:(0,v.jsx)(`i`,{className:e.icon})},`${e.title}-${t}`))}):null]})},r)})}),X>1?(0,v.jsx)(`div`,{className:`fmx-pagination`,children:(0,v.jsxs)(`div`,{className:`fmx-pager`,children:[(0,v.jsx)(`button`,{className:`fmx-pagebtn`,disabled:Z<=1,onClick:()=>{R(Math.max(1,Z-1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Previous`}),ce.map((e,t)=>typeof e==`number`?(0,v.jsx)(`button`,{className:`fmx-pagebtn ${Z===e?`active`:``}`,onClick:()=>{R(e),window.scrollTo({top:0,behavior:`smooth`})},children:e},`${e}-${t}`):(0,v.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`${e}-${t}`)),(0,v.jsx)(`button`,{className:`fmx-pagebtn`,disabled:Z>=X,onClick:()=>{R(Math.min(X,Z+1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Next`})]})}):null]}):(0,v.jsxs)(`div`,{className:`fmx-state`,children:[ee(),ue]})]})}export{N as TechnicalAssistantContent,N as default};