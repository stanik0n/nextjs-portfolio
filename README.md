# Sai Rajesh Tanikonda — Portfolio

Personal portfolio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-portfolio/
├── app/
│   ├── layout.tsx          # Root layout (nav, footer, metadata)
│   ├── page.tsx            # Homepage (all sections)
│   ├── not-found.tsx       # 404 page
│   └── blog/
│       ├── page.tsx        # Blog index
│       ├── skystream/      # SkyStream case study
│       ├── url-shortener/  # URL Shortener post
│       ├── nypd-arrests/   # NYPD analysis post
│       ├── ev-adoption/    # EV adoption post
│       └── cnc-plotter/    # CNC plotter post
├── components/
│   ├── Nav.tsx             # Fixed navigation bar
│   ├── Cursor.tsx          # Custom cursor (client)
│   ├── Hero.tsx            # Hero section
│   ├── Projects.tsx        # Projects grid
│   ├── Sections.tsx        # About, Experience, Blog, Contact
│   ├── PostLayout.tsx      # Shared blog post wrapper
│   ├── SectionHeading.tsx  # Reusable section label + title
│   └── useReveal.ts        # Intersection observer hook
├── lib/
│   └── data.ts             # ← ALL CONTENT LIVES HERE
└── app/globals.css         # CSS variables, fonts, animations
```

## Updating Content

**All content is in `lib/data.ts`** — projects, experience, posts, skills.
To add a new project: add an entry to the `projects` array.
To add a new blog post: add to `posts` array + create `app/blog/your-slug/page.tsx`.

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**
4. Add your domain in **Settings → Domains**

## Connect Custom Domain (Namecheap → Vercel)

In Vercel: Settings → Domains → add `rajeshchowdary.com`

In Namecheap DNS, set:
```
Type    Host    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

Propagation takes 5–30 minutes.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: DM Mono, Syne, Fraunces (Google Fonts)
- **Deployment**: Vercel (recommended)
