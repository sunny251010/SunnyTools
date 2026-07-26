# Thêm Tool Mới

Dùng checklist này mỗi khi thêm một browser-based tool mới.

## 1. Thêm Data Của Tool

Sửa `src/data/tools.ts` và thêm một entry `Tool`:

```ts
{
  id: "new-tool",
  name: "New Tool",
  slug: "new-tool",
  shortDescription: "Mô tả ngắn hiện trên card.",
  description: "Mô tả dài hơn, hữu ích cho SEO của page.",
  categoryId: "developer-tools",
  icon: "NT",
  keywords: ["keyword", "task"],
  status: "active"
}
```

Dùng `planned` nếu tool chưa có route và component hoàn chỉnh. Chỉ đổi sang `active` khi route đã
build được và UI tool chạy ổn.

## 2. Xác Nhận Category

Tái sử dụng category trong `src/data/categories.ts`. Chỉ thêm category mới khi tool không phù hợp
với các nhóm hiện có.

## 3. Tạo Component Tool

Tạo folder dưới `src/components/tools/<tool-slug>/`.

Ví dụ:

```text
src/components/tools/json-formatter/JsonFormatterTool.astro
```

Giữ UI và browser interaction trong component này. Nếu có logic tái sử dụng được, đặt vào
`src/utils/`.

## 4. Đăng Ký Tool Vào Dynamic Route

Hiện tại các tool active được render bởi:

```text
src/pages/tools/[slug].astro
```

Khi thêm tool mới, import component mới vào file này và thêm vào object `toolComponents` theo slug.

## 5. Dùng ToolLayout

Dynamic route đã wrap mỗi tool bằng `ToolLayout`. Tool component được render vào slot `tool`, còn
nội dung hướng dẫn và FAQ được lấy từ `src/data/toolContent.ts`.

## 6. Thêm SEO

Route kế thừa SEO thông qua `ToolLayout` và `BaseLayout`. Hãy đảm bảo `name`, `description` và
`slug` trong `src/data/tools.ts` chính xác.

## 7. Thêm Nội Dung Hướng Dẫn

Thêm entry trong `src/data/toolContent.ts`. Mỗi tool page nên có:

- Tool này là gì.
- Cách sử dụng.
- Cách tính toán/chuyển đổi/generate.
- Ghi chú privacy.
- FAQ.

## 8. Related Tools

Mặc định dùng `getRelatedTools(tool)` để lấy các tool cùng category. Chỉ cần custom nếu một tool cần
danh sách liên quan đặc biệt.

## 9. Kiểm Tra Responsive

Cần kiểm tra:

- Input không bị tràn trên mobile.
- Button dễ bấm.
- Label dài xuống dòng đẹp.
- Không có horizontal overflow.

## 10. Chạy Kiểm Tra

```bash
npm run check
npm run build
```

Sửa lỗi TypeScript, import, route và build trước khi để tool ở trạng thái `active`.
