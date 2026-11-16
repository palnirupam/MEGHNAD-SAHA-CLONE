import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{A as t,C as n,I as r,p as i,w as a}from"./react-vendor-CMR_y1jB.js";import{r as o,t as s}from"./homeHighlightsSlice-DUfxPTih.js";import{c,i as l,o as u,t as d}from"./pageRouting-BdwTUDuS.js";import{t as f}from"./scrollers-DpW7Hdbm.js";var p=e(r(),1),m=i(),h=[`achievements`,`student_activities`,`placement_notices`],g={achievements:{title:`Achievements`,iconClass:`fa-solid fa-trophy`,itemIconClass:`fa-solid fa-medal`,emptyText:`No achievements found.`},student_activities:{title:`Students Activity`,iconClass:`fa-solid fa-users`,itemIconClass:`fa-solid fa-calendar`,emptyText:`No student activities found.`},placement_notices:{title:`Placement Notice`,iconClass:`fa-solid fa-briefcase`,itemIconClass:`fa-solid fa-building`,emptyText:`No placement notices found.`}},_=e=>{let t=String(e||``).trim().toLowerCase();return t===`_blank`||t===`blank`||t===`new`},v=(e,t)=>{let n=String(e||``).trim();if(!n)return!1;let r=n.toLowerCase(),i=String(t||``).trim().toLowerCase();return i&&r.startsWith(`${i}-`)?!1:!!(/^\d+$/.test(n)||/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(n)||/^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(n))};function y(e,t){if(!e)return``;let n=String(e.slug||``).trim();if(n)return d(e.categoryKey||t,n);let r=String(e.href||``).trim();if(r)return c(u(r));let i=String(e.id||``).trim();return v(i,t)?d(e.categoryKey||t,i):``}function b({sectionKey:e,items:n}){let r=t(),i=(0,p.useRef)(null),a=(0,p.useRef)(null),o=g[e];f(i,a,{axis:`y`,minItems:7,speedPxPerSec:15,pauseDelayMs:1200,disableBelow:768},[n.length]);let s=(0,p.useMemo)(()=>n.length?n.slice(0,80):[{id:`${e}-empty`,title:o.emptyText,href:``}],[n,o.emptyText,e]),u=(e,t,n)=>{if(_(n))return;let i=c(t);if(!i||!l(i)||/^(mailto:|tel:|sms:|whatsapp:|#)/i.test(i))return;let a=new URL(i,window.location.origin);e.preventDefault(),r(`${a.pathname}${a.search}${a.hash}`)};return(0,m.jsxs)(`div`,{className:`msit-home-highlights-box`,children:[(0,m.jsxs)(`h5`,{className:`msit-home-highlights-box__heading`,children:[(0,m.jsx)(`i`,{className:o.iconClass,"aria-hidden":`true`}),(0,m.jsx)(`span`,{children:o.title})]}),(0,m.jsx)(`div`,{ref:i,className:`msit-home-highlights-box__viewport`,tabIndex:0,children:(0,m.jsx)(`ul`,{ref:a,className:`msit-home-highlights-box__list`,children:s.map(t=>{let n=y(t,e),r=!!n,i=t.title||o.emptyText,a=_(t.target);return(0,m.jsxs)(`li`,{className:`msit-home-highlights-box__item`,children:[(0,m.jsx)(`i`,{className:o.itemIconClass,"aria-hidden":`true`}),r?(0,m.jsx)(`a`,{href:n,target:a?`_blank`:void 0,rel:a?`noreferrer`:void 0,onClick:e=>u(e,n,t.target),children:i}):(0,m.jsx)(`span`,{children:i})]},t.id)})})})]})}function x(){return(0,m.jsxs)(`section`,{className:`msit-home-highlights-section`,children:[(0,m.jsx)(`style`,{children:S}),(0,m.jsx)(`div`,{className:`msit-home-highlights-grid`,children:h.map(e=>(0,m.jsxs)(`div`,{className:`msit-home-highlights-box`,children:[(0,m.jsxs)(`h5`,{className:`msit-home-highlights-box__heading`,children:[(0,m.jsx)(`i`,{className:g[e].iconClass,"aria-hidden":`true`}),(0,m.jsx)(`span`,{children:g[e].title})]}),(0,m.jsx)(`div`,{className:`msit-home-highlights-box__viewport`,children:(0,m.jsx)(`ul`,{className:`msit-home-highlights-box__list`,children:Array.from({length:6}).map((t,n)=>(0,m.jsxs)(`li`,{className:`msit-home-highlights-box__item`,children:[(0,m.jsx)(`i`,{className:g[e].itemIconClass,"aria-hidden":`true`}),(0,m.jsx)(`span`,{className:`block h-4 w-full animate-pulse rounded-full bg-white/15`})]},`${e}-${n}`))})})]},e))})]})}var S=`
  .msit-home-highlights-section {
    width: 100%;
    background: #ffffff;
  }

  .msit-home-highlights-grid {
    width: min(1320px, 100%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .msit-home-highlights-box {
    position: relative;
    overflow: hidden;
    height: 100%;
    min-height: 320px;
    border-radius: 16px;
    background: #9E363A;
    color: #ffffff;
    padding: 24px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.10);
  }

  .msit-home-highlights-box::after {
    content: "";
    position: absolute;
    inset: -40px -40px auto auto;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.18), rgba(255,255,255,0));
    transform: rotate(18deg);
    pointer-events: none;
  }

  .msit-home-highlights-box__heading {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 12px;
    font-size: 18px;
    font-weight: 900;
    color: #ffffff;
  }

  .msit-home-highlights-box__viewport {
    position: relative;
    z-index: 1;
    height: 260px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 4px;
    scrollbar-gutter: stable;
    overscroll-behavior: contain;
  }

  .msit-home-highlights-box__viewport.scroll-active {
    overflow: hidden !important;
    padding-right: 0 !important;
    scrollbar-gutter: auto;
  }

  .msit-home-highlights-box__viewport:not(.scroll-active)::-webkit-scrollbar {
    width: 6px;
  }

  .msit-home-highlights-box__viewport:not(.scroll-active)::-webkit-scrollbar-track {
    background: rgba(255,255,255,.08);
    border-radius: 4px;
    margin: 4px 0;
  }

  .msit-home-highlights-box__viewport:not(.scroll-active)::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,.34);
    border-radius: 4px;
  }

  .msit-home-highlights-box__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .msit-home-highlights-box__item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 0;
    border-bottom: 1px dashed rgba(255,255,255,.30);
    font-size: 14px;
    line-height: 1.45;
  }

  .msit-home-highlights-box__item:last-child {
    border-bottom: 0;
  }

  .msit-home-highlights-box__item i {
    margin-top: 2px;
    opacity: .92;
    flex: 0 0 auto;
  }

  .msit-home-highlights-box__item span,
  .msit-home-highlights-box__item a {
    color: #ffffff;
    text-decoration: none;
    flex: 1 1 auto;
    word-break: break-word;
  }

  .msit-home-highlights-box__item a:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .msit-home-highlights-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }

    .msit-home-highlights-grid > .msit-home-highlights-box:nth-child(3) {
      grid-column: 1 / -1;
    }

    .msit-home-highlights-box {
      min-height: 286px;
      padding: 20px;
      border-radius: 14px;
    }

    .msit-home-highlights-box__heading {
      margin-bottom: 10px;
      font-size: 17px;
    }

    .msit-home-highlights-box__viewport {
      height: 228px;
    }

    .msit-home-highlights-box__item {
      gap: 9px;
      padding: 7px 0;
      font-size: 13.5px;
      line-height: 1.4;
    }
  }

  @media (max-width: 767.98px) {
    .msit-home-highlights-grid {
      grid-template-columns: 1fr;
    }

    .msit-home-highlights-box {
      min-height: 0;
    }
  }
`;function C(){let e=n(),{achievements:t,studentActivities:r,placementNotices:i,status:c,error:l}=a(o);(0,p.useEffect)(()=>{c===`idle`&&e(s())},[e,c]);let u=(0,p.useMemo)(()=>({achievements:t,student_activities:r,placement_notices:i}),[t,r,i]);return c===`idle`||c===`loading`?(0,m.jsx)(x,{}):(0,m.jsxs)(`section`,{className:`msit-home-highlights-section`,children:[(0,m.jsx)(`style`,{children:S}),(0,m.jsxs)(m.Fragment,{children:[c===`failed`?(0,m.jsx)(`div`,{className:`mb-4 rounded-[16px] border border-[#f3d0d2] bg-[#fff5f5] px-4 py-3 text-sm font-semibold text-[#9E363A]`,children:l||`Failed to load homepage highlights.`}):null,(0,m.jsx)(`div`,{className:`msit-home-highlights-grid`,children:h.map(e=>(0,m.jsx)(b,{sectionKey:e,items:u[e]||[]},e))})]})]})}export{C as default};