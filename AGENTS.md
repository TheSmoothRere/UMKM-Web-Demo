# UMKM Web Demo — Agent Guide

## Stack
- **Next.js 16** (App Router) — **CSR + SSG only**, no SSR/ISR
- **React 19**, **TypeScript**, **Tailwind CSS v4** (`@import` syntax)
- **shadcn/ui** (Base Mira style) via `@base-ui/react` — components in `components/ui/`
- **Icons**: `@hugeicons/react`
- **Package manager**: `pnpm`

## Commands
| Command | Action |
|---|---|
| `pnpm dev` | Dev server |
| `pnpm build` | Production build (typecheck + compile) |
| `pnpm lint` | ESLint (Next core-web-vitals + TS) |
| `pnpm start` | Start production server |

No test framework or typecheck-only script is configured. `pnpm build` is the canonical verification command.

## Conventions
- Path alias `@/*` maps to project root
- `lib/utils.ts` exports `cn(...)` for conditional class merging (clsx + tailwind-merge)
- All UI components go in `components/ui/`
- Styles in `app/globals.css`: Tailwind v4 `@import "tailwindcss"`, CSS variables for theming, `.dark` variant via `@custom-variant dark (&:is(.dark *));`

## OpenCode MCPs (pre-configured in `.opencode/opencode.json`)
- `tailwindcss-mcp` — Tailwind utility/component generation
- `shadcn` — shadcn component management
- `hugeicons` — icon management

## Skills (in `.agents/skills/`)
Use the relevant skill when the task matches its description — always load the skill first before implementing.

| Skill | When to use |
|---|---|
| `frontend-design` | Building polished UI components, pages, layouts, landing pages, dashboards |
| `shadcn` | Adding/managing shadcn components, debugging shadcn setup, composing UI from registries |
| `vercel-react-best-practices` | Writing/refactoring React/Next.js code — bundle, rendering, data fetching perf |
| `web-design-guidelines` | Auditing UI for accessibility, UX best practices, design review |
| `next-best-practices` | Writing/refactoring Next.js code — bundle, rendering, data fetching perf |

## Build artifacts
`.next/` and `out/` are gitignored by default.
