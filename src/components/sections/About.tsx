import Reveal from "@/components/ui/Reveal";
import GlassPanel from "@/components/ui/GlassPanel";

const pillars = [
  {
    title: "Systems thinking",
    body: "I design for the failure cases first — clear data flow, sane boundaries, and observability baked in from day one.",
  },
  {
    title: "Ship, then refine",
    body: "Working software in front of real users beats a perfect diagram. I iterate fast and let evidence shape the architecture.",
  },
  {
    title: "AI as a teammate",
    body: "LLMs, MCP, and Playwright-driven automation are part of my everyday stack now — used deliberately, not bolted on for novelty.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs tracking-widest text-aurora-cyan uppercase">
            About
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-3xl text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            Full stack engineer, comfortable from database to deploy.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.12}>
            <GlassPanel glow className="h-full p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-white/85">
                I&apos;m a Full Stack Software Engineer based in Mumbai with
                3+ years of experience designing, building, and deploying
                scalable web applications and backend services — currently at
                ACL Digital, building enterprise software for Europ
                Assistance, and previously at Simform Solutions.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                My day-to-day spans backend services in Node.js, TypeScript,
                PHP, Symfony, and Laravel, frontends in React, and
                infrastructure on AWS and Azure — with a growing focus on
                AI-powered workflows using LLMs and MCP, plus browser
                automation and testing with Playwright.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                I care about system design and performance as much as feature
                delivery: clean REST APIs, sensible database design, and code
                that&apos;s still easy to reason about a year from now.
              </p>
            </GlassPanel>
          </Reveal>

          <div className="grid gap-6">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.16 + i * 0.08}>
                <GlassPanel className="p-6 sm:p-7">
                  <h3 className="text-base font-medium text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pillar.body}
                  </p>
                </GlassPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
