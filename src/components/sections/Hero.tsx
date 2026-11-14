"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { site } from "@/data/site-config";

const GlassOrb = dynamic(() => import("@/components/three/GlassOrb"), {
  ssr: false,
});

const heroSkills = [
  "Node.js",
  "React",
  "TypeScript",
  "Laravel",
  "AWS",
  "AI / LLMs",
  "MCP",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs tracking-wide text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-green shadow-[0_0_8px_var(--aurora-green)]" />
              Available for new opportunities
            </span>
          </Reveal>

          <SplitText
            text={`Hi, I'm ${site.name}.`}
            as="h1"
            delay={0.15}
            className="mt-8 text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl"
          />

          <Reveal delay={0.5}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.65}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {heroSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-xs text-white/70 transition-colors duration-300 hover:border-white/20 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.8}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <MagneticButton
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-black hover:bg-white/90"
              >
                View my work
              </MagneticButton>
              <MagneticButton
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
              >
                Get in touch
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="relative hidden aspect-square w-full max-w-md justify-self-center lg:block">
          <GlassOrb />
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-2 text-muted transition-colors hover:text-white"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
