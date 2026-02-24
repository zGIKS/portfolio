export const SOCIAL_LINKS = {
  github: "https://github.com/zGIKS",
  email: "mateo.aleman.romano@gmail.com",
  discord: "@asphanyx",
  linkedin: "https://linkedin.com/in/mateo-aleman", // Placeholder or real if known
};

export const NAVIGATION_ITEMS = (t: any, locale: string) => [
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
];
