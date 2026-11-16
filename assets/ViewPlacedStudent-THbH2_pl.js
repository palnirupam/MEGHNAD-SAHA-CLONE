import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,E as n,I as r,j as i,k as a,p as o,w as s}from"./react-vendor-CMR_y1jB.js";import{n as c,r as l,t as u}from"./TopHeaderMenu-DZxbAKPR.js";import{o as d,t as f}from"./headerSlice-BsCWhg37.js";import{i as p,n as m,t as h}from"./placedStudentViewSlice-C7g467lO.js";import g from"./Footer-zaYqAOdA.js";import{a as _,i as v,n as y,o as b,r as x,t as S}from"./webofscience-BgLvP3T0.js";var C=e(r(),1),w=o(),T=`https://biswakarma.msit.edu.in`,E=e=>String(e??``).replace(/<[^>]*>/g,` `).replace(/&nbsp;/gi,` `).replace(/&amp;/gi,`&`).replace(/\s+/g,` `).trim(),D=(e,t)=>{for(let n of t){let t=e?.[n];if(t!=null&&String(t).trim()!==``)return t}return``},O=e=>{let t=String(e||``).trim();return t?/^(data:|blob:|https?:\/\/|mailto:|tel:)/i.test(t)?t:t.startsWith(`//`)?`https:${t}`:t.startsWith(`/`)?`${T}${t}`:`${T}/${t.replace(/^\/+/,``)}`:``},k=e=>{let t=String(e||``).trim();if(!t)return``;let n=new Date(t.includes(`T`)?t:t.replace(` `,`T`));return Number.isNaN(n.getTime())?t:new Intl.DateTimeFormat(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`}).format(n)},A=e=>{if(e==null||e===``)return null;let t=String(e).replace(/,/g,``).match(/\d+(\.\d+)?/);if(!t)return null;let n=Number(t[0]);return Number.isFinite(n)&&n>0?n:null},j=e=>{let t=E(e),n=A(e);return!t&&!n?`Not Published`:/lpa|lakhs?|₹|rs\.?/i.test(t)?t:n?`₹${n.toFixed(n%1?1:0)} LPA`:t},M=e=>{let t=String(e||`Placed Student`).trim().split(/\s+/).filter(Boolean);return`${t[0]?.[0]||`P`}${t.length>1?t[t.length-1]?.[0]:t[0]?.[1]||`S`}`.toUpperCase()},N=e=>{let t=e?.offer_date||e?.joining_date||e?.created_at,n=t?new Date(String(t).replace(` `,`T`)):null;return n&&!Number.isNaN(n.getTime())?String(n.getFullYear()):``},P=[{key:`linkedin`,platform:`LinkedIn`,icon:v},{key:`vidyanportal`,platform:`Vidyan Portal`,icon:_},{key:`scopus`,platform:`Scopus`,icon:y},{key:`googlescholar`,platform:`Google Scholar`,icon:b},{key:`webofscience`,platform:`Web of Science`,icon:S},{key:`researchgate`,platform:`ResearchGate`,icon:x}],F={linkedin:`linkedin`,linkedinprofile:`linkedin`,vidyan:`vidyanportal`,vidwan:`vidyanportal`,vidyanportal:`vidyanportal`,irins:`vidyanportal`,scopus:`scopus`,scopusid:`scopus`,google:`googlescholar`,googlescholar:`googlescholar`,webofscience:`webofscience`,wos:`webofscience`,researchgate:`researchgate`},I={github:`fa-brands fa-github`,orcid:`fa-brands fa-orcid`,twitter:`fa-brands fa-twitter`,x:`fa-brands fa-x-twitter`,facebook:`fa-brands fa-facebook-f`,instagram:`fa-brands fa-instagram`,youtube:`fa-brands fa-youtube`,website:`fa fa-globe`,web:`fa fa-globe`,portfolio:`fa fa-globe`,mail:`fa fa-envelope`,email:`fa fa-envelope`},L=e=>E(e).toLowerCase().replace(/&/g,`and`).replace(/[^a-z0-9]+/g,``),R=e=>{let t=E(e).toLowerCase();return t?t.startsWith(`data:image/`)||t.startsWith(`http://`)||t.startsWith(`https://`)||t.includes(`/`)?!0:/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(t):!1},z=e=>{let t=E(e);return!!t&&(t.includes(`fa-`)||t.startsWith(`fa `))},B=e=>O(e?.link||e?.url||e?.profile_url||e?.social_link||e?.social_url||e?.value),V=e=>{let t=E(e?.platform||e?.name||e?.title),n=E(e?.icon||e?.icon_url||e?.image||e?.logo);if(n&&R(n)&&!n.toLowerCase().endsWith(`.pdf`))return{type:`image`,src:O(n)};if(n&&z(n))return{type:`fontawesome`,className:n};let r=L(t),i=F[r]||r,a=P.find(e=>e.key===i);if(a?.icon)return{type:`image`,src:a.icon};let o=I[r];return o?{type:`fontawesome`,className:o}:null},H=e=>(Array.isArray(e)?e:[]).map(e=>{let t=e?.active??e?.is_active??e?.status,n=B(e),r=V(e);return{...e,__link:n,__visual:r,__active:t}}).filter(e=>e.__link&&e.__visual&&String(e.__active??`1`).toLowerCase()!==`0`&&String(e.__active??`active`).toLowerCase()!==`inactive`);function U({src:e,alt:t}){let n=(0,C.useRef)(null);return(0,C.useEffect)(()=>{let t=n.current;if(!t||!e)return;let r=!1,i=e=>{if(r)return;let n=e.naturalWidth||800,i=e.naturalHeight||1e3;t.width=n,t.height=i;let a=t.getContext(`2d`);a&&a.drawImage(e,0,0,n,i)},a=new Image;return a.crossOrigin=`anonymous`,a.onload=()=>i(a),a.onerror=()=>{let t=new Image;t.onload=()=>i(t),t.src=e},a.src=e,()=>{r=!0}},[e]),(0,w.jsx)(`canvas`,{ref:n,className:`pv-canvas`,role:`img`,"aria-label":t,onContextMenu:e=>e.preventDefault()})}function W(e){if(!e)return null;let t=Array.isArray(e.recruiters)?e.recruiters:[],n=t.map(e=>({src:O(D(e,[`logo_url_full`,`logo_url`])),title:E(D(e,[`name`,`title`,`company_name`]))})).filter(e=>e.src),r=t.map(e=>E(D(e,[`name`,`title`,`company_name`]))).filter(Boolean).join(`, `)||E(D(e,[`company`,`company_name`]))||`Recruiter Not Published`;return{name:E(D(e,[`user_name`,`student_name`,`name`]))||`Placed Student`,department:E(D(e,[`department_title`,`department_name`]))||`Department`,company:r,recruiterLogos:n,role:E(D(e,[`role_title`,`role`,`designation`])),ctc:j(e.ctc),offerDate:k(e.offer_date),joiningDate:k(e.joining_date),year:N(e),image:O(D(e,[`image`,`user_image`,`photo`,`image_url`])),noteHtml:String(e.note??``).trim(),offerUrl:O(e.offer_letter_full_url),social:H(e.social_media)}}function G(){let e=t(),{slug:r}=i(),o=a(),{student:_,loading:v,error:y}=s(p),{item:b,status:x}=s(d),S=b?.primaryLogo||``,T=`/placed-students${o.search||``}`;(0,C.useEffect)(()=>(r&&e(m(r)),()=>e(h())),[r,e]),(0,C.useEffect)(()=>{x===`idle`&&e(f())},[x,e]);let D=(0,C.useMemo)(()=>W(_),[_]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{}),(0,w.jsx)(c,{}),(0,w.jsx)(l,{}),(0,w.jsx)(`style`,{children:K}),(0,w.jsx)(`section`,{className:`pv-page`,children:(0,w.jsx)(`div`,{className:`pv-wrap`,children:v?(0,w.jsx)(`div`,{className:`pv-state`,children:`Loading placement profile…`}):y||!D?(0,w.jsxs)(`div`,{className:`pv-state pv-error`,children:[(0,w.jsx)(`h3`,{children:`Profile not found`}),(0,w.jsx)(`p`,{children:y||`This placed student could not be loaded.`}),(0,w.jsx)(n,{className:`pv-back-link`,to:T,children:`Back to Placed Students`})]}):(0,w.jsxs)(`article`,{className:`pv-card`,children:[(0,w.jsxs)(`div`,{className:`pv-media`,onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),children:[D.image?(0,w.jsx)(U,{src:D.image,alt:D.name}):(0,w.jsx)(`div`,{className:`pv-media-dummy`,children:(0,w.jsx)(`div`,{className:`pv-mono`,children:M(D.name)})}),S?(0,w.jsx)(`img`,{className:`pv-watermark`,src:S,alt:``,"aria-hidden":`true`,loading:`lazy`}):null,D.recruiterLogos.length?(0,w.jsx)(`div`,{className:`pv-rec-logos`,children:D.recruiterLogos.map((e,t)=>(0,w.jsx)(`img`,{src:e.src,alt:e.title||`Recruiter`,title:e.title,loading:`lazy`},`${e.src}-${t}`))}):null]}),(0,w.jsxs)(`div`,{className:`pv-body`,children:[(0,w.jsx)(`h1`,{className:`pv-name`,children:D.name}),(0,w.jsx)(`p`,{className:`pv-dept`,children:D.department}),D.noteHtml?(0,w.jsx)(`div`,{className:`pv-note`,dangerouslySetInnerHTML:{__html:D.noteHtml}}):null,(0,w.jsxs)(`div`,{className:`pv-stats`,children:[(0,w.jsxs)(`div`,{className:`pv-stat`,children:[(0,w.jsx)(`span`,{className:`pv-stat-label`,children:`Company`}),(0,w.jsx)(`span`,{className:`pv-stat-value`,children:D.company})]}),(0,w.jsxs)(`div`,{className:`pv-stat`,children:[(0,w.jsx)(`span`,{className:`pv-stat-label`,children:`CTC`}),(0,w.jsx)(`span`,{className:`pv-stat-value pv-ctc`,children:D.ctc})]}),D.role?(0,w.jsxs)(`div`,{className:`pv-stat`,children:[(0,w.jsx)(`span`,{className:`pv-stat-label`,children:`Role`}),(0,w.jsx)(`span`,{className:`pv-stat-value`,children:D.role})]}):null,(0,w.jsxs)(`div`,{className:`pv-stat`,children:[(0,w.jsx)(`span`,{className:`pv-stat-label`,children:`Placement Year`}),(0,w.jsx)(`span`,{className:`pv-stat-value`,children:D.year||`Not Published`})]}),D.offerDate?(0,w.jsxs)(`div`,{className:`pv-stat`,children:[(0,w.jsx)(`span`,{className:`pv-stat-label`,children:`Offer Date`}),(0,w.jsx)(`span`,{className:`pv-stat-value`,children:D.offerDate})]}):null,D.joiningDate?(0,w.jsxs)(`div`,{className:`pv-stat`,children:[(0,w.jsx)(`span`,{className:`pv-stat-label`,children:`Joining Date`}),(0,w.jsx)(`span`,{className:`pv-stat-value`,children:D.joiningDate})]}):null]}),D.social.length?(0,w.jsxs)(`div`,{className:`pv-social-wrap`,children:[(0,w.jsx)(`span`,{className:`pv-social-title`,children:`Connect`}),(0,w.jsx)(`div`,{className:`pv-social`,children:D.social.map((e,t)=>{let n=E(e?.platform||e?.name||`Link`),r=e.__visual;return(0,w.jsxs)(`a`,{href:e.__link,target:`_blank`,rel:`noopener noreferrer`,title:n,"aria-label":n,children:[r?.type===`image`?(0,w.jsx)(`img`,{src:r.src,alt:n,loading:`lazy`}):null,r?.type===`fontawesome`?(0,w.jsx)(`i`,{className:r.className}):null]},`social-${t}`)})})]}):null,(0,w.jsxs)(`div`,{className:`pv-actions`,children:[(0,w.jsx)(n,{className:`pv-btn`,to:T,children:`← All Placements`}),D.offerUrl?(0,w.jsx)(`a`,{className:`pv-btn pv-btn-primary`,href:D.offerUrl,target:`_blank`,rel:`noopener noreferrer`,children:`View Offer Letter`}):null]})]})]})})}),(0,w.jsx)(g,{})]})}var K=String.raw`
.pv-page {
  --pv-maroon: var(--primary-color, #9b1c1c);
  --pv-maroon-tint: var(--light-color, #f7e9e9);
  --pv-text: #1c1e21;
  --pv-text-2: #65676b;
  --pv-text-3: #8a8d91;
  --pv-border: #e4e6eb;
  background: #f0f2f5;
  min-height: 60vh;
  padding: 28px 16px 70px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  color: var(--pv-text);
}
.pv-page * { box-sizing: border-box; }
.pv-wrap { max-width: 980px; margin: 0 auto; }

.pv-state { background: #fff; border-radius: 16px; padding: 60px 20px; text-align: center; color: var(--pv-text-2); box-shadow: 0 1px 3px rgba(0,0,0,.08); }
.pv-error h3 { margin: 0 0 8px; color: var(--pv-text); }
.pv-back-link { display: inline-block; margin-top: 14px; color: var(--pv-maroon); font-weight: 700; text-decoration: none; }

.pv-card {
  display: grid;
  grid-template-columns: 380px minmax(0, 1fr);
  gap: 0;
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(15,17,20,.10), 0 2px 6px rgba(15,17,20,.05);
}
.pv-media {
  position: relative;
  aspect-ratio: 4 / 5;
  background: linear-gradient(150deg, #f3f4f6, #e9eaee);
  overflow: hidden;
}
.pv-canvas {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center top;
  display: block;
  -webkit-user-select: none; user-select: none;
  -webkit-user-drag: none; -webkit-touch-callout: none;
  pointer-events: none;
}
.pv-watermark {
  position: absolute; top: 12px; left: 12px;
  width: 52px; height: 52px; object-fit: contain;
  pointer-events: none; z-index: 2; background: transparent;
}
.pv-media-dummy { position: absolute; inset: 0; display: grid; place-items: center; }
.pv-mono {
  width: 42%; aspect-ratio: 1; border-radius: 50%;
  display: grid; place-items: center;
  background: var(--pv-maroon); color: #fff;
  font-size: clamp(34px, 7vw, 62px); font-weight: 900;
  box-shadow: 0 8px 30px rgba(0,0,0,.18);
}
.pv-rec-logos { position: absolute; top: 12px; right: 12px; display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; max-width: 60%; }
.pv-rec-logos img {
  width: 46px; height: 46px; object-fit: contain;
  background: #fff; border: 1px solid var(--pv-border); border-radius: 10px; padding: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,.12);
}

.pv-body { padding: 28px 30px; }
.pv-name { margin: 0; font-size: 28px; letter-spacing: -.02em; line-height: 1.15; }
.pv-dept { margin: 6px 0 0; color: var(--pv-maroon); font-weight: 700; font-size: 14px; }
.pv-note {
  margin-top: 16px; padding: 14px 16px;
  background: #f8f9fb; border: 1px solid var(--pv-border); border-radius: 12px;
  font-size: 14.5px; line-height: 1.5; color: var(--pv-text);
}
.pv-note p { margin: 0 0 8px; }
.pv-note p:last-child { margin-bottom: 0; }
.pv-note a { color: var(--pv-maroon); font-weight: 700; }
.pv-note img { max-width: 100%; height: auto; border-radius: 10px; }

.pv-stats {
  margin-top: 22px;
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px;
}
.pv-stat { padding: 12px 14px; background: #f8f9fb; border: 1px solid var(--pv-border); border-radius: 12px; min-width: 0; }
.pv-stat-label { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: .05em; color: var(--pv-text-3); margin-bottom: 5px; }
.pv-stat-value { display: block; font-size: 15px; font-weight: 800; color: var(--pv-text); word-break: break-word; }
.pv-stat-value.pv-ctc { color: var(--pv-maroon); }

.pv-social-wrap { margin-top: 22px; }
.pv-social-title { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: var(--pv-text-3); font-weight: 800; margin-bottom: 10px; }
.pv-social { display: flex; flex-wrap: wrap; gap: 10px; }
.pv-social a {
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: #fff; border: 1px solid var(--pv-border); color: var(--pv-text);
  text-decoration: none; overflow: hidden; transition: all .2s ease;
}
.pv-social a:hover { border-color: var(--pv-maroon); color: var(--pv-maroon); transform: translateY(-2px); box-shadow: 0 6px 14px rgba(0,0,0,.08); }
.pv-social a img { width: 22px; height: 22px; object-fit: contain; display: block; }
.pv-social a i { font-size: 17px; }

.pv-actions { margin-top: 24px; display: flex; gap: 10px; flex-wrap: wrap; }
.pv-btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 11px 18px; border-radius: 999px; font-weight: 800; font-size: 14px;
  text-decoration: none; border: 1px solid var(--pv-border); background: #fff; color: var(--pv-text);
  transition: transform .14s, box-shadow .14s, background .14s;
}
.pv-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 14px rgba(0,0,0,.08); }
.pv-btn-primary { background: var(--pv-maroon); border-color: var(--pv-maroon); color: #fff; }

@media (max-width: 760px) {
  .pv-card { grid-template-columns: 1fr; }
  .pv-media { aspect-ratio: 4 / 5; max-height: 460px; }
  .pv-stats { grid-template-columns: 1fr; }
}
`;export{G as default};