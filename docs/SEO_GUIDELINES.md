# Hướng Dẫn SEO

## Metadata Của Page

Mỗi public page nên truyền các giá trị sau vào `BaseLayout` hoặc `ToolLayout`:

- Title.
- Meta description.
- Canonical path.
- Robots rule nếu khác `index, follow`.

Component metadata dùng chung nằm tại `src/components/seo/SEO.astro`.

## Domain

Domain tạm thời là `https://example.com`. Trước khi launch thật, cần thay trong:

- `astro.config.mjs`
- `src/utils/seo.ts`

Nếu deploy GitHub Pages với repo project như `SunnyTools`, workflow sẽ tự set base path theo tên
repo.

## Heading

Mỗi page chỉ nên có một H1. Tool page nên dùng tên tool làm H1. Các section phụ dùng H2, câu hỏi FAQ
dùng H3.

## URL

Dùng slug ổn định, lowercase và có dấu gạch ngang:

```text
/tools/word-counter
/tools/json-formatter
```

Không tạo nhiều route khác nhau cho cùng một mục đích.

## Nội Dung Của Tool Page

Nội dung nên hữu ích và có cấu trúc:

- Tool làm gì.
- Cách sử dụng.
- Kết quả được tính/generate/chuyển đổi như thế nào.
- Ghi chú privacy.
- FAQ.
- Related tools.

Không nên để page quá mỏng, chỉ có mỗi form mà không có nội dung giải thích.

## Internal Linking

Nên link từ:

- Trang chủ đến các tool phổ biến.
- All Tools đến các route active.
- Tool page đến related tools.
- Category page đến các tool trong category.

Không link tool `planned` đến route chưa tồn tại.

## Structured Data

Breadcrumb và FAQ nên giữ cấu trúc rõ ràng để sau này có thể sinh schema. Không nên hardcode
JSON-LD riêng lẻ trên từng page; khi vào Phase 5 nên tạo helper/schema component dùng chung.

## Hình Ảnh

Dùng Open Graph image placeholder mặc định cho đến khi có ảnh brand production. Đảm bảo image path
hợp lệ và cập nhật `src/utils/seo.ts` khi thay placeholder.

## Ads Và Layout Shift

Cần reserve không gian quảng cáo ổn định trước khi thêm AdSense production. Development placeholder
giúp test layout mà không load script ads thật.
