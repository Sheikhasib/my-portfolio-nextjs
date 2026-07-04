"use client";
import { ExternalLink, Github } from "lucide-react";
import { useToast } from "@/components/Toast";

type Props = {
  href: string | null;
  label: string;
  icon: "external" | "github";
  variant: "primary" | "outline";
  comingSoonMessage: string;
};

export default function ProjectLinkButton({ href, label, icon, variant, comingSoonMessage }: Props) {
  const { show } = useToast();
  const className = variant === "primary" ? "bp-btn-primary" : "bp-btn-outline";
  const Icon = icon === "external" ? ExternalLink : Github;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {icon === "github" && <Icon size={14} />}
        {label}
        {icon === "external" && <Icon size={13} />}
      </a>
    );
  }

  return (
    <button onClick={() => show(comingSoonMessage)} className={`${className} opacity-60 cursor-pointer`}>
      {icon === "github" && <Icon size={14} />}
      {label}
      {icon === "external" && <Icon size={13} />}
    </button>
  );
}
