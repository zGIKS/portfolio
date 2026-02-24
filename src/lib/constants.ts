export const SOCIAL_LINKS = {
  github: "https://github.com/zGIKS",
  email: "mateo.aleman.romano@gmail.com",
  discord: "@asphanyx",
  linkedin: "https://linkedin.com/in/mateo-aleman",
};

export const NAVIGATION_ITEMS = () => [
  {
    label: "Work",
    href: "/work",
    kind: "link" as const,
  },
  {
    label: "About",
    href: "/#about",
    kind: "link" as const,
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

export const PROJECTS = [
  {
    title: "IAM System",
    description: "A robust Identity and Access Management system built with Rust, focusing on security, high performance, and Zero Trust principles.",
    image: "/projects/iam.png",
    tags: ["Rust", "Security", "IAM", "Backend"],
  },
  {
    title: "Level Up",
    description: "Educational platform featuring a distributed architecture designed for scalability and high availability.",
    image: "/projects/level-up.png",
    tags: ["Distributed Systems", "Architecture", "Education"],
  },
  {
    title: "Graph Map",
    description: "Advanced graph analysis tool for visualizing and processing complex relational data structures.",
    image: "/projects/graph-map.png",
    tags: ["Graphs", "Data Analysis", "Visualization"],
  },
  {
    title: "Mortgage App",
    description: "Financial application for calculating and managing mortgage loans with a focus on accuracy and user experience.",
    image: "/projects/mortgage.png",
    tags: ["Finance", "Algorithms", "Calculations"],
  },
];
