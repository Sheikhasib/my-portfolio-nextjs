import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0E1A2B",
        bgalt: "#0F2032",
        card: "#14273D",
        line: "#24425F",
        linesoft: "#1B3350",
        cyan: "#6FD3F7",
        cyandim: "#4B9DBD",
        amber: "#F2A93B",
        ink: "#EAF2F8",
        muted: "#93AAC2",
        muted2: "#C3D2E0",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "bp-grid":
          "linear-gradient(#1B3350 1px, transparent 1px), linear-gradient(90deg, #1B3350 1px, transparent 1px)",
      },
      backgroundSize: {
        "bp-grid": "44px 44px",
      },
    },
  },
  plugins: [],
};
export default config;
