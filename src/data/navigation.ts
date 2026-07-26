import type { NavigationItem } from "../types/tool";

export const mainNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "All Tools", href: "/tools" },
  { label: "Text Tools", href: "/categories/text-tools" },
  { label: "Developer Tools", href: "/categories/developer-tools" },
  { label: "Generator Tools", href: "/categories/generator-tools" }
];

export const footerNavigation: NavigationItem[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "All Tools", href: "/tools" }
];
