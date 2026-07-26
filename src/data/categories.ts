import type { ToolCategory } from "../types/tool";

export const categories: ToolCategory[] = [
  {
    id: "text-tools",
    name: "Text Tools",
    slug: "text-tools",
    description: "Count, clean, compare, and transform written content."
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    slug: "developer-tools",
    description: "Format, encode, decode, validate, and debug common data."
  },
  {
    id: "generator-tools",
    name: "Generator Tools",
    slug: "generator-tools",
    description: "Generate QR codes, passwords, UUIDs, and sample values."
  },
  {
    id: "conversion-tools",
    name: "Conversion Tools",
    slug: "conversion-tools",
    description: "Convert colors, timestamps, URLs, and encoded content."
  },
  {
    id: "calculator-tools",
    name: "Calculator Tools",
    slug: "calculator-tools",
    description: "Run quick percentage and everyday calculations."
  }
];

export const getCategoryById = (categoryId: string): ToolCategory | undefined =>
  categories.find((category) => category.id === categoryId);
