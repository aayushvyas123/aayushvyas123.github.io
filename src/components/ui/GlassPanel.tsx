import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export default function GlassPanel({
  className,
  glow = false,
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset]",
        glow &&
          "before:pointer-events-none before:absolute before:-inset-px before:rounded-3xl before:bg-[linear-gradient(120deg,color-mix(in_oklab,var(--aurora-cyan)_18%,transparent),transparent_35%,color-mix(in_oklab,var(--aurora-purple)_16%,transparent)_65%,transparent)] before:opacity-60",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
