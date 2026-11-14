export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Cloud"
  | "AI"
  | "Database";

export interface SkillNode {
  id: string;
  label: string;
  category: SkillCategory;
  x: number; // % position within the constellation canvas
  y: number;
  blurb: string;
  related: string[]; // ids of related skills, lit up on hover/focus
}

export const categoryColor: Record<SkillCategory, string> = {
  Frontend: "var(--aurora-cyan)",
  Backend: "var(--aurora-purple)",
  Cloud: "#7dd3fc",
  AI: "var(--aurora-green)",
  Database: "#f0abfc",
};

export const skills: SkillNode[] = [
  {
    id: "react",
    label: "React",
    category: "Frontend",
    x: 12,
    y: 12,
    blurb: "Dashboards and data-driven UIs built on top of REST APIs.",
    related: ["typescript", "javascript", "nodejs"],
  },
  {
    id: "typescript",
    label: "TypeScript",
    category: "Frontend",
    x: 27,
    y: 8,
    blurb: "Type-safe code across frontend and backend services.",
    related: ["react", "nodejs", "javascript"],
  },
  {
    id: "javascript",
    label: "JavaScript",
    category: "Frontend",
    x: 18,
    y: 26,
    blurb: "The common thread tying frontend and backend together.",
    related: ["react", "typescript", "nodejs"],
  },
  {
    id: "nodejs",
    label: "Node.js",
    category: "Backend",
    x: 68,
    y: 6,
    blurb: "REST APIs, business logic, and microservices in production.",
    related: ["express", "typescript", "mongodb", "aws", "mcp"],
  },
  {
    id: "express",
    label: "Express.js",
    category: "Backend",
    x: 84,
    y: 8,
    blurb: "Lightweight API layers built on top of Node.js.",
    related: ["nodejs", "mongodb", "redis"],
  },
  {
    id: "symfony",
    label: "Symfony",
    category: "Backend",
    x: 92,
    y: 22,
    blurb: "Migrated a legacy Symfony 1.5 application to Symfony 6.4.",
    related: ["mysql", "aws"],
  },
  {
    id: "laravel",
    label: "Laravel",
    category: "Backend",
    x: 76,
    y: 26,
    blurb: "PHP services and business applications for enterprise clients.",
    related: ["mysql", "aws"],
  },
  {
    id: "aws",
    label: "AWS",
    category: "Cloud",
    x: 92,
    y: 44,
    blurb: "EC2, S3, ECS, CloudFront, and Route 53 in everyday use.",
    related: ["docker", "nodejs", "postgresql", "azure"],
  },
  {
    id: "azure",
    label: "Azure",
    category: "Cloud",
    x: 78,
    y: 52,
    blurb: "Cloud deployment, Blob Storage, and Azure DevOps pipelines.",
    related: ["laravel", "docker"],
  },
  {
    id: "docker",
    label: "Docker",
    category: "Cloud",
    x: 92,
    y: 60,
    blurb: "Containerized services deployed via CI/CD across AWS and Azure.",
    related: ["aws", "azure", "postgresql"],
  },
  {
    id: "llm",
    label: "LLMs",
    category: "AI",
    x: 8,
    y: 58,
    blurb: "Building AI-powered workflows and analytics features.",
    related: ["mcp", "ollama", "nodejs"],
  },
  {
    id: "mcp",
    label: "MCP",
    category: "AI",
    x: 20,
    y: 68,
    blurb: "Model Context Protocol — connecting LLMs to real tools and data.",
    related: ["llm", "ollama", "playwright", "nodejs"],
  },
  {
    id: "ollama",
    label: "Ollama",
    category: "AI",
    x: 8,
    y: 80,
    blurb: "Running and experimenting with local LLMs.",
    related: ["llm", "mcp"],
  },
  {
    id: "playwright",
    label: "Playwright",
    category: "AI",
    x: 24,
    y: 88,
    blurb: "Browser automation and end-to-end testing workflows.",
    related: ["mcp", "nodejs", "typescript"],
  },
  {
    id: "mysql",
    label: "MySQL",
    category: "Database",
    x: 46,
    y: 90,
    blurb: "Relational data behind POS and business platforms.",
    related: ["laravel", "symfony"],
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    category: "Database",
    x: 60,
    y: 96,
    blurb: "Structured data modeling for scalable services.",
    related: ["aws", "docker"],
  },
  {
    id: "mongodb",
    label: "MongoDB",
    category: "Database",
    x: 72,
    y: 88,
    blurb: "Flexible document storage for fast-moving features.",
    related: ["nodejs", "express", "redis"],
  },
  {
    id: "redis",
    label: "Redis",
    category: "Database",
    x: 56,
    y: 78,
    blurb: "Caching and BullMQ-backed queues for background jobs.",
    related: ["nodejs", "express", "mongodb"],
  },
];

// Additional tools used day-to-day but kept out of the main constellation
// to keep the visual focused — shown as a compact strip below it.
export const additionalTools = [
  "NestJS",
  "RabbitMQ",
  "BullMQ",
  "GitHub Actions",
  "CI/CD",
  "Datadog",
  "Sentry",
  "SonarQube",
  "Xdebug",
  "Postman",
  "Swagger/OpenAPI",
  "Linux",
  "Git",
];
