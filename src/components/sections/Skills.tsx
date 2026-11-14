"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import {
  skills,
  categoryColor,
  additionalTools,
  SkillNode,
  SkillCategory,
} from "@/data/skills";

const categories = Array.from(new Set(skills.map((s) => s.category))) as SkillCategory[];

export default function Skills() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeNode = skills.find((s) => s.id === activeId) ?? null;

  const highlighted = useMemo(() => {
    if (!activeNode) return null;
    return new Set([activeNode.id, ...activeNode.related]);
  }, [activeNode]);

  const lines = useMemo(() => {
    if (!activeNode) return [];
    return activeNode.related
      .map((id) => skills.find((s) => s.id === id))
      .filter((s): s is SkillNode => Boolean(s))
      .map((target) => ({ from: activeNode, to: target }));
  }, [activeNode]);

  const tooltipX = activeNode ? Math.min(82, Math.max(18, activeNode.x)) : 50;
  const tooltipBelow = activeNode ? activeNode.y < 25 : false;

  return (
    <section id="skills" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs tracking-widest text-aurora-green uppercase">
            Skills
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-2xl text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            A constellation, not a checklist.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-xl text-muted">
            Hover or focus a technology to see how it connects to the rest of
            the stack.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {categories.map((cat) => (
              <div
                key={cat}
                className="flex items-center gap-2 font-mono text-xs text-muted"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: categoryColor[cat] }}
                />
                {cat}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div
            className="relative mt-10 aspect-[4/3] w-full rounded-3xl border border-white/10 bg-white/[0.015] sm:aspect-[16/9]"
            onMouseLeave={() => setActiveId(null)}
          >
            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              {lines.map(({ from, to }) => (
                <motion.line
                  key={`${from.id}-${to.id}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  vectorEffect="non-scaling-stroke"
                  stroke={categoryColor[from.category]}
                  strokeWidth={1}
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.55 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              ))}
            </svg>

            {skills.map((node) => {
              const isActive = node.id === activeId;
              const isDimmed = highlighted ? !highlighted.has(node.id) : false;
              return (
                <button
                  key={node.id}
                  type="button"
                  onMouseEnter={() => setActiveId(node.id)}
                  onFocus={() => setActiveId(node.id)}
                  onBlur={() => setActiveId(null)}
                  onClick={() =>
                    setActiveId((cur) => (cur === node.id ? null : node.id))
                  }
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3.5 py-1.5 font-mono text-xs whitespace-nowrap transition-all duration-300",
                    isActive
                      ? "scale-110 border-white/40 bg-white/10 text-white"
                      : "border-white/10 bg-black/30 text-white/70 hover:border-white/25 hover:text-white",
                    isDimmed && "opacity-25"
                  )}
                  aria-describedby={isActive ? `skill-tip-${node.id}` : undefined}
                >
                  <span
                    className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle"
                    style={{
                      background: categoryColor[node.category],
                      boxShadow: isActive
                        ? `0 0 8px ${categoryColor[node.category]}`
                        : undefined,
                    }}
                  />
                  {node.label}
                </button>
              );
            })}

            <AnimatePresence>
              {activeNode && (
                <motion.div
                  id={`skill-tip-${activeNode.id}`}
                  role="tooltip"
                  key={activeNode.id}
                  initial={{ opacity: 0, y: tooltipBelow ? -6 : 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: tooltipBelow ? -6 : 6 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    left: `${tooltipX}%`,
                    top: tooltipBelow
                      ? `${activeNode.y + 8}%`
                      : `${Math.max(activeNode.y - 10, 4)}%`,
                  }}
                  className={cn(
                    "pointer-events-none absolute z-20 w-60 -translate-x-1/2 rounded-xl border border-white/10 bg-black/85 p-3.5 text-xs leading-relaxed text-white/80 shadow-xl backdrop-blur-xl",
                    tooltipBelow ? "translate-y-0" : "-translate-y-full"
                  )}
                >
                  <span className="mb-1 block font-mono text-[11px] text-white">
                    {activeNode.label}
                  </span>
                  {activeNode.blurb}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10">
            <span className="font-mono text-[11px] tracking-widest text-muted uppercase">
              Also in the toolkit
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {additionalTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 font-mono text-[11px] text-white/60"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
