"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import { projects, type Project } from "@/lib/data";

const filters = [
  "Featured",
  "All",
  "AI & Retrieval",
  "Computer Vision & ML",
  "Full-Stack & Platform",
] as const;

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.3), ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl glass p-6 transition-colors duration-300 hover:border-accent/25"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {p.award && (
        <span className="mb-3 inline-flex w-fit rounded-full border border-accent-2/25 bg-accent-2/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-accent-2">
          {p.award}
        </span>
      )}

      <h3 className="text-lg font-medium leading-snug text-mist-100">
        {p.name}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-mist-400">{p.blurb}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden text-sm leading-relaxed text-mist-300"
          >
            <span className="mt-3 block border-l border-accent/30 pl-3">
              {p.detail}
            </span>
          </motion.p>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-3 w-fit font-mono text-[11px] uppercase tracking-wider text-accent transition-opacity hover:opacity-70"
        aria-expanded={open}
      >
        {open ? "Less −" : "Details +"}
      </button>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-mist-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 pt-6 text-sm">
        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer"
          className="text-mist-200 transition-colors hover:text-accent"
        >
          Source →
        </a>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="text-mist-200 transition-colors hover:text-accent-3"
          >
            Live demo →
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Featured");

  const shown = useMemo(() => {
    if (filter === "Featured") return projects.filter((p) => p.featured);
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading
          index="03"
          title="Selected work"
          lead="Grouped by what each project demonstrates rather than by language. Every card links to a working repository — several are live."
        />

        <div className="mb-9 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                filter === f
                  ? "text-ink-950"
                  : "text-mist-400 hover:text-mist-100"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-mist-100"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <ProjectCard key={p.name} p={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/aaron-seq?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border border-white/12 px-6 py-3 text-sm text-mist-200 transition-colors hover:border-accent/45 hover:text-mist-100"
          >
            Browse all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
