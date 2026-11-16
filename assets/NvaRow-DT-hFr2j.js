import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{A as t,C as n,I as r,p as i,w as a}from"./react-vendor-CMR_y1jB.js";import{r as o,t as s}from"./nvaRowSlice-DZX-ekYC.js";import{c,i as l,o as u}from"./pageRouting-BdwTUDuS.js";import{t as d}from"./scrollers-DpW7Hdbm.js";var f=e(r(),1),p=i(),m=e=>{let t=String(e||``).trim();return t?/^(https?:\/\/|mailto:|tel:|sms:|whatsapp:|#)/i.test(t)||t.startsWith(`/`)?t:`/${t.replace(/^\/+/,``)}`:``},h=e=>{let t=String(e||``).trim();if(!t)return``;if(t.includes(`youtube-nocookie.com/embed/`))return t;let n=t.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/);if(n)return`https://www.youtube-nocookie.com/embed/${n[1]}`;let r=t.match(/[?&]v=([a-zA-Z0-9_-]{6,})/);if(r)return`https://www.youtube-nocookie.com/embed/${r[1]}`;let i=t.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{6,})/);return i?`https://www.youtube-nocookie.com/embed/${i[1]}`:t},g=e=>{let t=String(e||``).toLowerCase();return t.includes(`counsel`)?`fa-solid fa-calendar`:t.includes(`admission`)?`fa-solid fa-pen`:t.includes(`fee`)||t.includes(`payment`)?`fa-solid fa-credit-card`:t.includes(`tour`)?`fa-solid fa-building`:`fa-solid fa-link`},_=e=>{let t=String(e||``).trim().toLowerCase();return t===`_blank`||t===`blank`||t===`new`};function v(e){if(!e)return``;let t=String(e.href||``).trim();return t?c(u(t)):``}function y({title:e,headIconClass:n,itemIconClass:r,items:i,emptyText:a}){let o=t(),s=(0,f.useRef)(null),u=(0,f.useRef)(null);d(s,u,{axis:`y`,minItems:7,speedPxPerSec:15,pauseDelayMs:1200,disableBelow:768},[i.length]);let m=(0,f.useMemo)(()=>i.length?i.slice(0,80):[{id:`${e}-empty`,title:a,href:``}],[i,e,a]),h=(e,t,n)=>{if(_(n))return;let r=c(t);if(!r||!l(r)||/^(mailto:|tel:|sms:|whatsapp:|#)/i.test(r))return;let i=new URL(r,window.location.origin);e.preventDefault(),o(`${i.pathname}${i.search}${i.hash}`)};return(0,p.jsxs)(`div`,{className:`msit-nva-card`,children:[(0,p.jsxs)(`div`,{className:`msit-nva-head`,children:[(0,p.jsx)(`i`,{className:n,"aria-hidden":`true`}),(0,p.jsx)(`span`,{children:e})]}),(0,p.jsx)(`div`,{ref:s,className:`msit-nva-body`,tabIndex:0,children:(0,p.jsx)(`ul`,{ref:u,className:`msit-nva-list`,children:m.map(e=>{let t=v(e),n=_(e.target);return(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`i`,{className:r,"aria-hidden":`true`}),t?(0,p.jsx)(`a`,{href:t,target:n?`_blank`:void 0,rel:n?`noreferrer`:void 0,onClick:n=>h(n,t,e.target),children:e.title}):(0,p.jsx)(`span`,{children:e.title})]},e.id)})})})]})}function b({center:e}){let n=t(),r=h(e?.iframeUrl),i=(e,t)=>{let r=c(t);if(!r||!l(r)||/^(mailto:|tel:|sms:|whatsapp:|#)/i.test(r))return;let i=new URL(r,window.location.origin);e.preventDefault(),n(`${i.pathname}${i.search}${i.hash}`)};return(0,p.jsxs)(`div`,{className:`msit-center-video-card`,children:[(0,p.jsx)(`div`,{className:`msit-center-video-title`,children:e?.title||`—`}),(0,p.jsx)(`div`,{className:`msit-video-embed`,children:r?(0,p.jsx)(`iframe`,{src:r,loading:`lazy`,referrerPolicy:`strict-origin-when-cross-origin`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0,title:e?.title||`Video`}):(0,p.jsx)(`div`,{className:`msit-video-empty`,children:`No video available`})}),(0,p.jsx)(`div`,{className:`msit-cta-section`,children:e?.buttons?.length?e.buttons.map((e,t)=>{let n=c(u(m(e.url))),r=!n||/^(mailto:|tel:|sms:|whatsapp:|#)/i.test(n)||!l(n);return(0,p.jsxs)(`a`,{href:n||`#`,className:`msit-cta-btn ${t>=2?`btn-secondary`:``}`,target:r?`_blank`:void 0,rel:r?`noopener noreferrer`:void 0,onClick:e=>{if(!n||n===`#`){e.preventDefault();return}i(e,n)},children:[(0,p.jsx)(`i`,{className:g(e.text),"aria-hidden":`true`}),(0,p.jsx)(`span`,{children:e.text||`Open`})]},e.id)}):(0,p.jsxs)(`a`,{href:`#`,className:`msit-cta-btn`,onClick:e=>e.preventDefault(),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-link`,"aria-hidden":`true`}),(0,p.jsx)(`span`,{children:`No actions`})]})})]})}function x(){return(0,p.jsxs)(`section`,{className:`msit-nva-section`,children:[(0,p.jsx)(`style`,{children:S}),(0,p.jsxs)(`div`,{className:`msit-nva-grid`,children:[(0,p.jsxs)(`div`,{className:`msit-nva-card`,children:[(0,p.jsxs)(`div`,{className:`msit-nva-head`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-bullhorn`,"aria-hidden":`true`}),(0,p.jsx)(`span`,{children:`Notice`})]}),(0,p.jsx)(`div`,{className:`msit-nva-body`,children:(0,p.jsx)(`ul`,{className:`msit-nva-list`,children:Array.from({length:6}).map((e,t)=>(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`i`,{className:`fa-solid fa-caret-right`,"aria-hidden":`true`}),(0,p.jsx)(`span`,{className:`block h-4 w-full animate-pulse rounded-full bg-[#9E363A]/10`})]},t))})})]}),(0,p.jsxs)(`div`,{className:`msit-center-video-card`,children:[(0,p.jsx)(`div`,{className:`h-6 w-3/4 mx-auto animate-pulse rounded-full bg-[#9E363A]/10`}),(0,p.jsx)(`div`,{className:`msit-video-embed`,children:(0,p.jsx)(`div`,{className:`absolute inset-0 animate-pulse bg-[#9E363A]/10`})}),(0,p.jsxs)(`div`,{className:`msit-cta-section`,children:[(0,p.jsx)(`div`,{className:`h-11 rounded-[14px] bg-[#f59e0b]/20`}),(0,p.jsx)(`div`,{className:`h-11 rounded-[14px] bg-[#991b1b]/20`})]})]}),(0,p.jsxs)(`div`,{className:`msit-nva-card`,children:[(0,p.jsxs)(`div`,{className:`msit-nva-head`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-bell`,"aria-hidden":`true`}),(0,p.jsx)(`span`,{children:`Announcements`})]}),(0,p.jsx)(`div`,{className:`msit-nva-body`,children:(0,p.jsx)(`ul`,{className:`msit-nva-list`,children:Array.from({length:6}).map((e,t)=>(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`i`,{className:`fa-solid fa-caret-right`,"aria-hidden":`true`}),(0,p.jsx)(`span`,{className:`block h-4 w-full animate-pulse rounded-full bg-[#9E363A]/10`})]},t))})})]})]})]})}var S=`
  .msit-nva-section {
    width: 100%;
    background: #ffffff;
  }

  .msit-nva-grid {
    width: min(1320px, 100%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    align-items: start;
  }

  .msit-nva-card {
    background: #ffffff;
    border-radius: 18px;
    box-shadow: 0 10px 28px rgba(0,0,0,.10);
    padding: 14px;
    border: 1px solid #e6c8ca;
    overflow: hidden;
    height: 100%;
  }

  .msit-nva-head {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #ffffff;
    font-weight: 950;
    letter-spacing: .3px;
    padding: 10px 12px;
    font-size: 18px;
    user-select: none;
    border-radius: 14px;
    margin: 0 0 10px;
    background: linear-gradient(135deg, #9E363A, #6B2528);
  }

  .msit-nva-head i {
    opacity: .95;
    filter: drop-shadow(0 6px 10px rgba(0,0,0,.12));
  }

  .msit-nva-body {
    background: #ffffff;
    border-radius: 14px;
    border: 1px solid rgba(17,17,17,.06);
    padding: 12px;
    color: #111111;
    position: relative;
    max-height: 260px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-gutter: stable;
    overscroll-behavior: contain;
  }

  .msit-nva-body.scroll-active {
    overflow: hidden !important;
    padding-right: 12px;
    scrollbar-gutter: auto;
  }

  .msit-nva-body:not(.scroll-active)::-webkit-scrollbar {
    width: 6px;
  }

  .msit-nva-body:not(.scroll-active)::-webkit-scrollbar-track {
    background: #f8f9fa;
    border-radius: 4px;
    margin: 4px 0;
  }

  .msit-nva-body:not(.scroll-active)::-webkit-scrollbar-thumb {
    background: #9E363A;
    border-radius: 4px;
  }

  .msit-nva-list {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
  }

  .msit-nva-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 9px 6px;
    border-bottom: 1px dashed rgba(2,6,23,.12);
    font-weight: 700;
    color: #0f172a;
    line-height: 1.35;
  }

  .msit-nva-list li:last-child {
    border-bottom: 0;
  }

  .msit-nva-list li i {
    margin-top: 3px;
    color: rgba(15,23,42,.55);
    flex: 0 0 auto;
  }

  .msit-nva-list a,
  .msit-nva-list span {
    color: #0f172a;
    text-decoration: none;
    font-weight: 400;
    line-height: 1.25;
    flex: 1 1 auto;
    word-break: break-word;
  }

  .msit-nva-list a:hover {
    color: #9E363A;
    text-decoration: underline;
  }

  .msit-center-video-card {
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #e6c8ca;
    box-shadow: 0 10px 28px rgba(0,0,0,.10);
    padding: 14px;
    height: 100%;
    overflow: hidden;
  }

  .msit-center-video-title {
    font-weight: 950;
    color: #0f172a;
    margin: 2px 0 12px;
    text-align: center;
    font-size: 1.15rem;
  }

  .msit-video-embed {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 24px rgba(2,6,23,.12);
    background: #111111;
  }

  .msit-video-embed iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .msit-video-empty {
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

  .msit-cta-section {
    padding-top: 13px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    align-items: stretch;
    justify-content: center;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .msit-cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    min-width: 0;
    background: #f59e0b;
    color: #ffffff;
    border: 0;
    border-radius: 14px;
    padding: 10px 14px;
    font-weight: 800;
    font-size: 11px;
    box-shadow: 0 6px 14px rgba(245,158,11,.28);
    transition: transform .15s ease, filter .15s ease, background .15s ease;
    text-decoration: none;
  }

  .msit-cta-btn:hover {
    background: #d97706;
    transform: translateY(-1px);
    color: #ffffff;
  }

  .msit-cta-btn.btn-secondary {
    background: #991b1b;
    box-shadow: 0 6px 14px rgba(153,27,27,.22);
  }

  .msit-cta-btn.btn-secondary:hover {
    background: #7f1d1d;
    color: #ffffff;
  }

  @media (max-width: 991.98px) {
    .msit-nva-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .msit-center-video-title {
      font-size: 18px;
    }

    .msit-cta-btn {
      font-size: 11px;
      padding: 10px 12px;
    }
  }
`;function C(){let e=n(),{notices:t,announcements:r,center:i,status:c,error:l}=a(o);return(0,f.useEffect)(()=>{c===`idle`&&e(s())},[e,c]),c===`idle`||c===`loading`?(0,p.jsx)(x,{}):(0,p.jsxs)(`section`,{className:`msit-nva-section`,children:[(0,p.jsx)(`style`,{children:S}),(0,p.jsxs)(p.Fragment,{children:[c===`failed`?(0,p.jsx)(`div`,{className:`mb-4 rounded-[16px] border border-[#f3d0d2] bg-[#fff5f5] px-4 py-3 text-sm font-semibold text-[#9E363A]`,children:l||`Failed to load NVA row.`}):null,(0,p.jsxs)(`div`,{className:`msit-nva-grid`,children:[(0,p.jsx)(y,{title:`Notice`,headIconClass:`fa-solid fa-bullhorn`,itemIconClass:`fa-solid fa-caret-right`,items:t,emptyText:`No notices found.`}),(0,p.jsx)(b,{center:i}),(0,p.jsx)(y,{title:`Announcements`,headIconClass:`fa-solid fa-bell`,itemIconClass:`fa-solid fa-caret-right`,items:r,emptyText:`No announcements found.`})]})]})]})}export{C as default};