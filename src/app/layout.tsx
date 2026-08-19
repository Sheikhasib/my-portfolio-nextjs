import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Hasib | Full Stack Developer",
    template: "%s | Hasib Uzzaman",
  },
  description:
    "Portfolio of Sheikh Hasib Uzzaman, a Full Stack Developer working with TypeScript, Next.js, Node.js, PostgreSQL, Prisma, and AI/RAG integrations.",
  applicationName: "Hasib Uzzaman",
  authors: [{ name: "Sheikh Hasib Uzzaman", url: "https://github.com/Sheikhasib" }],
  creator: "Sheikh Hasib Uzzaman",
  keywords: [
    "Sheikh Hasib Uzzaman",
    "Hasib Uzzaman",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "AI",
    "RAG",
  ],
  openGraph: {
    title: "Hasib | Full Stack Developer",
    description:
      "Full Stack Developer working with TypeScript, Next.js, Node.js, PostgreSQL, Prisma, and AI/RAG integrations.",
    type: "website",
    siteName: "Sheikh Hasib Uzzaman",
  },
  twitter: {
    card: "summary",
    title: "Hasib | Full Stack Developer",
    description:
      "Full Stack Developer working with TypeScript, Next.js, Node.js, PostgreSQL, Prisma, and AI/RAG integrations.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <div className="grain-overlay" aria-hidden />
        <div className="aura-fixed" aria-hidden />
        {children}
      </body>
    </html>
  );
}
