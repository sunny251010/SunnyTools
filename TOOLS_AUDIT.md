# Sunny Tools Audit

Audit date: 2026-07-27  
Status: updated after the tool consolidation refactor.

## Summary

| Metric | Current value |
| --- | --- |
| Active tool routes | 52 tool routes: 26 English + 26 Vietnamese |
| Listed primary tools | 22 cards/tools shown in Home, All Tools, category pages, search/filter, and Related Tools |
| Hidden secondary routes | 4 tools hidden from listings but still active and built |
| Total sitemap URLs | 74 URLs |
| Categories | 5 |
| English pages | 37 URLs |
| Vietnamese pages | 37 URLs |
| Runtime dependencies | `astro`, `qrcode` |
| Build result | `npm run check`, `npm run lint`, and `npm run build` passed |

## Route Model

The project now separates route availability from card/listing visibility:

- `status: "active"` means the route is still generated and can appear in the sitemap.
- `listed: true` means the tool appears as a card in Home, All Tools, categories, search/filter, and Related Tools.
- `listed: false` keeps the old route working without creating another card.

Implemented in:

- `src/types/tool.ts`
- `src/data/tools.ts`
- `src/components/pages/HomePage.astro`
- `src/components/pages/ToolsIndexPage.astro`
- `src/components/pages/CategoryPage.astro`

Routes and sitemap still use `getActiveTools()`. Listing surfaces use `getListedTools()` / `getActiveListedTools()`.

## Consolidated Groups

| Group | Primary listed tool | Primary route | Secondary route kept | Shared component | Default mode source |
| --- | --- | --- | --- | --- | --- |
| Text Counter | Text Counter | `/tools/word-counter` | `/tools/character-counter` | `src/components/tools/text-counter/TextCounterTool.astro` | `ToolPage.astro` maps slug to `all` or `characters` |
| Line Tools | Line Tools | `/tools/remove-duplicate-lines` | `/tools/sort-lines` | `src/components/tools/line-tools/LineToolsTool.astro` | `ToolPage.astro` maps slug to `remove-duplicates` or `sort` |
| JSON Tools | JSON Formatter & Validator | `/tools/json-formatter` | `/tools/json-validator` | `src/components/tools/json-tools/JsonToolsTool.astro` | `ToolPage.astro` maps slug to `format` or `validate` |
| Timestamp | Unix Timestamp Converter | `/tools/unix-timestamp-converter` | `/tools/timestamp-converter` | `src/components/tools/timestamp-converter/TimestampConverterTool.astro` | shared timestamp component, no duplicated timestamp logic |

Vietnamese routes are preserved for each row under `/vi/tools/...`.

## Hidden Secondary Routes

These routes remain active, build successfully, stay in the sitemap, and keep route-specific SEO/FAQ content:

- `/tools/character-counter`
- `/tools/sort-lines`
- `/tools/json-validator`
- `/tools/timestamp-converter`
- `/vi/tools/character-counter`
- `/vi/tools/sort-lines`
- `/vi/tools/json-validator`
- `/vi/tools/timestamp-converter`

These routes do not appear as separate cards in Home, All Tools, category pages, search/filter, or Related Tools.

## Current Listed Tool Inventory

| # | Listed tool | Route | Category | Notes |
| --- | --- | --- | --- | --- |
| 1 | Text Counter | `/tools/word-counter` | Text Tools | Consolidates word and character counting. |
| 2 | Case Converter | `/tools/case-converter` | Text Tools | Unchanged. |
| 3 | Line Tools | `/tools/remove-duplicate-lines` | Text Tools | Consolidates duplicate-line removal and sorting. |
| 4 | Slug Generator | `/tools/slug-generator` | Text Tools | Unchanged. |
| 5 | Text Compare | `/tools/text-compare` | Text Tools | Unchanged. |
| 6 | Lorem Ipsum Generator | `/tools/lorem-ipsum-generator` | Generator Tools | Unchanged. |
| 7 | QR Code Generator | `/tools/qr-code-generator` | Generator Tools | Unchanged, still uses `qrcode`. |
| 8 | Password Generator | `/tools/password-generator` | Generator Tools | Unchanged. |
| 9 | UUID Generator | `/tools/uuid-generator` | Generator Tools | Unchanged. |
| 10 | Random Number Generator | `/tools/random-number-generator` | Generator Tools | Unchanged. |
| 11 | JSON Formatter & Validator | `/tools/json-formatter` | Developer Tools | Consolidates format, minify, validate, summary. |
| 12 | Number Base Converter | `/tools/number-base-converter` | Developer Tools | Converts integer bases 2-36 in one combined tool with BigInt precision. |
| 13 | Base64 Encoder/Decoder | `/tools/base64-encoder-decoder` | Developer Tools | Explicitly kept separate from URL Encoder/Decoder. |
| 14 | URL Encoder/Decoder | `/tools/url-encoder-decoder` | Developer Tools | Explicitly kept separate from Base64 Encoder/Decoder. |
| 15 | Regex Tester | `/tools/regex-tester` | Developer Tools | Unchanged. |
| 16 | Markdown Previewer | `/tools/markdown-previewer` | Developer Tools | Unchanged. |
| 17 | HTML Formatter | `/tools/html-formatter` | Developer Tools | Unchanged. |
| 18 | CSS Minifier | `/tools/css-minifier` | Developer Tools | Unchanged. |
| 19 | JavaScript Minifier | `/tools/javascript-minifier` | Developer Tools | Unchanged. |
| 20 | Unix Timestamp Converter | `/tools/unix-timestamp-converter` | Developer Tools | Primary timestamp card. |
| 21 | Color Converter | `/tools/color-converter` | Conversion Tools | Unchanged. |
| 22 | Percentage Calculator | `/tools/percentage-calculator` | Calculator Tools | Unchanged. |

## Category Counts After Refactor

| Category | Listed count |
| --- | --- |
| Text Tools | 5 |
| Developer Tools | 10 |
| Generator Tools | 5 |
| Conversion Tools | 1 |
| Calculator Tools | 1 |

## Component Changes

### New shared components

- `src/components/tools/text-counter/TextCounterTool.astro`
- `src/components/tools/line-tools/LineToolsTool.astro`
- `src/components/tools/json-tools/JsonToolsTool.astro`

### Thin wrappers retained

These files no longer contain their own duplicated logic. They only render the shared component with the correct default mode:

- `src/components/tools/word-counter/WordCounterTool.astro`
- `src/components/tools/character-counter/CharacterCounterTool.astro`
- `src/components/tools/remove-duplicate-lines/RemoveDuplicateLinesTool.astro`
- `src/components/tools/sort-lines/SortLinesTool.astro`
- `src/components/tools/json-formatter/JsonFormatterTool.astro`
- `src/components/tools/json-validator/JsonValidatorTool.astro`
- `src/components/tools/unix-timestamp-converter/UnixTimestampConverterTool.astro`

`ToolPage.astro` now maps the consolidated route slugs directly to shared components and passes default mode from the slug mapping.

## Utility Changes

| Utility | Purpose |
| --- | --- |
| `src/utils/text.ts` | Expanded `getTextStats()` with `lineCount`; reused by Text Counter. |
| `src/utils/lines.ts` | Shared line splitting, duplicate removal, and sorting logic. |
| `src/utils/json.ts` | Shared JSON parse, format, summary, and line/column position helpers. |
| `src/utils/browser.ts` | Shared `copyText()` and `downloadText()` browser helpers. |
| `src/utils/numberBase.ts` | BigInt-safe integer parsing and formatting for bases 2-36, including prefix handling and digit validation. |

## SEO and FAQ

- Primary consolidated tools have updated names, descriptions, intro text, how-to-use copy, how-it-works copy, and FAQs in `src/data/tools.ts` and `src/data/toolContent.ts`.
- Secondary routes keep their own metadata and FAQ focus, but render the same consolidated component.
- Canonical and hreflang behavior remains centralized in `BaseLayout.astro`, `SEO.astro`, and `src/i18n/config.ts`.
- FAQ schema remains generated from the same `ToolLayout.astro` + `src/utils/schema.ts` flow, so visible FAQ content and FAQPage schema stay aligned.
- No route redirects were added.
- No new `/tools/text-counter`, `/tools/line-tools`, or `/tools/json-tools` URL was created.
- Number Base Converter was added as one combined route only: `/tools/number-base-converter` and `/vi/tools/number-base-converter`. No decimal-to-binary, binary-to-decimal, hex-to-decimal, or octal-to-binary subroutes were created.

## Explicit Non-Merge Decision

Base64 Encoder/Decoder and URL Encoder/Decoder were not merged:

- Both remain listed.
- Both keep their existing routes.
- Both keep independent components and SEO/FAQ content.
- Only broad shared helpers may be reused in future if behavior remains unchanged.

## Verification

Commands run:

- `npm.cmd run check` - passed with 0 errors, 0 warnings, 0 hints.
- `npm.cmd run lint` - passed.
- `npm.cmd run build` - passed; 74 pages built.

Manual/static checks performed on `dist`:

- Confirmed the Number Base Converter EN/VI routes exist.
- Confirmed `/tools/number-base-converter` and `/vi/tools/number-base-converter` return HTTP 200 on the local dev server.
- Confirmed sitemap has 74 URLs and includes both Number Base Converter routes.
- Confirmed the 8 secondary tool URLs remain in sitemap.
- Confirmed All Tools no longer links secondary cards for Character Counter, Sort Lines, JSON Validator, or Timestamp Converter.
- Confirmed Home displays 22 active/listed tools.
- Confirmed category counts reflect listed tools: 5 Text, 10 Developer, 5 Generator, 1 Conversion, 1 Calculator.
- Confirmed secondary route pages still include canonical/hreflang/FAQ schema output through the existing layout system.
- Confirmed Number Base Converter includes canonical, hreflang, WebApplication schema, BreadcrumbList schema, and FAQPage schema.
- Confirmed Number Base Converter utility edge cases pass for `0`, `1`, `-1`, `255`, `-255`, base 2/8/16/36 input, `0b`, `0o`, `0x`, invalid digits, invalid signs, fractional input, base 1/37, inner whitespace, and a value larger than `9007199254740991`.

## Remaining Notes

- The project now has 26 active tool route records because old URLs are intentionally preserved and Number Base Converter was added.
- Listed primary tools are now 22.
- Number Base Converter intentionally supports integers only; fractional values are rejected with a clear message.
- No backend, database, API, dependency installation, redirect, or framework change was added.
