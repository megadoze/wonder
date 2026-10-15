"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/content";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 780) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("resize", closeOnDesktop);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
  return (
    <header
      id="top"
      className="pointer-events-none absolute top-0 left-0 z-30 grid h-[76px] w-full grid-cols-[32%_1fr] items-center px-[4.5%] max-md:flex max-md:h-[68px] max-md:justify-between max-md:px-5 md:max-lg:grid-cols-[28%_1fr] md:max-lg:px-[3%]"
    >
      <div className="pointer-events-auto flex min-w-0 items-center gap-5 max-md:gap-3 md:max-lg:gap-3">
        <a
          href="#top"
          aria-label="WONDER home"
          className="shrink-0 text-[30px] font-[520] tracking-[-.045em] max-md:text-[27px]"
        >
          WONDER
        </a>

        <span className="pt-0.5 shrink-0 text-[9px] leading-[1.45] tracking-[.14em] text-[#676963] md:max-lg:text-[7px] md:max-lg:tracking-[.08em] max-md:text-[7px] max-md:tracking-[.08em]">
          CONTEMPORARY
          <br />
          INTERIOR DESIGN STUDIO
        </span>
      </div>

      <nav
        id="primary-nav"
        aria-label="Main navigation"
        className={`${menuOpen ? "max-md:flex w-full" : "max-md:hidden"} pointer-events-auto flex items-center justify-self-end gap-[34px] text-xs md:max-lg:gap-5 max-md:absolute max-md:top-[68px] max-md:right-0 max-md:left-0 max-md:flex-col max-md:items-stretch max-md:gap-0 max-md:border-t max-md:border-[#c6c4bc] max-md:bg-paper max-md:px-5 max-md:pt-6 max-md:pb-7 lg:text-white`}
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="group relative py-2 max-md:border-b max-md:border-[#d0cec7] max-md:py-3.5"
          >
            <span>{item.label}</span>
            <span
              aria-hidden="true"
              className="absolute bottom-1 left-0 h-px w-0 bg-current transition-[width] duration-300 group-hover:w-full max-md:hidden"
            />
          </a>
        ))}
        {/* <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-[135px] items-center justify-between gap-5 rounded-full border border-white px-[22px] py-[13px] transition-colors hover:border-forest hover:bg-forest hover:text-white max-md:mt-4 max-md:px-[18px]"
        >
          Start a project <span>↗</span>
        </a> */}
      </nav>
      <button
        type="button"
        aria-controls="primary-nav"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((current) => !current)}
        className="pointer-events-auto hidden h-[42px] w-[42px] flex-col justify-center gap-[6px] border-0 bg-transparent max-md:flex"
      >
        <span className="h-px w-[28px] bg-ink" />
        <span className="h-px w-[28px] bg-ink" />
      </button>
    </header>
  );
}
