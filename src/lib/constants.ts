export const SOCIAL_LINKS = {
  github: "https://github.com/zGIKS",
  email: "mateo.aleman.romano@gmail.com",
  discord: "@asphanyx",
  linkedin: "https://linkedin.com/in/mateo-aleman", // Placeholder or real if known
};

export const NAVIGATION_ITEMS = (t: any, locale: string, stackCount: number) => [
  {
    label: t.section2.titles.projects,
    href: `/${locale}/projects`,
    count: 4,
    kind: "link" as const,
  },
  {
    label: t.section3.techStackTitle,
    href: `/${locale}/stack`,
    count: stackCount,
    kind: "link" as const,
  },
  {
    label: "Resume",
    kind: "static" as const,
    badge: "PDF",
  },
  {
    label: t.section2.titles.blog,
    href: `/${locale}/blog`,
    kind: "link" as const,
  },
  {
    label: t.section3.linksTitle,
    href: "#quick-links",
    count: 4,
    kind: "anchor" as const,
  },
];
