import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,S as r,j as i,p as a,w as o}from"./react-vendor-CMR_y1jB.js";import{n as s,r as c,t as l}from"./TopHeaderMenu-DZxbAKPR.js";import{i as u,n as d}from"./request-CO6BYf67.js";import{n as f,t as p}from"./userProfileSlice-BxBDjz7Y.js";import m from"./Footer-zaYqAOdA.js";import{a as h,i as g,n as _,o as v,r as y,t as b}from"./webofscience-BgLvP3T0.js";var x=e(n(),1),S=a(),C=`
.upx-page{
  --surface-alt: #f1f5f9;
  --ink: #1e293b;
  --muted-color: #64748b;
  --line-strong: #e2e8f0;
  --line-light: #f1f5f9;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --shadow-1: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-2: 0 4px 6px -1px rgba(0,0,0,0.1);
  --shadow-3: 0 10px 15px -3px rgba(0,0,0,0.1);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  background: var(--bg-body);
  color: var(--ink);
  min-height: 100vh;
}
.upx-page *{ box-sizing:border-box; }

.profile-layout {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  grid-template-columns: 340px minmax(0, 1fr);
  gap: 32px;
  min-height: calc(100vh - 48px);
}
@media (max-width: 992px) {
  .profile-layout { grid-template-columns: 1fr; gap: 24px; }
}
@media (max-width: 768px) {
  .profile-layout { padding: 16px; }
}

.profile-sidebar {
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: 24px;
  box-shadow: var(--shadow-2);
  border: 1px solid var(--line-strong);
  position: sticky;
  top: 24px;
  height: fit-content;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  padding-bottom: 44px;
}
.profile-sidebar::-webkit-scrollbar { width: 8px; }
.profile-sidebar::-webkit-scrollbar-thumb {
  background: rgba(100,116,139,.35);
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: content-box;
}
.profile-sidebar::-webkit-scrollbar-track { background: transparent; }

.scroll-hint {
  position: sticky;
  bottom: 10px;
  left: 0;
  right: 0;
  margin-top: 14px;
  display: none;
  justify-content: center;
  pointer-events: none;
  z-index: 5;
}
.scroll-hint .hint-pill{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.75));
  border: 1px solid rgba(226,232,240,.9);
  box-shadow: 0 10px 24px rgba(0,0,0,.10);
  color: var(--muted-color);
  font-size: 12.5px;
  backdrop-filter: blur(8px);
}
html.theme-dark .scroll-hint .hint-pill{
  background: linear-gradient(180deg, rgba(30,41,59,.92), rgba(30,41,59,.72));
  border-color: rgba(148,163,184,.25);
  color: rgba(226,232,240,.85);
}
.scroll-hint i{
  animation: bounceDown 1.2s infinite;
  font-size: 14px;
}
@keyframes bounceDown{
  0%,100%{ transform: translateY(0); opacity: .85; }
  50%{ transform: translateY(4px); opacity: 1; }
}

.profile-avatar-container { position: relative; width: 140px; height: 140px; margin: 0 auto 20px; }
.profile-avatar {
  width: 100%; height: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-light), #e0f2fe);
  display: flex; align-items: center; justify-content: center;
  font-size: 48px; color: var(--primary-color);
  border: 4px solid white;
  box-shadow: var(--shadow-3);
}
.profile-avatar img { width: 100%; height: 100%; object-fit: cover; }

.profile-badge {
  position: absolute;
  bottom: -5px; right: -5px;
  background: var(--primary-color);
  color: white;
  width: 36px; height: 36px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
  border: 3px solid white;
}

.profile-name { font-weight: 700; font-size: 1.5rem; text-align: center; margin-bottom: 4px; word-break: break-word; }
.profile-role {
  font-size: 0.9rem;
  color: var(--primary-color);
  text-align: center;
  font-weight: 600;
  background: var(--primary-light);
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  margin: 0 auto 16px;
}

.profile-designation {
  font-size: 0.88rem;
  color: var(--text-muted, #64748b);
  text-align: center;
  font-weight: 600;
  margin: -8px auto 16px;
}

.profile-contact {
  background: var(--surface-alt);
  padding: 16px;
  border-radius: var(--radius-md);
  margin-bottom: 20px;
}
.contact-item { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; font-size: 0.9rem; }
.contact-item:last-child { margin-bottom: 0; }
.contact-item i { color: var(--primary-color); width: 20px; }

.profile-social {
  display: grid;
  grid-template-columns: repeat(auto-fit, 36px);
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 18px auto 22px;
  width: 100%;
  max-width: 272px;
}
.profile-social a {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--surface);
  display: flex; align-items: center; justify-content: center;
  color: var(--ink);
  transition: all 0.25s ease;
  border: 1px solid var(--line-strong);
  overflow: hidden;
  flex: 0 0 36px;
  text-decoration:none;
}
.profile-social a:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
}
.profile-social a img{
  width: 22px;
  height: 22px;
  object-fit: contain;
  display: block;
}
.profile-social a i{
  font-size: 16px;
}

.profile-nav { margin-top: 24px; display: grid; gap: 8px; width: 100%; min-width: 0; }
.profile-nav button {
  border: none;
  background: transparent;
  text-align: left;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  color: var(--ink);
  font-size: 0.95rem;
  display: flex; align-items: center; gap: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.profile-nav button i { width: 20px; color: var(--muted-color); }
.profile-nav button:hover { background: var(--primary-light); color: var(--primary-color); transform: translateX(5px); }
.profile-nav button.active { background: var(--primary-color); color: white; }
.profile-nav button.active i { color: white; }

.profile-content { position: relative; min-height: 600px; }

.loading-indicator {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--muted-color);
}
.loading-spinner {
  width: 40px; height: 40px;
  border: 3px solid var(--line-strong);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}
@keyframes spin { to { transform: rotate(360deg); } }

.profile-section { animation: fadeIn 0.3s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.profile-card {
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: 28px;
  box-shadow: var(--shadow-2);
  border: 1px solid var(--line-strong);
}

.profile-card h5 {
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--line-light);
  color: var(--primary-color);
}
.profile-card h5 i {
  background: var(--primary-light);
  width: 40px; height: 40px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
}

.kv-divider{
  grid-column: 1 / -1;
  height: 1px;
  border-radius: 999px;
  background: linear-gradient(90deg,
    transparent,
    rgba(148,163,184,.35),
    rgba(148,163,184,.50),
    rgba(148,163,184,.35),
    transparent
  );
  margin: 6px 0 6px;
}
html.theme-dark .kv-divider{
  background: linear-gradient(90deg,
    transparent,
    rgba(148,163,184,.18),
    rgba(148,163,184,.30),
    rgba(148,163,184,.18),
    transparent
  );
}

.kv {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 16px 24px;
  font-size: 0.95rem;
}
.kv .k { color: var(--muted-color); font-weight: 500; }
.kv .v { font-weight: 400; line-height: 1.7; min-width:0; }
.kv .v ul { padding-left: 20px; margin: 8px 0; }
.kv .v li { margin-bottom: 4px; }

@media (max-width: 768px) {
  .kv { grid-template-columns: 1fr; gap: 12px; }
  .kv .k { font-weight: 600; color: var(--ink); }
}

.content-grid { display: grid; gap: 20px; }
.content-card {
  background: var(--surface);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-lg);
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  transition: all 0.3s ease;
}
.content-card:hover { border-color: var(--primary-color); box-shadow: var(--shadow-2); }

.card-image {
  width: 100px; height: 120px;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface-alt);
  display: flex; align-items: center; justify-content: center;
  color: var(--muted-color);
  font-size: 32px;
}
.card-image img { width: 100%; height: 100%; object-fit: cover; }

.card-title { font-weight: 700; font-size: 1.1rem; margin-bottom: 8px; color: var(--ink); }
.card-meta { display: flex; flex-wrap: wrap; gap: 16px; font-size: 0.85rem; color: var(--muted-color); margin-bottom: 12px; }
.card-meta-item { display: flex; align-items: center; gap: 6px; }
.card-desc { font-size: 0.95rem; line-height: 1.6; color: var(--ink); }

.card-badge {
  background: var(--primary-light);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-top: 10px;
}
.card-link { margin-top: 12px; }
.card-link a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.card-link a:hover { text-decoration: underline; }

@media (max-width: 768px) {
  .content-card { grid-template-columns: 1fr; gap: 16px; }
  .card-image { width: 100%; height: 180px; }
}

.empty { color: var(--muted-color); text-align: center; padding: 40px 20px; font-size: 1rem; }
.empty i { font-size: 2rem; margin-bottom: 16px; display: block; color: var(--line-strong); }

.qualification-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.qualification-tag {
  background: var(--primary-light);
  color: var(--primary-color);
  padding: 6px 14px;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 500;
}

.section-indicator {
  position: fixed;
  bottom: 20px; right: 20px;
  background: var(--primary-color);
  color: white;
  padding: 8px 16px;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  box-shadow: var(--shadow-3);
  z-index: 100;
  display: none;
}
@media (max-width: 768px) {
  .section-indicator { bottom: 10px; right: 10px; font-size: 0.8rem; }
  .profile-contact { display: none !important; }

  .profile-sidebar {
    position: relative !important;
    top: 0 !important;
    max-height: none !important;
    overflow-y: visible !important;
    height: auto !important;
  }

  .profile-nav {
    display: grid !important;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 4px;
    margin-top: 16px;
    border-radius: var(--radius-md);
    background: var(--surface-alt);
    padding: 6px;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    justify-content: initial;
  }
  .profile-nav button {
    width: 100%;
    min-width: 0;
    height: 42px;
    font-size: 0 !important;
    padding: 0 !important;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    gap: 0;
  }
  .profile-nav button:hover {
    transform: none;
  }
  .profile-nav button i {
    width: auto;
    min-width: 0;
    font-size: 1.05rem;
    margin: 0;
  }
}

@media (max-width: 420px) {
  .profile-layout { padding: 12px; }
  .profile-sidebar { padding: 20px 16px 28px; }
  .profile-social { max-width: 256px; gap: 8px; grid-template-columns: repeat(auto-fit, 36px); }
  .profile-nav { gap: 3px; padding: 5px; }
  .profile-nav button { height: 40px; border-radius: 10px; }
  .profile-nav button i { font-size: 1rem; }
}

`,w={personal:{title:`Personal Information`,icon:`fa fa-id-card`},education:{title:`Education`,icon:`fa fa-graduation-cap`},honors:{title:`Honors & Awards`,icon:`fa fa-award`},journals:{title:`Patents`,icon:`fa fa-book`},conferences:{title:`Publications`,icon:`fa fa-microphone`},teaching:{title:`Engagements`,icon:`fa fa-chalkboard-teacher`}},T=[`id`,`uuid`,`slug`,`name`,`email`,`address`,`image`,`image_url`,`photo_url`,`profile_image`,`profile_image_url`,`role`,`role_title`,`role_short_form`,`designation`,`department_id`,`department`,`status`],E=[{key:`linkedin`,platform:`LinkedIn`,icon:g,sort_order:1},{key:`vidyanportal`,platform:`Vidyan Portal`,icon:h,sort_order:2},{key:`scopus`,platform:`Scopus`,icon:_,sort_order:3},{key:`googlescholar`,platform:`Google Scholar`,icon:v,sort_order:4},{key:`webofscience`,platform:`Web of Science`,icon:b,sort_order:5},{key:`researchgate`,platform:`ResearchGate`,icon:y,sort_order:6}],D={linkedin:`linkedin`,linkedinprofile:`linkedin`,vidyan:`vidyanportal`,vidwan:`vidyanportal`,vidyanportal:`vidyanportal`,vidwanportal:`vidyanportal`,irins:`vidyanportal`,scopus:`scopus`,scopusid:`scopus`,google:`googlescholar`,googlescholar:`googlescholar`,scholargoogle:`googlescholar`,webofscience:`webofscience`,wos:`webofscience`,researchgate:`researchgate`},O={github:`fa-brands fa-github`,orcid:`fa-brands fa-orcid`,twitter:`fa-brands fa-twitter`,x:`fa-brands fa-x-twitter`,facebook:`fa-brands fa-facebook-f`,instagram:`fa-brands fa-instagram`,youtube:`fa-brands fa-youtube`,website:`fa fa-globe`,web:`fa fa-globe`,portfolio:`fa fa-globe`,mail:`fa fa-envelope`,email:`fa fa-envelope`},k=e=>(e??``).toString().trim(),A=e=>{let t=k(e);try{return decodeURIComponent(t)}catch{return t}},j=e=>String(e||``).replace(/<[^>]*>/g,` `).replace(/\s+/g,` `).trim(),M=e=>e&&typeof e==`object`&&!Array.isArray(e),N=e=>{if(e==null)return!1;if(Array.isArray(e))return e.some(e=>N(e));if(M(e))return Object.values(e).some(e=>N(e));let t=j(e);return t!==``&&t!==`—`&&t.toLowerCase()!==`null`&&t.toLowerCase()!==`undefined`},P=(...e)=>e.find(e=>M(e))||{},F=(...e)=>{for(let t of e){if(Array.isArray(t))return t;if(M(t)&&Array.isArray(t.data))return t.data}return[]},I=(e,t)=>{let n={};return M(e)&&t.forEach(t=>{N(e[t])&&(n[t]=e[t])}),n},L=(...e)=>{let t={};return e.forEach(e=>{M(e)&&Object.entries(e).forEach(([e,n])=>{N(n)&&(t[e]=n)})}),t},R=()=>{if(document.querySelector(`link[data-upx-fa="1"]`))return;let e=document.createElement(`link`);e.rel=`stylesheet`,e.href=`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`,e.setAttribute(`data-upx-fa`,`1`),document.head.appendChild(e)},z=e=>k(e).toLowerCase().replace(/&/g,`and`).replace(/[^a-z0-9]+/g,``),B=()=>k(`https://biswakarma.msit.edu.in/`).replace(/\/+$/,``),V=e=>{let t=k(e);return t?/^(https?:\/\/|mailto:|tel:|data:|blob:)/i.test(t)?t:t.startsWith(`//`)?`https:${t}`:t.startsWith(`/`)||t.includes(`/`)?d(t):t.includes(`.`)&&!t.includes(` `)?`https://${t}`:d(t):``},H=e=>{let t=k(e);if(!t)return``;if(/^(https?:\/\/|data:|blob:)/i.test(t))return t;if(t.startsWith(`//`))return`https:${t}`;let n=B(),r=t.replace(/^\/+/,``);return r?n?`${n}/${r}`:`/${r}`:``},U=e=>A(e).split(`#`)[0].split(`?`)[0].trim(),W=e=>{let t=k(e).toLowerCase();return t?t.startsWith(`data:image/`)||t.startsWith(`http://`)||t.startsWith(`https://`)||t.includes(`/`)?!0:/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(t):!1},G=e=>k(e).toLowerCase().endsWith(`.pdf`),K=e=>{let t=k(e);return t?t.includes(`fa-`)||t.startsWith(`fa `)||t.startsWith(`fa-solid`)||t.startsWith(`fa-brands`):!1},q=e=>u(String(e||``)).replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi,``).replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi,``).replace(/\son\w+="[^"]*"/gi,``).replace(/\son\w+='[^']*'/gi,``).replace(/javascript:/gi,``),J=e=>N(e)?(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:q(e)}}):null,Y=e=>{let t=e.filter(e=>N(e?.value));return t.length?(0,S.jsx)(`div`,{className:`card-meta`,children:t.map((e,t)=>(0,S.jsxs)(`div`,{className:`card-meta-item`,children:[(0,S.jsx)(`i`,{className:e.icon}),(0,S.jsx)(`span`,{children:e.value})]},`${e.icon}-${t}`))}):null},X=(e,t,n,r)=>(0,S.jsxs)(`section`,{id:e,className:`profile-card profile-section`,children:[(0,S.jsxs)(`h5`,{children:[(0,S.jsx)(`i`,{className:t}),` `,n]}),(0,S.jsxs)(`div`,{className:`empty`,children:[(0,S.jsx)(`i`,{className:t}),r]})]}),Z=e=>{if(Array.isArray(e))return e.map(e=>k(e)).filter(Boolean);let t=k(e);if(!t)return[];try{return Z(JSON.parse(t))}catch{return[t]}};function ee({children:e,showDivider:t}){return(0,S.jsxs)(S.Fragment,{children:[e,t?(0,S.jsx)(`div`,{className:`kv-divider`,"aria-hidden":`true`}):null]})}var te=e=>{let t=e.filter(e=>e.show);return t.length?t.map((e,n)=>(0,S.jsxs)(ee,{showDivider:n<t.length-1,children:[(0,S.jsx)(`div`,{className:`k`,children:e.label}),(0,S.jsx)(`div`,{className:`v`,children:e.content})]},`${e.label}-${n}`)):null},Q=e=>{if(!M(e))return{};let t=P(e?.data,e),n=P(t?.profile,t?.user_profile,t?.profile_data,t?.data,t),r=P(t?.user,t?.basic,n?.user,n?.basic,n?.profile_user,e?.user,e?.basic),i=L(I(n,T),I(r,T),n?.basic,t?.basic);return{...n,basic:i,personal:P(n?.personal,t?.personal,n?.personal_information,t?.personal_information,n?.profile_personal,t?.profile_personal,n?.profile_personal_information,t?.profile_personal_information),educations:F(n?.educations,t?.educations,n?.education,t?.education,n?.profile_educations,t?.profile_educations,n?.user_educations,t?.user_educations),honors:F(n?.honors,t?.honors,n?.awards,t?.awards,n?.honors_awards,t?.honors_awards,n?.profile_honors,t?.profile_honors),journals:F(n?.journals,t?.journals,n?.patents,t?.patents,n?.profile_journals,t?.profile_journals,n?.user_journals,t?.user_journals),conference_publications:F(n?.conference_publications,t?.conference_publications,n?.conferences,t?.conferences,n?.publications,t?.publications,n?.profile_conference_publications,t?.profile_conference_publications),teaching_engagements:F(n?.teaching_engagements,t?.teaching_engagements,n?.engagements,t?.engagements,n?.profile_teaching_engagements,t?.profile_teaching_engagements),social_media:F(n?.social_media,t?.social_media,n?.social_links,t?.social_links,n?.social_media_links,t?.social_media_links,n?.profile_social_media,t?.profile_social_media,n?.socials,t?.socials)}},$=e=>M(e)?N(e?.basic)||N(e?.personal)||N(e?.educations)||N(e?.honors)||N(e?.journals)||N(e?.conference_publications)||N(e?.teaching_engagements)||N(e?.social_media):!1,ne=e=>H(e?.image||e?.image_url||e?.photo_url||e?.profile_image||e?.profile_image_url),re=e=>k(e?.role_title||e?.designation||e?.role_short_form||e?.role)||`User`,ie=(e,t)=>{let n=z(e);if(D[n])return D[n];let r=E.find(e=>e.key===n||z(e.platform)===n);if(r)return r.key;if(t!=null&&t!==``){let e=E.find(e=>Number(e.sort_order)===Number(t));if(e)return e.key}return``},ae=e=>V(e?.link||e?.url||e?.profile_url||e?.social_link||e?.social_url||e?.value),oe=e=>{let t=k(e?.platform||e?.name||e?.title),n=k(e?.icon||e?.icon_url||e?.image||e?.logo);if(n&&W(n)&&!G(n))return{type:`image`,src:H(n)};if(n&&K(n))return{type:`fontawesome`,className:n};let r=ie(t,e?.sort_order),i=E.find(e=>e.key===r);if(i?.icon)return{type:`image`,src:i.icon};let a=O[z(t)];return a?{type:`fontawesome`,className:a}:null},se=e=>(Array.isArray(e)?e:[]).map(e=>{let t=e?.active??e?.is_active??e?.status,n=ae(e),r=oe(e);return{...e,__link:n,__visual:r,__isActive:t==null||t===``||String(t).toLowerCase()===`1`||String(t).toLowerCase()===`true`||String(t).toLowerCase()===`yes`||String(t).toLowerCase()===`active`}}).filter(e=>e.__isActive&&e.__link&&e.__visual).sort((e,t)=>Number(e?.sort_order??0)-Number(t?.sort_order??0)),ce=e=>{let t=e?.slug||e?.identifier||e?.uuid||e?.id||``;return k(t)?U(t):U(window.location.pathname.split(`/`).filter(Boolean).pop())},le=(e,t)=>{let n=t?.personal||{},r=Array.isArray(t?.educations)?t.educations:[],i=Array.isArray(t?.honors)?t.honors:[],a=Array.isArray(t?.journals)?t.journals:[],o=Array.isArray(t?.conference_publications)?t.conference_publications:[],s=Array.isArray(t?.teaching_engagements)?t.teaching_engagements:[];if(e===`personal`){let e=Z(n?.qualification),t=te([{label:`Qualifications`,show:e.length>0,content:(0,S.jsx)(`div`,{className:`qualification-list`,children:e.map((e,t)=>(0,S.jsx)(`span`,{className:`qualification-tag`,children:e},`${e}-${t}`))})},{label:`Affiliation`,show:N(n?.affiliation),content:J(n?.affiliation)},{label:`Specification`,show:N(n?.specification),content:J(n?.specification)},{label:`Experience`,show:N(n?.experience),content:J(n?.experience)},{label:`Research Interests`,show:N(n?.interest),content:J(n?.interest)},{label:`Administration`,show:N(n?.administration),content:J(n?.administration)},{label:`Research Projects`,show:N(n?.research_project),content:J(n?.research_project)}]);return t?(0,S.jsxs)(`section`,{id:`personal`,className:`profile-card profile-section`,children:[(0,S.jsxs)(`h5`,{children:[(0,S.jsx)(`i`,{className:`fa fa-id-card`}),` Personal Information`]}),(0,S.jsx)(`div`,{className:`kv`,children:t})]}):X(`personal`,`fa fa-id-card`,`Personal Information`,`No personal information found`)}if(e===`education`){let e=r.filter(e=>N(e?.degree_title)||N(e?.education_level)||N(e?.institution_name)||N(e?.university_name)||N(e?.location)||N(e?.passing_year)||N(e?.grade_value)||N(e?.field_of_study)||N(e?.description));return e.length?(0,S.jsxs)(`section`,{id:`education`,className:`profile-card profile-section`,children:[(0,S.jsxs)(`h5`,{children:[(0,S.jsx)(`i`,{className:`fa fa-graduation-cap`}),` Education`]}),(0,S.jsx)(`div`,{className:`content-grid`,children:e.map((e,t)=>{let n=k(e?.degree_title||e?.education_level);return(0,S.jsxs)(`div`,{className:`content-card`,children:[(0,S.jsx)(`div`,{className:`card-image`,children:(0,S.jsx)(`i`,{className:`fa fa-university`})}),(0,S.jsxs)(`div`,{className:`card-content`,children:[n?(0,S.jsx)(`div`,{className:`card-title`,children:n}):null,Y([{icon:`fa fa-university`,value:k(e?.institution_name||e?.university_name)},{icon:`fa fa-map-marker-alt`,value:k(e?.location)},{icon:`fa fa-calendar`,value:k(e?.passing_year)},{icon:`fa fa-chart-line`,value:N(e?.grade_value)||N(e?.grade_type)?`${k(e?.grade_type||`Grade`)}: ${k(e?.grade_value||`—`)}`:``}]),N(e?.field_of_study)?(0,S.jsx)(`div`,{className:`card-badge`,children:k(e.field_of_study)}):null,N(e?.description)?(0,S.jsx)(`div`,{className:`card-desc`,children:k(e.description)}):null]})]},`edu-${t}`)})})]}):X(`education`,`fa fa-graduation-cap`,`Education`,`No education records found`)}if(e===`honors`){let e=i.filter(e=>N(e?.title)||N(e?.honouring_organization)||N(e?.honor_year)||N(e?.honor_type)||N(e?.description)||N(e?.image));return e.length?(0,S.jsxs)(`section`,{id:`honors`,className:`profile-card profile-section`,children:[(0,S.jsxs)(`h5`,{children:[(0,S.jsx)(`i`,{className:`fa fa-award`}),` Honors & Awards`]}),(0,S.jsx)(`div`,{className:`content-grid`,children:e.map((e,t)=>{let n=H(e?.image||e?.image_url);return(0,S.jsxs)(`div`,{className:`content-card`,children:[(0,S.jsx)(`div`,{className:`card-image`,children:n?(0,S.jsx)(`img`,{src:n,alt:k(e?.title||`Honor`),loading:`lazy`}):(0,S.jsx)(`i`,{className:`fa fa-award`})}),(0,S.jsxs)(`div`,{className:`card-content`,children:[N(e?.title)?(0,S.jsx)(`div`,{className:`card-title`,children:k(e.title)}):null,Y([{icon:`fa fa-building`,value:k(e?.honouring_organization)},{icon:`fa fa-calendar`,value:k(e?.honor_year)},{icon:`fa fa-tag`,value:k(e?.honor_type)}]),N(e?.description)?(0,S.jsx)(`div`,{className:`card-desc`,children:k(e.description)}):null]})]},`honor-${t}`)})})]}):X(`honors`,`fa fa-award`,`Honors & Awards`,`No honors records found`)}if(e===`journals`){let e=a.filter(e=>N(e?.title)||N(e?.publication_organization)||N(e?.publication_year)||N(e?.description)||N(e?.url)||N(e?.image));return e.length?(0,S.jsxs)(`section`,{id:`journals`,className:`profile-card profile-section`,children:[(0,S.jsxs)(`h5`,{children:[(0,S.jsx)(`i`,{className:`fa fa-book`}),` Patents`]}),(0,S.jsx)(`div`,{className:`content-grid`,children:e.map((e,t)=>{let n=H(e?.image||e?.image_url),r=V(e?.url);return(0,S.jsxs)(`div`,{className:`content-card`,children:[(0,S.jsx)(`div`,{className:`card-image`,children:n?(0,S.jsx)(`img`,{src:n,alt:k(e?.title||`Patent`),loading:`lazy`}):(0,S.jsx)(`i`,{className:`fa fa-newspaper`})}),(0,S.jsxs)(`div`,{className:`card-content`,children:[N(e?.title)?(0,S.jsx)(`div`,{className:`card-title`,children:k(e.title)}):null,Y([{icon:`fa fa-building`,value:k(e?.publication_organization)},{icon:`fa fa-calendar`,value:k(e?.publication_year)}]),N(e?.description)?(0,S.jsx)(`div`,{className:`card-desc`,children:k(e.description)}):null,r?(0,S.jsx)(`div`,{className:`card-link`,children:(0,S.jsxs)(`a`,{href:r,target:`_blank`,rel:`noopener noreferrer`,children:[(0,S.jsx)(`i`,{className:`fa fa-external-link-alt`}),` View Publication`]})}):null]})]},`journal-${t}`)})})]}):X(`journals`,`fa fa-book`,`Patents`,`No patent found`)}if(e===`conferences`){let e=o.filter(e=>N(e?.title)||N(e?.publication_year)||N(e?.location)||N(e?.publication_type)||N(e?.conference_name)||N(e?.domain)||N(e?.description)||N(e?.url)||N(e?.image));return e.length?(0,S.jsxs)(`section`,{id:`conferences`,className:`profile-card profile-section`,children:[(0,S.jsxs)(`h5`,{children:[(0,S.jsx)(`i`,{className:`fa fa-microphone`}),` Publications`]}),(0,S.jsx)(`div`,{className:`content-grid`,children:e.map((e,t)=>{let n=H(e?.image||e?.image_url),r=V(e?.url);return(0,S.jsxs)(`div`,{className:`content-card`,children:[(0,S.jsx)(`div`,{className:`card-image`,children:n?(0,S.jsx)(`img`,{src:n,alt:k(e?.title||`Publication`),loading:`lazy`}):(0,S.jsx)(`i`,{className:`fa fa-microphone-alt`})}),(0,S.jsxs)(`div`,{className:`card-content`,children:[N(e?.title)?(0,S.jsx)(`div`,{className:`card-title`,children:k(e.title)}):null,Y([{icon:`fa fa-calendar`,value:k(e?.publication_year)},{icon:`fa fa-map-marker-alt`,value:k(e?.location)},{icon:`fa fa-tag`,value:k(e?.publication_type)},{icon:`fa fa-building`,value:k(e?.conference_name)}]),N(e?.domain)?(0,S.jsx)(`div`,{className:`card-badge`,children:k(e.domain)}):null,N(e?.description)?(0,S.jsx)(`div`,{className:`card-desc`,children:k(e.description)}):null,r?(0,S.jsx)(`div`,{className:`card-link`,children:(0,S.jsxs)(`a`,{href:r,target:`_blank`,rel:`noopener noreferrer`,children:[(0,S.jsx)(`i`,{className:`fa fa-external-link-alt`}),` View Details`]})}):null]})]},`conf-${t}`)})})]}):X(`conferences`,`fa fa-microphone`,`Publications`,`No publications found`)}if(e===`teaching`){let e=s.filter(e=>N(e?.organization_name)||N(e?.domain)||N(e?.description));return e.length?(0,S.jsxs)(`section`,{id:`teaching`,className:`profile-card profile-section`,children:[(0,S.jsxs)(`h5`,{children:[(0,S.jsx)(`i`,{className:`fa fa-chalkboard-teacher`}),` Engagements`]}),(0,S.jsx)(`div`,{className:`content-grid`,children:e.map((e,t)=>(0,S.jsxs)(`div`,{className:`content-card`,children:[(0,S.jsx)(`div`,{className:`card-image`,children:(0,S.jsx)(`i`,{className:`fa fa-chalkboard-teacher`})}),(0,S.jsxs)(`div`,{className:`card-content`,children:[N(e?.organization_name)?(0,S.jsx)(`div`,{className:`card-title`,children:k(e.organization_name)}):null,Y([{icon:`fa fa-tag`,value:k(e?.domain)}]),N(e?.description)?(0,S.jsx)(`div`,{className:`card-desc`,children:k(e.description)}):null]})]},`teach-${t}`))})]}):X(`teaching`,`fa fa-chalkboard-teacher`,`Engagements`,`No engagements found`)}return null};function ue(){let e=i(),n=t(),a=(0,x.useRef)(null),u=(0,x.useMemo)(()=>U(ce(e)),[e]),[d,h]=(0,x.useState)(`personal`),[g,_]=(0,x.useState)(!1),[v,y]=(0,x.useState)(!1),[b,T]=(0,x.useState)(!1),[E,D]=(0,x.useState)({status:`idle`,data:null,error:``}),O=o(e=>f(e,u),r),A=(0,x.useMemo)(()=>Q(O?.data),[O?.data]),j=E?.data||A||{},M=j?.basic||{},P=$(j),F=!P&&(O?.status===`loading`||E.status===`loading`||E.status===`idle`),I=!P&&(O?.status===`failed`||E.status===`failed`);(0,x.useEffect)(()=>{R()},[]),(0,x.useEffect)(()=>{if(!u){D({status:`failed`,data:null,error:`Profile slug is missing`});return}let e=!1;D({status:`loading`,data:null,error:``});let t=n(p({slug:u,identifier:u,force:!0}));return Promise.resolve(t).then(t=>{if(e)return;let n=t?.type?.endsWith(`/rejected`)||t?.error||t?.payload?.error,r=Q(t?.payload?.data);if(!n&&$(r)){D({status:`idle`,data:null,error:``});return}D({status:`failed`,data:null,error:t?.payload?.message||t?.payload?.error||t?.error?.message||`Failed to load profile data`})}).catch(t=>{e||t?.name===`AbortError`||D({status:`failed`,data:null,error:t?.message||`Failed to load profile data`})}),()=>{e=!0,typeof t?.abort==`function`&&t.abort()}},[n,u]),(0,x.useEffect)(()=>{let e=k(window.location.hash.replace(/^#/,``));e&&w[e]&&h(e)},[]),(0,x.useEffect)(()=>{let e=()=>{let e=k(window.location.hash.replace(/^#/,``));e&&w[e]&&h(e)};return window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]),(0,x.useEffect)(()=>{let e=a.current;if(!e)return;let t=()=>{let t=e.scrollHeight>e.clientHeight+2,n=e.scrollTop+e.clientHeight>=e.scrollHeight-4;T(t&&!n)};t();let n=setTimeout(t,250);return e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{clearTimeout(n),e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[j,d]),(0,x.useEffect)(()=>{let e=k(M?.name);document.title=e?`User Profile - ${e}`:`User Profile`},[M]);let L=(0,x.useMemo)(()=>se(j?.social_media),[j]),z=e=>{!w[e]||e===d||(h(e),_(!0),y(!0),window.history.pushState({},``,`${window.location.pathname}#${e}`),window.setTimeout(()=>{_(!1)},220),window.setTimeout(()=>{y(!1)},3e3))},B=ne(M),V=re(M),H=le(d,j);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(l,{}),(0,S.jsx)(s,{}),(0,S.jsx)(c,{}),(0,S.jsxs)(`div`,{className:`upx-page`,children:[(0,S.jsx)(`style`,{children:C}),(0,S.jsxs)(`div`,{className:`profile-layout`,children:[(0,S.jsxs)(`aside`,{className:`profile-sidebar`,ref:a,children:[(0,S.jsxs)(`div`,{className:`profile-avatar-container`,children:[(0,S.jsx)(`div`,{className:`profile-avatar`,children:B?(0,S.jsx)(`img`,{src:B,alt:k(M?.name||`avatar`),onError:e=>{e.currentTarget.style.display=`none`}}):(0,S.jsx)(`i`,{className:`fa fa-user-graduate`})}),(0,S.jsx)(`div`,{className:`profile-badge`,children:(0,S.jsx)(`i`,{className:`fa fa-check`})})]}),(0,S.jsx)(`div`,{className:`profile-name`,children:k(M?.name)||`—`}),(0,S.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,S.jsx)(`div`,{className:`profile-role`,children:V.toUpperCase()}),N(M?.designation)&&k(M.designation).toLowerCase()!==V.toLowerCase()?(0,S.jsx)(`div`,{className:`profile-designation`,children:k(M.designation)}):null]}),N(M?.email)||N(M?.address)?(0,S.jsxs)(`div`,{className:`profile-contact`,children:[N(M?.email)?(0,S.jsxs)(`div`,{className:`contact-item`,children:[(0,S.jsx)(`i`,{className:`fa fa-envelope`}),(0,S.jsx)(`span`,{children:k(M.email)})]}):null,N(M?.address)?(0,S.jsxs)(`div`,{className:`contact-item`,children:[(0,S.jsx)(`i`,{className:`fa fa-map-marker-alt`}),(0,S.jsx)(`span`,{children:k(M.address).replace(/\n/g,`, `)})]}):null]}):null,L.length?(0,S.jsx)(`div`,{className:`profile-social`,children:L.map((e,t)=>{let n=k(e?.platform||e?.name||`Link`),r=e.__visual;return(0,S.jsxs)(`a`,{href:e.__link,target:`_blank`,rel:`noopener noreferrer`,title:n,"aria-label":n,children:[r?.type===`image`?(0,S.jsx)(`img`,{src:r.src,alt:n,loading:`lazy`}):null,r?.type===`fontawesome`?(0,S.jsx)(`i`,{className:r.className}):null]},`social-${t}`)})}):null,(0,S.jsx)(`div`,{className:`profile-nav`,children:Object.entries(w).map(([e,t])=>(0,S.jsxs)(`button`,{className:d===e?`active`:``,onClick:()=>z(e),type:`button`,children:[(0,S.jsx)(`i`,{className:t.icon}),` `,t.title.split(` & `)[0]]},e))}),(0,S.jsx)(`div`,{className:`scroll-hint`,style:{display:b?`flex`:`none`},"aria-hidden":`true`,children:(0,S.jsx)(`div`,{className:`hint-pill`,children:(0,S.jsx)(`i`,{className:`fa fa-arrow-down`})})})]}),(0,S.jsxs)(`main`,{className:`profile-content`,children:[F||g?(0,S.jsxs)(`div`,{className:`loading-indicator`,children:[(0,S.jsx)(`div`,{className:`loading-spinner`}),(0,S.jsx)(`div`,{children:F?`Loading profile...`:`Loading section...`})]}):null,!F&&!g?(0,S.jsx)(`div`,{children:I?(0,S.jsx)(`div`,{className:`profile-card`,children:(0,S.jsxs)(`div`,{className:`empty`,children:[(0,S.jsx)(`i`,{className:`fa fa-exclamation-triangle`}),(0,S.jsx)(`div`,{children:E?.error||O?.error||`Failed to load profile data`})]})}):H}):null]})]}),(0,S.jsxs)(`div`,{className:`section-indicator`,style:{display:v?`block`:`none`},children:[`Viewing: `,(0,S.jsx)(`span`,{children:w[d]?.title||`Section`})]})]}),(0,S.jsx)(m,{})]})}export{ue as default};