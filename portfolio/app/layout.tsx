import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Aaron Sequeira — Full-Stack AI Engineer",
  description:
    "Full-Stack AI Engineer specialising in enterprise AI platforms, intelligent document automation and scalable architecture. Experience across Smarter.Codes, Wood Engineering Qatar, Mannai Corporation and Baker Hughes.",
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
    title: "Aaron Sequeira — Full-Stack AI Engineer",
    description:
      "Enterprise AI platforms, RAG and graph retrieval, intelligent document automation at production scale.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Sequeira — Full-Stack AI Engineer",
    description:
      "Enterprise AI platforms, RAG and graph retrieval, intelligent document automation at production scale.",
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
