import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{A as t,C as n,I as r,p as i,w as a}from"./react-vendor-CMR_y1jB.js";import{r as o,t as s}from"./infoBoxesSlice-CueDGpvh.js";import{r as c,t as l}from"./homeHighlightsSlice-DUfxPTih.js";import{r as u,t as d}from"./nvaRowSlice-DZX-ekYC.js";import{c as f,i as p,o as m,t as h}from"./pageRouting-BdwTUDuS.js";var g=e(r(),1),_=i(),v=[`career_notices`,`why_us`,`scholarships`],y={career_notices:{title:`Career At MSIT`,iconClass:`fa-solid fa-trophy`,itemIconClass:`fa-solid fa-chevron-right`,emptyText:`No career notices.`},why_us:{title:`Why MSIT`,iconClass:`fa-solid fa-star`,itemIconClass:`fa-solid fa-check`,emptyText:`No highlights.`},scholarships:{title:`Scholarship`,iconClass:`fa-solid fa-award`,itemIconClass:`fa-solid fa-gift`,emptyText:`No scholarships.`},notices:{title:`Notice`,iconClass:`fa-solid fa-bullhorn`,itemIconClass:`fa-solid fa-caret-right`,emptyText:`No notices found.`},announcements:{title:`Announcements`,iconClass:`fa-solid fa-bell`,itemIconClass:`fa-solid fa-caret-right`,emptyText:`No announcements found.`},achievements:{title:`Achievements`,iconClass:`fa-solid fa-trophy`,itemIconClass:`fa-solid fa-medal`,emptyText:`No achievements found.`},student_activities:{title:`Students Activity`,iconClass:`fa-solid fa-users`,itemIconClass:`fa-solid fa-calendar`,emptyText:`No student activities found.`},placement_notices:{title:`Placement Notice`,iconClass:`fa-solid fa-briefcase`,itemIconClass:`fa-solid fa-building`,emptyText:`No placement notices found.`}},b=[`career_notices`,`why_us`,`scholarships`,`notices`,`announcements`,`achievements`,`student_activities`,`placement_notices`],x=e=>{let t=String(e||``).trim();return t?/^(https?:\/\/|mailto:|tel:|sms:|whatsapp:|#)/i.test(t)||t.startsWith(`/`)?t:`/${t.replace(/^\/+/,``)}`:``},S=e=>{let t=String(e||``).trim().toLowerCase();return t===`_blank`||t===`blank`||t===`new`},C=e=>{let t=String(e||``).trim();if(!t)return``;if(t.includes(`youtube-nocookie.com/embed/`))return t;let n=t.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/);if(n)return`https://www.youtube-nocookie.com/embed/${n[1]}`;let r=t.match(/[?&]v=([a-zA-Z0-9_-]{6,})/);if(r)return`https://www.youtube-nocookie.com/embed/${r[1]}`;let i=t.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{6,})/);return i?`https://www.youtube-nocookie.com/embed/${i[1]}`:t},w=e=>{let t=String(e||``).toLowerCase();return t.includes(`counsel`)?`fa-solid fa-calendar`:t.includes(`admission`)?`fa-solid fa-pen`:t.includes(`fee`)||t.includes(`payment`)?`fa-solid fa-credit-card`:t.includes(`tour`)?`fa-solid fa-building`:`fa-solid fa-link`},T=e=>{if(!e)return``;if(e.slug&&e.categoryKey)return h(e.categoryKey,e.slug);let t=String(e.href||``).trim();return t?f(m(t)):``},E=e=>{if(!e)return``;let t=String(e.href||e.url||``).trim();return t?f(m(t)):``};function D({sectionKey:e,items:t,loading:n,onNavigate:r}){let i=y[e],a=t?.length?t.slice(0,80):[{id:`${e}-empty`,title:i.emptyText,href:``}];return(0,_.jsx)(`div`,{className:`mhqa-pane-scroll`,children:n?(0,_.jsx)(`ul`,{className:`mhqa-list`,children:Array.from({length:7}).map((t,n)=>(0,_.jsxs)(`li`,{className:`mhqa-list-item`,children:[(0,_.jsx)(`i`,{className:i.itemIconClass,"aria-hidden":`true`}),(0,_.jsx)(`span`,{className:`block h-4 w-full animate-pulse rounded-full bg-[#9E363A]/10`})]},`${e}-loading-${n}`))}):(0,_.jsx)(`ul`,{className:`mhqa-list`,children:a.map(t=>{let n=e===`career_notices`||e===`why_us`||e===`scholarships`?T(t):E(t),a=t.title||t.description||t.buttonText||i.emptyText,o=S(t.target);return(0,_.jsxs)(`li`,{className:`mhqa-list-item`,children:[(0,_.jsx)(`i`,{className:i.itemIconClass,"aria-hidden":`true`}),n?(0,_.jsx)(`a`,{href:n,target:o?`_blank`:void 0,rel:o?`noreferrer`:void 0,onClick:e=>r(e,n,t.target),children:a}):(0,_.jsx)(`span`,{children:a})]},t.id||`${e}-${a}`)})})})}function O({center:e,loading:t,onNavigate:n}){let r=C(e?.iframeUrl);return(0,_.jsxs)(`section`,{className:`mhqa-center-wrap`,"aria-label":`Homepage featured video`,children:[(0,_.jsx)(`style`,{children:A}),(0,_.jsx)(`div`,{className:`mhqa-center-card`,children:t?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`div`,{className:`mx-auto h-6 w-3/4 animate-pulse rounded-full bg-[#9E363A]/10`}),(0,_.jsx)(`div`,{className:`mhqa-video-shell`,children:(0,_.jsx)(`div`,{className:`absolute inset-0 animate-pulse bg-[#9E363A]/10`})}),(0,_.jsxs)(`div`,{className:`mhqa-center-actions`,children:[(0,_.jsx)(`div`,{className:`h-11 rounded-[14px] bg-[#f59e0b]/20`}),(0,_.jsx)(`div`,{className:`h-11 rounded-[14px] bg-[#991b1b]/20`})]})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`h3`,{className:`mhqa-center-title`,children:e?.title||`—`}),(0,_.jsx)(`div`,{className:`mhqa-video-shell`,children:r?(0,_.jsx)(`iframe`,{src:r,loading:`lazy`,referrerPolicy:`strict-origin-when-cross-origin`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0,title:e?.title||`Video`}):(0,_.jsx)(`div`,{className:`mhqa-video-empty`,children:`No video available`})}),(0,_.jsx)(`div`,{className:`mhqa-center-actions`,children:e?.buttons?.length?e.buttons.map((e,t)=>{let r=f(m(x(e.url))),i=!r||/^(mailto:|tel:|sms:|whatsapp:|#)/i.test(r)||!p(r);return(0,_.jsxs)(`a`,{href:r||`#`,className:`mhqa-center-btn ${t>=2?`secondary`:``}`,target:i?`_blank`:void 0,rel:i?`noopener noreferrer`:void 0,onClick:e=>n(e,r,i?`_blank`:``),children:[(0,_.jsx)(`i`,{className:w(e.text),"aria-hidden":`true`}),(0,_.jsx)(`span`,{children:e.text||`Open`})]},e.id||`${e.text}-${t}`)}):(0,_.jsxs)(`button`,{type:`button`,className:`mhqa-center-btn`,disabled:!0,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-link`,"aria-hidden":`true`}),(0,_.jsx)(`span`,{children:`No actions`})]})})]})})]})}function k(){let e=n(),r=t(),[i,m]=(0,g.useState)(``),h=a(o),x=a(c),C=a(u);(0,g.useEffect)(()=>{h?.status===`idle`&&e(s())},[e,h?.status]),(0,g.useEffect)(()=>{x?.status===`idle`&&e(l())},[e,x?.status]),(0,g.useEffect)(()=>{C?.status===`idle`&&e(d())},[e,C?.status]),(0,g.useEffect)(()=>{if(!i)return;let e=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=e}},[i]);let w=(()=>{let e=Array.isArray(h?.items)?h.items:[];return v.reduce((t,n)=>(t[n]=e.filter(e=>e?.categoryKey===n),t),{})})(),T={achievements:Array.isArray(x?.achievements)?x.achievements:[],student_activities:Array.isArray(x?.studentActivities)?x.studentActivities:[],placement_notices:Array.isArray(x?.placementNotices)?x.placementNotices:[]},E={career_notices:w.career_notices||[],why_us:w.why_us||[],scholarships:w.scholarships||[],notices:Array.isArray(C?.notices)?C.notices:[],announcements:Array.isArray(C?.announcements)?C.announcements:[],achievements:T.achievements||[],student_activities:T.student_activities||[],placement_notices:T.placement_notices||[]},k={career_notices:h?.status===`idle`||h?.status===`loading`,why_us:h?.status===`idle`||h?.status===`loading`,scholarships:h?.status===`idle`||h?.status===`loading`,notices:C?.status===`idle`||C?.status===`loading`,announcements:C?.status===`idle`||C?.status===`loading`,achievements:x?.status===`idle`||x?.status===`loading`,student_activities:x?.status===`idle`||x?.status===`loading`,placement_notices:x?.status===`idle`||x?.status===`loading`},j=(e,t,n)=>{if(!t||t===`#`){e?.preventDefault?.();return}if(S(n))return;let i=f(t);if(!i||!p(i)||/^(mailto:|tel:|sms:|whatsapp:|#)/i.test(i))return;let a=new URL(i,window.location.origin);e.preventDefault(),m(``),r(`${a.pathname}${a.search}${a.hash}`)},M=i?y[i]:null;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`style`,{children:A}),(0,_.jsx)(`div`,{className:`mhqa-shell`,"aria-hidden":!1,children:(0,_.jsx)(`div`,{className:`mhqa-stack`,"aria-label":`Quick mobile access`,children:b.map(e=>{let t=y[e],n=i===e;return(0,_.jsxs)(`button`,{type:`button`,className:`mhqa-tab-btn ${n?`is-active`:``}`,"aria-label":t.title,"aria-pressed":n,onClick:()=>m(t=>t===e?``:e),children:[(0,_.jsx)(`span`,{className:`mhqa-tab-accent`}),(0,_.jsx)(`i`,{className:t.iconClass,"aria-hidden":`true`})]},e)})})}),(0,_.jsx)(O,{center:C?.center,loading:C?.status===`idle`||C?.status===`loading`,onNavigate:j}),i?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`button`,{type:`button`,className:`mhqa-backdrop`,"aria-label":`Close quick access`,onClick:()=>m(``)}),(0,_.jsxs)(`div`,{className:`mhqa-panel`,role:`dialog`,"aria-modal":`true`,children:[(0,_.jsxs)(`div`,{className:`mhqa-panel-head`,children:[(0,_.jsxs)(`div`,{className:`mhqa-panel-title-wrap`,children:[(0,_.jsx)(`i`,{className:M?.iconClass,"aria-hidden":`true`}),(0,_.jsx)(`span`,{children:M?.title})]}),(0,_.jsx)(`button`,{type:`button`,className:`mhqa-close`,"aria-label":`Close panel`,onClick:()=>m(``),children:(0,_.jsx)(`i`,{className:`fa-solid fa-xmark`,"aria-hidden":`true`})})]}),(0,_.jsx)(D,{sectionKey:i,items:E[i]||[],loading:!!k[i],onNavigate:j})]})]}):null]})}var A=`
  .mhqa-shell {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 990;
    pointer-events: none;
  }

  .mhqa-stack {
    display: flex;
    flex-direction: column;
    gap: 8px;
    pointer-events: auto;
    padding: 8px 0;
  }

  .mhqa-tab-btn {
    position: relative;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(158, 54, 58, 0.16);
    border-left: 0;
    border-radius: 0 14px 14px 0;
    background: linear-gradient(180deg, rgba(255,255,255,.98), rgba(251,236,236,.96));
    color: #7d2d31;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.10);
    transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease, color .22s ease, background .22s ease;
    overflow: hidden;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .mhqa-tab-btn i {
    position: relative;
    z-index: 2;
    font-size: 15px;
    line-height: 1;
  }

  .mhqa-tab-accent {
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 3px;
    border-radius: 999px;
    background: linear-gradient(180deg, #9E363A, #C94B50);
    opacity: .9;
  }

  .mhqa-tab-btn.is-active,
  .mhqa-tab-btn:hover {
    transform: translateX(6px);
    color: #9E363A;
    border-color: rgba(158, 54, 58, 0.30);
    background: linear-gradient(180deg, rgba(255,255,255,1), rgba(255,246,246,.98));
    box-shadow: 0 16px 30px rgba(15, 23, 42, 0.14);
  }

  .mhqa-tab-btn.is-active::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(158,54,58,.04), rgba(201,75,80,.06));
    pointer-events: none;
  }

  .mhqa-center-wrap {
    width: 100%;
    background: #ffffff;
  }

  .mhqa-center-card {
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #e6c8ca;
    box-shadow: 0 10px 28px rgba(0,0,0,.10);
    padding: 14px;
    overflow: hidden;
  }

  .mhqa-center-title {
    font-weight: 950;
    color: #0f172a;
    margin: 2px 0 12px;
    text-align: center;
    font-size: 18px;
    line-height: 1.25;
  }

  .mhqa-video-shell {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 24px rgba(2,6,23,.12);
    background: #111111;
  }

  .mhqa-video-shell iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .mhqa-video-empty {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 800;
    text-align: center;
    padding: 16px;
  }

  .mhqa-center-actions {
    padding-top: 13px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .mhqa-center-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    min-width: 0;
    border: 0;
    border-radius: 14px;
    padding: 10px 12px;
    background: #f59e0b;
    color: #ffffff;
    text-decoration: none;
    font-size: 11px;
    font-weight: 950;
    box-shadow: 0 6px 14px rgba(245,158,11,.28);
    transition: transform .15s ease, background .15s ease;
  }

  .mhqa-center-btn.secondary {
    background: #991b1b;
    box-shadow: 0 6px 14px rgba(153,27,27,.22);
  }

  .mhqa-center-btn:hover {
    transform: translateY(-1px);
    background: #d97706;
    color: #ffffff;
  }

  .mhqa-center-btn.secondary:hover {
    background: #7f1d1d;
  }

  .mhqa-center-btn:disabled {
    cursor: not-allowed;
    opacity: .8;
  }

  .mhqa-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1001;
    background: rgba(2,6,23,.34);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 0;
  }

  .mhqa-panel {
    position: fixed;
    left: 54px;
    top: 50%;
    transform: translateY(-50%);
    width: min(340px, calc(100vw - 72px));
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 18px 44px rgba(2,6,23,.24);
    z-index: 1001;
    animation: mhqa-slide-in .24s cubic-bezier(.2,.8,.2,1);
    border: 1px solid rgba(158,54,58,.12);
  }

  .mhqa-panel-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 16px;
    background: linear-gradient(135deg, #9E363A, #6B2528);
    color: #ffffff;
  }

  .mhqa-panel-title-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    font-size: 17px;
    font-weight: 950;
    letter-spacing: .2px;
  }

  .mhqa-panel-title-wrap span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mhqa-close {
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 8px;
    background: rgba(255,255,255,.14);
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .mhqa-pane-scroll {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    padding: 14px 16px 16px;
    background: #ffffff;
  }

  .mhqa-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .mhqa-list-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 4px;
    border-bottom: 1px solid rgba(15,23,42,.08);
    line-height: 1.4;
  }

  .mhqa-list-item:last-child {
    border-bottom: 0;
  }

  .mhqa-list-item i {
    margin-top: 3px;
    color: #9E363A;
    font-size: 13px;
    flex: 0 0 auto;
  }

  .mhqa-list-item a,
  .mhqa-list-item span {
    flex: 1 1 auto;
    color: #334155;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    word-break: break-word;
  }

  .mhqa-list-item a:hover {
    color: #9E363A;
  }

  @keyframes mhqa-slide-in {
    from {
      opacity: 0;
      transform: translate(-12px, -50%);
    }
    to {
      opacity: 1;
      transform: translate(0, -50%);
    }
  }
`;export{k as default};