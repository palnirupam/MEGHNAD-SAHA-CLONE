# Meghnad Saha Institute of Technology — Website Clone

A responsive frontend mirror of the [MSIT website](https://www.msit.edu.in/), using its production assets and public content APIs to preserve the original layout, navigation, animations, and responsive behavior.

## Features

- Desktop and mobile responsive layouts
- Original styling, fonts, images, and animations
- Hero carousel, marquees, menus, notices, and interactive overlays
- SPA routing with refresh support
- Dependency-free local Node.js server
- Vercel-ready deployment configuration
- Long-term caching for versioned production assets

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

Use another port when needed:

```powershell
$env:PORT=3000; npm run dev
```

```bash
PORT=3000 npm run dev
```

## Deploy to Vercel

Deploy a preview using the included local Vercel CLI:

```bash
npm run deploy
```

Deploy to production:

```bash
npm run deploy:prod
```

Generate the same static output locally:

```bash
npm run build
```

For a Vercel dashboard import, select the repository and leave the framework preset as **Other**. Vercel runs `node build.mjs`, publishes `dist/`, and routes application URLs back to `index.html`.

## Project structure

```text
.
├── assets/          # Production JavaScript, CSS, fonts, and media
├── build.mjs        # Creates the static Vercel output in dist/
├── images/          # Public image assets
├── index.html       # Application entry point
├── server.mjs       # Local static server with SPA fallback
├── vercel.json      # Vercel routing and cache configuration
└── package.json     # Local and deployment commands
```

## Content and data

The frontend bundle is stored in this repository. Current notices, menus, page content, and some media load from MSIT's public services, which keeps the clone aligned with the live website.

## Disclaimer

This is an unofficial technical recreation. Meghnad Saha Institute of Technology owns its name, branding, content, and original website assets. This repository is not affiliated with or endorsed by MSIT.
