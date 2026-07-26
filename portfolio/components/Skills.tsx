"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import { skills } from "@/lib/data";

const marquee = [
  "LangChain",
  "Qdrant",
  "pgvector",
  "FastAPI",
  "Next.js",
  "PyTorch",
  "YOLO",
  "Azure",
  "Docker",
  "Microsoft Graph",
  "PostgreSQL",
  "Redis",
  "Playwright",
  "TensorFlow",
  "XGBoost",
  "React",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading
          index="04"
          title="Toolkit"
          lead="Tools I've shipped production or near-production work with — not a list of everything I've read about."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl glass p-6"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {group.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-1.5 text-sm text-mist-300 transition-colors hover:border-accent/30 hover:text-mist-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-white/[0.06] py-5">
        <div className="flex w-max animate-marquee gap-10">
          {[...marquee, ...marquee].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-mono text-sm whitespace-nowrap text-mist-400/50"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      </div>
    </section>
  );
}
