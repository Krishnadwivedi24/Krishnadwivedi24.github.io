import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="pt-24 pb-20 sm:pt-32 sm:pb-28 border-b border-[var(--border-color)]"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Subtitle / Role Badge */}
        <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-6">
          {profile.role}
        </p>

        {/* Large Name Typography */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight uppercase text-[var(--text-primary)] mb-8">
          {profile.name}
        </h1>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[var(--text-primary)] max-w-3xl mb-8 leading-snug">
          &ldquo;{profile.headline}&rdquo;
        </h2>

        {/* Introduction */}
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed mb-12">
          {profile.intro}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-[var(--button-bg)] text-[var(--button-text)] hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--text-primary)]"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--hover-bg)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--text-primary)]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
