import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,E as n,I as r,p as i,w as a}from"./react-vendor-CMR_y1jB.js";import{n as o,r as s}from"./courseSlice-CzSiUqYl.js";var c=e(r(),1),l=i(),u=`data:image/svg+xml;charset=UTF-8,%0A%20%20%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22450%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%22%20stop-color%3D%22%239E363A%22%20stop-opacity%3D%22.18%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23C94B50%22%20stop-opacity%3D%22.08%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20rx%3D%2224%22%20fill%3D%22url(%23g)%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M140%20310%20L300%20180%20L420%20280%20L520%20220%20L680%20330%20L680%20370%20L140%20370%20Z%22%20fill%3D%22%239E363A%22%20opacity%3D%22.25%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22310%22%20cy%3D%22170%22%20r%3D%2226%22%20fill%3D%22%23C94B50%22%20opacity%3D%22.35%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2250%25%22%20y%3D%2254%25%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2226%22%20fill%3D%22%236B2528%22%20opacity%3D%22.8%22%3EImage%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A%20%20`,d=e=>{let t=String(e||``).trim();if(!t)return`#`;if(/^https?:\/\//i.test(t))return t;let n=t.startsWith(`/`)?t:`/${t}`;return n=n.replace(/\/placement_notices(?=\/|$)/gi,`/placement-notices`),n=n.replace(/\/career_notices(?=\/|$)/gi,`/career-notices`),n=n.replace(/\/why_us(?=\/|$)/gi,`/why-us`),n=n.replace(/\/student_activities(?=\/|$)/gi,`/student-activities`),n},f=e=>{let t=String(e||``).trim().toLowerCase();return/\/courses\/view\//.test(t)||/viewcourse/.test(t)},p=(...e)=>{let t=e.map(e=>String(e||``).trim()).filter(Boolean),n=t.find(e=>!f(e));if(n)return d(n);let r=t[0]||``;return r?d(r):`#`},m=new Set([window.location.hostname,`msit.edu.in`,`www.msit.edu.in`]),h=e=>{let t=String(e||``).trim();if(!t||t===`#`||/^(mailto:|tel:|javascript:|#)/i.test(t))return null;if(t.startsWith(`/`))return d(t);if(/^https?:\/\//i.test(t))try{let e=new URL(t);return m.has(e.hostname)?d(`${e.pathname}${e.search}${e.hash}`):null}catch{return null}return d(t)};function g({href:e,className:t=``,children:r,ariaDisabled:i=!1}){let a=h(e),o=d(e);return a?(0,l.jsx)(n,{to:a,className:t,"aria-disabled":i?`true`:void 0,children:r}):o&&o!==`#`?(0,l.jsx)(`a`,{href:o,className:t,"aria-disabled":i?`true`:void 0,children:r}):(0,l.jsx)(`div`,{className:t,"aria-disabled":i?`true`:void 0,children:r})}var _=e=>[...e].sort((e,t)=>{let n=Number(t?.is_featured_home||0)-Number(e?.is_featured_home||0);if(n!==0)return n;let r=Number(e?.sort_order??0)-Number(t?.sort_order??0);if(r!==0)return r;let i=Date.parse(t?.publish_at||t?.created_at||``)-Date.parse(e?.publish_at||e?.created_at||``);return Number.isFinite(i)&&i!==0?i:String(e?.title||``).localeCompare(String(t?.title||``))});function v(){let e=t(),{status:n,error:r}=a(e=>e.courses),i=a(s);(0,c.useEffect)(()=>{e(o())},[e]);let d=(0,c.useMemo)(()=>_(i||[]),[i]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`style`,{children:`
        .ugc-section{
          background:#9E363A;
          border-radius:18px;
          padding:34px 22px;
          border:1px solid rgba(255,255,255,.14);
          box-shadow:0 10px 28px rgba(0,0,0,.10);
        }

        .ugc-section h2{
          text-align:center;
          font-weight:950;
          color:#fff;
          margin:0 0 24px;
          font-size:clamp(20px, 2.8vw, 32px);
          line-height:1.15;
        }

        .ugc-row{
          display:grid;
          grid-template-columns:1fr;
          gap:24px;
        }

        @media (min-width:768px){
          .ugc-row{
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width:992px){
          .ugc-row{
            grid-template-columns:repeat(3, minmax(0, 1fr));
          }
        }

        .ugc-col{
          min-width:0;
        }

        .ugc-card{
          display:block;
          text-decoration:none;
          color:#fff;
          height:100%;
        }

        .ugc-img{
          width:100%;
          height:170px;
          object-fit:cover;
          border-radius:10px;
          border:4px solid rgba(255,255,255,.95);
          box-shadow:0 12px 24px rgba(2,6,23,.18);
          background:#111;
          transition:transform .18s ease;
          display:block;
        }

        .ugc-title{
          margin:14px 0 0;
          font-weight:950;
          font-size:18px;
          line-height:1.25;
          color:#fff;
          display:-webkit-box;
          -webkit-line-clamp:3;
          -webkit-box-orient:vertical;
          overflow:hidden;
          min-height:calc(18px * 1.25 * 2);
        }

        .ugc-card:hover .ugc-img{
          transform:translateY(-1px);
        }

        .muted-note{
          color:#6b7280;
          font-weight:800;
          text-align:center;
          margin:0;
          padding:10px 0 0;
        }

        .muted-note--white{
          color:#fff;
        }

        @media (max-width:576px){
          .ugc-section{
            padding:26px 16px;
            border-radius:16px;
          }

          .ugc-img{
            height:150px;
          }

          .ugc-title{
            font-size:16px;
            min-height:0;
          }
        }
      `}),(0,l.jsxs)(`section`,{className:`ugc-section reveal`,"data-lazy-key":`coursesUg`,children:[(0,l.jsx)(`h2`,{children:`AICTE UG Courses`}),n===`loading`&&(0,l.jsx)(`div`,{className:`ugc-row`,id:`ugCoursesContainer`,children:(0,l.jsx)(`div`,{className:`ugc-col`,children:(0,l.jsxs)(`div`,{className:`ugc-card`,"aria-disabled":`true`,children:[(0,l.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:u,alt:`Course`,className:`ugc-img`}),(0,l.jsx)(`div`,{className:`ugc-title`,children:`Loading…`})]})})}),n===`failed`&&(0,l.jsx)(`div`,{className:`ugc-row`,id:`ugCoursesContainer`,children:(0,l.jsx)(`div`,{className:`ugc-col`,style:{gridColumn:`1 / -1`},children:(0,l.jsx)(`p`,{className:`muted-note muted-note--white`,children:r||`Failed to load courses`})})}),n!==`loading`&&n!==`failed`&&d.length===0&&(0,l.jsx)(`div`,{className:`ugc-row`,id:`ugCoursesContainer`,children:(0,l.jsx)(`div`,{className:`ugc-col`,style:{gridColumn:`1 / -1`},children:(0,l.jsx)(`p`,{className:`muted-note muted-note--white`,children:`No UG courses available.`})})}),n!==`loading`&&n!==`failed`&&d.length>0&&(0,l.jsx)(`div`,{className:`ugc-row`,id:`ugCoursesContainer`,children:d.map((e,t)=>{let n=e?.cover_image||e?.image_url||e?.image||u,r=e?.title||e?.name||`UG Course`,i=p(e?.title_link,e?.cover_image_link,e?.summary_link,e?.href,e?.link,e?.redirect_url,e?.url,e?.uuid?`/courses/view/${e.uuid}`:``);return(0,l.jsx)(`div`,{className:`ugc-col`,children:(0,l.jsxs)(g,{href:i,className:`ugc-card`,ariaDisabled:i===`#`,children:[(0,l.jsx)(`img`,{src:n,loading:`lazy`,alt:r,className:`ugc-img`,onError:e=>{e.currentTarget.src=u}}),(0,l.jsx)(`div`,{className:`ugc-title`,children:r})]})},e?.uuid||t)})})]})]})}export{v as default};