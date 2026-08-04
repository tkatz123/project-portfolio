/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONTENT — the single source of truth for every word on the site.
 *
 * To update the site, edit this file. Components never hard-code personal or
 * project text. Anything wrapped in [PLACEHOLDER: ...] is stub content waiting
 * for the real thing — search for "PLACEHOLDER" to find everything left to fill.
 *
 * To add a project: append an entry to `projects` below. Its card and its
 * detail page at /projects/<slug> are generated automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Tyler Katz",
  role: "AI/ML Engineer in Training",
  tagline:
    "Building applied AI — LangGraph agents, RAG systems, and fine-tuned LLMs — from Syracuse to production.",
  email: "tylerkatz110@gmail.com",
  github: "https://github.com/tkatz123",
  linkedin: "https://www.linkedin.com/in/tylerkatz1/",
  resumeUrl: "/resume.pdf",
  headshot: "/headshot.png",
};

/** Sticky nav — numbered anchors into the single page. */
export const navSections = [
  { id: "about", number: "01", label: "About" },
  { id: "projects", number: "02", label: "Projects" },
  { id: "resume", number: "03", label: "Resume" },
  { id: "contact", number: "04", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm Tyler — a graduate student at Syracuse University working toward a career in AI/ML engineering. I got here through data: my undergrad in Applied Data Analytics at the iSchool taught me to find the signal, and somewhere between my first scikit-learn pipeline and my first LLM agent, I realized I cared most about building the systems that put models to work.",
    "Right now I split my time between grad school and Comcast, where I intern on the Cybersecurity Reliability Engineering team building applied AI for security operations — LangGraph agents, retrieval-augmented generation, and fine-tuned models that ship to real infrastructure on AWS. It's the kind of work where a model that's 'pretty good' in a notebook has to become a service someone actually depends on, and I've come to love that gap.",
    "On campus, I lead engineering for Cuse AI, Syracuse's AI/ML student organization, where I get to help other students go from curious to shipping. When I'm not working, I'm usually arguing about model architectures with friends or finding out the hard way that my fantasy football models are overfit.",
  ],
};

export const education = [
  {
    school: "Syracuse University",
    degree: "M.S. Applied Human Centered Artificial Intelligence",
    period: "In Progress",
    status: "current" as const,
  },
  {
    school: "Syracuse University — iSchool",
    degree: "B.S. Applied Data Analytics",
    period: "2026",
    status: "complete" as const,
  },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "R", "SQL"],
  },
  {
    category: "ML & Data Science",
    items: ["scikit-learn", "pandas", "NumPy", "matplotlib", "PySpark"],
  },
  {
    category: "AI / LLM Engineering",
    items: [
      "LangGraph",
      "RAG",
      "Agents",
      "LLM Fine-Tuning (LoRA/QLoRA)",
      "Prompt Engineering",
    ],
  },
  {
    category: "Engineering & Cloud",
    items: [
      "FastAPI",
      "Docker",
      "AWS EKS",
      "GitHub Actions CI/CD",
      "Streamlit",
      "Shiny",
    ],
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    org: "Comcast — CSRE, TPX Security Solutions Engineering",
    period: "2026",
    bullets: [
      "[PLACEHOLDER: bullet about LangGraph agent work for security operations]",
      "[PLACEHOLDER: bullet about RAG and LLM fine-tuning outcomes]",
      "[PLACEHOLDER: bullet about FastAPI services deployed on AWS EKS]",
    ],
  },
  {
    role: "Engineering Lead",
    org: "Cuse AI — Syracuse University",
    period: "Present",
    bullets: [
      "[PLACEHOLDER: bullet about leading engineering projects and workshops]",
      "[PLACEHOLDER: bullet about growing campus AI/ML community]",
    ],
  },
  {
    role: "Treasurer",
    org: "Zeta Beta Tau Fraternity — Omicron Chapter",
    period: "Present",
    bullets: [
      "[PLACEHOLDER: bullet about budget ownership and financial planning]",
    ],
  },
];

export const resume = {
  highlights: [
    "M.S. Applied Human Centered AI @ Syracuse — in progress",
    "Data Science Intern @ Comcast Cybersecurity (CSRE)",
    "LangGraph agents, RAG, and LoRA/QLoRA fine-tuning in production settings",
    "Engineering Lead of Cuse AI, Syracuse's AI/ML student org",
  ],
};

export type ProjectCategory = "ai-llm" | "classical-ml";

export const projectCategories: {
  id: ProjectCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "ai-llm", label: "AI & LLM" },
  { id: "classical-ml", label: "Classical ML & DS" },
];

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** One-to-two line description shown on the card. */
  description: string;
  /** Single "outcome" line shown on the card — the result, not the process. */
  outcome: string;
  tech: string[];
  links: {
    github: string;
    demo?: string;
  };
  detail: {
    overview: string;
    problem: string;
    approach: string;
    /** Path under /public to an architecture diagram, or null for the placeholder slot. */
    architectureImage: string | null;
    architectureCaption: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    slug: "ai-project-one",
    title: "[PLACEHOLDER: AI/LLM Project One]",
    category: "ai-llm",
    description:
      "[PLACEHOLDER: One or two sentences describing what this project is and who it's for.]",
    outcome: "[PLACEHOLDER: The single most impressive measurable outcome.]",
    tech: ["LangGraph", "RAG", "FastAPI"],
    links: {
      github: "https://github.com/tkatz123",
    },
    detail: {
      overview:
        "[PLACEHOLDER: A short paragraph introducing the project — what it does, why it exists, and your role in it.]",
      problem:
        "[PLACEHOLDER: The problem this project solves. What was broken, slow, or impossible before?]",
      approach:
        "[PLACEHOLDER: How you solved it — architecture decisions, models chosen, tradeoffs made.]",
      architectureImage: null,
      architectureCaption:
        "[PLACEHOLDER: One-line caption describing the architecture diagram.]",
      results:
        "[PLACEHOLDER: What happened — metrics, adoption, performance, lessons learned.]",
    },
  },
  {
    slug: "ai-project-two",
    title: "[PLACEHOLDER: AI/LLM Project Two]",
    category: "ai-llm",
    description:
      "[PLACEHOLDER: One or two sentences describing what this project is and who it's for.]",
    outcome: "[PLACEHOLDER: The single most impressive measurable outcome.]",    tech: ["LoRA/QLoRA", "Python", "AWS"],
    links: {
      github: "https://github.com/tkatz123",
    },
    detail: {
      overview:
        "[PLACEHOLDER: A short paragraph introducing the project — what it does, why it exists, and your role in it.]",
      problem:
        "[PLACEHOLDER: The problem this project solves. What was broken, slow, or impossible before?]",
      approach:
        "[PLACEHOLDER: How you solved it — architecture decisions, models chosen, tradeoffs made.]",
      architectureImage: null,
      architectureCaption:
        "[PLACEHOLDER: One-line caption describing the architecture diagram.]",
      results:
        "[PLACEHOLDER: What happened — metrics, adoption, performance, lessons learned.]",
    },
  },
  {
    slug: "ai-project-three",
    title: "[PLACEHOLDER: AI/LLM Project Three]",
    category: "ai-llm",
    description:
      "[PLACEHOLDER: One or two sentences describing what this project is and who it's for.]",
    outcome: "[PLACEHOLDER: The single most impressive measurable outcome.]",
    tech: ["Agents", "Prompt Engineering", "Docker"],
    links: {
      github: "https://github.com/tkatz123",
    },
    detail: {
      overview:
        "[PLACEHOLDER: A short paragraph introducing the project — what it does, why it exists, and your role in it.]",
      problem:
        "[PLACEHOLDER: The problem this project solves. What was broken, slow, or impossible before?]",
      approach:
        "[PLACEHOLDER: How you solved it — architecture decisions, models chosen, tradeoffs made.]",
      architectureImage: null,
      architectureCaption:
        "[PLACEHOLDER: One-line caption describing the architecture diagram.]",
      results:
        "[PLACEHOLDER: What happened — metrics, adoption, performance, lessons learned.]",
    },
  },
  {
    slug: "ml-project-one",
    title: "[PLACEHOLDER: Classical ML/DS Project One]",
    category: "classical-ml",
    description:
      "[PLACEHOLDER: One or two sentences describing what this project is and who it's for.]",
    outcome: "[PLACEHOLDER: The single most impressive measurable outcome.]",
    tech: ["scikit-learn", "pandas", "matplotlib"],
    links: {
      github: "https://github.com/tkatz123",
    },
    detail: {
      overview:
        "[PLACEHOLDER: A short paragraph introducing the project — what it does, why it exists, and your role in it.]",
      problem:
        "[PLACEHOLDER: The problem this project solves. What was broken, slow, or impossible before?]",
      approach:
        "[PLACEHOLDER: How you solved it — features engineered, models compared, validation strategy.]",
      architectureImage: null,
      architectureCaption:
        "[PLACEHOLDER: One-line caption describing the pipeline diagram.]",
      results:
        "[PLACEHOLDER: What happened — metrics, insights, and what you'd do differently.]",
    },
  },
  {
    slug: "ml-project-two",
    title: "[PLACEHOLDER: Classical ML/DS Project Two]",
    category: "classical-ml",
    description:
      "[PLACEHOLDER: One or two sentences describing what this project is and who it's for.]",
    outcome: "[PLACEHOLDER: The single most impressive measurable outcome.]",
    tech: ["PySpark", "SQL", "Python"],
    links: {
      github: "https://github.com/tkatz123",
    },
    detail: {
      overview:
        "[PLACEHOLDER: A short paragraph introducing the project — what it does, why it exists, and your role in it.]",
      problem:
        "[PLACEHOLDER: The problem this project solves. What was broken, slow, or impossible before?]",
      approach:
        "[PLACEHOLDER: How you solved it — features engineered, models compared, validation strategy.]",
      architectureImage: null,
      architectureCaption:
        "[PLACEHOLDER: One-line caption describing the pipeline diagram.]",
      results:
        "[PLACEHOLDER: What happened — metrics, insights, and what you'd do differently.]",
    },
  },
  {
    slug: "ml-project-three",
    title: "[PLACEHOLDER: Classical ML/DS Project Three]",
    category: "classical-ml",
    description:
      "[PLACEHOLDER: One or two sentences describing what this project is and who it's for.]",
    outcome: "[PLACEHOLDER: The single most impressive measurable outcome.]",
    tech: ["R", "Shiny", "Statistics"],
    links: {
      github: "https://github.com/tkatz123",
    },
    detail: {
      overview:
        "[PLACEHOLDER: A short paragraph introducing the project — what it does, why it exists, and your role in it.]",
      problem:
        "[PLACEHOLDER: The problem this project solves. What was broken, slow, or impossible before?]",
      approach:
        "[PLACEHOLDER: How you solved it — features engineered, models compared, validation strategy.]",
      architectureImage: null,
      architectureCaption:
        "[PLACEHOLDER: One-line caption describing the pipeline diagram.]",
      results:
        "[PLACEHOLDER: What happened — metrics, insights, and what you'd do differently.]",
    },
  },
];

export const contact = {
  heading: "Get in touch",
  invitation:
    "I'm always up for talking about applied AI, internships and new-grad roles, or a project you think I'd find interesting. My inbox is open — I read everything.",
};
