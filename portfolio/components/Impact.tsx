"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import { impact, awards } from "@/lib/data";

export function Impact() {
  return (
    <section id="impact" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading
          index="05"
          title="Measured impact"
          lead="Numbers reported from the work itself — each one tied to a specific system and a specific team."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((m, i) => (
            <motion.div
              key={m.metric + m.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-ink-950/85 p-6 transition-colors hover:bg-ink-900"
            >
              <p className="text-3xl font-semibold tracking-tight text-gradient">
                {m.metric}
              </p>
              <p className="mt-2 text-sm text-mist-200">{m.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-mist-400/70">
                {m.where}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            Recognition
          </h3>
          <div className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {awards.map((a, i) => (
              <motion.div
                key={a.title + a.event}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-44 shrink-0 font-medium text-mist-100">
                  {a.title}
                </span>
                <span className="flex-1 text-sm text-mist-300">{a.event}</span>
                <span className="flex-1 text-sm text-mist-400">{a.work}</span>
                <span className="font-mono text-xs text-mist-400/70">
                  {a.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
