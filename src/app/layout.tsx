import type { Metadata } from "next";
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
  title: "Sheikh Hasib Uzzaman — Full Stack Developer",
  description:
    "Portfolio of Sheikh Hasib Uzzaman, a Full Stack Developer working with TypeScript, Next.js, Node.js, PostgreSQL, Prisma, and AI/RAG integrations.",
  openGraph: {
    title: "Sheikh Hasib Uzzaman — Full Stack Developer",
    description:
      "Full Stack Developer working with TypeScript, Next.js, Node.js, PostgreSQL, Prisma, and AI/RAG integrations.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
