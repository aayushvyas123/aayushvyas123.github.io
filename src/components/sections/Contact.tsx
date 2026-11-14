"use client";

import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { site } from "@/data/site-config";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="font-mono text-xs tracking-widest text-aurora-cyan uppercase">
            Contact
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s build something meaningful.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-lg text-muted">
            Open to full-stack and AI-focused engineering roles and
            collaborations. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              onClick={() => {
                window.location.href = `mailto:${site.email}`;
              }}
              className="bg-white text-black hover:bg-white/90"
            >
              <Mail size={16} />
              {site.email}
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={site.resumeHref}
              download
              aria-label="Download resume"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
            >
              <FileDown size={18} />
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-32 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
        <p className="font-mono">Built with Next.js, aurora, and care.</p>
      </footer>
    </section>
  );
}
