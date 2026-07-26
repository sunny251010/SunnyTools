export const siteConfig = {
  name: "ToolKit Hub",
  url: "https://example.com",
  defaultTitle: "ToolKit Hub - Free Online Tools",
  defaultDescription:
    "Fast, private, browser-based tools for text, developers, generators, conversions, and calculators.",
  defaultImage: "/og-default.svg",
  twitterHandle: "@toolkithub"
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

export const resolveSiteUrl = (path = "/"): string => new URL(path, siteConfig.url).toString();

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
