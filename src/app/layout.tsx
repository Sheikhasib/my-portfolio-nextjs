import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sheikh Hasib Uzzaman — Full Stack Developer",
  description:
    "Portfolio of Sheikh Hasib Uzzaman, a Full Stack Developer working with TypeScript, Next.js, Node.js, PostgreSQL, Prisma, and AI/RAG integrations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
