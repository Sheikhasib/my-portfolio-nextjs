"use client";
import { useInView } from "@/hooks/useInView";

export default function SectionHeading({ table, title }: { table: string; title: string }) {
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref} className="mb-9">
      <div className={`bp-eyebrow mb-2.5 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-2"}`}
        style={{ transitionDelay: "0.05s" }}>
        table: {table}
      </div>
      <h2 className={`font-display font-semibold text-[clamp(28px,4vw,38px)] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        style={{ transitionDelay: "0.12s" }}>
        {title}
      </h2>
    </div>
  );
}
