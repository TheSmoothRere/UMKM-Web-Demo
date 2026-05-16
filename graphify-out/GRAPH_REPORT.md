# Graph Report - .  (2026-05-16)

## Corpus Check
- Corpus is ~4,156 words - fits in a single context window. You may not need a graph.

## Summary
- 95 nodes · 109 edges · 23 communities (9 shown, 14 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_UI Components & Styling|UI Components & Styling]]
- [[_COMMUNITY_Project Configuration|Project Configuration]]
- [[_COMMUNITY_UMKMKita Platform Features|UMKMKita Platform Features]]
- [[_COMMUNITY_Form Handling & State Management|Form Handling & State Management]]
- [[_COMMUNITY_Agent & Project Documentation|Agent & Project Documentation]]
- [[_COMMUNITY_Utility Functions|Utility Functions]]
- [[_COMMUNITY_Animation & Effects|Animation & Effects]]
- [[_COMMUNITY_Error Handling & Navigation|Error Handling & Navigation]]
- [[_COMMUNITY_shadcnui Component Patterns|shadcn/ui Component Patterns]]
- [[_COMMUNITY_Project Architecture|Project Architecture]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_Next.js Configuration|Next.js Configuration]]
- [[_COMMUNITY_TypeScript Definitions|TypeScript Definitions]]
- [[_COMMUNITY_PNPM Workspace|PNPM Workspace]]
- [[_COMMUNITY_Contact Form Components|Contact Form Components]]
- [[_COMMUNITY_Semantic Similarity Relationships|Semantic Similarity Relationships]]
- [[_COMMUNITY_HugeIcons Integration|HugeIcons Integration]]
- [[_COMMUNITY_Tailwind CSS Integration|Tailwind CSS Integration]]

## God Nodes (most connected - your core abstractions)
1. `cn` - 12 edges
2. `cn()` - 9 edges
3. `Home Page Component` - 9 edges
4. `shadcn/ui Component Pattern` - 7 edges
5. `Tailwind CSS v4` - 5 edges
6. `shadcn/ui` - 5 edges
7. `HugeIcons React` - 5 edges
8. `ContactForm` - 5 edges
9. `Input` - 5 edges
10. `Root Layout Component` - 4 edges

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

## Communities (23 total, 14 thin omitted)

### Community 0 - "UI Components & Styling"
Cohesion: 0.14
Nodes (19): Project Conventions, Stack Overview, HugeIcons React, Metadata Configuration, Root Layout Component, Not Found Page Component, Home Page Component, StatCard Component (+11 more)

### Community 1 - "Project Configuration"
Cohesion: 0.18
Nodes (17): Badge, badgeVariants, Button, buttonVariants, Card, CardHeader, cn, ContactForm (+9 more)

### Community 4 - "Agent & Project Documentation"
Cohesion: 0.33
Nodes (6): Next.js Configuration, JSON-LD Schema for Organization, Project Architecture, UMKM Web Demo Project, SSG + CSR Architecture, UMKMKita Platform

### Community 6 - "Utility Functions"
Cohesion: 0.67
Nodes (3): ESLint Configuration, Next.js TypeScript ESLint Config, Next.js Core Web Vitals ESLint Config

## Knowledge Gaps
- **36 isolated node(s):** `Next.js Core Web Vitals ESLint Config`, `Next.js TypeScript ESLint Config`, `Next.js Configuration`, `PostCSS Configuration`, `Next.js Environment Types` (+31 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn` connect `Project Configuration` to `Form Handling & State Management`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Why does `cn()` connect `UMKMKita Platform Features` to `Form Handling & State Management`, `Page Layout & Structure`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Why does `Home Page Component` connect `UI Components & Styling` to `Agent & Project Documentation`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `Home Page Component` (e.g. with `UMKMKita Platform` and `UMKMKita Services`) actually correct?**
  _`Home Page Component` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Next.js Core Web Vitals ESLint Config`, `Next.js TypeScript ESLint Config`, `Next.js Configuration` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Components & Styling` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._