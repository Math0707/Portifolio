export type Skill = {
  name: string;
  icon: string; // public path
  accent: string; // tailwind class
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Back-end",
    items: [
      { name: "Java", icon: "/skills/java.svg", accent: "bg-amber-500/15 text-amber-200 border-amber-500/30" },
      { name: "Spring Boot", icon: "/skills/spring.svg", accent: "bg-emerald-500/15 text-emerald-200 border-emerald-500/30" },
      { name: "Maven", icon: "/skills/maven.svg", accent: "bg-rose-500/15 text-rose-200 border-rose-500/30" },
      { name: "REST API", icon: "/skills/rest.svg", accent: "bg-sky-500/15 text-sky-200 border-sky-500/30" },
    ],
  },
  {
    title: "Front-end",
    items: [
      { name: "HTML5", icon: "/skills/html.svg", accent: "bg-orange-500/15 text-orange-200 border-orange-500/30" },
      { name: "CSS3", icon: "/skills/css.svg", accent: "bg-blue-500/15 text-blue-200 border-blue-500/30" },
      { name: "JavaScript", icon: "/skills/js.svg", accent: "bg-yellow-400/15 text-yellow-200 border-yellow-400/30" },
      { name: "React", icon: "/skills/react.svg", accent: "bg-cyan-500/15 text-cyan-200 border-cyan-500/30" },
      { name: "Next.js", icon: "/skills/next.svg", accent: "bg-neutral-200/10 text-neutral-100 border-neutral-200/20" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.svg", accent: "bg-teal-400/15 text-teal-200 border-teal-400/30" },
    ],
  },
  {
    title: "Bancos de Dados",
    items: [
      { name: "PostgreSQL", icon: "/skills/postgres.svg", accent: "bg-indigo-500/15 text-indigo-200 border-indigo-500/30" },
      { name: "MongoDB", icon: "/skills/mongo.svg", accent: "bg-green-500/15 text-green-200 border-green-500/30" },
    ],
  },
  {
    title: "DevOps & Ferramentas",
    items: [
      { name: "Docker", icon: "/skills/docker.svg", accent: "bg-sky-500/15 text-sky-200 border-sky-500/30" },
      { name: "Git", icon: "/skills/git.svg", accent: "bg-orange-500/15 text-orange-200 border-orange-500/30" },
      { name: "GitHub", icon: "/skills/github.svg", accent: "bg-neutral-200/10 text-neutral-100 border-neutral-200/20" },
      { name: "VS Code", icon: "/skills/vscode.svg", accent: "bg-blue-500/15 text-blue-200 border-blue-500/30" },
      { name: "IntelliJ IDEA", icon: "/skills/intellij.svg", accent: "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-500/30" },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  blurb: string;
  tags: string[];
  year: string;
  image: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "projeto-01",
    title: "Projeto Full Stack Java",
    subtitle: "API + Front-end — arquitetura limpa",
    blurb:
      "Um projeto exemplo para mostrar autenticação, CRUD, validações, documentação e UI responsiva.",
    tags: ["Java", "Spring Boot", "REST", "PostgreSQL", "React"],
    year: "2026",
    image: "/projects/project-1.svg",
    links: [{ label: "GitHub", href: "https://github.com/Math0707/project-management-system" }],
  },
  {
    slug: "projeto-02",
    title: "Dashboard de Produtividade",
    subtitle: "Next.js + Tailwind + animações",
    blurb:
      "Interface rápida com filtros, paginação e animações suaves. Pensado para performance e UX.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    year: "2026",
    image: "/projects/project-2.svg",
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    slug: "projeto-03",
    title: "Integração com APIs",
    subtitle: "2 APIs — dados em tempo real",
    blurb:
      "Integração com serviços externos, cache e tratamento de erros. Foco em demonstrar maturidade de engenharia.",
    tags: ["REST API", "MongoDB", "Docker"],
    year: "2025",
    image: "/projects/project-3.svg",
    links: [{ label: "GitHub", href: "https://github.com/Math0707/Dashboard" }],
  },
];
