import type { Tool } from "../types/tool";

export const tools: Tool[] = [
  {
    id: "word-counter",
    name: "Word Counter",
    slug: "word-counter",
    shortDescription: "Count words, characters, sentences, paragraphs, and reading time.",
    description:
      "A private browser-based word counter for quick writing, editing, and content checks.",
    categoryId: "text-tools",
    icon: "WC",
    keywords: ["word count", "character count", "reading time", "writing"],
    featured: true,
    popular: true,
    status: "active"
  },
  {
    id: "character-counter",
    name: "Character Counter",
    slug: "character-counter",
    shortDescription: "Measure characters with or without spaces for forms and posts.",
    description: "Count characters, spaces, and limits for social posts, ads, and metadata.",
    categoryId: "text-tools",
    icon: "CC",
    keywords: ["characters", "spaces", "limit", "text"],
    featured: true,
    popular: true,
    status: "active"
  },
  {
    id: "case-converter",
    name: "Case Converter",
    slug: "case-converter",
    shortDescription: "Convert text between uppercase, lowercase, title case, and more.",
    description: "Clean up text casing for titles, filenames, headings, and code snippets.",
    categoryId: "text-tools",
    icon: "Aa",
    keywords: ["uppercase", "lowercase", "title case", "sentence case"],
    featured: true,
    status: "active"
  },
  {
    id: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    slug: "lorem-ipsum-generator",
    shortDescription: "Generate placeholder copy for layouts and wireframes.",
    description: "Create short blocks of placeholder text for design and content planning.",
    categoryId: "generator-tools",
    icon: "LI",
    keywords: ["placeholder", "copy", "generator", "mockup"],
    status: "active"
  },
  {
    id: "qr-code-generator",
    name: "QR Code Generator",
    slug: "qr-code-generator",
    shortDescription: "Create QR codes for URLs, text, contact details, and more.",
    description: "Generate downloadable QR codes directly in the browser.",
    categoryId: "generator-tools",
    icon: "QR",
    keywords: ["qr", "code", "download", "generator"],
    popular: true,
    status: "active"
  },
  {
    id: "password-generator",
    name: "Password Generator",
    slug: "password-generator",
    shortDescription: "Generate strong passwords with customizable rules.",
    description: "Create secure passwords locally without sending them to a server.",
    categoryId: "generator-tools",
    icon: "PW",
    keywords: ["password", "security", "random", "generator"],
    popular: true,
    status: "active"
  },
  {
    id: "uuid-generator",
    name: "UUID Generator",
    slug: "uuid-generator",
    shortDescription: "Generate UUID values for databases, tests, and apps.",
    description: "Create UUIDs quickly from a lightweight browser tool.",
    categoryId: "generator-tools",
    icon: "ID",
    keywords: ["uuid", "guid", "id", "random"],
    status: "active"
  },
  {
    id: "json-formatter",
    name: "JSON Formatter",
    slug: "json-formatter",
    shortDescription: "Format, inspect, and clean JSON snippets.",
    description: "Pretty print JSON and make structured data easier to read.",
    categoryId: "developer-tools",
    icon: "{}",
    keywords: ["json", "formatter", "pretty print", "developer"],
    popular: true,
    status: "active"
  },
  {
    id: "base64-encoder-decoder",
    name: "Base64 Encoder/Decoder",
    slug: "base64-encoder-decoder",
    shortDescription: "Encode or decode Base64 text in your browser.",
    description: "Convert Base64 data locally for quick developer workflows.",
    categoryId: "developer-tools",
    icon: "64",
    keywords: ["base64", "encode", "decode", "developer"],
    status: "active"
  },
  {
    id: "url-encoder-decoder",
    name: "URL Encoder/Decoder",
    slug: "url-encoder-decoder",
    shortDescription: "Encode and decode URL-safe text.",
    description: "Convert URL components for debugging links, APIs, and tracking parameters.",
    categoryId: "developer-tools",
    icon: "URL",
    keywords: ["url", "encode", "decode", "percent encoding"],
    status: "active"
  },
  {
    id: "timestamp-converter",
    name: "Timestamp Converter",
    slug: "timestamp-converter",
    shortDescription: "Convert Unix timestamps into readable dates.",
    description: "Translate timestamps and dates for logs, APIs, and databases.",
    categoryId: "conversion-tools",
    icon: "TS",
    keywords: ["timestamp", "unix", "date", "time"],
    status: "active"
  },
  {
    id: "color-converter",
    name: "Color Converter",
    slug: "color-converter",
    shortDescription: "Convert HEX, RGB, HSL, and other color values.",
    description: "Move between common color formats for design and frontend work.",
    categoryId: "conversion-tools",
    icon: "HEX",
    keywords: ["color", "hex", "rgb", "hsl"],
    status: "active"
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    slug: "percentage-calculator",
    shortDescription: "Calculate percentages, increases, decreases, and ratios.",
    description: "Run common percentage calculations without a spreadsheet.",
    categoryId: "calculator-tools",
    icon: "%",
    keywords: ["percentage", "calculator", "increase", "ratio"],
    status: "active"
  }
];

export const activeTools = tools.filter((tool) => tool.status === "active");
export const featuredTools = tools.filter((tool) => tool.featured);
export const popularTools = tools.filter((tool) => tool.popular);

export const getToolBySlug = (slug: string): Tool | undefined =>
  tools.find((tool) => tool.slug === slug);

export const getRelatedTools = (tool: Tool, limit = 3): Tool[] =>
  tools
    .filter((candidate) => candidate.id !== tool.id && candidate.categoryId === tool.categoryId)
    .slice(0, limit);
