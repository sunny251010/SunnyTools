export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const nonDefaultLocales = locales.filter((locale) => locale !== defaultLocale);

export const localeDetails: Record<Locale, { label: string; shortLabel: string; htmlLang: string }> = {
  en: {
    label: "English",
    shortLabel: "EN",
    htmlLang: "en"
  },
  vi: {
    label: "Tiếng Việt",
    shortLabel: "VI",
    htmlLang: "vi"
  }
};

export const isLocale = (value: string | undefined): value is Locale =>
  Boolean(value && locales.includes(value as Locale));

export const getLocalePrefix = (locale: Locale): string => (locale === defaultLocale ? "" : `/${locale}`);

export const localizedPath = (path: string, locale: Locale): string => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const prefix = getLocalePrefix(locale);

  if (normalizedPath === "/") {
    return prefix || "/";
  }

  return `${prefix}${normalizedPath}`;
};

export const stripLocaleFromPath = (path: string): string => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const [firstSegment, ...rest] = normalizedPath.split("/").filter(Boolean);

  if (isLocale(firstSegment)) {
    return rest.length > 0 ? `/${rest.join("/")}` : "/";
  }

  return normalizedPath;
};

export const getLocaleFromPath = (path: string): Locale => {
  const [firstSegment] = path.split("/").filter(Boolean);
  return isLocale(firstSegment) ? firstSegment : defaultLocale;
};

export interface AlternateLink {
  locale: Locale;
  href: string;
  label: string;
}

export const getAlternateLinks = (path: string): AlternateLink[] => {
  const logicalPath = stripLocaleFromPath(path);

  return locales.map((locale) => ({
    locale,
    href: localizedPath(logicalPath, locale),
    label: localeDetails[locale].label
  }));
};
