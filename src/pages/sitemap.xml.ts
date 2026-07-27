import { getCategories } from "../data/categories";
import { getActiveTools } from "../data/tools";
import { locales, localizedPath, type Locale } from "../i18n/config";
import { resolveSiteUrl } from "../utils/seo";

const staticPaths = ["/", "/tools", "/about", "/contact", "/privacy-policy", "/terms"];

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const getRoutesForLocale = (locale: Locale): string[] => [
  ...staticPaths.map((path) => localizedPath(path, locale)),
  ...getCategories(locale).map((category) => localizedPath(`/categories/${category.slug}`, locale)),
  ...getActiveTools(locale).map((tool) => localizedPath(`/tools/${tool.slug}`, locale))
];

export function GET() {
  const routes = Array.from(
    new Set(locales.flatMap((locale) => getRoutesForLocale(locale)))
  );
  const generatedAt = new Date().toISOString();
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${escapeXml(resolveSiteUrl(route))}</loc>
    <lastmod>${generatedAt}</lastmod>
  </url>`
    )
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}

export const prerender = true;
