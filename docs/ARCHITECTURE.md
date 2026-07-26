# Architecture

## Overview

ToolKit Hub uses Astro as a static-first framework. Pages are rendered at build time, and tool logic
runs in the browser only when interaction is needed. This keeps the initial payload small and avoids
backend work in the foundation phase.

## Data Flow

Tool metadata lives in `src/data/tools.ts`. Categories live in `src/data/categories.ts`. Navigation
links live in `src/data/navigation.ts`.

Pages and components import these files directly:

- Home page reads featured and popular tools.
- The All Tools page reads the full list and filters cards on the client.
- Tool pages read one tool by slug and related tools by category.
- Cards, grids, and category lists do not duplicate tool data.

## Tool Data Model

The `Tool` interface is defined in `src/types/tool.ts`. It includes identity, slug, descriptions,
category, keywords, display hints, and status.

Tool statuses:

- `active`: implemented and linked.
- `planned`: visible in lists but not linked to a tool route.
- `draft`: available to authors but not ready for normal discovery.

## Reusable Components

Shared components are grouped by responsibility:

- `common`: layout primitives, section titles, breadcrumbs, ad placeholders.
- `layout`: header, footer, mobile menu, and tool page layout.
- `seo`: shared metadata output.
- `tools`: card, grid, search/filter controls, category list, and individual tool components.

`ToolLayout.astro` provides the common page shape for tool routes. A tool page supplies:

- Tool runner slot.
- Guide content slot.
- FAQ slot.
- Related tools from centralized data.

## Why Astro

Astro is a good fit because most pages are content and metadata driven. It ships minimal JavaScript
by default, supports TypeScript, renders static pages well, and still allows small client scripts for
interactive tools.

## JavaScript and Islands

Use plain Astro components and client scripts when a tool only needs local DOM interaction. Consider
an Astro island when a future tool needs state-heavy UI, canvas rendering, complex validation, or an
external browser library.

Avoid adding a full app framework globally. A single complex tool can opt into a focused island later
without changing the site architecture.

## SEO

`BaseLayout.astro` renders `SEO.astro`, which uses defaults from `src/utils/seo.ts`. Each page passes
its own title, description, and path. The temporary domain is `https://example.com` and must be
changed before launch.

## Ads

`AdPlaceholder.astro` renders only in development through `import.meta.env.DEV`. Production AdSense
code should be introduced later through a dedicated component and reviewed for privacy, consent, and
layout impact.

## Future Backend

A backend is not needed for phase 1. If future features require accounts, saved history, bookmarks,
or APIs, add the backend behind clear feature boundaries. Candidate options include Supabase or a
small custom API, with rate limiting and privacy rules documented before release.
