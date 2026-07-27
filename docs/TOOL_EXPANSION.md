# Tool Expansion Backlog

This document tracks the requested 10-tool expansion for SunnyTools. It is meant to keep tool names,
Vietnamese labels, slugs, categories, and implementation status in one easy-to-review place.

## Requested Tools

| # | Tool | Vietnamese name | Category | Target route | Status |
|---|---|---|---|---|---|
| 1 | Remove Duplicate Lines | Xóa dòng trùng lặp | Text Tools | `/tools/remove-duplicate-lines` | Implemented |
| 2 | Sort Lines | Sắp xếp dòng văn bản | Text Tools | `/tools/sort-lines` | Implemented |
| 3 | Text Compare | So sánh văn bản | Text Tools | `/tools/text-compare` | Implemented |
| 4 | Case Converter | Chuyển đổi chữ hoa chữ thường | Text Tools | `/tools/case-converter` | Implemented |
| 5 | Slug Generator | Tạo đường dẫn Slug | Text Tools | `/tools/slug-generator` | Implemented |
| 6 | Markdown Previewer | Xem trước Markdown | Developer Tools | `/tools/markdown-previewer` | Implemented |
| 7 | HTML Formatter | Định dạng HTML | Developer Tools | `/tools/html-formatter` | Implemented |
| 8 | CSS Minifier | Thu gọn CSS | Developer Tools | `/tools/css-minifier` | Implemented |
| 9 | JavaScript Minifier | Thu gọn JavaScript | Developer Tools | `/tools/javascript-minifier` | Implemented |
| 10 | Unix Timestamp Converter | Chuyển đổi Unix Timestamp | Developer Tools | `/tools/unix-timestamp-converter` | Implemented |

## Notes

- Existing implemented tools should keep their current URLs to avoid breaking indexed pages.
- `Unix Timestamp Converter` reuses the existing timestamp conversion component while keeping a
  dedicated SEO route. Keep `/tools/timestamp-converter` active as the older generic route.
- All new tools should follow the existing centralized data model in `src/data/tools.ts`,
  `src/data/toolContent.ts`, and `src/i18n/messages.ts`.
- New routes should appear automatically in `sitemap.xml` when their tool status is `active`.
