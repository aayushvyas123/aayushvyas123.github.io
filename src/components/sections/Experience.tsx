"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import GlassPanel from "@/components/ui/GlassPanel";
import { experience } from "@/data/experience";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="font-mono text-xs tracking-widest text-aurora-purple uppercase">
            Experience
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-2xl text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            Where I&apos;ve built things.
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-16 pl-10 sm:pl-14">
          {/* Track */}
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-white/10 sm:left-[11px]" />
          {/* Progress fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-[7px] w-px bg-gradient-to-b from-aurora-cyan via-aurora-purple to-aurora-green sm:left-[11px]"
          />

          <div className="flex flex-col gap-14">
            {experience.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.1}>
                <div className="relative">
                  <span
                    className={
                      "absolute top-1.5 -left-10 h-3.5 w-3.5 rounded-full border sm:-left-14 " +
                      (item.active
                        ? "border-aurora-cyan bg-aurora-cyan shadow-[0_0_16px_var(--aurora-cyan)]"
                        : "border-white/20 bg-background")
                    }
                  />

                  <GlassPanel
                    glow={item.active}
                    className="p-7 sm:p-8"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {item.role}{" "}
                          <span className="text-muted font-normal">
                            · {item.company}
                          </span>
                        </h3>
                        {item.client && (
                          <p className="mt-1 font-mono text-xs text-aurora-cyan">
                            Client: {item.client}
                          </p>
                        )}
                        <p className="mt-1 text-xs text-muted">
                          {item.location}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-muted">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-4 leading-relaxed text-muted">
                      {item.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </GlassPanel>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
