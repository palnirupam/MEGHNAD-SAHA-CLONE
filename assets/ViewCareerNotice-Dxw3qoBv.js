import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,j as r,p as i,w as a}from"./react-vendor-CMR_y1jB.js";import{n as o,r as s,t as c}from"./TopHeaderMenu-DZxbAKPR.js";import{t as l}from"./LazySection-CDlv4VpT.js";import{a as u,i as d,n as f,o as p,r as m}from"./careerNoticeViewSlice-iqggVrea.js";import h from"./Footer-zaYqAOdA.js";var g=e(n(),1),_=i(),v=`
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

.meta-pill-date{
  margin-left: auto;
  flex: 0 0 auto;
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

.meta-pill-date, #metaFeatured { display: none !important; }
`;function y(){let e=t(),{slug:n}=r(),{notice:i,loading:y,error:b}=a(p),[x,S]=(0,g.useState)(!1);(0,g.useEffect)(()=>(n&&e(m(n)),()=>e(f())),[e,n]);let C=(0,g.useMemo)(()=>d(i?.attachments_json||i?.attachments||i?.files),[i?.attachments_json,i?.attachments,i?.files]),w=i?.department?.name||i?.department?.title||i?.department_name||i?.department_title||i?.category||``,T=typeof navigator<`u`&&!!navigator.share,E=async()=>{try{await navigator.clipboard.writeText(window.location.href),S(!0),setTimeout(()=>S(!1),2e3)}catch{alert(`Copy failed. Please copy the URL from the address bar.`)}},D=async()=>{try{navigator.share&&await navigator.share({title:i?.title||document.title,url:window.location.href})}catch{}},O=e=>{let t=``;return e?.body?t+=e.body:e?.content?t+=e.content:e?.description?t+=e.description:e?.details&&(t+=e.details),!t.trim()&&!y&&(t=`<p>No details available.</p>`),t},k=i&&[i.cover_image_url,i.cover_image,i.image,i.banner_image,i.cover,i.notice_image,i.hero_image,i.thumbnail,i?.banner?.url,i?.image?.url,i?.media?.[0]?.url,i?.images?.[0]?.url].map(e=>u(e)).find(Boolean)||``,A=!!i;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`style`,{children:v}),(0,_.jsx)(c,{}),(0,_.jsx)(o,{}),(0,_.jsx)(s,{}),(0,_.jsxs)(`main`,{className:`announcement-container`,children:[(0,_.jsxs)(`div`,{className:`announcement-header`,children:[(0,_.jsx)(`div`,{className:`announcement-headbar`,children:(0,_.jsx)(`h1`,{className:`announcement-title`,children:i?.title||`Career Notice`})}),w?(0,_.jsx)(`div`,{className:`notice-meta`,children:(0,_.jsxs)(`span`,{className:`meta-pill`,id:`metaDept`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-building-columns`}),(0,_.jsx)(`span`,{children:w})]})}):null,(0,_.jsx)(l,{eager:!0,minHeight:0,children:(0,_.jsx)(`div`,{className:`announcement-content`,dangerouslySetInnerHTML:{__html:O(i)}})}),(0,_.jsxs)(`div`,{className:`announcement-actions`,children:[(0,_.jsxs)(`button`,{className:`action-btn`,onClick:E,type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-link`}),x?`Copied!`:`Copy Link`]}),T&&(0,_.jsxs)(`button`,{className:`action-btn`,onClick:D,type:`button`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-share-nodes`}),`Share`]})]})]}),k?(0,_.jsx)(l,{minHeight:280,children:(0,_.jsx)(`section`,{className:`announcement-cover`,children:(0,_.jsx)(`img`,{src:k,alt:i?.title||`Banner image`,loading:`lazy`,onError:e=>{e.currentTarget.style.display=`none`}})})}):null,C.length>0&&(0,_.jsx)(l,{minHeight:220,children:(0,_.jsxs)(`section`,{className:`announcement-attachments`,children:[(0,_.jsxs)(`h3`,{className:`attachments-title`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-paperclip`}),`Attachments`]}),(0,_.jsx)(`div`,{className:`attachments-list`,children:C.map((e,t)=>(0,_.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,className:`attachment-item`,children:[(0,_.jsxs)(`div`,{className:`attachment-left`,children:[(0,_.jsx)(`div`,{className:`attachment-icon`,children:(0,_.jsx)(`i`,{className:`fa-solid fa-file-arrow-down`})}),(0,_.jsxs)(`div`,{className:`attachment-info`,children:[(0,_.jsx)(`div`,{className:`attachment-name`,title:e.name,children:e.name}),(0,_.jsx)(`div`,{className:`attachment-meta`,children:e.meta||`Click to open`})]})]}),(0,_.jsxs)(`div`,{className:`attachment-number`,children:[`#`,t+1]})]},`${e.url}-${t}`))})]})}),y&&(0,_.jsxs)(`section`,{className:`loading-container`,"aria-live":`polite`,children:[(0,_.jsx)(`div`,{className:`loading-bar`,style:{width:`65%`}}),(0,_.jsx)(`div`,{className:`loading-bar`,style:{width:`92%`}}),(0,_.jsx)(`div`,{className:`loading-bar`,style:{width:`78%`}}),(0,_.jsx)(`div`,{className:`loading-bar`,style:{width:`85%`}}),(0,_.jsx)(`div`,{className:`loading-bar`,style:{width:`58%`}})]}),!y&&(!A||b)&&(0,_.jsxs)(`div`,{className:`error-container`,children:[(0,_.jsx)(`i`,{className:`fa-solid fa-hourglass-half`}),(0,_.jsx)(`h2`,{className:`error-title`,children:`Coming Soon!`}),(0,_.jsx)(`div`,{className:`error-message`,children:`This content is currently undergoing review and will be published shortly.`}),(0,_.jsxs)(`a`,{href:`/`,className:`action-btn`,style:{marginTop:24},children:[(0,_.jsx)(`i`,{className:`fa-solid fa-house`}),`Explore Website`]})]})]}),(0,_.jsx)(h,{})]})}export{y as default};