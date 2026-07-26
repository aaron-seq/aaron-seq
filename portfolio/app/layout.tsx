import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Aaron Sequeira — AI / Full-Stack Engineer",
  description:
    "AI and full-stack engineer building RAG systems, computer vision pipelines and production ML. Experience across Wood Engineering, Mannai Corporation, Baker Hughes and Smarter.Codes.",
  keywords: [
    "Aaron Sequeira",
    "AI Engineer",
    "Full Stack Developer",
    "RAG",
    "LangChain",
    "Computer Vision",
    "FastAPI",
    "Next.js",
    "Qatar",
  ],
  authors: [{ name: profile.name, url: profile.links.github }],
  openGraph: {
    title: "Aaron Sequeira — AI / Full-Stack Engineer",
    description:
      "RAG systems, computer vision at fleet scale, and LLM products built under compliance constraints.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Sequeira — AI / Full-Stack Engineer",
    description:
      "RAG systems, computer vision at fleet scale, and LLM products built under compliance constraints.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%2305060a'/%3E%3Ctext x='50' y='68' font-family='Inter,sans-serif' font-size='54' font-weight='700' text-anchor='middle' fill='%234cc9f0'%3EA%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
