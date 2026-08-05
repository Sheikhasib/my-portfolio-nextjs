import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "gearup-rental",
    name: "GearUp Rental",
    tagline: "Sports & outdoor gear rental marketplace",
    status: "live",
    image: "/images/projects/gearup-rental.svg",
    stack: ["Next.js 16", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zustand", "React Hook Form", "Zod", "SSLCommerz", "Cloudinary", "Framer Motion"],
    description:
      "A three-sided rental marketplace where customers browse, book, and pay for sports and outdoor equipment by the day, providers list and fulfil their own inventory, and admins moderate the platform. Cookie-based JWT authentication with route guarding handled in Next.js middleware, SSLCommerz payment redirects, and role-scoped dashboards for customers, providers, and admins.",
    highlights: [
      "Full rental order lifecycle — place, confirm, cancel, return, and review — with SSLCommerz payment integration.",
      "Provider inventory management with Cloudinary image uploads and role-based dashboards for Customer, Provider, and Admin.",
      "Type-safe forms with React Hook Form + Zod, TanStack Query, Zustand, shadcn/ui, and Framer Motion.",
    ],
    challenges:
      "Architecting one application around three role-based experiences — customer, provider, and admin — while keeping authentication, route guarding, and data isolation consistent across every layer.",
    improvements:
      "Add real-time order tracking notifications, expand payment providers beyond SSLCommerz, and introduce a server-side analytics module for admin insight.",
    live: "https://gear-up-frontend-hasib.vercel.app",
    github: "https://github.com/Sheikhasib/GearUp-Frontend",
  },
  {
    id: "presswire",
    name: "PressWire",
    tagline: "Premium news & publishing platform",
    status: "live",
    image: "/images/projects/presswire.svg",
    stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "shadcn/ui", "Radix UI", "lucide-react", "next-themes", "jsonwebtoken"],
    description:
      "A full-featured press platform where readers browse and search published stories by tag, authors publish and manage their own content, and admins moderate the publication. Premium subscriber-only articles behind a payment flow, and three role-based dashboards — USER, AUTHOR, and ADMIN — secured with httpOnly-cookie JWT sessions and server-side route protection.",
    highlights: [
      "Stripe-powered premium subscription flow with secure webhook-based access control.",
      "Role-based dashboards — Admin, Author, and Reader — for content management, moderation, and analytics.",
      "Nested comment system, full-text search, and a scalable multi-file Prisma schema architecture.",
    ],
    challenges:
      "Designing a clean role-based dashboard architecture with httpOnly cookie sessions and consistent server-side route guarding across public, auth, and dashboard route groups.",
    improvements:
      "Add a dedicated search index, an editorial workflow with drafts and review, and RSS/email digests for subscribers.",
    live: "https://prisma-press-frontent.vercel.app",
    github: null,
  },
  {
    id: "xai-intelligence-workspace",
    name: "Xai Intelligence Workspace",
    tagline: "Interactive data-to-intelligence product experience",
    status: "live",
    image: "/images/projects/xai-intelligence-workspace.svg",
    stack: ["Next.js 15", "Three.js", "React Three Fiber", "GSAP", "Framer Motion", "Tailwind CSS"],
    description:
      "A single-page interactive product experience that visualises how raw data becomes structured intelligence. A scroll-driven narrative transforms scattered particle fields into an ordered lattice across four sections — hero morph, insight flow, dashboard preview, and a signature 14×14 grid interaction — unifying Three.js geometry, GSAP scroll choreography, and Framer Motion micro-interactions.",
    highlights: [
      "800 R3F particles morph from chaotic scatter to a flat grid as you scroll, with connector lines appearing between neighbours past 50% structure.",
      "A GSAP-pinned Insight Flow interpolates 48 particles through scattered, clustered, and gridded states over 300% of scroll.",
      "A signature 14×14 grid of glowing boxes extrudes upward in a wave, with mouse influence pushing nearby nodes.",
    ],
    challenges:
      "Orchestrating three animation tools around one shared scroll narrative so particles, SVG morphs, and 3D geometry stay perfectly synchronised without visual drift.",
    improvements:
      "Add WebGL performance profiling, expand into multi-page product documentation, and ship a production landing build with analytics.",
    live: "https://xai-intelligence-workspace-hasib.vercel.app",
    github: null,
  },
  {
    id: "fiacre-terra",
    name: "Fiacre Terra",
    tagline: "Motorcycle showcase & marketplace",
    status: "live",
    image: "/images/projects/fiacre-terra.jpg",
    stack: ["React", "React Bootstrap", "Firebase Auth", "Node.js", "Express.js", "MongoDB"],
    description:
      "A responsive motorcycle information and marketplace platform where visitors can browse motorcycle types — street, off-road, and dual-purpose — view specs, and submit inquiries. Firebase handles authentication and hosting, while a Node/Express + MongoDB API serves listing data.",
    highlights: [
      "Browse motorcycle categories with detailed specs and submit inquiries through a contact flow.",
      "Firebase Authentication for protected routes, with a Node.js/Express + MongoDB API serving listing data.",
      "Fully responsive interface built with React and React Bootstrap.",
    ],
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
    highlights: [
      "Showcase destinations, tour packages, and travel guides with rich media presentation.",
      "Firebase-authenticated user accounts with protected routes.",
      "Asynchronous data fetching and loading states managed cleanly with Axios and React Router v5.",
    ],
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
    highlights: [
      "Parent-facing information pages for a childcare and daycare service.",
      "Firebase email/password plus social authentication for account creation and login.",
      "Smooth, validated multi-step auth flow — sign up, login, and protected routes — guarded by React Router.",
    ],
    challenges:
      "Building a smooth, validated multi-step authentication flow — sign up, login, and protected routes — using Firebase Auth guarded by React Router.",
    improvements:
      "Add a parent dashboard for enrollment status and replace client-only Firebase data with a real Node/Express + PostgreSQL backend.",
    live: "https://infant-endeavor.netlify.app/",
    github: "https://github.com/Sheikhasib/kids-care-auth-website",
  },
];
