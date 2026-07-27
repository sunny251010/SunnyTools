import { resolveSiteUrl } from "../utils/seo";

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${resolveSiteUrl("/sitemap.xml")}
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}

export const prerender = true;
