import { defaultLocale, type Locale } from "../i18n/config";
import type { ToolCategory } from "../types/tool";

interface CategoryRecord {
  id: string;
  slug: string;
  text: Record<
    Locale,
    {
      name: string;
      description: string;
      guide: string;
      useCases: string[];
      tips: string[];
    }
  >;
}

const categoryRecords: CategoryRecord[] = [
  {
    id: "text-tools",
    slug: "text-tools",
    text: {
      en: {
        name: "Text Tools",
        description: "Count, clean, compare, and transform written content.",
        guide:
          "Text tools help with everyday writing workflows where small formatting and cleanup tasks would otherwise interrupt your focus.",
        useCases: [
          "Measure drafts, metadata, social posts, and ad copy before publishing.",
          "Clean pasted lists by sorting lines or removing duplicates.",
          "Compare text versions when editing notes, snippets, or documentation."
        ],
        tips: [
          "Use browser-local tools for private drafts and client copy.",
          "Keep related text utilities linked together so users can move from counting to cleaning without searching again."
        ]
      },
      vi: {
        name: "Công cụ văn bản",
        description: "Đếm, làm sạch, so sánh và chuyển đổi nội dung văn bản.",
        guide:
          "Nhóm công cụ văn bản hỗ trợ các workflow viết, chỉnh sửa và làm sạch nội dung nhỏ nhưng lặp lại hằng ngày.",
        useCases: [
          "Đo độ dài bản nháp, metadata, bài đăng mạng xã hội và nội dung quảng cáo trước khi xuất bản.",
          "Làm sạch danh sách đã dán bằng cách sắp xếp dòng hoặc xóa dòng trùng.",
          "So sánh các phiên bản văn bản khi chỉnh ghi chú, snippet hoặc tài liệu."
        ],
        tips: [
          "Dùng công cụ chạy cục bộ trong trình duyệt cho bản nháp riêng tư hoặc nội dung khách hàng.",
          "Liên kết các tiện ích văn bản liên quan để người dùng chuyển từ đếm sang làm sạch mà không phải tìm lại."
        ]
      }
    }
  },
  {
    id: "developer-tools",
    slug: "developer-tools",
    text: {
      en: {
        name: "Developer Tools",
        description: "Format, encode, decode, validate, and debug common data.",
        guide:
          "Developer tools focus on quick inspection tasks for snippets, encoded values, timestamps, colors, and patterns.",
        useCases: [
          "Format or validate JSON before sending it to an API or config file.",
          "Encode, decode, and inspect URL or Base64 values while debugging.",
          "Test regex patterns and convert timestamps during log analysis."
        ],
        tips: [
          "Keep sample data small enough to review visually before copying it into production code.",
          "Prefer local validation for tokens, payloads, and snippets that should not leave the device."
        ]
      },
      vi: {
        name: "Công cụ lập trình",
        description: "Định dạng, mã hóa, giải mã, kiểm tra và debug dữ liệu phổ biến.",
        guide:
          "Nhóm công cụ lập trình tập trung vào các thao tác kiểm tra nhanh với snippet, giá trị đã mã hóa, timestamp, màu sắc và pattern.",
        useCases: [
          "Định dạng hoặc kiểm tra JSON trước khi đưa vào API hay file config.",
          "Mã hóa, giải mã và xem URL/Base64 trong lúc debug.",
          "Thử regex pattern và chuyển timestamp khi phân tích log."
        ],
        tips: [
          "Giữ dữ liệu mẫu đủ nhỏ để dễ kiểm tra trực quan trước khi sao chép vào code production.",
          "Ưu tiên kiểm tra cục bộ với token, payload và snippet không nên rời khỏi thiết bị."
        ]
      }
    }
  },
  {
    id: "generator-tools",
    slug: "generator-tools",
    text: {
      en: {
        name: "Generator Tools",
        description: "Generate QR codes, passwords, UUIDs, and sample values.",
        guide:
          "Generator tools create ready-to-use values for design, testing, sharing, security, and everyday decisions.",
        useCases: [
          "Create QR codes, UUIDs, passwords, random numbers, and placeholder copy.",
          "Generate sample values for mockups, test cases, or quick demos.",
          "Produce values locally when privacy or repeat speed matters."
        ],
        tips: [
          "Review generated values before using them in public assets or production systems.",
          "For sensitive values like passwords, generate and copy them locally without storing them in the page."
        ]
      },
      vi: {
        name: "Công cụ tạo mã",
        description: "Tạo mã QR, mật khẩu, UUID và giá trị mẫu.",
        guide:
          "Nhóm công cụ tạo giá trị giúp tạo nhanh dữ liệu dùng cho thiết kế, test, chia sẻ, bảo mật và quyết định hằng ngày.",
        useCases: [
          "Tạo mã QR, UUID, mật khẩu, số ngẫu nhiên và nội dung placeholder.",
          "Tạo dữ liệu mẫu cho mockup, test case hoặc demo nhanh.",
          "Tạo giá trị cục bộ khi cần riêng tư hoặc thao tác nhiều lần."
        ],
        tips: [
          "Kiểm tra lại giá trị đã tạo trước khi dùng trong asset công khai hoặc hệ thống production.",
          "Với giá trị nhạy cảm như mật khẩu, hãy tạo và sao chép cục bộ, không lưu trên trang."
        ]
      }
    }
  },
  {
    id: "conversion-tools",
    slug: "conversion-tools",
    text: {
      en: {
        name: "Conversion Tools",
        description: "Convert colors, timestamps, URLs, and encoded content.",
        guide:
          "Conversion tools translate values between formats so designers, developers, and operators can read or reuse them quickly.",
        useCases: [
          "Convert timestamps into local, UTC, ISO, and Unix values.",
          "Translate HEX colors into RGB and HSL for frontend work.",
          "Move encoded content into a readable or URL-safe form."
        ],
        tips: [
          "Double-check timezone assumptions when converting timestamps from logs or APIs.",
          "Copy converted values directly from the result fields to avoid transcription mistakes."
        ]
      },
      vi: {
        name: "Công cụ chuyển đổi",
        description: "Chuyển đổi màu sắc, timestamp, URL và nội dung đã mã hóa.",
        guide:
          "Nhóm công cụ chuyển đổi dịch giá trị giữa nhiều định dạng để designer, developer và operator đọc hoặc tái sử dụng nhanh hơn.",
        useCases: [
          "Chuyển timestamp sang local, UTC, ISO và Unix.",
          "Chuyển màu HEX sang RGB và HSL cho frontend.",
          "Đổi nội dung đã mã hóa sang dạng dễ đọc hoặc an toàn cho URL."
        ],
        tips: [
          "Kiểm tra giả định múi giờ khi chuyển timestamp từ log hoặc API.",
          "Sao chép trực tiếp từ ô kết quả để tránh nhập sai thủ công."
        ]
      }
    }
  },
  {
    id: "calculator-tools",
    slug: "calculator-tools",
    text: {
      en: {
        name: "Calculator Tools",
        description: "Run quick percentage and everyday calculations.",
        guide:
          "Calculator tools cover small numeric tasks that are faster to solve in a focused browser utility than in a spreadsheet.",
        useCases: [
          "Calculate percentages, ratios, increases, decreases, and quick comparisons.",
          "Check pricing, discounts, growth, and content metrics during planning.",
          "Run repeat calculations without setting up spreadsheet formulas."
        ],
        tips: [
          "Use calculator outputs as quick checks, then verify high-stakes financial or legal numbers separately.",
          "Keep input values simple and visible so calculations are easy to review."
        ]
      },
      vi: {
        name: "Công cụ tính toán",
        description: "Tính phần trăm và các phép tính hằng ngày thật nhanh.",
        guide:
          "Nhóm công cụ tính toán xử lý các tác vụ số nhỏ, nhanh hơn khi dùng tiện ích tập trung thay vì mở spreadsheet.",
        useCases: [
          "Tính phần trăm, tỷ lệ, mức tăng, mức giảm và so sánh nhanh.",
          "Kiểm tra giá, giảm giá, tăng trưởng và chỉ số nội dung khi lập kế hoạch.",
          "Lặp lại phép tính mà không cần tạo công thức spreadsheet."
        ],
        tips: [
          "Dùng kết quả như kiểm tra nhanh, rồi xác minh riêng với con số tài chính hoặc pháp lý quan trọng.",
          "Giữ input đơn giản và dễ nhìn để kiểm tra phép tính thuận tiện hơn."
        ]
      }
    }
  }
];

const toCategory = (category: CategoryRecord, locale: Locale): ToolCategory => {
  const text = category.text[locale] ?? category.text[defaultLocale];

  return {
    id: category.id,
    slug: category.slug,
    ...text
  };
};

export const getCategories = (locale: Locale = defaultLocale): ToolCategory[] =>
  categoryRecords.map((category) => toCategory(category, locale));

export const categories = getCategories();

export const getCategoryById = (
  categoryId: string,
  locale: Locale = defaultLocale
): ToolCategory | undefined =>
  categoryRecords
    .filter((category) => category.id === categoryId)
    .map((category) => toCategory(category, locale))[0];
