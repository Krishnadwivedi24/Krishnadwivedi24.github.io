import { profile } from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-20 sm:py-28 border-b border-[var(--border-color)]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Section label / Column 1 */}
          <div className="md:col-span-4">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
              {profile.about.heading}
            </h2>
          </div>

          {/* Content / Column 2 */}
          <div className="md:col-span-8 flex flex-col gap-6">
            {profile.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
