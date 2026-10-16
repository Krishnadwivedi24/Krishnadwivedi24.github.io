import { profile } from "@/data/profile";

export default function CurrentFocus() {
  return (
    <section
      id="focus"
      aria-label="Current Focus"
      className="py-20 sm:py-24 border-b border-[var(--border-color)]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-4">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-3">
              Current Focus
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
              {profile.currentFocus.heading}
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
              {profile.currentFocus.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
