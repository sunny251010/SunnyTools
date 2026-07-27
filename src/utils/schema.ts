import type { FAQItem, Tool } from "../types/tool";
import type { BreadcrumbItem } from "../types/tool";
import { siteConfig, resolveSiteUrl } from "./seo";

export type JsonLdData = Record<string, unknown>;

export const createWebsiteSchema = (): JsonLdData => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: resolveSiteUrl("/"),
  potentialAction: {
    "@type": "SearchAction",
    target: `${resolveSiteUrl("/tools")}?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

export const createBreadcrumbSchema = (items: BreadcrumbItem[]): JsonLdData => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    ...(item.href ? { item: resolveSiteUrl(item.href) } : {})
  }))
});

export const createFaqSchema = (faqs: FAQItem[]): JsonLdData => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});

export const createToolSchema = (tool: Tool, path: string, categoryName?: string): JsonLdData => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: tool.name,
  description: tool.description,
  url: resolveSiteUrl(path),
  applicationCategory: categoryName ?? "UtilityApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  }
});

export const createCollectionPageSchema = (
  name: string,
  description: string,
  path: string
): JsonLdData => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url: resolveSiteUrl(path)
});
