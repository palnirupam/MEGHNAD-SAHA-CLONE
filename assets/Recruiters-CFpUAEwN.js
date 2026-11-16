import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,I as n,p as r,w as i}from"./react-vendor-CMR_y1jB.js";import{r as a,t as o}from"./recruitersSlice-BDuLNQLB.js";var s=e(n(),1),c=r(),l=e=>{let t=String(e||``).trim();return t?/^(data:|blob:|https?:\/\/)/i.test(t)?t:t.startsWith(`//`)?`https:${t}`:t.startsWith(`/`)?`${window.location.origin}${t}`:t.includes(`.`)&&!t.includes(` `)?`https://${t.replace(/^\/+/,``)}`:`${window.location.origin}/${t.replace(/^\/+/,``)}`:``},u=e=>e?.logo_url_full||e?.logo_url||e?.image_url||e?.image_full_url||e?.logo||e?.image||e?.src||e?.url||e?.attachment?.url||``;function d(){let e=t(),n=i(a),r=i(e=>e.recruiters?.loading??!1),d=i(e=>e.recruiters?.error??null);(0,s.useEffect)(()=>{e(o())},[e]);let f=(0,s.useMemo)(()=>Array.isArray(n)?n.slice(0,36):[],[n]),p=f.length>=10,m=Math.max(24,Math.min(70,Math.round(f.length*1.15)));return(0,c.jsx)(`section`,{className:`mb-8`,children:(0,c.jsxs)(`div`,{className:`orc-home-shell orc-scope`,children:[(0,c.jsxs)(`div`,{className:`orc-wrap`,children:[(0,c.jsxs)(`div`,{className:`orc-head`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`h2`,{className:`orc-title`,children:[(0,c.jsx)(`i`,{className:`fa-solid fa-building`}),`Our Recruiters`]}),(0,c.jsx)(`div`,{className:`orc-sub`,children:`Companies that recruit from our campus`})]}),(0,c.jsxs)(`a`,{className:`orc-viewall`,href:`/our-recruiters`,children:[`View All `,(0,c.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]}),r?(0,c.jsx)(`div`,{className:`orc-skeleton`,children:Array.from({length:18}).map((e,t)=>(0,c.jsx)(`div`,{className:`orc-sk-tile`},t))}):d?(0,c.jsx)(`div`,{className:`orc-state`,children:`Failed to load recruiters.`}):f.length?(0,c.jsx)(`div`,{className:`orc-rail`,children:(0,c.jsx)(`div`,{className:`orc-track`,"data-anim":p?`1`:`0`,children:[0,1].slice(0,p?2:1).map(e=>(0,c.jsx)(`div`,{className:`orc-grid-wrap`,children:(0,c.jsx)(`div`,{className:`orc-grid`,children:f.map((t,n)=>{let r=t?.name||t?.title||t?.company||t?.label||`Recruiter`,i=u(t),a=i?l(i):``;return(0,c.jsx)(`a`,{className:`orc-tile`,href:`/our-recruiters`,"aria-label":`View all recruiters`,children:(0,c.jsxs)(`span`,{className:`orc-tile__inner`,children:[(0,c.jsx)(`span`,{className:`orc-tile__fallback`,style:{display:a?`none`:`flex`},children:r}),a?(0,c.jsx)(`img`,{className:`orc-logo`,src:a,alt:r,loading:`lazy`,decoding:`async`,referrerPolicy:`no-referrer`,onError:e=>{e.currentTarget.remove();let t=e.currentTarget.parentElement?.querySelector(`.orc-tile__fallback`);t&&(t.style.display=`flex`)}}):null]})},`${e}-${t?.id||t?.uuid||n}`)})})},e))})}):(0,c.jsx)(`div`,{className:`orc-state`,children:`No recruiters found.`})]}),(0,c.jsx)(`style`,{children:`
          .orc-scope{
            --orc-brand: #8f2f2f;
            --orc-ink: #0f172a;
            --orc-muted: #64748b;
            --orc-page: #f6f7fb;
            --orc-card: #ffffff;
            --orc-line: rgba(15, 23, 42, .10);
            --orc-outer-line: rgba(201, 75, 80, .24);
            --orc-shadow: 0 10px 24px rgba(2, 6, 23, .08);
            --orc-marquee-duration: ${m}s;
            --orc-tile-h: 110px;
          }

          .orc-home-shell{
            max-width: 100%;
            margin: 0 auto;
          }

          .orc-wrap{
            background: var(--surface);
            border: 1px solid var(--orc-outer-line);
            border-radius: 18px;
            padding: 24px 16px 24px;
            position: relative;
            overflow: hidden;
          }

          .orc-head{
            background: var(--orc-card);
            border: 1px solid var(--orc-line);
            border-radius: 20px;
            box-shadow: 0 6px 16px rgba(2,6,23,.04);
            padding: 18px 18px;
            margin-bottom: 16px;
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .orc-title{
            margin: 0;
            font-weight: 950;
            letter-spacing: .2px;
            color: var(--orc-ink);
            font-size: 28px;
            display: flex;
            align-items: center;
            gap: 12px;
            line-height: 1.1;
          }

          .orc-title i{
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 7px;
            background: var(--orc-brand);
            color: #fff;
            font-size: 15px;
          }

          .orc-sub{
            margin: 8px 0 0;
            color: var(--orc-muted);
            font-size: 14px;
            font-weight: 500;
          }

          .orc-viewall{
            border: 1px solid #d9e3e0;
            background: #fbfcfc;
            color: var(--orc-ink);
            border-radius: 999px;
            padding: 12px 20px;
            font-size: 14px;
            font-weight: 900;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 10px rgba(2,6,23,.04);
            transition: all .2s ease;
            white-space: nowrap;
          }

          .orc-viewall:hover{
            transform: translateY(-1px);
            border-color: rgba(201,75,80,.35);
            color: var(--orc-brand);
          }

          .orc-rail{
            background: var(--orc-card);
            border: 1px solid var(--orc-line);
            border-radius: 18px;
            box-shadow: var(--orc-shadow);
            overflow: hidden;
            position: relative;
          }

          .orc-rail:before,
          .orc-rail:after{
            content:'';
            position:absolute;
            top:0;
            bottom:0;
            width:52px;
            z-index:3;
            pointer-events:none;
          }

          .orc-rail:before{
            left:0;
            background: linear-gradient(90deg, var(--orc-card), rgba(255,255,255,0));
          }

          .orc-rail:after{
            right:0;
            background: linear-gradient(270deg, var(--orc-card), rgba(255,255,255,0));
          }

          .orc-track{
            display:flex;
            width:max-content;
            will-change: transform;
          }

          .orc-track[data-anim="1"]{
            animation: orcGridMove var(--orc-marquee-duration) linear infinite;
          }

          .orc-rail:hover .orc-track[data-anim="1"]{
            animation-play-state: paused;
          }

          @keyframes orcGridMove{
            from{ transform: translateX(0); }
            to{ transform: translateX(-50%); }
          }

          .orc-grid-wrap{
            flex: 0 0 auto;
            width: min(1320px, calc(100vw - 56px));
            padding: 0;
            max-height: calc(var(--orc-tile-h) * 4);
            overflow: hidden;
          }

          .orc-grid{
            display:grid;
            grid-template-columns: repeat(9, minmax(0,1fr));
            align-items:stretch;
            gap:0;
            grid-auto-rows: var(--orc-tile-h);
            grid-auto-flow: dense;
          }

          .orc-tile{
            margin:0;
            border-radius:12px;
            overflow:hidden;
            background:#fff;
            border:1px solid rgba(15,23,42,.06);
            box-shadow: 0 1px 3px rgba(2,6,23,.06), 0 6px 12px rgba(2,6,23,.04);
            transition:all .2s cubic-bezier(.4,0,.2,1);
            height:var(--orc-tile-h);
            grid-column:span 1;
            grid-row:span 1;
            position:relative;
            outline:none;
            text-decoration:none;
            display:block;
          }

          .orc-tile:nth-child(12n + 2),
          .orc-tile:nth-child(12n + 4),
          .orc-tile:nth-child(12n + 6),
          .orc-tile:nth-child(12n + 7),
          .orc-tile:nth-child(12n + 9),
          .orc-tile:nth-child(12n + 11){
            grid-column: span 2;
          }

          .orc-tile:hover,
          .orc-tile:focus{
            transform:translateY(-3px);
            box-shadow: 0 4px 6px rgba(2,6,23,.08), 0 16px 28px rgba(2,6,23,.12);
            border-color: rgba(143,47,47,.20);
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
            height:var(--orc-tile-h);
          }

          .orc-sk-tile:before{
            content:'';
            position:absolute;
            inset:0;
            transform:translateX(-60%);
            background:linear-gradient(90deg,transparent,rgba(148,163,184,.22),transparent);
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

          @media (max-width: 1200px){
            .orc-grid{ grid-template-columns: repeat(5, minmax(0,1fr)); }
          }

          @media (max-width: 992px){
            .orc-grid{ grid-template-columns: repeat(4, minmax(0,1fr)); }
          }

          @media (max-width: 768px){
            .orc-wrap{ padding: 16px 12px 16px; }
            .orc-grid{ grid-template-columns: repeat(3, minmax(0,1fr)); }
            .orc-title{ font-size: 24px; }
            .orc-grid-wrap{ width: min(1320px, calc(100vw - 48px)); }
          }

          @media (max-width: 520px){
            .orc-grid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
            .orc-title{ font-size: 22px; }
          }

          @media (hover: none){
            .orc-rail{
              overflow-x:auto;
              -webkit-overflow-scrolling:touch;
            }

            .orc-track[data-anim="1"]{
              animation:none;
            }

            .orc-rail:before,
            .orc-rail:after{
              display:none;
            }

            .orc-rail::-webkit-scrollbar{
              display:none;
            }

            .orc-rail{
              scrollbar-width:none;
            }
          }
        `})]})})}export{d as default};