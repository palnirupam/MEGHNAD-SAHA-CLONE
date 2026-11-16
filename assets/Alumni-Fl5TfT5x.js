import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f}from"./alumniViewAllSlice-D86wWdAK.js";var p=e(n(),1),m=r(),h=12,g=typeof window<`u`?window.location.origin.replace(/\/+$/,``):``,ee=String.raw`
.alx-wrap{
  --alx-brand: var(--primary-color, #9E363A);
  --alx-ink: #0f172a;
  --alx-muted: #64748b;
  --alx-bg: var(--page-bg, #ffffff);
  --alx-card: var(--surface, #ffffff);
  --alx-line: var(--line-soft, rgba(15,23,42,.10));
  --alx-shadow: 0 10px 24px rgba(2,6,23,.08);

  --alx-card-w: 247px;
  --alx-card-h: 329px;
  --alx-radius: 18px;

  max-width: 1320px;
  margin: 18px auto 54px;
  padding: 0 12px;
  background: transparent;
  position: relative;
  overflow: visible;
}

.alx-head{
  background: var(--alx-card);
  border: 1px solid var(--alx-line);
  border-radius: 16px;
  box-shadow: var(--alx-shadow);
  padding: 14px 16px;
  margin-bottom: 16px;
  display:flex;
  gap: 12px;
  align-items:center;
  justify-content:space-between;
}
.alx-title{
  margin:0;
  font-weight: 950;
  letter-spacing: .2px;
  color: var(--alx-ink);
  font-size: 28px;
  display:flex;
  align-items:center;
  gap: 10px;
  white-space: nowrap;
}
.alx-title i{ color: var(--alx-brand); }
.alx-sub{
  margin: 6px 0 0;
  color: var(--alx-muted);
  font-size: 14px;
}

.alx-tools{
  display:flex;
  gap: 10px;
  align-items:center;
  flex-wrap: nowrap;
}

.alx-search{
  position: relative;
  min-width: 260px;
  max-width: 520px;
  flex: 1 1 320px;
}
.alx-search i{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .65;
  color: var(--alx-muted);
  pointer-events:none;
}
.alx-search input{
  width:100%;
  height: 42px;
  border-radius: 999px;
  padding: 11px 12px 11px 42px;
  border: 1px solid var(--alx-line);
  background: var(--alx-card);
  color: var(--alx-ink);
  outline: none;
}
.alx-search input:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.alx-select{
  position: relative;
  min-width: 260px;
  max-width: 360px;
  flex: 0 1 320px;
}
.alx-select__icon{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--alx-muted);
  pointer-events:none;
  font-size: 14px;
}
.alx-select__caret{
  position:absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--alx-muted);
  pointer-events:none;
  font-size: 12px;
}
.alx-select select{
  width: 100%;
  height: 42px;
  border-radius: 999px;
  padding: 10px 38px 10px 42px;
  border: 1px solid var(--alx-line);
  background: var(--alx-card);
  color: var(--alx-ink);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.alx-select select:focus{
  border-color: rgba(201,75,80,.55);
  box-shadow: 0 0 0 4px rgba(201,75,80,.18);
}

.alx-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, var(--alx-card-w));
  gap: 18px;
  align-items: start;
  justify-content: center;
}

.alx-card{
  position: relative;
  width: var(--alx-card-w);
  height: var(--alx-card-h);
  border-radius: var(--alx-radius);
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
.alx-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 18px 42px rgba(0,0,0,.16);
  border-color: rgba(158,54,58,.22);
}

.alx-card .bg{
  position:absolute; inset:0;
  background-size: cover;
  background-position: center;
  filter: saturate(1.02);
  transform: scale(1.0001);
}

.alx-card .vignette{
  position:absolute; inset:0;
  background:
    radial-gradient(1200px 500px at 50% -20%, rgba(255,255,255,.10), rgba(0,0,0,0) 60%),
    linear-gradient(180deg, rgba(0,0,0,.00) 28%, rgba(0,0,0,.12) 60%, rgba(0,0,0,.62) 100%);
}

.alx-card .info{
  position:absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  z-index: 2;
}
.alx-name{
  margin:0;
  font-size: 18px;
  font-weight: 950;
  line-height: 1.12;
  color: #fff;
  text-shadow: 0 6px 16px rgba(0,0,0,.35);
}
.alx-meta{
  margin: 7px 0 0;
  font-size: 13px;
  font-weight: 800;
  color: rgba(255,255,255,.90);
  text-shadow: 0 6px 16px rgba(0,0,0,.35);
  line-height: 1.2;
}
.alx-meta .dot{
  opacity: .85;
  padding: 0 6px;
}
.alx-submeta{
  margin: 7px 0 0;
  font-size: 12.5px;
  color: rgba(255,255,255,.82);
  text-shadow: 0 6px 16px rgba(0,0,0,.35);
  line-height: 1.2;
}

.alx-pill{
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

.alx-placeholder{
  position:absolute; inset:0;
  display:grid; place-items:center;
  background:
    radial-gradient(800px 360px at 20% 10%, rgba(158,54,58,.20), transparent 60%),
    radial-gradient(900px 400px at 80% 90%, rgba(158,54,58,.14), transparent 60%),
    linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.82));
}
.alx-initials{
  width: 86px; height: 86px;
  border-radius: 24px;
  display:grid; place-items:center;
  font-weight: 950;
  font-size: 28px;
  color: var(--alx-brand);
  background: rgba(158,54,58,.12);
  border: 1px solid rgba(158,54,58,.25);
}

.alx-state{
  background: var(--alx-card);
  border: 1px solid var(--alx-line);
  border-radius: 16px;
  box-shadow: var(--alx-shadow);
  padding: 18px;
  color: var(--alx-muted);
  text-align:center;
}

.alx-skeleton{
  display:grid;
  grid-template-columns: repeat(auto-fill, var(--alx-card-w));
  gap: 18px;
  justify-content: center;
}
.alx-sk{
  border-radius: var(--alx-radius);
  border: 1px solid var(--alx-line);
  background: #fff;
  overflow:hidden;
  position:relative;
  box-shadow: 0 10px 24px rgba(2,6,23,.08);
  height: var(--alx-card-h);
}
.alx-sk:before{
  content:'';
  position:absolute; inset:0;
  transform: translateX(-60%);
  background: linear-gradient(90deg, transparent, rgba(148,163,184,.22), transparent);
  animation: alxSkMove 1.15s ease-in-out infinite;
}
@keyframes alxSkMove{ to{ transform: translateX(60%);} }

.alx-pagination{
  display:flex;
  justify-content:center;
  margin-top: 18px;
}
.alx-pagination .alx-pager{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  padding: 10px;
}
.alx-pagebtn{
  border:1px solid var(--alx-line);
  background: var(--alx-card);
  color: var(--alx-ink);
  border-radius: 12px;
  padding: 9px 12px;
  font-size: 13px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(2,6,23,.06);
  cursor:pointer;
  user-select:none;
}
.alx-pagebtn:hover{ background: rgba(2,6,23,.03); }
.alx-pagebtn[disabled]{ opacity:.55; cursor:not-allowed; }
.alx-pagebtn.active{
  background: rgba(201,75,80,.12);
  border-color: rgba(201,75,80,.35);
  color: var(--alx-brand);
}

@media (max-width: 992px){
  .alx-head{ flex-wrap: wrap; align-items: flex-end; }
  .alx-tools{ flex-wrap: wrap; }
}
@media (max-width: 640px){
  .alx-title{ font-size: 24px; }
  .alx-search{ min-width: 220px; flex: 1 1 240px; }
  .alx-select{ min-width: 220px; flex: 1 1 240px; }
}

.alx-modal{
  position: fixed;
  inset: 0;
  display:none;
  z-index: 9999;
}
.alx-modal.show{ display:flex; align-items:center; justify-content:center; }

.alx-modal__overlay{
  position:fixed; inset:0;
  background: rgba(0,0,0,.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.alx-modal__panel{
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
.alx-modal.show .alx-modal__panel{
  opacity: 1;
  transform: translateY(0) scale(1);
}

.alx-modal__close{
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
.alx-modal__close:hover{
  background: #fff;
  transform: scale(1.08);
}

.alx-modal__hero{
  flex: 0 0 420px;
  position: relative;
  background: #1a1a2e;
  overflow: hidden;
  min-height: 520px;
}
.alx-modal__hero-img{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}
.alx-modal__hero-grad{
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
.alx-modal__hero-info{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px 26px;
  z-index: 3;
}
.alx-modal__hero-name{
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  letter-spacing: -.2px;
  text-shadow: 0 2px 20px rgba(0,0,0,.4);
}
.alx-modal__hero-sub{
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
.alx-modal__hero-sub .sep{
  opacity: .5;
  font-size: 10px;
}
.alx-modal__hero-quote{
  margin-top: 14px;
  font-size: 13.5px;
  font-style: italic;
  color: rgba(255,255,255,.78);
  line-height: 1.4;
  text-shadow: 0 2px 12px rgba(0,0,0,.35);
  max-width: 360px;
  white-space: pre-wrap;
}

.alx-modal__hero-placeholder{
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
.alx-modal__hero-initials{
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

.alx-modal__details{
  flex: 1;
  overflow-y: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 48px);
}

.alx-modal__dhead{
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 18px 24px 14px;
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(15,23,42,.06);
}
.alx-modal__dhead-name{
  margin: 0;
  font-size: 22px;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.2;
}
.alx-modal__dhead-tagline{
  margin-top: 4px;
  font-size: 13.5px;
  font-weight: 600;
  color: #64748b;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 10px;
  align-items: center;
}
.alx-modal__dhead-tagline .tsep{
  opacity: .45;
  font-size: 8px;
}

.alx-modal__dcontent{
  flex: 1;
  padding: 16px 24px 28px;
}

.alx-msection{
  margin-top: 20px;
}
.alx-msection:first-child{ margin-top: 0; }
.alx-msection-title{
  font-size: 11.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .8px;
  color: #94a3b8;
  margin: 0 0 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(15,23,42,.06);
}

.alx-mrow{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.alx-mfield{
  padding: 10px 12px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid rgba(15,23,42,.05);
  transition: background .12s;
}
.alx-mfield:hover{ background: #f1f5f9; }
.alx-mfield-label{
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
.alx-mfield-label i{
  color: var(--alx-brand, #9E363A);
  font-size: 11px;
  opacity: .85;
}
.alx-mfield-val{
  font-size: 13.5px;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.3;
  word-break: break-word;
  white-space: pre-wrap;
}
.alx-mfield-full{
  grid-column: 1 / -1;
}

.alx-mchips{
  display:flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
}
.alx-mchip{
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
.alx-mchip i{
  color: var(--alx-brand, #9E363A);
  font-size: 10px;
}

.alx-mnote{
  margin-top: 8px;
  padding: 14px 16px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(158,54,58,.04), rgba(158,54,58,.08));
  border: 1px solid rgba(158,54,58,.12);
  grid-column: 1 / -1;
}
.alx-mnote-label{
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .5px;
  color: var(--alx-brand, #9E363A);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.alx-mnote-val{
  font-size: 13.5px;
  font-weight: 600;
  color: #334155;
  line-height: 1.5;
  white-space: pre-wrap;
  font-style: italic;
}

@media (max-width: 860px){
  .alx-modal__panel{
    flex-direction: column;
    max-height: calc(100vh - 32px);
    width: min(560px, calc(100% - 24px));
  }
  .alx-modal__hero{
    flex: 0 0 auto;
    min-height: 320px;
    max-height: 380px;
  }
  .alx-modal__details{
    max-height: none;
  }
  .alx-modal__close{
    background: rgba(0,0,0,.45);
    color: #fff;
    box-shadow: 0 4px 16px rgba(0,0,0,.25);
  }
  .alx-modal__close:hover{
    background: rgba(0,0,0,.6);
    color: #fff;
  }
}
@media (max-width: 560px){
  .alx-modal__hero{
    min-height: 260px;
    max-height: 300px;
  }
  .alx-modal__hero-name{
    font-size: 24px;
  }
  .alx-modal__dhead{
    padding: 14px 16px 12px;
  }
  .alx-modal__dhead-name{
    font-size: 18px;
  }
  .alx-modal__dcontent{
    padding: 14px 16px 24px;
  }
  .alx-mrow{
    grid-template-columns: 1fr;
  }
}

html.theme-dark .alx-modal__panel{ background: #0f172a; }
html.theme-dark .alx-modal__close{
  background: rgba(15,23,42,.85);
  color: #e2e8f0;
  box-shadow: 0 4px 16px rgba(0,0,0,.35);
}
html.theme-dark .alx-modal__close:hover{ background: rgba(15,23,42,.95); }
html.theme-dark .alx-modal__dhead{
  background: rgba(15,23,42,.95);
  border-bottom-color: rgba(255,255,255,.06);
}
html.theme-dark .alx-modal__dhead-name{ color: #f1f5f9; }
html.theme-dark .alx-modal__dhead-tagline{ color: #94a3b8; }
html.theme-dark .alx-mfield{
  background: rgba(255,255,255,.04);
  border-color: rgba(255,255,255,.06);
}
html.theme-dark .alx-mfield:hover{ background: rgba(255,255,255,.07); }
html.theme-dark .alx-mfield-label{ color: #64748b; }
html.theme-dark .alx-mfield-val{ color: #e2e8f0; }
html.theme-dark .alx-msection-title{ color: #475569; border-bottom-color: rgba(255,255,255,.06); }
html.theme-dark .alx-mchip{
  background: rgba(255,255,255,.06);
  border-color: rgba(255,255,255,.08);
  color: #cbd5e1;
}
html.theme-dark .alx-mnote{
  background: linear-gradient(135deg, rgba(158,54,58,.08), rgba(158,54,58,.14));
  border-color: rgba(158,54,58,.2);
}
html.theme-dark .alx-mnote-val{ color: #cbd5e1; }

.dynamic-navbar .navbar-nav .dropdown-menu{
  position: absolute !important;
  inset: auto !important;
}
.dynamic-navbar .dropdown-menu.is-portaled{
  position: fixed !important;
}
`,_=e=>{if(e==null)return null;if(Array.isArray(e)||typeof e==`object`)return e;try{return JSON.parse(String(e))}catch{return null}},v=e=>{let t=String(e??``);if(!t)return``;if(typeof document<`u`){let e=document.createElement(`textarea`);return e.innerHTML=t,e.value}return t.replace(/&nbsp;/gi,` `).replace(/&amp;/gi,`&`).replace(/&lt;/gi,`<`).replace(/&gt;/gi,`>`).replace(/&quot;/gi,`"`).replace(/&#39;/gi,`'`)},y=e=>{let t=v(e);return t=t.replace(/<\s*br\s*\/?\s*>/gi,`
`).replace(/<\/\s*(p|div|li|tr|h[1-6])\s*>/gi,`
`).replace(/<\s*li[^>]*>/gi,`• `).replace(/<[^>]*>/g,``),t=v(t).replace(/\u00a0/g,` `).replace(/[\u200B-\u200D\uFEFF]/g,``).replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim(),new Set([``,`<br>`,`<br/>`,`<br />`,`&nbsp;`,`<p><br></p>`,`<p><br /></p>`]).has(String(e??``).trim().toLowerCase())?``:t},b=e=>{if(e==null)return``;if(typeof e==`number`||typeof e==`boolean`)return String(e);if(Array.isArray(e))return e.map(b).filter(Boolean).join(`, `);if(typeof e==`object`){for(let t of[`name`,`title`,`label`,`value`,`text`,`html`,`content`,`description`,`designation`,`role`,`company`,`city`,`country`,`year`])if(e?.[t]!==null&&e?.[t]!==void 0){let n=b(e[t]);if(n)return n}return``}let t=_(e);if(t&&typeof t==`object`){let e=b(t);if(e)return e}return y(e)},x=e=>{let t=b(e).trim();return t?/^(data:|blob:|https?:\/\/|mailto:|tel:)/i.test(t)?t:t.startsWith(`//`)?`https:`+t:t.startsWith(`/`)?g+t:t.includes(`.`)&&!t.includes(` `)?`https://`+t.replace(/^\/+/,``):g+`/`+t.replace(/^\/+/,``):``},te=e=>String(e||``).replace(/\\/g,`\\\\`).replace(/"/g,`\\"`),S=(e,t)=>{for(let n of t){let t=e?.[n],r=b(t);if(r)return r}return``},ne=e=>{let t=b(e).trim();return t?t.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join(``):`AL`},C=e=>_(e?.metadata)||{},w=e=>S(e,[`user_name`,`alumni_name`,`name`,`full_name`,`student_name`])||S(e?.user,[`name`,`full_name`,`username`])||`Alumni`,T=e=>S(e,[`department_title`,`department_name`])||S(e?.department,[`title`,`name`])||``,re=e=>S(e,[`department_id`,`dept_id`])||S(e?.department,[`id`])||``,ie=e=>S(e,[`department_uuid`,`dept_uuid`])||S(e?.department,[`uuid`])||``,E=e=>S(e,[`program`,`degree`,`course`])||S(C(e),[`program`,`degree`])||``,D=e=>S(e,[`specialization`,`branch`,`stream`])||S(C(e),[`specialization`,`branch`])||``,O=e=>S(e,[`admission_year`,`start_year`,`joining_year`,`batch_start_year`])||S(C(e),[`admission_year`])||``,k=e=>S(e,[`passing_year`,`passout_year`,`graduation_year`,`completion_year`,`batch_end_year`])||S(C(e),[`passing_year`,`passout_year`])||``,A=e=>S(e,[`current_company`,`company`,`company_name`])||S(C(e),[`company`,`current_company`])||``,j=e=>S(e,[`current_role_title`,`current_role`,`designation`,`role_title`,`job_title`,`position`])||S(C(e),[`role_title`,`designation`])||``,M=e=>S(e,[`industry`,`sector`])||S(C(e),[`industry`])||``,ae=e=>S(e,[`city`,`current_city`])||S(C(e),[`city`])||``,oe=e=>S(e,[`country`,`current_country`])||S(C(e),[`country`])||``,se=e=>{let t=e?.skills??C(e)?.skills;if(Array.isArray(t))return t.map(b).filter(Boolean);let n=_(t);if(Array.isArray(n))return n.map(b).filter(Boolean);let r=b(t);return r?r.split(/[,|]/).map(e=>e.trim()).filter(Boolean):[]},ce=e=>S(e,[`note`,`about`,`bio`,`summary`])||S(C(e),[`note`,`about`,`bio`,`summary`])||``,le=e=>x(S(e,[`user_image`,`image`,`image_url`,`photo_url`,`profile_image_url`,`avatar_url`])||S(e?.user,[`image`,`photo_url`,`image_url`])||``),N=e=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(e||``).trim()),ue=e=>{let t=S(e,[`uuid`,`alumni_uuid`]).trim();if(N(t))return t;let n=S(e,[`id`,`alumni_id`]).trim();return n?`id:${n}`:``},de=(e,t)=>{let n=new URL(window.location.href),r=(n.searchParams.get(`department`)||n.searchParams.get(`dept`)||``).trim();if(r)return t.has(r.toLowerCase())?t.get(r.toLowerCase()):(e.has(r),r);let i=`${n.search} ${n.href}`.match(/d-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i);return i?i[1]:``},fe=(e,t)=>{let n=new URL(window.location.href);if(e){let r=t.get(e);r?.shortcode?(n.searchParams.set(`dept`,r.shortcode),n.searchParams.delete(`department`)):(n.searchParams.set(`department`,e),n.searchParams.delete(`dept`))}else n.searchParams.delete(`department`),n.searchParams.delete(`dept`);history.replaceState({},``,n.pathname+n.search+n.hash)},pe=()=>{let e=window.location.pathname.split(`/`).filter(Boolean),t=e.findIndex(e=>e.toLowerCase()===`alumni`);return t>0?e[t-1]:``},me=()=>{if(document.querySelector(`link[href*="font-awesome"]`))return;let e=document.createElement(`link`);e.rel=`stylesheet`,e.href=`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`,document.head.appendChild(e)},P=(e,t)=>{let n=b(t);return n?(0,m.jsxs)(`div`,{className:`alx-mfield`,children:[(0,m.jsxs)(`div`,{className:`alx-mfield-label`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-circle-info`}),e]}),(0,m.jsx)(`div`,{className:`alx-mfield-val`,children:n})]},e):null};function F(){let e=t(),n=i(s),r=i(u);i(a);let g=i(o),_=i(c),v=i(f),[y,x]=(0,p.useState)(``),[S,C]=(0,p.useState)(``),[N,F]=(0,p.useState)(``),[I,L]=(0,p.useState)(1),[R,he]=(0,p.useState)(!1),[ge,z]=(0,p.useState)(!1),[B,_e]=(0,p.useState)(!1),[V,H]=(0,p.useState)(null),U=(0,p.useRef)(null);(0,p.useEffect)(()=>{me(),e(l()),e(d()),_e(!0)},[e]);let W=(0,p.useMemo)(()=>new Map((n||[]).map(e=>[e.uuid,e])),[n]),G=(0,p.useMemo)(()=>new Map((n||[]).filter(e=>e.slug).map(e=>[e.slug.toLowerCase(),e.uuid])),[n]),K=y&&W.get(y)||null,q=K?.id!==null&&K?.id!==void 0?String(K.id):``,ve=b(K?.title||``);(0,p.useEffect)(()=>{if(!B||R||r===`loading`||_===`loading`)return;let e=de(W,G);if(e&&W.has(e))x(e),z(!0);else{let e=pe(),t=e&&G.get(e.toLowerCase())||``;x(t||``),t&&z(!0)}he(!0),L(1)},[B,R,r,_,W,G]),(0,p.useEffect)(()=>{R&&fe(y,W)},[R,y,W]),(0,p.useEffect)(()=>{if(V)return document.documentElement.style.overflow=`hidden`,document.body.style.overflow=`hidden`,()=>{document.documentElement.style.overflow=``,document.body.style.overflow=``}},[V]),(0,p.useEffect)(()=>{let e=setTimeout(()=>{F(S.trim()),L(1)},260);return()=>clearTimeout(e)},[S]);let ye=!B||r===`loading`||_===`loading`||!R,J=(0,p.useMemo)(()=>{let e=Array.isArray(g)?g.slice():[];y&&(e=e.filter(e=>{let t=re(e),n=ie(e);return q&&t===q||n&&n===y}));let t=N.toLowerCase();return t&&(e=e.filter(e=>{let n=w(e).toLowerCase(),r=T(e).toLowerCase(),i=E(e).toLowerCase(),a=D(e).toLowerCase(),o=O(e).toLowerCase(),s=k(e).toLowerCase(),c=A(e).toLowerCase(),l=j(e).toLowerCase(),u=M(e).toLowerCase(),d=ae(e).toLowerCase(),f=oe(e).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)||a.includes(t)||o.includes(t)||s.includes(t)||c.includes(t)||l.includes(t)||u.includes(t)||d.includes(t)||f.includes(t)})),e},[g,y,q,N]),Y=Math.max(1,Math.ceil(J.length/h)),X=Math.min(I,Y);(0,p.useEffect)(()=>{I>Y&&L(Y)},[Y,I]);let be=(0,p.useMemo)(()=>{let e=(X-1)*h;return J.slice(e,e+h)},[J,X]),xe=ve?`Alumni of ${ve}`:`Explore our alumni community.`,Se=y?`No alumni found for this department.`:`No alumni found.`,Z=e=>{U.current=document.activeElement,H(e)},Ce=()=>{if(H(null),U.current&&typeof U.current.focus==`function`)try{U.current.focus()}catch{}U.current=null},we=e=>{x((e.target.value||``).toString().trim()),L(1)},Te=e=>{C(e.target.value)},Ee=(e,t)=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),Z(t))},Q=(0,p.useMemo)(()=>{if(!V)return null;let e=w(V),t=A(V),n=j(V),r=M(V),i=ae(V),a=oe(V),o=[i,a].filter(Boolean).join(`, `),s=ce(V),c=T(V),l=le(V),u=se(V),d=[];n&&t?d.push(`${n} · ${t}${o?`, `+o:``}`):t?d.push(t+(o?`, `+o:``)):n?d.push(n+(o?`, `+o:``)):o&&d.push(o);let f=[];return c&&f.push(c),(n||t)&&f.push([n,t].filter(Boolean).join(` · `)),o&&f.push(o),{name:e,company:t,role:n,industry:r,city:i,country:a,location:o,note:s,dept:c,img:l,skills:u,heroSubParts:d,tagParts:f}},[V]),$=Q?[P(`Company`,Q.company),P(`Role / Designation`,Q.role),P(`Industry`,Q.industry),P(`Location`,Q.location)].filter(Boolean):[];return(0,m.jsxs)(`div`,{className:`alx-wrap`,children:[(0,m.jsx)(`style`,{children:ee}),ge?null:(0,m.jsxs)(`div`,{className:`alx-head`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`h1`,{className:`alx-title`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-user-group`}),`Alumni`]}),(0,m.jsx)(`div`,{className:`alx-sub`,children:xe})]}),(0,m.jsxs)(`div`,{className:`alx-tools`,children:[(0,m.jsxs)(`div`,{className:`alx-search`,children:[(0,m.jsx)(`i`,{className:`fa fa-magnifying-glass`}),(0,m.jsx)(`input`,{value:S,onChange:Te,type:`search`,placeholder:`Search (name, department, program, company, role, year)…`})]}),(0,m.jsxs)(`div`,{className:`alx-select`,title:`Filter by department`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-building-columns alx-select__icon`}),(0,m.jsxs)(`select`,{value:y,onChange:we,"aria-label":`Filter by department`,children:[(0,m.jsx)(`option`,{value:``,children:`All Departments`}),n.slice().sort((e,t)=>b(e.title).localeCompare(b(t.title))).map(e=>(0,m.jsx)(`option`,{value:e.uuid,children:b(e.title)},e.uuid))]}),(0,m.jsx)(`i`,{className:`fa-solid fa-chevron-down alx-select__caret`})]})]})]}),ye?(0,m.jsx)(`div`,{className:`alx-skeleton`,children:Array.from({length:12}).map((e,t)=>(0,m.jsx)(`div`,{className:`alx-sk`},t))}):v?(0,m.jsxs)(`div`,{className:`alx-state`,children:[(0,m.jsx)(`div`,{style:{fontSize:`34px`,opacity:.6,marginBottom:`6px`},children:(0,m.jsx)(`i`,{className:`fa-regular fa-circle-xmark`})}),`Unable to load alumni right now.`,(0,m.jsxs)(`div`,{style:{marginTop:`8px`,fontSize:`12.5px`,opacity:.95},children:[(0,m.jsx)(`b`,{children:`Error:`}),` `,b(v)]})]}):be.length?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`alx-grid`,children:be.map(e=>{let t=w(e),n=T(e),r=E(e),i=D(e),a=O(e),o=k(e),s=A(e),c=j(e),l=le(e),u=s||c?(0,m.jsxs)(`p`,{className:`alx-meta`,children:[s||`Company`,s&&c?(0,m.jsx)(`span`,{className:`dot`,children:`•`}):null,c||``]}):r||i?(0,m.jsxs)(`p`,{className:`alx-meta`,children:[r||`Program`,r&&i?(0,m.jsx)(`span`,{className:`dot`,children:`•`}):null,i||``]}):(0,m.jsx)(`p`,{className:`alx-meta`,children:n||`Alumni`}),d=[];r&&!(s||c)&&d.push(r),a?d.push(`Batch: ${a}${o?`–`+o:``}`):o&&d.push(`Passout: ${o}`);let f=d.length?(0,m.jsx)(`p`,{className:`alx-submeta`,children:d.map((e,t)=>(0,m.jsxs)(`span`,{children:[t>0?(0,m.jsx)(`span`,{className:`dot`,children:`•`}):null,e]},t))}):null;return(0,m.jsxs)(`a`,{href:`#`,className:`alx-card`,role:`button`,"aria-label":`${t} details`,onClick:t=>{t.preventDefault(),Z(e)},onKeyDown:t=>Ee(t,e),children:[l?(0,m.jsx)(`div`,{className:`bg`,style:{backgroundImage:`url("${te(l)}")`}}):(0,m.jsx)(`div`,{className:`alx-placeholder`,children:(0,m.jsx)(`div`,{className:`alx-initials`,children:ne(t)})}),n?(0,m.jsx)(`div`,{className:`alx-pill`,title:n,children:n}):null,(0,m.jsx)(`div`,{className:`vignette`}),(0,m.jsxs)(`div`,{className:`info`,children:[(0,m.jsx)(`p`,{className:`alx-name`,children:t}),u,f]})]},ue(e)||`${t}-${n}`)})}),Y>1?(0,m.jsx)(`div`,{className:`alx-pagination`,children:(0,m.jsxs)(`div`,{className:`alx-pager`,children:[(0,m.jsx)(`button`,{className:`alx-pagebtn`,disabled:X<=1,onClick:()=>{L(Math.max(1,X-1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Previous`}),(()=>{let e=Math.max(1,X-2),t=Math.min(Y,X+2),n=[];e>1&&(n.push((0,m.jsx)(`button`,{className:`alx-pagebtn ${X===1?`active`:``}`,onClick:()=>{L(1),window.scrollTo({top:0,behavior:`smooth`})},children:`1`},`p1`)),e>2&&n.push((0,m.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots1`)));for(let r=e;r<=t;r++)n.push((0,m.jsx)(`button`,{className:`alx-pagebtn ${X===r?`active`:``}`,onClick:()=>{L(r),window.scrollTo({top:0,behavior:`smooth`})},children:r},r));return t<Y&&(t<Y-1&&n.push((0,m.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots2`)),n.push((0,m.jsx)(`button`,{className:`alx-pagebtn ${X===Y?`active`:``}`,onClick:()=>{L(Y),window.scrollTo({top:0,behavior:`smooth`})},children:Y},Y))),n})(),(0,m.jsx)(`button`,{className:`alx-pagebtn`,disabled:X>=Y,onClick:()=>{L(Math.min(Y,X+1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Next`})]})}):null]}):(0,m.jsxs)(`div`,{className:`alx-state`,children:[(0,m.jsx)(`div`,{"aria-hidden":`true`,style:{width:`170px`,maxWidth:`100%`,margin:`0 auto 10px`,display:`block`,color:`var(--alx-brand)`},children:(0,m.jsxs)(`svg`,{viewBox:`0 0 220 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,style:{display:`block`,width:`100%`,height:`auto`},children:[(0,m.jsx)(`rect`,{x:`10`,y:`18`,width:`200`,height:`112`,rx:`16`,fill:`white`,stroke:`rgba(15,23,42,0.10)`}),(0,m.jsx)(`rect`,{x:`24`,y:`32`,width:`172`,height:`84`,rx:`12`,fill:`rgba(148,163,184,0.08)`,stroke:`rgba(148,163,184,0.18)`}),(0,m.jsx)(`circle`,{cx:`70`,cy:`66`,r:`16`,fill:`rgba(158,54,58,0.14)`,stroke:`currentColor`,strokeWidth:`2`}),(0,m.jsx)(`path`,{d:`M49 97c5-11 16-16 21-16s16 5 21 16`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`}),(0,m.jsx)(`rect`,{x:`100`,y:`52`,width:`72`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.20)`}),(0,m.jsx)(`rect`,{x:`100`,y:`68`,width:`54`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.16)`}),(0,m.jsx)(`rect`,{x:`100`,y:`84`,width:`64`,height:`8`,rx:`4`,fill:`rgba(100,116,139,0.12)`}),(0,m.jsx)(`circle`,{cx:`182`,cy:`26`,r:`12`,fill:`rgba(158,54,58,0.10)`,stroke:`currentColor`,strokeWidth:`1.8`}),(0,m.jsx)(`path`,{d:`M177.5 26h9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,m.jsx)(`path`,{d:`M182 21.5v9`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}),Se]}),(0,m.jsxs)(`div`,{id:`alxModal`,className:`alx-modal ${V?`show`:``}`,"aria-hidden":V?`false`:`true`,role:`dialog`,"aria-modal":`true`,onClick:Ce,children:[(0,m.jsx)(`div`,{className:`alx-modal__overlay`,"data-close":`1`}),(0,m.jsxs)(`div`,{className:`alx-modal__panel`,role:`document`,"aria-label":`Alumni details`,onClick:e=>e.stopPropagation(),children:[(0,m.jsx)(`button`,{className:`alx-modal__close`,type:`button`,"aria-label":`Close`,onClick:Ce,children:(0,m.jsx)(`i`,{className:`fa-solid fa-xmark`})}),(0,m.jsxs)(`div`,{className:`alx-modal__hero`,children:[Q?.img?(0,m.jsx)(`img`,{className:`alx-modal__hero-img`,src:Q.img,alt:`${Q.name} photo`}):(0,m.jsx)(`div`,{className:`alx-modal__hero-placeholder`,children:(0,m.jsx)(`div`,{className:`alx-modal__hero-initials`,children:ne(Q?.name)})}),(0,m.jsx)(`div`,{className:`alx-modal__hero-grad`}),Q?(0,m.jsxs)(`div`,{className:`alx-modal__hero-info`,children:[(0,m.jsx)(`h2`,{className:`alx-modal__hero-name`,children:Q.name}),Q.heroSubParts.length?(0,m.jsx)(`div`,{className:`alx-modal__hero-sub`,children:Q.heroSubParts.map((e,t)=>(0,m.jsxs)(`span`,{children:[t>0?(0,m.jsx)(`span`,{className:`sep`,children:`•`}):null,e]},`${e}-${t}`))}):null,Q.note?(0,m.jsxs)(`div`,{className:`alx-modal__hero-quote`,children:[`“`,Q.note,`”`]}):null]}):null]}),(0,m.jsx)(`div`,{className:`alx-modal__details`,children:Q?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`alx-modal__dhead`,children:[(0,m.jsx)(`h2`,{className:`alx-modal__dhead-name`,children:Q.name}),Q.tagParts.length?(0,m.jsx)(`div`,{className:`alx-modal__dhead-tagline`,children:Q.tagParts.map((e,t)=>(0,m.jsxs)(`span`,{children:[t>0?(0,m.jsx)(`span`,{className:`tsep`,children:`•`}):null,e]},`${e}-${t}`))}):null]}),(0,m.jsxs)(`div`,{className:`alx-modal__dcontent`,children:[$.length?(0,m.jsxs)(`div`,{className:`alx-msection`,children:[(0,m.jsx)(`div`,{className:`alx-msection-title`,children:`Professional`}),(0,m.jsx)(`div`,{className:`alx-mrow`,children:$})]}):null,Q.skills.length?(0,m.jsxs)(`div`,{className:`alx-msection`,children:[(0,m.jsx)(`div`,{className:`alx-msection-title`,children:`Skills`}),(0,m.jsx)(`div`,{className:`alx-mrow`,children:(0,m.jsxs)(`div`,{className:`alx-mfield alx-mfield-full`,children:[(0,m.jsxs)(`div`,{className:`alx-mfield-label`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-wand-magic-sparkles`}),`Skills`]}),(0,m.jsx)(`div`,{className:`alx-mfield-val`,children:(0,m.jsx)(`div`,{className:`alx-mchips`,children:Q.skills.map((e,t)=>(0,m.jsxs)(`span`,{className:`alx-mchip`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-check`}),e]},`${e}-${t}`))})})]})})]}):null,Q.note?(0,m.jsx)(`div`,{className:`alx-msection`,children:(0,m.jsxs)(`div`,{className:`alx-mnote`,children:[(0,m.jsxs)(`div`,{className:`alx-mnote-label`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-quote-left`}),`About`]}),(0,m.jsx)(`div`,{className:`alx-mnote-val`,children:Q.note})]})}):null]})]}):null})]})]})]})}export{F as default};