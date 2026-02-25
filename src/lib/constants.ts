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
    href: "/writing",
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
    dateRange: "2026 - Present",
    description: "A robust Identity and Access Management system built with Rust, focusing on security, high performance, and Zero Trust principles.",
    image: "/projects/iam.png",
    tags: ["Rust", "PostgreSQL", "Redis", "Cloudflare", "Tailscale"],
    previewUrl: "https://iam-demo.vercel.app/",
    repoUrl: "https://github.com/zGIKS/auth-service",
  },
  {
    title: "Level up journey",
    dateRange: "2024 - 2025",
    description: "Educational platform featuring a distributed architecture designed for scalability and high availability.",
    image: "/projects/level-up.png",
    tags: ["Java", "Spring Boot", "Go", "Gin", "PostgreSQL", "Next.js"],
    previewUrl: "https://web-app-dusky-one.vercel.app/",
    repoUrl: "https://github.com/LevelUp-Journey",
  },
  {
    title: "Graph Map",
    dateRange: "2025",
    description: "Advanced graph analysis tool for visualizing and processing complex relational data structures.",
    image: "/projects/graph-map.png",
    tags: ["Python", "FastAPI", "React", "Vite", "WebGL"],
    previewUrl: "https://graphmap.giks.net/",
    repoUrl: "https://github.com/zGIKS/GraphMap-Backend",
  },
  {
    title: "Mortgage App",
    dateRange: "2025",
    description: "Financial application for calculating and managing mortgage loans with a focus on accuracy and user experience.",
    image: "/projects/mortgage.png",
    tags: ["Go", "Gin", "FastAPI", "PostgreSQL", "React", "Traefik"],
    previewUrl: "https://mortgage-ui-sable.vercel.app",
    repoUrl: "https://github.com/zGIKS/mortgage-calculator",
  },
];
