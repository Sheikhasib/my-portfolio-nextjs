"use client";
import { useInView } from "@/hooks/useInView";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
};

export default function AnimateIn({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const { ref, inView } = useInView(0.05);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
