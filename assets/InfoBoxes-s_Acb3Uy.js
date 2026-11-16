import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{A as t,C as n,I as r,p as i,w as a}from"./react-vendor-CMR_y1jB.js";import{r as o,t as s}from"./infoBoxesSlice-CueDGpvh.js";import{c,i as l,o as u,t as d}from"./pageRouting-BdwTUDuS.js";import{t as f}from"./scrollers-DpW7Hdbm.js";var p=e(r(),1),m=i(),h=[`career_notices`,`why_us`,`scholarships`],g={career_notices:{title:`Career At MSIT`,iconClass:`fa-solid fa-trophy`,itemIconClass:`fa-solid fa-chevron-right`,emptyText:`No career notices.`},why_us:{title:`Why MSIT`,iconClass:`fa-solid fa-star`,itemIconClass:`fa-solid fa-check`,emptyText:`No highlights.`},scholarships:{title:`Scholarship`,iconClass:`fa-solid fa-award`,itemIconClass:`fa-solid fa-gift`,emptyText:`No scholarships.`}};function _(e){if(!e)return``;if(e.slug&&e.categoryKey)return d(e.categoryKey,e.slug);let t=String(e.href||``).trim();return t?c(u(t)):``}function v({sectionKey:e,items:n}){let r=t(),i=(0,p.useRef)(null),a=(0,p.useRef)(null),o=g[e];f(i,a,{axis:`y`,minItems:7,speedPxPerSec:15,pauseDelayMs:1200,disableBelow:768},[n.length]);let s=(0,p.useMemo)(()=>n.length?n.slice(0,60):[{id:`${e}-empty`,title:o.emptyText,href:``}],[n,o.emptyText,e]),u=(e,t)=>{let n=c(t);if(!n||!l(n)||/^(mailto:|tel:|sms:|whatsapp:|#)/i.test(n))return;let i=new URL(n,window.location.origin);e.preventDefault(),r(`${i.pathname}${i.search}${i.hash}`)};return(0,m.jsxs)(`div`,{className:`msit-home-info-box`,children:[(0,m.jsxs)(`h5`,{className:`msit-home-info-box__heading`,children:[(0,m.jsx)(`i`,{className:o.iconClass,"aria-hidden":`true`}),(0,m.jsx)(`span`,{children:o.title})]}),(0,m.jsx)(`div`,{ref:i,className:`msit-home-info-box__viewport`,tabIndex:0,children:(0,m.jsx)(`ul`,{ref:a,className:`msit-home-info-box__list`,children:s.map(e=>{let t=_(e),n=!!t,r=e.title||e.description||e.buttonText||o.emptyText;return(0,m.jsxs)(`li`,{className:`msit-home-info-box__item`,children:[(0,m.jsx)(`i`,{className:o.itemIconClass,"aria-hidden":`true`}),n?(0,m.jsx)(`a`,{href:t,onClick:e=>u(e,t),children:r}):(0,m.jsx)(`span`,{children:r})]},e.id)})})})]})}function y(){return(0,m.jsxs)(`section`,{className:`msit-home-info-boxes-section`,children:[(0,m.jsx)(`style`,{children:b}),(0,m.jsx)(`div`,{className:`msit-home-container`,children:(0,m.jsx)(`div`,{className:`msit-home-info-boxes-grid`,children:h.map(e=>(0,m.jsxs)(`div`,{className:`msit-home-info-box`,children:[(0,m.jsxs)(`h5`,{className:`msit-home-info-box__heading`,children:[(0,m.jsx)(`i`,{className:g[e].iconClass,"aria-hidden":`true`}),(0,m.jsx)(`span`,{children:g[e].title})]}),(0,m.jsx)(`div`,{className:`msit-home-info-box__viewport`,children:(0,m.jsx)(`ul`,{className:`msit-home-info-box__list`,children:Array.from({length:5}).map((t,n)=>(0,m.jsxs)(`li`,{className:`msit-home-info-box__item`,children:[(0,m.jsx)(`i`,{className:g[e].itemIconClass,"aria-hidden":`true`}),(0,m.jsx)(`span`,{className:`block h-4 w-full animate-pulse rounded-full bg-white/15`})]},`${e}-${n}`))})})]},e))})})]})}var b=`
  .msit-home-info-boxes-section {
    width: 100%;
    background: #ffffff;
  }

  .msit-home-container {
    width: min(1320px, 100%);
    margin: 0 auto;
  }

  .msit-home-info-boxes-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .msit-home-info-box {
    position: relative;
    overflow: hidden;
    height: 100%;
    min-height: 320px;
    border-radius: 16px;
    background: #9E363A;
    color: #ffffff;
    padding: 24px;
    box-shadow: 0 10px 28px rgba(0,0,0,.10);
  }

  .msit-home-info-box::after {
    content: '';
    position: absolute;
    inset: -40px -40px auto auto;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.18), rgba(255,255,255,0));
    transform: rotate(18deg);
    pointer-events: none;
  }

  .msit-home-info-box__heading {
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

  .msit-home-info-box__viewport {
    position: relative;
    z-index: 1;
    height: 260px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 4px;
    scrollbar-gutter: stable;
    overscroll-behavior: contain;
  }

  .msit-home-info-box__viewport.scroll-active {
    overflow: hidden !important;
    padding-right: 0 !important;
    scrollbar-gutter: auto;
  }

  .msit-home-info-box__viewport:not(.scroll-active)::-webkit-scrollbar {
    width: 6px;
  }

  .msit-home-info-box__viewport:not(.scroll-active)::-webkit-scrollbar-track {
    background: rgba(255,255,255,.08);
    border-radius: 4px;
    margin: 4px 0;
  }

  .msit-home-info-box__viewport:not(.scroll-active)::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,.34);
    border-radius: 4px;
  }

  .msit-home-info-box__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .msit-home-info-box__item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 0;
    border-bottom: 1px dashed rgba(255,255,255,.30);
    font-size: 14px;
    line-height: 1.45;
  }

  .msit-home-info-box__item:last-child {
    border-bottom: 0;
  }

  .msit-home-info-box__item i {
    margin-top: 2px;
    opacity: .92;
    flex: 0 0 auto;
  }

  .msit-home-info-box__item span,
  .msit-home-info-box__item a {
    color: #ffffff;
    text-decoration: none;
    flex: 1 1 auto;
    word-break: break-word;
  }

  .msit-home-info-box__item a:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .msit-home-info-boxes-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }

    .msit-home-info-boxes-grid > .msit-home-info-box:nth-child(3) {
      grid-column: 1 / -1;
    }

    .msit-home-info-box {
      min-height: 286px;
      padding: 20px;
      border-radius: 14px;
    }

    .msit-home-info-box__heading {
      margin-bottom: 10px;
      font-size: 17px;
    }

    .msit-home-info-box__viewport {
      height: 228px;
    }

    .msit-home-info-box__item {
      gap: 9px;
      padding: 7px 0;
      font-size: 13.5px;
      line-height: 1.4;
    }
  }

  @media (max-width: 767.98px) {
    .msit-home-info-boxes-grid {
      grid-template-columns: 1fr;
    }

    .msit-home-info-box {
      min-height: 0;
    }
  }
`;function x(){let e=n(),{items:t,status:r,error:i}=a(o);(0,p.useEffect)(()=>{e(s())},[e]);let c=(0,p.useMemo)(()=>h.reduce((e,n)=>(e[n]=t.filter(e=>e.categoryKey===n),e),{}),[t]);return r===`idle`||r===`loading`?(0,m.jsx)(y,{}):(0,m.jsxs)(`section`,{className:`msit-home-info-boxes-section`,children:[(0,m.jsx)(`style`,{children:b}),(0,m.jsxs)(`div`,{className:`msit-home-container`,children:[r===`failed`?(0,m.jsx)(`div`,{className:`mb-4 rounded-[16px] border border-[#f3d0d2] bg-[#fff5f5] px-4 py-3 text-sm font-semibold text-[#9E363A]`,children:i||`Failed to load quick links.`}):null,(0,m.jsx)(`div`,{className:`msit-home-info-boxes-grid`,children:h.map(e=>(0,m.jsx)(v,{sectionKey:e,items:c[e]||[]},e))})]})]})}export{x as default};