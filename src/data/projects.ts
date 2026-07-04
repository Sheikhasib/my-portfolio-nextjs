import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "fiacre-terra",
    name: "Fiacre Terra",
    tagline: "Motorcycle showcase & marketplace",
    status: "live",
    image: "/images/projects/fiacre-terra.jpg",
    stack: ["React", "React Bootstrap", "Firebase Auth", "Node.js", "Express.js", "MongoDB"],
    description:
      "A responsive motorcycle information and marketplace platform where visitors can browse motorcycle types — street, off-road, and dual-purpose — view specs, and submit inquiries. Firebase handles authentication and hosting, while a Node/Express + MongoDB API serves listing data.",
    challenges:
      "Coordinating Firebase Authentication alongside a separate Express/MongoDB backend so protected routes and user sessions stayed consistent across both layers.",
    improvements:
      "Migrate the backend to TypeScript with PostgreSQL and Prisma, rebuild the UI in Tailwind for a more custom design system, and add a real booking/checkout flow.",
    live: "https://bike-world-4aa7f.web.app/",
    github: "https://github.com/Sheikhasib/bike-world-client-side-website",
  },
  {
    id: "world-tour",
    name: "WorldTour",
    tagline: "Travel & tourism discovery platform",
    status: "live",
    image: "/images/projects/world-tour.jpg",
    stack: ["React", "React Bootstrap", "Firebase Auth", "Axios", "React Router"],
    description:
      "A travel and tourism discovery platform showcasing destinations, tour packages, and travel guides, with Firebase-authenticated user accounts and a fully responsive Bootstrap-based UI.",
    challenges:
      "Managing asynchronous data fetching and loading states cleanly across many destination pages using React Router v5.",
    improvements:
      "Add a real booking and payment backend, migrate the frontend to Next.js for SSR/SEO benefits, and introduce a custom design system in place of Bootstrap.",
    live: "https://world-tour-web.web.app/",
    github: "https://github.com/Sheikhasib/world-tour-client-side-website",
  },
  {
    id: "infant-endeavor",
    name: "Infant Endeavor",
    tagline: "Childcare & daycare service website",
    status: "live",
    image: "/images/projects/infant-endeavor.jpg",
    stack: ["React", "React Bootstrap", "Firebase Auth", "React Router"],
    description:
      "A childcare and daycare service website with parent-facing information pages and Firebase email/password plus social authentication for account creation and login.",
    challenges:
      "Building a smooth, validated multi-step authentication flow — sign up, login, and protected routes — using Firebase Auth guarded by React Router.",
    improvements:
      "Add a parent dashboard for enrollment status and replace client-only Firebase data with a real Node/Express + PostgreSQL backend.",
    live: "https://infant-endeavor.netlify.app/",
    github: "https://github.com/Sheikhasib/kids-care-auth-website",
  },
  {
    id: "healthcare-platform",
    name: "Healthcare Platform",
    tagline: "Role-based appointments & payments",
    status: "in-progress",
    image: null,
    stack: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Stripe"],
    description:
      "A full-stack healthcare platform with role-based dashboards for Admin, Doctor, and Patient, appointment scheduling, and Stripe-powered payments with automated invoice emails.",
    challenges:
      "Designing a refresh-token authentication strategy that stays secure across three distinct roles with different permission levels.",
    improvements:
      "Finish the analytics dashboard, add prescription PDF generation, and containerize the stack with Docker Compose for deployment.",
    live: null,
    github: null,
  },
  {
    id: "ai-blog-platform",
    name: "AI Blog Platform",
    tagline: "Semantic search & RAG-based Q&A",
    status: "in-progress",
    image: null,
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "pgvector", "LangChain"],
    description:
      "An AI-powered blog platform with semantic search and Retrieval-Augmented Generation for article Q&A, built with pgvector for embeddings and LangChain for orchestration.",
    challenges:
      "Tuning retrieval relevance so RAG answers stay grounded in the actual article content instead of hallucinating.",
    improvements:
      "Add cursor-based pagination polish, Google OAuth, and server-side rendering with ISR revalidation for published posts.",
    live: null,
    github: null,
  },
];
