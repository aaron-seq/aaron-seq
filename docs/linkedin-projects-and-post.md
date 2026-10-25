# LinkedIn · Projects section + viral post

---

# PART 1 · Projects section

LinkedIn Project fields: **Project name · Description (2,000 char max) · Start/End date ·
Associated with · Project URL · Contributors**. Add these in this order, LinkedIn shows
the top two before "show all".

### 1. AgileWriter · Enterprise AI Document Automation
- **Dates:** Mar 2026 – Present (check "I am currently working on this")
- **Associated with:** Smarter.Codes · Full-Stack AI Engineer
- **URL:** *(none, proprietary)*
```
Core contributor to an enterprise AI document automation platform. Designed the AI architecture: LLM/RAG pipelines, semantic search over PostgreSQL pgvector, graph-based retrieval and enterprise knowledge indexing, enabling contextual reasoning across enterprise knowledge bases.

Led architectural decision-making through Engineering Design Reviews, API design, system architecture documentation and authentication architecture for a production-scale SaaS platform.

Stack: Python, FastAPI, React, TypeScript, PostgreSQL, pgvector, Azure, Docker, Microsoft Graph, Redux Toolkit.
```

### 2. Roneira · LLM-Powered Document Intelligence System
- **Dates:** Aug 2025 – Jan 2026
- **URL:** `https://github.com/aaron-seq/Roneira-AI-LLM-powered-document-intelligence-system`
```
Enterprise-grade platform for intelligent document processing. Combines Azure Document Intelligence with GPT-4, adds a RAG pipeline with vector embeddings and context-aware chat, JWT authentication with role-based access control, real-time WebSocket processing updates, PII detection and rate limiting.

Layered architecture: client → load balancer → FastAPI orchestration → Azure AI services, with PostgreSQL and Redis for persistence and caching. Full CI/CD.

Stack: FastAPI, Python 3.11, PostgreSQL, Redis, Azure OpenAI, Azure Document Intelligence, Docker.
```

### 3. GenAI Browser Tool · 1st Place, LearnIT Hackathon
- **Dates:** Aug 2025 – Jan 2026
- **URL:** `https://github.com/aaron-seq/GenAI-Browser-Tool`
```
Award-winning browser extension (1st place, LearnIT Hackathon) that brings AI analysis directly into the browser: multi-style summarisation, conversational Q&A with source citations, translation across 50+ language pairs, sentiment and readability scoring.

Built around a pluggable AI provider orchestrator supporting OpenAI, Anthropic, Google Gemini and Chrome's built-in AI, with automatic fallback when a provider is unavailable. Handles up to 50,000 characters per request; local processing prioritised for privacy.

Stack: TypeScript 5.3, Vite, Rollup, Vitest, Playwright, Chrome APIs, IndexedDB.
```

### 4. Roneira AI HIFI · Financial Intelligence Platform
- **Dates:** Apr 2024 – Present
- **URL:** `https://roneira-ai-hifi.vercel.app`
```
Production-grade stock prediction and portfolio analytics platform built on a multi-model ML ensemble: RandomForest, XGBoost, LSTM, GAN, technical-analysis rules and a price-volume momentum engine across 50+ technical indicators.

Design decision worth noting: the system surfaces model disagreement rather than averaging predictions away, so users see uncertainty instead of false confidence.

Portfolio management with live valuations, buy/sell handled as atomic database transactions to prevent race conditions, append-only audit log, row-level security and rate limiting.

Stack: Next.js 16, React 19, FastAPI, Supabase (PostgreSQL), TanStack Query, Zustand, Upstash Redis.
```

### 5. CogniCore · Fully Local RAG Assistant
- **Dates:** Sep 2025 – Oct 2025
- **URL:** `https://github.com/aaron-seq/cognicore-local-rag-assistant`
```
Private document intelligence that runs entirely on your own hardware: no API keys, no internet connection required after setup, no data leaving the machine.

Microsoft Phi-3 for generation, sentence-transformers for embeddings, ChromaDB for vector storage, orchestrated with LangChain behind a FastAPI backend and Streamlit interface.

Built for the case where RAG is the right answer but sending documents to a third-party API is not.
```

### 6. AI-Powered Traffic Management System · 3rd Place, University Hackathon 8.0
- **Dates:** Oct 2023 – Jan 2026
- **URL:** `https://github.com/aaron-seq/AI-ML-Based-traffic-management-system`
```
Intelligent traffic control platform using YOLOv8 computer vision to detect vehicles in real time and optimise signal timing by traffic density, with automatic emergency-vehicle priority override.

Reported performance: 97.2% detection accuracy, ~150ms processing per frame, 35ms API response, 1,500+ concurrent users.

Async FastAPI backend with WebSocket streaming to a React analytics dashboard, Redis caching, Docker deployment.
```

### 7. NexusHome IoT · Best Prototype, ACM Mini Hacks 2.0
- **Dates:** Aug 2025 – Feb 2026
- **URL:** `https://github.com/aaron-seq/NexusHome_IoT`
```
Smart-home energy management platform with multi-protocol device support (MQTT, HTTP, CoAP, Matter), ML.NET-driven energy optimisation and predictive maintenance, and real-time SignalR dashboards.

Enterprise-grade security throughout: JWT authentication, TLS encryption, REST and SignalR APIs for integration.

Stack: .NET 8, ASP.NET Core, Entity Framework Core, SignalR, ML.NET, SQL Server, Redis, InfluxDB.
```

### 8. Semantic HTML Search Engine
- **Dates:** Nov 2025
- **URL:** `https://github.com/aaron-seq/semantic-html-search-smarter-codes`
```
Semantic search over HTML content that retrieves by meaning rather than keyword match. Intelligent 500-token chunking, sentence-transformer embeddings and cosine-similarity ranking over a Qdrant index, with sub-second latency on typical web pages.

Stack: FastAPI, Next.js, Qdrant, sentence-transformers, Docker.
```

**Optional 9th, work projects as Projects entries** (useful because they carry your
strongest numbers and link to named employers):

- **CML Asset-Life Optimisation & RAG Document Search**: Wood Engineering Qatar, Nov 2025 – Mar 2026, *TensorFlow/PyTorch/MATLAB models on a 2,100+ sample dataset; RAG search (LangChain, LlamaIndex, Qdrant) cutting retrieval time 65%; extraction bots cutting processing time 97%.*
- **Border Information System, AI Monitoring**: Mannai Corporation, Oct – Nov 2025, *AI monitoring across 1,100+ AXIS cameras via Milestone VMS and Ipsotek; containerised YOLO/TensorFlow models cutting false alerts 11%.*

---

# PART 2 · The post

## Version A · recommended

> Grounded in the actual reporting, and it earns the "slop" argument instead of asserting
> it. The twist in the middle is what makes people stop scrolling.

```
An AI agent found a bug that had been hiding in PHP since 2012.

Then it couldn't explain what it had found.

Here's what actually happened at Wiz in early August.

A researcher pointed an agent at a narrow question: can this WordPress weakness be reproduced in Drupal?

Eight hours later it came back and said no. It had failed.

Then it mentioned, almost in passing, that it had found something else along the way. A flaw in PHP itself.

The researcher's first reaction wasn't excitement. It was, in his words, "Models tend to hallucinate."

He was wrong to doubt it.

The bug was real. It's now CVE-2026-109618 and CVE-2026-109619, known as PHP2Shell. The PHP team rated it 9.2 critical. watchTowr rated it a flat 10.0. Every PHP release since 5.4 is affected.

Now here's the part nobody is posting about.

The agent could not explain the bug. Human researchers spent days afterwards working out the mechanism and reproducing it.

Read that sequence again:

→ Fourteen years of human code review missed it.
→ An AI found it in eight hours, while failing at a completely different task.
→ The AI couldn't explain its own finding.
→ Humans had to do that part.

We keep arguing about whether AI output is slop. I think that's the wrong question.

The agent's reasoning WAS slop. Its finding was not.

We've been grading AI on the artifact that's easiest to judge, the explanation, while the thing that actually mattered was the discovery. And we graded fourteen years of human code review exactly as lazily. It looked rigorous. It was wrong the entire time.

So the uncomfortable version:

AI is getting good at finding what humans can't see.
Humans are still needed to understand what AI can't explain.

Neither of those is slop. The slop was our confidence.

I build RAG and document intelligence systems for a living, and the lesson I'm taking into every eval I write this quarter is simple: stop scoring the explanation. Score the find.

What's the oldest bug your team ever shipped past, and would an agent have caught it in eight hours?
```

## Version B · closer to your original framing, shorter

```
The PHP bug that just broke the internet was found by an AI.

Fourteen years of human code review missed it.

PHP2Shell, CVE-2026-109618 and CVE-2026-109619. Rated 9.2 critical by the PHP team, a flat 10.0 by watchTowr. Every PHP release since 5.4 is affected. Patched Oct 21, and attackers were probing it in the thousands within the hour.

It was found by an agent at Wiz that had been asked to do something else entirely, failed at that task, and reported the PHP flaw as a side note after eight hours.

Everyone spent 2025 complaining about AI slop.

Nobody noticed that while we were complaining, the slop got quietly identified somewhere else, in fourteen years of human review that looked rigorous and wasn't.

AI output is getting audited harder than any human output in software history. Every hallucination gets a screenshot. Meanwhile a decade of human-approved code shipped to 70% of the web with a critical flaw in it, and nobody screenshotted that.

I'm not saying AI is better. The same agent couldn't explain the bug it found, humans spent days reverse-engineering the mechanism.

I'm saying the asymmetry in how we audit the two is about to flip.

Build accordingly.
```

## The 30 hashtags · paste as one paragraph below the post

```
#AI #ArtificialIntelligence #CyberSecurity #PHP #PHP2Shell #InfoSec #AppSec #ZeroDay #VulnerabilityManagement #SoftwareEngineering #AIEngineering #MachineLearning #LLM #AIAgents #AgenticAI #DevSecOps #SecurityResearch #OpenSource #WebDevelopment #CloudSecurity #TechNews #CVE #CodeReview #SoftwareDevelopment #AITools #Innovation #Programming #Developers #FutureOfWork #TechLeadership
```

---

# PART 3 · Why the post is built this way

- **First two lines carry everything.** LinkedIn truncates at roughly 210 characters. Both
  versions put a complete, surprising idea above the fold, so the "see more" click is the
  only way to resolve it.
- **Short paragraphs, heavy line breaks.** Mobile readers skim; walls of text get scrolled.
- **The mid-post twist** ("here's the part nobody is posting about") is the dwell-time
  mechanism. Dwell time reportedly matters more than likes, the reader has to stay to
  resolve the tension.
- **A real question at the end**, answerable from experience, not a "thoughts?", comments
  with substance pull more reach than reactions.
- **Specifics over adjectives.** CVE numbers, 9.2 vs 10.0, "since 5.4", "eight hours". The
  credibility is in the detail, and it's what makes people quote you.

---

# Fact check · what's verified and what isn't

**Solid, corroborated across sources:**
- PHP2Shell; CVE-2026-109618 and CVE-2026-109619
- PHP developers rated 9.2 critical (CVSS v4.0); watchTowr rated 10.0
- "Every PHP version released in the last decade is affected by at least one of these vulnerabilities, going back to version 5.4", Wiz researchers
- Wiz researcher **Sagi Tzadik** tasked an agent with testing a WordPress weakness against Drupal in early August; after 8 hours it reported failure plus the PHP find
- Tzadik's initial reaction, quoted: **"Models tend to hallucinate."**
- The agent could not explain the bug; humans spent days working out and reproducing the mechanism
- Security firm **Calif** found the flaws independently; coordinated disclosure followed
- Patched **21 October 2026**

**Treat with care, I did NOT put these in the post as hard claims:**
- *"70% of the web"*, widely repeated, not independently verified. Version B uses it; drop
  it if you want to be strict.
- *The word "slop" attributed to Tzadik*, one search surfaced it, a second could not
  confirm it. **I deliberately did not quote him saying it.** The posts make the slop
  argument in your own voice instead. Do not add quotation marks around it.
- *Google's role*, Wiz is owned by Alphabet/Google Cloud, so "Google" is accurate only
  indirectly. Model names (Gemini 4 Argon, GPT-5.6 Sol) appeared in lower-quality sources
  only, so they are not in the post.
- Exploitation counts (thousands → millions) are attributed to Cloudflare's CEO; Version B
  says only "in the thousands within the hour", which is the safe floor.
