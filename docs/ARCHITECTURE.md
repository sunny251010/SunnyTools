# Kiến Trúc

## Tổng Quan

SunnyTools dùng Astro theo hướng static-first. Các trang được render sẵn lúc build, còn logic của
tool chỉ chạy trên trình duyệt khi cần tương tác. Cách này giúp website tải nhanh, ít JavaScript,
và chưa cần backend trong giai đoạn đầu.

## Luồng Dữ Liệu

Thông tin tool nằm tập trung trong `src/data/tools.ts`. Danh mục nằm trong
`src/data/categories.ts`. Link điều hướng nằm trong `src/data/navigation.ts`.

Page và component đọc trực tiếp các file data này:

- Trang chủ đọc các tool nổi bật và tool phổ biến.
- Trang All Tools đọc toàn bộ danh sách tool và filter ở phía client.
- Trang tool đọc một tool theo slug và lấy related tools theo category.
- Card, grid và category list không tự viết lại danh sách tool riêng.

## Data Model Của Tool

Interface `Tool` được định nghĩa trong `src/types/tool.ts`. Model này gồm id, slug, mô tả,
category, keywords, thông tin hiển thị và trạng thái.

Trạng thái tool:

- `active`: đã triển khai và có link hoạt động.
- `planned`: đã lên kế hoạch, có thể hiển thị trong data nhưng chưa nên link đến route thật.
- `draft`: bản nháp cho tác giả, chưa sẵn sàng đưa ra ngoài.

## Component Tái Sử Dụng

Component được chia theo trách nhiệm:

- `common`: container, section title, breadcrumbs, ad placeholder.
- `layout`: header, footer, mobile menu và tool page layout.
- `seo`: metadata dùng chung.
- `tools`: card, grid, search/filter, category list và component riêng của từng tool.

`ToolLayout.astro` tạo khung chung cho mỗi trang tool. Mỗi tool page cung cấp:

- Slot chạy tool.
- Slot nội dung hướng dẫn.
- Slot FAQ.
- Related tools lấy từ data tập trung.

## Vì Sao Dùng Astro

Astro phù hợp vì phần lớn website là nội dung tĩnh và metadata SEO. Astro mặc định ship ít
JavaScript, hỗ trợ TypeScript, build static tốt và vẫn cho phép thêm script client nhỏ cho các tool
tương tác.

## Khi Nào Dùng JavaScript Hoặc Astro Island

Nếu tool chỉ cần DOM interaction đơn giản, hãy dùng Astro component kèm client script nhỏ. Chỉ nên
dùng Astro island khi tool cần UI nhiều state, canvas phức tạp, validation lớn, hoặc một thư viện
browser riêng.

Không nên biến toàn bộ site thành app React/Vue nếu chưa cần. Một tool phức tạp trong tương lai có
thể được tách thành island riêng mà không làm đổi kiến trúc chung.

## SEO

`BaseLayout.astro` render `SEO.astro`, và `SEO.astro` lấy default từ `src/utils/seo.ts`. Mỗi page
truyền title, description và path riêng. Domain tạm thời là `https://example.com`; cần đổi thành
domain thật trước khi launch chính thức.

## Quảng Cáo

`AdPlaceholder.astro` chỉ render trong development thông qua `import.meta.env.DEV`. Khi thêm Google
AdSense thật, nên tạo component production riêng và kiểm tra lại privacy, cookie consent, layout
shift và Core Web Vitals.

## Backend Trong Tương Lai

Giai đoạn hiện tại chưa cần backend. Nếu sau này cần user account, lưu lịch sử, bookmark tool hoặc
API, hãy thêm backend sau một boundary rõ ràng. Lựa chọn có thể là Supabase hoặc backend riêng nhỏ,
kèm rate limiting và quy tắc privacy trước khi release.
