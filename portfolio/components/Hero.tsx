"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, headlineStats } from "@/lib/data";

function Typewriter({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = lines[index % lines.length];
    const done = !deleting && text === full;
    const cleared = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % lines.length);
          return;
        }
        setText(
          deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)
        );
      },
      done ? 1900 : deleting ? 22 : 42
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, lines]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="animate-caret text-accent-2">▍</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center pt-24">
      <div className="container-x w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 text-xs text-mist-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-3 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-3" />
          </span>
          Available for new roles · {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight text-mist-100 sm:text-7xl lg:text-[5.2rem]"
        >
          Aaron
          <br />
          <span className="text-gradient">Sequeira</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-lg sm:text-xl"
        >
          <span className="text-mist-200">{profile.role}</span>
          <span className="text-ink-600">/</span>
          <Typewriter lines={profile.tagline} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-mist-400"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group relative overflow-hidden rounded-full bg-mist-100 px-6 py-3 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
          >
            View selected work
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/12 px-6 py-3 text-sm text-mist-200 transition-colors hover:border-accent/45 hover:text-mist-100"
          >
            Get in touch
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/12 px-6 py-3 text-sm text-mist-200 transition-colors hover:border-accent/45 hover:text-mist-100"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.05] lg:grid-cols-4"
        >
          {headlineStats.map((s) => (
            <div key={s.label} className="bg-ink-950/80 p-5">
              <dt className="text-2xl font-semibold text-mist-100 sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1.5 text-sm text-mist-300">{s.label}</dd>
              <dd className="mt-1 text-xs leading-relaxed text-mist-400/70">
                {s.sub}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
