import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{n as a}from"./request-CO6BYf67.js";import{a as o,i as s,n as c,o as l,s as ee,t as te}from"./gallerySlice-BFaUjwpv.js";var u=e(n(),1),d=r(),ne=12,re=18,f=`/api/public/gallery-events`,p=`/api/public/gallery-events/__SHORTCODE__`,ie=String.raw`
.gxa-wrap{
  --gxa-brand: #9E363A;
  --gxa-brand-rgb: 158, 54, 58;
  --gxa-accent: #C94B50;
  --gxa-accent-rgb: 201, 75, 80;
  --gxa-ink: #0f172a;
  --gxa-muted: #64748b;
  --gxa-bg: var(--page-bg, #ffffff);
  --gxa-card: var(--surface, #ffffff);
  --gxa-line: var(--line-soft, rgba(15,23,42,.10));
  --gxa-shadow: 0 10px 24px rgba(2,6,23,.08);
  --gxa-footer-safe: 96px;

  max-width: 1320px;
  margin: 18px auto 0px;
  padding: 0 12px var(--gxa-footer-safe);
  background: transparent;
  position: relative;
  overflow: visible;
  isolation: isolate;
}

.gxa-head{
  background: var(--gxa-card);
  border: 1px solid var(--gxa-line);
  border-radius: 16px;
  box-shadow: var(--gxa-shadow);
  padding: 14px 16px;
  margin-bottom: 16px;

  display:flex;
  gap: 12px;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
}

.gxa-title{
  margin: 0;
  font-weight: 950;
  letter-spacing: .2px;
  color: var(--gxa-ink);
  font-size: 28px;
  display:flex;
  align-items:center;
  gap: 10px;
}
.gxa-title i{ color: var(--gxa-brand); }

.gxa-sub{
  margin: 6px 0 0;
  color: var(--gxa-muted);
  font-size: 14px;
}

.gxa-tools{
  display:flex;
  gap: 10px;
  align-items:center;
  flex-wrap: wrap;
}

.gxa-search{
  position: relative;
  min-width: 260px;
  max-width: 520px;
  flex: 1 1 320px;
}
.gxa-search i{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .65;
  color: var(--gxa-muted);
  pointer-events:none;
}
.gxa-search input{
  width:100%;
  height: 42px;
  border-radius: 999px;
  padding: 11px 12px 11px 42px;
  border: 1px solid var(--gxa-line);
  background: var(--gxa-card);
  color: var(--gxa-ink);
  outline: none;
}
.gxa-search input:focus{
  border-color: rgba(var(--gxa-brand-rgb), .55);
  box-shadow: 0 0 0 4px rgba(var(--gxa-brand-rgb), .18);
}

.gxa-select{
  position: relative;
  min-width: 260px;
  max-width: 360px;
  flex: 0 1 320px;
}
.gxa-select__icon{
  position:absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--gxa-muted);
  pointer-events:none;
  font-size: 14px;
}
.gxa-select__caret{
  position:absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: .70;
  color: var(--gxa-muted);
  pointer-events:none;
  font-size: 12px;
}
.gxa-select select{
  width: 100%;
  height: 42px;
  border-radius: 999px;
  padding: 10px 38px 10px 42px;
  border: 1px solid var(--gxa-line);
  background: var(--gxa-card);
  color: var(--gxa-ink);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.gxa-select select:focus{
  border-color: rgba(var(--gxa-brand-rgb), .55);
  box-shadow: 0 0 0 4px rgba(var(--gxa-brand-rgb), .18);
}

.gxa-btn{
  height: 42px;
  border-radius: 999px;
  border: 1px solid var(--gxa-line);
  background: var(--gxa-card);
  color: var(--gxa-ink);
  padding: 0 16px;
  font-weight: 900;
  display:inline-flex;
  align-items:center;
  gap: 8px;
  box-shadow: 0 8px 18px rgba(2,6,23,.06);
  cursor: pointer;
  transition: .18s ease;
}
.gxa-btn:hover{ background: rgba(2,6,23,.03); }
.gxa-btn--brand{
  border-color: rgba(var(--gxa-brand-rgb), .28);
  color: var(--gxa-brand);
  background: rgba(var(--gxa-brand-rgb), .06);
}
.gxa-btn--brand:hover{
  background: rgba(var(--gxa-brand-rgb), .10);
  border-color: rgba(var(--gxa-brand-rgb), .40);
}

@media (min-width: 992px){
  .gxa-head{ flex-wrap: nowrap; align-items: center; }
  .gxa-tools{ flex-wrap: nowrap; justify-content: flex-end; }
  .gxa-search{ min-width: 0; flex: 1 1 520px; }
  .gxa-select{ min-width: 0; flex: 0 1 320px; }
}

.gxa-albums{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  align-items: stretch;
}

.gxa-album{
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #fff;
  border: 1px solid rgba(2,6,23,.06);
  box-shadow: 0 4px 12px rgba(2,6,23,.04);
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  will-change: transform;
  display:flex;
  flex-direction: column;
  min-height: 100%;
}
.gxa-album:hover{
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(2,6,23,.08);
  border-color: rgba(var(--gxa-brand-rgb), .28);
}

.gxa-album__media{
  position: relative;
  height: clamp(170px, 19vw, 210px);
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(var(--gxa-brand-rgb), .14), rgba(var(--gxa-accent-rgb), .10)),
    #f8fafc;
}

.gxa-album__slides{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(var(--gxa-brand-rgb), .12), rgba(var(--gxa-accent-rgb), .08)),
    #f8fafc;
}

.gxa-album__slide{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display:block;
  opacity: 0;
  transform: scale(1.05);
  transition: opacity .85s ease, transform 1.05s ease;
  will-change: opacity, transform;
  pointer-events: none;
}
.gxa-album__slide.is-active{
  opacity: 1;
  transform: scale(1);
  z-index: 1;
}

.gxa-album__media img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display:block;
  transition: transform .4s ease;
}

.gxa-album__media::after{
  content:"";
  position:absolute;
  inset:auto 0 0 0;
  height: 38%;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(2,6,23,.22) 62%, rgba(2,6,23,.48) 100%);
  pointer-events:none;
  z-index: 2;
}

.gxa-album--standalone .gxa-album__media {
  height: clamp(220px, 25vw, 360px);
}
.gxa-album--standalone .gxa-album__media::after {
  display: none;
}
.gxa-album--standalone:hover .gxa-album__media img {
  transform: scale(1.06);
}

.gxa-album__fallback{
  width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  color: var(--gxa-brand);
  font-size: 38px;
  opacity: .8;
}

.gxa-album__count{
  position:absolute;
  right: 12px;
  top: 12px;
  background: linear-gradient(135deg, rgba(var(--gxa-brand-rgb), .96), rgba(var(--gxa-accent-rgb), .92));
  color: #fff;
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 11px;
  font-weight: 950;
  display:inline-flex;
  align-items:center;
  gap: 6px;
  backdrop-filter: blur(8px);
  z-index: 3;
}

.gxa-album__dots{
  position:absolute;
  left: 12px;
  bottom: 12px;
  display:flex;
  align-items:center;
  gap: 6px;
  z-index: 3;
}
.gxa-album__dot{
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255,255,255,.45);
  border: 1px solid rgba(255,255,255,.24);
  transition: transform .22s ease, background .22s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,.22);
}
.gxa-album__dot.is-active{
  background: #fff;
  transform: scale(1.15);
}

.gxa-album__body{
  padding: 14px 14px 15px;
  display:flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 auto;
}

.gxa-album__row{
  display:flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items:center;
}

.gxa-pill{
  display:inline-flex;
  align-items:center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--gxa-line);
  background: rgba(2,6,23,.03);
  color: var(--gxa-ink);
  font-size: 11.5px;
  font-weight: 900;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.gxa-pill--brand{
  color: var(--gxa-brand);
  border-color: rgba(var(--gxa-brand-rgb), .24);
  background: rgba(var(--gxa-brand-rgb), .08);
}

.gxa-album__title{
  margin: 0;
  color: var(--gxa-ink);
  font-size: 18px;
  line-height: 1.2;
  font-weight: 950;
  letter-spacing: .1px;
}

.gxa-album__desc{
  color: var(--gxa-muted);
  font-size: 13px;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 58px;
}

.gxa-album__cta{
  margin-top: auto;
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 4px;
}

.gxa-album__link{
  display:inline-flex;
  align-items:center;
  gap: 8px;
  color: var(--gxa-brand);
  font-size: 13px;
  font-weight: 950;
}

.gxa-album-head{
  background: var(--gxa-card);
  border: 1px solid var(--gxa-line);
  border-radius: 12px;
  box-shadow: var(--gxa-shadow);
  padding: 16px 18px;
  margin-bottom: 16px;
  display:grid;
  grid-template-columns: minmax(0,1fr);
  gap: 10px;
}

.gxa-album-head__top{
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: space-between;
  gap: 10px;
}

.gxa-album-head__title{
  margin: 0;
  font-size: 26px;
  line-height: 1.15;
  color: var(--gxa-ink);
  font-weight: 950;
  letter-spacing: .1px;
  display:flex;
  align-items:center;
  gap: 10px;
}
.gxa-album-head__title i{ color: var(--gxa-brand); }

.gxa-album-head__desc{
  margin: 0;
  color: var(--gxa-muted);
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.gxa-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: 10px;
  gap: 18px;
  align-items: start;
}

.gxa-item{
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  border: 1px solid rgba(2,6,23,.06);
  box-shadow: 0 4px 12px rgba(2,6,23,.04);
  cursor: pointer;
  user-select: none;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  will-change: transform;
}
.gxa-item:hover{
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(2,6,23,.08);
  border-color: rgba(var(--gxa-brand-rgb), .28);
}

.gxa-item img{
  width: 100%;
  height: auto;
  display:block;
}

.gxa-meta{
  position:absolute;
  left:0; right:0; bottom:0;
  padding: 10px 10px 9px;
  color: #fff;
  background: linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(2,6,23,.55) 28%, rgba(2,6,23,.82) 100%);
  pointer-events: none;
}

.gxa-meta__title{
  font-weight: 950;
  font-size: 13px;
  letter-spacing: .2px;
  line-height: 1.18;
  text-shadow: 0 2px 10px rgba(0,0,0,.35);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.gxa-meta__desc{
  margin-top: 4px;
  font-size: 12px;
  opacity: .92;
  line-height: 1.25;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-shadow: 0 2px 10px rgba(0,0,0,.35);
}

.gxa-meta__tags{
  margin-top: 6px;
  display:flex;
  gap: 6px;
  flex-wrap: wrap;
}

.gxa-tag{
  font-size: 11px;
  font-weight: 950;
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(255,255,255,.14);
  border: 1px solid rgba(255,255,255,.18);
  backdrop-filter: blur(6px);
  max-width: 100%;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.gxa-tag.more{
  background: rgba(var(--gxa-accent-rgb), .28);
  border-color: rgba(var(--gxa-accent-rgb), .42);
}

.gxa-state{
  background: var(--gxa-card);
  border: 1px solid var(--gxa-line);
  border-radius: 16px;
  box-shadow: var(--gxa-shadow);
  padding: 18px;
  color: var(--gxa-muted);
  text-align:center;
  position: relative;
  z-index: 0;
  margin-bottom: 18px;
}

.gxa-state .gxa-spin{
  width: 42px;
  height: 42px;
  margin: 0 auto 10px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: 999px;
  border: 1px solid var(--gxa-line);
  background: rgba(var(--gxa-brand-rgb), .05);
  box-shadow: 0 10px 22px rgba(2,6,23,.08);
  color: var(--gxa-brand);
  font-size: 18px;
}

.gxa-pagination{
  display:flex;
  justify-content:center;
  margin-top: 18px;
}

.gxa-pagination .gxa-pager{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  padding: 10px;
}

.gxa-pagebtn{
  border:1px solid var(--gxa-line);
  background: var(--gxa-card);
  color: var(--gxa-ink);
  border-radius: 12px;
  padding: 9px 12px;
  font-size: 13px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(2,6,23,.06);
  cursor:pointer;
  user-select:none;
  transition: .18s ease;
}
.gxa-pagebtn:hover{ background: rgba(2,6,23,.03); }
.gxa-pagebtn[disabled]{ opacity:.55; cursor:not-allowed; }
.gxa-pagebtn.active{
  background: rgba(var(--gxa-brand-rgb), .12);
  border-color: rgba(var(--gxa-brand-rgb), .35);
  color: var(--gxa-brand);
}

.gxa-lb{
  position: fixed;
  inset: 0;
  background: rgba(2,6,23,.72);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index: 9999;
  padding: 18px;
}

.gxa-lb__inner{
  max-width: min(1100px, 96vw);
  max-height: min(86vh, 900px);
  background: #0b1220;
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 22px 60px rgba(0,0,0,.45);
  position: relative;
  display:flex;
  flex-direction: column;
  overflow:hidden;
  border-radius: 14px;
}

.gxa-lb__img{
  max-width: min(1100px, 96vw);
  max-height: min(72vh, 820px);
  display:block;
  object-fit: contain;
}

.gxa-lb__meta{
  border-top: 1px solid rgba(255,255,255,.10);
  padding: 12px 14px 14px;
  color: rgba(255,255,255,.92);
  background: rgba(255,255,255,.02);
}

.gxa-lb__title{
  font-weight: 950;
  font-size: 15px;
  letter-spacing: .2px;
  color:#fff;
  margin: 0 0 6px;
}

.gxa-lb__desc{
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.35;
  color: rgba(255,255,255,.86);
  white-space: pre-wrap;
}

.gxa-lb__tags{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
}

.gxa-lb__tag{
  font-size: 12px;
  font-weight: 900;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.14);
}

.gxa-lb__close{
  position:absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.18);
  background: rgba(0,0,0,.35);
  color:#fff;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index: 5;
  transition: .18s ease;
}
.gxa-lb__close:hover{
  background: rgba(var(--gxa-brand-rgb), .38);
  border-color: rgba(255,255,255,.24);
}

@media (max-width: 640px){
  .gxa-title{ font-size: 24px; }
  .gxa-search{ min-width: 220px; flex: 1 1 240px; }
  .gxa-select{ min-width: 220px; flex: 1 1 240px; }
  .gxa-lb__img{ max-height: min(66vh, 760px); }
  .gxa-wrap{ --gxa-footer-safe: 84px; }
  .gxa-album-head__title{ font-size: 22px; }
  .gxa-album__desc{ min-height: auto; }
}
`,m=(...e)=>{for(let t of e)if(t!=null){let e=String(t).trim();if(e)return e}return``},ae=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),oe=()=>{if(document.querySelector(`link[href*="font-awesome"]`))return;let e=document.createElement(`link`);e.rel=`stylesheet`,e.href=`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`,document.head.appendChild(e)},h=e=>{let t=m(e);return t?/^(data:|blob:|https?:\/\/)/i.test(t)?t:a(t):``},g=e=>{let t=m(e);if(!t)return 0;let n=[t,t.replace(` `,`T`)];for(let e of n){let t=Date.parse(e);if(Number.isFinite(t))return t}return 0},se=e=>{let t=g(e);return t?new Date(t).toLocaleDateString(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`}):m(e)},_=e=>{if(Array.isArray(e))return Array.from(new Set(e.map(e=>m(e).replace(/^#+/,``)).filter(Boolean)));let t=m(e);if(!t)return[];try{if(t.startsWith(`[`)||t.startsWith(`{`))return _(JSON.parse(t))}catch{}let n=t.includes(`|`)?t.split(`|`):t.includes(`,`)?t.split(`,`):t.split(/\s+/);return Array.from(new Set(n.map(e=>m(e).replace(/^#+/,``)).filter(Boolean)))},v=(e,t=3)=>{let n=Array.isArray(e)?e.filter(Boolean):[];if(!n.length)return``;let r=n.slice(0,t),i=n.length-r.length,a=r.map(e=>`<span class="gxa-tag">${ae(e)}</span>`).join(``);return i>0&&(a+=`<span class="gxa-tag more">+${i}</span>`),a},ce=(e,t)=>{for(let n of t){let t=e?.[n];if(t!=null&&String(t).trim()!==``)return t}return``},y=e=>Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.data?.data)?e.data.data:Array.isArray(e?.items)?e.items:Array.isArray(e?.images)?e.images:Array.isArray(e?.photos)?e.photos:Array.isArray(e?.events)?e.events:[],le=e=>{let t=new Set,n=[];return(Array.isArray(e)?e:[]).forEach(e=>{let r=h(e);if(!r)return;let i=r.toLowerCase();t.has(i)||(t.add(i),n.push(r))}),n},ue=async e=>{let t=await fetch(a(e),{method:`GET`,headers:{Accept:`application/json`},credentials:`same-origin`}),n=await t.text(),r=null;try{r=n?JSON.parse(n):null}catch{r={message:n}}if(!t.ok)throw Error(r?.message||r?.error||`Request failed with status ${t.status}`);return r},de=e=>m(e?.slug,e?.shortcode,e?.uuid,e?.id),fe=(e=``)=>{let t=new URLSearchParams({page:`1`,per_page:`200`});return e&&t.set(`department`,e),`${f}?${t.toString()}`},pe=(e,t=``)=>{let n=new URLSearchParams({per_page:`200`});return t&&n.set(`department`,t),`${p.replace(`__SHORTCODE__`,encodeURIComponent(e))}?${n.toString()}`},b=e=>{let t=[],n=e=>{if(e){if(typeof e==`string`){let n=h(e);n&&t.push(n);return}if(Array.isArray(e)){e.forEach(n);return}if(typeof e==`object`){let t=ce(e,[`image_url`,`image_full_url`,`cover_image_url`,`cover_image`,`url`,`src`,`image`,`full_url`,`file_url`,`path`,`thumbnail_url`]);t&&n(t),[e.images,e.photos,e.media,e.attachments,e.gallery_images,e.preview_images,e.files].forEach(n)}}};return n(e?.cover_image_url),n(e?.cover_image),n(e?.image_url),n(e?.image),n(e?.event?.cover_image_url),n(e?.event?.cover_image),n(e?.event?.image_url),n(e?.event?.image),[e?.preview_images,e?.images,e?.photos,e?.gallery_images,e?.media,e?.attachments,e?.event?.preview_images,e?.event?.images,e?.event?.photos,e?.event?.gallery_images,e?.event?.media,e?.event?.attachments].forEach(n),le(t).slice(0,12)},x=(e,t=0)=>{let n=e?.event||{},r=m(n?.shortcode,e?.event_shortcode,e?.shortcode,e?.code,e?.slug),i=b(e),a=m(n?.title,e?.event_title,e?.title,e?.name,r?`Untitled Event`:`Gallery Image`),o=m(n?.description,e?.event_description,e?.description,e?.desc,e?.summary),s=m(n?.date,n?.event_date,e?.event_date,e?.date,e?.published_at,e?.created_at),c=parseInt(m(e?.images_count,e?.photos_count,e?.count),10)||i.length||+!r,l=i[0]||``;return{type:r?`event`:`single`,key:`${r?`event`:`single`}-${r||l||e?.uuid||e?.id||t}`,shortcode:r,title:a,description:o||(r?`No description available for this event.`:``),date:s,latestCreatedAt:g(e?.latest_created_at||e?.created_at||e?.updated_at||s),imagesCount:Math.max(c,i.length),previewImages:i,full:l,tags:_(e?.tags??e?.tags_json),department_uuid:m(n?.department_uuid,e?.department_uuid,e?.dept_uuid),department_id:n?.department_id??e?.department_id??e?.dept_id??null}},me=e=>{let t=new Set,n=[];return(Array.isArray(e)?e:[]).forEach((e,r)=>{if(!e)return;let i=m(e?.shortcode,e?.full,e?.key,`${e?.title||`card`}-${r}`).toLowerCase();!i||t.has(i)||(t.add(i),n.push(e))}),n.sort((e,t)=>(t.latestCreatedAt||0)-(e.latestCreatedAt||0))},he=e=>me(y(e).map((e,t)=>x(e,t))),S=(e,t={})=>({id:e?.id??null,uuid:m(e?.uuid),image:m(e?.image),image_url:m(e?.image_url,e?.image_full_url,e?.url,e?.src),title:m(e?.title)||`Gallery Image`,description:m(e?.description),tags:_(e?.tags??e?.tags_json),created_at:m(e?.created_at),updated_at:m(e?.updated_at),event_shortcode:m(e?.event_shortcode,e?.event?.shortcode,t?.shortcode),event_title:m(e?.event_title,e?.event?.title,t?.title),event_description:m(e?.event_description,e?.event?.description,t?.description),event_date:m(e?.event_date,e?.event?.date,t?.date)}),ge=(e,t)=>{let n=e?.event||e?.data?.event||{},r={shortcode:m(n?.shortcode,t),title:m(n?.title)||`Album`,description:m(n?.description),date:m(n?.date)};return{event:r,items:y(e).map(e=>S(e,r)).filter(e=>h(e?.image_url||e?.image))}},_e=(e,t)=>{let n=new URL(window.location.href),r=m(n.searchParams.get(`department`),n.searchParams.get(`dept`));if(!r)return``;let i=r.toLowerCase();return e.has(i)?e.get(i):t.has(r)?r:``},ve=()=>{let e=new URL(window.location.href);return m(e.searchParams.get(`event`),e.searchParams.get(`album`))},ye=(e,t,n)=>{let r=new URL(window.location.href);if(e){let t=n.get(e),i=m(t?.shortcode,t?.slug);i?(r.searchParams.set(`dept`,i),r.searchParams.delete(`department`)):(r.searchParams.set(`department`,e),r.searchParams.delete(`dept`))}else r.searchParams.delete(`department`),r.searchParams.delete(`dept`);r.searchParams.delete(`event`),r.searchParams.delete(`album`),window.history.replaceState({},``,`${r.pathname}${r.search}${r.hash}`)},be=e=>{let t=new Map,n=[];return(Array.isArray(e)?e:[]).forEach((e,r)=>{let i=h(e?.image_url||e?.image);if(!i)return;let a=m(e?.event_shortcode),o=g(e?.created_at||e?.updated_at);if(!a){n.push({type:`single`,key:`single-${e?.uuid||e?.id||r}`,title:m(e?.title)||`Gallery Image`,description:m(e?.description),full:i,latestCreatedAt:o,tags:_(e?.tags)});return}t.has(a)||t.set(a,{type:`event`,key:`event-${a}`,shortcode:a,title:m(e?.event_title)||`Untitled Event`,description:m(e?.event_description)||`No description available for this event.`,date:m(e?.event_date),latestCreatedAt:o,imagesCount:0,previewImages:[]});let s=t.get(a);s.imagesCount+=1,s.latestCreatedAt=Math.max(s.latestCreatedAt||0,o||0),i&&!s.previewImages.includes(i)&&s.previewImages.length<8&&s.previewImages.push(i),!m(s.title)&&m(e?.event_title)&&(s.title=m(e?.event_title)),(!m(s.description)||s.description===`No description available for this event.`)&&m(e?.event_description)&&(s.description=m(e?.event_description)),!m(s.date)&&m(e?.event_date)&&(s.date=m(e?.event_date))}),[...n,...Array.from(t.values())].sort((e,t)=>(t.latestCreatedAt||0)-(e.latestCreatedAt||0))};function xe({card:e,onOpenEvent:t,onOpenStandalone:n}){let r=Array.isArray(e?.previewImages)?e.previewImages.filter(Boolean):[],i=e?.full||r[0]||``,[a,o]=(0,u.useState)(0),[s,c]=(0,u.useState)(!1);(0,u.useEffect)(()=>{o(0)},[e?.key]),(0,u.useEffect)(()=>{if(e?.type!==`event`||r.length<=1||s)return;let t=window.setInterval(()=>{o(e=>(e+1)%r.length)},2400);return()=>window.clearInterval(t)},[e?.type,r.length,s]);let l=()=>{if(e?.type===`event`){t(e);return}n(e)},ee=e?.type===`event`&&r.length?(0,d.jsx)(`div`,{className:`gxa-album__slides`,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:r.map((t,n)=>(0,d.jsx)(`img`,{className:`gxa-album__slide ${n===a?`is-active`:``}`,src:t,alt:e.title,loading:`lazy`,decoding:`async`},`${e.key}-slide-${t}-${n}`))}):i?(0,d.jsx)(`img`,{src:i,alt:e.title,loading:`lazy`,decoding:`async`}):(0,d.jsx)(`div`,{className:`gxa-album__fallback`,children:(0,d.jsx)(`i`,{className:`fa-regular fa-images`})});return(0,d.jsxs)(`article`,{className:`gxa-album ${e?.type===`event`?``:`gxa-album--standalone`}`,role:`button`,tabIndex:0,"aria-label":e.title,onClick:l,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),l())},children:[(0,d.jsxs)(`div`,{className:`gxa-album__media`,children:[ee,e?.type===`event`?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`div`,{className:`gxa-album__count`,children:[(0,d.jsx)(`i`,{className:`fa-regular fa-image`}),(0,d.jsxs)(`span`,{children:[e.imagesCount,` Photo`,e.imagesCount===1?``:`s`]})]}),r.length>1?(0,d.jsx)(`div`,{className:`gxa-album__dots`,children:r.map((t,n)=>(0,d.jsx)(`span`,{className:`gxa-album__dot ${n===a?`is-active`:``}`},`${e.key}-dot-${n}`))}):null]}):null]}),(0,d.jsxs)(`div`,{className:`gxa-album__body`,children:[e.date?(0,d.jsx)(`div`,{className:`gxa-album__row`,children:(0,d.jsxs)(`span`,{className:`gxa-pill gxa-pill--brand`,children:[(0,d.jsx)(`i`,{className:`fa-regular fa-calendar`}),se(e.date)]})}):null,(0,d.jsx)(`h2`,{className:`gxa-album__title`,children:e.title}),e.description?(0,d.jsx)(`div`,{className:`gxa-album__desc`,children:e.description}):null,(0,d.jsx)(`div`,{className:`gxa-album__cta`,children:(0,d.jsxs)(`span`,{className:`gxa-album__link`,children:[(0,d.jsx)(`i`,{className:e?.type===`event`?`fa-solid fa-arrow-right`:`fa-regular fa-eye`}),(0,d.jsx)(`span`,{children:e?.type===`event`?`Open Album`:`View Image`})]})})]})]})}function Se({item:e,onOpen:t,onMediaLoad:n,registerTile:r}){let i=h(e?.image_url||e?.image),a=m(e?.title)||`Gallery Image`,o=m(e?.description),s=_(e?.tags);return(0,d.jsxs)(`div`,{className:`gxa-item`,ref:r,role:`button`,tabIndex:0,"aria-label":a,onClick:()=>t({src:i,title:a,description:o,tags:s}),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t({src:i,title:a,description:o,tags:s}))},children:[(0,d.jsx)(`img`,{src:i,alt:a,loading:`lazy`,decoding:`async`,onLoad:n,onError:n}),(0,d.jsxs)(`div`,{className:`gxa-meta`,children:[(0,d.jsx)(`div`,{className:`gxa-meta__title`,children:a}),(0,d.jsx)(`div`,{className:`gxa-meta__desc`,style:o?void 0:{opacity:0},children:o||`placeholder`}),s.length?(0,d.jsx)(`div`,{className:`gxa-meta__tags`,dangerouslySetInnerHTML:{__html:v(s,3)}}):null]})]})}function C(){let e=t(),n=i(s),r=i(o),a=i(l),f=i(ee),[p,ae]=(0,u.useState)(!1),[v,ce]=(0,u.useState)(!1),[y,le]=(0,u.useState)(``),[b,x]=(0,u.useState)(``),[S,C]=(0,u.useState)(``),[w,T]=(0,u.useState)(1),[E,D]=(0,u.useState)(``),[O,k]=(0,u.useState)(null),[A,j]=(0,u.useState)(`idle`),[Ce,we]=(0,u.useState)(``),[M,Te]=(0,u.useState)([]),[Ee,N]=(0,u.useState)(`idle`),[De,P]=(0,u.useState)(``),[F,I]=(0,u.useState)(null),[L,R]=(0,u.useState)([]),z=(0,u.useRef)(null),Oe=(0,u.useRef)([]);(0,u.useEffect)(()=>{oe(),e(te()),e(c())},[e]),(0,u.useEffect)(()=>{let e=window.setTimeout(()=>{C(b.trim()),T(1)},260);return()=>window.clearTimeout(e)},[b]);let B=(0,u.useMemo)(()=>new Map((n||[]).map(e=>[e.uuid,e])),[n]),ke=(0,u.useMemo)(()=>new Map((n||[]).flatMap(e=>[m(e?.shortcode),m(e?.slug)].map(e=>e.toLowerCase()).filter(Boolean).map(t=>[t,e.uuid]))),[n]),Ae=(0,u.useMemo)(()=>(Array.isArray(a)?a:[]).filter(e=>e?.visible!==!1).filter(e=>h(e?.image_url||e?.image)),[a]);(0,u.useEffect)(()=>{if(!(r!==`idle`&&r!==`loading`)||p)return;let e=_e(ke,B),t=ve();e&&B.has(e)&&(le(e),ce(!0)),t&&D(t),ae(!0)},[r,p,ke,B]),(0,u.useEffect)(()=>{p&&ye(y,E,B)},[p,y,E,B]);let V=(0,u.useMemo)(()=>y&&B.get(y)||null,[y,B]),je=(0,u.useMemo)(()=>de(V),[V]),H=(0,u.useMemo)(()=>V?m(V?.title):``,[V]);(0,u.useEffect)(()=>{let e=!1;return(async()=>{j(`loading`),we(``);try{let t=he(await ue(fe(je)));e||(Te(t),j(`succeeded`))}catch(t){e||(Te([]),j(`failed`),we(t?.message||`Failed to load gallery event cards`))}})(),()=>{e=!0}},[je]);let U=(0,u.useMemo)(()=>{if(!y)return Ae;let e=V?.id==null?``:String(V.id);return Ae.filter(t=>{let n=m(t?.department_uuid),r=t?.department_id==null?``:String(t.department_id);return!n&&!r?!1:n===y||e&&r===e})},[Ae,y,V]),W=(0,u.useMemo)(()=>{let e=be(U),t=Array.isArray(M)?M:[],n=V?.id==null?``:String(V.id),r=me([...y?t.filter(e=>{let t=m(e?.department_uuid),r=e?.department_id==null?``:String(e.department_id);return!t&&!r?!1:t===y||n&&r===n}):t,...e]);if(!S)return r;let i=S.toLowerCase();return r.filter(e=>[e.title,e.description,e.shortcode].map(e=>m(e).toLowerCase()).join(` `).includes(i))},[M,U,S,y,V]),Me=(0,u.useMemo)(()=>{let e=new Map;return U.forEach(t=>{let n=m(t?.event_shortcode).toLowerCase();n&&(e.has(n)||e.set(n,[]),e.get(n).push(t))}),e.forEach((t,n)=>{e.set(n,t.slice().sort((e,t)=>g(t?.created_at||t?.updated_at)-g(e?.created_at||e?.updated_at)))}),e},[U]),G=(0,u.useMemo)(()=>{if(!E)return null;let e=E.toLowerCase();return W.find(t=>m(t?.shortcode).toLowerCase()===e)||null},[W,E]);(0,u.useEffect)(()=>{let e=!1;if(!E){N(`idle`),P(``),I(null),R([]);return}return(async()=>{N(`loading`),P(``);try{let t=ge(await ue(pe(E)),E);e||(I(t.event),R(t.items),N(`succeeded`))}catch(t){e||(I(null),R([]),N(`failed`),P(t?.message||`Failed to load this album`))}})(),()=>{e=!0}},[E]);let K=(0,u.useMemo)(()=>E&&Me.get(E.toLowerCase())||[],[E,Me]),q=(0,u.useMemo)(()=>{if(!E)return null;if(F)return{shortcode:m(F?.shortcode,E),title:m(F?.title,G?.title)||`Album`,description:m(F?.description,G?.description),date:m(F?.date,G?.date),total:L.length||G?.imagesCount||K.length};if(G)return{shortcode:E,title:m(G?.title)||`Album`,description:m(G?.description),date:m(G?.date),total:G?.imagesCount||K.length};let e=K[0];return{shortcode:E,title:m(e?.event_title)||`Album`,description:m(e?.event_description),date:m(e?.event_date),total:K.length}},[E,F,L.length,G,K]),J=(0,u.useMemo)(()=>{if(!E)return[];let e=L.length?L:K;if(!S)return e;let t=S.toLowerCase();return e.filter(e=>{let n=_(e?.tags).join(` `);return[e?.title,e?.description,n].map(e=>m(e).toLowerCase()).join(` `).includes(t)})},[E,L,K,S]),Y=!!E,Ne=Y?J:W,Pe=Y?re:ne,Fe=Ne.length,X=Math.max(1,Math.ceil(Fe/Pe)),Z=Math.min(w,X),Q=Ne.slice((Z-1)*Pe,Z*Pe);(0,u.useEffect)(()=>{w!==Z&&T(Z)},[w,Z]);let[Ie,Le]=(0,u.useState)(!1),Re=!p||r===`loading`||(Y?Ee===`loading`&&!J.length&&!K.length:(A===`idle`||A===`loading`)&&!W.length&&(f===`idle`||f===`loading`));(0,u.useEffect)(()=>{if(!Re){Le(!1);return}let e=window.setTimeout(()=>Le(!0),6e3);return()=>window.clearTimeout(e)},[Re,y,E,Y]);let ze=Re&&!Ie,$=(0,u.useCallback)(()=>{if(!z.current||!Y)return;let e=z.current,t=window.getComputedStyle(e),n=parseInt(t.getPropertyValue(`grid-auto-rows`),10)||10,r=parseInt(t.getPropertyValue(`gap`),10)||18;Oe.current.forEach(e=>{if(!e)return;e.style.gridRowEnd=`auto`;let t=e.getBoundingClientRect().height,i=Math.ceil((t+r)/(n+r));e.style.gridRowEnd=`span ${Math.max(1,i)}`})},[Y]);(0,u.useEffect)(()=>{Oe.current=[]},[Q,Y]),(0,u.useEffect)(()=>{if(!Y)return;let e=window.requestAnimationFrame(()=>$()),t=()=>$();return window.addEventListener(`resize`,t),()=>{window.cancelAnimationFrame(e),window.removeEventListener(`resize`,t)}},[$,Y,Q]),(0,u.useEffect)(()=>{if(!O)return;let e=document.body.style.overflow,t=e=>{e.key===`Escape`&&k(null)};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,t),()=>{document.body.style.overflow=e,window.removeEventListener(`keydown`,t)}},[O]);let Be=(0,u.useMemo)(()=>{if(X<=1)return[];let e=[],t=Math.max(1,Z-2),n=Math.min(X,Z+2);e.push((0,d.jsx)(`button`,{className:`gxa-pagebtn`,disabled:Z<=1,onClick:()=>{T(Math.max(1,Z-1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Previous`},`prev`)),t>1&&(e.push((0,d.jsx)(`button`,{className:`gxa-pagebtn ${Z===1?`active`:``}`,onClick:()=>{T(1),window.scrollTo({top:0,behavior:`smooth`})},children:`1`},`page-1`)),t>2&&e.push((0,d.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots-start`)));for(let r=t;r<=n;r+=1)e.push((0,d.jsx)(`button`,{className:`gxa-pagebtn ${Z===r?`active`:``}`,onClick:()=>{T(r),window.scrollTo({top:0,behavior:`smooth`})},children:r},`page-${r}`));return n<X&&(n<X-1&&e.push((0,d.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},`dots-end`)),e.push((0,d.jsx)(`button`,{className:`gxa-pagebtn ${Z===X?`active`:``}`,onClick:()=>{T(X),window.scrollTo({top:0,behavior:`smooth`})},children:X},`page-${X}`))),e.push((0,d.jsx)(`button`,{className:`gxa-pagebtn`,disabled:Z>=X,onClick:()=>{T(Math.min(X,Z+1)),window.scrollTo({top:0,behavior:`smooth`})},children:`Next`},`next`)),e},[Z,X]),Ve=Y?Ee===`failed`?`Unable to load this album.`:`No photos found in this album.`:A===`failed`&&f===`failed`?`Unable to load gallery.`:`No album cards found.`,He=Y?De||`Try another search within this album.`:Ce&&f===`failed`?Ce:H?`Try another search or department filter.`:`Try another search.`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`style`,{children:ie}),(0,d.jsxs)(`div`,{className:`gxa-wrap`,children:[v&&!Y?null:(0,d.jsxs)(`div`,{className:`gxa-head`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`h1`,{className:`gxa-title`,children:[(0,d.jsx)(`i`,{className:`fa-regular fa-images`}),`Gallery`]}),(0,d.jsx)(`div`,{className:`gxa-sub`,children:Y&&q?H?`${q.title} — ${H}`:`Viewing album: ${q.title}`:H?`Browse event albums for ${H}`:`Browse event albums and open each album to view its photos.`})]}),(0,d.jsxs)(`div`,{className:`gxa-tools`,children:[Y?(0,d.jsxs)(`button`,{className:`gxa-btn gxa-btn--brand`,type:`button`,onClick:()=>{D(``),x(``),C(``),T(1),window.scrollTo({top:0,behavior:`smooth`})},children:[(0,d.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),(0,d.jsx)(`span`,{children:`Back`})]}):null,(0,d.jsxs)(`div`,{className:`gxa-select`,title:v?`Department filter locked`:`Filter by department`,style:v?{cursor:`not-allowed`,opacity:.78,filter:`brightness(.94)`}:void 0,children:[(0,d.jsx)(`i`,{className:`fa-solid fa-building-columns gxa-select__icon`}),(0,d.jsxs)(`select`,{value:y,onChange:e=>{v||(le(e.target.value),T(1),window.scrollTo({top:0,behavior:`smooth`}))},disabled:v,"aria-label":`Filter by department`,style:v?{cursor:`not-allowed`}:void 0,children:[(0,d.jsx)(`option`,{value:``,children:`All Departments`}),n.map(e=>(0,d.jsx)(`option`,{value:e.uuid,children:e.title},e.uuid))]}),(0,d.jsx)(`i`,{className:`fa-solid fa-chevron-down gxa-select__caret`})]})]})]}),ze?(0,d.jsxs)(`div`,{className:`gxa-state`,children:[(0,d.jsx)(`div`,{className:`gxa-spin`,children:(0,d.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`})}),(0,d.jsx)(`div`,{style:{fontWeight:900,color:`var(--gxa-ink)`},children:Y?`Loading album photos…`:`Loading gallery…`}),(0,d.jsx)(`div`,{style:{marginTop:6,fontSize:12.5,opacity:.95},children:`Please wait…`})]}):Fe?(0,d.jsxs)(d.Fragment,{children:[Y&&q?(0,d.jsxs)(`section`,{children:[(0,d.jsxs)(`div`,{className:`gxa-album-head`,children:[(0,d.jsxs)(`div`,{className:`gxa-album-head__top`,children:[(0,d.jsxs)(`h2`,{className:`gxa-album-head__title`,children:[(0,d.jsx)(`i`,{className:`fa-solid fa-folder-open`}),(0,d.jsx)(`span`,{children:q.title||`Album`})]}),(0,d.jsxs)(`div`,{className:`d-flex flex-wrap gap-2`,children:[q.date?(0,d.jsxs)(`span`,{className:`gxa-pill gxa-pill--brand`,children:[(0,d.jsx)(`i`,{className:`fa-regular fa-calendar`}),se(q.date)]}):null,(0,d.jsxs)(`span`,{className:`gxa-pill`,children:[(0,d.jsx)(`i`,{className:`fa-regular fa-image`}),q?.total||J.length||0,` Photo`,(q?.total||J.length||0)===1?``:`s`]})]})]}),q.description?(0,d.jsx)(`p`,{className:`gxa-album-head__desc`,children:q.description}):null]}),(0,d.jsx)(`div`,{className:`gxa-grid`,ref:z,children:Q.map((e,t)=>(0,d.jsx)(Se,{item:e,onOpen:k,onMediaLoad:$,registerTile:e=>{Oe.current[t]=e}},e.uuid||e.id||`${E}-${t}`))})]}):(0,d.jsx)(`section`,{children:(0,d.jsx)(`div`,{className:`gxa-albums`,children:Q.map(e=>(0,d.jsx)(xe,{card:e,onOpenEvent:e=>{D(e.shortcode||``),x(``),C(``),T(1),window.scrollTo({top:0,behavior:`smooth`})},onOpenStandalone:e=>{k({src:e.full||e.previewImages?.[0]||``,title:e.title||`Gallery Image`,description:e.description||``,tags:Array.isArray(e.tags)?e.tags:[]})}},e.key))})}),X>1?(0,d.jsx)(`div`,{className:`gxa-pagination`,children:(0,d.jsx)(`div`,{className:`gxa-pager`,children:Be})}):null]}):(0,d.jsxs)(`div`,{className:`gxa-state`,children:[(0,d.jsx)(`div`,{style:{fontSize:34,opacity:.6,marginBottom:6},children:(0,d.jsx)(`i`,{className:`fa-regular fa-folder-open`})}),(0,d.jsx)(`div`,{style:{fontWeight:900,color:`var(--gxa-ink)`},children:Ve}),(0,d.jsx)(`div`,{style:{marginTop:6,fontSize:12.5,opacity:.95},children:He})]})]}),O?(0,d.jsx)(`div`,{className:`gxa-lb`,"aria-hidden":`false`,onClick:e=>{e.target===e.currentTarget&&k(null)},children:(0,d.jsxs)(`div`,{className:`gxa-lb__inner`,children:[(0,d.jsx)(`button`,{className:`gxa-lb__close`,type:`button`,"aria-label":`Close`,onClick:()=>k(null),children:(0,d.jsx)(`i`,{className:`fa-solid fa-xmark`})}),(0,d.jsx)(`img`,{className:`gxa-lb__img`,src:O.src,alt:O.title||`Gallery image`}),O.title||O.description||(O.tags||[]).length?(0,d.jsxs)(`div`,{className:`gxa-lb__meta`,children:[O.title?(0,d.jsx)(`div`,{className:`gxa-lb__title`,children:O.title}):null,O.description?(0,d.jsx)(`div`,{className:`gxa-lb__desc`,children:O.description}):null,(O.tags||[]).length?(0,d.jsx)(`div`,{className:`gxa-lb__tags`,children:(O.tags||[]).map(e=>(0,d.jsx)(`span`,{className:`gxa-lb__tag`,children:e},e))}):null]}):null]})}):null]})}export{C as default};