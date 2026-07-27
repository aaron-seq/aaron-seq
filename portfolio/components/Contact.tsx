"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "/in/aaronsequeira", href: profile.links.linkedin },
  { label: "GitHub", value: "@aaron-seq", href: profile.links.github },
  { label: "X", value: "@aaron_seq", href: profile.links.twitter },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl glass px-7 py-14 text-center sm:px-14"
        >
          <div className="absolute -top-24 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[100px]" />

          <p className="relative font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            06 — Contact
          </p>
          <h2 className="relative mt-5 text-3xl font-semibold tracking-tight text-mist-100 sm:text-5xl">
            Let&rsquo;s build something
            <br className="hidden sm:block" /> that ships.
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-mist-400 leading-relaxed">
            {profile.availability}. I&rsquo;m most useful where enterprise AI
            systems have to survive contact with real users, real corpora and
            real compliance requirements.
          </p>

          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-mist-100 px-7 py-3.5 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
            >
              {profile.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/12 px-7 py-3.5 text-sm text-mist-200 transition-colors hover:border-accent/45 hover:text-mist-100"
            >
              Connect on LinkedIn
            </a>
          </div>

          <dl className="relative mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 text-left md:grid-cols-4">
            {channels.map((c) => (
              <div key={c.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-400/70">
                  {c.label}
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="break-words text-sm text-mist-200 transition-colors hover:text-accent"
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <p className="relative mt-8 font-mono text-xs text-mist-400/60">
            {profile.phones.join("  ·  ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-9">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-xs text-mist-400/70 sm:flex-row">
        <p>© {new Date().getFullYear()} Aaron Sequeira</p>
        <p className="font-mono">Built with Next.js, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
}
