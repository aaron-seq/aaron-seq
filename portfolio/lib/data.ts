export const profile = {
  name: "Aaron Sequeira",
  fullName: "Aaron Emmanuel Xavier Sequeira",
  role: "AI / Full-Stack Engineer",
  location: "Doha, Qatar",
  availability: "Open to AI engineering & full-stack roles — remote or Gulf-based",
  tagline: [
    "RAG systems that survive real corpora.",
    "Computer vision across 1,100+ cameras.",
    "LLM products under compliance constraints.",
    "Full-stack delivery, end to end.",
  ],
  summary:
    "I build systems where the AI is the product, not the demo. Most of my work sits at the seam between a retrieval or vision model and the engineering that makes it dependable — ingestion pipelines, vector stores, auth, containers, CI/CD, and the dashboards that make output trustworthy.",
  email: "aaronsequeira12@gmail.com",
  phones: ["+974 66900150", "+91 99877 26291"],
  links: {
    github: "https://github.com/aaron-seq",
    linkedin: "https://www.linkedin.com/in/aaronsequeira/",
    leetcode: "https://leetcode.com/u/AaronSeq/",
    hackerrank: "https://www.hackerrank.com/profile/aaronsequeira12",
    twitter: "https://twitter.com/aaron_seq",
  },
  education: {
    degree: "B.Tech, Information Technology",
    school: "Manipal University",
    detail: "CGPA 7.93",
    years: "2021 – 2025",
  },
};

export const headlineStats = [
  { value: "4", label: "Engineering roles", sub: "Baker Hughes → Mannai → Wood → Smarter.Codes" },
  { value: "29+", label: "Public repositories", sub: "AI, CV, full-stack, IoT" },
  { value: "1,100+", label: "Cameras under AI monitoring", sub: "National border system" },
  { value: "3", label: "Hackathon podiums", sub: "Including a 1st place" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Smarter.Codes",
    role: "Full-Stack Developer",
    period: "Apr 2026 — Present",
    location: "Remote · India",
    current: true,
    summary:
      "Architecting an AI-powered learning platform and a compliance-grade banking assistant.",
    points: [
      "Architecting Makerz.Network, an AI learning platform on Frappe combining task management, LMS and skill tracking.",
      "Built semantic skill assessment on PostgreSQL pgvector with sub-100 ms vector similarity search driving personalised learning recommendations.",
      "Developing a high-security LLM chatbot for banking FAQs, designed against financial data-protection requirements.",
      "Own Playwright UI automation coverage across the platform.",
    ],
    stack: ["Frappe", "Python", "PostgreSQL", "pgvector", "LLMs", "Playwright"],
  },
  {
    company: "Wood Engineering",
    role: "AI Engineer (Contract)",
    period: "Nov 2025 — Present",
    location: "Doha, Qatar",
    current: true,
    summary:
      "ML for industrial asset-life optimisation, plus a RAG search layer over the internal document estate.",
    points: [
      "Training TensorFlow / PyTorch / MATLAB models for CML (Condition Monitoring Location) asset-life optimisation.",
      "Built custom AI extraction bots that cut document processing time by 97%.",
      "Delivered a RAG-based internal document search system across 3,000+ documents, reducing retrieval time by 65%.",
    ],
    stack: ["PyTorch", "TensorFlow", "MATLAB", "LangChain", "LlamaIndex", "Qdrant"],
  },
  {
    company: "Mannai Corporation",
    role: "Software Engineer · Lanco Engineering",
    period: "Oct 2025 — Nov 2025",
    location: "Doha, Qatar",
    summary:
      "AI monitoring for a national Border Information System at camera-fleet scale.",
    points: [
      "Integrated AI monitoring across 1,100+ AXIS cameras via Milestone VMS and Ipsotek.",
      "Deployed containerised YOLO / TensorFlow models for real-time violation analysis, cutting false alerts by 11%.",
      "Scaled automated object detection into live security operations.",
    ],
    stack: ["YOLO", "TensorFlow", "Docker", "Milestone VMS", "Ipsotek"],
  },
  {
    company: "Baker Hughes",
    role: "Software Engineering Intern",
    period: "Sep 2024 — Sep 2025",
    location: "Pune, India",
    summary:
      "Process automation and document intelligence for technical service operations.",
    points: [
      "Architected a Technical Service Portal on Microsoft Power Platform, reducing service downtime by 70% and accelerating compliance turnaround by 40%.",
      "Engineered an end-to-end LLM-powered RAG document system (Python / React / Azure AI), cutting manual data entry by 75%.",
      "Shipped through Azure CI/CD pipelines targeting 99.9% availability.",
    ],
    stack: ["Power Platform", "Python", "React", "Azure AI", "Azure DevOps"],
  },
];

export type Project = {
  name: string;
  blurb: string;
  detail: string;
  stack: string[];
  category: "AI & Retrieval" | "Computer Vision & ML" | "Full-Stack & Platform";
  repo: string;
  live?: string;
  award?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Roneira Document Intelligence",
    blurb: "Enterprise document processing with Azure AI + GPT-4 and a full RAG pipeline.",
    detail:
      "Extracts, analyses and structures documents at enterprise scale. Combines Azure Document Intelligence with GPT-4, adds vector-embedding retrieval and context-aware chat, JWT auth with role-based access, WebSocket progress updates, PII detection and rate limiting.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Azure AI", "Docker"],
    category: "AI & Retrieval",
    repo: "https://github.com/aaron-seq/Roneira-AI-LLM-powered-document-intelligence-system",
    featured: true,
  },
  {
    name: "GenAI Browser Tool",
    blurb: "Browser extension for summarisation, cited Q&A and 50+ language translation.",
    detail:
      "A pluggable AI provider orchestrator (OpenAI, Anthropic, Gemini, Chrome built-in AI) with automatic fallback when a provider is unavailable. Handles up to 50,000 characters per request with local processing prioritised for privacy.",
    stack: ["TypeScript", "Vite", "Vitest", "Playwright", "Chrome APIs"],
    category: "AI & Retrieval",
    repo: "https://github.com/aaron-seq/GenAI-Browser-Tool",
    award: "1st place · LearnIT Hackathon",
    featured: true,
  },
  {
    name: "Roneira AI HIFI",
    blurb: "Stock forecasting and portfolio platform that surfaces model disagreement.",
    detail:
      "A six-model ensemble — RandomForest, LSTM, GAN, technical rules and a price-volume momentum engine — that shows where models disagree instead of averaging predictions away. Atomic buy/sell transactions, append-only audit log, row-level security.",
    stack: ["Next.js 16", "React 19", "FastAPI", "Supabase", "Upstash Redis"],
    category: "Full-Stack & Platform",
    repo: "https://github.com/aaron-seq/Roneira-AI-HIFI",
    live: "https://roneira-ai-hifi.vercel.app",
    featured: true,
  },
  {
    name: "AI Traffic Management System",
    blurb: "Real-time vehicle detection driving adaptive signal timing.",
    detail:
      "YOLOv8 detection feeding density-based signal optimisation, with emergency-vehicle priority override and a live analytics dashboard. Reported 97.2% detection accuracy at roughly 150 ms per frame.",
    stack: ["YOLOv8", "FastAPI", "React", "WebSocket", "Docker"],
    category: "Computer Vision & ML",
    repo: "https://github.com/aaron-seq/AI-ML-Based-traffic-management-system",
    award: "3rd place · University Hackathon 8.0",
    featured: true,
  },
  {
    name: "NexusHome IoT",
    blurb: "Smart-home energy platform with predictive maintenance.",
    detail:
      "Multi-protocol device support (MQTT, HTTP, CoAP, Matter), ML.NET-driven energy optimisation and predictive maintenance, real-time SignalR dashboards, JWT + TLS throughout.",
    stack: [".NET 8", "SignalR", "ML.NET", "InfluxDB", "Redis"],
    category: "Full-Stack & Platform",
    repo: "https://github.com/aaron-seq/NexusHome_IoT",
    award: "Best prototype · ACM Mini Hacks 2.0",
    featured: true,
  },
  {
    name: "CogniCore",
    blurb: "Fully local RAG assistant — no API keys, no data leaving the machine.",
    detail:
      "Private document intelligence running end to end on your own hardware: Phi-3 for generation, sentence-transformers for embeddings, ChromaDB for vector storage, orchestrated by LangChain.",
    stack: ["LangChain", "Phi-3", "ChromaDB", "FastAPI", "Streamlit"],
    category: "AI & Retrieval",
    repo: "https://github.com/aaron-seq/cognicore-local-rag-assistant",
    featured: true,
  },
  {
    name: "Semantic HTML Search",
    blurb: "Meaning-based search over HTML content with sub-second latency.",
    detail:
      "Intelligent 500-token chunking, sentence-transformer embeddings and cosine-similarity ranking over a Qdrant index, wrapped in a Next.js front end and Docker deployment.",
    stack: ["FastAPI", "Next.js", "Qdrant", "sentence-transformers"],
    category: "AI & Retrieval",
    repo: "https://github.com/aaron-seq/semantic-html-search-smarter-codes",
  },
  {
    name: "SocialSync",
    blurb: "Personal CRM PWA with AI-drafted, context-aware outreach.",
    detail:
      "Relationship-health scoring, AI message generation grounded in prior context, realtime cross-device sync and offline support via progressive web app architecture.",
    stack: ["React 19", "Supabase", "Tailwind", "Framer Motion"],
    category: "Full-Stack & Platform",
    repo: "https://github.com/aaron-seq/SocialSync-Calendar-Relationship-Manager-Bot",
  },
  {
    name: "Woods Document Search",
    blurb: "Search across 3,000+ internal engineering documents.",
    detail:
      "Proof of concept for keyword and semantic search over an internal document estate, with AI categorisation and summarisation on the roadmap.",
    stack: ["Python", "Vector search", "FastAPI"],
    category: "AI & Retrieval",
    repo: "https://github.com/aaron-seq/woods-document-search-engine",
  },
  {
    name: "ML Voice Lead Analysis",
    blurb: "Turns sales cold calls into qualified-lead signals.",
    detail:
      "End-to-end pipeline that transcribes and analyses sales calls to extract actionable buyer insights, identify qualified leads and visualise key metrics on a dashboard.",
    stack: ["Python", "Speech-to-text", "scikit-learn"],
    category: "AI & Retrieval",
    repo: "https://github.com/aaron-seq/ML-voice-lead-analysis",
  },
  {
    name: "CareerAgent",
    blurb: "Agentic assistant for job-search workflows.",
    detail:
      "An LLM agent that automates research, tailoring and tracking across a job search pipeline.",
    stack: ["Python", "LLM agents"],
    category: "AI & Retrieval",
    repo: "https://github.com/aaron-seq/CareerAgent",
  },
  {
    name: "Banking FAQ Chatbot",
    blurb: "Compliance-minded conversational assistant for retail banking.",
    detail:
      "A guarded FAQ assistant built for a banking context, with the retrieval and response boundaries that a regulated domain demands.",
    stack: ["TypeScript", "LLM", "Next.js"],
    category: "Full-Stack & Platform",
    repo: "https://github.com/aaron-seq/HPGB-Banking-Chatbot",
    live: "https://hpgb-banking-chatbot.vercel.app",
  },
  {
    name: "SAR Oil-Spill Detection",
    blurb: "Detects oil spills in Synthetic Aperture Radar imagery.",
    detail:
      "Image-processing pipeline for monitoring and mitigating the environmental impact of oil spills on water bodies from satellite SAR data.",
    stack: ["MATLAB", "Image processing"],
    category: "Computer Vision & ML",
    repo: "https://github.com/aaron-seq/SAR-MATLAB-Oil-spill-dectection",
  },
  {
    name: "Fraud Detection System",
    blurb: "Credit-card fraud classification on heavily imbalanced data.",
    detail:
      "Machine learning pipeline covering resampling strategy, model selection and threshold tuning for a rare-event classification problem.",
    stack: ["Python", "scikit-learn", "Jupyter"],
    category: "Computer Vision & ML",
    repo: "https://github.com/aaron-seq/advanced-fraud-detection-system",
  },
  {
    name: "BP Prediction Tool",
    blurb: "Arterial blood pressure from PPG and ECG waveforms.",
    detail:
      "An LSTM model that predicts arterial blood pressure from photoplethysmography and electrocardiogram signals, with the signal-processing pipeline included.",
    stack: ["TensorFlow", "LSTM", "Signal processing"],
    category: "Computer Vision & ML",
    repo: "https://github.com/aaron-seq/BP-prediction-tool",
  },
  {
    name: "Heart Disease Prediction",
    blurb: "Neural-network classifier with a full modelling walkthrough.",
    detail:
      "A documented notebook covering data preparation, architecture choices and evaluation for heart-disease risk prediction.",
    stack: ["Python", "Keras", "Jupyter"],
    category: "Computer Vision & ML",
    repo: "https://github.com/aaron-seq/heart-diseases-prediction-tool",
  },
  {
    name: "Chatbot Flow Builder",
    blurb: "Visual node-based editor for conversational flows.",
    detail:
      "Drag-and-drop flow authoring with node connections, validation and persistence.",
    stack: ["JavaScript", "React Flow"],
    category: "Full-Stack & Platform",
    repo: "https://github.com/aaron-seq/chatbot-flow-builder",
    live: "https://chatbot-flow-builder-red-kappa.vercel.app",
  },
  {
    name: "PDF Data Extractor",
    blurb: "Pulls structured records out of unstructured PDFs.",
    detail:
      "Python parsing and regex extraction behind a React interface for reviewing and correcting extracted fields.",
    stack: ["Python", "React", "Regex"],
    category: "Full-Stack & Platform",
    repo: "https://github.com/aaron-seq/PDF-data-extractor-pyRE-react-tool",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C#", "C++", "Java", "MATLAB", "SQL", "Bash"],
  },
  {
    group: "AI & Machine Learning",
    items: [
      "LangChain",
      "LlamaIndex",
      "OpenAI / Azure OpenAI",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "YOLOv8",
      "OpenCV",
      "sentence-transformers",
      "RAG pipelines",
    ],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Django", "Flask", "Node.js", "Express", "ASP.NET Core", "Frappe", "Celery", "WebSockets"],
  },
  {
    group: "Frontend",
    items: ["React 19", "Next.js", "Redux", "TanStack Query", "Zustand", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "Data & Vector Stores",
    items: ["PostgreSQL", "pgvector", "Qdrant", "ChromaDB", "MongoDB", "Redis", "InfluxDB", "Supabase", "MySQL"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Vercel", "Railway", "Power Platform"],
  },
  {
    group: "Testing",
    items: ["Playwright", "Pytest", "Vitest"],
  },
];

export const impact = [
  { metric: "97%", label: "less document processing time", where: "Wood Engineering · AI extraction bots" },
  { metric: "75%", label: "less manual data entry", where: "Baker Hughes · LLM document pipeline" },
  { metric: "70%", label: "less service downtime", where: "Baker Hughes · Technical Service Portal" },
  { metric: "65%", label: "faster document retrieval", where: "Wood Engineering · RAG search" },
  { metric: "40%", label: "faster compliance turnaround", where: "Baker Hughes · Power Platform" },
  { metric: "11%", label: "fewer false security alerts", where: "Mannai · containerised CV models" },
  { metric: "1,100+", label: "cameras under AI monitoring", where: "Mannai · Border Information System" },
  { metric: "<100ms", label: "vector similarity search", where: "Smarter.Codes · pgvector matching" },
];

export const awards = [
  { title: "1st place", event: "LearnIT Hackathon", work: "GenAI Browser Tool", year: "2024" },
  { title: "3rd place", event: "University Hackathon 8.0", work: "AI Traffic Management", year: "2023" },
  { title: "Best prototype", event: "ACM Mini Hacks 2.0", work: "NexusHome smart-home energy", year: "2023" },
  { title: "Merit scholarship", event: "SPDC — Qatar Govt & Indian Embassy", work: "Academic excellence", year: "2021–2025" },
  { title: "Technical operations lead", event: "GDSC & ACM", work: "Community & events leadership", year: "2022–2024" },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "impact", label: "Impact" },
  { id: "contact", label: "Contact" },
];
