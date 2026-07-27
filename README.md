# SunnyTools

SunnyTools is a static-first Astro website for free online tools. It includes the shared
architecture, SEO defaults, documentation, category pages, and a browser-based collection of text,
generator, developer, conversion, and calculator tools.

## Goals

- Fast static pages with browser-only tool logic.
- Clear SEO metadata per page.
- Centralized tool and category data.
- Reusable layouts and components.
- Easy deployment to Cloudflare Pages, Vercel, or GitHub Pages.
- A structure that can grow into categories, ads, analytics, localization, and optional backend
  features later.

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Static Site Generation

React is not used for the whole site. Future tools should use Astro components and small client
scripts unless a tool truly needs a heavier interactive island.

## Install

```bash
npm install
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm.ps1`:

```bash
npm.cmd install
```

## Development

```bash
npm run dev
```

PowerShell alternative:

```bash
npm.cmd run dev
```

## Build

```bash
npm run build
```

The build script runs `astro check` before `astro build`.

## Preview

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    common/
    layout/
    seo/
    tools/
      word-counter/
  data/
  layouts/
  pages/
    tools/
  styles/
  types/
  utils/
docs/
public/
```

## Add a New Tool

1. Add the tool metadata to `src/data/tools.ts`.
2. Add or reuse a category from `src/data/categories.ts`.
3. Create a tool component in `src/components/tools/<tool-slug>/`.
4. Create a route in `src/pages/tools/<tool-slug>.astro`.
5. Wrap the page with `ToolLayout`.
6. Add page-specific guide content and FAQ.
7. Add related tools through centralized data helpers.
8. Run `npm run check` and `npm run build`.

See `docs/ADD_NEW_TOOL.md` for the full checklist.

## Domain And Contact

The production domain is currently configured as `https://sunnytools.site` in:

- `astro.config.mjs`
- `src/utils/seo.ts`

The contact email used in public copy is `sunny.contact.251010@gmail.com`.

## Deployment Notes

The project is static and can be deployed to:

- Cloudflare Pages
- Vercel
- GitHub Pages

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`. Push to `main`, then open
the GitHub repository settings and set Pages source to GitHub Actions.

For a normal project repository such as `SunnyTools`, the workflow builds with a base path matching
the repository name. The site will be available at:

```text
https://<username>.github.io/SunnyTools/
```

For a user site repository named `<username>.github.io`, the workflow uses `/` as the base path.

## Current Status

Implemented routes:

- Home page at `/`
- Tool directory at `/tools`
- Category pages at `/categories/<slug>`
- Tool pages at `/tools/<slug>`
- About, Contact, Privacy Policy, and Terms pages
- Shared SEO component
- Development-only ad placeholders
- Centralized data model
- Documentation

Implemented tools:

- Word Counter
- Character Counter
- Case Converter
- Remove Duplicate Lines
- Sort Lines
- Text Compare
- Lorem Ipsum Generator
- QR Code Generator
- Password Generator
- UUID Generator
- Random Number Generator
- JSON Formatter
- Base64 Encoder/Decoder
- URL Encoder/Decoder
- Timestamp Converter
- Color Converter
- Percentage Calculator
