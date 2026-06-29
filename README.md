# Phantasia Creative Works — Website (Astro)

A fast, SEO-optimized static site built with [Astro](https://astro.build).
Deploys to Cloudflare Pages. Publishing a blog article is just: add a Markdown file, push, done.

---

## Publishing a blog article (the important part)

You never edit HTML. To publish:

1. Create a Markdown file in **`src/content/blog/`**, e.g. `my-article.md`.
   The filename becomes the URL: `my-article.md` → `/blog/my-article`.
2. Add front matter at the top (see below).
3. Write the article in normal Markdown below the front matter.
4. Commit and push to GitHub. Cloudflare rebuilds and deploys automatically.

That's it. The article is auto-added to the blog index, the homepage "Latest articles",
the sitemap, the RSS feed, and gets full SEO metadata + structured data.

### Front matter template

Copy this to the top of every article:

```md
---
title: "Your article title"
description: "One-sentence summary used for SEO and cards."
date: 2026-07-20
author: "Phantasia Creative Works"
cover: "/assets/portfolio/hero.jpg"
tags: ["Guides"]
---

Your article content starts here. Use normal Markdown:

## A heading
Some text. **Bold**, *italic*, [links](https://example.com).

- bullet points
- work fine
```

- **cover** — path to an image in `public/`. Drop article images in `public/assets/` and reference them like `/assets/my-image.jpg`. If omitted, the hero render is used.
- **tags** — the first tag shows as the category label on cards.
- **date** — controls ordering (newest first) and shows on the article.
- To hide a draft, add `draft: true` to the front matter.

---

## Editing the main site

- **Text, sections, layout** of the homepage → `src/pages/index.astro`
- **Site-wide info** (email, WhatsApp, social links, nav) → `src/config.ts` (change once, applies everywhere)
- **Styles** → `src/styles/global.css`
- **Nav / Footer** → `src/components/Nav.astro`, `src/components/Footer.astro`
- **Images** → `public/assets/` and `public/assets/portfolio/`

---

## Running locally

```bash
npm install        # first time only
npm run dev        # preview at http://localhost:4321
npm run build      # build to dist/
npm run preview    # preview the built site
```

You need [Node.js](https://nodejs.org) 18+ installed.

---

## Deploying on Cloudflare Pages (auto-build)

This is the recommended setup — push to GitHub, Cloudflare builds and deploys automatically.

**One-time setup:**

1. Push this project to a GitHub repository.
2. In Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select your repository.
4. Set build configuration:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy.

**After that**, every `git push` triggers an automatic rebuild and deploy. Publishing an
article = add Markdown file, commit, push. No manual upload, ever.

> Note: This needs a **Pages** project (not a Worker). The build command is what makes
> Astro work — a plain static upload won't run the build.

### Custom domain

In your Pages project → **Custom domains** → add `phantasiacreative.com` and
`www.phantasiacreative.com`. SSL is automatic. The `_redirects` file already handles
www → non-www.

---

## What's included

- **SEO**: per-page titles, descriptions, canonical URLs, Open Graph, Twitter cards, favicon
- **Structured data (JSON-LD)**: Organization, WebSite, Service, Article, BreadcrumbList
- **Sitemap**: auto-generated at `/sitemap-index.xml`
- **robots.txt**, **RSS feed** (`/rss.xml`)
- **Google Analytics 4** (loads on every page)
- **PWA**: `site.webmanifest`, theme color, Apple touch icon
- **Custom 404 page**
- **Performance**: preloaded hero, lazy-loaded images, deferred analytics, minified output
- **Redirects + security headers** via `_redirects` and `_headers`

---

## Contact form (future)

When you're ready to add a contact form, the recommended approach on Cloudflare Pages is a
**Pages Function** at `functions/contact.js` that emails submissions to your address. The
project is structured so this can be added without refactoring. Ask when you want it built.

---

## Changing the public email

It's in one place: `src/config.ts` → `email`. Change it there and it updates the contact
section, footer, CTA, metadata, and structured data everywhere.
