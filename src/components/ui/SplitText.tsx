"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "p";
}

/**
 * Word-by-word clip reveal — each word rises out of a hidden overflow band.
 * Reads as deliberate typography motion rather than a generic fade-in.
 */
export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as = "h1",
}: SplitTextProps) {
  const words = text.split(" ");
  const Tag = as;

  return (
    <Tag className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden pb-[0.15em] pr-[0.28em]">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
