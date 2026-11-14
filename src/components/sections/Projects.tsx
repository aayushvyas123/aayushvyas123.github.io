import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs tracking-widest text-aurora-cyan uppercase">
            Projects
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-2xl text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            Selected work.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
