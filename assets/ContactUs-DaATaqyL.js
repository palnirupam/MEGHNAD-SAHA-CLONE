import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{n as a,r as o,t as s}from"./TopHeaderMenu-DZxbAKPR.js";import{a as c,c as l,i as u,n as d,o as f,s as p,t as m}from"./contactUsSlice-Di23ak43.js";import h from"./Footer-zaYqAOdA.js";var g=e(n(),1),_=r();function v({type:e=`info`,text:t=``}){return t?(0,_.jsx)(`div`,{className:`mb-3 rounded-xl border px-3 py-2 text-[12.5px] font-semibold ${e===`error`?`border-red-200 bg-red-50 text-red-700`:e===`success`?`border-emerald-200 bg-emerald-50 text-emerald-700`:`border-blue-200 bg-blue-50 text-blue-700`}`,children:t}):null}function y(){let e=t(),n=i(f),r=i(p),[y,b]=(0,g.useState)(``),[x,S]=(0,g.useState)(``),[C,w]=(0,g.useState)(``),[T,E]=(0,g.useState)(``),[D,O]=(0,g.useState)(``),[k,A]=(0,g.useState)(!1),[j,M]=(0,g.useState)(!1),[N,P]=(0,g.useState)({type:`info`,text:``});(0,g.useEffect)(()=>{e(u()),e(c())},[e]);let F=(0,g.useMemo)(()=>!!y.trim()&&!!C.trim()&&!!D.trim()&&k&&j&&r.status!==`loading`,[y,C,D,k,j,r.status]),I=()=>{b(``),S(``),w(``),E(``),O(``),A(!1),M(!1),P({type:`info`,text:``})};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`style`,{children:`
          :root{
            --contact-accent:#8f2d2f;
            --contact-accent-2:#6f2224;
            --contact-ink:#12212b;
            --contact-muted:#5b6b76;
            --contact-line:#e7eaee;
            --contact-surface:#ffffff;
          }

          .cu-wrap{ max-width: 980px; margin: 0 auto; padding: 28px 16px 44px; }

          .cu-hero{ text-align:center; padding-top: 6px; }
          .cu-hero h1{ margin:0; font-weight:800; letter-spacing:.2px; color:var(--contact-ink); font-size:34px; }
          .cu-hero p{ margin:8px 0 0; color:var(--contact-muted); font-size:14.5px; }

          .cu-info-grid{
            margin-top: 28px;
            display:grid;
            grid-template-columns: 1fr 1fr;
            gap: 22px 54px;
            align-items:start;
          }

          .cu-item{ display:flex; gap:14px; align-items:flex-start; }

          .cu-icon{
            width:54px; height:54px; border-radius:999px;
            background: var(--contact-accent);
            display:flex; align-items:center; justify-content:center;
            flex:0 0 54px;
            box-shadow: 0 10px 18px rgba(143,45,47,.15);
          }

          .cu-icon i{ color:#fff; font-size:18px; }

          .cu-item h4{ margin:0; font-weight:800; color:var(--contact-ink); font-size:18px; }
          .cu-item .cu-text{ margin-top:6px; color:#3b4a55; line-height:1.5; font-size:14.5px; }
          .cu-item .cu-link{ color:var(--contact-accent); text-decoration:none; font-weight:700; }
          .cu-item .cu-link:hover{ color:var(--contact-accent-2); text-decoration:underline; }
          .cu-item .cu-muted{ color: var(--contact-muted); }

          .cu-form-wrap{
            margin-top:26px;
            background: var(--contact-surface);
            border:1px solid var(--contact-line);
            border-radius:16px;
            padding:18px;
            box-shadow: 0 14px 30px rgba(16, 24, 40, .06);
          }

          .cu-form-head{
            display:flex; align-items:flex-start; justify-content:space-between;
            gap:12px; margin-bottom:12px;
          }

          .cu-form-head h3{ margin:0; font-weight:900; color:var(--contact-ink); font-size:18px; }
          .cu-form-head p{ margin:4px 0 0; color:var(--contact-muted); font-size:13.5px; }

          .cu-form{ margin-top:10px; display:grid; grid-template-columns:1fr 1fr; gap:12px; }
          .cu-form .full{ grid-column: 1 / -1; }

          .cu-form label{ display:block; font-weight:800; color:var(--contact-ink); font-size:13px; margin:0 0 6px; }

          .cu-form input, .cu-form textarea{
            width:100%;
            border:1px solid var(--contact-line);
            border-radius:12px;
            padding:11px 12px;
            font-size:14px;
            outline:none;
            background:#fff;
          }

          .cu-form textarea{ min-height:120px; resize:vertical; }

          .cu-form input:focus, .cu-form textarea:focus{
            border-color: rgba(143,45,47,.55);
            box-shadow: 0 0 0 3px rgba(143,45,47,.15);
          }

          .cu-consent{
            grid-column: 1 / -1;
            margin-top: 6px;
            padding-top: 8px;
            border-top: 1px dashed rgba(15,23,42,.12);
            display:flex;
            flex-direction:column;
            gap:10px;
          }

          .cu-check{
            display:flex;
            gap:10px;
            align-items:flex-start;
            font-size:13.5px;
            color:#2f3d46;
            line-height:1.45;
          }

          .cu-check input{
            width:18px; height:18px;
            margin-top:2px;
            accent-color: var(--contact-accent);
            flex:0 0 auto;
          }

          .cu-actions{
            grid-column: 1 / -1;
            display:flex; gap:10px; align-items:center; justify-content:flex-start;
            margin-top:4px;
            flex-wrap: wrap;
          }

          .cu-btn{
            border:none;
            background: var(--contact-accent);
            color:#fff;
            padding:11px 18px;
            border-radius:12px;
            font-weight:900;
            cursor:pointer;
            display:inline-flex;
            align-items:center;
            gap:8px;
            transition: background .15s ease, transform .15s ease, opacity .15s ease;
          }

          .cu-btn:hover{ background: var(--contact-accent-2); }
          .cu-btn:disabled{
            opacity:.55;
            cursor:not-allowed;
            filter: grayscale(.05);
          }

          .cu-note{ color:var(--contact-muted); font-size:13px; }

          .cu-find{ margin-top:26px; text-align:center; }
          .cu-find h2{ margin:0 0 12px; font-weight:900; color:var(--contact-ink); font-size:24px; }

          .cu-map{
            border:1px solid var(--contact-line);
            border-radius:16px;
            overflow:hidden;
            box-shadow: 0 14px 30px rgba(16, 24, 40, .06);
            background:#fff;
          }

          .cu-map iframe{ width:100%; height:320px; border:0; display:block; }

          @media(max-width: 900px){
            .cu-info-grid{ grid-template-columns:1fr; gap:18px; }
            .cu-form{ grid-template-columns:1fr; }
            .cu-hero h1{ font-size:30px; }
          }
        `}),(0,_.jsx)(s,{}),(0,_.jsx)(a,{}),(0,_.jsx)(o,{}),(0,_.jsx)(`main`,{className:`min-h-screen bg-[#f6f7fb]`,children:(0,_.jsxs)(`div`,{className:`cu-wrap`,children:[(0,_.jsxs)(`div`,{className:`cu-hero`,children:[(0,_.jsx)(`h1`,{children:n.heroTitle||`Contact Us`}),(0,_.jsx)(`p`,{children:n.heroSubtitle||`Excellence in Technical Education`})]}),n.showInfoGrid&&n.infoCards?.length>0?(0,_.jsx)(`div`,{className:`cu-info-grid`,children:n.infoCards.map(e=>(0,_.jsxs)(`div`,{className:`cu-item`,children:[(0,_.jsx)(`div`,{className:`cu-icon`,children:(0,_.jsx)(`i`,{className:e.icon,"aria-hidden":`true`})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h4`,{children:e.title}),(0,_.jsx)(`div`,{className:`cu-text`,children:e.value?e.href&&e.slot!==`address`?(0,_.jsx)(`a`,{className:`cu-link`,href:e.href,target:e.href.startsWith(`http://`)||e.href.startsWith(`https://`)?`_blank`:void 0,rel:e.href.startsWith(`http://`)||e.href.startsWith(`https://`)?`noreferrer`:void 0,children:e.value}):(0,_.jsx)(`span`,{className:e.multiline?`whitespace-pre-line`:``,children:e.value}):(0,_.jsx)(`span`,{className:`cu-muted`,children:`Not available`})})]})]},e.slot))}):null,n.showForm?(0,_.jsxs)(`div`,{className:`cu-form-wrap`,children:[(0,_.jsx)(`div`,{className:`cu-form-head`,children:(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{children:`Send a Message`}),(0,_.jsx)(`p`,{children:`Fill the form and we’ll get back to you as soon as possible.`})]})}),(0,_.jsx)(v,{type:N.type,text:N.text}),(0,_.jsxs)(`form`,{className:`cu-form`,onSubmit:async t=>{if(t.preventDefault(),P({type:`info`,text:``}),!y.trim()||!C.trim()||!D.trim()){P({type:`error`,text:`Please fill all required fields`});return}if(!(k&&j)){P({type:`error`,text:`Please accept the required agreements to continue.`});return}let n={first_name:y.trim(),last_name:x.trim()?x.trim():null,email:C.trim(),phone:T.trim()?T.trim():null,message:D.trim(),legal_authority_json:[{key:`terms`,text:m,accepted:!0},{key:`promotions`,text:d,accepted:!0}]};try{await e(l(n)).unwrap(),P({type:`success`,text:`Message sent successfully`}),I(),e(c())}catch(e){P({type:`error`,text:e||`Something went wrong. Please try again.`})}},children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{htmlFor:`first_name`,children:`First Name *`}),(0,_.jsx)(`input`,{id:`first_name`,type:`text`,placeholder:`Your first name`,value:y,onChange:e=>b(e.target.value),required:!0})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{htmlFor:`last_name`,children:`Last Name`}),(0,_.jsx)(`input`,{id:`last_name`,type:`text`,placeholder:`Your last name (optional)`,value:x,onChange:e=>S(e.target.value)})]}),(0,_.jsxs)(`div`,{className:`full`,children:[(0,_.jsx)(`label`,{htmlFor:`email`,children:`Email *`}),(0,_.jsx)(`input`,{id:`email`,type:`email`,placeholder:`your@email.com`,value:C,onChange:e=>w(e.target.value),required:!0})]}),(0,_.jsxs)(`div`,{className:`full`,children:[(0,_.jsx)(`label`,{htmlFor:`phone`,children:`Phone`}),(0,_.jsx)(`input`,{id:`phone`,type:`text`,placeholder:`Your phone number (optional)`,value:T,onChange:e=>E(e.target.value)})]}),(0,_.jsxs)(`div`,{className:`full`,children:[(0,_.jsx)(`label`,{htmlFor:`message`,children:`Message *`}),(0,_.jsx)(`textarea`,{id:`message`,placeholder:`Write your message...`,value:D,onChange:e=>O(e.target.value),required:!0})]}),(0,_.jsxs)(`div`,{className:`cu-consent`,children:[(0,_.jsxs)(`label`,{className:`cu-check`,htmlFor:`consent_terms`,children:[(0,_.jsx)(`input`,{id:`consent_terms`,type:`checkbox`,checked:k,onChange:e=>A(e.target.checked)}),(0,_.jsx)(`span`,{children:m})]}),(0,_.jsxs)(`label`,{className:`cu-check`,htmlFor:`consent_promotions`,children:[(0,_.jsx)(`input`,{id:`consent_promotions`,type:`checkbox`,checked:j,onChange:e=>M(e.target.checked)}),(0,_.jsx)(`span`,{children:d})]})]}),(0,_.jsxs)(`div`,{className:`cu-actions`,children:[(0,_.jsx)(`button`,{className:`cu-btn`,type:`submit`,disabled:!F,children:r.status===`loading`?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-spinner animate-spin`,"aria-hidden":`true`}),`Sending...`]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`i`,{className:`fa-solid fa-paper-plane`,"aria-hidden":`true`}),`Send Message`]})}),(0,_.jsx)(`span`,{className:`cu-note`,children:`We never share your details.`})]})]})]}):null,n.showMap?(0,_.jsxs)(`div`,{className:`cu-find`,children:[(0,_.jsx)(`h2`,{children:`Find Us`}),(0,_.jsx)(`div`,{className:`cu-map`,children:(0,_.jsx)(`iframe`,{src:n.mapSrc,title:`Find Us Map`,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`})})]}):null]})}),(0,_.jsx)(h,{})]})}export{y as default};