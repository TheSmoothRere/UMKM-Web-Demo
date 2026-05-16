# Graph Report - umkm-web-demo  (2026-05-17)

## Corpus Check
- 22 files · ~4,228 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 115 nodes · 125 edges · 26 communities (12 shown, 14 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1617177b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_UI Components & Styling|UI Components & Styling]]
- [[_COMMUNITY_Project Configuration|Project Configuration]]
- [[_COMMUNITY_UMKMKita Platform Features|UMKMKita Platform Features]]
- [[_COMMUNITY_Form Handling & State Management|Form Handling & State Management]]
- [[_COMMUNITY_Agent & Project Documentation|Agent & Project Documentation]]
- [[_COMMUNITY_Page Layout & Structure|Page Layout & Structure]]
- [[_COMMUNITY_Utility Functions|Utility Functions]]
- [[_COMMUNITY_Animation & Effects|Animation & Effects]]
- [[_COMMUNITY_Brand Identity & Metadata|Brand Identity & Metadata]]
- [[_COMMUNITY_Card Component Subcomponents|Card Component Subcomponents]]
- [[_COMMUNITY_Empty State Components|Empty State Components]]
- [[_COMMUNITY_TypeScript Definitions|TypeScript Definitions]]
- [[_COMMUNITY_PNPM Workspace|PNPM Workspace]]
- [[_COMMUNITY_Contact Form Components|Contact Form Components]]
- [[_COMMUNITY_Semantic Similarity Relationships|Semantic Similarity Relationships]]
- [[_COMMUNITY_HugeIcons Integration|HugeIcons Integration]]
- [[_COMMUNITY_Tailwind CSS Integration|Tailwind CSS Integration]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]

## God Nodes (most connected - your core abstractions)
1. `cn` - 12 edges
2. `cn()` - 9 edges
3. `Home Page Component` - 9 edges
4. `UMKM Web Demo — Agent Guide` - 7 edges
5. `shadcn/ui Component Pattern` - 7 edges
6. `UMKM Web Demo` - 6 edges
7. `Tailwind CSS v4` - 5 edges
8. `shadcn/ui` - 5 edges
9. `HugeIcons React` - 5 edges
10. `ContactForm` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Root Layout Component` --semantically_similar_to--> `shadcn/ui`  [INFERRED] [semantically similar]
  app/layout.tsx → AGENTS.md
- `UMKMKita Platform` --semantically_similar_to--> `SSG + CSR Architecture`  [INFERRED] [semantically similar]
  app/page.tsx → README.md
- `Next.js Configuration` --rationale_for--> `SSG + CSR Architecture`  [INFERRED]
  next.config.ts → README.md
- `PostCSS Configuration` --references--> `Tailwind CSS v4`  [EXTRACTED]
  postcss.config.mjs → AGENTS.md
- `Brand Colors` --shares_data_with--> `Root Layout Component`  [INFERRED]
  README.md → app/layout.tsx

## Hyperedges (group relationships)
- **UMKMKita Core Components** — page_tsx_home, layout_tsx_rootlayout, site_header_tsx_siteheader, not_found_tsx_notfound [INFERRED 0.95]
- **UMKMKita Tech Stack** — tailwind_css_v4, shadcn_ui, hugeicons_react, next_config_ts_nextconfig [INFERRED 0.95]
- **UMKMKita Brand Identity** — umkmkita_platform, readme_brand_colors, layout_tsx_metadata [INFERRED 0.85]
- **shadcn/ui Component Suite** — button, badge, card, separator, input, textarea, empty [EXTRACTED 1.00]
- **Form-Related Components** — contactform, input, textarea, button [INFERRED 0.85]
- **Card Subcomponents** — cardheader, cardtitle, carddescription, cardaction, cardcontent, cardfooter [EXTRACTED 1.00]

## Communities (26 total, 14 thin omitted)

### Community 1 - "Project Configuration"
Cohesion: 0.14
Nodes (19): Project Conventions, Stack Overview, HugeIcons React, Metadata Configuration, Root Layout Component, Not Found Page Component, Home Page Component, StatCard Component (+11 more)

### Community 2 - "UMKMKita Platform Features"
Cohesion: 0.18
Nodes (18): Badge, badgeVariants, Button, buttonVariants, Card, CardHeader, cn, ContactForm (+10 more)

### Community 4 - "Agent & Project Documentation"
Cohesion: 0.25
Nodes (7): Architecture, Brand Colors, code:block1 (app/page.tsx          → Server component (SSG) — all static ), Commands, Sections, Tech Stack, UMKM Web Demo

### Community 5 - "Page Layout & Structure"
Cohesion: 0.25
Nodes (7): Build artifacts, Commands, Conventions, OpenCode MCPs (pre-configured in `.opencode/opencode.json`), Skills (in `.agents/skills/`), Stack, UMKM Web Demo — Agent Guide

### Community 6 - "Utility Functions"
Cohesion: 0.33
Nodes (6): Next.js Configuration, JSON-LD Schema for Organization, Project Architecture, UMKM Web Demo Project, SSG + CSR Architecture, UMKMKita Platform

### Community 7 - "Animation & Effects"
Cohesion: 0.67
Nodes (3): ESLint Configuration, Next.js TypeScript ESLint Config, Next.js Core Web Vitals ESLint Config

## Knowledge Gaps
- **47 isolated node(s):** `Sections`, `Tech Stack`, `code:block1 (app/page.tsx          → Server component (SSG) — all static )`, `Commands`, `Brand Colors` (+42 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `UI Components & Styling` to `Form Handling & State Management`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `Home Page Component` connect `Project Configuration` to `Utility Functions`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `Home Page Component` (e.g. with `UMKMKita Platform` and `UMKMKita Services`) actually correct?**
  _`Home Page Component` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Sections`, `Tech Stack`, `code:block1 (app/page.tsx          → Server component (SSG) — all static )` to the rest of the system?**
  _47 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Components & Styling` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._
- **Should `Project Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._