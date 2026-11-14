"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--px", `${e.clientX - rect.left}px`);
    card.style.setProperty("--py", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 sm:p-12"
      style={{
        backgroundImage:
          "radial-gradient(500px circle at var(--px, 50%) var(--py, 50%), color-mix(in oklab, var(--aurora-cyan) 10%, transparent), transparent 60%)",
      }}
    >
      <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
        <div className="flex items-start lg:pr-4">
          <span className="font-mono text-6xl font-thin text-white/10 sm:text-7xl">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-lg text-muted">{project.tagline}</p>
            </div>

            <div className="flex shrink-0 gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
                >
                  <GithubIcon size={17} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
                >
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <span className="font-mono text-[11px] tracking-widest text-aurora-cyan uppercase">
                Problem
              </span>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {project.problem}
              </p>
            </div>
            <div>
              <span className="font-mono text-[11px] tracking-widest text-aurora-purple uppercase">
                Architecture
              </span>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {project.architecture}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
