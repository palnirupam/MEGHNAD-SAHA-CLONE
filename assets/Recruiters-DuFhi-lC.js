import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{n as a,r as o,t as s}from"./TopHeaderMenu-DZxbAKPR.js";import{r as c,t as l}from"./recruitersSlice-BDuLNQLB.js";import u from"./Footer-zaYqAOdA.js";var d=e(n(),1),f=r(),p=e=>{let t=String(e||``).trim();return t?/^(data:|blob:|https?:\/\/)/i.test(t)?t:t.startsWith(`//`)?`https:${t}`:t.startsWith(`/`)?`${window.location.origin}${t}`:t.includes(`.`)&&!t.includes(` `)?`https://${t.replace(/^\/+/,``)}`:`${window.location.origin}/${t.replace(/^\/+/,``)}`:``},m=e=>{let t=String(e||``).replace(/<\s*br\s*\/?>/gi,` `).replace(/<\/\s*(p|div|li|h[1-6]|tr|td|th|section|article)\s*>/gi,`$& `).replace(/<\s*(p|div|li|h[1-6]|tr|td|th|section|article)\b[^>]*>/gi,` `),n=document.createElement(`div`);return n.innerHTML=t,(n.textContent||n.innerText||``).replace(/\s+/g,` `).trim()},h=(e,t)=>{for(let n of t){let t=e?.[n];if(t!=null&&String(t).trim()!==``)return t}return``},g=(e,t)=>h(e&&typeof e==`object`&&e.metadata&&typeof e.metadata==`object`?e.metadata:{},t),_=e=>h(e,[`logo_url_full`,`logo_url`,`image_url`,`image_full_url`,`logo`,`image`,`src`,`url`])||g(e,[`logo_url_full`,`logo_url`,`logo`,`image`,`src`,`url`])||e?.attachment?.url||``,v=e=>{if(!e)return`—`;try{let t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`}).format(t)}catch{return String(e)}},y=e=>{if(e==null||e===``)return`—`;let t=typeof e==`number`?e:parseFloat(String(e).replace(/[^\d.\-]/g,``));return Number.isNaN(t)?String(e):t.toLocaleString()};function b(){let e=t(),n=i(c),r=i(e=>e.recruiters?.loading??!1),b=i(e=>e.recruiters?.error??null),[x,S]=(0,d.useState)(``),[C,w]=(0,d.useState)(1),[T,E]=(0,d.useState)(null);(0,d.useEffect)(()=>{e(l())},[e]),(0,d.useEffect)(()=>{w(1)},[x]),(0,d.useEffect)(()=>{if(!T)return;let e=document.body.style.overflow,t=document.documentElement.style.overflow;return document.body.style.overflow=`hidden`,document.documentElement.style.overflow=`hidden`,()=>{document.body.style.overflow=e,document.documentElement.style.overflow=t}},[T]);let D=(0,d.useMemo)(()=>{let e=Array.isArray(n)?[...n]:[],t=x.trim().toLowerCase();return t?e.filter(e=>{let n=String(h(e,[`name`,`title`,`company`,`label`])||``).toLowerCase(),r=String(h(e,[`industry`,`sector`,`category`])||g(e,[`industry`,`sector`,`category`])||``).toLowerCase(),i=String(h(e,[`location`,`city`,`country`,`headquarters`,`hq`])||g(e,[`hq`,`location`,`city`,`country`,`headquarters`])||``).toLowerCase(),a=m(h(e,[`description`,`about`,`summary`,`content`,`details`,`body`])||``).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)||a.includes(t)}):e},[n,x]),O=Math.max(1,Math.ceil(D.length/24)),k=Math.min(C,O),A=(0,d.useMemo)(()=>{let e=(k-1)*24;return D.slice(e,e+24)},[D,k]);(0,d.useEffect)(()=>{C>O&&w(O)},[C,O]);let j=(0,d.useMemo)(()=>{let e=[],t=Math.max(1,k-2),n=Math.min(O,k+2);e.push({type:`prev`,page:Math.max(1,k-1),disabled:k<=1}),t>1&&(e.push({type:`page`,page:1,active:k===1}),t>2&&e.push({type:`ellipsis-1`}));for(let r=t;r<=n;r+=1)e.push({type:`page`,page:r,active:r===k});return n<O&&(n<O-1&&e.push({type:`ellipsis-2`}),e.push({type:`page`,page:O,active:k===O})),e.push({type:`next`,page:Math.min(O,k+1),disabled:k>=O}),e},[k,O]),M=(0,d.useMemo)(()=>{if(!T)return null;let e=String(h(T,[`name`,`title`,`company`,`label`])||`Company`).trim(),t=m(h(T,[`description`,`about`,`summary`,`content`,`details`,`body`])||``),n=_(T),r=n?p(n):``,i=h(T,[`website`,`link`,`web_url`,`site`,`company_url`])||g(T,[`website`,`link`,`web_url`,`site`,`company_url`]);return{name:e,description:t,logo:r,website:i?p(i):``,department:h(T,[`department_title`,`department`,`dept_title`])||`—`,industry:h(T,[`industry`,`sector`,`category`])||g(T,[`industry`,`sector`,`category`])||`—`,location:h(T,[`location`,`city`,`country`,`headquarters`,`hq`])||g(T,[`hq`,`location`,`city`,`country`,`headquarters`])||`—`,hired:h(T,[`students_hired`,`hired_count`,`placements`])||g(T,[`students_hired`,`hired_count`,`placements`])||``,createdAt:h(T,[`created_at`,`date_added`,`joined_date`])||``,updatedAt:h(T,[`updated_at`,`last_updated`])||``,roles:Array.isArray(T?.job_roles_json)?T.job_roles_json:[]}},[T]),N=r&&!n.length;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{}),(0,f.jsx)(a,{}),(0,f.jsx)(o,{}),(0,f.jsx)(`main`,{className:`bg-[var(--surface,#f6f7fb)] py-6 sm:py-8`,children:(0,f.jsxs)(`div`,{className:`orc-wrap orc-scope`,children:[(0,f.jsxs)(`div`,{className:`orc-head`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`h1`,{className:`orc-title`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-building`}),`Our Recruiters`]}),(0,f.jsx)(`div`,{className:`orc-sub`,children:`Companies that recruit from our campus`})]}),(0,f.jsx)(`div`,{className:`orc-tools`,children:(0,f.jsxs)(`div`,{className:`orc-search`,children:[(0,f.jsx)(`i`,{className:`fa fa-magnifying-glass`}),(0,f.jsx)(`input`,{type:`search`,placeholder:`Search recruiters (name/industry/location)…`,value:x,onChange:e=>S(e.target.value)})]})})]}),N?(0,f.jsx)(`div`,{className:`orc-skeleton`,children:Array.from({length:18}).map((e,t)=>(0,f.jsx)(`div`,{className:`orc-sk-tile`},t))}):b?(0,f.jsx)(`div`,{className:`orc-state`,children:`Failed to load recruiters.`}):A.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:`orc-grid`,children:A.map((e,t)=>{let n=e?.uuid||e?.id||`idx_${t}`,r=e?.name||e?.title||e?.company||e?.label||`Recruiter`,i=_(e),a=i?p(i):``;return(0,f.jsx)(`button`,{type:`button`,className:`orc-tile`,onClick:()=>E(e),"aria-label":`View ${r} details`,children:(0,f.jsxs)(`span`,{className:`orc-tile__inner`,children:[(0,f.jsx)(`span`,{className:`orc-tile__fallback`,style:{display:a?`none`:`flex`},children:r}),a?(0,f.jsx)(`img`,{className:`orc-logo`,src:a,alt:r,loading:`lazy`,decoding:`async`,referrerPolicy:`no-referrer`,onError:e=>{e.currentTarget.remove();let t=e.currentTarget.parentElement?.querySelector(`.orc-tile__fallback`);t&&(t.style.display=`flex`)}}):null]})},n)})}),O>1?(0,f.jsx)(`div`,{className:`orc-pagination`,children:(0,f.jsx)(`div`,{className:`orc-pager`,children:j.map((e,t)=>{if(e.type.startsWith(`ellipsis`))return(0,f.jsx)(`span`,{style:{opacity:.6,padding:`0 4px`},children:`…`},t);let n=e.type===`prev`?`Previous`:e.type===`next`?`Next`:String(e.page);return(0,f.jsx)(`button`,{type:`button`,className:`orc-pagebtn ${e.active?`active`:``}`,disabled:e.disabled,onClick:()=>{e.disabled||(w(e.page),window.scrollTo({top:0,behavior:`smooth`}))},children:n},`${e.type}-${e.page}-${t}`)})})}):null]}):(0,f.jsxs)(`div`,{className:`orc-state`,children:[(0,f.jsx)(`div`,{style:{fontSize:`34px`,opacity:.6,marginBottom:6},children:(0,f.jsx)(`i`,{className:`fa-regular fa-face-frown`})}),`No recruiters found.`]})]})}),(0,f.jsx)(u,{}),M?(0,f.jsxs)(`div`,{className:`orc-modal show orc-scope`,"aria-hidden":`false`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`recModalTitle`,"aria-describedby":`recModalDesc`,children:[(0,f.jsx)(`div`,{className:`orc-modal__backdrop`,onClick:()=>E(null)}),(0,f.jsxs)(`div`,{className:`orc-modal__dialog`,role:`document`,children:[(0,f.jsxs)(`div`,{className:`orc-modal__header`,children:[(0,f.jsx)(`h3`,{id:`recModalTitle`,className:`orc-modal__title`,children:M.name}),(0,f.jsx)(`button`,{type:`button`,className:`orc-modal__close`,"aria-label":`Close modal`,onClick:()=>E(null),children:(0,f.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}),(0,f.jsxs)(`div`,{className:`orc-modal__body`,children:[(0,f.jsxs)(`div`,{className:`orc-modal__logo-container`,children:[(0,f.jsx)(`div`,{className:`orc-modal__logo`,children:M.logo?(0,f.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:M.logo,alt:`${M.name} Logo`,onError:e=>{e.currentTarget.style.display=`none`}}):(0,f.jsx)(`div`,{className:`orc-modal__logo-fallback`,children:(0,f.jsx)(`i`,{className:`fa-solid fa-building`})})}),(0,f.jsxs)(`div`,{className:`orc-modal__info-item`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-calendar`}),(0,f.jsx)(`span`,{className:`orc-modal__info-label`,children:`Added`}),(0,f.jsx)(`span`,{className:`orc-modal__info-value`,children:v(M.createdAt)})]})]}),(0,f.jsxs)(`div`,{className:`orc-modal__details`,children:[(0,f.jsxs)(`div`,{className:`orc-modal__section`,children:[(0,f.jsxs)(`div`,{className:`orc-modal__section-title`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-circle-info`}),`About Company`]}),(0,f.jsx)(`div`,{id:`recModalDesc`,className:`orc-modal__description`,children:M.description?(0,f.jsx)(`p`,{children:M.description}):(0,f.jsx)(`p`,{style:{color:`var(--orc-muted)`,fontStyle:`italic`},children:`No description available.`})})]}),(0,f.jsxs)(`div`,{className:`orc-modal__section`,children:[(0,f.jsxs)(`div`,{className:`orc-modal__section-title`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-briefcase`}),`Job Roles`]}),(0,f.jsx)(`div`,{className:`orc-modal__description`,style:{maxHeight:220},children:M.roles.length?(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:M.roles.map((e,t)=>(0,f.jsxs)(`div`,{style:{border:`1px solid var(--orc-line)`,borderRadius:12,padding:`10px 12px`,background:`rgba(2,6,23,.02)`},children:[(0,f.jsx)(`div`,{style:{fontWeight:900,color:`var(--orc-ink)`},children:e?.role||`—`}),(0,f.jsxs)(`div`,{style:{marginTop:2,color:`var(--orc-muted)`,fontSize:13},children:[`CTC:`,` `,(0,f.jsx)(`b`,{style:{color:`var(--orc-ink)`},children:e?.ctc||`—`})]})]},t))}):(0,f.jsx)(`p`,{style:{color:`var(--orc-muted)`,fontStyle:`italic`},children:`No roles available.`})})]}),(0,f.jsxs)(`div`,{className:`orc-modal__info-grid`,children:[(0,f.jsxs)(`div`,{className:`orc-modal__info-item`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-building-columns`}),(0,f.jsx)(`span`,{className:`orc-modal__info-label`,children:`Department`}),(0,f.jsx)(`span`,{className:`orc-modal__info-value`,children:M.department})]}),(0,f.jsxs)(`div`,{className:`orc-modal__info-item`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-industry`}),(0,f.jsx)(`span`,{className:`orc-modal__info-label`,children:`Industry`}),(0,f.jsx)(`span`,{className:`orc-modal__info-value`,children:M.industry})]}),(0,f.jsxs)(`div`,{className:`orc-modal__info-item`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-location-dot`}),(0,f.jsx)(`span`,{className:`orc-modal__info-label`,children:`HQ`}),(0,f.jsx)(`span`,{className:`orc-modal__info-value`,children:M.location})]}),(0,f.jsxs)(`div`,{className:`orc-modal__info-item`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-users`}),(0,f.jsx)(`span`,{className:`orc-modal__info-label`,children:`Hired`}),(0,f.jsx)(`span`,{className:`orc-modal__info-value`,children:M.hired===``?`—`:y(M.hired)})]})]})]})]}),(0,f.jsxs)(`div`,{className:`orc-modal__footer`,children:[(0,f.jsxs)(`div`,{className:`orc-modal__footer-left`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-clock`}),(0,f.jsxs)(`span`,{children:[`Last updated: `,(0,f.jsx)(`span`,{children:v(M.updatedAt)})]})]}),(0,f.jsxs)(`div`,{className:`orc-modal__footer-right`,children:[M.website?(0,f.jsxs)(`a`,{className:`orc-modal__btn primary`,href:M.website,target:`_blank`,rel:`noopener noreferrer`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-external-link`}),`Visit Website`]}):null,(0,f.jsxs)(`button`,{type:`button`,className:`orc-modal__btn secondary`,onClick:()=>E(null),children:[(0,f.jsx)(`i`,{className:`fa-solid fa-xmark`}),`Close`]})]})]})]})]}):null,(0,f.jsx)(`style`,{children:`
        .orc-scope{
          --orc-brand: var(--primary-color, #8f2f2f);
          --orc-ink: var(--ink, #0f172a);
          --orc-muted: var(--muted-color, #64748b);
          --orc-bg: var(--page-bg, #ffffff);
          --orc-card: var(--surface, #ffffff);
          --orc-line: var(--line-soft, rgba(15, 23, 42, .10));
          --orc-shadow: var(--shadow-2, 0 10px 24px rgba(2, 6, 23, .08));
        }

        .orc-wrap{
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
          background: transparent;
          position: relative;
          overflow: visible;
        }

        .orc-head{
          background: var(--orc-card);
          border: 1px solid var(--orc-line);
          border-radius: 16px;
          box-shadow: var(--orc-shadow);
          padding: 14px 16px;
          margin-bottom: 16px;
          display:flex;
          gap:12px;
          align-items:center;
          justify-content:space-between;
          flex-wrap:nowrap;
        }

        .orc-head > div:first-child{ flex: 0 0 auto; }

        .orc-title{
          margin:0;
          font-weight:950;
          letter-spacing:.2px;
          color:var(--orc-ink);
          font-size:28px;
          display:flex;
          align-items:center;
          gap:10px;
        }

        .orc-title i{ color:var(--orc-brand); }

        .orc-sub{
          margin:6px 0 0;
          color:var(--orc-muted);
          font-size:14px;
        }

        .orc-tools{
          display:flex;
          gap:10px;
          align-items:center;
          flex-wrap:nowrap;
          justify-content:flex-end;
          flex:1 1 auto;
        }

        .orc-search{
          position:relative;
          min-width:260px;
          max-width:520px;
          flex:1 1 320px;
        }

        .orc-search i{
          position:absolute;
          left:14px;
          top:50%;
          transform:translateY(-50%);
          opacity:.65;
          color:var(--orc-muted);
          pointer-events:none;
        }

        .orc-search input{
          width:100%;
          height:42px;
          border-radius:999px;
          padding:11px 12px 11px 42px;
          border:1px solid var(--orc-line);
          background:var(--orc-card);
          color:var(--orc-ink);
          outline:none;
        }

        .orc-search input:focus{
          border-color:rgba(201,75,80,.55);
          box-shadow:0 0 0 4px rgba(201,75,80,.18);
        }

        .orc-grid{
          display:grid;
          grid-template-columns:repeat(9, minmax(0,1fr));
          align-items:start;
          gap:0;
        }

        .orc-tile{
          margin:0;
          border-radius:12px;
          overflow:hidden;
          background:#fff;
          border:1px solid rgba(15,23,42,.06);
          box-shadow:0 1px 3px rgba(2,6,23,.06), 0 6px 12px rgba(2,6,23,.04);
          cursor:pointer;
          transition:all .2s cubic-bezier(0.4, 0, 0.2, 1);
          height:110px;
          grid-column:span 1;
          position:relative;
          outline:none;
          text-decoration:none;
          padding:0;
        }

        .orc-tile:nth-child(12n + 2),
        .orc-tile:nth-child(12n + 4),
        .orc-tile:nth-child(12n + 6),
        .orc-tile:nth-child(12n + 7),
        .orc-tile:nth-child(12n + 9),
        .orc-tile:nth-child(12n + 11){
          grid-column:span 2;
        }

        .orc-tile:hover,
        .orc-tile:focus{
          transform:translateY(-3px);
          box-shadow:0 4px 6px rgba(2, 6, 23, .08), 0 16px 28px rgba(2, 6, 23, .12);
          border-color:rgba(143, 47, 47, .20);
        }

        .orc-tile__inner{
          display:block;
          width:100%;
          height:100%;
          background:#fff;
        }

        .orc-tile img{
          width:100%;
          height:100%;
          object-fit:contain;
          object-position:center;
          display:block;
          padding:8px;
        }

        .orc-tile__fallback{
          height:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:14px 12px;
          color:#64748b;
          font-weight:900;
          font-size:14px;
          text-align:center;
        }

        .orc-skeleton{
          display:grid;
          gap:14px;
          grid-template-columns:repeat(12, minmax(0,1fr));
        }

        .orc-sk-tile{
          --w:2;
          grid-column:span var(--w);
          background:#fff;
          border:1px solid var(--orc-line);
          box-shadow:var(--orc-shadow);
          border-radius:18px;
          overflow:hidden;
          position:relative;
          height:110px;
        }

        .orc-sk-tile:before{
          content:'';
          position:absolute;
          inset:0;
          transform:translateX(-60%);
          background:linear-gradient(90deg, transparent, rgba(148,163,184,.22), transparent);
          animation:orcSkMove 1.15s ease-in-out infinite;
        }

        @keyframes orcSkMove{
          to{ transform:translateX(60%); }
        }

        .orc-sk-tile:nth-child(6n + 1){ --w:1; }
        .orc-sk-tile:nth-child(6n + 2){ --w:2; }
        .orc-sk-tile:nth-child(6n + 3){ --w:1; }
        .orc-sk-tile:nth-child(6n + 4){ --w:2; }
        .orc-sk-tile:nth-child(6n + 5){ --w:3; }
        .orc-sk-tile:nth-child(6n + 6){ --w:3; }

        .orc-state{
          background:var(--orc-card);
          border:1px solid var(--orc-line);
          border-radius:16px;
          box-shadow:var(--orc-shadow);
          padding:18px;
          color:var(--orc-muted);
          text-align:center;
        }

        .orc-pagination{
          display:flex;
          justify-content:center;
          margin-top:18px;
        }

        .orc-pager{
          display:flex;
          gap:8px;
          flex-wrap:wrap;
          align-items:center;
          justify-content:center;
          padding:10px;
        }

        .orc-pagebtn{
          border:1px solid var(--orc-line);
          background:var(--orc-card);
          color:var(--orc-ink);
          border-radius:12px;
          padding:9px 12px;
          font-size:13px;
          font-weight:950;
          box-shadow:0 8px 18px rgba(2,6,23,.06);
          cursor:pointer;
          user-select:none;
        }

        .orc-pagebtn:hover{ background:rgba(2,6,23,.03); }
        .orc-pagebtn[disabled]{ opacity:.55; cursor:not-allowed; }

        .orc-pagebtn.active{
          background:rgba(201,75,80,.12);
          border-color:rgba(201,75,80,.35);
          color:var(--orc-brand);
        }

        .orc-modal{
          position:fixed;
          inset:0;
          z-index:9999;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:16px;
          opacity:1;
        }

        .orc-modal__backdrop{
          position:absolute;
          inset:0;
          background:rgba(2, 6, 23, 0.88);
          backdrop-filter:blur(4px);
        }

        .orc-modal__dialog{
          position:relative;
          width:min(800px, 100%);
          max-height:90vh;
          background:var(--orc-card);
          border:1px solid var(--orc-line);
          border-radius:20px;
          box-shadow:0 24px 64px rgba(2, 6, 23, 0.35);
          overflow:hidden;
          transform:translateY(0) scale(1);
          display:flex;
          flex-direction:column;
          animation:orcModalSlideUp .3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes orcModalSlideUp{
          from { transform: translateY(20px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        .orc-modal__header{
          padding:18px 24px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          border-bottom:1px solid var(--orc-line);
          background:rgba(255,255,255,0.95);
          backdrop-filter:blur(8px);
          position:sticky;
          top:0;
          z-index:10;
        }

        .orc-modal__title{
          margin:0;
          font-size:20px;
          font-weight:950;
          color:var(--orc-ink);
          letter-spacing:-0.2px;
          line-height:1.3;
          display:-webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }

        .orc-modal__close{
          border:none;
          background:rgba(2,6,23,0.04);
          width:40px;
          height:40px;
          border-radius:12px;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          color:var(--orc-muted);
          transition:all .2s ease;
          flex-shrink:0;
        }

        .orc-modal__close:hover{
          background:rgba(201,75,80,0.12);
          color:var(--orc-brand);
          transform:rotate(90deg);
        }

        .orc-modal__body{
          padding:24px;
          display:grid;
          grid-template-columns:140px 1fr;
          gap:24px;
          align-items:start;
          overflow-y:auto;
          flex:1;
        }

        .orc-modal__logo-container{
          display:flex;
          flex-direction:column;
          gap:12px;
        }

        .orc-modal__logo{
          width:140px;
          height:140px;
          border:1px solid var(--orc-line);
          border-radius:20px;
          background:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
          padding:16px;
          box-shadow:0 12px 32px rgba(2, 6, 23, 0.1);
        }

        .orc-modal__logo img{
          max-width:100%;
          max-height:100%;
          object-fit:contain;
          display:block;
        }

        .orc-modal__logo-fallback{
          display:flex;
          align-items:center;
          justify-content:center;
          width:100%;
          height:100%;
          color:var(--orc-muted);
          font-weight:900;
          font-size:42px;
          opacity:.6;
        }

        .orc-modal__details{
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        .orc-modal__section{
          display:flex;
          flex-direction:column;
          gap:8px;
        }

        .orc-modal__section-title{
          font-size:12px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:.5px;
          color:var(--orc-brand);
          opacity:.8;
          display:flex;
          align-items:center;
          gap:6px;
        }

        .orc-modal__description{
          color:var(--orc-ink);
          font-size:15px;
          line-height:1.6;
          max-height:300px;
          overflow-y:auto;
          padding-right:8px;
        }

        .orc-modal__description p{
          margin:0 0 12px 0;
        }

        .orc-modal__description p:last-child{
          margin-bottom:0;
        }

        .orc-modal__info-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
          gap:12px;
          margin-top:4px;
        }

        .orc-modal__info-item{
          display:flex;
          align-items:center;
          gap:8px;
          padding:8px 12px;
          background:rgba(2,6,23,.02);
          border-radius:10px;
          border:1px solid var(--orc-line);
        }

        .orc-modal__info-item i{
          color:var(--orc-brand);
          opacity:.8;
          font-size:14px;
          width:16px;
        }

        .orc-modal__info-label{
          font-size:13px;
          font-weight:600;
          color:var(--orc-muted);
          white-space:nowrap;
        }

        .orc-modal__info-value{
          font-size:13px;
          font-weight:700;
          color:var(--orc-ink);
          margin-left:auto;
        }

        .orc-modal__footer{
          padding:18px 24px;
          border-top:1px solid var(--orc-line);
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          flex-wrap:wrap;
          background:rgba(255,255,255,0.95);
          backdrop-filter:blur(8px);
          position:sticky;
          bottom:0;
        }

        .orc-modal__footer-left{
          display:flex;
          align-items:center;
          gap:8px;
          color:var(--orc-muted);
          font-size:13px;
        }

        .orc-modal__footer-right{
          display:flex;
          align-items:center;
          gap:10px;
        }

        .orc-modal__btn{
          border:1px solid var(--orc-line);
          background:var(--orc-card);
          color:var(--orc-ink);
          border-radius:12px;
          padding:10px 16px;
          font-size:14px;
          font-weight:700;
          cursor:pointer;
          box-shadow:0 8px 20px rgba(2,6,23,.08);
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          gap:8px;
          transition:all .2s ease;
          min-height:42px;
        }

        .orc-modal__btn:hover{
          background:rgba(2,6,23,.03);
          transform:translateY(-1px);
          box-shadow:0 12px 24px rgba(2,6,23,.12);
        }

        .orc-modal__btn.primary{
          background:linear-gradient(135deg, rgba(201,75,80,0.15), rgba(201,75,80,0.08));
          border-color:rgba(201,75,80,0.35);
          color:var(--orc-brand);
          font-weight:800;
        }

        .orc-modal__btn.secondary{
          background:rgba(2,6,23,0.02);
          border-color:rgba(2,6,23,0.08);
        }

        @media (max-width: 992px){
          .orc-head{ flex-wrap:wrap; align-items:flex-end; }
          .orc-tools{ flex-wrap:wrap; justify-content:flex-start; }
          .orc-grid, .orc-skeleton{ grid-template-columns:repeat(6, minmax(0,1fr)); }
          .orc-tile, .orc-sk-tile{ grid-column:span 3; }
        }

        @media (max-width: 768px){
          .orc-grid{ grid-template-columns:repeat(3, minmax(0,1fr)); }
          .orc-wrap{ padding:0 10px; }
          .orc-title{ font-size:24px; }
          .orc-modal__body{ grid-template-columns:1fr; gap:20px; }
          .orc-modal__logo-container{ align-items:center; }
          .orc-modal__logo{ width:160px; height:160px; }
          .orc-modal__footer{ flex-direction:column; align-items:stretch; gap:12px; }
          .orc-modal__footer-right{ width:100%; }
          .orc-modal__btn{ flex:1; justify-content:center; min-width:0; }
        }

        @media (max-width: 640px){
          .orc-search{ min-width:220px; flex:1 1 240px; }
        }

        @media (max-width: 520px){
          .orc-grid, .orc-skeleton{ grid-template-columns:repeat(2, minmax(0,1fr)); }
          .orc-tile, .orc-sk-tile{ grid-column:span 2; }
          .orc-title{ font-size:22px; }
        }

        @media (max-width: 480px){
          .orc-modal__header{ padding:16px 20px; }
          .orc-modal__body{ padding:20px; }
          .orc-modal__footer{ padding:16px 20px; }
          .orc-modal__btn{ padding:10px 14px; font-size:13px; }
          .orc-modal__info-grid{ grid-template-columns:1fr; }
        }
      `})]})}export{b as default};