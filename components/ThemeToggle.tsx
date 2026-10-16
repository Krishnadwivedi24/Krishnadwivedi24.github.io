"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    } catch {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignore if localStorage is restricted
    }

    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.style.colorScheme = "dark";
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? theme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle theme"
      }
      title={
        mounted
          ? theme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle theme"
      }
      className="p-2 border border-[var(--border-color)] hover:bg-[var(--hover-bg)] text-[var(--text-primary)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--text-primary)] cursor-pointer inline-flex items-center justify-center"
    >
      {!mounted ? (
        <span className="w-4 h-4 block" aria-hidden="true" />
      ) : theme === "dark" ? (
        <Sun className="w-4 h-4 text-[var(--text-primary)]" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--text-primary)]" aria-hidden="true" />
      )}
    </button>
  );
}
