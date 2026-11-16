import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{C as t,E as n,I as r,k as i,p as a,w as o}from"./react-vendor-CMR_y1jB.js";import{o as s,t as c}from"./headerSlice-BsCWhg37.js";var l=e(r(),1),u=a(),d=`https://biswakarma.msit.edu.in/api/placed-students/public/index`,f=`https://biswakarma.msit.edu.in`,p=8,m=String.raw`
.placed-page {
  --ps-bg: var(--page-bg, #f0f2f5);
  --ps-card: var(--surface, #ffffff);
  --ps-maroon: var(--primary-color, #9b1c1c);
  --ps-maroon-dark: var(--secondary-color, #7a1515);
  --ps-maroon-tint: var(--light-color, #f7e9e9);
  --ps-text: var(--text-color, #1c1e21);
  --ps-text-2: var(--muted-color, #65676b);
  --ps-text-3: #8a8d91;
  --ps-border: var(--border-color, #e4e6eb);
  --ps-border-2: #ced0d4;
  --ps-radius: 14px;
  --ps-radius-sm: 10px;
  --ps-shadow: 0 1px 2px rgba(0,0,0,.10), 0 1px 3px rgba(0,0,0,.04);
  --ps-shadow-lift: 0 10px 28px rgba(15,17,20,.14), 0 2px 6px rgba(15,17,20,.06);
  --ps-shadow-card: 0 1px 2px rgba(0,0,0,.08);
  --ps-font: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --ps-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;

  background: var(--ps-bg);
  color: var(--ps-text);
  font-family: var(--ps-font);
  min-height: 100vh;
  padding-bottom: 70px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.placed-page * { box-sizing: border-box; }
.placed-page button { font-family: inherit; }
.placed-page :focus-visible {
  outline: 3px solid rgba(155,28,28,.25);
  outline-offset: 2px;
  border-radius: 8px;
}

.placed-crumb {
  max-width: 1480px;
  margin: 0 auto;
  padding: 14px 20px 0;
  font-size: 13px;
  color: var(--ps-text-3);
  display: flex;
  align-items: center;
  gap: 8px;
}
.placed-crumb strong {
  color: var(--ps-text-2);
  font-weight: 700;
}

.placed-head {
  max-width: 1480px;
  margin: 6px auto 0;
  padding: 10px 20px 14px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.placed-title-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.placed-cap-badge {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--ps-maroon);
  color: #fff;
  display: grid;
  place-items: center;
  flex: none;
  box-shadow: var(--ps-shadow);
}
.placed-cap-badge svg {
  width: 26px;
  height: 26px;
}
.placed-head h1 {
  margin: 0;
  font-size: 28px;
  letter-spacing: -.02em;
  line-height: 1.1;
}
.placed-head p {
  margin: 3px 0 0;
  color: var(--ps-text-2);
  font-size: 14px;
}
.placed-result-count {
  font-size: 13px;
  color: var(--ps-text-2);
  background: #fff;
  border: 1px solid var(--ps-border);
  padding: 8px 14px;
  border-radius: 999px;
  box-shadow: var(--ps-shadow-card);
  white-space: nowrap;
}
.placed-result-count b {
  color: var(--ps-maroon);
}

.placed-shell {
  max-width: 1480px;
  margin: 0 auto;
  padding: 4px 20px 80px;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 20px;
  align-items: start;
}
/* Deep-linked to a department: drop the sidebar + header, cards use full width. */
.placed-shell.no-sidebar {
  grid-template-columns: 1fr;
  padding-top: 20px;
}

.placed-sidebar {
  position: sticky;
  top: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  padding-right: 2px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.placed-sidebar::-webkit-scrollbar { width: 0; height: 0; display: none; }

.placed-drawer-head {
  display: none;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.placed-drawer-head strong {
  font-size: 16px;
}
.placed-drawer-close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #fff;
  display: grid;
  place-items: center;
  box-shadow: var(--ps-shadow-card);
  color: var(--ps-text-2);
}

.placed-panel {
  background: var(--ps-card);
  border-radius: var(--ps-radius);
  box-shadow: var(--ps-shadow-card);
  padding: 14px;
  border: 1px solid rgba(28,30,33,.04);
}
.placed-panel h2 {
  margin: 2px 4px 10px;
  font-size: 12px;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--ps-text-3);
  font-weight: 800;
}

.placed-search-box {
  position: relative;
}
.placed-search-box svg {
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--ps-text-3);
  pointer-events: none;
}
.placed-search-box input {
  width: 100%;
  border: 1px solid var(--ps-border-2);
  background: #f5f6f7;
  border-radius: 999px;
  padding: 11px 14px 11px 40px;
  font-size: 14px;
  color: var(--ps-text);
  transition: border-color .15s, background .15s, box-shadow .15s;
}
.placed-search-box input::placeholder {
  color: var(--ps-text-3);
}
.placed-search-box input:focus {
  outline: none;
  background: #fff;
  border-color: var(--ps-maroon);
  box-shadow: 0 0 0 3px var(--ps-maroon-tint);
}

.placed-clear-filters {
  margin-top: 10px;
  border: 1px solid var(--ps-maroon-tint);
  background: var(--ps-maroon-tint);
  color: var(--ps-maroon);
  width:100%;
  font-size: 13px;
  font-weight: 800;
  padding: 8px 14px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: background .15s, border-color .15s;
}
.placed-clear-filters:hover {
  background: var(--ps-maroon);
  border-color: var(--ps-maroon);
  color: #fff;
}
.placed-clear-filters svg {
  width: 14px;
  height: 14px;
  flex: none;
}
.placed-clear-filters[hidden] {
  display: none;
}

.placed-snapshot {
  background: linear-gradient(150deg, var(--ps-maroon), var(--ps-maroon-dark));
  color: #fff;
}
.placed-snapshot h2 {
  color: rgba(255,255,255,.75);
}
.placed-snap-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.placed-snap-cell .value {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -.02em;
  line-height: 1;
}
.placed-snap-cell .key {
  font-size: 12px;
  color: rgba(255,255,255,.78);
  margin-top: 5px;
}

.placed-nav-list,
.placed-sort-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.placed-nav-item,
.placed-sort-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  border: none;
  background: transparent;
  padding: 9px 10px;
  border-radius: var(--ps-radius-sm);
  font-size: 14.5px;
  color: var(--ps-text);
  text-align: left;
  transition: background .14s, color .14s, border-color .14s;
  cursor: pointer;
}
.placed-nav-item:hover,
.placed-sort-btn:hover {
  background: var(--ps-maroon-tint);
}
.placed-nav-item.active,
.placed-sort-btn.active {
  background: var(--ps-maroon);
  color: #fff;
}
.placed-nav-item .ico {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex: none;
  background: var(--ps-maroon-tint);
  color: var(--ps-maroon);
}
.placed-nav-item.active .ico {
  background: rgba(255,255,255,.22);
  color: #fff;
}
.placed-nav-item .label,
.placed-sort-btn .label {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.placed-nav-item .count {
  font-size: 12.5px;
  color: var(--ps-text-3);
  font-variant-numeric: tabular-nums;
  background: #f0f2f5;
  padding: 2px 9px;
  border-radius: 999px;
  font-weight: 700;
}
.placed-nav-item.active .count {
  background: rgba(255,255,255,.22);
  color: #fff;
}
.placed-rec-logo {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  flex: none;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: -.02em;
}
.placed-rec-logo-img {
  background: #fff;
  border: 1px solid var(--ps-border);
  overflow: hidden;
  padding: 3px;
}
.placed-rec-logo-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.placed-nav-item.active .placed-rec-logo-img {
  background: #fff;
}
.placed-sort-btn {
  border: 1px solid var(--ps-border);
  background: #fff;
  gap: 10px;
}
.placed-sort-btn svg {
  width: 17px;
  height: 17px;
  color: var(--ps-text-3);
  flex: none;
}
.placed-sort-btn.active svg {
  color: #fff;
}

.placed-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.placed-year-chip {
  border: 1px solid var(--ps-border-2);
  background: #fff;
  padding: 7px 15px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  color: var(--ps-text-2);
  transition: all .14s;
  cursor: pointer;
}
.placed-year-chip:hover {
  background: var(--ps-maroon-tint);
  border-color: var(--ps-maroon-tint);
  color: var(--ps-maroon);
}
.placed-year-chip.active {
  background: var(--ps-maroon);
  border-color: var(--ps-maroon);
  color: #fff;
}

.placed-feed {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

/* Compact sizing for the 4-up grid */
.placed-feed .placed-post-head { gap: 9px; padding: 11px 12px 8px; }
.placed-feed .placed-avatar { width: 36px; height: 36px; font-size: 13px; }
.placed-feed .placed-name { font-size: 13.5px; }
.placed-feed .placed-sub { font-size: 11px; }
.placed-feed .placed-caption { padding: 2px 12px 10px; font-size: 12.5px; line-height: 1.4; }
.placed-feed .placed-note-html { padding-top: 9px; }
.placed-feed .placed-details-title { padding: 10px 12px 0; font-size: 10px; text-align: center; }
.placed-feed .placed-stats { padding: 8px 12px 12px; }
.placed-feed .placed-stat-icons { gap: 7px; }
.placed-feed .placed-stat-icon { width: 28px; height: 28px; }
.placed-feed .placed-stat-value { font-size: 12.5px; }
.placed-feed .placed-divider { margin: 10px 12px 0; }
.placed-feed .placed-actions { padding: 0 12px 12px; gap: 6px; }
.placed-feed .placed-action-link { padding: 8px 10px; font-size: 12px; }
.placed-feed .placed-watermark { width: 34px; height: 34px; top: 8px; left: 8px; }
.placed-feed .placed-recruiter-logos img { width: 30px; height: 30px; }

.placed-post {
  position: relative;
  background: var(--ps-card);
  border-radius: var(--ps-radius);
  box-shadow: var(--ps-shadow);
  overflow: hidden;
  transition: transform .2s cubic-bezier(.2,.7,.3,1), box-shadow .2s;
  animation: placedRise .42s cubic-bezier(.2,.7,.3,1) both;
  animation-delay: var(--delay, 0ms);
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(28,30,33,.04);
}
.placed-media .placed-watermark {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 42px;
  height: 42px;
  object-fit: contain;
  pointer-events: none;
  z-index: 2;
  background: transparent;
}
.placed-media .placed-recruiter-logos {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
  max-width: 60%;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.placed-media .placed-recruiter-logos img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  background: #fff;
  border: 1px solid var(--ps-border);
  border-radius: 8px;
  padding: 4px;
  box-shadow: var(--ps-shadow-card);
}
@keyframes placedRise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .placed-post { animation: none; }
}
.placed-post:hover {
  transform: translateY(-4px);
  box-shadow: var(--ps-shadow-lift);
}

.placed-post-head {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 14px 16px 10px;
}
.placed-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex: none;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 800;
  font-size: 16px;
  box-shadow: 0 0 0 3px #fff, 0 1px 3px rgba(0,0,0,.18);
  letter-spacing: -.01em;
  overflow: hidden;
  background: var(--avatar-bg, var(--ps-maroon));
}
.placed-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.placed-who {
  flex: 1;
  min-width: 0;
}
.placed-name {
  font-weight: 800;
  font-size: 15.5px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.placed-sub {
  font-size: 12.5px;
  color: var(--ps-text-2);
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
}
.placed-sub .dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--ps-text-3);
}
.placed-status-pill {
  border: none;
  background: #f0f2f5;
  color: var(--ps-text-2);
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 800;
  padding: 5px 9px;
  text-transform: capitalize;
  white-space: nowrap;
}
.placed-status-pill.featured {
  background: var(--ps-maroon-tint);
  color: var(--ps-maroon);
}

.placed-caption {
  padding: 2px 16px 12px;
  font-size: 14.5px;
  line-height: 1.45;
  color: var(--ps-text);
}
.placed-caption .highlight {
  color: var(--ps-maroon);
  font-weight: 800;
}
.placed-note {
  display: block;
  margin-top: 7px;
  color: var(--ps-text-2);
  font-size: 13px;
  line-height: 1.35;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.placed-note-html {
  padding-top: 12px;
}
.placed-note-html > *:first-child { margin-top: 0; }
.placed-note-html > *:last-child { margin-bottom: 0; }
.placed-note-html p { margin: 0 0 8px; }
.placed-note-html a {
  color: var(--ps-maroon);
  font-weight: 700;
  text-decoration: none;
}
.placed-note-html a:hover { text-decoration: underline; }
.placed-note-html strong, .placed-note-html b { font-weight: 800; }
.placed-note-html ul, .placed-note-html ol { margin: 0 0 8px; padding-left: 20px; }
.placed-note-html img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 6px 0;
}

.placed-media {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: var(--media-bg, #e9e6e2);
}
.placed-media > img,
.placed-media > .placed-canvas {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  -webkit-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  pointer-events: none;
}
.placed-media > .placed-canvas {
  background: var(--media-bg, #e9e6e2);
}
.placed-media-shield {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: transparent;
}
.placed-media-fallback {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: var(--media-bg, linear-gradient(150deg, #f7e9e9, #f3f1ef));
}
.placed-mono-avatar {
  width: 42%;
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: clamp(34px, 8vw, 58px);
  font-weight: 900;
  letter-spacing: -.02em;
  box-shadow: 0 8px 30px rgba(0,0,0,.18);
  background: var(--avatar-bg, var(--ps-maroon));
}
.placed-media-dummy {
  flex-direction: column;
  gap: 14px;
  background: linear-gradient(150deg, #f3f4f6, #e9eaee);
}
.placed-dummy-avatar {
  width: 46%;
  max-width: 110px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #fff;
  color: #b9bcc4;
  box-shadow: 0 6px 20px rgba(0,0,0,.08);
}
.placed-dummy-avatar svg {
  width: 56%;
  height: 56%;
}
.placed-dummy-text {
  max-width: 84%;
  font-size: 12.5px;
  font-weight: 700;
  color: var(--ps-text-3);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.placed-media-tag {
  position: absolute;
  left: 12px;
  bottom: 12px;
  font-family: var(--ps-mono);
  font-size: 10.5px;
  letter-spacing: .04em;
  color: rgba(255,255,255,.92);
  background: rgba(20,20,20,.42);
  padding: 4px 9px;
  border-radius: 999px;
  backdrop-filter: blur(4px);
}

.placed-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 13px 16px 4px;
}
.placed-chip {
  font-size: 12.5px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f0f2f5;
  color: var(--ps-text-2);
  min-width: 0;
  max-width: 100%;
}
.placed-chip strong {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.placed-chip.brand {
  background: var(--ps-maroon-tint);
  color: var(--ps-maroon);
}
.placed-chip .swatch {
  width: 9px;
  height: 9px;
  border-radius: 3px;
  flex: none;
  background: var(--company-color, var(--ps-maroon));
}

.placed-details-title {
  padding: 12px 16px 0;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ps-text-3);
}
.placed-stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px 16px;
}
.placed-stat-icons {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.placed-stat-btn {
  flex: none;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  line-height: 0;
}
.placed-stat-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--ps-maroon-tint);
  color: var(--ps-maroon);
  border: 1px solid transparent;
  transition: background .15s, border-color .15s, transform .15s;
}
.placed-stat-icon svg {
  width: 15px;
  height: 15px;
}
.placed-stat-btn:hover .placed-stat-icon,
.placed-stat-btn.is-active .placed-stat-icon {
  background: var(--ps-maroon);
  color: #fff;
  border-color: var(--ps-maroon);
  transform: translateY(-1px);
}
/* Detail panel opens BELOW the icon row */
.placed-stat-detail {
  width: 100%;
  max-height: 0;
  overflow: hidden;
  text-align: center;
  opacity: 0;
  transition: max-height .25s cubic-bezier(.2,.7,.3,1), opacity .2s, margin-top .2s;
}
.placed-stat-detail.is-open {
  max-height: 80px;
  opacity: 1;
  margin-top: 9px;
}
.placed-stat-label {
  display: block;
  font-size: 10px;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: var(--ps-text-3);
  line-height: 1;
  margin-bottom: 4px;
}
.placed-stat-value {
  display: block;
  max-width: 100%;
  font-size: 13.5px;
  font-weight: 850;
  line-height: 1.2;
  color: var(--ps-text);
  word-break: break-word;
}
.placed-stat-value.ctc {
  color: var(--ps-maroon);
}

.placed-actions {
  display: flex;
  gap: 8px;
  padding: 0 16px 16px;
  margin-top: auto;
}
.placed-action-link {
  flex: 1;
  text-decoration: none;
  border: 1px solid var(--ps-border);
  background: #fff;
  color: var(--ps-text);
  border-radius: 10px;
  padding: 9px 12px;
  font-size: 13px;
  font-weight: 800;
  text-align: center;
  transition: all .14s;
}
.placed-action-link.primary {
  background: var(--ps-maroon);
  border-color: var(--ps-maroon);
  color: #fff;
}
.placed-action-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 14px rgba(0,0,0,.08);
}

.placed-state,
.placed-empty,
.placed-loader,
.placed-end-msg {
  grid-column: 1 / -1;
}
.placed-empty,
.placed-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--ps-text-2);
  background: #fff;
  border-radius: var(--ps-radius);
  box-shadow: var(--ps-shadow-card);
}
.placed-empty-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--ps-maroon-tint);
  color: var(--ps-maroon);
  display: grid;
  place-items: center;
  margin: 0 auto 16px;
}
.placed-empty h3,
.placed-state h3 {
  margin: 0 0 6px;
  font-size: 18px;
  color: var(--ps-text);
}
.placed-empty p,
.placed-state p {
  margin: 0;
}

.placed-skeleton {
  background: var(--ps-card);
  border-radius: var(--ps-radius);
  box-shadow: var(--ps-shadow);
  overflow: hidden;
  padding: 14px 16px;
}
.placed-sk {
  background: #e7e9ed;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.placed-sk::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.7), transparent);
  transform: translateX(-100%);
  animation: placedSweep 1.2s infinite;
}
@keyframes placedSweep { to { transform: translateX(100%); } }
.placed-sk-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.placed-sk-circ { width: 44px; height: 44px; border-radius: 50%; }
.placed-sk-ln1 { width: 45%; height: 12px; }
.placed-sk-ln2 { width: 30%; height: 10px; margin-top: 7px; }
.placed-sk-block { width: 100%; aspect-ratio: 4/3; border-radius: 10px; margin: 14px 0; }
.placed-sk-pill { width: 70px; height: 22px; border-radius: 999px; }
.placed-sk-pills { display: flex; gap: 8px; }

.placed-sentinel {
  grid-column: 1 / -1;
  height: 1px;
  width: 100%;
}
.placed-end-msg {
  text-align: center;
  color: var(--ps-text-3);
  font-size: 13px;
  padding: 12px 0 0;
}

.placed-filter-fab {
  display: none;
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 40;
  border: none;
  background: var(--ps-maroon);
  color: #fff;
  padding: 14px 20px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 800;
  box-shadow: 0 8px 24px rgba(123,21,21,.42);
  align-items: center;
  gap: 9px;
}
.placed-scrim {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.45);
  z-index: 45;
  opacity: 0;
  transition: opacity .25s;
}
.placed-scrim.open {
  display: block;
  opacity: 1;
}

.dynamic-navbar .navbar-nav .dropdown-menu{
  position: absolute !important;
  inset: auto !important;
}
.dynamic-navbar .dropdown-menu.is-portaled{
  position: fixed !important;
}

@media (max-width: 1280px) {
  .placed-feed { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 1024px) {
  .placed-feed { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 900px) {
  .placed-shell { grid-template-columns: 1fr; }
  .placed-feed { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .placed-filter-fab { display: inline-flex; }
  .placed-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 86%;
    max-width: 340px;
    max-height: none;
    background: var(--ps-bg);
    padding: 16px;
    margin: 0;
    box-shadow: 8px 0 30px rgba(0,0,0,.2);
    transform: translateX(-105%);
    transition: transform .28s cubic-bezier(.2,.7,.3,1);
  }
  .placed-sidebar.open { transform: none; }
  .placed-drawer-head { display: flex; }
}

@media (max-width: 560px) {
  .placed-feed { grid-template-columns: 1fr; }
  .placed-head { padding-left: 14px; padding-right: 14px; }
  .placed-shell { padding-left: 14px; padding-right: 14px; }
  .placed-crumb { padding-left: 14px; padding-right: 14px; }
  .placed-head h1 { font-size: 23px; }
  .placed-cap-badge { width: 42px; height: 42px; }
  .placed-result-count { width: 100%; text-align: center; }
  .placed-actions { flex-direction: column; }
}
`,h=e=>Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.data?.data)?e.data.data:Array.isArray(e?.items)?e.items:[],g=(e,t)=>{for(let n of t){let t=e?.[n];if(t!=null&&String(t).trim()!==``)return t}return``},_=e=>String(e??``).replace(/<[^>]*>/g,` `).replace(/&nbsp;/gi,` `).replace(/&amp;/gi,`&`).replace(/&quot;/gi,`"`).replace(/&#039;/gi,`'`).replace(/&apos;/gi,`'`).replace(/&lt;/gi,`<`).replace(/&gt;/gi,`>`).replace(/\s+/g,` `).trim(),v=e=>String(e||``).toLowerCase().trim().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``),y=e=>{let t=_(e);if(!t)return{program:``,company:``,text:``};let n=t.split(`|`).map(e=>e.trim()).filter(Boolean);return n.length>=2?{program:n[0],company:n.slice(1).join(` | `),text:t}:{program:``,company:``,text:t}},b=e=>{let t=String(e||``).trim();return t?/^(data:|blob:|https?:\/\/|mailto:|tel:)/i.test(t)?t:t.startsWith(`//`)?`https:${t}`:t.startsWith(`/`)?`${f}${t}`:`${f}/${t.replace(/^\/+/,``)}`:``},x=e=>{let t=String(e||``).trim();if(!t)return null;let n=t.includes(`T`)?t:t.replace(` `,`T`),r=new Date(n);return Number.isNaN(r.getTime())?null:r},S=e=>{let t=x(e);if(!t)return``;try{return new Intl.DateTimeFormat(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`}).format(t)}catch{return String(e||``)}},C=e=>{let t=x(e.offer_date)||x(e.joining_date)||x(e.created_at);return t?String(t.getFullYear()):``},w=e=>{let t=String(e||`Placed Student`).trim().split(/\s+/).filter(Boolean);return`${t[0]?.[0]||`P`}${t.length>1?t[t.length-1]?.[0]:t[0]?.[1]||`S`}`.toUpperCase()},T=e=>{let t=0,n=String(e||``);for(let e=0;e<n.length;e+=1)t=t*31+n.charCodeAt(e)>>>0;return t},E=[`#9B1C1C`,`#7A1515`,`#8F3B3B`,`#6B4E71`,`#386A6B`,`#805A2D`,`#4B5563`,`#6D2DD6`],D=e=>E[T(e)%E.length],O=e=>E[(T(e)+3)%E.length],ee=e=>{let t=_(e).split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[1][0]}`.toUpperCase():`CO`},k=e=>{if(e==null||e===``)return null;let t=String(e).replace(/,/g,``).match(/\d+(\.\d+)?/);if(!t)return null;let n=Number(t[0]);return Number.isFinite(n)&&n>0?n:null},A=e=>{let t=_(e),n=k(e);return!t&&!n?`Not Published`:/lpa|lakhs?|₹|rs\.?/i.test(t)?t:n?`₹${n.toFixed(n%1?1:0)} LPA`:t},te=e=>{let t=y(e.note),n=Array.isArray(e.recruiters)?e.recruiters:[],r=n.map(e=>_(g(e,[`name`,`title`,`company_name`,`recruiter_name`]))).filter(Boolean).join(`, `)||_(g(e,[`company`,`company_name`,`recruiter_name`]))||t.company,i=n.map(e=>({src:b(g(e,[`logo_url_full`,`logo_url`])),title:_(g(e,[`name`,`title`,`company_name`]))})).filter(e=>e.src),a=i[0]?.src||``,o=_(g(e,[`program_name`,`course_name`,`degree`]))||t.program,s=_(g(e,[`user_name`,`student_name`,`name`]))||`Placed Student`,c=_(g(e,[`department_title`,`department_name`]))||`Department`,l=String(g(e,[`department_uuid`,`department_slug`,`department_id`,`department_title`])),u=b(g(e,[`image`,`user_image`,`photo`,`image_url`])),d=_(g(e,[`role_title`,`role`,`designation`,`job_title`])),f=A(e.ctc),p=k(e.ctc),m=S(e.offer_date),h=S(e.joining_date),w=S(e.created_at),T=C(e),E=_(e.user_uuid||e.uuid||``),D=`/placed-students/view/${_(g(e,[`user_slug`,`slug`]))||v(s)||`placed-student`}`,O=b(e.offer_letter_full_url),ee=Number(e.is_featured_home)===1,te=_(e.status)||`active`;return{id:e.uuid||e.id||`${s}-${c}-${r}`,raw:e,name:s,department:c,departmentKey:l,departmentSlug:_(e.department_slug),departmentUuid:_(e.department_uuid),program:o,company:r||`Recruiter Not Published`,companyLogo:a,recruiterLogos:i,role:d,ctc:f,ctcNumber:p,offerDate:m,joiningDate:h,createdDate:w,year:T,image:u,noteText:t.text,noteHtml:String(e.note??``).trim(),profileUrl:D,offerUrl:O,userUuid:E,isFeatured:ee,status:te,sortOrder:Number.isFinite(Number(e.sort_order))?Number(e.sort_order):999999,createdTime:(x(e.created_at)||x(e.offer_date)||new Date(0)).getTime()}},j=(e,t,n)=>{let r=new Map;return e.forEach(e=>{let i=String(t(e)||``).trim(),a=_(n(e)||i);if(!i||!a)return;let o=r.get(i);o?o.count+=1:r.set(i,{key:i,label:a,count:1})}),Array.from(r.values()).sort((e,t)=>e.label.localeCompare(t.label))};function M(){return(0,u.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`circle`,{cx:`11`,cy:`11`,r:`7`}),(0,u.jsx)(`path`,{d:`m21 21-4.3-4.3`})]})}function ne(){return(0,u.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M22 10 12 5 2 10l10 5 10-5Z`}),(0,u.jsx)(`path`,{d:`M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5`})]})}function N(){return(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`M3 21h18M5 21V8h6v13M11 21V4h8v17M7 11h2M7 15h2M14 8h2M14 12h2M14 16h2`})})}function P(){return(0,u.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M3 8h18v12H3z`}),(0,u.jsx)(`path`,{d:`M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`})]})}function F(){return(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`M6 4h11M6 9h11M6 9c5 0 8 2 8 5s-3 5-8 5h8M6 14h4`})})}function I(){return(0,u.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`16`,rx:`2`}),(0,u.jsx)(`path`,{d:`M3 9h18M8 3v4M16 3v4`})]})}function L(){return(0,u.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`circle`,{cx:`12`,cy:`8`,r:`4`}),(0,u.jsx)(`path`,{d:`M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7`})]})}function R(){return(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`M18 6 6 18M6 6l12 12`})})}function re(){return(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`M3 5h18M6 12h12M10 19h4`})})}function ie({type:e}){return e===`recent`?(0,u.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M12 8v4l3 2`}),(0,u.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`})]}):e===`company`?(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`M3 6h13M3 12h9M3 18h5M17 8l4 4-4 4M21 12H9`})}):(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`M4 7h16M4 12h12M4 17h8`})})}function z(){return(0,u.jsxs)(`div`,{className:`placed-skeleton`,children:[(0,u.jsxs)(`div`,{className:`placed-sk-row`,children:[(0,u.jsx)(`div`,{className:`placed-sk placed-sk-circ`}),(0,u.jsxs)(`div`,{style:{flex:1},children:[(0,u.jsx)(`div`,{className:`placed-sk placed-sk-ln1`}),(0,u.jsx)(`div`,{className:`placed-sk placed-sk-ln2`})]})]}),(0,u.jsx)(`div`,{className:`placed-sk placed-sk-block`}),(0,u.jsxs)(`div`,{className:`placed-sk-pills`,children:[(0,u.jsx)(`div`,{className:`placed-sk placed-sk-pill`}),(0,u.jsx)(`div`,{className:`placed-sk placed-sk-pill`}),(0,u.jsx)(`div`,{className:`placed-sk placed-sk-pill`})]})]})}function ae({title:e,message:t}){return(0,u.jsxs)(`div`,{className:`placed-empty`,children:[(0,u.jsx)(`div`,{className:`placed-empty-icon`,children:(0,u.jsx)(M,{})}),(0,u.jsx)(`h3`,{children:e}),(0,u.jsx)(`p`,{children:t})]})}function B({src:e,alt:t}){let n=(0,l.useRef)(null),[r,i]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let t=n.current;if(!t||!e)return;let r=!1,a=new Image;return a.crossOrigin=`anonymous`,a.onload=()=>{if(r)return;let e=a.naturalWidth||800,n=a.naturalHeight||1e3;t.width=e,t.height=n;let o=t.getContext(`2d`);o&&o.drawImage(a,0,0,e,n),i(!0)},a.onerror=()=>{if(r)return;let n=new Image;n.onload=()=>{if(r)return;let e=n.naturalWidth||800,a=n.naturalHeight||1e3;t.width=e,t.height=a;let o=t.getContext(`2d`);o&&o.drawImage(n,0,0,e,a),i(!0)},n.src=e},a.src=e,()=>{r=!0}},[e]),(0,u.jsx)(`canvas`,{ref:n,className:`placed-canvas`,role:`img`,"aria-label":t,"data-ready":r?`1`:`0`,onContextMenu:e=>e.preventDefault()})}function V({stats:e}){let[t,n]=(0,l.useState)(null),r=t==null?null:e[t];return(0,u.jsxs)(`div`,{className:`placed-stats`,children:[(0,u.jsx)(`div`,{className:`placed-stat-icons`,children:e.map((e,r)=>(0,u.jsx)(`button`,{type:`button`,className:`placed-stat-btn${t===r?` is-active`:``}`,onMouseEnter:()=>n(r),onMouseLeave:()=>n(e=>e===r?null:e),onClick:()=>n(e=>e===r?null:r),title:e.label,"aria-label":`${e.label}: ${e.value||`Not Published`}`,"aria-expanded":t===r,children:(0,u.jsx)(`span`,{className:`placed-stat-icon`,children:e.icon})},e.label))}),(0,u.jsx)(`div`,{className:`placed-stat-detail${r?` is-open`:``}`,"aria-live":`polite`,children:r?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`span`,{className:`placed-stat-label`,children:r.label}),(0,u.jsx)(`span`,{className:`placed-stat-value${r.ctc?` ctc`:``}`,children:r.value||`Not Published`})]}):null})]})}function oe({student:e,index:t,headerLogo:r,backSearch:i}){let a=D(e.name),o=O(e.company),s=e.company||`Recruiter Not Published`;return(0,u.jsxs)(`article`,{className:`placed-post`,style:{"--delay":`${Math.min(t,8)*38}ms`,"--avatar-bg":a,"--company-color":o,"--media-bg":`linear-gradient(150deg, ${a}22, #f3f1ef)`},children:[(0,u.jsxs)(`div`,{className:`placed-post-head`,children:[(0,u.jsx)(`span`,{className:`placed-avatar`,"aria-hidden":`true`,children:e.image?(0,u.jsx)(`img`,{src:e.image,alt:``,loading:`lazy`}):w(e.name)}),(0,u.jsxs)(`div`,{className:`placed-who`,children:[(0,u.jsx)(`div`,{className:`placed-name`,title:e.name,children:e.name}),(0,u.jsx)(`div`,{className:`placed-sub`,children:(0,u.jsx)(`span`,{children:e.department})})]})]}),e.noteHtml?(0,u.jsx)(`div`,{className:`placed-caption placed-note-html`,dangerouslySetInnerHTML:{__html:e.noteHtml}}):null,(0,u.jsxs)(`div`,{className:`placed-media`,onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),children:[e.image?(0,u.jsx)(B,{src:e.image,alt:e.name}):(0,u.jsxs)(`div`,{className:`placed-media-fallback placed-media-dummy`,"aria-label":`No photo available`,children:[(0,u.jsx)(`div`,{className:`placed-dummy-avatar`,children:(0,u.jsx)(L,{})}),(0,u.jsx)(`span`,{className:`placed-dummy-text`,children:e.name})]}),(0,u.jsx)(`div`,{className:`placed-media-shield`,"aria-hidden":`true`}),r?(0,u.jsx)(`img`,{className:`placed-watermark`,src:r,alt:``,"aria-hidden":`true`,loading:`lazy`}):null,e.recruiterLogos?.length?(0,u.jsx)(`div`,{className:`placed-recruiter-logos`,"aria-label":`Recruiters`,children:e.recruiterLogos.map((e,t)=>(0,u.jsx)(`img`,{src:e.src,alt:e.title||`Recruiter`,title:e.title,loading:`lazy`},`${e.src}-${t}`))}):null]}),(0,u.jsx)(`div`,{className:`placed-details-title`,children:`Placement Details`}),(0,u.jsx)(V,{stats:[{icon:(0,u.jsx)(N,{}),label:`Company`,value:s},{icon:(0,u.jsx)(F,{}),label:`CTC`,value:e.ctc,ctc:!0},{icon:(0,u.jsx)(I,{}),label:`Placement Year`,value:e.year||`Not Published`},...e.role?[{icon:(0,u.jsx)(P,{}),label:`Role`,value:e.role}]:[]]}),e.profileUrl||e.offerUrl?(0,u.jsxs)(`div`,{className:`placed-actions`,children:[e.profileUrl?(0,u.jsx)(n,{className:`placed-action-link primary`,to:`${e.profileUrl}${i||``}`,children:`View Profile`}):null,e.offerUrl?(0,u.jsx)(`a`,{className:`placed-action-link`,href:e.offerUrl,target:`_blank`,rel:`noopener noreferrer`,children:`Offer Letter`}):null]}):null]})}function H(){let e=t(),{item:n,status:r}=o(s),a=n?.primaryLogo||``,[f,g]=(0,l.useState)([]),[_,v]=(0,l.useState)(`idle`),[y,b]=(0,l.useState)(``);(0,l.useEffect)(()=>{r===`idle`&&e(c())},[e,r]);let[x,S]=(0,l.useState)(``),[C,w]=(0,l.useState)(``),[T,E]=(0,l.useState)(`All`),[D,k]=(0,l.useState)(`All`),[A,N]=(0,l.useState)(`All`),[P,F]=(0,l.useState)(`default`),[I,L]=(0,l.useState)(p),[B,V]=(0,l.useState)(!1),H=(0,l.useMemo)(()=>{if(typeof window>`u`)return``;let e=new URLSearchParams(window.location.search);return(e.get(`dept`)||e.get(`department`)||``).trim()},[]),[se,ce]=(0,l.useState)(!1),U=(0,l.useRef)(!1),W=i(),le=(0,l.useRef)(W.key===`default`||!W.key);(0,l.useEffect)(()=>{let e=new AbortController;return(async()=>{v(`loading`),b(``);try{let t=async t=>{let n=await fetch(`${d}?per_page=60&page=${t}`,{method:`GET`,headers:{Accept:`application/json`},signal:e.signal});if(!n.ok)throw Error(`Request failed with status ${n.status}`);return n.json()},n=await t(1),r=h(n),i=Number(n?.pagination?.last_page)||1;for(let e=2;e<=i;e+=1)r.push(...h(await t(e)));g(r),v(`success`)}catch(e){if(e.name===`AbortError`)return;b(e.message||`Unable to load placed students.`),v(`error`)}})(),()=>e.abort()},[]),(0,l.useEffect)(()=>{let e=window.setTimeout(()=>{w(x.trim())},220);return()=>window.clearTimeout(e)},[x]);let G=(0,l.useMemo)(()=>h(f).map(te),[f]);(0,l.useEffect)(()=>{if(U.current||!G.length)return;if(!H){U.current=!0;return}let e=H.toLowerCase(),t=G.find(t=>t.departmentSlug?.toLowerCase()===e||t.departmentUuid?.toLowerCase()===e||String(t.departmentKey).toLowerCase()===e);t&&(E(t.departmentKey||t.department),ce(le.current)),U.current=!0},[G,H]);let K=(0,l.useMemo)(()=>{let e=new Map;return G.forEach(t=>{let n=t.departmentKey||t.department;n&&t.departmentSlug&&!e.has(n)&&e.set(n,t.departmentSlug)}),e},[G]);(0,l.useEffect)(()=>{if(!U.current||typeof window>`u`)return;let e=new URL(window.location.href);T&&T!==`All`?(e.searchParams.set(`dept`,K.get(T)||T),e.searchParams.delete(`department`)):(e.searchParams.delete(`dept`),e.searchParams.delete(`department`));let t=`${e.pathname}${e.search}${e.hash}`;t!==`${window.location.pathname}${window.location.search}${window.location.hash}`&&window.history.replaceState({},``,t)},[T,K]);let ue=(0,l.useMemo)(()=>j(G,e=>e.departmentKey||e.department,e=>e.department),[G]),de=(0,l.useMemo)(()=>j(G,e=>e.company,e=>e.company),[G]),fe=(0,l.useMemo)(()=>{let e=new Map;return G.forEach(t=>{t.company&&t.recruiterLogos?.length&&!e.has(t.company)&&e.set(t.company,t.recruiterLogos[0].src)}),e},[G]),pe=(0,l.useMemo)(()=>{let e=new Map;return G.forEach(t=>{if(!t.year)return;let n=e.get(t.year)||{year:t.year,count:0};n.count+=1,e.set(t.year,n)}),Array.from(e.values()).sort((e,t)=>Number(t.year)-Number(e.year))},[G]),q=(0,l.useMemo)(()=>{let e=C.toLowerCase(),t=G.filter(t=>!(T!==`All`&&(t.departmentKey||t.department)!==T||D!==`All`&&t.year!==D||A!==`All`&&t.company!==A||e&&![t.name,t.department,t.program,t.company,t.role,t.ctc,t.offerDate,t.joiningDate,t.createdDate,t.noteText,t.status,t.year].join(` `).toLowerCase().includes(e)));return P===`recent`?t.sort((e,t)=>t.createdTime-e.createdTime||e.name.localeCompare(t.name)):P===`company`?t.sort((e,t)=>e.company.localeCompare(t.company)||e.name.localeCompare(t.name)):P===`name`?t.sort((e,t)=>e.name.localeCompare(t.name)):t.sort((e,t)=>e.sortOrder-t.sortOrder||t.createdTime-e.createdTime||e.name.localeCompare(t.name)),t},[G,C,T,D,A,P]);(0,l.useEffect)(()=>{L(p)},[C,T,D,A,P]);let J=q.slice(0,I),Y=I<q.length,me=!!(C||T!==`All`||D!==`All`||A!==`All`||P!==`default`),X=(0,l.useRef)(null);(0,l.useEffect)(()=>{if(!Y)return;let e=X.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&L(e=>Math.min(e+p,q.length))},{rootMargin:`600px 0px`});return t.observe(e),()=>t.disconnect()},[Y,q.length,I]);let he=T&&T!==`All`?`?dept=${encodeURIComponent(K.get(T)||T)}`:``,Z=(0,l.useMemo)(()=>{let e=q.map(e=>e.ctcNumber).filter(e=>typeof e==`number`),t=e.length?Math.max(...e):null;return{total:q.length,featured:q.filter(e=>e.isFeatured).length,departments:new Set(q.map(e=>e.department).filter(Boolean)).size,recruiters:new Set(q.map(e=>e.company).filter(Boolean)).size,highest:t?`₹${t.toFixed(t%1?1:0)} LPA`:`—`}},[q]),ge=()=>{S(``),w(``),E(`All`),k(`All`),N(`All`),F(`default`),L(p),V(!1)},Q=(e,t)=>{e(t),window.innerWidth<=900&&V(!1)},_e=[{key:`default`,label:`Default Order`},{key:`recent`,label:`Most Recent`},{key:`company`,label:`Company A-Z`},{key:`name`,label:`Student A-Z`}],ve=_===`loading`||_===`idle`,ye=!/^\/placed-students\/?$/.test(W.pathname),$=se||ye;return(0,u.jsxs)(`section`,{className:`placed-page`,children:[(0,u.jsx)(`style`,{children:m}),$?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`nav`,{className:`placed-crumb`,"aria-label":`Breadcrumb`,children:[(0,u.jsx)(`span`,{children:`Placement`}),(0,u.jsx)(`span`,{children:`›`}),(0,u.jsx)(`strong`,{children:`Placed Students`})]}),(0,u.jsxs)(`header`,{className:`placed-head`,children:[(0,u.jsxs)(`div`,{className:`placed-title-wrap`,children:[(0,u.jsx)(`div`,{className:`placed-cap-badge`,children:(0,u.jsx)(ne,{})}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h1`,{children:`Placed Students`}),(0,u.jsx)(`p`,{children:`Celebrating our recent campus placements.`})]})]}),(0,u.jsxs)(`div`,{className:`placed-result-count`,children:[`Showing `,(0,u.jsx)(`b`,{children:q.length}),` placement`,q.length===1?``:`s`]})]})]}),(0,u.jsxs)(`div`,{className:`placed-shell${$?` no-sidebar`:``}`,children:[$?null:(0,u.jsxs)(`aside`,{className:`placed-sidebar${B?` open`:``}`,"aria-label":`Placement filters`,children:[(0,u.jsxs)(`div`,{className:`placed-drawer-head`,children:[(0,u.jsx)(`strong`,{children:`Filters`}),(0,u.jsx)(`button`,{className:`placed-drawer-close`,type:`button`,onClick:()=>V(!1),"aria-label":`Close filters`,children:(0,u.jsx)(R,{})})]}),(0,u.jsxs)(`div`,{className:`placed-panel`,children:[(0,u.jsxs)(`div`,{className:`placed-search-box`,children:[(0,u.jsx)(M,{}),(0,u.jsx)(`input`,{type:`search`,value:x,onChange:e=>S(e.target.value),placeholder:`Search name, company, department…`,"aria-label":`Search placed students`})]}),(0,u.jsxs)(`button`,{className:`placed-clear-filters`,type:`button`,onClick:ge,hidden:!me,children:[(0,u.jsx)(R,{}),`Clear all filters`]})]}),(0,u.jsxs)(`div`,{className:`placed-panel placed-snapshot`,children:[(0,u.jsx)(`h2`,{children:`Placement Snapshot`}),(0,u.jsxs)(`div`,{className:`placed-snap-grid`,children:[(0,u.jsxs)(`div`,{className:`placed-snap-cell`,children:[(0,u.jsx)(`div`,{className:`value`,children:Z.total}),(0,u.jsx)(`div`,{className:`key`,children:`Total Placed`})]}),(0,u.jsxs)(`div`,{className:`placed-snap-cell`,children:[(0,u.jsx)(`div`,{className:`value`,children:Z.featured}),(0,u.jsx)(`div`,{className:`key`,children:`Featured`})]}),(0,u.jsxs)(`div`,{className:`placed-snap-cell`,children:[(0,u.jsx)(`div`,{className:`value`,children:Z.departments}),(0,u.jsx)(`div`,{className:`key`,children:`Departments`})]}),(0,u.jsxs)(`div`,{className:`placed-snap-cell`,children:[(0,u.jsx)(`div`,{className:`value`,children:Z.recruiters}),(0,u.jsx)(`div`,{className:`key`,children:`Recruiters`})]})]})]}),(0,u.jsxs)(`div`,{className:`placed-panel`,children:[(0,u.jsx)(`h2`,{children:`Department`}),(0,u.jsxs)(`div`,{className:`placed-nav-list`,children:[(0,u.jsxs)(`button`,{type:`button`,className:`placed-nav-item${T===`All`?` active`:``}`,onClick:()=>Q(E,`All`),children:[(0,u.jsx)(`span`,{className:`label`,children:`All Departments`}),(0,u.jsx)(`span`,{className:`count`,children:G.length})]}),ue.map(e=>(0,u.jsxs)(`button`,{type:`button`,className:`placed-nav-item${T===e.key?` active`:``}`,onClick:()=>Q(E,e.key),title:e.label,children:[(0,u.jsx)(`span`,{className:`label`,children:e.label}),(0,u.jsx)(`span`,{className:`count`,children:e.count})]},e.key))]})]}),(0,u.jsxs)(`div`,{className:`placed-panel`,children:[(0,u.jsx)(`h2`,{children:`Placement Year`}),(0,u.jsxs)(`div`,{className:`placed-chip-row`,children:[(0,u.jsx)(`button`,{type:`button`,className:`placed-year-chip${D===`All`?` active`:``}`,onClick:()=>Q(k,`All`),children:`All`}),pe.map(e=>(0,u.jsx)(`button`,{type:`button`,className:`placed-year-chip${D===e.year?` active`:``}`,onClick:()=>Q(k,e.year),children:e.year},e.year))]})]}),(0,u.jsxs)(`div`,{className:`placed-panel`,children:[(0,u.jsx)(`h2`,{children:`Recruiters`}),(0,u.jsxs)(`div`,{className:`placed-nav-list`,children:[(0,u.jsxs)(`button`,{type:`button`,className:`placed-nav-item${A===`All`?` active`:``}`,onClick:()=>Q(N,`All`),children:[(0,u.jsx)(`span`,{className:`placed-rec-logo`,style:{background:`var(--ps-maroon)`},children:`ALL`}),(0,u.jsx)(`span`,{className:`label`,children:`All Recruiters`}),(0,u.jsx)(`span`,{className:`count`,children:G.length})]}),de.slice(0,10).map(e=>{let t=fe.get(e.key);return(0,u.jsxs)(`button`,{type:`button`,className:`placed-nav-item${A===e.key?` active`:``}`,onClick:()=>Q(N,e.key),title:e.label,children:[t?(0,u.jsx)(`span`,{className:`placed-rec-logo placed-rec-logo-img`,children:(0,u.jsx)(`img`,{src:t,alt:``,loading:`lazy`})}):(0,u.jsx)(`span`,{className:`placed-rec-logo`,style:{background:O(e.label)},children:ee(e.label)}),(0,u.jsx)(`span`,{className:`label`,children:e.label}),(0,u.jsx)(`span`,{className:`count`,children:e.count})]},e.key)})]})]}),(0,u.jsxs)(`div`,{className:`placed-panel`,children:[(0,u.jsx)(`h2`,{children:`Sort by`}),(0,u.jsx)(`div`,{className:`placed-sort-group`,children:_e.map(e=>(0,u.jsxs)(`button`,{type:`button`,className:`placed-sort-btn${P===e.key?` active`:``}`,onClick:()=>Q(F,e.key),children:[(0,u.jsx)(ie,{type:e.key}),(0,u.jsx)(`span`,{className:`label`,children:e.label})]},e.key))})]})]}),(0,u.jsx)(`main`,{className:`placed-feed`,"aria-live":`polite`,children:ve?Array.from({length:p}).map((e,t)=>(0,u.jsx)(z,{},t)):y?(0,u.jsxs)(`div`,{className:`placed-state`,children:[(0,u.jsx)(`div`,{className:`placed-empty-icon`,children:(0,u.jsx)(M,{})}),(0,u.jsx)(`h3`,{children:`Unable to load placed students`}),(0,u.jsx)(`p`,{children:y})]}):J.length?(0,u.jsxs)(u.Fragment,{children:[J.map((e,t)=>(0,u.jsx)(oe,{student:e,index:t,headerLogo:a,backSearch:he},e.id)),Y?(0,u.jsxs)(u.Fragment,{children:[Array.from({length:Math.min(p,q.length-I)}).map((e,t)=>(0,u.jsx)(z,{},`sentinel-sk-${t}`)),(0,u.jsx)(`div`,{ref:X,className:`placed-sentinel`,"aria-hidden":`true`})]}):(0,u.jsx)(`div`,{className:`placed-end-msg`,children:`You're all caught up — that's every placement.`})]}):(0,u.jsx)(ae,{title:`No placements found`,message:`Try a different search or clear your filters.`})})]}),$?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`button`,{className:`placed-filter-fab`,type:`button`,onClick:()=>V(!0),"aria-label":`Open filters`,children:[(0,u.jsx)(re,{}),`Filters`]}),(0,u.jsx)(`div`,{className:`placed-scrim${B?` open`:``}`,onClick:()=>V(!1),"aria-hidden":`true`})]})]})}export{H as default};