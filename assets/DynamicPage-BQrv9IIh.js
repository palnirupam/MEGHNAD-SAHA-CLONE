const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Announcement-VJShZkLJ.js","assets/rolldown-runtime-DF2fYuay.js","assets/react-vendor-CMR_y1jB.js","assets/announcementSlice-CtjB8i6p.js","assets/data-vendor-D51LCjXb.js","assets/request-CO6BYf67.js","assets/noticeSlice-DdVhUyiX.js","assets/Achievement-CVDwOSc0.js","assets/achievementSlice-BUkw3rB0.js","assets/Notice-B88_i9yx.js","assets/Event-yhj4LHuR.js","assets/eventSlice-BTfio2tv.js","assets/Faculty-6pKcgXPQ.js","assets/facultySlice-Drq_yi0m.js","assets/PlacementOfficers-trPuSKx1.js","assets/placementOfficersSlice-B_IlFvjZ.js","assets/TechnicalAssistant-q28NRSQy.js","assets/technicalAssistantSlice-CU2Weu5R.js","assets/Alumni-Fl5TfT5x.js","assets/alumniViewAllSlice-D86wWdAK.js","assets/PlacedStudents-gyqi0zPD.js","assets/headerSlice-BsCWhg37.js","assets/ProgramToppers-BfyLfCdD.js","assets/programToppersSlice-3LFmo3ui.js","assets/T_PCell-B2ygJrCd.js","assets/T_PCellSlice-BMgUpaAb.js","assets/SuccessStories-DGM_pyAd.js","assets/successStoriesSlice-RItf2uPJ.js","assets/StudentActivities-DR7_7UTc.js","assets/studentActivitiesSlice-C3N9rK9L.js","assets/Courses-DS9zoSMI.js","assets/coursesViewAllSlice-UK8FJneo.js","assets/Gallery-DYTpcvBL.js","assets/gallerySlice-BFaUjwpv.js","assets/UserProfile-CSSEc9aq.js","assets/webofscience-BgLvP3T0.js","assets/TopHeaderMenu-DZxbAKPR.js","assets/vendor-BvoUBe9j.js","assets/Footer-zaYqAOdA.js","assets/footerSlice-DAOYiSRi.js","assets/userProfileSlice-BxBDjz7Y.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{A as t,C as n,E as r,I as i,N as a,j as o,k as s,p as c,w as l}from"./react-vendor-CMR_y1jB.js";import{i as u,n as ee,r as te,t as ne}from"./TopHeaderMenu-DZxbAKPR.js";import{n as re,s as ie}from"./headerSlice-BsCWhg37.js";import{a as ae,c as oe,i as se,l as ce,o as le,r as ue,s as de,t as fe,u as pe}from"./dynamicPageSlice-dMnDF4oo.js";import me from"./Footer-zaYqAOdA.js";import{a as d,c as he,i as ge,n as _e,r as f,s as p}from"./pageRouting-BdwTUDuS.js";var m=e(i(),1),h=c(),ve=`
.pnf2-wrap{ width:100%; padding:12px; }
.pnf2-card{
  width:100%;
  border-radius: 18px;
  border: 1px solid var(--line-strong, #e6c8ca);
  background: var(--surface, #fff);
  box-shadow: var(--shadow-2, 0 8px 22px rgba(0,0,0,.08));
  overflow:hidden;
}
.pnf2-grid{
  display:grid;
  grid-template-columns: 1fr;
}
@media (min-width: 860px){
  .pnf2-grid{ grid-template-columns: 420px 1fr; }
}
.pnf2-visual{
  position:relative;
  padding: 22px;
  min-height: 220px;
  background:
    radial-gradient(circle at 20% 10%,
      color-mix(in oklab, var(--accent-color,#C94B50) 28%, transparent),
      transparent 55%),
    radial-gradient(circle at 80% 90%,
      color-mix(in oklab, var(--primary-color,#9E363A) 18%, transparent),
      transparent 60%),
    linear-gradient(135deg,
      color-mix(in oklab, var(--primary-color,#9E363A) 10%, #ffffff 90%),
      #ffffff);
  border-bottom: 1px solid var(--line-strong, #e6c8ca);
}
@media (min-width: 860px){
  .pnf2-visual{ border-bottom:0; border-right:1px solid var(--line-strong,#e6c8ca); }
}
.pnf2-badge{
  position:relative;
  display:flex;
  flex-direction:column;
  gap:10px;
  z-index:2;
}
.pnf2-num{
  font-weight: 950;
  letter-spacing: .02em;
  font-size: 56px;
  line-height: 1;
  color: color-mix(in oklab, var(--primary-color,#9E363A) 80%, #0f172a 20%);
}
.pnf2-chip{
  display:inline-flex;
  align-items:center;
  gap:8px;
  width:max-content;
  padding:8px 12px;
  border-radius:999px;
  border:1px solid rgba(0,0,0,.08);
  background: rgba(255,255,255,.7);
  backdrop-filter: blur(8px);
  font-weight: 800;
  color: var(--ink,#0f172a);
}
.pnf2-blob{
  position:absolute;
  right:-40px;
  top: -30px;
  width: 220px;
  height: 220px;
  border-radius: 48% 52% 58% 42% / 52% 40% 60% 48%;
  background:
    radial-gradient(circle at 30% 30%,
      color-mix(in oklab, var(--accent-color,#C94B50) 55%, transparent),
      transparent 60%),
    radial-gradient(circle at 70% 70%,
      color-mix(in oklab, var(--primary-color,#9E363A) 45%, transparent),
      transparent 65%);
  filter: blur(1px);
  opacity: .95;
  animation: pnf2-float 5.2s ease-in-out infinite;
}
@keyframes pnf2-float{
  0%,100%{ transform: translateY(0) rotate(0deg) }
  50%{ transform: translateY(10px) rotate(6deg) }
}
.pnf2-lines{
  position:absolute;
  left: 22px;
  bottom: 18px;
  display:flex;
  gap:10px;
  z-index:1;
  opacity:.55;
}
.pnf2-lines span{
  display:block;
  width: 46px;
  height: 6px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--primary-color,#9E363A) 40%, #0f172a 60%);
}
.pnf2-lines span:nth-child(2){ width: 28px; opacity:.75; }
.pnf2-lines span:nth-child(3){ width: 62px; opacity:.45; }
.pnf2-content{ padding: 20px 18px; text-align:left; }
@media (min-width: 860px){ .pnf2-content{ padding: 26px 26px; } }
.pnf2-brand{
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom: 10px;
}
.pnf2-mark{
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: color-mix(in oklab, var(--primary-color,#9E363A) 12%, #ffffff 88%);
  border: 1px solid rgba(0,0,0,.08);
  color: var(--primary-color,#9E363A);
  font-size: 18px;
}
.pnf2-app{ font-weight: 950; letter-spacing:.01em; }
.pnf2-tag{ font-size: .88rem; color: var(--muted-color,#6b7280); margin-top: 1px; }
.pnf2-title{
  margin: 8px 0 0;
  font-size: 1.35rem;
  font-weight: 950;
  color: var(--ink,#0f172a);
}
.pnf2-sub{
  margin: 10px 0 0;
  color: var(--muted-color,#6b7280);
  line-height: 1.5;
  font-size: var(--fs-13, .95rem);
}
.pnf2-sub code{
  background: rgba(0,0,0,.06);
  border-radius: 10px;
  padding: 2px 8px;
}
html.theme-dark .pnf2-sub code{ background: rgba(255,255,255,.08); }
.pnf2-actions{
  margin-top: 16px;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
}
.pnf2-btn{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding: 10px 14px;
  border-radius: 14px;
  border:1px solid var(--line-strong, rgba(148,163,184,.45));
  background: var(--surface,#fff);
  color: var(--ink,#0f172a);
  font-weight: 900;
  text-decoration:none;
  cursor:pointer;
  transition: transform .18s ease, box-shadow .18s ease, opacity .18s ease;
}
.pnf2-btn:hover{ transform: translateY(-1px); box-shadow: var(--shadow-2, 0 8px 22px rgba(0,0,0,.08)); }
.pnf2-btn i{ width:18px; text-align:center; }
.pnf2-btn-primary{
  background: var(--primary-color,#9E363A);
  color:#fff;
  border-color: rgba(255,255,255,.14);
}
.pnf2-btn-primary:hover{ opacity:.95; }
.pnf2-btn-ghost{
  background: transparent;
  border-style:dashed;
}
.pnf2-help{
  margin-top: 14px;
  display:grid;
  gap:8px;
}
.pnf2-helpitem{
  display:flex;
  align-items:center;
  gap:10px;
  color: var(--muted-color,#6b7280);
  font-size: .9rem;
}
.pnf2-helpitem i{ color: color-mix(in oklab, var(--accent-color,#C94B50) 70%, #0f172a 30%); }
html.theme-dark .pnf2-card{
  background:#020617;
  border-color: rgba(148,163,184,0.6);
}
html.theme-dark .pnf2-visual{
  background:
    radial-gradient(circle at 20% 10%, rgba(201,75,80,.18), transparent 55%),
    radial-gradient(circle at 80% 90%, rgba(158,54,58,.14), transparent 60%),
    linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.02));
  border-color: rgba(148,163,184,0.35);
}
html.theme-dark .pnf2-chip{
  background: rgba(2,6,23,.55);
  border-color: rgba(148,163,184,.35);
  color:#e5e7eb;
}
html.theme-dark .pnf2-mark{
  background: rgba(255,255,255,.06);
  border-color: rgba(148,163,184,.35);
}
html.theme-dark .pnf2-title{ color:#e5e7eb; }
html.theme-dark .pnf2-tag,
html.theme-dark .pnf2-sub,
html.theme-dark .pnf2-helpitem{ color:#9ca3af; }
html.theme-dark .pnf2-btn{
  background:#0b1220;
  border-color: rgba(148,163,184,.35);
  color:#e5e7eb;
}
html.theme-dark .pnf2-btn-ghost{ background: transparent; }
`,g=()=>{if(typeof document>`u`)return`Application`;let e=document.querySelector(`meta[property="og:title"]`)?.getAttribute(`content`)?.split(`|`)[0]?.trim(),t=document.title?.split(`|`)[0]?.trim();return e||t||`Application`},ye=(0,m.memo)(function({slug:e=``,appName:n,homeHref:i=`/`,contactHref:a=`/contact-us`}){let o=t(),s=(0,m.useMemo)(()=>n||g(),[n]),c=String(e||``).trim(),l=(0,m.useCallback)(()=>{if(typeof window<`u`&&window.history.length>1){o(-1);return}o(i)},[i,o]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`style`,{children:ve}),(0,h.jsx)(`div`,{className:`pnf2-wrap`,role:`alert`,"aria-live":`polite`,children:(0,h.jsx)(`div`,{className:`pnf2-card`,children:(0,h.jsxs)(`div`,{className:`pnf2-grid`,children:[(0,h.jsxs)(`div`,{className:`pnf2-visual`,"aria-hidden":`true`,children:[(0,h.jsxs)(`div`,{className:`pnf2-badge`,children:[(0,h.jsx)(`span`,{className:`pnf2-num`,children:`404`}),(0,h.jsxs)(`span`,{className:`pnf2-chip`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`}),`Not Found`]})]}),(0,h.jsx)(`div`,{className:`pnf2-blob`}),(0,h.jsxs)(`div`,{className:`pnf2-lines`,children:[(0,h.jsx)(`span`,{}),(0,h.jsx)(`span`,{}),(0,h.jsx)(`span`,{})]})]}),(0,h.jsxs)(`div`,{className:`pnf2-content`,children:[(0,h.jsxs)(`div`,{className:`pnf2-brand`,children:[(0,h.jsx)(`div`,{className:`pnf2-mark`,"aria-hidden":`true`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,h.jsxs)(`div`,{className:`pnf2-brandtext`,children:[(0,h.jsx)(`div`,{className:`pnf2-app`,children:s}),(0,h.jsx)(`div`,{className:`pnf2-tag`,children:`The page you requested is unavailable`})]})]}),(0,h.jsx)(`h2`,{className:`pnf2-title`,children:`We can’t find that page.`}),(0,h.jsxs)(`p`,{className:`pnf2-sub`,children:[`The link may be broken, the page may have been moved, or you might not have access.`,c?(0,h.jsxs)(`span`,{className:`pnf2-slug`,style:{display:`inline`},children:[` `,`Requested: `,(0,h.jsx)(`code`,{children:c})]}):null]}),(0,h.jsxs)(`div`,{className:`pnf2-actions`,children:[(0,h.jsxs)(r,{to:i,className:`pnf2-btn pnf2-btn-primary`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-house`}),(0,h.jsx)(`span`,{children:`Go Home`})]}),(0,h.jsxs)(`button`,{type:`button`,className:`pnf2-btn`,onClick:l,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),(0,h.jsx)(`span`,{children:`Go Back`})]}),(0,h.jsxs)(r,{to:a,className:`pnf2-btn pnf2-btn-ghost`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-headset`}),(0,h.jsx)(`span`,{children:`Contact`})]})]}),(0,h.jsxs)(`div`,{className:`pnf2-help`,children:[(0,h.jsxs)(`div`,{className:`pnf2-helpitem`,children:[(0,h.jsx)(`i`,{className:`fa-regular fa-circle-check`}),(0,h.jsx)(`span`,{children:`Tip: check the URL for typos.`})]}),(0,h.jsxs)(`div`,{className:`pnf2-helpitem`,children:[(0,h.jsx)(`i`,{className:`fa-regular fa-life-ring`}),(0,h.jsx)(`span`,{children:`If you think it’s a bug, contact support.`})]})]})]})]})})})]})}),_=`
.cs2-wrap{ width:100%; padding:12px; }
.cs2-card{
  width:100%;
  border-radius: 18px;
  border: 1px solid var(--line-strong, #e6c8ca);
  background: var(--surface, #fff);
  box-shadow: var(--shadow-2, 0 8px 22px rgba(0,0,0,.08));
  overflow:hidden;
}
.cs2-grid{ display:grid; grid-template-columns: 1fr; }
@media (min-width: 860px){
  .cs2-grid{ grid-template-columns: 420px 1fr; }
}
.cs2-visual{
  position:relative;
  padding: 22px;
  min-height: 220px;
  background:
    radial-gradient(circle at 20% 10%,
      color-mix(in oklab, var(--accent-color,#C94B50) 28%, transparent),
      transparent 55%),
    radial-gradient(circle at 80% 90%,
      color-mix(in oklab, var(--primary-color,#9E363A) 18%, transparent),
      transparent 60%),
    linear-gradient(135deg,
      color-mix(in oklab, var(--primary-color,#9E363A) 10%, #ffffff 90%),
      #ffffff);
  border-bottom: 1px solid var(--line-strong, #e6c8ca);
}
@media (min-width: 860px){
  .cs2-visual{ border-bottom:0; border-right:1px solid var(--line-strong,#e6c8ca); }
}
.cs2-badge{
  position:relative;
  display:flex;
  flex-direction:column;
  gap:10px;
  z-index:2;
}
.cs2-num{
  font-weight: 950;
  letter-spacing: .02em;
  font-size: 56px;
  line-height: 1;
  color: color-mix(in oklab, var(--primary-color,#9E363A) 80%, #0f172a 20%);
}
.cs2-chip{
  display:inline-flex;
  align-items:center;
  gap:8px;
  width:max-content;
  padding:8px 12px;
  border-radius:999px;
  border:1px solid rgba(0,0,0,.08);
  background: rgba(255,255,255,.7);
  backdrop-filter: blur(8px);
  font-weight: 800;
  color: var(--ink,#0f172a);
}
.cs2-blob{
  position:absolute;
  right:-40px;
  top: -30px;
  width: 220px;
  height: 220px;
  border-radius: 48% 52% 58% 42% / 52% 40% 60% 48%;
  background:
    radial-gradient(circle at 30% 30%,
      color-mix(in oklab, var(--accent-color,#C94B50) 55%, transparent),
      transparent 60%),
    radial-gradient(circle at 70% 70%,
      color-mix(in oklab, var(--primary-color,#9E363A) 45%, transparent),
      transparent 65%);
  filter: blur(1px);
  opacity: .95;
  animation: cs2-float 5.2s ease-in-out infinite;
}
@keyframes cs2-float{
  0%,100%{ transform: translateY(0) rotate(0deg) }
  50%{ transform: translateY(10px) rotate(6deg) }
}
.cs2-lines{
  position:absolute;
  left: 22px;
  bottom: 18px;
  display:flex;
  gap:10px;
  z-index:1;
  opacity:.55;
}
.cs2-lines span{
  display:block;
  width: 46px;
  height: 6px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--primary-color,#9E363A) 40%, #0f172a 60%);
}
.cs2-lines span:nth-child(2){ width: 28px; opacity:.75; }
.cs2-lines span:nth-child(3){ width: 62px; opacity:.45; }
.cs2-content{ padding: 20px 18px; text-align:left; }
@media (min-width: 860px){ .cs2-content{ padding: 26px 26px; } }
.cs2-brand{
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom: 10px;
}
.cs2-mark{
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: color-mix(in oklab, var(--primary-color,#9E363A) 12%, #ffffff 88%);
  border: 1px solid rgba(0,0,0,.08);
  color: var(--primary-color,#9E363A);
  font-size: 18px;
}
.cs2-app{ font-weight: 950; letter-spacing:.01em; }
.cs2-tag{ font-size: .88rem; color: var(--muted-color,#6b7280); margin-top: 1px; }
.cs2-title{
  margin: 8px 0 0;
  font-size: 1.35rem;
  font-weight: 950;
  color: var(--ink,#0f172a);
}
.cs2-sub{
  margin: 10px 0 0;
  color: var(--muted-color,#6b7280);
  line-height: 1.5;
  font-size: var(--fs-13, .95rem);
}
.cs2-sub code{
  background: rgba(0,0,0,.06);
  border-radius: 10px;
  padding: 2px 8px;
}
html.theme-dark .cs2-sub code{ background: rgba(255,255,255,.08); }
.cs2-actions{
  margin-top: 16px;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
}
.cs2-btn{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding: 10px 14px;
  border-radius: 14px;
  border:1px solid var(--line-strong, rgba(148,163,184,.45));
  background: var(--surface,#fff);
  color: var(--ink,#0f172a);
  font-weight: 900;
  text-decoration:none;
  cursor:pointer;
  transition: transform .18s ease, box-shadow .18s ease, opacity .18s ease;
}
.cs2-btn:hover{ transform: translateY(-1px); box-shadow: var(--shadow-2, 0 8px 22px rgba(0,0,0,.08)); }
.cs2-btn i{ width:18px; text-align:center; }
.cs2-btn-primary{
  background: var(--primary-color,#9E363A);
  color:#fff;
  border-color: rgba(255,255,255,.14);
}
.cs2-btn-primary:hover{ opacity:.95; }
.cs2-btn-ghost{
  background: transparent;
  border-style:dashed;
}
.cs2-help{
  margin-top: 14px;
  display:grid;
  gap:8px;
}
.cs2-helpitem{
  display:flex;
  align-items:center;
  gap:10px;
  color: var(--muted-color,#6b7280);
  font-size: .9rem;
}
.cs2-helpitem i{ color: color-mix(in oklab, var(--accent-color,#C94B50) 70%, #0f172a 30%); }
html.theme-dark .cs2-card{
  background:#020617;
  border-color: rgba(148,163,184,0.6);
}
html.theme-dark .cs2-visual{
  background:
    radial-gradient(circle at 20% 10%, rgba(201,75,80,.18), transparent 55%),
    radial-gradient(circle at 80% 90%, rgba(158,54,58,.14), transparent 60%),
    linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.02));
  border-color: rgba(148,163,184,0.35);
}
html.theme-dark .cs2-chip{
  background: rgba(2,6,23,.55);
  border-color: rgba(148,163,184,.35);
  color:#e5e7eb;
}
html.theme-dark .cs2-mark{
  background: rgba(255,255,255,.06);
  border-color: rgba(148,163,184,.35);
}
html.theme-dark .cs2-title{ color:#e5e7eb; }
html.theme-dark .cs2-tag,
html.theme-dark .cs2-sub,
html.theme-dark .cs2-helpitem{ color:#9ca3af; }
html.theme-dark .cs2-btn{
  background:#0b1220;
  border-color: rgba(148,163,184,.35);
  color:#e5e7eb;
}
html.theme-dark .cs2-btn-ghost{ background: transparent; }
`,v=()=>{if(typeof document>`u`)return`Application`;let e=document.querySelector(`meta[property="og:title"]`)?.getAttribute(`content`)?.split(`|`)[0]?.trim(),t=document.title?.split(`|`)[0]?.trim();return e||t||`Application`},be=(0,m.memo)(function({slug:e=``,appName:n,homeHref:i=`/`,menuHref:a=`#sidebarCard`}){let o=t(),s=(0,m.useMemo)(()=>n||v(),[n]),c=String(e||``).trim(),l=(0,m.useCallback)(()=>{if(typeof window<`u`&&window.history.length>1){o(-1);return}o(i)},[i,o]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`style`,{children:_}),(0,h.jsx)(`div`,{className:`cs2-wrap`,role:`status`,"aria-live":`polite`,children:(0,h.jsx)(`div`,{className:`cs2-card`,children:(0,h.jsxs)(`div`,{className:`cs2-grid`,children:[(0,h.jsxs)(`div`,{className:`cs2-visual`,"aria-hidden":`true`,children:[(0,h.jsxs)(`div`,{className:`cs2-badge`,children:[(0,h.jsx)(`span`,{className:`cs2-num`,children:`Soon`}),(0,h.jsxs)(`span`,{className:`cs2-chip`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-hourglass-half`}),`Coming Soon`]})]}),(0,h.jsx)(`div`,{className:`cs2-blob`}),(0,h.jsxs)(`div`,{className:`cs2-lines`,children:[(0,h.jsx)(`span`,{}),(0,h.jsx)(`span`,{}),(0,h.jsx)(`span`,{})]})]}),(0,h.jsxs)(`div`,{className:`cs2-content`,children:[(0,h.jsxs)(`div`,{className:`cs2-brand`,children:[(0,h.jsx)(`div`,{className:`cs2-mark`,"aria-hidden":`true`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-wand-magic-sparkles`})}),(0,h.jsxs)(`div`,{className:`cs2-brandtext`,children:[(0,h.jsx)(`div`,{className:`cs2-app`,children:s}),(0,h.jsx)(`div`,{className:`cs2-tag`,children:`This section is being prepared`})]})]}),(0,h.jsx)(`h2`,{className:`cs2-title`,children:`This page is coming soon.`}),(0,h.jsxs)(`p`,{className:`cs2-sub`,children:[`The submenu destination isn’t available yet. It may still be under development or awaiting content approval.`,c?(0,h.jsxs)(`span`,{className:`cs2-slug`,style:{display:`inline`},children:[` `,`Requested: `,(0,h.jsx)(`code`,{children:c})]}):null]}),(0,h.jsxs)(`div`,{className:`cs2-actions`,children:[(0,h.jsxs)(r,{to:i,className:`cs2-btn cs2-btn-primary`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-house`}),(0,h.jsx)(`span`,{children:`Go Home`})]}),(0,h.jsxs)(`button`,{type:`button`,className:`cs2-btn`,onClick:l,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),(0,h.jsx)(`span`,{children:`Go Back`})]}),(0,h.jsxs)(`a`,{href:a,className:`cs2-btn cs2-btn-ghost`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-layer-group`}),(0,h.jsx)(`span`,{children:`Explore Menu`})]})]}),(0,h.jsxs)(`div`,{className:`cs2-help`,children:[(0,h.jsxs)(`div`,{className:`cs2-helpitem`,children:[(0,h.jsx)(`i`,{className:`fa-regular fa-circle-check`}),(0,h.jsx)(`span`,{children:`Try another submenu from the left list.`})]}),(0,h.jsxs)(`div`,{className:`cs2-helpitem`,children:[(0,h.jsx)(`i`,{className:`fa-regular fa-life-ring`}),(0,h.jsx)(`span`,{children:`If you need this urgently, contact support.`})]})]})]})]})})})]})}),y=(0,m.lazy)(()=>a(()=>import(`./Announcement-VJShZkLJ.js`),__vite__mapDeps([0,1,2,3,4,5,6]))),b=(0,m.lazy)(()=>a(()=>import(`./Achievement-CVDwOSc0.js`),__vite__mapDeps([7,1,2,8,4,5,6]))),x=(0,m.lazy)(()=>a(()=>import(`./Notice-B88_i9yx.js`),__vite__mapDeps([9,1,2,6,4,5]))),S=(0,m.lazy)(()=>a(()=>import(`./Event-yhj4LHuR.js`),__vite__mapDeps([10,1,2,11,4,5]))),xe=(0,m.lazy)(()=>a(()=>import(`./Faculty-6pKcgXPQ.js`),__vite__mapDeps([12,1,2,13,4,5]))),C=(0,m.lazy)(()=>a(()=>import(`./PlacementOfficers-trPuSKx1.js`),__vite__mapDeps([14,1,2,15,4,5]))),w=(0,m.lazy)(()=>a(()=>import(`./TechnicalAssistant-q28NRSQy.js`),__vite__mapDeps([16,1,2,17,4,5]))),T=(0,m.lazy)(()=>a(()=>import(`./Alumni-Fl5TfT5x.js`),__vite__mapDeps([18,1,2,19,4,5]))),E=(0,m.lazy)(()=>a(()=>import(`./PlacedStudents-gyqi0zPD.js`),__vite__mapDeps([20,1,2,21,4,5]))),Se=(0,m.lazy)(()=>a(()=>import(`./ProgramToppers-BfyLfCdD.js`),__vite__mapDeps([22,1,2,23,4,5]))),D=(0,m.lazy)(()=>a(()=>import(`./T_PCell-B2ygJrCd.js`),__vite__mapDeps([24,1,2,25,4,5]))),O=(0,m.lazy)(()=>a(()=>import(`./SuccessStories-DGM_pyAd.js`),__vite__mapDeps([26,1,2,27,4,5]))),k=(0,m.lazy)(()=>a(()=>import(`./StudentActivities-DR7_7UTc.js`),__vite__mapDeps([28,1,2,29,4,5]))),A=(0,m.lazy)(()=>a(()=>import(`./Courses-DS9zoSMI.js`),__vite__mapDeps([30,1,2,31,4,5]))),j=(0,m.lazy)(()=>a(()=>import(`./Gallery-DYTpcvBL.js`),__vite__mapDeps([32,1,2,33,4,5]))),Ce=(0,m.lazy)(()=>a(()=>import(`./UserProfile-CSSEc9aq.js`),__vite__mapDeps([34,1,2,35,36,37,21,4,5,38,39,40]))),we=`
.dp-page {
  background: var(--bg-body, #f6f7fb);
  min-height: 100vh;
}
.dp-main {
  background: var(--bg-body, #f6f7fb);
  padding: 24px 0 40px;
}
.dp-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 12px;
}
.dp-grid {
  display: grid;
  grid-template-columns: minmax(0, 300px) minmax(0, 1fr);
  gap: 22px;
  align-items: start;
}
.dp-sidebar-col.is-hidden {
  display: none;
}
.dp-grid.dp-full {
  grid-template-columns: minmax(0, 1fr);
}
.dp-sticky {
  position: sticky;
  top: 16px;
  z-index: 5;
}
.hallienz-side {
  border-radius: 18px;
  overflow: hidden;
  background: var(--surface, #fff);
  border: 1px solid var(--line-strong, #e6c8ca);
  box-shadow: var(--shadow-2, 0 8px 22px rgba(0,0,0,.08));
}
.hallienz-side__head {
  background: var(--primary-color, #9E363A);
  color: #fff;
  font-weight: 800;
  padding: 14px 16px;
  font-size: 20px;
  line-height: 1.2;
}
.hallienz-side__list,
.hallienz-side__children {
  list-style: none;
  margin: 0;
  padding: 0;
}
.hallienz-side__list {
  padding-top: 6px;
  border-bottom: 0.5rem solid var(--primary-color, #9E363A);
}
.hallienz-side__row {
  display: flex;
  align-items: stretch;
}
.hallienz-side__link {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  text-decoration: none;
  color: #0b5ed7;
  border-bottom: 1px dotted rgba(0,0,0,.16);
  transition: background .22s ease, color .22s ease;
}
.hallienz-side__link:hover {
  background: rgba(158,54,58,.06);
  color: var(--primary-color, #9E363A);
}
.hallienz-side__link.is-active {
  background: rgba(158,54,58,.10);
  color: var(--primary-color, #9E363A);
  font-weight: 800;
}
.hallienz-side__text {
  display: block;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hallienz-side__toggle {
  flex: 0 0 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: rgba(0,0,0,.55);
  border-bottom: 1px dotted rgba(0,0,0,.16);
  cursor: pointer;
  transition: background .22s ease, color .22s ease, transform .22s ease;
}
.hallienz-side__toggle:hover {
  background: rgba(158,54,58,.06);
  color: var(--primary-color, #9E363A);
}
.hallienz-side__item.is-open > .hallienz-side__row .hallienz-side__toggle {
  color: var(--primary-color, #9E363A);
}
.hallienz-side__item.is-open > .hallienz-side__row .hallienz-side__toggle i {
  transform: rotate(90deg);
}
.hallienz-side__children {
  display: none;
  background: rgba(158,54,58,.03);
}
.hallienz-side__item.is-open > .hallienz-side__children {
  display: block;
}
.hallienz-side__children .hallienz-side__link,
.hallienz-side__children .hallienz-side__toggle {
  border-bottom: 1px dotted rgba(0,0,0,.12);
}
.dp-card {
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid var(--line-strong, #e6c8ca);
  box-shadow: var(--shadow-2, 0 8px 22px rgba(0,0,0,.08));
  overflow: hidden;
}
.dp-card__head {
  padding: 16px 18px 10px;
  border-bottom: 1px solid rgba(0,0,0,.06);
}
.dp-title {
  margin: 0;
  color: var(--ink, #111827);
  font-weight: 800;
  text-align: center;
  line-height: 1.25;
  font-size: clamp(1.2rem, 1rem + .6vw, 1.7rem);
}
.dp-card__body {
  padding: 18px;
}
.dp-loading,
.dp-empty,
.dp-error {
  padding: 28px 18px;
  text-align: center;
  color: var(--muted-color, #64748b);
}
.dp-empty h3,
.dp-error h3 {
  margin: 0 0 8px;
  color: var(--ink, #111827);
  font-size: 1.2rem;
  font-weight: 800;
}
.dp-empty p,
.dp-error p {
  margin: 0;
}
.dp-loader {
  display: inline-flex;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 3px solid rgba(158,54,58,.16);
  border-top-color: var(--primary-color, #9E363A);
  animation: dpSpin 1s linear infinite;
  margin-bottom: 12px;
}
@keyframes dpSpin { to { transform: rotate(360deg); } }
.dp-html-frame {
  width: 100%;
  min-height: 240px;
  border: 0;
  display: block;
  background: transparent;
}
.dp-skel-wrap {
  padding: 10px 12px 14px;
}
.dp-skel-head,
.dp-skel-line,
.dp-skel-dot {
  background: linear-gradient(90deg, rgba(158,54,58,.06), rgba(158,54,58,.12), rgba(158,54,58,.06));
  background-size: 200% 100%;
  animation: dpPulse 1.25s linear infinite;
}
.dp-skel-head {
  height: 18px;
  border-radius: 999px;
  margin-bottom: 14px;
}
.dp-skel-line {
  height: 13px;
  border-radius: 999px;
  margin-bottom: 10px;
}
.dp-skel-line:last-child {
  width: 72%;
  margin-bottom: 0;
}
@keyframes dpPulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.dp-side-toggle,
.dp-side-backdrop {
  display: none;
}
@media (max-width: 991.98px) {
  .dp-main { padding-top: 18px; }
  .dp-grid,
  .dp-grid.dp-full {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
  .dp-sticky {
    position: static;
  }
  .dp-sidebar-col {
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 82vw;
    max-width: 320px;
    z-index: 1301;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: var(--surface, #fff);
    box-shadow: 0 10px 30px rgba(0,0,0,.25);
    transform: translateX(-100%);
    transition: transform .28s ease;
  }
  .dp-sidebar-col.is-open {
    transform: translateX(0);
  }
  .hallienz-side {
    border-radius: 0;
    border: 0;
    box-shadow: none;
  }
  .dp-side-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1300;
    width: 26px;
    height: 54px;
    padding: 0;
    border: 0;
    border-radius: 0 10px 10px 0;
    background: var(--primary-color, #9E363A);
    color: #fff;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,.22);
  }
  .dp-side-toggle.is-open {
    left: min(82vw, 320px);
    border-radius: 10px 0 0 10px;
  }
  .dp-side-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 1299;
    background: rgba(0,0,0,.42);
    border: 0;
    padding: 0;
  }
}

/* Mobile media launchers (carousel + youtube) */
.dp-media-dock {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1300;
}
.dp-media-fab {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  color: #fff;
  font-size: 17px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0,0,0,.28);
  transition: transform .18s ease;
}
.dp-media-fab:active {
  transform: scale(.94);
}
.dp-media-fab--img {
  background: var(--primary-color, #9E363A);
}
.dp-media-fab--yt {
  background: #ff0000;
}
.dp-media-modal {
  position: fixed;
  inset: 0;
  z-index: 1400;
  background: #0b1220;
  display: flex;
  flex-direction: column;
}
.dp-media-modal__bar {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  color: #fff;
  font-weight: 700;
}
.dp-media-modal__close {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  background: rgba(255,255,255,.14);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.dp-media-modal__body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0 12px 18px;
}
.dp-media-modal__body.is-centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.dp-lb {
  position: relative;
  width: 100%;
  height: min(62vh, 460px);
  border-radius: 14px;
  overflow: hidden;
  background: transparent;
}
.dp-lb__track {
  display: flex;
  height: 100%;
  transition: transform .45s ease;
}
.dp-lb__slide {
  flex: 0 0 100%;
  min-width: 100%;
  height: 100%;
}
.dp-lb__slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.dp-lb__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 52px;
  border: 0;
  border-radius: 999px;
  background: rgba(17,24,39,.5);
  color: #fff;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  z-index: 3;
}
.dp-lb__nav--prev { left: 8px; }
.dp-lb__nav--next { right: 8px; }
.dp-lb__dots {
  display: flex;
  justify-content: center;
  gap: 7px;
  padding: 12px 0 0;
}
.dp-lb__dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: rgba(255,255,255,.45);
  cursor: pointer;
}
.dp-lb__dot.is-active {
  width: 20px;
  background: #fff;
}
.dp-vid {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 12px;
  border-radius: 14px;
  overflow: hidden;
  background: #0f172a;
}
.dp-vid iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
`,Te=`(max-width: 991.98px)`,M=String.raw`
/* Auto Image Carousel + YouTube iframe block from CE Builder */
html,
body {
  max-width: 100%;
  overflow-x: hidden;
}
.ce-ymc,
.ce-ymc * {
  box-sizing: border-box;
}
.ce-ymc {
  --ce-ymc-h: 380px;
  --ce-ymc-video-gap: 12px;
  width: 100% !important;
  max-width: 100% !important;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(240px, .95fr);
  gap: 18px;
  align-items: stretch;
  height: min(var(--ce-ymc-h), 420px);
  max-height: 420px;
  min-height: 280px;
  margin: 0 0 16px 0;
  overflow: hidden;
  font-family: inherit;
}
.ce-ymc-main {
  position: relative;
  height: 100% !important;
  min-height: 0;
  max-height: 100%;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(17, 24, 39, .08);
  border-radius: 14px;
  box-shadow: 0 8px 18px rgba(15, 23, 42, .08);
}
.ce-ymc-track {
  display: flex;
  width: 100%;
  height: 100% !important;
  min-height: 0;
  transform: translateX(0);
  transition: transform .55s ease;
  will-change: transform;
}
.ce-ymc-slide {
  flex: 0 0 100%;
  min-width: 100%;
  width: 100%;
  height: 100% !important;
  min-height: 0;
  overflow: hidden;
}
.ce-ymc-slide img {
  width: 100% !important;
  height: 100% !important;
  max-width: 100%;
  max-height: 100%;
  min-height: 0 !important;
  object-fit: cover;
  display: block;
}
.ce-ymc-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 58px;
  border: 0;
  border-radius: 999px;
  background: rgba(17, 24, 39, .42);
  color: #fff;
  font-size: 34px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: background .2s ease, transform .2s ease;
}
.ce-ymc-nav:hover {
  background: rgba(17, 24, 39, .58);
  transform: translateY(-50%) scale(1.04);
}
.ce-ymc-prev { left: 14px; }
.ce-ymc-next { right: 14px; }
.ce-ymc-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 4;
}
.ce-ymc-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  border: 0;
  background: rgba(255, 255, 255, .65);
  cursor: pointer;
  padding: 0;
}
.ce-ymc-dot.active {
  width: 22px;
  background: #fff;
}
.ce-ymc-videos {
  height: 100% !important;
  max-height: 100%;
  min-width: 0;
  min-height: 0;
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: var(--ce-ymc-video-gap);
  overflow: hidden;
}
.ce-ymc-video {
  position: relative;
  min-width: 0;
  min-height: 0;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  border-radius: 14px;
  background: #0f172a;
  box-shadow: 0 6px 15px rgba(15, 23, 42, .10);
}
.ce-ymc-iframe {
  width: 100% !important;
  height: 100% !important;
  max-width: 100%;
  max-height: 100%;
  border: 0;
  display: block;
  background: #0f172a;
}
@media (max-width: 767px) {
  .ce-ymc {
    grid-template-columns: 1fr !important;
    height: auto !important;
    max-height: none;
    min-height: 0;
    gap: 14px;
    overflow: visible;
  }
  .ce-ymc-main {
    height: 240px !important;
  }
  .ce-ymc-videos {
    grid-template-rows: repeat(3, 150px);
    gap: 12px;
    height: auto !important;
    max-height: none;
    overflow: visible;
  }
  .ce-ymc-nav {
    width: 42px;
    height: 56px;
    font-size: 32px;
  }
  .ce-ymc-prev { left: 10px; }
  .ce-ymc-next { right: 10px; }
}
html.ce-ymc-lifted .ce-ymc {
  display: none !important;
}
`,N=String.raw`
(function(){
  function ytId(url){
    url = String(url || '').trim();
    if(!url) return '';
    if(/^[A-Za-z0-9_-]{11}$/.test(url)) return url;

    var patterns = [
      /youtu\.be\/([A-Za-z0-9_-]{11})/i,
      /youtube\.com\/watch\?v=([A-Za-z0-9_-]{11})/i,
      /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/i,
      /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/i,
      /youtube\.com\/live\/([A-Za-z0-9_-]{11})/i
    ];

    for(var i=0;i<patterns.length;i++){
      var m = url.match(patterns[i]);
      if(m && m[1]) return m[1];
    }

    try{
      var u = new URL(url, window.location.origin);
      return u.searchParams.get('v') || '';
    }catch(e){ return ''; }
  }

  function embedUrl(url){
    var id = ytId(url);
    return id ? ('https://www.youtube.com/embed/' + id + '?rel=0&modestbranding=1&playsinline=1') : '';
  }

  function ensureIframeOnly(box, idx){
    var oldFrame = box.querySelector('iframe.ce-ymc-iframe, iframe');
    var existingUrl = box.getAttribute('data-youtube-url') || box.getAttribute('data-url') || box.getAttribute('data-src') || '';

    if(!existingUrl && oldFrame) existingUrl = oldFrame.getAttribute('src') || oldFrame.getAttribute('data-src') || '';

    if(!existingUrl){
      var oldLink = box.querySelector('a[href]');
      if(oldLink) existingUrl = oldLink.getAttribute('href') || '';
    }

    Array.prototype.slice.call(box.children).forEach(function(child){ child.remove(); });

    var iframe = document.createElement('iframe');
    iframe.className = 'ce-ymc-iframe';
    iframe.title = 'YouTube video ' + (idx + 1);
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-presentation');

    var src = embedUrl(existingUrl);
    if(src){
      iframe.src = src;
      iframe.style.display = 'block';
      box.setAttribute('data-youtube-url', existingUrl);
      box.style.display = '';
    }else{
      iframe.src = '';
      iframe.style.display = 'none';
      box.style.display = 'none';
    }

    box.appendChild(iframe);
    return !!src;
  }

  function rebuildDots(car){
    var dotsWrap = car.querySelector('.ce-ymc-dots');
    var slides = car.querySelectorAll('.ce-ymc-slide');
    if(!dotsWrap) return;

    dotsWrap.innerHTML = '';
    for(var i=0;i<slides.length;i++){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'ce-ymc-dot' + (i === 0 ? ' active' : '');
      b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dotsWrap.appendChild(b);
    }
  }

  function initOne(car){
    var track = car.querySelector('.ce-ymc-track');
    var slides = Array.prototype.slice.call(car.querySelectorAll('.ce-ymc-slide'));
    if(!track || !slides.length) return;

    var h = parseInt(car.getAttribute('data-height') || '', 10);
    var currentVar = parseInt((getComputedStyle(car).getPropertyValue('--ce-ymc-h') || '').replace('px',''), 10);
    var rawH = (!isNaN(h) && h > 120) ? h : ((!isNaN(currentVar) && currentVar > 120) ? currentVar : 380);
    var maxH = window.matchMedia && window.matchMedia('(max-width:767px)').matches ? 260 : 420;
    var safeH = Math.max(260, Math.min(rawH, maxH));

    if(window.matchMedia && window.matchMedia('(max-width:767px)').matches){
      car.style.removeProperty('--ce-ymc-h');
    }else{
      car.style.setProperty('--ce-ymc-h', safeH + 'px');
    }

    if(car.__ceYmcTimer){
      clearInterval(car.__ceYmcTimer);
      car.__ceYmcTimer = null;
    }

    var dotsWrap = car.querySelector('.ce-ymc-dots');
    if(dotsWrap && dotsWrap.children.length !== slides.length) rebuildDots(car);

    var dots = Array.prototype.slice.call(car.querySelectorAll('.ce-ymc-dot'));
    var index = parseInt(car.getAttribute('data-index') || car.getAttribute('data-ce-ymc-index') || '0', 10) || 0;
    index = Math.max(0, Math.min(index, slides.length - 1));

    function go(n){
      index = (n + slides.length) % slides.length;
      car.setAttribute('data-index', String(index));
      car.setAttribute('data-ce-ymc-index', String(index));
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dots.forEach(function(d, i){ d.classList.toggle('active', i === index); });
    }

    function restart(){
      if(car.__ceYmcTimer) clearInterval(car.__ceYmcTimer);
      var interval = Math.max(1200, parseInt(car.getAttribute('data-interval') || '3500', 10) || 3500);
      car.__ceYmcTimer = setInterval(function(){ go(index + 1); }, interval);
    }

    var prev = car.querySelector('.ce-ymc-prev');
    var next = car.querySelector('.ce-ymc-next');

    if(prev) prev.onclick = function(e){ e.preventDefault(); go(index - 1); restart(); };
    if(next) next.onclick = function(e){ e.preventDefault(); go(index + 1); restart(); };
    dots.forEach(function(d, i){ d.onclick = function(e){ e.preventDefault(); go(i); restart(); }; });

    var videoBoxes = Array.prototype.slice.call(car.querySelectorAll('.ce-ymc-video'));
    var visibleVideos = 0;
    videoBoxes.forEach(function(box, i){ if(ensureIframeOnly(box, i)) visibleVideos++; });

    var videosWrap = car.querySelector('.ce-ymc-videos');
    if(videosWrap){
      if(visibleVideos > 0){
        videosWrap.style.display = 'grid';
        videosWrap.style.gridTemplateRows = 'repeat(' + visibleVideos + ', minmax(0, 1fr))';
      }else{
        videosWrap.style.display = 'none';
        car.style.gridTemplateColumns = '1fr';
      }
    }

    car.onmouseenter = function(){ if(car.__ceYmcTimer) clearInterval(car.__ceYmcTimer); };
    car.onmouseleave = restart;

    go(index);
    restart();

    try { window.dispatchEvent(new Event('resize')); } catch(e) {}
    setTimeout(function(){
      try { window.dispatchEvent(new Event('resize')); } catch(e) {}
    }, 150);
  }

  function collectMedia(){
    var cars = Array.prototype.slice.call(document.querySelectorAll('.ce-ymc'));
    var images = [];
    var videos = [];

    cars.forEach(function(car){
      Array.prototype.slice.call(car.querySelectorAll('.ce-ymc-slide img')).forEach(function(img){
        var src = img.currentSrc || img.getAttribute('src') || '';
        if(src && images.indexOf(src) === -1) images.push(src);
      });

      Array.prototype.slice.call(car.querySelectorAll('.ce-ymc-video')).forEach(function(box){
        var src = embedUrl(box.getAttribute('data-youtube-url') || '');
        if(src && videos.indexOf(src) === -1) videos.push(src);
      });
    });

    if(typeof window.__dpFramePost === 'function'){
      window.__dpFramePost({ type: 'dp-frame-media', images: images, videos: videos });
    }
  }

  function init(root){
    root = root || document;
    var list = [];
    if(root.matches && root.matches('.ce-ymc')) list.push(root);
    if(root.querySelectorAll) list = list.concat(Array.prototype.slice.call(root.querySelectorAll('.ce-ymc')));
    list.forEach(initOne);
    collectMedia();
  }

  window.CEInitAutoMediaCarousel = init;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ init(document); });
  else init(document);
})();
`,Ee=[{test:/faculty/i,component:xe},{test:/(technical.?assistant|technicalassistant)/i,component:w},{test:/(placement.?officer|placementofficer)/i,component:C},{test:/announcement/i,component:y},{test:/achievement/i,component:b},{test:/notice/i,component:x},{test:/event/i,component:S},{test:/alumni/i,component:T},{test:/(placed.?student|placedstudent)/i,component:E},{test:/(program.?topper|programtopper)/i,component:Se},{test:/(tp.?cell|t&pcell|placement.?cell)/i,component:D},{test:/(success.?stor|successstory)/i,component:O},{test:/(student.?activit|studentactivit)/i,component:k},{test:/course/i,component:A},{test:/gallery/i,component:j},{test:/(user.?profile|profile)/i,component:Ce}],P=e=>String(e??``).trim(),F=(e,t)=>`${e}${t||``}`,De=e=>{let t=String(e||``).split(`?`)[0].split(`#`)[0].split(`/`).filter(Boolean);return t.length?decodeURIComponent(t[t.length-1]):``},I=e=>[...Array.isArray(e)?e:[]].sort((e,t)=>{let n=Number(e?.position||0),r=Number(t?.position||0);return n===r?Number(e?.id||0)-Number(t?.id||0):n-r}),L=(e,t=[])=>{for(let n of e||[])t.push(n),Array.isArray(n?.children)&&n.children.length&&L(n.children,t);return t},Oe=(e,t,n=[])=>{for(let r of e||[]){let e=[...n,r];if(t(r))return e;if(Array.isArray(r?.children)&&r.children.length){let n=Oe(r.children,t,e);if(n.length)return n}}return[]},R=e=>{let t=P(e);return t?t===`/`?`/`:t.replace(/\/+$/g,``)||`/`:``},z=e=>{let t=P(e);if(!t)return``;try{let e=typeof window<`u`?window.location.origin:`http://localhost`,n=new URL(t,e);return typeof window<`u`&&n.origin!==window.location.origin?n.toString():R(F(p(n.pathname||`/`),n.search||``))}catch{let[e=``]=t.split(`#`),[n=``,r=``]=e.split(`?`);return R(F(p(n||`/`),r?`?${r}`:``))}},B=e=>{let t=P(e);if(!t)return``;try{let e=typeof window<`u`?window.location.origin:`http://localhost`,n=new URL(t,e);return typeof window<`u`&&n.origin!==window.location.origin?n.toString():R(p(n.pathname||`/`))}catch{let[e=``]=t.split(`#`),[n=``]=e.split(`?`);return R(p(n||`/`))}},ke=(e,t)=>{let n=z(e),r=z(t);return!!(n&&r&&n===r)},Ae=(e,t)=>{let n=B(e),r=B(t);return!!(n&&r&&n===r)},V=e=>{let t=P(e);if(!t)return``;try{let e=new URL(t,window.location.origin);return e.origin===window.location.origin?F(e.pathname,e.search):e.toString()}catch{return t}},je=(e=``)=>{let t=new URLSearchParams(e||``);return P(t.get(`dept`)||t.get(`department`)||t.get(`department_slug`)||t.get(`departmentSlug`)||``)},Me=(e,t)=>{let n=P(e),r=P(t);if(!n||!r||d(n)||f(n))return n;try{let e=new URL(n,window.location.origin);if(e.origin!==window.location.origin)return n;let t=new URLSearchParams(e.search||``);return t.get(`dept`)||t.set(`dept`,r),`${e.pathname}${t.toString()?`?${t.toString()}`:``}${e.hash||``}`}catch{let[e=``,t=``]=n.split(`#`),[i=``,a=``]=e.split(`?`),o=new URLSearchParams(a||``);return o.get(`dept`)||o.set(`dept`,r),`${i||`/`}${o.toString()?`?${o.toString()}`:``}${t?`#${t}`:``}`}},H=e=>String(e??``).replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),U=e=>String(e??``).replace(/<\/script/gi,`<\\/script`),W=[/(?:^|\/)(?:main|index)\.(?:css|js)(?:[?#].*)?$/i,/\/src\/(?:main|index)\.[^/?#]+(?:[?#].*)?$/i,/(?:^|\/)(?:vite|@vite)(?:\/|$)/i,/react-refresh/i,/\/node_modules\//i],G=e=>{let t=P(e);return t?W.some(e=>e.test(t)):!1},K=(e=``,t=``,n=``)=>{let r=String(e??``),i=[],a=[],o=[],s=[],c=e=>{let t=String(e??``).trim();t&&i.push(t)},l=e=>{let t=String(e??``).trim();t&&a.push(t)};if(c(t),l(n),typeof window>`u`||typeof DOMParser>`u`)return{bodyHtml:r,stylesText:i.join(`

`),scriptsText:a.join(`

`),externalStyleHrefs:o,externalScriptSrcs:s};try{let e=new DOMParser().parseFromString(r||`<div></div>`,`text/html`);return e.querySelectorAll(`base`).forEach(e=>e.remove()),e.querySelectorAll(`link[rel="stylesheet"]`).forEach(e=>{let t=P(e.getAttribute(`href`));t&&!G(t)&&o.push(t),e.remove()}),e.querySelectorAll(`style`).forEach(e=>{c(e.textContent||``),e.remove()}),e.querySelectorAll(`script`).forEach(e=>{let t=P(e.getAttribute(`src`));t?G(t)||s.push(t):l(e.textContent||``),e.remove()}),{bodyHtml:e.body?.innerHTML||r,stylesText:i.join(`

`),scriptsText:a.join(`

`),externalStyleHrefs:Array.from(new Set(o)),externalScriptSrcs:Array.from(new Set(s))}}catch{return{bodyHtml:r,stylesText:i.join(`

`),scriptsText:a.join(`

`),externalStyleHrefs:o,externalScriptSrcs:s}}};function Ne(e){let t=e.component;return(0,h.jsx)(m.Suspense,{fallback:(0,h.jsxs)(`div`,{className:`dp-loading`,children:[(0,h.jsx)(`span`,{className:`dp-loader`}),(0,h.jsxs)(`div`,{children:[`Loading `,e.title||`section`,`…`]})]}),children:(0,h.jsx)(t,{})})}function Pe(){return(0,h.jsxs)(`div`,{className:`hallienz-side dp-sticky`,children:[(0,h.jsx)(`div`,{className:`hallienz-side__head`,children:`Menu`}),(0,h.jsxs)(`div`,{className:`dp-skel-wrap`,children:[(0,h.jsx)(`div`,{className:`dp-skel-head`}),(0,h.jsx)(`div`,{className:`dp-skel-line`}),(0,h.jsx)(`div`,{className:`dp-skel-line`}),(0,h.jsx)(`div`,{className:`dp-skel-line`}),(0,h.jsx)(`div`,{className:`dp-skel-line`})]})]})}function q({images:e}){let[t,n]=(0,m.useState)(0),r=e.length;if((0,m.useEffect)(()=>{if(r<2)return;let e=setInterval(()=>n(e=>(e+1)%r),3500);return()=>clearInterval(e)},[r]),!r)return null;let i=e=>n((e%r+r)%r);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`dp-lb`,children:[(0,h.jsx)(`div`,{className:`dp-lb__track`,style:{transform:`translateX(-${t*100}%)`},children:e.map((e,t)=>(0,h.jsx)(`div`,{className:`dp-lb__slide`,children:(0,h.jsx)(`img`,{src:e,alt:`Slide ${t+1}`,loading:`lazy`})},`${e}-${t}`))}),r>1?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`button`,{type:`button`,className:`dp-lb__nav dp-lb__nav--prev`,"aria-label":`Previous image`,onClick:()=>i(t-1),children:`‹`}),(0,h.jsx)(`button`,{type:`button`,className:`dp-lb__nav dp-lb__nav--next`,"aria-label":`Next image`,onClick:()=>i(t+1),children:`›`})]}):null]}),r>1?(0,h.jsx)(`div`,{className:`dp-lb__dots`,children:e.map((e,n)=>(0,h.jsx)(`button`,{type:`button`,className:`dp-lb__dot ${n===t?`is-active`:``}`,"aria-label":`Go to slide ${n+1}`,onClick:()=>i(n)},`dot-${e}-${n}`))}):null]})}function Fe({kind:e,media:t,onClose:n}){(0,m.useEffect)(()=>{let e=e=>{e.key===`Escape`&&n()};document.addEventListener(`keydown`,e);let t=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,e),document.body.style.overflow=t}},[n]);let r=e===`images`;return(0,h.jsxs)(`div`,{className:`dp-media-modal`,role:`dialog`,"aria-modal":`true`,"aria-label":r?`Image gallery`:`Videos`,children:[(0,h.jsxs)(`div`,{className:`dp-media-modal__bar`,children:[(0,h.jsx)(`span`,{children:r?`Gallery`:`Videos`}),(0,h.jsx)(`button`,{type:`button`,className:`dp-media-modal__close`,"aria-label":`Close`,onClick:n,children:(0,h.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}),(0,h.jsx)(`div`,{className:`dp-media-modal__body ${r?`is-centered`:``}`,children:r?(0,h.jsx)(q,{images:t.images}):t.videos.map((e,t)=>(0,h.jsx)(`div`,{className:`dp-vid`,children:(0,h.jsx)(`iframe`,{src:e,title:`Video ${t+1}`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0,loading:`lazy`,referrerPolicy:`strict-origin-when-cross-origin`})},`${e}-${t}`))})]})}function Ie({frameKey:e,documentData:t,onInternalNavigate:n,onFrameMedia:r,liftMedia:i}){let a=(0,m.useRef)(null),o=(0,m.useRef)(`dp-frame-${Math.random().toString(36).slice(2)}`),[s,c]=(0,m.useState)(320),l=(0,m.useMemo)(()=>{let e=typeof window<`u`?window.location.origin:`/`,{bodyHtml:n,stylesText:r,scriptsText:i,externalStyleHrefs:a,externalScriptSrcs:s}=K(t?.html||``,t?.stylesText||``,t?.scriptsText||``),c=a.map(e=>`<link rel="stylesheet" href="${H(e)}" />`).join(`
`),l=[...s.map(e=>`<script src="${H(e)}"><\/script>`),i?`<script>${U(i)}<\/script>`:``].filter(Boolean).join(`
`),u=`
      (function () {
        const channel = ${JSON.stringify(o.current)};
        const post = (payload) => {
          try {
            window.parent.postMessage({ channel, ...payload }, "*");
          } catch (_) {}
        };

        window.__dpFramePost = post;

        window.addEventListener("message", function (event) {
          const data = event.data || {};
          if (data.channel !== channel) return;
          if (data.type !== "dp-set-lift") return;

          const root = document.documentElement;
          if (root) root.classList.toggle("ce-ymc-lifted", !!data.lift);
          setTimeout(measure, 0);
          setTimeout(measure, 120);
        });

        const measure = () => {
          const body = document.body;
          const root = document.documentElement;
          const height = Math.max(
            body ? body.scrollHeight : 0,
            body ? body.offsetHeight : 0,
            root ? root.scrollHeight : 0,
            root ? root.offsetHeight : 0
          );
          post({ type: "dp-frame-height", height });
        };

        document.addEventListener(
          "click",
          function (event) {
            const link = event.target && event.target.closest ? event.target.closest("a[href]") : null;
            if (!link) return;

            const rawHref = String(link.getAttribute("href") || "").trim();
            if (!rawHref || rawHref === "#") return;
            if (/^(mailto:|tel:|sms:|whatsapp:)/i.test(rawHref)) return;

            try {
              const url = new URL(rawHref, window.location.href);
              if (url.origin !== window.location.origin) return;
              event.preventDefault();
              post({ type: "dp-frame-nav", href: url.pathname + url.search + url.hash });
            } catch (_) {}
          },
          true
        );

        if (typeof ResizeObserver === "function") {
          const observer = new ResizeObserver(measure);
          if (document.documentElement) observer.observe(document.documentElement);
          if (document.body) observer.observe(document.body);
        }

        window.addEventListener("load", measure);
        window.addEventListener("resize", measure);
        setTimeout(measure, 0);
        setTimeout(measure, 120);
        setTimeout(measure, 300);
      })();
    `;return`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <base href="${H(e)}/" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    ${c}
    <style>
      :root { color-scheme: light; }
      html, body {
        margin: 0;
        padding: 0;
        background: transparent;
        color: #111827;
        font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
      }
      body, button, input, select, textarea, table, th, td, p, span, div, a, li, dt, dd, blockquote, figcaption, small, label {
        font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      img, iframe, video, table {
        max-width: 100%;
      }
      iframe {
        width: 100%;
      }
      ${r||``}
      ${M}
    </style>
  </head>
  <body>
    ${n||``}
    <script>${U(u)}<\/script>
    ${l}
    <script>${U(N)}<\/script>
  </body>
</html>`},[t]),u=(0,m.useCallback)(()=>{let e=a.current?.contentWindow;if(e)try{e.postMessage({channel:o.current,type:`dp-set-lift`,lift:!!i},`*`)}catch{}},[i]);return(0,m.useEffect)(()=>{u()},[u,e]),(0,m.useEffect)(()=>{let e=e=>{if(e.source!==a.current?.contentWindow)return;let t=e.data||{};t?.channel===o.current&&(t?.type===`dp-frame-height`&&c(Math.max(240,Number(t.height||0)||0)),t?.type===`dp-frame-nav`&&t.href&&typeof n==`function`&&n(String(t.href)),t?.type===`dp-frame-media`&&(u(),typeof r==`function`&&r({images:Array.isArray(t.images)?t.images:[],videos:Array.isArray(t.videos)?t.videos:[]})))};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},[n,r,u]),(0,m.useEffect)(()=>{c(320)},[e]),(0,h.jsx)(`iframe`,{ref:a,title:`Dynamic page content`,className:`dp-html-frame`,srcDoc:l,style:{height:s}},e)}function J(){let e=n(),r=t(),i=s(),a=o(),[c,ve]=(0,m.useState)(()=>new Set),[g,_]=(0,m.useState)(!1),[v,y]=(0,m.useState)({images:[],videos:[]}),[b,x]=(0,m.useState)(null),[S,xe]=(0,m.useState)(()=>typeof window<`u`&&typeof window.matchMedia==`function`?window.matchMedia(Te).matches:!1),C=l(ie),w=p(i.pathname||`/`),T=(0,m.useMemo)(()=>F(w,i.search||``),[w,i.search]),E=(0,m.useMemo)(()=>je(i.search||``),[i.search]),Se=P(a.slug),D=P(_e(w)),O=Se||(D===`__HOME__`?``:D),k=P(new URLSearchParams(i.search||``).get(`submenu`)||``),A=(0,m.useMemo)(()=>`dynamic-submenu:${w}:dept:${E||`__default__`}`,[w,E]),j=P(l(e=>le(e,A))||k);(0,m.useEffect)(()=>{C.status===`idle`&&e(re())},[e,C.status]),(0,m.useEffect)(()=>{_(!1),x(null),y({images:[],videos:[]})},[w,j]),(0,m.useEffect)(()=>{if(typeof window>`u`||typeof window.matchMedia!=`function`)return;let e=window.matchMedia(Te),t=()=>{xe(e.matches),e.matches||x(null)};return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]);let Ce=(0,m.useCallback)(e=>{y(t=>{let n=t.images.length===e.images.length&&t.images.every((t,n)=>t===e.images[n]),r=t.videos.length===e.videos.length&&t.videos.every((t,n)=>t===e.videos[n]);return n&&r?t:e})},[]);(0,m.useEffect)(()=>{if(!k)return;e(pe({scopeKey:A,slug:k}));let t=new URLSearchParams(i.search||``);t.delete(`submenu`);let n=t.toString();r(`${w}${n?`?${n}`:``}${i.hash||``}`,{replace:!0})},[e,k,i.hash,i.search,r,w,A]),(0,m.useEffect)(()=>()=>{e(fe(A))},[e,A]);let M=(0,m.useMemo)(()=>I(C.menus||[]),[C.menus]),N=(0,m.useMemo)(()=>{let e=z(T),t=z(w),n=B(w),r=L(M,[]);for(let i of r)if([V(he(i?.pageUrl||i?.page_url||``)),P(i?.pageUrl||i?.page_url||i?.link||i?.url||i?.href),i?.pageSlug?`/page/${encodeURIComponent(i.pageSlug)}`:``,i?.page_slug?`/page/${encodeURIComponent(i.page_slug)}`:``,i?.slug?`/page/${encodeURIComponent(i.slug)}`:``,i?.shortcode?`/view/${encodeURIComponent(i.shortcode)}`:``].map(e=>P(e)).filter(Boolean).some(r=>ke(r,e)||ke(r,t)||Ae(r,n)))return i;for(let e of r){let t=[P(e?.pageSlug||e?.page_slug),P(e?.slug),P(e?.shortcode||e?.page_shortcode)].filter(Boolean);if(O&&t.includes(O))return e}return null},[M,T,w,O]),R=(0,m.useMemo)(()=>P(N?.pageSlug||N?.page_slug||O||N?.slug||N?.shortcode),[N,O]),H=(0,m.useMemo)(()=>[w,T,V(he(N?.pageUrl||N?.page_url||N?.link||N?.url||N?.href||``)),P(N?.pageUrl||N?.page_url||N?.link||N?.url||N?.href)].filter(Boolean),[w,T,N]),U=(0,m.useMemo)(()=>({slug:R,path:w,fullPath:T,departmentSlug:E,extraCandidates:H}),[R,w,T,E,H]),W=l(e=>de(e,U)),G=W.data;(0,m.useEffect)(()=>{w!==`/`&&(C.status===`loading`&&!R&&!H.length||e(ue({...U,force:!0})))},[e,U,w,C.status,R,H.length]);let K=(0,m.useMemo)(()=>!G&&!N?null:{pageId:G?.id||``,pageSlug:G?.slug||G?.page_slug||R||``,headerMenuId:N?.id||``,headerUuid:N?.uuid||``,departmentSlug:E},[G,N,R,E]),q=l(e=>K?ce(e,K):{status:`idle`,data:[],scope:null,error:``});(0,m.useEffect)(()=>{K&&e(ae({...K,force:!0}))},[e,K]);let J=(0,m.useMemo)(()=>I(q.data||[]),[q.data]),Le=(0,m.useMemo)(()=>j?Oe(J,e=>P(e?.slug)===j):[],[J,j]),Re=(0,m.useMemo)(()=>j&&L(J,[]).find(e=>P(e?.slug)===j)||null,[J,j]),Y=(0,m.useMemo)(()=>{if(!j)return null;let e=q.scope||{};return{slug:j,pageId:G?.id||e?.page_id||``,pageSlug:G?.slug||G?.page_slug||R||``,headerMenuId:e?.effective_header_menu_id||e?.header_menu_id||N?.id||``,headerUuid:e?.effective_header_uuid||e?.header_uuid||N?.uuid||``,departmentSlug:E}},[j,q.scope,G,R,N,E]),ze=l(e=>Y?oe(e,Y):{status:`idle`,data:null,error:``});(0,m.useEffect)(()=>{Y&&e(se({...Y,force:!0}))},[e,Y]);let X=ze.data||null,Z=P(X?.title||Re?.title||G?.page_title||G?.title||O||De(w)||`Dynamic Page`),Be=(e,t)=>{let n=[P(e?.includable_path),P(e?.slug),P(e?.page_slug),P(e?.page_shortcode),P(t?.path),P(t?.includable_path),P(t?.module),P(t?.title)].filter(Boolean);for(let e of n)for(let t of Ee)if(t.test.test(e))return t.component;return null},Q=(0,m.useMemo)(()=>Be(Re,X),[Re,X]),Ve=(0,m.useMemo)(()=>{let e=new Set(Array.from(c));for(let t of Le)e.add(t.id);return e},[c,Le]);(0,m.useEffect)(()=>{if(X?.type!==`url`)return;let e=P(X?.url||X?.link||X?.href);if(!e)return;let t=V(e);if(t){if(ge(t)&&!f(t)){r(Me(t,E),{replace:!1});return}window.open(e,`_blank`,`noopener,noreferrer`)}},[X,r,E]);let He=(0,m.useCallback)(e=>{r(Me(e,E))},[r,E]),Ue=e=>{ve(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},We=t=>{let n=P(t?.slug);n&&e(pe({scopeKey:A,slug:n}))},Ge=(e,t)=>{let n=P(t?.page_url||t?.pageUrl);n&&(d(n)||f(n))||(e.preventDefault(),We(t))},Ke=(e,t=0)=>I(e).map(e=>{let n=Array.isArray(e?.children)&&e.children.length>0,r=Ve.has(e.id),i=P(e?.slug)===j,a=P(e?.page_url||e?.pageUrl),o=w||`/`;return a&&(d(a)||f(a))&&(o=he(a)||a),(0,h.jsxs)(`li`,{className:`hallienz-side__item ${r?`is-open`:``}`,children:[(0,h.jsxs)(`div`,{className:`hallienz-side__row`,children:[(0,h.jsx)(`a`,{href:o,"data-submenu-slug":P(e?.slug),className:`hallienz-side__link ${i?`is-active`:``}`,onClick:t=>Ge(t,e),style:{paddingLeft:`${14+Math.max(0,t)*14}px`},children:(0,h.jsx)(`span`,{className:`hallienz-side__text`,children:e.title})}),n?(0,h.jsx)(`button`,{type:`button`,className:`hallienz-side__toggle`,"aria-label":`Toggle ${e.title}`,"aria-expanded":r?`true`:`false`,onClick:()=>Ue(e.id),children:(0,h.jsx)(`i`,{className:`fa-solid fa-chevron-right`})}):null]}),n?(0,h.jsx)(`ul`,{className:`hallienz-side__children`,children:Ke(e.children,t+1)}):null]},e.id||`${e.slug}-${t}`)}),qe=(0,m.useMemo)(()=>Q?null:j?!X||X.type===`coming_soon`?{html:``,stylesText:``,scriptsText:``}:X.type===`includable`?{html:P(X?.html),stylesText:P(X?.assets?.styles||X?.styles),scriptsText:P(X?.assets?.scripts||X?.scripts)}:{html:P(X?.html),stylesText:``,scriptsText:``}:{html:P(G?.content_html||G?.html),stylesText:``,scriptsText:``},[Q,j,G,X]),$=q.status===`loading`||J.length>0,Je=W.status===`loading`&&!G,Ye=W.status===`failed`&&!G,Xe=!!j&&ze.status===`failed`&&!Q,Ze=P(w||O||G?.slug||G?.page_slug||De(w)),Qe=P(j),$e=Je,et=Ye?(0,h.jsx)(ye,{slug:Ze}):Xe?(0,h.jsx)(be,{slug:Qe}):(0,h.jsxs)(`section`,{className:`dp-card`,children:[(0,h.jsx)(`div`,{className:`dp-card__head`,children:(0,h.jsx)(`h1`,{className:`dp-title`,children:Z||`Dynamic Page`})}),(0,h.jsx)(`div`,{className:`dp-card__body`,children:Q?(0,h.jsx)(Ne,{component:Q,title:Z}):X?.type===`url`&&!X?.html?(0,h.jsxs)(`div`,{className:`dp-empty`,children:[(0,h.jsx)(`h3`,{children:Z||`External Link`}),(0,h.jsx)(`p`,{children:`Opening link…`})]}):(0,h.jsx)(Ie,{frameKey:`${w}|dept:${E||`default`}|${j||`page`}|${Z}`,documentData:qe||{html:``,stylesText:``,scriptsText:``},onInternalNavigate:He,onFrameMedia:Ce,liftMedia:S})})]});return(0,h.jsxs)(`div`,{className:`dp-page`,children:[(0,h.jsx)(`style`,{children:we}),(0,h.jsx)(u,{show:$e}),(0,h.jsx)(ne,{}),(0,h.jsx)(ee,{}),(0,h.jsx)(te,{}),(0,h.jsx)(`main`,{className:`dp-main`,children:(0,h.jsx)(`div`,{className:`dp-shell`,children:(0,h.jsxs)(`div`,{className:`dp-grid ${$?``:`dp-full`}`,children:[$&&g?(0,h.jsx)(`button`,{type:`button`,className:`dp-side-backdrop`,"aria-label":`Close menu`,onClick:()=>_(!1)}):null,$?(0,h.jsx)(`button`,{type:`button`,className:`dp-side-toggle ${g?`is-open`:``}`,"aria-label":g?`Close menu`:`Open menu`,"aria-expanded":g,onClick:()=>_(e=>!e),children:(0,h.jsx)(`i`,{className:`fa-solid ${g?`fa-chevron-left`:`fa-chevron-right`}`})}):null,(0,h.jsx)(`aside`,{className:`dp-sidebar-col ${$?``:`is-hidden`} ${g?`is-open`:``}`,onClick:e=>{e.target.closest(`a`)&&_(!1)},children:q.status===`loading`&&!J.length?(0,h.jsx)(Pe,{}):J.length?(0,h.jsxs)(`div`,{id:`sidebarCard`,className:`hallienz-side dp-sticky`,children:[(0,h.jsx)(`div`,{className:`hallienz-side__head`,children:P(G?.title||G?.page_title||`Menu`)}),(0,h.jsx)(`ul`,{className:`hallienz-side__list`,children:Ke(J)})]}):null}),et]})})}),S&&(v.images.length||v.videos.length)?(0,h.jsxs)(`div`,{className:`dp-media-dock`,children:[v.images.length?(0,h.jsx)(`button`,{type:`button`,className:`dp-media-fab dp-media-fab--img`,"aria-label":`Open image gallery`,onClick:()=>x(`images`),children:(0,h.jsx)(`i`,{className:`fa-solid fa-images`})}):null,v.videos.length?(0,h.jsx)(`button`,{type:`button`,className:`dp-media-fab dp-media-fab--yt`,"aria-label":`Open videos`,onClick:()=>x(`videos`),children:(0,h.jsx)(`i`,{className:`fa-brands fa-youtube`})}):null]}):null,b?(0,h.jsx)(Fe,{kind:b,media:v,onClose:()=>x(null)}):null,(0,h.jsx)(me,{})]})}export{J as default};