# Roadmap

## Phase 1: Foundation

Priority: High

Goal: Build the static site foundation and one high-quality tool.

Tasks:

- Initialize Astro with TypeScript.
- Configure Tailwind CSS, ESLint, and Prettier.
- Create BaseLayout, Header, Footer, SEO component, and shared UI components.
- Create centralized tool, category, and navigation data.
- Build the home page and All Tools page.
- Build Word Counter.
- Add responsive behavior and mobile menu.
- Add About, Contact, Privacy Policy, and Terms pages.
- Add development-only ad placeholders.

Output:

- Static Astro project ready for local development and deployment.
- Core tool collection available under `/tools/<slug>`.
- Category landing pages available under `/categories/<slug>`.
- Documentation for architecture, SEO, and adding tools.

Completion criteria:

- `astro check` passes.
- Production build passes.
- Internal links for implemented routes work.
- Tool data is not duplicated across pages.

## Phase 2: Text Tools

Priority: High

Goal: Expand the text tool category.

Status: Initial versions completed. Improve depth, examples, and edge cases next.

Tasks:

- Character Counter.
- Case Converter.
- Remove Duplicate Lines.
- Sort Lines.
- Text Compare.
- Lorem Ipsum Generator.

Output:

- Multiple active text tools under `/tools/<slug>`.
- Better internal linking between text tools.

Completion criteria:

- Each tool has its own route, SEO metadata, guide content, FAQ, and related tools.
- Tool logic stays browser-side.

## Phase 3: Generator Tools

Priority: Medium

Goal: Add common generation utilities.

Status: Initial versions completed for QR Code, Password, UUID, and Lorem Ipsum.

Tasks:

- QR Code Generator.
- Password Generator.
- UUID Generator.
- Random Number Generator.

Output:

- Generator category becomes useful as a standalone cluster.

Completion criteria:

- Generated values are created locally.
- Security-sensitive tools do not transmit data.

## Phase 4: Developer Tools

Priority: High

Goal: Add developer-focused utilities.

Status: Initial versions completed for JSON, Base64, URL, Timestamp, Color, and Percentage tools.

Tasks:

- JSON Formatter.
- JSON Validator.
- Base64 Encoder/Decoder.
- URL Encoder/Decoder.
- Timestamp Converter.
- Regex Tester.

Output:

- Developer tool category supports common debugging and data cleanup workflows.

Completion criteria:

- Error states are clear.
- Inputs are not sent to a backend.
- Large inputs remain reasonably responsive.

## Phase 5: SEO and Content

Priority: High

Goal: Improve discoverability and crawl quality.

Tasks:

- Sitemap.
- Robots.txt.
- Structured data.
- FAQ schema.
- Internal linking.
- Related tools.
- Category landing pages at `/categories/<slug>`.
- Guide content for each tool.

Output:

- Search-ready content structure and crawl paths.

Completion criteria:

- Sitemap includes active routes.
- Category pages have useful content, not only lists.
- FAQ schema is generated from structured data.

## Phase 6: Monetization

Priority: Medium

Goal: Add revenue support without damaging usability.

Tasks:

- Google AdSense.
- Ad placement management.
- Development placeholder.
- Production ad component.
- Cookie consent if required.
- Core Web Vitals monitoring.

Output:

- Production-safe ad integration.

Completion criteria:

- Ads do not cause major layout shift.
- Consent requirements are reviewed.
- Placeholders remain useful in development.

## Phase 7: Analytics and Optimization

Priority: Medium

Goal: Measure usage and improve performance.

Tasks:

- Google Analytics or Plausible.
- Track popular tools.
- Track search queries.
- Optimize Lighthouse scores.
- Optimize Core Web Vitals.

Output:

- Data-informed roadmap and performance improvements.

Completion criteria:

- Analytics respects privacy requirements.
- Performance budget is defined and monitored.

## Phase 8: Optional Backend

Priority: Low

Goal: Add account-based or API-backed features only when they are justified.

Tasks:

- User accounts.
- Saved history.
- Bookmarked tools.
- API.
- Rate limiting.
- Supabase or custom backend.

Output:

- Optional backend layer with clear boundaries.

Completion criteria:

- Static tools still work without login.
- Backend features do not compromise privacy expectations.
