export type ToolStatus = "active" | "planned" | "draft";

export interface Tool {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  categoryId: string;
  icon?: string;
  keywords: string[];
  featured?: boolean;
  popular?: boolean;
  status: ToolStatus;
}

export interface ToolCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  guide: string;
  useCases: string[];
  tips: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
