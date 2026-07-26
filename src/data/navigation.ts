import { getMessages } from "../i18n/messages";
import { defaultLocale, type Locale } from "../i18n/config";
import type { NavigationItem } from "../types/tool";

export const getMainNavigation = (locale: Locale = defaultLocale): NavigationItem[] => {
  const { nav } = getMessages(locale);

  return [
    { label: nav.home, href: "/" },
    { label: nav.allTools, href: "/tools" },
    { label: nav.textTools, href: "/categories/text-tools" },
    { label: nav.developerTools, href: "/categories/developer-tools" },
    { label: nav.generatorTools, href: "/categories/generator-tools" }
  ];
};

export const getFooterNavigation = (locale: Locale = defaultLocale): NavigationItem[] => {
  const { nav } = getMessages(locale);

  return [
    { label: nav.about, href: "/about" },
    { label: nav.contact, href: "/contact" },
    { label: nav.privacyPolicy, href: "/privacy-policy" },
    { label: nav.terms, href: "/terms" },
    { label: nav.allTools, href: "/tools" }
  ];
};

export const mainNavigation = getMainNavigation();
export const footerNavigation = getFooterNavigation();
