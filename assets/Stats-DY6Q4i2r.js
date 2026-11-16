import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{t as a}from"./statsSlice-B2SXB96o.js";var o=e(n(),1),s=r(),c=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}return[]},l=(e,t)=>{let n=[],r=Array.isArray(e)?e:[],i=Math.max(1,Number(t)||1);for(let e=0;e<r.length;e+=i)n.push(r.slice(e,e+i));return n},u=(e,t)=>t<=0||e<0?0:e>=t?t-1:e;function d(){let e=t(),{data:n,status:r,error:d}=i(e=>e.stats),f=(0,o.useRef)(null),p=(0,o.useRef)(!1),[m,h]=(0,o.useState)(0);(0,o.useEffect)(()=>{e(a())},[e]);let g=(0,o.useMemo)(()=>c(n?.stats_items_json).slice().sort((e,t)=>Number(e?.sort_order||0)-Number(t?.sort_order||0)),[n]),_=(0,o.useMemo)(()=>n?.metadata?.section_title||n?.metadata?.title||`Key Stats`,[n]),v=(0,o.useMemo)(()=>({autoScroll:!!(n?.auto_scroll??!0),interval:parseInt(n?.scroll_latency_ms??3e3,10)||3e3,wrap:!!(n?.loop??!0),showArrows:!!(n?.show_arrows??!0),showDots:!!(n?.show_dots??!1)}),[n]),y=(0,o.useMemo)(()=>l(g,4),[g]),b=y.length>1;(0,o.useEffect)(()=>{h(e=>u(e,y.length))},[y.length]),(0,o.useEffect)(()=>{if(!b||!v.autoScroll)return;let e=window.setInterval(()=>{h(e=>{let t=e+1;return t<y.length?t:v.wrap?0:e})},v.interval);return()=>window.clearInterval(e)},[y.length,b,v.autoScroll,v.interval,v.wrap]),(0,o.useEffect)(()=>{if(!f.current||p.current||g.length===0)return;let e=()=>{(f.current?.querySelectorAll(`.stat-num`)||[]).forEach(e=>{let t=Number(e.getAttribute(`data-count`)||0),n=0,r=()=>{let i=Math.max(1,t/50);n+=i,n<t?(e.textContent=String(Math.ceil(n)),window.requestAnimationFrame(r)):e.textContent=String(t)};r()}),p.current=!0},t=new IntersectionObserver(n=>{n.some(e=>e.isIntersecting)&&(e(),t.disconnect())},{threshold:.25});return t.observe(f.current),()=>t.disconnect()},[g]);let x=e=>{h(u(e,y.length))},S=()=>{h(e=>e>0?e-1:v.wrap&&b?y.length-1:e)},C=()=>{h(e=>e<y.length-1?e+1:v.wrap&&b?0:e)},w=String(n?.background_image_url||``).trim(),T=w?{backgroundImage:`linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,255,255,.88)), url("${w}")`,backgroundSize:`cover`,backgroundPosition:`center`}:void 0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`style`,{children:`
        .stats-section{
          background:linear-gradient(135deg, rgba(158,54,58,.08), rgba(201,75,80,.04));
          border-radius:18px;
          padding:50px 30px;
          border:1px solid rgba(158,54,58,.12);
          position:relative;
          overflow:hidden;
        }

        .stats-section.has-bg{
          background-size:cover;
          background-position:center;
        }

        .stats-head{
          text-align:center;
          margin-bottom:26px;
        }

        .stats-head h2{
          margin:0;
          font-weight:950;
          color:#9E363A;
          font-size:clamp(22px, 3vw, 34px);
          line-height:1.15;
        }

        .stats-grid{
          display:grid;
          grid-template-columns:repeat(2, minmax(0, 1fr));
          gap:24px;
        }

        @media (min-width:992px){
          .stats-grid{
            grid-template-columns:repeat(4, minmax(0, 1fr));
          }
        }

        .stat-item{
          text-align:center;
        }

        .stat-icon{
          display:inline-flex;
          width:42px;
          height:42px;
          align-items:center;
          justify-content:center;
          border-radius:999px;
          background:rgba(158,54,58,.10);
          color:#9E363A;
          margin-bottom:10px;
          border:1px solid rgba(158,54,58,.18);
        }

        .stat-num{
          font-size:clamp(40px, 5vw, 64px);
          font-weight:950;
          color:#9E363A;
          line-height:1;
          margin-bottom:8px;
        }

        .stat-label{
          font-size:16px;
          color:#6b7280;
          font-weight:800;
        }

        .muted-note{
          color:#6b7280;
          font-weight:800;
          text-align:center;
          margin:0;
          padding:10px 0 0;
        }

        .stats-carousel{
          position:relative;
        }

        .stats-carousel-inner{
          padding-left:56px;
          padding-right:56px;
          overflow:hidden;
        }

        .stats-carousel-track{
          display:flex;
          transition:transform .45s ease;
          will-change:transform;
        }

        .stats-carousel-slide{
          flex:0 0 100%;
          min-width:100%;
        }

        .stats-carousel-controls{
          width:46px;
          height:46px;
          top:50%;
          position:absolute;
          transform:translateY(-50%);
          opacity:1;
          background:rgba(255,255,255,.92);
          border:1px solid rgba(158,54,58,.22);
          border-radius:999px;
          box-shadow:0 12px 24px rgba(2,6,23,.12);
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          z-index:2;
        }

        .stats-carousel-controls:disabled{
          opacity:.45;
          cursor:not-allowed;
        }

        .stats-carousel-controls--prev{
          left:0;
        }

        .stats-carousel-controls--next{
          right:0;
        }

        .stats-carousel-controls i{
          color:#111;
          font-size:14px;
        }

        .stats-carousel-indicators{
          display:flex;
          justify-content:center;
          gap:6px;
          margin:14px 0 0;
        }

        .stats-carousel-dot{
          width:8px;
          height:8px;
          border-radius:999px;
          border:none;
          background:rgba(158,54,58,.55);
          cursor:pointer;
          padding:0;
        }

        .stats-carousel-dot.is-active{
          background:#9E363A;
        }

        @media (max-width:576px){
          .stats-carousel-inner{
            padding-left:44px;
            padding-right:44px;
          }

          .stats-carousel-controls{
            width:40px;
            height:40px;
          }
        }

        @media (max-width:768px){
          .stats-section{
            padding:26px;
          }

          .stat-num{
            font-size:36px;
          }
        }
      `}),(0,s.jsxs)(`section`,{ref:f,id:`statsSection`,className:`stats-section reveal ${w?`has-bg`:``}`,"data-lazy-key":`stats`,style:T,children:[(0,s.jsx)(`div`,{className:`stats-head`,children:(0,s.jsx)(`h2`,{id:`statsTitle`,children:_})}),r===`loading`&&(0,s.jsx)(`div`,{className:`stats-grid`,id:`statsRow`,children:(0,s.jsxs)(`div`,{className:`stat-item`,children:[(0,s.jsx)(`div`,{className:`stat-icon`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-chart-column`})}),(0,s.jsx)(`div`,{className:`stat-num`,"data-count":`0`,children:`0`}),(0,s.jsx)(`div`,{className:`stat-label`,children:`Loading…`})]})}),r===`failed`&&(0,s.jsx)(`div`,{id:`statsRow`,children:(0,s.jsx)(`p`,{className:`muted-note`,children:d||`Failed to load stats.`})}),r!==`loading`&&r!==`failed`&&g.length===0&&(0,s.jsx)(`div`,{id:`statsRow`,children:(0,s.jsx)(`p`,{className:`muted-note`,children:`No stats published.`})}),r!==`loading`&&r!==`failed`&&g.length>0&&!b&&(0,s.jsx)(`div`,{className:`stats-grid`,id:`statsRow`,children:g.slice(0,4).map((e,t)=>{let n=e?.label||e?.key||`—`,r=String(e?.value??`0`).replace(/[^\d]/g,``)||`0`;return(0,s.jsxs)(`div`,{className:`stat-item`,children:[(0,s.jsx)(`div`,{className:`stat-icon`,children:(0,s.jsx)(`i`,{className:e?.icon_class||`fa-solid fa-chart-column`})}),(0,s.jsx)(`div`,{className:`stat-num`,"data-count":r,children:`0`}),(0,s.jsx)(`div`,{className:`stat-label`,children:n})]},t)})}),r!==`loading`&&r!==`failed`&&g.length>0&&b&&(0,s.jsx)(`div`,{id:`statsRow`,children:(0,s.jsxs)(`div`,{className:`stats-carousel`,children:[v.showArrows&&b&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`button`,{type:`button`,className:`stats-carousel-controls stats-carousel-controls--prev`,onClick:S,disabled:!v.wrap&&m===0,"aria-label":`Previous`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-chevron-left`})}),(0,s.jsx)(`button`,{type:`button`,className:`stats-carousel-controls stats-carousel-controls--next`,onClick:C,disabled:!v.wrap&&m===y.length-1,"aria-label":`Next`,children:(0,s.jsx)(`i`,{className:`fa-solid fa-chevron-right`})})]}),(0,s.jsx)(`div`,{className:`stats-carousel-inner`,children:(0,s.jsx)(`div`,{className:`stats-carousel-track`,style:{transform:`translateX(-${m*100}%)`},children:y.map((e,t)=>(0,s.jsx)(`div`,{className:`stats-carousel-slide`,children:(0,s.jsx)(`div`,{className:`stats-grid`,children:e.map((e,n)=>{let r=e?.label||e?.key||`—`,i=String(e?.value??`0`).replace(/[^\d]/g,``)||`0`;return(0,s.jsxs)(`div`,{className:`stat-item`,children:[(0,s.jsx)(`div`,{className:`stat-icon`,children:(0,s.jsx)(`i`,{className:e?.icon_class||`fa-solid fa-chart-column`})}),(0,s.jsx)(`div`,{className:`stat-num`,"data-count":i,children:`0`}),(0,s.jsx)(`div`,{className:`stat-label`,children:r})]},`${t}-${n}`)})})},t))})}),v.showDots&&b&&(0,s.jsx)(`div`,{className:`stats-carousel-indicators`,children:y.map((e,t)=>(0,s.jsx)(`button`,{type:`button`,className:`stats-carousel-dot ${m===t?`is-active`:``}`,"aria-label":`Slide ${t+1}`,"aria-current":m===t?`true`:void 0,onClick:()=>x(t)},t))})]})})]})]})}export{d as default};