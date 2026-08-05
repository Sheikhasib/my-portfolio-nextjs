export type Project = {
  id: string;
  name: string;
  tagline: string;
  status: "live" | "in-progress";
  image: string | null;
  stack: string[];
  description: string;
  highlights: string[];
  challenges: string;
  improvements: string;
  live: string | null;
  github: string | null;
};
