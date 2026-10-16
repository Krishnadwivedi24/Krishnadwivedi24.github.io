import { profile } from "@/data/profile";

export default function Learning() {
  return (
    <section
      id="learning"
      aria-label="What I'm Learning"
      className="py-20 sm:py-28 border-b border-[var(--border-color)]"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-3">
            Focus Areas
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
            What I&apos;m learning.
          </h2>
        </div>

        {/* 2-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
          {profile.learning.map((item) => (
            <div
              key={item.number}
              className="bg-[var(--bg-primary)] p-8 sm:p-10 flex flex-col justify-between transition-colors duration-150 hover:bg-[var(--hover-bg)]"
            >
              <div>
                <span className="font-mono text-xs sm:text-sm text-[var(--text-secondary)] tracking-wider block mb-6">
                  {item.number}
                </span>
                <h3 className="text-lg sm:text-xl font-medium text-[var(--text-primary)] mb-4">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
