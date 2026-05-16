# UMKM Web Demo

A company profile landing page for UMKM (Micro, Small, and Medium Enterprises) built with Next.js 16. The page is fully statically rendered (SSG) with interactive client islands (CSR) for scroll animations, mobile navigation, and the contact form.

## Sections

- **Hero** — Bold headline with floating stat cards and CTA buttons
- **Tentang Kami** — Company story with trust badges
- **Layanan** — 4 service cards (Card + Badge composition)
- **Produk Unggulan** — 3 product showcase cards (Card + Badge)
- **Testimoni** — Client testimonials with star ratings
- **Kontak** — Contact info + interactive form (Input, Textarea, Button)
- **Footer** — Links, social media, copyright

## Tech Stack

- **Next.js 16** (App Router) — SSG + CSR only
- **React 19**, **TypeScript**, **Tailwind CSS v4**
- **shadcn/ui** (Base Mira style) — Card, Badge, Separator, Input, Textarea, Button, Empty
- **@base-ui/react** — Component primitives
- **@hugeicons/react** — Icon library
- **Playfair Display** (headings) + **Inter** (body)

## Architecture

```
app/page.tsx          → Server component (SSG) — all static HTML pre-rendered
app/not-found.tsx     → Server component (SSG) — 404 page using Empty component
components/
  site-header.tsx     → Client — mobile menu, scroll-based background
  animated-reveal.tsx → Client — IntersectionObserver scroll animations
  contact-form.tsx    → Client — form state, Input/Textarea/Button
  ui/
    button.tsx        → shadcn Button
    card.tsx          → shadcn Card
    badge.tsx         → shadcn Badge
    separator.tsx     → shadcn Separator
    input.tsx         → shadcn Input
    textarea.tsx      → shadcn Textarea
    empty.tsx         → shadcn Empty
```

## Commands

| Command | Action |
|---|---|
| `pnpm dev` | Dev server |
| `pnpm build` | Production build (typecheck + compile) |
| `pnpm start` | Start production server |
| `pnpm lint` | ESLint (Next core-web-vitals + TS) |

## Brand Colors

- **Terracotta** — `#C7522B` (primary accent)
- **Gold** — `#D4A853` (secondary accent)
- **Cream** — `#FDF8F3` (background)
- **Charcoal** — `#1A1A2E` (text)
