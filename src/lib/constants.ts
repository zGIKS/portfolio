export const SOCIAL_LINKS = {
  github: "https://github.com/zGIKS",
  email: "mateo.aleman.romano@gmail.com",
  discord: "@asphanyx",
  linkedin: "https://linkedin.com/in/mateo-aleman",
};

export const NAVIGATION_ITEMS = () => [
  {
    label: "Work",
    href: "#work",
    kind: "anchor" as const,
  },
  {
    label: "About",
    href: "#about",
    kind: "anchor" as const,
  },
  {
    label: "Writing",
    href: "/blog",
    kind: "link" as const,
  },
  {
    label: "Resume",
    kind: "static" as const,
    badge: "PDF",
  },
];
