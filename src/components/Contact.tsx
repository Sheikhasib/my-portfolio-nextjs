import { Mail, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5 border-t border-linesoft">
      <div className="max-w-[1120px] mx-auto">
        <SectionHeading table="contact" title="Get In Touch" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="mailto:sheikhhasib037@gmail.com" className="bp-card p-[22px] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded bg-cyan/10 flex items-center justify-center shrink-0">
              <Mail size={18} className="text-cyan" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted mb-1">email</div>
              <div className="text-base text-ink break-all">sheikhhasib037@gmail.com</div>
            </div>
          </a>

          <a href="tel:+8801758999260" className="bp-card p-[22px] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded bg-cyan/10 flex items-center justify-center shrink-0">
              <Phone size={18} className="text-cyan" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted mb-1">phone</div>
              <div className="text-base text-ink">+880 1758-999260</div>
            </div>
          </a>

          <a href="https://wa.me/8801758999260" target="_blank" rel="noreferrer" className="bp-card p-[22px] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded bg-[#7CE0A6]/10 flex items-center justify-center shrink-0">
              <MessageCircle size={18} className="text-[#7CE0A6]" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted mb-1">whatsapp</div>
              <div className="text-base text-ink">+880 1758-999260</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
