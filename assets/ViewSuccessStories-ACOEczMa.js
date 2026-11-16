import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,j as r,p as i,w as a}from"./react-vendor-CMR_y1jB.js";import{n as o,r as s,t as c}from"./TopHeaderMenu-DZxbAKPR.js";import{n as l,r as u,t as d}from"./successStoriesViewSlice-Bkc-peWl.js";import f from"./Footer-zaYqAOdA.js";var p=e(n(),1),m=i();function h(){let e=t(),{slug:n}=r(),{story:i,loading:h,error:g}=a(u),[_,v]=(0,p.useState)(!1);(0,p.useEffect)(()=>(n&&e(l(n)),()=>e(d())),[n]);let y=typeof navigator<`u`&&!!navigator.share;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`style`,{children:`
      body {
        background: #f8fafc;
        font-family: 'Segoe UI', sans-serif;
      }

      .ss-container {
        max-width: 1200px;
        margin: auto;
        padding: 30px;
      }

      .ss-card {
        background: #fff;
        border-radius: 18px;
        border: 1px solid #e5e7eb;
        box-shadow: 0 10px 26px rgba(0,0,0,0.05);
      }

      .ss-hero {
        display: grid;
        grid-template-columns: 1.4fr 0.6fr;
        gap: 20px;
      }

      .ss-hero-main {
        padding: 25px;
      }

      .ss-kicker {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #fce7e7;
        color: #9E363A;
        padding: 6px 12px;
        border-radius: 999px;
        font-weight: 700;
        font-size: 12px;
        margin-bottom: 10px;
      }

      .ss-title {
        font-size: 42px;
        font-weight: 900;
        margin: 10px 0;
      }

      .ss-name {
        color: #64748b;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .ss-intro {
        background: #f9fafb;
        border: 1px dashed #cbd5e1;
        padding: 12px;
        border-radius: 12px;
        margin: 15px 0;
        line-height: 1.6;
      }

      .ss-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid #e5e7eb;
        background: #f1f5f9;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .ss-actions {
        display: flex;
        gap: 10px;
        margin-top: 10px;
      }

      .ss-btn {
        padding: 10px 16px;
        border-radius: 999px;
        border: 1px solid #ddd;
        background: #fff;
        font-weight: 700;
        cursor: pointer;
        transition: 0.2s;
      }

      .ss-btn:hover {
        background: #9E363A;
        color: #fff;
      }

      .ss-btn-ghost {
        background: #fff5f5;
        color: #9E363A;
      }

      .ss-photo-wrap {
        padding: 15px;
      }

      .ss-photo-frame {
        border-radius: 14px;
        overflow: hidden;
        aspect-ratio: 1/1;
        background: #f1f5f9;
      }

      .ss-photo-frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .ss-no-photo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #64748b;
      }

      .ss-loading-bar {
        height: 14px;
        background: #eee;
        border-radius: 999px;
        margin-bottom: 10px;
      }

      .ss-error {
        background: #fee2e2;
        color: #b91c1c;
        padding: 12px;
        border-radius: 10px;
      }

      @media (max-width: 900px) {
        .ss-hero {
          grid-template-columns: 1fr;
        }
      }
      `}),(0,m.jsx)(c,{}),(0,m.jsx)(o,{}),(0,m.jsx)(s,{}),(0,m.jsxs)(`main`,{className:`ss-container`,children:[h&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`ss-loading-bar`,style:{width:`70%`}}),(0,m.jsx)(`div`,{className:`ss-loading-bar`,style:{width:`90%`}})]}),!h&&g&&(0,m.jsx)(`div`,{className:`ss-error`,children:g}),!h&&i&&(0,m.jsxs)(`section`,{className:`ss-hero`,children:[(0,m.jsxs)(`div`,{className:`ss-card ss-hero-main`,children:[(0,m.jsxs)(`div`,{className:`ss-kicker`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-trophy`}),`SUCCESS STORY`]}),(0,m.jsx)(`h1`,{className:`ss-title`,children:i?.name||`Success Story`}),i?.description&&(0,m.jsx)(`div`,{className:`ss-intro`,children:i.description}),i?.department_title&&(0,m.jsxs)(`div`,{className:`ss-pill`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-building-columns`}),i.department_title]}),(0,m.jsxs)(`div`,{className:`ss-actions`,children:[(0,m.jsxs)(`button`,{className:`ss-btn`,onClick:async()=>{await navigator.clipboard.writeText(window.location.href),v(!0),setTimeout(()=>v(!1),2e3)},children:[(0,m.jsx)(`i`,{className:`fa-solid fa-link`}),_?`Copied!`:`Copy Link`]}),y&&(0,m.jsxs)(`button`,{className:`ss-btn ss-btn-ghost`,onClick:async()=>{navigator.share&&await navigator.share({title:i?.name,url:window.location.href})},children:[(0,m.jsx)(`i`,{className:`fa-solid fa-share-nodes`}),`Share`]})]})]}),(0,m.jsx)(`div`,{className:`ss-card ss-photo-wrap`,children:(0,m.jsx)(`div`,{className:`ss-photo-frame`,children:i?.photo_full_url?(0,m.jsx)(`img`,{src:i.photo_full_url,alt:`story`}):(0,m.jsx)(`div`,{className:`ss-no-photo`,children:`No Image`})})})]})]}),(0,m.jsx)(f,{})]})}export{h as default};