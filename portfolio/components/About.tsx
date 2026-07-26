"use client";

import { Reveal, SectionHeading, Stagger, StaggerItem } from "./Reveal";
import { profile } from "@/lib/data";

const focus = [
  {
    title: "Retrieval-augmented systems",
    body: "Chunking strategy, embedding choice, hybrid retrieval and evaluation — over corpora in the thousands of documents, not toy datasets. LangChain, LlamaIndex, Qdrant, pgvector, ChromaDB.",
  },
  {
    title: "Computer vision in production",
    body: "YOLO and TensorFlow models containerised and deployed against a live 1,100-camera security estate, tuned to cut false alerts rather than just win on a benchmark.",
  },
  {
    title: "Regulated LLM products",
    body: "A banking FAQ assistant designed against financial data-protection requirements: guarded retrieval, PII handling, auditability and access control from the first commit.",
  },
  {
    title: "The full delivery path",
    body: "FastAPI and Next.js services with Postgres and Redis behind them, packaged in Docker, shipped through Azure DevOps and GitHub Actions, tested with Playwright and Pytest.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading
          index="01"
          title="What I actually build"
          lead="Four things show up in nearly every project I ship. They're the reason a model gets past a notebook and into someone's workflow."
        />

        <Stagger className="grid gap-5 md:grid-cols-2">
          {focus.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-7 transition-colors duration-300 hover:border-accent/25">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <h3 className="relative text-lg font-medium text-mist-100">
                  {f.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-mist-400">
                  {f.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-6 grid gap-5 rounded-2xl glass p-7 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono">
                Education
              </p>
              <p className="mt-3 text-mist-100">{profile.education.degree}</p>
              <p className="mt-1 text-sm text-mist-400">
                {profile.education.school} · {profile.education.detail}
              </p>
              <p className="mt-1 text-sm text-mist-400/70">
                {profile.education.years}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono">
                Currently learning
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mist-300">
                Agentic AI architectures, Kubernetes at scale, and evaluation
                tooling for retrieval quality.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono">
                Problem solving
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mist-300">
                1,600+ LeetCode rating · 5★ HackerRank
              </p>
              <div className="mt-3 flex gap-3 text-sm">
                <a
                  href={profile.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  LeetCode
                </a>
                <a
                  href={profile.links.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  HackerRank
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
