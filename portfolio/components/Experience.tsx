"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading
          index="02"
          title="Experience"
          lead="Enterprise SaaS, industrial inspection, national security infrastructure and oilfield services — four very different constraint sets."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent md:left-[9px]" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.article
                key={job.company + job.period}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-9 md:pl-12"
              >
                <span
                  className={`absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border md:h-5 md:w-5 ${
                    job.current
                      ? "border-accent-3/60 bg-accent-3/15"
                      : "border-white/15 bg-ink-800"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      job.current ? "bg-accent-3" : "bg-mist-400/60"
                    }`}
                  />
                </span>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-medium text-mist-100">
                    {job.role}
                  </h3>
                  <span className="text-ink-600">·</span>
                  <span className="text-accent">{job.company}</span>
                  {job.current && (
                    <span className="rounded-full border border-accent-3/30 bg-accent-3/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent-3">
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-1.5 font-mono text-xs text-mist-400">
                  {job.period} · {job.location}
                </p>

                <p className="mt-4 text-sm text-mist-300">{job.summary}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.points.map((p) => (
                    <li
                      key={p}
                      className="relative pl-5 text-sm leading-relaxed text-mist-400"
                    >
                      <span className="absolute left-0 top-[9px] h-1 w-1 rounded-full bg-accent/70" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-mist-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
