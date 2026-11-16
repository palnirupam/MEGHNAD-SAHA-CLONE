import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{a,c as o,i as s,l as c,n as l,o as u,s as d,t as f}from"./programToppersSlice-3LFmo3ui.js";var p=e(n(),1),m=r(),h=12,g=typeof window<`u`?window.location.origin.replace(/\/+$/,``):``,_=String.raw`
.ptp-wrap{
  --ptp-brand: var(--primary-color, #9E363A);
  --ptp-ink: #0f172a;
  --ptp-muted: #64748b;
  --ptp-bg: var(--page-bg, #ffffff);
  --ptp-card: var(--surface, #ffffff);
  --ptp-line: var(--line-soft, rgba(15,23,42,.10));
  --ptp-shadow: 0 10px 24px rgba(2,6,23,.08);

  --ptp-card-w: 247px;
  --ptp-card-h: 329px;
  --ptp-radius: 18px;

  max-width: 1320px;
  margin: 18px auto 54px;
  padding: 0 12px;
  background: transparent;
  position: relative;
  overflow: visible;
}

/* Header */
.ptp-head{
  background: var(--ptp-card);
  border: 1px solid var(--ptp-line);
  border-radius: 16px;
  box-shadow: var(--ptp-shadow);
  padding: 14px 16px;
  margin-bottom: 16px;

  display:flex;
  gap: 12px;
  align-items:center;
  justify-content:stretch;
  min-width: 0;
}

/* Tools row only */
.ptp-tools{
  display:flex;
  gap: 10px;
  align-items:center;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 0;
  justify-content: space-between;
}
.ptp-tools > *{ min-width: 0; }

/* Search */
.ptp-search{
  position: relative;
  min-width: 0;
  flex: 1 1 auto;
  width: auto;
  max-width: none;
}
.ptp-search i{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .65;
  color: var(--ptp-muted);
  pointer-events:none;
}
.ptp-search input{
  width:100%;
  height: 42px;
  border-radius: 999px;
  padding: 11px 12px 11px 42px;
  border: 1px solid var(--ptp-line);
  background: var(--ptp-card);
  color: var(--ptp-ink);
  outline: none;
  min-width: 0;
}
.ptp-search input:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

/* Dept dropdown */
.ptp-select{
  position: relative;
  min-width: 0;
  flex: 0 0 clamp(220px, 30vw, 360px);
  width: clamp(220px, 30vw, 360px);
  max-width: 360px;
}
.ptp-select__icon{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--ptp-muted);
  pointer-events:none;
  font-size: 14px;
}
.ptp-select__caret{
  position:absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--ptp-muted);
  pointer-events:none;
  font-size: 12px;
}
.ptp-select select{
  width: 100%;
  height: 42px;
  border-radius: 999px;
  padding: 10px 38px 10px 42px;
  border: 1px solid var(--ptp-line);
  background: var(--ptp-card);
  color: var(--ptp-ink);
  outline: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  display:block;
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.ptp-select select:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

/* Grid */
.ptp-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, var(--ptp-card-w));
  gap: 18px;
  align-items: start;
  justify-content: center;
}

/* Card */
.ptp-card{
  position: relative;
  width: var(--ptp-card-w);
  height: var(--ptp-card-h);
  border-radius: var(--ptp-radius);
  overflow:hidden;
  display:block;
  text-decoration:none !important;
  color: inherit;
  background: #fff;
  border: 1px solid rgba(2,6,23,.08);
  box-shadow: 0 12px 26px rgba(0,0,0,.10);
  transform: translateZ(0);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  cursor:pointer;
}
.ptp-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 18px 42px rgba(0,0,0,.16);
  border-color: rgba(158,54,58,.22);
}

.ptp-card .bg{
  position:absolute; inset:0;
  background-size: cover;
  background-position: center;
  filter: saturate(1.02);
  transform: scale(1.0001);
}
.ptp-card .vignette{
  position:absolute; inset:0;
  background:
    radial-gradient(1200px 500px at 50% -20%, rgba(255,255,255,.10), rgba(0,0,0,0) 60%),
    linear-gradient(180deg, rgba(0,0,0,.00) 28%, rgba(0,0,0,.12) 60%, rgba(0,0,0,.62) 100%);
}

.ptp-card .info{
  position:absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  z-index: 2;
}
.ptp-name{
  margin:0;
  font-size: 18px;
  font-weight: 950;
  line-height: 1.12;
  color: #fff;
  text-shadow: 0 6px 16px rgba(0,0,0,.35);
}
.ptp-meta{
  margin: 7px 0 0;
  font-size: 13px;
  font-weight: 800;
  color: rgba(255,255,255,.90);
  text-shadow: 0 6px 16px rgba(0,0,0,.35);
  line-height: 1.2;
}
.ptp-meta .dot{ opacity:.85; padding:0 6px; }
.ptp-submeta{
  margin: 7px 0 0;
  font-size: 12.5px;
  color: rgba(255,255,255,.82);
  text-shadow: 0 6px 16px rgba(0,0,0,.35);
  line-height: 1.2;
}

.ptp-pill{
  position:absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 900;
  letter-spacing:.15px;
  color:#fff;
  background: rgba(0,0,0,.28);
  border: 1px solid rgba(255,255,255,.20);
  backdrop-filter: blur(6px);
  max-width: calc(100% - 24px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ptp-yearpill{
  position:absolute;
  top: 44px;
  left: 12px;
  z-index: 2;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 900;
  letter-spacing:.15px;
  color:#fff;
  background: rgba(0,0,0,.24);
  border: 1px solid rgba(255,255,255,.18);
  backdrop-filter: blur(6px);
  max-width: calc(100% - 24px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ptp-rank{
  position:absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 950;
  letter-spacing:.15px;
  color:#1a1a2e;
  background: rgba(255,255,255,.92);
  border: 1px solid rgba(255,255,255,.35);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 18px rgba(0,0,0,.14);
}

/* Placeholder */
.ptp-placeholder{
  position:absolute; inset:0;
  display:grid; place-items:center;
  background:
    radial-gradient(800px 360px at 20% 10%, rgba(158,54,58,.20), transparent 60%),
    radial-gradient(900px 400px at 80% 90%, rgba(158,54,58,.14), transparent 60%),
    linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.82));
}
.ptp-initials{
  width: 86px; height: 86px;
  border-radius: 24px;
  display:grid; place-items:center;
  font-weight: 950;
  font-size: 28px;
  color: var(--ptp-brand);
  background: rgba(158,54,58,.12);
  border: 1px solid rgba(158,54,58,.25);
}

/* State / empty */
.ptp-state{
  background: var(--ptp-card);
  border: 1px solid var(--ptp-line);
  border-radius: 16px;
  box-shadow: var(--ptp-shadow);
  padding: 18px;
  color: var(--ptp-muted);
  text-align:center;
}

/* Skeleton */
.ptp-skeleton{
  display:grid;
  grid-template-columns: repeat(auto-fill, var(--ptp-card-w));
  gap: 18px;
  justify-content: center;
}
.ptp-sk{
  border-radius: var(--ptp-radius);
  border: 1px solid var(--ptp-line);
  background: #fff;
  overflow:hidden;
  position:relative;
  box-shadow: 0 10px 24px rgba(2,6,23,.08);
  height: var(--ptp-card-h);
}
.ptp-sk:before{
  content:'';
  position:absolute; inset:0;
  transform: translateX(-60%);
  background: linear-gradient(90deg, transparent, rgba(148,163,184,.22), transparent);
  animation: ptpSkMove 1.15s ease-in-out infinite;
}
@keyframes ptpSkMove{ to{ transform: translateX(60%);} }

/* Pagination */
.ptp-pagination{
  display:flex;
  justify-content:center;
  margin-top: 18px;
}
.ptp-pagination .ptp-pager{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  padding: 10px;
}
.ptp-pagebtn{
  border:1px solid var(--ptp-line);
  background: var(--ptp-card);
  color: var(--ptp-ink);
  border-radius: 12px;
  padding: 9px 12px;
  font-size: 13px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(2,6,23,.06);
  cursor:pointer;
  user-select:none;
}
.ptp-pagebtn:hover{ background: rgba(2,6,23,.03); }
.ptp-pagebtn[disabled]{ opacity:.55; cursor:not-allowed; }
.ptp-pagebtn.active{
  background: rgba(201,75,80,.12);
  border-color: rgba(201,75,80,.35);
  color: var(--ptp-brand);
}

@media (max-width: 1200px){
  .ptp-head{ flex-wrap: wrap; align-items: flex-end; }
  .ptp-tools{
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .ptp-search{ flex: 1 1 340px; }
  .ptp-select{
    flex: 1 1 280px;
    width: auto;
    max-width: none;
  }
}
@media (max-width: 992px){
  .ptp-head{ flex-wrap: wrap; align-items: flex-end; }
  .ptp-tools{ flex-wrap: wrap; }
}
@media (max-width: 640px){
  .ptp-search{ min-width: 220px; flex: 1 1 240px; }
  .ptp-select{ min-width: 220px; flex: 1 1 240px; }
}

/* ===== Modal ===== */
.ptp-modal{
  position: fixed;
  inset: 0;
  display:none;
  z-index: 9999;
}
.ptp-modal.show{ display:flex; align-items:center; justify-content:center; }

.ptp-modal__overlay{
  position:fixed; inset:0;
  background: rgba(0,0,0,.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.ptp-modal__panel{
  position:relative;
  width: min(1060px, calc(100% - 32px));
  max-height: calc(100vh - 48px);
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 32px 80px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.08);
  overflow:hidden;
  opacity: 0;
  transform: translateY(16px) scale(.97);
  transition: transform .28s cubic-bezier(.22,1,.36,1), opacity .22s ease;
  display: flex;
  flex-direction: row;
}
.ptp-modal.show .ptp-modal__panel{
  opacity: 1;
  transform: translateY(0) scale(1);
}

.ptp-modal__close{
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 20;
  width: 42px; height: 42px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,.92);
  color: #1e293b;
  cursor:pointer;
  box-shadow: 0 4px 16px rgba(0,0,0,.18);
  display:grid;
  place-items:center;
  font-size: 16px;
  transition: background .15s, transform .15s;
}
.ptp-modal__close:hover{
  background: #fff;
  transform: scale(1.08);
}

.ptp-modal__hero{
  flex: 0 0 420px;
  position: relative;
  background: #1a1a2e;
  overflow: hidden;
  min-height: 520px;
}
.ptp-modal__hero-img{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}
.ptp-modal__hero-grad{
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) 40%,
      rgba(0,0,0,.55) 75%,
      rgba(0,0,0,.82) 100%
    );
  pointer-events: none;
}
.ptp-modal__hero-info{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px 26px;
  z-index: 3;
}
.ptp-modal__hero-name{
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  letter-spacing: -.2px;
  text-shadow: 0 2px 20px rgba(0,0,0,.4);
}
.ptp-modal__hero-sub{
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 16px;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255,255,255,.88);
  text-shadow: 0 2px 12px rgba(0,0,0,.35);
}
.ptp-modal__hero-sub .sep{
  opacity: .5;
  font-size: 10px;
}
.ptp-modal__hero-quote{
  margin-top: 14px;
  font-size: 13.5px;
  font-style: italic;
  color: rgba(255,255,255,.78);
  line-height: 1.4;
  text-shadow: 0 2px 12px rgba(0,0,0,.35);
  max-width: 360px;
}

.ptp-modal__hero-placeholder{
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(158,54,58,.25), transparent 60%),
    radial-gradient(ellipse at 70% 80%, rgba(158,54,58,.18), transparent 60%),
    linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
}
.ptp-modal__hero-initials{
  width: 120px; height: 120px;
  border-radius: 32px;
  display:grid; place-items:center;
  font-weight: 950;
  font-size: 44px;
  color: rgba(255,255,255,.85);
  background: rgba(255,255,255,.08);
  border: 2px solid rgba(255,255,255,.12);
  backdrop-filter: blur(4px);
}

.ptp-modal__details{
  flex: 1;
  overflow-y: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 48px);
}
.ptp-modal__dhead{
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 18px 24px 14px;
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(15,23,42,.06);
}
.ptp-modal__dhead-name{
  margin: 0;
  font-size: 22px;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.2;
}
.ptp-modal__dhead-tagline{
  margin-top: 4px;
  font-size: 13.5px;
  font-weight: 600;
  color: #64748b;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 10px;
  align-items: center;
}
.ptp-modal__dhead-tagline .tsep{
  opacity: .45;
  font-size: 8px;
}
.ptp-modal__dcontent{
  flex: 1;
  padding: 16px 24px 28px;
}

.ptp-msection{ margin-top: 20px; }
.ptp-msection:first-child{ margin-top: 0; }
.ptp-msection-title{
  font-size: 11.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .8px;
  color: #94a3b8;
  margin: 0 0 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(15,23,42,.06);
}

.ptp-mrow{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.ptp-mfield{
  padding: 10px 12px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid rgba(15,23,42,.05);
  transition: background .12s;
}
.ptp-mfield:hover{ background: #f1f5f9; }
.ptp-mfield-label{
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .5px;
  color: #94a3b8;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.ptp-mfield-label i{
  color: var(--ptp-brand, #9E363A);
  font-size: 11px;
  opacity: .85;
}
.ptp-mfield-val{
  font-size: 13.5px;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.3;
  word-break: break-word;
}
.ptp-mfield-full{ grid-column: 1 / -1; }

.ptp-mchips{ display:flex; flex-wrap: wrap; gap: 6px; margin-top: 2px; }
.ptp-mchip{
  display:inline-flex;
  align-items:center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  color: #475569;
  background: #fff;
  border: 1px solid #e2e8f0;
}
.ptp-mchip i{ color: var(--ptp-brand, #9E363A); font-size: 10px; }

.ptp-mnote{
  margin-top: 8px;
  padding: 14px 16px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(158,54,58,.04), rgba(158,54,58,.08));
  border: 1px solid rgba(158,54,58,.12);
  grid-column: 1 / -1;
}
.ptp-mnote-label{
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .5px;
  color: var(--ptp-brand, #9E363A);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.ptp-mnote-val{
  font-size: 13.5px;
  font-weight: 600;
  color: #334155;
  line-height: 1.5;
  white-space: pre-wrap;
  font-style: italic;
}

@media (max-width: 860px){
  .ptp-modal__panel{
    flex-direction: column;
    max-height: calc(100vh - 32px);
    width: min(560px, calc(100% - 24px));
  }
  .ptp-modal__hero{
    flex: 0 0 auto;
    min-height: 320px;
    max-height: 380px;
  }
  .ptp-modal__details{ max-height: none; }
  .ptp-modal__close{
    background: rgba(0,0,0,.45);
    color: #fff;
    box-shadow: 0 4px 16px rgba(0,0,0,.25);
  }
  .ptp-modal__close:hover{
    background: rgba(0,0,0,.6);
    color: #fff;
  }
}
@media (max-width: 560px){
  .ptp-modal__hero{ min-height: 260px; max-height: 300px; }
  .ptp-modal__hero-name{ font-size: 24px; }
  .ptp-modal__dhead{ padding: 14px 16px 12px; }
  .ptp-modal__dhead-name{ font-size: 18px; }
  .ptp-modal__dcontent{ padding: 14px 16px 24px; }
  .ptp-mrow{ grid-template-columns: 1fr; }
}

/* Dark mode */
html.theme-dark .ptp-modal__panel{ background: #0f172a; }
html.theme-dark .ptp-modal__close{
  background: rgba(15,23,42,.85);
  color: #e2e8f0;
  box-shadow: 0 4px 16px rgba(0,0,0,.35);
}
html.theme-dark .ptp-modal__close:hover{ background: rgba(15,23,42,.95); }
html.theme-dark .ptp-modal__dhead{
  background: rgba(15,23,42,.95);
  border-bottom-color: rgba(255,255,255,.06);
}
html.theme-dark .ptp-modal__dhead-name{ color: #f1f5f9; }
html.theme-dark .ptp-modal__dhead-tagline{ color: #94a3b8; }
html.theme-dark .ptp-mfield{
  background: rgba(255,255,255,.04);
  border-color: rgba(255,255,255,.06);
}
html.theme-dark .ptp-mfield:hover{ background: rgba(255,255,255,.07); }
html.theme-dark .ptp-mfield-label{ color: #64748b; }
html.theme-dark .ptp-mfield-val{ color: #e2e8f0; }
html.theme-dark .ptp-msection-title{ color: #475569; border-bottom-color: rgba(255,255,255,.06); }
html.theme-dark .ptp-mchip{
  background: rgba(255,255,255,.06);
  border-color: rgba(255,255,255,.08);
  color: #cbd5e1;
}
html.theme-dark .ptp-mnote{
  background: linear-gradient(135deg, rgba(158,54,58,.08), rgba(158,54,58,.14));
  border-color: rgba(158,54,58,.2);
}
html.theme-dark .ptp-mnote-val{ color: #cbd5e1; }

.dynamic-navbar .navbar-nav .dropdown-menu{
  position: absolute !important;
  inset: auto !important;
}
.dynamic-navbar .dropdown-menu.is-portaled{
  position: fixed !important;
}
`,v=e=>(e??``).toString().replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),y=e=>(e??``).toString().replace(/"/g,`&quot;`),b=e=>{let t=(e||``).toString().trim();return t?/^(data:|blob:|https?:\/\/|mailto:|tel:)/i.test(t)?t:t.startsWith(`//`)?`https:`+t:t.startsWith(`/`)?g+t:t.includes(`.`)&&!t.includes(` `)?`https://`+t.replace(/^\/+/,``):g+`/`+t.replace(/^\/+/,``):``},x=(e,t)=>{for(let n of t){let t=e?.[n];if(t!=null&&String(t).trim()!==``)return t}return``},S=e=>{let t=(e||``).trim();return t?t.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join(``):`TP`},ee=e=>{let t=parseInt(e,10);if(!t||Number.isNaN(t))return``;let n=t%100;if(n>=11&&n<=13)return t+`th`;switch(t%10){case 1:return t+`st`;case 2:return t+`nd`;case 3:return t+`rd`;default:return t+`th`}},C=e=>{let t=(e??``).toString().trim();if(!t)return``;let n=Number(t);return Number.isFinite(n)?n.toFixed(2):t},w=e=>{let t=e?.metadata;if(t&&typeof t==`object`)return t;if(typeof t==`string`)try{return JSON.parse(t)}catch{return{}}return{}},T=e=>String(x(e,[`user_name`,`topper_name`,`name`,`full_name`,`student_name`])||x(e?.user,[`name`,`full_name`,`username`])||`Topper`),E=e=>String(x(e,[`department_title`,`department_name`])||x(e?.department,[`title`,`name`])||``),te=e=>String(x(e,[`department_id`,`dept_id`])||x(e?.department,[`id`])||``),ne=e=>String(x(e,[`department_uuid`,`dept_uuid`])||x(e?.department,[`uuid`])||``),D=e=>String(x(e,[`program`,`degree`,`course`])||x(w(e),[`program`,`degree`])||``),O=e=>String(x(e,[`specialization`,`branch`,`stream`])||x(w(e),[`specialization`,`branch`])||``),k=e=>String(x(e,[`admission_year`,`start_year`,`joining_year`,`batch_start_year`])||x(w(e),[`admission_year`,`start_year`])||``),A=e=>String(x(e,[`passing_year`,`passout_year`,`graduation_year`,`completion_year`,`batch_end_year`])||x(w(e),[`passing_year`,`passout_year`])||``),j=e=>String(x(e,[`year_topper`,`topper_year`,`year_of_topper`])||x(w(e),[`year_topper`,`topper_year`])||``),M=e=>C(x(e,[`ygpa`,`year_gpa`,`year_gpa_score`,`yearly_gpa`])||x(w(e),[`ygpa`,`year_gpa`])||``),N=e=>String(x(e,[`rank`,`position`,`top_rank`,`merit_rank`])||x(w(e),[`rank`,`position`])||``),P=e=>M(e)||String(x(e,[`cgpa`,`gpa`,`percentage`,`score`,`marks`,`result`])||x(w(e),[`cgpa`,`percentage`,`score`])||``),F=e=>String(x(e,[`achievement`,`achievements`,`award`,`title`,`note`,`about`,`bio`,`summary`])||x(w(e),[`achievement`,`achievements`,`award`,`note`,`about`])||``),re=e=>{let t=w(e),n=t?.skills;if(Array.isArray(n))return n.map(e=>String(e||``).trim()).filter(Boolean);let r=x(e,[`skills`])||x(t,[`skills`])||``;return Array.isArray(r)?r.map(e=>String(e||``).trim()).filter(Boolean):typeof r==`string`&&r.trim()?r.split(`,`).map(e=>e.trim()).filter(Boolean):[]},ie=e=>b(x(e,[`user_image`,`image`,`image_url`,`photo_url`,`profile_image_url`,`avatar_url`])||x(e?.user,[`image`,`photo_url`,`image_url`])||``),ae=e=>{let t=String(x(e,[`uuid`,`topper_uuid`,`program_topper_uuid`])||``).trim();if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t))return t;let n=String(x(e,[`id`,`topper_id`,`program_topper_id`])||``).trim();return n?`id:${n}`:``},oe=(e,t)=>{let n=new URL(window.location.href),r=(n.searchParams.get(`department`)||n.searchParams.get(`dept`)||``).trim();if(r)return t.has(r.toLowerCase())?t.get(r.toLowerCase()):(e.has(r),r);let i=`${n.search} ${n.href}`.match(/d-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i);return i?i[1]:``},se=(e,t)=>{let n=new URL(window.location.href);if(e){let r=t.get(e);r?.shortcode?(n.searchParams.set(`dept`,r.shortcode),n.searchParams.delete(`department`)):(n.searchParams.set(`department`,e),n.searchParams.delete(`dept`))}else n.searchParams.delete(`department`),n.searchParams.delete(`dept`);history.replaceState({},``,n.pathname+n.search+n.hash)},ce=()=>{let e=window.location.pathname.split(`/`).filter(Boolean),t=e.findIndex(e=>e.toLowerCase()===`program-toppers`||e.toLowerCase()===`toppers`);return t>0?e[t-1]:``},le=()=>{if(document.querySelector(`link[href*="font-awesome"]`))return;let e=document.createElement(`link`);e.rel=`stylesheet`,e.href=`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`,document.head.appendChild(e)},ue=(0,m.jsx)(`div`,{"aria-hidden":`true`,style:{width:`170px`,maxWidth:`100%`,margin:`0 auto 10px`,display:`block`,color:`var(--ptp-brand)`},children:(0,m.jsxs)(`svg`,{viewBox:`0 0 220 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,style:{display:`block`,width:`100%`,height:`auto`},children:[(0,m.jsx)(`rect`,{x:`10`,y:`18`,width:`200`,height:`112`,rx:`16`,fill:`white`,stroke:`rgba(15,23,42,0.10)`}),(0,m.jsx)(`rect`,{x:`24`,y:`32`,width:`172`,height:`84`,rx:`12`,fill:`rgba(148,163,184,0.08)`,stroke:`rgba(148,163,184,0.18)`}),(0,m.jsx)(`circle`,{cx:`70`,cy:`66`,r:`16`,fill:`rgba(158,54,58,0.14)`,stroke:`currentColor`,strokeWidth:`2`}),(0,m.jsx)(`path`,{d:`M49 97c5-11 16-16 21-16s16 5 21 16`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`}),(0,m.jsx)(`rect`,{x:`100`,y:`52`,width:`72`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.20)`}),(0,m.jsx)(`rect`,{x:`100`,y:`68`,width:`54`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.16)`}),(0,m.jsx)(`rect`,{x:`100`,y:`84`,width:`64`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.12)`}),(0,m.jsx)(`circle`,{cx:`182`,cy:`26`,r:`12`,fill:`rgba(158,54,58,0.10)`,stroke:`currentColor`,strokeWidth:`1.8`}),(0,m.jsx)(`path`,{d:`M177.5 26h9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,m.jsx)(`path`,{d:`M182 21.5v9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}),I=(e,t)=>{let n=(t||``).toString().trim();return n?(0,m.jsxs)(`div`,{className:`ptp-mfield`,children:[(0,m.jsxs)(`div`,{className:`ptp-mfield-label`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-circle-info`}),e]}),(0,m.jsx)(`div`,{className:`ptp-mfield-val`,children:n})]}):null},de=(e,t,n)=>{let r=Array.isArray(n)?n.filter(Boolean):[];return r.length?(0,m.jsxs)(`div`,{className:`ptp-mfield ptp-mfield-full`,children:[(0,m.jsxs)(`div`,{className:`ptp-mfield-label`,children:[(0,m.jsx)(`i`,{className:t}),e]}),(0,m.jsx)(`div`,{className:`ptp-mfield-val`,children:(0,m.jsx)(`div`,{className:`ptp-mchips`,children:r.map((e,t)=>(0,m.jsxs)(`span`,{className:`ptp-mchip`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-check`}),e]},`${e}-${t}`))})})]}):null},L=e=>{let t=ee(e);return t?`${t} Year Topper`:e?`Year Topper ${e}`:``};function R(){let e=t(),n=i(s),r=i(u),g=i(a),b=i(o),x=i(c),ee=i(d),[C,w]=(0,p.useState)(``),[R,fe]=(0,p.useState)(``),[pe,me]=(0,p.useState)(``),[z,B]=(0,p.useState)(1),[V,he]=(0,p.useState)(!1),[ge,_e]=(0,p.useState)(!1),[H,ve]=(0,p.useState)(!1),[U,ye]=(0,p.useState)(null),W=(0,p.useState)(null)[0];(0,p.useEffect)(()=>{le(),e(f()),e(l()),ve(!0)},[e]);let G=(0,p.useMemo)(()=>new Map((n||[]).map(e=>[e.uuid,e])),[n]),K=(0,p.useMemo)(()=>new Map((n||[]).filter(e=>e.slug).map(e=>[e.slug.toLowerCase(),e.uuid])),[n]),q=C&&G.get(C)||null,J=q?.id!==null&&q?.id!==void 0?String(q.id):``;q?.title,(0,p.useEffect)(()=>{if(!H||V||r===`loading`||x===`loading`||r===`idle`||x===`idle`)return;let e=oe(G,K);if(e&&G.has(e))w(e),_e(!0);else{let e=ce(),t=e&&K.get(e.toLowerCase())||``;w(t||``),t&&_e(!0)}he(!0),B(1)},[H,V,r,x,G,K]),(0,p.useEffect)(()=>{V&&se(C,G)},[V,C,G]),(0,p.useEffect)(()=>{if(U)return document.documentElement.style.overflow=`hidden`,document.body.style.overflow=`hidden`,()=>{document.documentElement.style.overflow=``,document.body.style.overflow=``}},[U]),(0,p.useEffect)(()=>{let e=setTimeout(()=>{me(R.trim()),B(1)},260);return()=>clearTimeout(e)},[R]);let be=!H||r===`loading`||x===`loading`||!V,Y=(0,p.useMemo)(()=>{let e=Array.isArray(b)?b.slice():[];C&&(e=e.filter(e=>{let t=te(e),n=ne(e);return J&&t===J||n&&n===C}));let t=pe.toLowerCase();return t&&(e=e.filter(e=>{let n=T(e).toLowerCase(),r=E(e).toLowerCase(),i=D(e).toLowerCase(),a=O(e).toLowerCase(),o=k(e).toLowerCase(),s=A(e).toLowerCase(),c=j(e).toLowerCase(),l=M(e).toLowerCase(),u=N(e).toLowerCase(),d=P(e).toLowerCase(),f=F(e).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)||a.includes(t)||o.includes(t)||s.includes(t)||c.includes(t)||l.includes(t)||u.includes(t)||d.includes(t)||f.includes(t)})),e.sort((e,t)=>{let n=parseFloat(N(e)),r=parseFloat(N(t)),i=Number.isFinite(n),a=Number.isFinite(r);return i&&a?n-r:i&&!a?-1:!i&&a?1:0}),e},[b,C,J,pe]),X=Math.max(1,Math.ceil(Y.length/h)),Z=Math.min(z,X);(0,p.useEffect)(()=>{z>X&&B(X)},[X,z]);let Q=(0,p.useMemo)(()=>{let e=(Z-1)*h;return Y.slice(e,e+h)},[Y,Z]),xe=C?`No program toppers found for this department.`:`No program toppers found.`,Se=e=>{w((e.target.value||``).toString()),B(1)},Ce=e=>{fe(e.target.value)},$=e=>{W.current=document.activeElement,ye(e)},we=()=>{if(ye(null),W.current&&typeof W.current.focus==`function`)try{W.current.focus()}catch{}W.current=null},Te=(e,t)=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),$(t))},Ee=U?(()=>{let e=T(U),t=E(U),n=D(U),r=O(U),i=k(U),a=A(U),o=j(U),s=M(U),c=N(U),l=ie(U),u=[];c&&u.push(`Rank `+c),o&&u.push(L(o)),s&&u.push(`YGPA `+s),n&&u.push(n+(r?` · `+r:``)),t&&u.push(t);let d=i?i+(a?`–`+a:``):a||``;d&&u.push(`Batch `+d);let f=u.length?u.map(e=>`<span>${v(e)}</span>`).join(`<span class="sep">•</span>`):``,p=F(U)||(s?`YGPA: `+s:P(U)?`Score: `+P(U):``),m=p?`<div class="ptp-modal__hero-quote">"${v(p)}"</div>`:``;return l?`
        <img class="ptp-modal__hero-img" src="${y(l)}" alt="${y(e)} photo">
        <div class="ptp-modal__hero-grad"></div>
        <div class="ptp-modal__hero-info">
          <h2 class="ptp-modal__hero-name">${v(e)}</h2>
          ${f?`<div class="ptp-modal__hero-sub">${f}</div>`:``}
          ${m}
        </div>
      `:`
      <div class="ptp-modal__hero-placeholder">
        <div class="ptp-modal__hero-initials">${v(S(e))}</div>
      </div>
      <div class="ptp-modal__hero-grad"></div>
      <div class="ptp-modal__hero-info">
        <h2 class="ptp-modal__hero-name">${v(e)}</h2>
        ${f?`<div class="ptp-modal__hero-sub">${f}</div>`:``}
        ${m}
      </div>
    `})():``,De=U?(()=>{let e=T(U),t=E(U),n=D(U),r=O(U),i=k(U),a=A(U),o=j(U),s=M(U),c=N(U),l=P(U),u=F(U),d=re(U),f=[];t&&f.push(t),n&&f.push(n+(r?` · `+r:``)),o&&f.push(L(o)),c&&f.push(`Rank `+c),s&&f.push(`YGPA `+s);let p=f.length?f.map(e=>`<span>${v(e)}</span>`).join(`<span class="tsep">•</span>`):``,m=[I(`Program`,n),I(`Specialization`,r),I(`Batch Start`,i),I(`Batch End`,a),I(`Year Topper`,o?L(o):``),I(`YGPA`,s),I(`Rank`,c?`Rank `+c:``),I(`Score`,l)].filter(Boolean);return`
      <div class="ptp-modal__dhead">
        <h2 class="ptp-modal__dhead-name">${v(e)}</h2>
        ${p?`<div class="ptp-modal__dhead-tagline">${p}</div>`:``}
      </div>
      <div class="ptp-modal__dcontent">
        ${m.length?`
              <div class="ptp-msection">
                <div class="ptp-msection-title">Academic</div>
                <div class="ptp-mrow">
                  ${m.join(``)}
                </div>
              </div>
            `:``}
        ${d.length?`
              <div class="ptp-msection">
                <div class="ptp-msection-title">Skills</div>
                <div class="ptp-mrow">
                  ${de(`Skills`,`fa-solid fa-wand-magic-sparkles`,d).props?.children?.toString()||``}
                </div>
              </div>
            `:``}
        ${u?`
              <div class="ptp-msection">
                <div class="ptp-mnote">
                  <div class="ptp-mnote-label"><i class="fa-solid fa-star"></i>Highlight</div>
                  <div class="ptp-mnote-val">${v(u)}</div>
                </div>
              </div>
            `:``}
      </div>
    `})():``;return(0,m.jsxs)(`div`,{className:`ptp-wrap`,children:[(0,m.jsx)(`style`,{children:_}),ge?null:(0,m.jsx)(`div`,{className:`ptp-head`,children:(0,m.jsxs)(`div`,{className:`ptp-tools`,children:[(0,m.jsxs)(`div`,{className:`ptp-search`,children:[(0,m.jsx)(`i`,{className:`fa fa-magnifying-glass`}),(0,m.jsx)(`input`,{value:R,onChange:Ce,type:`search`,placeholder:`Search (name, department, program, batch, year topper, YGPA, rank)…`})]}),(0,m.jsxs)(`div`,{className:`ptp-select`,title:`Filter by department`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-building-columns ptp-select__icon`}),(0,m.jsxs)(`select`,{value:C,onChange:Se,"aria-label":`Filter by department`,children:[(0,m.jsx)(`option`,{value:``,children:`All Departments`}),(n||[]).slice().sort((e,t)=>e.title.localeCompare(t.title)).map(e=>(0,m.jsx)(`option`,{value:e.uuid,children:e.title},e.uuid))]}),(0,m.jsx)(`i`,{className:`fa-solid fa-chevron-down ptp-select__caret`})]})]})}),be?(0,m.jsx)(`div`,{className:`ptp-skeleton`,children:Array.from({length:12}).map((e,t)=>(0,m.jsx)(`div`,{className:`ptp-sk`},t))}):(g||ee)&&!Q.length?(0,m.jsxs)(`div`,{className:`ptp-state`,children:[ue,`Unable to load program toppers right now.`]}):Q.length?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`ptp-grid`,children:Q.map(e=>{let t=T(e),n=E(e),r=D(e),i=O(e),a=k(e),o=A(e),s=j(e),c=M(e),l=N(e),u=ie(e),d=ae(e),f=n?(0,m.jsx)(`div`,{className:`ptp-pill`,title:n,children:n}):null,p=s?(0,m.jsx)(`div`,{className:`ptp-yearpill`,title:`Year topper`,children:L(s)}):null,h=l?(0,m.jsx)(`div`,{className:`ptp-rank`,title:`Rank`,children:`Rank ${l}`}):null,g=r||i?(0,m.jsxs)(`p`,{className:`ptp-meta`,children:[r||`Program`,r&&i?(0,m.jsx)(`span`,{className:`dot`,children:`•`}):null,i||``]}):n?(0,m.jsx)(`p`,{className:`ptp-meta`,children:n}):(0,m.jsx)(`p`,{className:`ptp-meta`,children:`Program Topper`}),_=[];return a?_.push(`Batch: ${a}${o?`–`+o:``}`):o&&_.push(`Passout: ${o}`),s&&_.push(L(s)),c&&_.push(`YGPA: ${c}`),(0,m.jsxs)(`a`,{className:`ptp-card`,href:`#`,role:`button`,"aria-label":`${t} details`,onClick:t=>{t.preventDefault(),$(e)},onKeyDown:t=>Te(t,e),children:[u?(0,m.jsx)(`div`,{className:`bg`,style:{backgroundImage:`url('${y(u)}')`}}):(0,m.jsx)(`div`,{className:`ptp-placeholder`,children:(0,m.jsx)(`div`,{className:`ptp-initials`,children:S(t)})}),f,p,h,(0,m.jsx)(`div`,{className:`vignette`}),(0,m.jsxs)(`div`,{className:`info`,children:[(0,m.jsx)(`p`,{className:`ptp-name`,children:t}),g,_.length?(0,m.jsx)(`p`,{className:`ptp-submeta`,children:_.map((e,t)=>(0,m.jsxs)(`span`,{children:[t>0?(0,m.jsx)(`span`,{className:`dot`,children:`•`}):null,e]},t))}):null]})]},d||`${t}-${n}`)})}),X>1?(0,m.jsx)(`div`,{className:`ptp-pagination`,children:(0,m.jsxs)(`div`,{className:`ptp-pager`,children:[(0,m.jsx)(`button`,{className:`ptp-pagebtn`,disabled:Z<=1,onClick:()=>{B(Math.max(1,Z-1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Previous`}),(()=>{let e=Math.max(1,Z-2),t=Math.min(X,Z+2),n=[];e>1&&(n.push((0,m.jsx)(`button`,{className:`ptp-pagebtn ${Z===1?`active`:``}`,onClick:()=>{B(1),window.scrollTo({top:0,behavior:`smooth`})},children:`1`},`p1`)),e>2&&n.push((0,m.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots1`)));for(let r=e;r<=t;r++)n.push((0,m.jsx)(`button`,{className:`ptp-pagebtn ${Z===r?`active`:``}`,onClick:()=>{B(r),window.scrollTo({top:0,behavior:`smooth`})},children:r},r));return t<X&&(t<X-1&&n.push((0,m.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots2`)),n.push((0,m.jsx)(`button`,{className:`ptp-pagebtn ${Z===X?`active`:``}`,onClick:()=>{B(X),window.scrollTo({top:0,behavior:`smooth`})},children:X},X))),n})(),(0,m.jsx)(`button`,{className:`ptp-pagebtn`,disabled:Z>=X,onClick:()=>{B(Math.min(X,Z+1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Next`})]})}):null]}):(0,m.jsxs)(`div`,{className:`ptp-state`,children:[ue,xe]}),(0,m.jsxs)(`div`,{className:`ptp-modal ${U?`show`:``}`,"aria-hidden":U?`false`:`true`,role:`dialog`,"aria-modal":`true`,onClick:we,children:[(0,m.jsx)(`div`,{className:`ptp-modal__overlay`,"data-close":`1`}),(0,m.jsxs)(`div`,{className:`ptp-modal__panel`,role:`document`,"aria-label":`Program topper details`,onClick:e=>e.stopPropagation(),children:[(0,m.jsx)(`button`,{className:`ptp-modal__close`,type:`button`,"aria-label":`Close`,onClick:we,children:(0,m.jsx)(`i`,{className:`fa-solid fa-xmark`})}),(0,m.jsx)(`div`,{className:`ptp-modal__hero`,dangerouslySetInnerHTML:{__html:Ee}}),(0,m.jsx)(`div`,{className:`ptp-modal__details`,dangerouslySetInnerHTML:{__html:De}})]})]})]})}export{R as default};