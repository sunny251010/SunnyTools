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
        description: "Count, clean, compare, and transform written content."
      },
      vi: {
        name: "Công cụ văn bản",
        description: "Đếm, làm sạch, so sánh và chuyển đổi nội dung văn bản."
      }
    }
  },
  {
    id: "developer-tools",
    slug: "developer-tools",
    text: {
      en: {
        name: "Developer Tools",
        description: "Format, encode, decode, validate, and debug common data."
      },
      vi: {
        name: "Công cụ lập trình",
        description: "Định dạng, mã hóa, giải mã, kiểm tra và debug dữ liệu phổ biến."
      }
    }
  },
  {
    id: "generator-tools",
    slug: "generator-tools",
    text: {
      en: {
        name: "Generator Tools",
        description: "Generate QR codes, passwords, UUIDs, and sample values."
      },
      vi: {
        name: "Công cụ tạo mã",
        description: "Tạo mã QR, mật khẩu, UUID và giá trị mẫu."
      }
    }
  },
  {
    id: "conversion-tools",
    slug: "conversion-tools",
    text: {
      en: {
        name: "Conversion Tools",
        description: "Convert colors, timestamps, URLs, and encoded content."
      },
      vi: {
        name: "Công cụ chuyển đổi",
        description: "Chuyển đổi màu sắc, timestamp, URL và nội dung đã mã hóa."
      }
    }
  },
  {
    id: "calculator-tools",
    slug: "calculator-tools",
    text: {
      en: {
        name: "Calculator Tools",
        description: "Run quick percentage and everyday calculations."
      },
      vi: {
        name: "Công cụ tính toán",
        description: "Tính phần trăm và các phép tính hằng ngày thật nhanh."
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
