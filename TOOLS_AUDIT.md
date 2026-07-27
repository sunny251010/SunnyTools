# Sunny Tools Audit

Audit date: 2026-07-27  
Scope: current working tree in `D:\Workspace\tools-web`  
Constraint followed: this audit only creates `TOOLS_AUDIT.md`; no route, component, SEO, sitemap, dependency, or functional code was changed.

## Executive Summary

| Metric | Count / Detail |
| --- | --- |
| Total tool routes | 50 tool routes: 25 English + 25 Vietnamese |
| Total real tools | 25 tools from `src/data/tools.ts` and `src/components/pages/ToolPage.astro` |
| Total categories | 5: Text Tools, Developer Tools, Generator Tools, Conversion Tools, Calculator Tools |
| Total English pages | 36 URLs in sitemap: 6 static + 5 category + 25 tool |
| Total Vietnamese pages | 36 URLs in sitemap: 6 static + 5 category + 25 tool |
| Total sitemap URLs | 72 URLs |
| Tool-specific components | 25 `*Tool.astro` components |
| Shared components | 16 common/layout/page/SEO components outside the per-tool implementations, plus 4 tool-list components |
| Main runtime dependencies | `astro`, `qrcode` |
| Main dev dependencies | `@astrojs/check`, `eslint`, `prettier`, `tailwindcss`, `typescript`, `eslint-plugin-astro`, `typescript-eslint`, `autoprefixer`, `@types/qrcode` |

## URL Structure

| Page type | English route | Vietnamese route | Source |
| --- | --- | --- | --- |
| Home | `/` | `/vi` | `src/pages/index.astro`, `src/pages/[locale]/index.astro` |
| Tools index | `/tools` | `/vi/tools` | `src/pages/tools/index.astro`, `src/pages/[locale]/tools/index.astro` |
| Tool detail | `/tools/[slug]` | `/vi/tools/[slug]` | `src/pages/tools/[slug].astro`, `src/pages/[locale]/tools/[slug].astro` |
| Category detail | `/categories/[slug]` | `/vi/categories/[slug]` | `src/pages/categories/[slug].astro`, `src/pages/[locale]/categories/[slug].astro` |
| Static pages | `/about`, `/contact`, `/privacy-policy`, `/terms` | `/vi/about`, `/vi/contact`, `/vi/privacy-policy`, `/vi/terms` | static Astro pages |
| Sitemap | `/sitemap.xml` | shared | `src/pages/sitemap.xml.ts` |
| Robots | `/robots.txt` | shared | `src/pages/robots.txt.ts` |

The sitemap is generated from `staticPaths`, `getCategories(locale)`, and `getActiveTools(locale)` for both locales, then deduplicated with `Set`.

## Tool Inventory

| ID | Tool English | Tool Vietnamese | Category | Route EN | Route VI | Main function | Sub-functions | Input | Output | Main component | Utility/Library | Own SEO | FAQ | Can merge with |
| -- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Word Counter | Dem Tu | Text Tools | `/tools/word-counter` | `/vi/tools/word-counter` | Counts writing metrics. | Word count, character count, sentence count, paragraph count, reading time, copy input. | Text | Numeric stats | `src/components/tools/word-counter/WordCounterTool.astro` | `src/utils/text.ts`, Clipboard API | Yes | Yes | Character Counter, Case Converter as a broader Text Analyzer/Converter |
| 2 | Character Counter | Dem Ky Tu | Text Tools | `/tools/character-counter` | `/vi/tools/character-counter` | Measures character length and limit usage. | Characters, no-space characters, words, lines, limit usage, remaining count. | Text and optional limit | Numeric stats | `src/components/tools/character-counter/CharacterCounterTool.astro` | Browser regex; duplicated word pattern from `src/utils/text.ts` | Yes | Yes | Word Counter |
| 3 | Case Converter | Chuyen Doi Chu Hoa Thuong | Text Tools | `/tools/case-converter` | `/vi/tools/case-converter` | Converts text casing. | Uppercase, lowercase, title case, sentence case, kebab, snake, camel, Pascal, constant, dot, stats, copy, example, clear. | Text | Converted text | `src/components/tools/case-converter/CaseConverterTool.astro` | Browser string/Unicode regex, Clipboard API | Yes | Yes | Slug Generator; partly Word/Character Counter |
| 4 | Remove Duplicate Lines | Xoa Dong Trung Lap | Text Tools | `/tools/remove-duplicate-lines` | `/vi/tools/remove-duplicate-lines` | Removes repeated lines. | Trim lines, case-sensitive matching, skip empty lines, unique output, copy, download TXT, example, clear. | Multiline text | Cleaned multiline text | `src/components/tools/remove-duplicate-lines/RemoveDuplicateLinesTool.astro` | `Set`, Clipboard API, Blob download | Yes | Yes | Sort Lines; future Text Cleaner/Line Tools |
| 5 | Slug Generator | Tao Duong Dan Slug | Text Tools | `/tools/slug-generator` | `/vi/tools/slug-generator` | Creates URL-friendly slugs. | Accent normalization, Vietnamese `d` handling, separator option, lowercase option, stop-word removal, copy, download TXT, example, clear. | Title/text | URL slug | `src/components/tools/slug-generator/SlugGeneratorTool.astro` | Unicode normalization, regex, Clipboard API, Blob download | Yes | Yes | Case Converter |
| 6 | Sort Lines | Sap Xep Dong | Text Tools | `/tools/sort-lines` | `/vi/tools/sort-lines` | Sorts multiline text. | Text, numeric, length sort, ascending/descending, trim, case-sensitive option, skip empty lines, unique lines, copy, download TXT, example, clear. | Multiline text | Sorted multiline text | `src/components/tools/sort-lines/SortLinesTool.astro` | `Intl`-aware `localeCompare`, `Set`, Clipboard API, Blob download | Yes | Yes | Remove Duplicate Lines; future Line Tools |
| 7 | Text Compare | So Sanh Van Ban | Text Tools | `/tools/text-compare` | `/vi/tools/text-compare` | Compares two text blocks. | Line mode, word mode, LCS diff, added/removed/unchanged counts, swap, example, clear. | Two text blocks | Diff summary and rows | `src/components/tools/text-compare/TextCompareTool.astro` | Browser arrays; LCS logic in component | Yes | Yes | Keep separate; maybe a future Diff Tool |
| 8 | Lorem Ipsum Generator | Tao Lorem Ipsum | Generator Tools | `/tools/lorem-ipsum-generator` | `/vi/tools/lorem-ipsum-generator` | Generates placeholder copy. | Paragraph count, sentences per paragraph, classic start option, random offset, copy. | Numeric options | Placeholder text | `src/components/tools/lorem-ipsum-generator/LoremIpsumGeneratorTool.astro` | `Math.random`, local word pool, Clipboard API | Yes | Yes | No direct merge; possible future Text Generator |
| 9 | QR Code Generator | Tao Ma QR | Generator Tools | `/tools/qr-code-generator` | `/vi/tools/qr-code-generator` | Generates QR codes. | Text/URL QR generation, size, margin, PNG download. | Text or URL, QR settings | Canvas QR image / PNG | `src/components/tools/qr-code-generator/QrCodeGeneratorTool.astro` | `qrcode` package, Canvas API | Yes | Yes | Keep separate |
| 10 | Password Generator | Tao Mat Khau | Generator Tools | `/tools/password-generator` | `/vi/tools/password-generator` | Generates secure passwords. | Length, uppercase/lowercase/numbers/symbols, random generation, copy. | Password rules | Password string | `src/components/tools/password-generator/PasswordGeneratorTool.astro` | Web Crypto `crypto.getRandomValues`, Clipboard API | Yes | Yes | Keep separate |
| 11 | UUID Generator | Tao UUID | Generator Tools | `/tools/uuid-generator` | `/vi/tools/uuid-generator` | Generates UUID values. | UUID v4 generation, fallback generator, copy. | Click/action | UUID string | `src/components/tools/uuid-generator/UuidGeneratorTool.astro` | `crypto.randomUUID`, `crypto.getRandomValues`, Clipboard API | Yes | Yes | Random Number Generator only as a broad Random Generator, but not recommended now |
| 12 | Random Number Generator | Tao So Ngau Nhien | Generator Tools | `/tools/random-number-generator` | `/vi/tools/random-number-generator` | Generates random numbers. | Min/max, integer/decimal modes, quantity, crypto random source, copy. | Numeric range/options | Number list | `src/components/tools/random-number-generator/RandomNumberGeneratorTool.astro` | Web Crypto `crypto.getRandomValues`, Clipboard API | Yes | Yes | UUID Generator only as broad Random Generator; low priority |
| 13 | JSON Formatter | Dinh Dang JSON | Developer Tools | `/tools/json-formatter` | `/vi/tools/json-formatter` | Formats and minifies JSON. | Format with indentation, minify, parse validation, copy. | JSON text | Pretty/minified JSON or error | `src/components/tools/json-formatter/JsonFormatterTool.astro` | `JSON.parse`, `JSON.stringify`, Clipboard API | Yes | Yes | JSON Validator |
| 14 | JSON Validator | Kiem Tra JSON | Developer Tools | `/tools/json-validator` | `/vi/tools/json-validator` | Validates JSON syntax. | Parse validation, error display, line/column estimate, JSON summary, sample loading. | JSON text | Valid/invalid status and summary | `src/components/tools/json-validator/JsonValidatorTool.astro` | `JSON.parse`, browser text analysis | Yes | Yes | JSON Formatter |
| 15 | Base64 Encoder/Decoder | Ma Hoa Va Giai Ma Base64 | Developer Tools | `/tools/base64-encoder-decoder` | `/vi/tools/base64-encoder-decoder` | Converts text to/from Base64. | Encode, decode, invalid input handling, copy. | Text or Base64 | Base64 or decoded text | `src/components/tools/base64-encoder-decoder/Base64EncoderDecoderTool.astro` | `TextEncoder`, `TextDecoder`, `btoa`, `atob`, Clipboard API | Yes | Yes | URL Encoder/Decoder in a future Text Encoder & Decoder |
| 16 | URL Encoder/Decoder | Ma Hoa Va Giai Ma URL | Developer Tools | `/tools/url-encoder-decoder` | `/vi/tools/url-encoder-decoder` | Converts URL-safe strings. | Encode, decode, invalid URL component error, copy. | Text or encoded URL component | Encoded or decoded string | `src/components/tools/url-encoder-decoder/UrlEncoderDecoderTool.astro` | `encodeURIComponent`, `decodeURIComponent`, Clipboard API | Yes | Yes | Base64 Encoder/Decoder in a future Text Encoder & Decoder |
| 17 | Regex Tester | Kiem Tra Regex | Developer Tools | `/tools/regex-tester` | `/vi/tools/regex-tester` | Tests JavaScript regex. | Pattern input, flags, highlighted matches, capture groups, empty-match protection. | Regex pattern, flags, sample text | Match list and highlights | `src/components/tools/regex-tester/RegexTesterTool.astro` | `RegExp` | Yes | Yes | Keep separate |
| 18 | Markdown Previewer | Xem Truoc Markdown | Developer Tools | `/tools/markdown-previewer` | `/vi/tools/markdown-previewer` | Previews Markdown as HTML. | Markdown editing, sanitized preview, headings/lists/links/images/code/tables/blockquote, copy Markdown, copy HTML, download MD, example, clear. | Markdown text | Preview HTML and optional copied HTML | `src/components/tools/markdown-previewer/MarkdownPreviewerTool.astro` | Component-local Markdown parser, Clipboard API, Blob download | Yes | Yes | HTML Formatter only loosely; keep separate for user intent |
| 19 | HTML Formatter | Dinh Dang HTML | Developer Tools | `/tools/html-formatter` | `/vi/tools/html-formatter` | Beautifies HTML. | Tag tokenization, basic balance validation, spaces/tabs indentation, copy, download HTML, example, clear. | HTML text | Formatted HTML text | `src/components/tools/html-formatter/HtmlFormatterTool.astro` | Component-local tokenizer, Clipboard API, Blob download | Yes | Yes | Future HTML Minifier; maybe broader Code Formatter |
| 20 | CSS Minifier | Thu Gon CSS | Developer Tools | `/tools/css-minifier` | `/vi/tools/css-minifier` | Minifies CSS. | Basic validation, comment/whitespace removal, size savings, copy, download CSS, example, clear. | CSS text | Minified CSS and size stats | `src/components/tools/css-minifier/CssMinifierTool.astro` | Component-local minifier, Blob size, Clipboard API, Blob download | Yes | Yes | Future CSS Formatter; maybe Code Minifier |
| 21 | JavaScript Minifier | Thu Gon JavaScript | Developer Tools | `/tools/javascript-minifier` | `/vi/tools/javascript-minifier` | Minifies JavaScript text. | Text scanner, keep comments option, basic unclosed syntax checks, size savings, copy, download JS, example, clear. | JavaScript text | Minified JavaScript and size stats | `src/components/tools/javascript-minifier/JavaScriptMinifierTool.astro` | Component-local scanner, Blob size, Clipboard API, Blob download | Yes | Yes | Future JavaScript Formatter; maybe Code Minifier |
| 22 | Unix Timestamp Converter | Chuyen Doi Unix Timestamp | Developer Tools | `/tools/unix-timestamp-converter` | `/vi/tools/unix-timestamp-converter` | Converts Unix timestamps and dates. | Seconds/milliseconds detection, timestamp-to-date, date-to-timestamp, local/UTC/ISO outputs, now, example, copy individual result, clear. | Unix timestamp or date-time | Local date, UTC date, ISO, Unix seconds, Unix milliseconds | `src/components/tools/unix-timestamp-converter/UnixTimestampConverterTool.astro` | Reuses `TimestampConverterTool`, JavaScript `Date`, Clipboard API | Yes | Yes | Timestamp Converter |
| 23 | Timestamp Converter | Chuyen Doi Timestamp | Conversion Tools | `/tools/timestamp-converter` | `/vi/tools/timestamp-converter` | Converts timestamps and readable dates. | Same as Unix Timestamp Converter. | Unix timestamp or date-time | Local date, UTC date, ISO, Unix seconds, Unix milliseconds | `src/components/tools/timestamp-converter/TimestampConverterTool.astro` | JavaScript `Date`, Clipboard API | Yes | Yes | Unix Timestamp Converter |
| 24 | Color Converter | Chuyen Doi Mau | Conversion Tools | `/tools/color-converter` | `/vi/tools/color-converter` | Converts color formats. | HEX parsing, short HEX expansion, RGB conversion, HSL conversion, preview swatch, copy results. | HEX color | HEX, RGB, HSL and preview | `src/components/tools/color-converter/ColorConverterTool.astro` | Component-local color math, Clipboard API | Yes | Yes | No current split color tools |
| 25 | Percentage Calculator | May Tinh Phan Tram | Calculator Tools | `/tools/percentage-calculator` | `/vi/tools/percentage-calculator` | Calculates common percentage problems. | Percent of value, value as percent of another value, percentage change, rounded results. | Numbers | Percentage results | `src/components/tools/percentage-calculator/PercentageCalculatorTool.astro` | Browser arithmetic | Yes | Yes | Keep separate |

## Duplicate and Overlap Analysis

### A. High Overlap

#### Timestamp Converter + Unix Timestamp Converter

- Related tools: Timestamp Converter, Unix Timestamp Converter.
- Similar logic: both use the same timestamp/date conversion flow and the same `TimestampConverterTool` UI/logic.
- Differences: route, category, SEO text, and keyword targeting differ. `Unix Timestamp Converter` is under Developer Tools; `Timestamp Converter` is under Conversion Tools.
- Repeated components: none inside the tool body because `UnixTimestampConverterTool.astro` wraps/reuses `TimestampConverterTool.astro`.
- Repeated utility functions: none beyond the reused component.
- Dependency: JavaScript `Date`, Clipboard API.
- Merge suitability: very suitable at component level, already done. Route-level merge should be handled cautiously because both routes can target different SEO intent.

#### JSON Formatter + JSON Validator

- Related tools: JSON Formatter, JSON Validator.
- Similar logic: both parse JSON with `JSON.parse`; both show error states; both operate on JSON text in a textarea.
- Differences: Formatter rewrites output with `JSON.stringify` and supports format/minify; Validator focuses on validation, line/column hints, and JSON structure summary.
- Repeated components: textarea panels, status/error messages, action buttons.
- Repeated utility functions: JSON parsing/error handling is local to both components.
- Dependency: native `JSON`.
- Merge suitability: very suitable as a shared JSON component with modes, while keeping two SEO routes.

#### Timestamp Routes as Duplicate SEO Risk

- Related routes: `/tools/timestamp-converter`, `/tools/unix-timestamp-converter`, and VI equivalents.
- Similar logic: effectively identical runtime UI.
- Differences: names/descriptions/keywords are slightly different.
- Repeated components: intentionally shared.
- Dependency: JavaScript `Date`.
- Merge suitability: keep one shared component, keep route SEO separate only if content remains differentiated.

### B. Medium Overlap

#### Word Counter + Character Counter

- Related tools: Word Counter, Character Counter.
- Similar logic: text measurement, word regex, character counting, textarea layout.
- Differences: Word Counter includes sentence/paragraph/reading time; Character Counter includes no-space chars, line count, limit usage and remaining count.
- Repeated components: stats cards, textarea, live update.
- Repeated utility functions: Character Counter duplicates word regex logic that already exists in `src/utils/text.ts`.
- Dependency: browser regex only.
- Merge suitability: possible as `Text Counter`, but keeping separate SEO routes is valuable.

#### Remove Duplicate Lines + Sort Lines

- Related tools: Remove Duplicate Lines, Sort Lines.
- Similar logic: multiline input, line splitting, trimming, empty-line handling, unique handling, copy/download/example/clear.
- Differences: Remove Duplicate Lines preserves first occurrence; Sort Lines reorders by text/numeric/length and direction.
- Repeated components: two-panel textarea layout, action buttons, download helper, clipboard helper.
- Repeated utility functions: line splitting, trimming, de-duplication, `downloadText`.
- Dependency: native arrays, `Set`, Blob, Clipboard API.
- Merge suitability: possible as `Line Tools`, but not urgent.

#### Case Converter + Slug Generator

- Related tools: Case Converter, Slug Generator.
- Similar logic: text tokenization, word normalization, casing/separator transforms, copy/example/clear.
- Differences: Slug Generator removes unsafe URL chars, handles accents, separators, stop words; Case Converter preserves broader text and offers many casing formats.
- Repeated components: input/output panels and copy controls.
- Repeated utility functions: word splitting and case transformations could be extracted.
- Dependency: native string/regex.
- Merge suitability: possible with tabs/modes, but separate slug SEO intent is strong.

#### Base64 Encoder/Decoder + URL Encoder/Decoder

- Related tools: Base64 Encoder/Decoder, URL Encoder/Decoder.
- Similar logic: one input, one output, encode/decode modes, copy, error status.
- Differences: Base64 uses byte encoding/decoding; URL uses URL component percent encoding.
- Repeated components: textarea pair and encode/decode/copy controls.
- Repeated utility functions: clipboard/status handling.
- Dependency: `TextEncoder`, `TextDecoder`, `btoa`, `atob`, `encodeURIComponent`, `decodeURIComponent`.
- Merge suitability: possible as `Text Encoder & Decoder`; keep existing routes if SEO matters.

#### HTML Formatter + CSS Minifier + JavaScript Minifier

- Related tools: HTML Formatter, CSS Minifier, JavaScript Minifier.
- Similar logic: code textarea input/output, validate/run/copy/download/example/clear, status, file download helpers.
- Differences: HTML formats; CSS minifies; JS minifies with a scanner and optional comment preservation.
- Repeated components: code editor textarea layout, action toolbar, status line, download helper.
- Repeated utility functions: `downloadText`, clipboard, size stats for minifiers.
- Dependency: native browser APIs.
- Merge suitability: possible at shared UI/helper level. Full route merge should wait for a designed Code Tools UI.

#### UUID Generator + Random Number Generator

- Related tools: UUID Generator, Random Number Generator.
- Similar logic: random generation and copy.
- Differences: UUID is fixed identifier format; Random Number uses ranges, integer/decimal modes, quantity.
- Repeated components: output and copy button.
- Dependency: Web Crypto.
- Merge suitability: low to medium; could share random helper, but user intent differs.

### C. Same Category Only

- Text Compare is in Text Tools but should not merge with counters/converters because the UI and algorithm are diff-oriented.
- Lorem Ipsum Generator, QR Code Generator, Password Generator, UUID Generator, and Random Number Generator are all generators, but their outputs and user intents differ.
- Regex Tester is a developer tool but has a unique regex testing workflow and should remain separate.
- Markdown Previewer and HTML Formatter both touch markup, but Markdown Previewer is a writing/preview workflow while HTML Formatter is code cleanup.
- Color Converter is a conversion tool but no separate color routes currently exist to merge.
- Percentage Calculator is the only Calculator Tool and should remain separate.

## Merge Candidates

### Timestamp Converter

**Current tools:**

- Timestamp Converter.
- Unix Timestamp Converter.

**Why they can merge:**

The runtime logic is already shared through `UnixTimestampConverterTool.astro`, which renders `TimestampConverterTool.astro`. Both convert Unix seconds/milliseconds and date-time values into local, UTC, ISO, Unix seconds, and Unix milliseconds.

**Possible merged UI:**

- One input for timestamp.
- One date-time input.
- Buttons for now/example/clear.
- Copy buttons per output.
- Route-specific intro text depending on landing page.

**Features to preserve:**

- Seconds and milliseconds detection.
- Timestamp-to-date conversion.
- Date-to-timestamp conversion.
- Local time, UTC, ISO, Unix seconds, Unix milliseconds.
- Copy individual results.
- Example and clear.

**Suggested main route:**

- `/tools/timestamp-converter`

**Old route handling:**

- Keep `/tools/unix-timestamp-converter` as an SEO landing page using the same component, or redirect only after confirming it has no SEO value.

**Risks:**

- Losing a search-intent route for "unix timestamp converter".
- Duplicate SEO if both pages keep almost identical content.

**Priority:**

- High for content/SEO differentiation; implementation reuse is already done.

### JSON Tools

**Current tools:**

- JSON Formatter.
- JSON Validator.

**Why they can merge:**

Both parse JSON text locally and report valid/invalid states. Formatter already validates before formatting/minifying. Validator adds more detailed error/summary output.

**Possible merged UI:**

- Tabs: Format, Minify, Validate.
- One JSON input.
- One output/details panel.
- Status summary.
- Optional sample loader.

**Features to preserve:**

- Pretty print indentation.
- Minify output.
- Parse error display.
- Line/column hints.
- JSON summary.
- Copy output.

**Suggested main route:**

- `/tools/json-formatter`

**Old route handling:**

- Use a shared JSON component but keep `/tools/json-validator` as its own SEO route opened in Validate mode.

**Risks:**

- UI may become too dense if format/minify/validate details are all visible at once.
- Validator SEO page may need unique explanatory content.

**Priority:**

- High.

### Text Encoder & Decoder

**Current tools:**

- Base64 Encoder/Decoder.
- URL Encoder/Decoder.

**Why they can merge:**

Both use the same input-output flow and encode/decode actions. The main difference is the algorithm chosen by mode.

**Possible merged UI:**

- Dropdown for encoding type: Base64, URL Component.
- Toggle or segmented control: Encode / Decode.
- One input and one output.
- Swap button where safe.

**Features to preserve:**

- UTF-8-safe Base64 encoding/decoding.
- URL component encoding/decoding.
- Error message for malformed input.
- Copy output.

**Suggested main route:**

- `/tools/text-encoder-decoder`

**Old route handling:**

- Keep existing routes as SEO landing pages that open the shared component in the correct mode.

**Risks:**

- A generic route can dilute exact-match SEO for Base64 and URL encode/decode.
- Future formats like HTML, Hex, Unicode, ASCII could make the UI too busy.

**Priority:**

- Medium.

### Line Tools

**Current tools:**

- Remove Duplicate Lines.
- Sort Lines.

**Why they can merge:**

Both operate line-by-line on multiline text and share trimming, empty-line handling, unique-line handling, output, copy, and download behaviors.

**Possible merged UI:**

- Tabs or dropdown: Remove Duplicates, Sort.
- Shared multiline input/output.
- Options panel changes by mode.
- Copy, download, example, clear.

**Features to preserve:**

- Preserve first occurrence when de-duplicating.
- Case-sensitive matching option.
- Trim option.
- Skip empty lines.
- Unique lines option for Sort Lines.
- Text, numeric, and length sorting.
- Ascending/descending order.

**Suggested main route:**

- `/tools/line-tools`

**Old route handling:**

- Prefer shared component while keeping `/tools/remove-duplicate-lines` and `/tools/sort-lines` as SEO routes opened in the relevant mode.

**Risks:**

- Too many line operations in one screen can become confusing if future tools are added.
- Existing route keywords are clear and should not be removed without redirects or landing pages.

**Priority:**

- Medium.

### Text Counter

**Current tools:**

- Word Counter.
- Character Counter.

**Why they can merge:**

Both analyze text length and share text input/stats output. Some counting logic is already centralized in `src/utils/text.ts` for Word Counter, but Character Counter repeats part of it.

**Possible merged UI:**

- One text input.
- Stats grid with all word/character/line/sentence/paragraph/reading-time metrics.
- Optional character limit panel.

**Features to preserve:**

- Word count.
- Character count with and without spaces.
- Sentence count.
- Paragraph count.
- Line count.
- Reading time.
- Optional limit and remaining count.
- Copy input.

**Suggested main route:**

- `/tools/word-counter` or `/tools/text-counter`

**Old route handling:**

- Keep both current SEO routes and open the same shared component with route-specific emphasis.

**Risks:**

- Word Counter is likely a valuable SEO page and should not be deleted.
- A combined stats panel may be visually busier.

**Priority:**

- Medium.

### Code Format and Minify Tools

**Current tools:**

- HTML Formatter.
- CSS Minifier.
- JavaScript Minifier.
- JSON Formatter.
- JSON Validator.

**Why they can merge:**

They share a code editor style, run/copy/download/error workflow, and browser-only processing. However, each language has different logic and user intent.

**Possible merged UI:**

- Top-level language tabs: JSON, HTML, CSS, JavaScript.
- Per-language actions: Format, Validate, Minify where supported.
- Shared input/output panels.

**Features to preserve:**

- JSON format/minify/validate.
- HTML format.
- CSS minify and size savings.
- JavaScript minify, keep comments, syntax checks, size savings.
- Copy/download/example/clear.

**Suggested main route:**

- `/tools/code-formatter`

**Old route handling:**

- Keep current routes as SEO landing pages using shared code panels. Do not redirect until search data is available.

**Risks:**

- Large combined UI can reduce clarity.
- Bundle size can grow if future industrial formatters/minifiers are added.
- Some exact-match routes have separate SEO value.

**Priority:**

- Low to medium. Extract shared UI/helpers first.

## Special Group Checks

### Color Tools

Current project has only `Color Converter`. No separate `HEX to RGB`, `RGB to HEX`, `HEX to HSL`, or `HSL to RGB` routes were found. The existing component currently accepts HEX and outputs HEX/RGB/HSL with a preview swatch. No immediate merge is needed. If separate color routes are added later, they should share one `Color Converter` component and open in the relevant mode.

### Encoder/Decoder Tools

Current encoder/decoder tools are already combined by format:

- `Base64 Encoder/Decoder`.
- `URL Encoder/Decoder`.

No HTML, Binary, Hex, Unicode, ASCII, or JWT decoder route/component was found. A future `Text Encoder & Decoder` could combine Base64 and URL modes, but preserving existing SEO routes is recommended.

### Code Tools

Current code tools:

- `JSON Formatter`.
- `JSON Validator`.
- `Markdown Previewer`.
- `HTML Formatter`.
- `CSS Minifier`.
- `JavaScript Minifier`.
- `Regex Tester`.

Recommended approach: do not merge all code tools into one page now. First extract shared editor/actions helpers. JSON Formatter + JSON Validator are the strongest merge pair. HTML/CSS/JS can share UI but should remain separate route intents until a fuller code-tool design exists.

### Text Tools

Current text tools:

- `Word Counter`.
- `Character Counter`.
- `Case Converter`.
- `Remove Duplicate Lines`.
- `Slug Generator`.
- `Sort Lines`.
- `Text Compare`.

Recommended grouping:

- Line Tools: Remove Duplicate Lines, Sort Lines; future Reverse Lines, Add Line Numbers, Add Prefix/Suffix, Remove Empty Lines.
- Text Cleaner: future Remove Extra Spaces, Remove Line Breaks, Text Cleaner.
- Text Converter: Case Converter, Slug Generator.
- Text Analyzer: Word Counter, Character Counter.

Do not merge all text tools into one tool because Text Compare and counters have different workflows.

### Image Tools

No image tools were found in current routes/components/data. There are no JPG/PNG/WebP converter, image resizer, compressor, cropper, or rotator pages to merge. If added later, format conversion tools can share one converter component; editing tools can share an image editor. Image Compressor may deserve its own SEO route because search intent is specific.

### Date and Time Tools

Current date/time coverage is limited to:

- `Timestamp Converter`.
- `Unix Timestamp Converter`.

No Age Calculator, Date Difference, Add Days, Subtract Days, Days Until, Working Days, or Time Zone Converter route/component was found. The two timestamp routes should keep shared logic and differentiated SEO content.

### Unit Converter

No Length, Weight, Temperature, Area, Volume, or Data Storage converter route/component was found. If these are added later, use one shared Unit Converter component with route-specific default category/unit for SEO.

## Shared Code and Component Analysis

| Repeated area | Files involved | Tools involved | Similarity | Recommendation |
| --- | --- | --- | --- | --- |
| Copy-to-clipboard logic | Most `src/components/tools/*/*Tool.astro` files | Almost all tools with outputs | High | Create `copyText` helper or small shared action utility when refactoring is approved. |
| Blob download helper | `RemoveDuplicateLinesTool`, `SortLinesTool`, `SlugGeneratorTool`, `MarkdownPreviewerTool`, `HtmlFormatterTool`, `CssMinifierTool`, `JavaScriptMinifierTool` | Text/code tools | High | Extract `downloadText(filename, text, mimeType)`. |
| Input/output textarea layout | Base64, URL, Case, Remove Duplicate Lines, Sort Lines, Markdown, HTML, CSS, JS, JSON | Text/code tools | High | Create shared `ToolTextareaPanel` or code/text panel component. |
| Status/error message | JSON, Base64, URL, Regex, HTML, CSS, JS, line tools, timestamp | Most interactive tools | Medium to high | Create a shared status pattern/helper for consistent success/error classes. |
| Line splitting / cleanup | Remove Duplicate Lines, Sort Lines, Text Compare | Text line tools | Medium | Extract line utilities only after deciding future Line Tools direction. |
| Word counting regex | `src/utils/text.ts`, `CharacterCounterTool.astro`, `CaseConverterTool.astro` | Word Counter, Character Counter, Case Converter | Medium | Reuse `getTextStats` or extract `getWords`. |
| JSON parse error handling | `JsonFormatterTool.astro`, `JsonValidatorTool.astro` | JSON tools | High | Extract JSON parser/error helper. |
| Size stats | CSS Minifier, JavaScript Minifier | Code minifiers | High | Extract byte/savings utility. |
| SEO metadata | `BaseLayout.astro`, `SEO.astro`, `ToolLayout.astro`, `src/utils/seo.ts` | All pages | Already shared | Keep as-is. |
| FAQ rendering/schema | `ToolLayout.astro`, `src/data/toolContent.ts`, `src/utils/schema.ts` | All tool pages | Already shared | Keep as-is. |
| Schema JSON-LD | `ToolLayout.astro`, `JsonLd.astro`, `src/utils/schema.ts` | All tool pages | Already shared | Keep as-is. |
| Language routing | `src/i18n/config.ts`, `Header`, `Footer`, `LanguageSwitcher`, route files | All localized pages | Already shared | Keep as-is. |
| Search/filter | `ToolSearch.astro`, `ToolCard.astro`, `ToolsIndexPage.astro` | Tool directory | Already shared | Keep as-is; search is client-side over card data attributes. |

## Route and SEO Risks

| Risk | Routes / files | Assessment | Recommendation |
| --- | --- | --- | --- |
| Duplicate timestamp content | `/tools/timestamp-converter`, `/tools/unix-timestamp-converter`, VI equivalents | High overlap because both render the same conversion component. | Keep shared component; make SEO copy and examples more distinct, or keep one as a mode-specific landing page. |
| JSON route overlap | `/tools/json-formatter`, `/tools/json-validator`, VI equivalents | Medium overlap because both parse JSON and validation is part of formatting. | Shared component with route-specific mode is recommended. |
| Counter route overlap | `/tools/word-counter`, `/tools/character-counter`, VI equivalents | Medium overlap but distinct SEO intent. | Keep both routes, possibly shared analyzer component. |
| Encoder/decoder overlap | `/tools/base64-encoder-decoder`, `/tools/url-encoder-decoder`, VI equivalents | Medium overlap in UI flow, different algorithms/search intent. | Keep routes; consider shared encoder UI. |
| Code tool title similarity | HTML/CSS/JS/JSON code utility routes | Low to medium; names are language-specific. | Keep exact titles/descriptions differentiated by language and action. |
| Hreflang/canonical | `BaseLayout.astro`, `SEO.astro`, `src/i18n/config.ts` | Canonical uses localized path; alternates include EN, VI, and x-default. | Current architecture is sound. Verify rendered href values after deployment when `PUBLIC_SITE_URL` changes. |
| Sitemap duplicates | `src/pages/sitemap.xml.ts` | Sitemap uses `Set`, and build output has 72 unique URLs. | No route duplication found in generated sitemap. |
| Home/category counts | `HomePage.astro`, categories from data | Counts derive from active tools; current numbers match 25 active tools. | No issue found. |

Important SEO rule: merging UI/component logic does not require deleting or redirecting SEO routes. For Sunny Tools, the safer path is shared components with route-specific content when keywords differ.

## Recommended Decisions

Each real tool appears in exactly one group below.

### Group 1: Merge Immediately

- Timestamp Converter.
- Unix Timestamp Converter.

Reason: runtime logic is identical and already shared. The remaining work is SEO/route strategy, not component implementation.

### Group 2: Share Component but Keep Separate Routes

- JSON Formatter.
- JSON Validator.
- Word Counter.
- Character Counter.
- Base64 Encoder/Decoder.
- URL Encoder/Decoder.
- Remove Duplicate Lines.
- Sort Lines.
- Case Converter.
- Slug Generator.

Reason: these pairs/groups have overlapping UI or logic, but their search intent is specific enough to keep route-level SEO.

### Group 3: Can Merge Later

- HTML Formatter.
- CSS Minifier.
- JavaScript Minifier.
- UUID Generator.
- Random Number Generator.

Reason: these can share infrastructure or fit future umbrella tools, but merging now would require UI design decisions and may blur intent.

### Group 4: Keep Separate

- Text Compare.
- Lorem Ipsum Generator.
- QR Code Generator.
- Password Generator.
- Regex Tester.
- Markdown Previewer.
- Color Converter.
- Percentage Calculator.

Reason: these tools have distinct workflows, outputs, dependencies, or user intent.

## Proposed Tool Architecture

| Proposed tool | Internal functions | Current routes that can share logic | Suggested main route | Keep separate SEO routes |
| --- | --- | --- | --- | --- |
| Text Counter | Words, characters, no-space chars, lines, sentences, paragraphs, reading time, limits | `/tools/word-counter`, `/tools/character-counter` | `/tools/word-counter` or `/tools/text-counter` | Yes |
| Text Converter | Case modes, slug generation, separator options, accent normalization | `/tools/case-converter`, `/tools/slug-generator` | `/tools/case-converter` | Yes |
| Line Tools | Remove duplicates, sort, unique, trim, skip empty, future line numbering/prefix/suffix | `/tools/remove-duplicate-lines`, `/tools/sort-lines` | `/tools/line-tools` | Yes |
| JSON Tools | Format, minify, validate, error detail, structure summary | `/tools/json-formatter`, `/tools/json-validator` | `/tools/json-formatter` | Yes |
| Text Encoder & Decoder | Base64 encode/decode, URL encode/decode, future HTML/Hex/Unicode modes | `/tools/base64-encoder-decoder`, `/tools/url-encoder-decoder` | `/tools/text-encoder-decoder` | Yes |
| Timestamp Converter | Unix seconds, milliseconds, local, UTC, ISO, date input | `/tools/timestamp-converter`, `/tools/unix-timestamp-converter` | `/tools/timestamp-converter` | Probably yes |
| Code Minifier/Formatter Shell | Shared editor panels, copy, download, examples, size stats | `/tools/html-formatter`, `/tools/css-minifier`, `/tools/javascript-minifier` | `/tools/code-formatter` or keep individual | Yes |
| Standalone Generators | QR, password, UUID, random number, lorem ipsum | Existing generator routes | Keep current routes | Yes |
| Standalone Utilities | Text Compare, Regex Tester, Markdown Previewer, Color Converter, Percentage Calculator | Current routes | Keep current routes | Yes |

## File Inventory

Shared route, data, SEO, i18n, and component files used by all or most tools:

- Page route files: `src/pages/tools/[slug].astro`, `src/pages/[locale]/tools/[slug].astro`.
- Tool registry/page renderer: `src/components/pages/ToolPage.astro`.
- Tool layout: `src/components/layout/ToolLayout.astro`.
- Base layout and SEO shell: `src/layouts/BaseLayout.astro`, `src/components/seo/SEO.astro`, `src/components/seo/JsonLd.astro`.
- Schema utilities: `src/utils/schema.ts`.
- SEO utilities: `src/utils/seo.ts`.
- Locale utilities: `src/i18n/config.ts`.
- Translations: `src/i18n/messages.ts`.
- Tool metadata: `src/data/tools.ts`.
- Tool SEO/FAQ content: `src/data/toolContent.ts`.
- Categories: `src/data/categories.ts`.
- Navigation: `src/data/navigation.ts`.
- Tool list/search components: `src/components/tools/ToolCard.astro`, `src/components/tools/ToolGrid.astro`, `src/components/tools/ToolSearch.astro`, `src/components/tools/ToolCategoryList.astro`.
- Sitemap/robots: `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts`.
- Tests: no dedicated test files were found in the current project tree.

| Tool | Page/route file | Component file | Translation/data/SEO files | Utility file | Dependency/API |
| --- | --- | --- | --- | --- | --- |
| Word Counter | `src/pages/tools/[slug].astro`, `src/pages/[locale]/tools/[slug].astro` | `src/components/tools/word-counter/WordCounterTool.astro` | `src/data/tools.ts`, `src/data/toolContent.ts`, `src/i18n/messages.ts`, `ToolLayout.astro` | `src/utils/text.ts` | Clipboard API |
| Character Counter | same dynamic route files | `src/components/tools/character-counter/CharacterCounterTool.astro` | same shared data/SEO files | none dedicated | Browser regex |
| Case Converter | same dynamic route files | `src/components/tools/case-converter/CaseConverterTool.astro` | same shared data/SEO files | none dedicated | Clipboard API |
| Remove Duplicate Lines | same dynamic route files | `src/components/tools/remove-duplicate-lines/RemoveDuplicateLinesTool.astro` | same shared data/SEO files | none dedicated | `Set`, Clipboard API, Blob download |
| Slug Generator | same dynamic route files | `src/components/tools/slug-generator/SlugGeneratorTool.astro` | same shared data/SEO files | none dedicated | Unicode normalization, Clipboard API, Blob download |
| Sort Lines | same dynamic route files | `src/components/tools/sort-lines/SortLinesTool.astro` | same shared data/SEO files | none dedicated | `localeCompare`, `Set`, Clipboard API, Blob download |
| Text Compare | same dynamic route files | `src/components/tools/text-compare/TextCompareTool.astro` | same shared data/SEO files | none dedicated | Component-local LCS algorithm |
| Lorem Ipsum Generator | same dynamic route files | `src/components/tools/lorem-ipsum-generator/LoremIpsumGeneratorTool.astro` | same shared data/SEO files | none dedicated | `Math.random`, Clipboard API |
| QR Code Generator | same dynamic route files | `src/components/tools/qr-code-generator/QrCodeGeneratorTool.astro` | same shared data/SEO files | none dedicated | `qrcode`, Canvas API |
| Password Generator | same dynamic route files | `src/components/tools/password-generator/PasswordGeneratorTool.astro` | same shared data/SEO files | none dedicated | Web Crypto, Clipboard API |
| UUID Generator | same dynamic route files | `src/components/tools/uuid-generator/UuidGeneratorTool.astro` | same shared data/SEO files | none dedicated | `crypto.randomUUID`, Web Crypto, Clipboard API |
| Random Number Generator | same dynamic route files | `src/components/tools/random-number-generator/RandomNumberGeneratorTool.astro` | same shared data/SEO files | none dedicated | Web Crypto, Clipboard API |
| JSON Formatter | same dynamic route files | `src/components/tools/json-formatter/JsonFormatterTool.astro` | same shared data/SEO files | none dedicated | native `JSON`, Clipboard API |
| JSON Validator | same dynamic route files | `src/components/tools/json-validator/JsonValidatorTool.astro` | same shared data/SEO files | none dedicated | native `JSON` |
| Base64 Encoder/Decoder | same dynamic route files | `src/components/tools/base64-encoder-decoder/Base64EncoderDecoderTool.astro` | same shared data/SEO files | none dedicated | `TextEncoder`, `TextDecoder`, `btoa`, `atob`, Clipboard API |
| URL Encoder/Decoder | same dynamic route files | `src/components/tools/url-encoder-decoder/UrlEncoderDecoderTool.astro` | same shared data/SEO files | none dedicated | `encodeURIComponent`, `decodeURIComponent`, Clipboard API |
| Regex Tester | same dynamic route files | `src/components/tools/regex-tester/RegexTesterTool.astro` | same shared data/SEO files | none dedicated | `RegExp` |
| Markdown Previewer | same dynamic route files | `src/components/tools/markdown-previewer/MarkdownPreviewerTool.astro` | same shared data/SEO files | none dedicated | component-local Markdown renderer, Clipboard API, Blob download |
| HTML Formatter | same dynamic route files | `src/components/tools/html-formatter/HtmlFormatterTool.astro` | same shared data/SEO files | none dedicated | component-local HTML tokenizer, Clipboard API, Blob download |
| CSS Minifier | same dynamic route files | `src/components/tools/css-minifier/CssMinifierTool.astro` | same shared data/SEO files | none dedicated | component-local CSS minifier, Blob, Clipboard API |
| JavaScript Minifier | same dynamic route files | `src/components/tools/javascript-minifier/JavaScriptMinifierTool.astro` | same shared data/SEO files | none dedicated | component-local JS text scanner, Blob, Clipboard API |
| Unix Timestamp Converter | same dynamic route files | `src/components/tools/unix-timestamp-converter/UnixTimestampConverterTool.astro` | same shared data/SEO files | `TimestampConverterTool.astro` reused | JavaScript `Date`, Clipboard API |
| Timestamp Converter | same dynamic route files | `src/components/tools/timestamp-converter/TimestampConverterTool.astro` | same shared data/SEO files | none dedicated | JavaScript `Date`, Clipboard API |
| Color Converter | same dynamic route files | `src/components/tools/color-converter/ColorConverterTool.astro` | same shared data/SEO files | none dedicated | component-local color math, Clipboard API |
| Percentage Calculator | same dynamic route files | `src/components/tools/percentage-calculator/PercentageCalculatorTool.astro` | same shared data/SEO files | none dedicated | Browser arithmetic |

## Final Notes

- No hidden per-tool route outside the dynamic tool route structure was found.
- No inactive/planned tool page is generated because tool pages are created from `getActiveTools()`.
- `ToolPage.astro` has a component mapping for all 25 active tool slugs.
- `toolContent.ts` has SEO/body/FAQ content for every rendered tool; missing content would throw during `ToolPage` render and the current build has passed previously.
- The most important immediate cleanup opportunity is not deleting routes, but extracting shared component/helper logic while preserving route-specific SEO.
