"use client";

import { Mail, Phone, MessageCircle, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { useToast } from "./Toast";
import { useInView } from "@/hooks/useInView";

function ContactCard({ icon: Icon, label, value, href, color, delay }: {
  icon: React.ElementType; label: string; value: string; href: string; color: string; delay: number;
}) {
  const { ref, inView } = useInView<HTMLAnchorElement>(0.1);

  return (
    <a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`bp-card p-[22px] flex items-center gap-3.5 hover:border-cyandim hover:-translate-y-0.5 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0`}
        style={{ backgroundColor: `${color}15`, color }}>
        <Icon size={18} />
      </div>
      <div>
        <div className="font-mono text-xs text-muted mb-1">{label}</div>
        <div className="text-base text-ink break-all">{value}</div>
      </div>
      </a>
    );
  }

export default function Contact() {
  const { show } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const { ref: formRef, inView: formInView } = useInView<HTMLFormElement>(0.1);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        show("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        show(data.error || "Something went wrong");
      }
    } catch {
      show("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative py-20 px-5 border-t border-linesoft overflow-hidden">
      <div className="absolute inset-0 bg-gradient-amber pointer-events-none" />
      <div className="max-w-[1120px] mx-auto relative">
        <SectionHeading table="contact" title="Get In Touch" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <ContactCard icon={Mail} label="email" value="sheikhhasib037@gmail.com" href="mailto:sheikhhasib037@gmail.com" color="#6FD3F7" delay={0.1} />
          <ContactCard icon={Phone} label="phone" value="+880 1758-999260" href="tel:+8801758999260" color="#6FD3F7" delay={0.2} />
          <ContactCard icon={MessageCircle} label="whatsapp" value="+880 1758-999260" href="https://wa.me/8801758999260" color="#7CE0A6" delay={0.3} />
        </div>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className={`bp-card p-6 max-w-[640px] mx-auto transition-all duration-700 ${formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-mono text-xs text-muted mb-1.5 block">name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full bg-bg border border-line rounded-sm px-3 py-2.5 text-sm text-ink outline-none focus:border-cyan focus:shadow-[0_0_16px_-8px_#6FD3F7] transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted mb-1.5 block">email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full bg-bg border border-line rounded-sm px-3 py-2.5 text-sm text-ink outline-none focus:border-cyan focus:shadow-[0_0_16px_-8px_#6FD3F7] transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="font-mono text-xs text-muted mb-1.5 block">message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full bg-bg border border-line rounded-sm px-3 py-2.5 text-sm text-ink outline-none focus:border-cyan focus:shadow-[0_0_16px_-8px_#6FD3F7] transition-all resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="bp-btn-primary w-full justify-center"
          >
            {sending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
