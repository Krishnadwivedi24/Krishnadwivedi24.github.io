import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 sm:py-16 bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs sm:text-sm">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-[var(--text-primary)]">
            {profile.name}
          </p>
          <p className="text-[var(--text-secondary)]">
            {profile.degree}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-[var(--text-secondary)]">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <span className="hidden sm:inline text-[var(--border-color)]">|</span>
          <p>{profile.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
