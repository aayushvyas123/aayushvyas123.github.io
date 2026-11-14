export interface ExperienceItem {
  company: string;
  role: string;
  client?: string;
  location: string;
  period: string;
  active?: boolean;
  summary: string;
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "ACL Digital",
    role: "Full Stack Software Engineer",
    client: "Europ Assistance",
    location: "Mumbai, Maharashtra",
    period: "April 2026 — Present",
    active: true,
    summary:
      "Building and maintaining scalable full-stack web applications and enterprise software for insurance-related products — REST APIs and business logic in Node.js/TypeScript, CRM, CMS, and AI-powered analytics platforms, React dashboards, AI-powered workflows using LLMs and MCP, and browser automation with Playwright, deployed across AWS and Azure.",
    tech: [
      "Node.js",
      "TypeScript",
      "React",
      "LLMs",
      "MCP",
      "Playwright",
      "AWS",
      "Azure",
    ],
  },
  {
    company: "Simform Solutions",
    role: "Software Engineer",
    location: "Ahmedabad, Gujarat",
    period: "January 2023 — March 2026",
    summary:
      "Designed and developed scalable backend applications and REST APIs in Node.js, PHP, Symfony, and Laravel — led the migration of a legacy Symfony 1.5 application to Symfony 6.4, built POS and business management applications with payment integrations, and data management platforms with React interfaces, file uploads, and reporting — deployed on AWS (EC2, S3, ECS, CloudFront, Route 53), Azure, and Docker with CI/CD pipelines.",
    tech: ["Node.js", "PHP", "Symfony", "Laravel", "React", "AWS", "Azure", "Docker"],
  },
];
