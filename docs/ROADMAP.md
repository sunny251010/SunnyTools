# Roadmap

## Phase 1: Nền Tảng

Độ ưu tiên: Cao

Mục tiêu: Xây dựng nền tảng static site và bộ tool đầu tiên có chất lượng tốt.

Công việc:

- Khởi tạo Astro với TypeScript.
- Cấu hình Tailwind CSS, ESLint và Prettier.
- Tạo BaseLayout, Header, Footer, SEO component và các UI component dùng chung.
- Tạo data tập trung cho tool, category và navigation.
- Tạo trang chủ và trang All Tools.
- Tạo Word Counter.
- Thêm responsive và mobile menu.
- Thêm các trang About, Contact, Privacy Policy và Terms.
- Thêm ad placeholder chỉ hiện trong development.

Kết quả đầu ra:

- Project Astro static sẵn sàng chạy local và deploy.
- Bộ tool core nằm dưới `/tools/<slug>`.
- Category landing pages nằm dưới `/categories/<slug>`.
- Tài liệu về kiến trúc, SEO và cách thêm tool mới.

Điều kiện hoàn thành:

- `astro check` pass.
- Production build pass.
- Link nội bộ của các route đã triển khai hoạt động.
- Tool data không bị lặp lại ở nhiều component/page.

## Phase 2: Text Tools

Độ ưu tiên: Cao

Mục tiêu: Mở rộng nhóm tool xử lý văn bản.

Trạng thái: Đã có phiên bản đầu cho các tool chính. Bước tiếp theo là tăng chiều sâu nội dung, thêm
ví dụ và xử lý edge case tốt hơn.

Công việc:

- Character Counter.
- Case Converter.
- Remove Duplicate Lines.
- Sort Lines.
- Text Compare.
- Lorem Ipsum Generator.

Kết quả đầu ra:

- Nhiều text tool active dưới `/tools/<slug>`.
- Internal linking giữa các text tool tốt hơn.

Điều kiện hoàn thành:

- Mỗi tool có route riêng, SEO metadata, nội dung hướng dẫn, FAQ và related tools.
- Logic của tool chạy trên browser.

## Phase 3: Generator Tools

Độ ưu tiên: Trung bình

Mục tiêu: Thêm các tool tạo giá trị phổ biến.

Trạng thái: Đã có phiên bản đầu cho QR Code, Password, UUID và Lorem Ipsum.

Công việc:

- QR Code Generator.
- Password Generator.
- UUID Generator.
- Random Number Generator.

Kết quả đầu ra:

- Nhóm Generator Tools có đủ giá trị để dùng như một cụm riêng.

Điều kiện hoàn thành:

- Giá trị được generate local trên browser.
- Các tool nhạy cảm về bảo mật không gửi dữ liệu đi đâu.

## Phase 4: Developer Tools

Độ ưu tiên: Cao

Mục tiêu: Thêm các utility dành cho developer.

Trạng thái: Đã có phiên bản đầu cho JSON, Base64, URL, Timestamp, Color và Percentage tools.

Công việc:

- JSON Formatter.
- JSON Validator.
- Base64 Encoder/Decoder.
- URL Encoder/Decoder.
- Timestamp Converter.
- Regex Tester.

Kết quả đầu ra:

- Nhóm Developer Tools hỗ trợ các workflow format, debug và làm sạch data thường gặp.

Điều kiện hoàn thành:

- Error state rõ ràng.
- Input không gửi lên backend.
- Input lớn vẫn cần giữ hiệu năng chấp nhận được.

## Phase 5: SEO Và Nội Dung

Độ ưu tiên: Cao

Mục tiêu: Cải thiện khả năng Google crawl, index và xếp hạng.

Công việc:

- Sitemap.
- Robots.txt.
- Structured data.
- FAQ schema.
- Internal linking.
- Related tools.
- Category landing pages tại `/categories/<slug>`.
- Nội dung hướng dẫn cho từng tool.

Kết quả đầu ra:

- Cấu trúc nội dung sẵn sàng cho SEO và crawl path rõ ràng.

Điều kiện hoàn thành:

- Sitemap có toàn bộ route active.
- Category page có nội dung hữu ích, không chỉ là danh sách tool.
- FAQ schema được tạo từ data có cấu trúc.

## Phase 6: Kiếm Tiền

Độ ưu tiên: Trung bình

Mục tiêu: Thêm khả năng tạo doanh thu mà không làm hỏng UX.

Công việc:

- Google AdSense.
- Quản lý vị trí quảng cáo.
- Development placeholder.
- Production ad component.
- Cookie consent nếu cần.
- Theo dõi Core Web Vitals.

Kết quả đầu ra:

- Tích hợp ads an toàn cho production.

Điều kiện hoàn thành:

- Ads không gây layout shift lớn.
- Yêu cầu consent được xem xét.
- Placeholder vẫn hữu ích trong development.

## Phase 7: Analytics Và Tối Ưu

Độ ưu tiên: Trung bình

Mục tiêu: Đo lường người dùng và cải thiện hiệu năng.

Công việc:

- Google Analytics hoặc Plausible.
- Theo dõi tool phổ biến.
- Theo dõi search query.
- Tối ưu Lighthouse.
- Tối ưu Core Web Vitals.

Kết quả đầu ra:

- Roadmap và tối ưu được dựa trên dữ liệu thực tế.

Điều kiện hoàn thành:

- Analytics tôn trọng yêu cầu privacy.
- Có performance budget và có cách theo dõi.

## Phase 8: Backend Tùy Chọn

Độ ưu tiên: Thấp

Mục tiêu: Chỉ thêm account/API khi thật sự có lý do.

Công việc:

- User accounts.
- Lưu lịch sử.
- Bookmark tool.
- API.
- Rate limiting.
- Supabase hoặc backend riêng.

Kết quả đầu ra:

- Lớp backend tùy chọn, có boundary rõ ràng.

Điều kiện hoàn thành:

- Tool static vẫn chạy được khi không login.
- Tính năng backend không làm hỏng kỳ vọng privacy của người dùng.
