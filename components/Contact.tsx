import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  const { heading, text, email, github, linkedin } = profile.contact;

  const contactLinks = [
    email ? { label: "Email", href: `mailto:${email}`, isExternal: false } : null,
    github ? { label: "GitHub", href: github, isExternal: true } : null,
    linkedin ? { label: "LinkedIn", href: linkedin, isExternal: true } : null,
  ].filter(Boolean) as { label: string; href: string; isExternal: boolean }[];

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-20 sm:py-28 border-b border-[var(--border-color)]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[var(--text-primary)] mb-6">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed mb-10">
            {text}
          </p>

          {/* Minimal text links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group inline-flex items-center gap-1.5 text-base sm:text-lg font-medium text-[var(--text-primary)] hover:opacity-70 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--text-primary)]"
              >
                <span>{link.label}</span>
                <ArrowUpRight
                  className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
