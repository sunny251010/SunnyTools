import { defaultLocale, type Locale } from "../i18n/config";
import type { Tool, ToolStatus } from "../types/tool";

type ToolText = Pick<Tool, "name" | "shortDescription" | "description" | "keywords">;

interface ToolRecord {
  id: string;
  slug: string;
  categoryId: string;
  icon?: string;
  featured?: boolean;
  popular?: boolean;
  status: ToolStatus;
  text: Record<Locale, ToolText>;
}

const toolRecords: ToolRecord[] = [
  {
    id: "word-counter",
    slug: "word-counter",
    categoryId: "text-tools",
    icon: "WC",
    featured: true,
    popular: true,
    status: "active",
    text: {
      en: {
        name: "Word Counter",
        shortDescription: "Count words, characters, sentences, paragraphs, and reading time.",
        description:
          "A private browser-based word counter for quick writing, editing, and content checks.",
        keywords: ["word count", "character count", "reading time", "writing"]
      },
      vi: {
        name: "Đếm Từ",
        shortDescription: "Đếm số từ, ký tự, câu, đoạn văn và thời gian đọc.",
        description:
          "Công cụ đếm từ riêng tư chạy trên trình duyệt cho việc viết, biên tập và kiểm tra nội dung.",
        keywords: ["đếm từ", "đếm ký tự", "thời gian đọc", "viết nội dung"]
      }
    }
  },
  {
    id: "character-counter",
    slug: "character-counter",
    categoryId: "text-tools",
    icon: "CC",
    featured: true,
    popular: true,
    status: "active",
    text: {
      en: {
        name: "Character Counter",
        shortDescription: "Measure characters with or without spaces for forms and posts.",
        description: "Count characters, spaces, and limits for social posts, ads, and metadata.",
        keywords: ["characters", "spaces", "limit", "text"]
      },
      vi: {
        name: "Đếm Ký Tự",
        shortDescription: "Đếm ký tự có hoặc không tính khoảng trắng cho form và bài đăng.",
        description: "Đếm ký tự, khoảng trắng và giới hạn cho bài đăng mạng xã hội, quảng cáo và metadata.",
        keywords: ["đếm ký tự", "khoảng trắng", "giới hạn", "văn bản"]
      }
    }
  },
  {
    id: "case-converter",
    slug: "case-converter",
    categoryId: "text-tools",
    icon: "Aa",
    featured: true,
    status: "active",
    text: {
      en: {
        name: "Case Converter",
        shortDescription: "Convert text between uppercase, lowercase, title case, and more.",
        description: "Clean up text casing for titles, filenames, headings, and code snippets.",
        keywords: ["uppercase", "lowercase", "title case", "sentence case"]
      },
      vi: {
        name: "Chuyển Đổi Chữ Hoa Thường",
        shortDescription: "Chuyển văn bản sang chữ hoa, chữ thường, title case và nhiều kiểu khác.",
        description: "Chuẩn hóa kiểu chữ cho tiêu đề, tên file, heading và đoạn code.",
        keywords: ["chữ hoa", "chữ thường", "title case", "sentence case"]
      }
    }
  },
  {
    id: "lorem-ipsum-generator",
    slug: "lorem-ipsum-generator",
    categoryId: "generator-tools",
    icon: "LI",
    status: "active",
    text: {
      en: {
        name: "Lorem Ipsum Generator",
        shortDescription: "Generate placeholder copy for layouts and wireframes.",
        description: "Create short blocks of placeholder text for design and content planning.",
        keywords: ["placeholder", "copy", "generator", "mockup"]
      },
      vi: {
        name: "Tạo Lorem Ipsum",
        shortDescription: "Tạo văn bản mẫu cho layout, wireframe và mockup.",
        description: "Tạo các đoạn placeholder để thiết kế giao diện và lập kế hoạch nội dung.",
        keywords: ["lorem ipsum", "văn bản mẫu", "placeholder", "mockup"]
      }
    }
  },
  {
    id: "qr-code-generator",
    slug: "qr-code-generator",
    categoryId: "generator-tools",
    icon: "QR",
    popular: true,
    status: "active",
    text: {
      en: {
        name: "QR Code Generator",
        shortDescription: "Create QR codes for URLs, text, contact details, and more.",
        description: "Generate downloadable QR codes directly in the browser.",
        keywords: ["qr", "code", "download", "generator"]
      },
      vi: {
        name: "Tạo Mã QR",
        shortDescription: "Tạo mã QR cho URL, văn bản, thông tin liên hệ và nhiều nội dung khác.",
        description: "Tạo mã QR có thể tải về trực tiếp trong trình duyệt.",
        keywords: ["mã qr", "qr code", "tải về", "tạo mã"]
      }
    }
  },
  {
    id: "password-generator",
    slug: "password-generator",
    categoryId: "generator-tools",
    icon: "PW",
    popular: true,
    status: "active",
    text: {
      en: {
        name: "Password Generator",
        shortDescription: "Generate strong passwords with customizable rules.",
        description: "Create secure passwords locally without sending them to a server.",
        keywords: ["password", "security", "random", "generator"]
      },
      vi: {
        name: "Tạo Mật Khẩu",
        shortDescription: "Tạo mật khẩu mạnh với quy tắc tùy chỉnh.",
        description: "Tạo mật khẩu an toàn ngay trên máy của bạn mà không gửi lên máy chủ.",
        keywords: ["mật khẩu", "bảo mật", "ngẫu nhiên", "tạo mật khẩu"]
      }
    }
  },
  {
    id: "uuid-generator",
    slug: "uuid-generator",
    categoryId: "generator-tools",
    icon: "ID",
    status: "active",
    text: {
      en: {
        name: "UUID Generator",
        shortDescription: "Generate UUID values for databases, tests, and apps.",
        description: "Create UUIDs quickly from a lightweight browser tool.",
        keywords: ["uuid", "guid", "id", "random"]
      },
      vi: {
        name: "Tạo UUID",
        shortDescription: "Tạo UUID cho database, test và ứng dụng.",
        description: "Tạo UUID nhanh bằng công cụ nhẹ chạy trên trình duyệt.",
        keywords: ["uuid", "guid", "id", "ngẫu nhiên"]
      }
    }
  },
  {
    id: "json-formatter",
    slug: "json-formatter",
    categoryId: "developer-tools",
    icon: "{}",
    popular: true,
    status: "active",
    text: {
      en: {
        name: "JSON Formatter",
        shortDescription: "Format, inspect, and clean JSON snippets.",
        description: "Pretty print JSON and make structured data easier to read.",
        keywords: ["json", "formatter", "pretty print", "developer"]
      },
      vi: {
        name: "Định Dạng JSON",
        shortDescription: "Định dạng, kiểm tra và làm gọn đoạn JSON.",
        description: "Pretty print JSON để dữ liệu có cấu trúc dễ đọc hơn.",
        keywords: ["json", "định dạng json", "pretty print", "lập trình"]
      }
    }
  },
  {
    id: "base64-encoder-decoder",
    slug: "base64-encoder-decoder",
    categoryId: "developer-tools",
    icon: "64",
    status: "active",
    text: {
      en: {
        name: "Base64 Encoder/Decoder",
        shortDescription: "Encode or decode Base64 text in your browser.",
        description: "Convert Base64 data locally for quick developer workflows.",
        keywords: ["base64", "encode", "decode", "developer"]
      },
      vi: {
        name: "Mã Hóa Và Giải Mã Base64",
        shortDescription: "Mã hóa hoặc giải mã Base64 ngay trong trình duyệt.",
        description: "Chuyển đổi dữ liệu Base64 cục bộ cho các workflow lập trình nhanh.",
        keywords: ["base64", "mã hóa", "giải mã", "lập trình"]
      }
    }
  },
  {
    id: "url-encoder-decoder",
    slug: "url-encoder-decoder",
    categoryId: "developer-tools",
    icon: "URL",
    status: "active",
    text: {
      en: {
        name: "URL Encoder/Decoder",
        shortDescription: "Encode and decode URL-safe text.",
        description: "Convert URL components for debugging links, APIs, and tracking parameters.",
        keywords: ["url", "encode", "decode", "percent encoding"]
      },
      vi: {
        name: "Mã Hóa Và Giải Mã URL",
        shortDescription: "Mã hóa và giải mã văn bản an toàn cho URL.",
        description: "Chuyển đổi URL component để debug link, API và tracking parameter.",
        keywords: ["url", "mã hóa", "giải mã", "percent encoding"]
      }
    }
  },
  {
    id: "timestamp-converter",
    slug: "timestamp-converter",
    categoryId: "conversion-tools",
    icon: "TS",
    status: "active",
    text: {
      en: {
        name: "Timestamp Converter",
        shortDescription: "Convert Unix timestamps into readable dates.",
        description: "Translate timestamps and dates for logs, APIs, and databases.",
        keywords: ["timestamp", "unix", "date", "time"]
      },
      vi: {
        name: "Chuyển Đổi Timestamp",
        shortDescription: "Chuyển Unix timestamp thành ngày giờ dễ đọc.",
        description: "Chuyển timestamp và ngày giờ cho log, API và database.",
        keywords: ["timestamp", "unix", "ngày giờ", "thời gian"]
      }
    }
  },
  {
    id: "color-converter",
    slug: "color-converter",
    categoryId: "conversion-tools",
    icon: "HEX",
    status: "active",
    text: {
      en: {
        name: "Color Converter",
        shortDescription: "Convert HEX, RGB, HSL, and other color values.",
        description: "Move between common color formats for design and frontend work.",
        keywords: ["color", "hex", "rgb", "hsl"]
      },
      vi: {
        name: "Chuyển Đổi Màu",
        shortDescription: "Chuyển đổi giá trị màu HEX, RGB, HSL và các định dạng phổ biến.",
        description: "Chuyển giữa các định dạng màu dùng trong thiết kế và frontend.",
        keywords: ["màu sắc", "hex", "rgb", "hsl"]
      }
    }
  },
  {
    id: "percentage-calculator",
    slug: "percentage-calculator",
    categoryId: "calculator-tools",
    icon: "%",
    status: "active",
    text: {
      en: {
        name: "Percentage Calculator",
        shortDescription: "Calculate percentages, increases, decreases, and ratios.",
        description: "Run common percentage calculations without a spreadsheet.",
        keywords: ["percentage", "calculator", "increase", "ratio"]
      },
      vi: {
        name: "Máy Tính Phần Trăm",
        shortDescription: "Tính phần trăm, mức tăng giảm và tỷ lệ.",
        description: "Thực hiện các phép tính phần trăm phổ biến mà không cần spreadsheet.",
        keywords: ["phần trăm", "máy tính", "tăng giảm", "tỷ lệ"]
      }
    }
  }
];

const toTool = (tool: ToolRecord, locale: Locale): Tool => {
  const text = tool.text[locale] ?? tool.text[defaultLocale];

  return {
    id: tool.id,
    slug: tool.slug,
    categoryId: tool.categoryId,
    icon: tool.icon,
    featured: tool.featured,
    popular: tool.popular,
    status: tool.status,
    ...text
  };
};

export const getTools = (locale: Locale = defaultLocale): Tool[] =>
  toolRecords.map((tool) => toTool(tool, locale));

export const tools = getTools();
export const activeTools = tools.filter((tool) => tool.status === "active");
export const featuredTools = tools.filter((tool) => tool.featured);
export const popularTools = tools.filter((tool) => tool.popular);

export const getActiveTools = (locale: Locale = defaultLocale): Tool[] =>
  getTools(locale).filter((tool) => tool.status === "active");

export const getFeaturedTools = (locale: Locale = defaultLocale): Tool[] =>
  getTools(locale).filter((tool) => tool.featured);

export const getPopularTools = (locale: Locale = defaultLocale): Tool[] =>
  getTools(locale).filter((tool) => tool.popular);

export const getToolBySlug = (slug: string, locale: Locale = defaultLocale): Tool | undefined =>
  toolRecords
    .filter((tool) => tool.slug === slug)
    .map((tool) => toTool(tool, locale))[0];

export const getRelatedTools = (tool: Tool, locale: Locale = defaultLocale, limit = 3): Tool[] =>
  getTools(locale)
    .filter((candidate) => candidate.id !== tool.id && candidate.categoryId === tool.categoryId)
    .slice(0, limit);
