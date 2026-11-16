import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,E as n,I as r,p as i,w as a}from"./react-vendor-CMR_y1jB.js";import{n as o}from"./courseSlice-CzSiUqYl.js";var s=e(r(),1),c=i(),l=`data:image/svg+xml;charset=UTF-8,%0A%20%20%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22450%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%22%20stop-color%3D%22%239E363A%22%20stop-opacity%3D%22.18%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23C94B50%22%20stop-opacity%3D%22.08%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20rx%3D%2224%22%20fill%3D%22url(%23g)%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M140%20310%20L300%20180%20L420%20280%20L520%20220%20L680%20330%20L680%20370%20L140%20370%20Z%22%20fill%3D%22%239E363A%22%20opacity%3D%22.25%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22310%22%20cy%3D%22170%22%20r%3D%2226%22%20fill%3D%22%23C94B50%22%20opacity%3D%22.35%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2250%25%22%20y%3D%2254%25%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2226%22%20fill%3D%22%236B2528%22%20opacity%3D%22.8%22%3EImage%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A%20%20`,u=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}return[]},d=e=>{let t=String(e||``).trim();if(!t)return`#`;if(/^(mailto:|tel:|javascript:|#)/i.test(t)||/^https?:\/\//i.test(t))return t;let n=t.startsWith(`/`)?t:`/${t}`;return n=n.replace(/\/placement_notices(?=\/|$)/gi,`/placement-notices`),n=n.replace(/\/career_notices(?=\/|$)/gi,`/career-notices`),n=n.replace(/\/why_us(?=\/|$)/gi,`/why-us`),n=n.replace(/\/student_activities(?=\/|$)/gi,`/student-activities`),n},f=e=>{let t=String(e||``).trim().toLowerCase();return/\/courses\/view\//.test(t)||/viewcourse/.test(t)},p=(...e)=>{let t=e.map(e=>String(e||``).trim()).filter(Boolean),n=t.find(e=>!f(e));if(n)return d(n);let r=t[0]||``;return r?d(r):`#`},m=e=>p(e?.cover_image_link,e?.image_link,e?.image_href,e?.image_url_link,e?.redirect_url,e?.title_link,e?.summary_link,e?.href,e?.link,e?.url),h=e=>p(e?.title_link,e?.cover_image_link,e?.summary_link,e?.href,e?.link,e?.redirect_url,e?.url),g=e=>p(e?.summary_link,e?.title_link,e?.cover_image_link,e?.href,e?.link,e?.redirect_url,e?.url),_=e=>p(e?.title_link,e?.cover_image_link,e?.summary_link,e?.href,e?.link,e?.redirect_url,e?.url),v=e=>[...e].sort((e,t)=>{let n=Number(t?.is_featured_home||0)-Number(e?.is_featured_home||0);if(n!==0)return n;let r=Number(e?.sort_order??0)-Number(t?.sort_order??0);if(r!==0)return r;let i=Date.parse(t?.publish_at||t?.created_at||``)-Date.parse(e?.publish_at||e?.created_at||``);return Number.isFinite(i)&&i!==0?i:String(e?.title||``).localeCompare(String(t?.title||``))}),y=(e,t)=>{let n=Math.max(4,t-4);return e===0?`Professional Courses`:e===4&&t>8?`4 Years B.Tech in`:e===n?`2 Years M.Tech in`:``},b=new Set([window.location.hostname,`msit.edu.in`,`www.msit.edu.in`]),x=e=>{let t=String(e||``).trim();if(!t||t===`#`||/^(mailto:|tel:|javascript:|#)/i.test(t))return null;if(t.startsWith(`/`))return d(t);if(/^https?:\/\//i.test(t))try{let e=new URL(t);return b.has(e.hostname)?d(`${e.pathname}${e.search}${e.hash}`):null}catch{return null}return d(t)};function S({href:e,className:t=``,children:r}){let i=x(e),a=d(e);return i?(0,c.jsx)(n,{to:i,className:t,children:r}):a&&a!==`#`?(0,c.jsx)(`a`,{href:a,className:t,children:r}):(0,c.jsx)(`div`,{className:t,children:r})}function C(){let e=t(),{data:n,status:r,error:i}=a(e=>e.courses);(0,s.useEffect)(()=>{e(o())},[e]);let f=(0,s.useMemo)(()=>v((Array.isArray(n)?n:[]).filter(e=>Number(e?.is_featured_home||0)!==0)),[n]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`style`,{children:`
        .msit-courses-section{
          background:#fff;
          border-radius:18px;
          border:1px solid #e6c8ca;
          padding:40px;
          box-shadow:0 10px 28px rgba(0,0,0,.10);
        }

        .msit-courses-heading{
          text-align:center;
          font-weight:950;
          color:#9E363A;
          margin:0 0 30px;
          font-size:clamp(22px, 3vw, 36px);
          line-height:1.15;
        }

        .msit-courses-grid{
          display:grid;
          grid-template-columns:1fr;
          gap:24px;
        }

        .msit-course-group-heading{
          grid-column:1 / -1;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:16px;
          margin:8px 0 0;
          color:#7f2d31;
          font-size:clamp(16px, 1.55vw, 22px);
          font-weight:850;
          line-height:1.15;
          letter-spacing:.02em;
          text-align:center;
        }

        .msit-course-group-heading::before,
        .msit-course-group-heading::after{
          content:"";
          height:1px;
          max-width:120px;
          background:rgba(158,54,58,.22);
          flex:1 1 80px;
        }

        .msit-course-group-heading span{
          display:block;
          padding:0 4px;
        }

        @media (min-width:768px){
          .msit-courses-grid{
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width:1200px){
          .msit-courses-grid{
            grid-template-columns:repeat(4, minmax(0, 1fr));
          }
        }

        .msit-course-card{
          background:linear-gradient(135deg, rgba(158,54,58,.08), rgba(201,75,80,.04));
          border-radius:16px;
          padding:24px;
          height:100%;
          border:1px solid #e6c8ca;
          transition:transform .18s ease, box-shadow .18s ease;
          display:flex;
          flex-direction:column;
        }

        .msit-course-card:hover{
          transform:translateY(-3px);
          box-shadow:0 16px 30px rgba(2,6,23,.12);
        }

        .msit-course-block-link{
          display:block;
          text-decoration:none;
        }

        .msit-course-img{
          width:100%;
          height:180px;
          object-fit:cover;
          border-radius:12px;
          margin-bottom:16px;
          background:#eee;
          display:block;
        }

        .msit-course-title{
          font-weight:950;
          color:#9E363A;
          font-size:20px;
          margin:0 0 10px;
          line-height:1.15;
        }

        .msit-course-desc{
          font-size:14px;
          color:#6b7280;
          line-height:1.6;
          margin:0 0 14px;
        }

        .msit-course-links{
          display:flex;
          gap:8px;
          flex-wrap:wrap;
          margin-top:auto;
        }

        .msit-course-link{
          font-size:11px;
          padding:6px 12px;
          background:rgba(158,54,58,.15);
          color:#9E363A;
          border-radius:999px;
          text-decoration:none;
          font-weight:900;
          transition:background .15s ease, color .15s ease, transform .15s ease;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          line-height:1.2;
        }

        .msit-course-link:hover{
          background:#9E363A;
          color:#fff;
          transform:translateY(-1px);
        }

        .msit-muted-note{
          color:#6b7280;
          font-weight:800;
          text-align:center;
          margin:0;
          padding:10px 0 0;
        }

        @media (max-width:768px){
          .msit-courses-section{
            padding:26px;
          }

          .msit-course-title{
            font-size:18px;
          }
        }
      `}),(0,c.jsxs)(`section`,{className:`msit-courses-section reveal`,"data-lazy-key":`courses`,children:[(0,c.jsx)(`h2`,{className:`msit-courses-heading`,children:`Courses Offered`}),r===`loading`&&(0,c.jsx)(`div`,{className:`msit-courses-grid`,children:(0,c.jsxs)(`div`,{className:`msit-course-card`,children:[(0,c.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:l,alt:`Course`,className:`msit-course-img`}),(0,c.jsx)(`h3`,{className:`msit-course-title`,children:`Loading…`}),(0,c.jsx)(`p`,{className:`msit-course-desc`,children:`Please wait…`}),(0,c.jsxs)(`div`,{className:`msit-course-links`,children:[(0,c.jsx)(`span`,{className:`msit-course-link`,children:`Vision & Mission`}),(0,c.jsx)(`span`,{className:`msit-course-link`,children:`PEO, PSO, PO`}),(0,c.jsx)(`span`,{className:`msit-course-link`,children:`Faculty`}),(0,c.jsx)(`span`,{className:`msit-course-link`,children:`Department Home`})]})]})}),r===`failed`&&(0,c.jsx)(`p`,{className:`msit-muted-note`,children:i||`Failed to fetch courses`}),r!==`loading`&&r!==`failed`&&f.length===0&&(0,c.jsx)(`p`,{className:`msit-muted-note`,children:`Courses not available right now.`}),r!==`loading`&&r!==`failed`&&f.length>0&&(0,c.jsx)(`div`,{className:`msit-courses-grid`,id:`coursesContainer`,children:f.map((e,t)=>{let n=y(t,f.length),r=e?.cover_image||e?.image_url||e?.image||l,i=e?.title||e?.name||`Course`,a=e?.summary||e?.blurb||e?.description||``,o=m(e),p=h(e),v=g(e),b=_(e),x=u(e?.buttons_json).length?u(e?.buttons_json):Array.isArray(e?.links)&&e.links.length?e.links:[{name:`Vision & Mission`,link:b},{name:`PEO, PSO, PO`,link:b},{name:`Faculty`,link:b},{name:`Department Home`,link:b}];return(0,c.jsxs)(s.Fragment,{children:[n&&(0,c.jsx)(`h3`,{className:`msit-course-group-heading`,children:(0,c.jsx)(`span`,{children:n})}),(0,c.jsx)(`div`,{className:`h-full`,children:(0,c.jsxs)(`div`,{className:`msit-course-card`,children:[(0,c.jsx)(S,{href:o,className:`msit-course-block-link`,children:(0,c.jsx)(`img`,{src:r,alt:i,loading:`lazy`,className:`msit-course-img`,onError:e=>{e.currentTarget.src=l}})}),(0,c.jsx)(S,{href:p,className:`msit-course-block-link`,children:(0,c.jsx)(`h3`,{className:`msit-course-title`,children:i})}),a&&(0,c.jsx)(S,{href:v,className:`msit-course-block-link`,children:(0,c.jsx)(`p`,{className:`msit-course-desc`,children:a})}),(0,c.jsx)(`div`,{className:`msit-course-links`,children:x.slice(0,4).map((e,t)=>{let n=e?.name||e?.text||e?.title||`Link`,r=String(e?.link||e?.url||e?.href||``).trim();return(0,c.jsx)(S,{href:r?d(r):b,className:`msit-course-link`,children:n},t)})})]})})]},e?.uuid||t)})})]})]})}export{C as default};