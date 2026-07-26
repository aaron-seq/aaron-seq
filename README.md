<div align="center">

# Aaron Sequeira

**AI / Full-Stack Engineer** — RAG systems, computer vision, and production ML on Azure & AWS

Doha, Qatar · Open to remote

[![Portfolio](https://img.shields.io/badge/Portfolio-0B0C10?style=flat-square&logo=vercel&logoColor=white)](https://aaron-sequeira.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aaronsequeira/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:aaronsequeira12@gmail.com)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=flat-square&logo=leetcode&logoColor=black)](https://leetcode.com/u/AaronSeq/)
[![X](https://img.shields.io/badge/X-000000?style=flat-square&logo=x&logoColor=white)](https://twitter.com/aaron_seq)

</div>

---

## What I do

I build systems where the AI is the product, not a demo. Most of my work sits at the seam between
a retrieval or vision model and the boring-but-critical engineering around it — ingestion pipelines,
vector stores, auth, containers, CI/CD, and the dashboards that make the output trustworthy.

Recent shipping surface:

- **Retrieval-augmented search** over enterprise document corpora (LangChain / LlamaIndex, Qdrant, pgvector, ChromaDB)
- **Computer vision at scale** — YOLO/TensorFlow inference across a 1,100-camera security deployment
- **Regulated LLM products** — a banking FAQ assistant built under financial data-protection constraints
- **Full-stack delivery** — FastAPI / Next.js / Postgres / Docker, deployed on Azure, Vercel and Railway

Currently going deeper on agentic AI, Kubernetes, and evaluation tooling for RAG.

---

## Experience

### Full-Stack Developer — **Smarter.Codes** · Remote (India)
`Apr 2026 – Present`

- Architecting **Makerz.Network**, an AI-powered learning platform on Frappe that combines task
  management, LMS and skill tracking; uses **PostgreSQL `pgvector`** for semantic skill assessment
  and personalised learning recommendations with **sub-100 ms** vector similarity search.
- Building a high-security **LLM chatbot for banking FAQs**, designed against financial
  data-protection and compliance requirements.
- Owning **Playwright** UI automation coverage for the platform.

### AI Engineer (Contract) — **Wood Engineering** · Doha, Qatar
`Nov 2025 – Present`

- Training ML models (TensorFlow / PyTorch / MATLAB) for **CML asset-life optimisation** in
  industrial inspection workflows.
- Built custom extraction bots that cut document processing time by **97%**.
- Delivered a **RAG-based internal document search** system (LangChain + LlamaIndex + Qdrant)
  across 3,000+ documents, reducing retrieval time by **65%**.

### Software Engineer — **Mannai Corporation** (Lanco Engineering) · Doha, Qatar
`Oct 2025 – Nov 2025`

- Integrated AI monitoring into a national **Border Information System** spanning
  **1,100+ AXIS cameras** via Milestone VMS and Ipsotek.
- Deployed containerised **YOLO / TensorFlow** models for real-time violation analysis,
  cutting false alerts by **11%**.

### Software Engineering Intern — **Baker Hughes** · Pune, India
`Sep 2024 – Sep 2025`

- Architected a Technical Service Portal on **Microsoft Power Platform**, reducing service
  downtime by **70%** and accelerating compliance turnaround by **40%**.
- Engineered an end-to-end **LLM-powered RAG document system** (Python / React / Azure AI),
  cutting manual data entry by **75%**.
- Shipped through **Azure CI/CD** pipelines targeting 99.9% availability.

---

## Selected work

Projects are grouped by what they demonstrate, not by language. Every link is a working repository.

### AI & retrieval systems

| Project | What it is | Stack |
|---|---|---|
| [**Roneira Document Intelligence**](https://github.com/aaron-seq/Roneira-AI-LLM-powered-document-intelligence-system) | Enterprise document processing: Azure Document Intelligence + GPT-4, RAG pipeline with vector embeddings, JWT + RBAC, WebSocket progress, PII detection, rate limiting | FastAPI · Postgres · Redis · Azure AI · Docker |
| [**GenAI Browser Tool**](https://github.com/aaron-seq/GenAI-Browser-Tool) 🥇 | Browser extension for page summarisation, cited Q&A and 50+ language translation. Pluggable provider orchestrator (OpenAI / Anthropic / Gemini / Chrome built-in AI) with automatic fallback | TypeScript · Vite · Vitest · Playwright |
| [**CogniCore**](https://github.com/aaron-seq/cognicore-local-rag-assistant) | Fully local RAG assistant — no API keys, no data leaving the machine. Phi-3 + sentence-transformers + ChromaDB | LangChain · FastAPI · Streamlit |
| [**Semantic HTML Search**](https://github.com/aaron-seq/semantic-html-search-smarter-codes) | Meaning-based search over HTML content with 500-token chunking and cosine ranking; sub-second latency | FastAPI · Next.js · Qdrant |
| [**Woods Document Search**](https://github.com/aaron-seq/woods-document-search-engine) | Search engine PoC over 3,000+ internal engineering documents with AI categorisation and summarisation | Python · Vector search |
| [**ML Voice Lead Analysis**](https://github.com/aaron-seq/ML-voice-lead-analysis) | Transcribes sales cold calls and extracts buyer intent signals, qualified-lead scoring and a metrics dashboard | Python · Speech-to-text · ML |
| [**CareerAgent**](https://github.com/aaron-seq/CareerAgent) | Agentic assistant for job-search workflows | Python · LLM agents |

### Computer vision & ML

| Project | What it is | Stack |
|---|---|---|
| [**AI Traffic Management**](https://github.com/aaron-seq/AI-ML-Based-traffic-management-system) 🥉 | Real-time vehicle detection driving adaptive signal timing, with emergency-vehicle priority override and a live analytics dashboard. Reported 97.2% detection accuracy at ~150 ms per frame | YOLOv8 · FastAPI · React · WebSocket · Docker |
| [**SAR Oil-Spill Detection**](https://github.com/aaron-seq/SAR-MATLAB-Oil-spill-dectection) | Detects oil spills in Synthetic Aperture Radar imagery for environmental-impact monitoring | MATLAB · Image processing |
| [**Fraud Detection System**](https://github.com/aaron-seq/advanced-fraud-detection-system) | Credit-card fraud classification on heavily imbalanced data | Python · scikit-learn · Jupyter |
| [**BP Prediction Tool**](https://github.com/aaron-seq/BP-prediction-tool) | Predicts arterial blood pressure from PPG + ECG waveforms using an LSTM | TensorFlow · Signal processing |
| [**Heart Disease Prediction**](https://github.com/aaron-seq/heart-diseases-prediction-tool) | Neural-network classifier with a full notebook walkthrough of the modelling process | Python · Keras |
| [**Diabetes Prediction**](https://github.com/aaron-seq/Diabetes-Prediction-Tool) | Health-outcome prediction and management tooling | Python · scikit-learn |

### Full-stack & platform

| Project | What it is | Stack |
|---|---|---|
| [**Roneira AI HIFI**](https://github.com/aaron-seq/Roneira-AI-HIFI) · [live](https://roneira-ai-hifi.vercel.app) | Stock forecasting and portfolio platform. Six-model ensemble (RandomForest, LSTM, GAN, technical rules, momentum) that **surfaces model disagreement instead of averaging it away**; atomic buy/sell transactions and an append-only audit log | Next.js 16 · React 19 · FastAPI · Supabase · Upstash |
| [**NexusHome IoT**](https://github.com/aaron-seq/NexusHome_IoT) 🏆 | Smart-home energy platform with multi-protocol device support (MQTT, HTTP, CoAP, Matter), predictive maintenance and real-time dashboards | .NET 8 · SignalR · ML.NET · InfluxDB · Redis |
| [**SocialSync**](https://github.com/aaron-seq/SocialSync-Calendar-Relationship-Manager-Bot) | Personal CRM PWA with relationship-health scoring, AI-drafted context-aware messages, realtime sync and offline support | React 19 · Supabase · Tailwind · Framer Motion |
| [**Banking FAQ Chatbot**](https://github.com/aaron-seq/HPGB-Banking-Chatbot) · [live](https://hpgb-banking-chatbot.vercel.app) | Compliance-minded conversational assistant for retail banking FAQs | TypeScript · LLM |
| [**Chatbot Flow Builder**](https://github.com/aaron-seq/chatbot-flow-builder) · [live](https://chatbot-flow-builder-red-kappa.vercel.app) | Visual node-based editor for designing conversational flows | JavaScript · React Flow |
| [**PDF Data Extractor**](https://github.com/aaron-seq/PDF-data-extractor-pyRE-react-tool) | Regex + parsing pipeline for pulling structured records out of PDFs | Python · React |
| [**Loan Eligibility Calculator**](https://github.com/aaron-seq/Loan-eligibility-calculator) | Automates bank loan-eligibility decisions from application data | HTML · Python |

---

## Toolkit

**Languages** — Python · TypeScript · JavaScript · C# · C++ · Java · MATLAB · SQL · Bash

**AI / ML** — LangChain · LlamaIndex · OpenAI & Azure OpenAI · PyTorch · TensorFlow · scikit-learn ·
YOLOv8 · OpenCV · sentence-transformers · RAG pipelines · retrieval evaluation

**Backend** — FastAPI · Django · Flask · Node.js / Express · ASP.NET Core · Frappe · REST · WebSockets · Celery

**Frontend** — React 19 · Next.js · Redux · TanStack Query · Zustand · Tailwind CSS · Framer Motion

**Data** — PostgreSQL (+ pgvector) · MongoDB · MySQL · Redis · SQLite · InfluxDB · Qdrant · ChromaDB · Supabase

**Cloud & DevOps** — Azure · AWS · Docker · Kubernetes · GitHub Actions · Jenkins · Vercel · Railway · Render · Power Platform

**Testing** — Playwright · Pytest · Vitest

---

## Measured impact

| Outcome | Where |
|---|---|
| **97%** less document processing time | Wood Engineering — AI extraction bots |
| **75%** less manual data entry | Baker Hughes — LLM document pipeline |
| **70%** less service downtime | Baker Hughes — Technical Service Portal |
| **65%** faster document retrieval | Wood Engineering — RAG search |
| **40%** faster compliance turnaround | Baker Hughes — Power Platform automation |
| **11%** fewer false security alerts | Mannai — containerised CV models |
| **1,100+** cameras under AI monitoring | Mannai — Border Information System |
| **<100 ms** vector similarity search | Smarter.Codes — pgvector skill matching |

---

## Recognition

| Award | Event | Work | Year |
|---|---|---|---|
| 🥇 1st place | LearnIT Hackathon | GenAI Browser Tool | 2024 |
| 🥉 3rd place | University Hackathon 8.0 | AI Traffic Management | 2023 |
| 🏆 Best prototype | ACM Mini Hacks 2.0 | NexusHome smart-home energy (C#/.NET) | 2023 |
| 🎓 Merit scholarship | SPDC — Qatar Govt & Indian Embassy | Academic excellence | 2021–2025 |
| — | GDSC & ACM | Technical operations lead | 2022–2024 |

**Education** — B.Tech, Information Technology · Manipal University · CGPA 7.93

**Competitive programming** — 1,600+ LeetCode rating · 5★ HackerRank
([LeetCode](https://leetcode.com/u/AaronSeq/) · [HackerRank](https://www.hackerrank.com/profile/aaronsequeira12))

---

## Activity

<div align="center">

<img width="49%" alt="GitHub stats" src="https://github-readme-stats.vercel.app/api?username=aaron-seq&show_icons=true&hide_border=true&theme=tokyonight&bg_color=0D1117&title_color=58A6FF&icon_color=58A6FF&text_color=C9D1D9&count_private=true&include_all_commits=true" />
<img width="49%" alt="Top languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=aaron-seq&layout=compact&hide_border=true&theme=tokyonight&bg_color=0D1117&title_color=58A6FF&text_color=C9D1D9&langs_count=8" />

</div>

---

## Get in touch

I'm interested in AI engineering and full-stack roles where retrieval, vision or agentic systems
need to survive contact with real users and real compliance requirements.

**Email** — [aaronsequeira12@gmail.com](mailto:aaronsequeira12@gmail.com)
**LinkedIn** — [/in/aaronsequeira](https://www.linkedin.com/in/aaronsequeira/)
**Phone** — +974 66900150 (QA) · +91 99877 26291 (IN)
