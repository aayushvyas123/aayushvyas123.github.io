export interface Project {
  title: string;
  tagline: string;
  problem: string;
  architecture: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Backlink Management & Monitoring Platform",
    tagline:
      "A legacy Symfony application modernized into a maintainable, scalable platform.",
    problem:
      "The platform ran on Symfony 1.5 — years out of date, hard to extend, and increasingly risky to maintain as the business grew.",
    architecture:
      "Led the migration to Symfony 6.4: refactored legacy code, modernized the application architecture, and reworked backend services, database operations, and API integrations for long-term maintainability and performance.",
    tech: ["Symfony", "PHP", "MySQL", "REST APIs"],
  },
  {
    title: "POS & Business Management Platform",
    tagline:
      "A PHP-based point-of-sale system powering day-to-day retail operations.",
    problem:
      "Retail and business teams needed a reliable POS system with payment processing and room to keep evolving without downtime.",
    architecture:
      "Built and maintained a PHP-based POS application with payment integrations, containerized with Docker and deployed on AWS (EC2, S3, ECS) — with ongoing performance improvements and enhancements based on production usage.",
    tech: ["PHP", "Docker", "AWS EC2", "AWS S3", "AWS ECS"],
  },
  {
    title: "Survey & Data Management Platform",
    tagline: "End-to-end survey creation, data collection, and reporting.",
    problem:
      "The business needed a way for teams to create surveys, manage role-based access, and turn submissions into reportable data without manual work.",
    architecture:
      "Built REST APIs for user management, role-based access, survey creation, file uploads, and reporting, with React-based dashboards and forms on the frontend. Integrated Azure Blob Storage for media/file storage and Azure DevOps CI/CD pipelines for automated deployments.",
    tech: ["React", "REST APIs", "Azure Blob Storage", "Azure DevOps"],
  },
];
