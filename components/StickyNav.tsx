"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#impact", label: "دستاوردها" },
  { href: "#architecture", label: "معماری" },
  { href: "#how-i-think", label: "چگونه فکر می‌کنم" },
  { href: "#skills", label: "مهارت‌ها" },
  { href: "#available-for", label: "آماده برای" },
  { href: "#trust", label: "اعتماد" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#about", label: "درباره" },
];

export function StickyNav({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 mx-auto max-w-4xl px-4 py-3 sm:px-6 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-foreground/10" : ""
      }`}
    >
      <nav className="flex items-center justify-between" aria-label="ناوبری اصلی">
        <a href="#" className="text-sm font-semibold text-foreground hover:text-foreground/80">
          {name}
        </a>
        <ul className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-2 py-1.5 text-xs sm:text-sm text-foreground/70 hover:text-foreground rounded-lg hover:bg-foreground/5 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
