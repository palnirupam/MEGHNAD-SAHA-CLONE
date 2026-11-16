import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,j as r,p as i,w as a}from"./react-vendor-CMR_y1jB.js";import{n as o,r as s,t as c}from"./TopHeaderMenu-DZxbAKPR.js";import{t as l}from"./LazySection-CDlv4VpT.js";import{a as u,i as d,o as f,r as p,s as m,t as h}from"./eventViewSlice-CQenixgE.js";import g from"./Footer-zaYqAOdA.js";var _=e(n(),1),v=i(),y=`
html, body { height: 100%; margin: 0; }

body{
  background: var(--bg-body);
  color: var(--ink);
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
}

.announcement-container{
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 48px) clamp(16px, 3vw, 24px);
}

.announcement-header{
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: clamp(24px, 4vw, 40px);
  box-shadow: var(--shadow-2);
  border: 1px solid var(--line-strong);
  margin-bottom: 32px;
  border-radius: 10px;
}

.announcement-headbar{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.announcement-title{
  margin: 0;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-size: clamp(28px, 5vw, 48px);
  color: var(--ink);
  flex: 1 1 520px;
  min-width: 260px;
}

.notice-meta{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  align-items:center;
  margin-bottom: 24px;
}

.meta-pill{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: var(--surface-alt);
  border: 1px solid var(--line-strong);
  color: var(--ink);
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.meta-pill i{
  color: var(--primary-color);
  opacity: .8;
}

.announcement-actions{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  padding-top: 20px;
  border-top: 2px solid var(--line-light);
}

.action-btn{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: var(--surface);
  color: var(--ink);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all .3s ease;
  cursor: pointer;
}

.action-btn:hover{
  background: var(--primary-color);
  color: #fff;
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
}

.action-btn i{ font-size: 16px; }

.announcement-cover{
  margin-bottom: 32px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--line-strong);
  box-shadow: var(--shadow-2);
}

.announcement-cover img{
  width: 100%;
  height: auto;
  display: block;
  max-height: 500px;
  object-fit: cover;
}

.announcement-content{
  color: var(--ink);
  font-size: 16px;
  line-height: 1.85;
  overflow-wrap: anywhere;
  margin-bottom: 24px;
}

.announcement-content p{ margin: 0 0 16px; }

.announcement-content h1,
.announcement-content h2,
.announcement-content h3,
.announcement-content h4{
  margin: 24px 0 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--ink);
}

.announcement-content h1{ font-size: 2rem; }
.announcement-content h2{ font-size: 1.75rem; }
.announcement-content h3{ font-size: 1.5rem; }
.announcement-content h4{ font-size: 1.25rem; }

.announcement-content img{
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  margin: 20px 0;
  box-shadow: var(--shadow-1);
}

.announcement-content a{
  color: var(--primary-color);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color .2s ease;
}

.announcement-content a:hover{ color: var(--accent-color); }

.announcement-content blockquote{
  margin: 20px 0;
  padding: 16px 20px;
  border-left: 5px solid var(--primary-color);
  background: var(--surface-alt);
  border-radius: var(--radius-md);
  font-style: italic;
}

.announcement-content pre{
  padding: 16px;
  border-radius: var(--radius-md);
  border: 1px solid var(--line-strong);
  background: var(--surface-alt);
  overflow: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.announcement-content ul,
.announcement-content ol{
  padding-left: 24px;
  margin: 16px 0;
}

.announcement-content li{ margin-bottom: 8px; }

.announcement-attachments{
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: clamp(24px, 4vw, 40px);
  box-shadow: var(--shadow-2);
  border: 1px solid var(--line-strong);
}

.attachments-title{
  display:flex;
  align-items:center;
  gap:12px;
  font-weight:700;
  font-size: 1.25rem;
  margin: 0 0 20px;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.attachments-title i{
  background: var(--primary-light);
  color: var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display:flex;
  align-items:center;
  justify-content:center;
}

.attachments-list{ display:grid; gap: 12px; }

.attachment-item{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 16px;
  padding: 16px 20px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line-strong);
  background: var(--surface-alt);
  text-decoration: none;
  color: var(--ink);
  transition: all .3s ease;
}

.attachment-item:hover{
  border-color: var(--primary-color);
  background: var(--surface);
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
}

.attachment-left{
  display:flex;
  align-items:center;
  gap: 16px;
  min-width: 0;
  flex: 1;
}

.attachment-icon{
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--primary-light);
  color: var(--primary-color);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 20px;
  flex-shrink: 0;
}

.attachment-info{ min-width:0; flex:1; }

.attachment-name{
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
}

.attachment-meta{
  font-size: 13px;
  color: var(--muted-color);
}

.attachment-number{
  font-size: 13px;
  color: var(--muted-color);
  white-space: nowrap;
  font-weight: 500;
}

.loading-container{
  display:grid;
  gap: 16px;
  max-width: 100%;
  padding: 40px 0;
}

.loading-bar{
  height: 16px;
  border-radius: 999px;
  background: var(--surface-alt);
  overflow: hidden;
  position: relative;
}

.loading-bar::after{
  content:"";
  position:absolute;
  inset:0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(59,130,246,.3), transparent);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer { to { transform: translateX(100%); } }

.error-container{
  background: var(--surface);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-xl);
  padding: clamp(40px, 8vw, 80px) 24px;
  text-align: center;
  margin: 40px auto;
  max-width: 700px;
  box-shadow: var(--shadow-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.error-container i{
  font-size: clamp(48px, 8vw, 80px);
  color: var(--primary-color);
  margin-bottom: 8px;
  filter: drop-shadow(0 8px 16px var(--primary-light));
  animation: pulse-soft 3s infinite ease-in-out;
}

.error-title{
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 900;
  color: var(--ink);
  letter-spacing: -0.03em;
  margin: 0;
}

.error-message{
  font-size: 16px;
  color: var(--muted-color);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.7;
}

@keyframes pulse-soft {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(-10px); opacity: 0.8; }
}

@media (max-width:768px){
  .announcement-header{ padding:24px; }
  .announcement-title{ font-size:28px; }
  .notice-meta{ gap: 8px; }
  .meta-pill{ font-size: 13px; padding: 6px 12px; }
  .action-btn{ font-size: 13px; padding: 8px 16px; }
  .attachment-item{ padding: 12px 16px; }
  .attachment-icon{ width: 40px; height: 40px; font-size: 18px; }
  .announcement-headbar{ gap: 10px; }
}
`;function b(){let e=t(),{slug:n}=r(),{event:i,loading:b,error:x}=a(m),[S,C]=(0,_.useState)(!1);(0,_.useEffect)(()=>(n&&e(p(n)),()=>e(h())),[e,n]);let w=(0,_.useMemo)(()=>u(i?.gallery_images||i?.gallery_images_json),[i?.gallery_images,i?.gallery_images_json]),T=i?.location||``,E=i?.event_start_date?d(i.event_start_date):``,D=i?.event_end_date?d(i.event_end_date):``,O=``;E&&D&&E!==D?O=`${E} - ${D}`:E?O=E:D&&(O=D);let k=typeof navigator<`u`&&!!navigator.share,A=async()=>{try{await navigator.clipboard.writeText(window.location.href),C(!0),setTimeout(()=>C(!1),2e3)}catch{alert(`Copy failed. Please copy the URL from the address bar.`)}},j=async()=>{try{navigator.share&&await navigator.share({title:i?.title||document.title,url:window.location.href})}catch{}},M=e=>{let t=``;return e?.body?t+=e.body:e?.description&&(t+=e.description),!t.trim()&&!b&&(t=`<p>No event details available.</p>`),t},N=i&&[i.cover_image_url,i.cover_image,i.image,i.banner_image,i.cover,i.event_image,i.hero_image,i.thumbnail,i?.banner?.url,i?.image?.url,i?.media?.[0]?.url,i?.images?.[0]?.url].map(e=>f(e)).find(Boolean)||``;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`style`,{children:y}),(0,v.jsx)(c,{}),(0,v.jsx)(o,{}),(0,v.jsx)(s,{}),(0,v.jsxs)(`main`,{className:`announcement-container`,children:[(0,v.jsxs)(`div`,{className:`announcement-header`,children:[(0,v.jsx)(`div`,{className:`announcement-headbar`,children:(0,v.jsx)(`h1`,{className:`announcement-title`,children:i?.title||`Event`})}),(T||O||i?.is_featured_home===1)&&(0,v.jsxs)(`div`,{className:`notice-meta`,children:[T&&(0,v.jsxs)(`span`,{className:`meta-pill`,id:`metaLocation`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-location-dot`}),(0,v.jsx)(`span`,{children:T})]}),O&&(0,v.jsxs)(`span`,{className:`meta-pill`,id:`metaDate`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-calendar-alt`}),(0,v.jsx)(`span`,{children:O})]}),(i?.is_featured_home===1||i?.is_featured_home===!0||String(i?.is_featured_home)===`1`)&&(0,v.jsxs)(`span`,{className:`meta-pill`,id:`metaFeatured`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-star`}),(0,v.jsx)(`span`,{children:`Featured Event`})]})]}),(0,v.jsx)(l,{eager:!0,minHeight:0,children:(0,v.jsx)(`div`,{className:`announcement-content`,dangerouslySetInnerHTML:{__html:M(i)}})}),(0,v.jsxs)(`div`,{className:`announcement-actions`,children:[(0,v.jsxs)(`button`,{className:`action-btn`,onClick:A,type:`button`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-link`}),S?`Copied!`:`Copy Link`]}),k&&(0,v.jsxs)(`button`,{className:`action-btn`,onClick:j,type:`button`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-share-nodes`}),`Share`]})]})]}),N?(0,v.jsx)(l,{minHeight:280,children:(0,v.jsx)(`section`,{className:`announcement-cover`,children:(0,v.jsx)(`img`,{src:N,alt:i?.title||`Event banner image`,loading:`lazy`,onError:e=>{e.currentTarget.style.display=`none`}})})}):null,w.length>0&&(0,v.jsx)(l,{minHeight:220,children:(0,v.jsxs)(`section`,{className:`announcement-attachments`,children:[(0,v.jsxs)(`h3`,{className:`attachments-title`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-images`}),`Event Gallery`]}),(0,v.jsx)(`div`,{className:`attachments-list`,children:w.map((e,t)=>(0,v.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,className:`attachment-item`,children:[(0,v.jsxs)(`div`,{className:`attachment-left`,children:[(0,v.jsx)(`div`,{className:`attachment-icon`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-image`})}),(0,v.jsxs)(`div`,{className:`attachment-info`,children:[(0,v.jsx)(`div`,{className:`attachment-name`,title:e.name,children:e.name}),(0,v.jsx)(`div`,{className:`attachment-meta`,children:e.meta||`View image`})]})]}),(0,v.jsxs)(`div`,{className:`attachment-number`,children:[`#`,t+1]})]},`${e.url}-${t}`))})]})}),b&&(0,v.jsxs)(`section`,{className:`loading-container`,"aria-live":`polite`,children:[(0,v.jsx)(`div`,{className:`loading-bar`,style:{width:`65%`}}),(0,v.jsx)(`div`,{className:`loading-bar`,style:{width:`92%`}}),(0,v.jsx)(`div`,{className:`loading-bar`,style:{width:`78%`}}),(0,v.jsx)(`div`,{className:`loading-bar`,style:{width:`85%`}}),(0,v.jsx)(`div`,{className:`loading-bar`,style:{width:`58%`}})]}),!b&&(!i||x)&&(0,v.jsxs)(`div`,{className:`error-container`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-hourglass-half`}),(0,v.jsx)(`h2`,{className:`error-title`,children:`Coming Soon!`}),(0,v.jsx)(`div`,{className:`error-message`,children:`This content is currently undergoing review and will be published shortly.`}),(0,v.jsxs)(`a`,{href:`/`,className:`action-btn`,style:{marginTop:24},children:[(0,v.jsx)(`i`,{className:`fa-solid fa-house`}),`Explore Website`]})]})]}),(0,v.jsx)(g,{})]})}export{b as default};