import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A1628",
        bgalt: "#0D1E36",
        card: "#11243E",
        line: "#1E3A5F",
        linesoft: "#162D4A",
        cyan: "#6FD3F7",
        cyandim: "#4B9DBD",
        amber: "#F2A93B",
        ink: "#EAF2F8",
        muted: "#7A95B3",
        muted2: "#B0C8DE",
        rose: "#FF6B6B",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
      },
      backgroundImage: {
        "bp-grid":
          "linear-gradient(#1B3350 1px, transparent 1px), linear-gradient(90deg, #1B3350 1px, transparent 1px)",
        "bp-grid-dense":
          "linear-gradient(#1B3350 1px, transparent 1px), linear-gradient(90deg, #1B3350 1px, transparent 1px)",
        "gradient-cyan":
          "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(111,211,247,0.12) 0%, transparent 100%)",
        "gradient-amber":
          "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(242,169,59,0.08) 0%, transparent 100%)",
      },
      backgroundSize: {
        "bp-grid": "44px 44px",
        "bp-grid-dense": "22px 22px",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "toast-in": {
          from: { opacity: "0", transform: "translateY(12px) scale(0.96)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "toast-out": {
          from: { opacity: "1", transform: "translateY(0) scale(1)" },
          to: { opacity: "0", transform: "translateY(-8px) scale(0.96)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-4%, -4%)" },
          "50%": { transform: "translate(2%, 3%)" },
          "75%": { transform: "translate(-3%, 1%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.6s ease both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "toast-in": "toast-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both",
        "toast-out": "toast-out 0.25s ease both",
        shimmer: "shimmer 1.5s infinite",
        "grain-shift": "grain-shift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
