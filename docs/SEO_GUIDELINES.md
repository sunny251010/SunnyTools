# SEO Guidelines

## Page Metadata

Every public page should pass these values into `BaseLayout` or `ToolLayout`:

- Title.
- Meta description.
- Canonical path.
- Robots rule when different from `index, follow`.

The shared metadata component lives at `src/components/seo/SEO.astro`.

## Domain

The temporary domain is `https://example.com`. Replace it before launch in:

- `astro.config.mjs`
- `src/utils/seo.ts`

## Headings

Each page must have one H1. Tool pages should use the tool name as the H1. Supporting sections should
use H2 and FAQ questions should use H3.

## URLs

Use stable, lowercase, hyphenated slugs:

```text
/tools/word-counter
/tools/json-formatter
```

Do not create duplicate routes for the same intent.

## Tool Page Content

Keep content useful and structured:

- What the tool does.
- How to use it.
- How the result is calculated or generated.
- Privacy note.
- FAQ.
- Related tools.

Avoid thin pages that only contain a form.

## Internal Linking

Link from:

- Home to popular tools.
- All Tools to active routes.
- Tool pages to related tools.
- Future category pages to matching tools.

Do not link planned tools to missing routes.

## Structured Data

Breadcrumbs and FAQ sections should remain structured enough to become schema later. Do not hardcode
JSON-LD independently on every page; add schema helpers when Phase 5 starts.

## Images

Use the default Open Graph placeholder until a branded production image exists. Keep image paths
valid and update `src/utils/seo.ts` when replacing the placeholder.

## Ads and Layout Shift

Reserve predictable ad space before adding production AdSense. Development placeholders should help
test layout without loading real ad scripts.
