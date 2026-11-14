"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { centerNode, graphNodes, ringEdges } from "@/data/knowledge-graph";

function findNode(id: string) {
  return graphNodes.find((n) => n.id === id)!;
}

export default function AIEngineering() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="ai-engineering" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs tracking-widest text-aurora-green uppercase">
            AI &amp; Engineering
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-2xl text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            Where intelligence meets infrastructure.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-xl text-muted">
            The areas I&apos;m actively building in — from applied LLMs to the
            cloud systems that keep them running.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="relative mx-auto mt-16 aspect-square w-full max-w-xl"
            onMouseLeave={() => setActiveId(null)}
          >
            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              {ringEdges.map(([a, b]) => {
                const from = findNode(a);
                const to = findNode(b);
                return (
                  <line
                    key={`ring-${a}-${b}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="white"
                    strokeOpacity={0.08}
                    strokeWidth={0.4}
                  />
                );
              })}

              {graphNodes.map((node) => {
                const isActive = activeId === node.id;
                return (
                  <motion.line
                    key={`spoke-${node.id}`}
                    x1={centerNode.x}
                    y1={centerNode.y}
                    x2={node.x}
                    y2={node.y}
                    stroke={isActive ? "#00f5ff" : "white"}
                    strokeOpacity={isActive ? 0.8 : 0.18}
                    strokeWidth={isActive ? 0.6 : 0.4}
                    strokeDasharray="2.2 2.2"
                    animate={{ strokeDashoffset: [0, -8.8] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                );
              })}
            </svg>

            {/* Center node */}
            <div
              style={{ left: `${centerNode.x}%`, top: `${centerNode.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-center backdrop-blur-xl sm:h-32 sm:w-32">
                <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--aurora-cyan)_25%,transparent),transparent_70%)]" />
                <span className="px-3 font-mono text-[11px] leading-tight text-white sm:text-xs">
                  {centerNode.label}
                </span>
              </div>
            </div>

            {graphNodes.map((node) => {
              const isActive = activeId === node.id;
              return (
                <div
                  key={node.id}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActiveId(node.id)}
                    onFocus={() => setActiveId(node.id)}
                    onBlur={() => setActiveId(null)}
                    className={cn(
                      "relative flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-300",
                      isActive
                        ? "scale-125 border-aurora-cyan bg-aurora-cyan shadow-[0_0_14px_var(--aurora-cyan)]"
                        : "border-white/30 bg-white/10 hover:border-white/50"
                    )}
                    aria-describedby={`node-${node.id}`}
                  >
                    <span className="sr-only">{node.label}</span>
                  </button>

                  <div
                    id={`node-${node.id}`}
                    className={cn(
                      "pointer-events-none absolute left-1/2 w-40 -translate-x-1/2 text-center transition-opacity duration-300 sm:w-44",
                      node.captionSide === "top"
                        ? "bottom-full mb-3"
                        : "top-full mt-3",
                      isActive ? "opacity-100" : "opacity-70"
                    )}
                  >
                    <p className="font-mono text-[11px] text-white sm:text-xs">
                      {node.label}
                    </p>
                    <p
                      className={cn(
                        "mt-1 text-[11px] leading-snug text-muted transition-all duration-300 sm:text-xs",
                        isActive
                          ? "max-h-20 opacity-100"
                          : "max-h-0 overflow-hidden opacity-0"
                      )}
                    >
                      {node.blurb}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
