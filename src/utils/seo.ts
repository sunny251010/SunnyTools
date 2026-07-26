export const siteConfig = {
  name: "SunnyTools",
  url: import.meta.env.PUBLIC_SITE_URL ?? "https://example.com",
  defaultTitle: "SunnyTools – Free Online Tools",
  defaultDescription:
    "Fast, private, browser-based tools for text, developers, generators, conversions, and calculators.",
  defaultImage: "/og-default.svg",
  twitterHandle: "@sunnytools"
};

export const getBasePath = (): string => {
  const baseUrl = import.meta.env.BASE_URL ?? "/";
  return baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");
};

export const withBasePath = (path: string): string => {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  const basePath = getBasePath();
  if (!basePath) {
    return path;
  }

  return path === "/" ? `${basePath}/` : `${basePath}${path}`;
};

export interface PageSeoInput {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  robots?: string;
}

export interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  image: string;
  robots: string;
}

export const resolveSiteUrl = (path = "/"): string => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(withBasePath(path), siteConfig.url).toString();
};

export const buildTitle = (title?: string): string => {
  if (!title) {
    return siteConfig.defaultTitle;
  }

  return title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
};

export const createPageSeo = ({
  title,
  description,
  path = "/",
  image = siteConfig.defaultImage,
  robots = "index, follow"
}: PageSeoInput): PageSeo => ({
  title: buildTitle(title),
  description: description ?? siteConfig.defaultDescription,
  canonical: resolveSiteUrl(path),
  image: resolveSiteUrl(image),
  robots
});
