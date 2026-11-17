"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Header");

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const scrollLockRef = useRef<{
    html: string;
    body: string;
  } | null>(null);

  // DESKTOP — only primary destinations
  const desktopNavigation = [
    { href: "#studio", label: t("studio") },
    { href: "#selected-work", label: t("selectedWork") },
    { href: "#service-details", label: t("services") },
    { href: "#pricing", label: t("pricing") },
    { href: "#contact", label: t("contact") },
  ];

  // MOBILE — all sections in page order
  const mobileNavigation = [
    { href: "#studio", label: t("studio") },
    { href: "#work", label: t("studies") },
    { href: "#selected-work", label: t("selectedWork") },
    { href: "#materials", label: t("materials") },
    { href: "#approach", label: t("approach") },
    { href: "#philosophy", label: t("philosophy") },
    { href: "#service-details", label: t("services") },
    { href: "#pricing", label: t("pricing") },
    { href: "#contact", label: t("contact") },
  ];

  const unlockScroll = useCallback(() => {
    const previous = scrollLockRef.current;

    if (!previous) return;

    document.documentElement.style.overflow = previous.html;
    document.body.style.overflow = previous.body;

    scrollLockRef.current = null;
  }, []);

  const closeMenu = useCallback(() => {
    unlockScroll();
    setMenuOpen(false);
  }, [unlockScroll]);

  // Match the project's Tailwind md breakpoint: 781px.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 781) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu]);

  // Lock background scrolling and manage keyboard navigation.
  useEffect(() => {
    if (!menuOpen) return;

    scrollLockRef.current = {
      html: document.documentElement.style.overflow,
      body: document.body.style.overflow,
    };

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    firstLinkRef.current?.focus({ preventScroll: true });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();

        menuButtonRef.current?.focus({
          preventScroll: true,
        });

        return;
      }

      if (event.key !== "Tab") return;

      const focusable = Array.from(
        document.querySelectorAll<HTMLElement>(
          "#top a[href], #top button:not([disabled])",
        ),
      ).filter(
        (element) =>
          element.getClientRects().length > 0 && !element.closest("[inert]"),
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      unlockScroll();
    };
  }, [menuOpen, closeMenu, unlockScroll]);

  return (
    <header
      id="top"
      className={`
        pointer-events-none
        absolute top-0 left-0 z-30
        grid h-[76px] w-full
        grid-cols-[32%_1fr]
        items-center
        px-[4.5%]
        md:max-lg:grid-cols-[28%_1fr]
        md:max-lg:px-[3%]
        max-md:flex
        max-md:h-[68px]
        max-md:justify-between
        max-md:px-5
        ${menuOpen ? "max-md:fixed max-md:z-50" : ""}
      `}
    >
      {/* BRAND — unchanged */}
      <div className="pointer-events-auto relative z-10 flex min-w-0 items-center gap-5 max-md:gap-3 md:max-lg:gap-3">
        <a
          href="#top"
          aria-label={t("home")}
          onClick={closeMenu}
          className="block shrink-0"
        >
          <Image
            src="/images/wonder-wordmark.svg"
            alt=""
            width={1510}
            height={246}
            unoptimized
            priority
            className="block h-auto w-[126px] sm:w-[142px] md:w-[122px] lg:w-[164px] xl:w-[176px]"
          />
        </a>

        <span className="shrink-0 pt-0.5 text-[9px] leading-[1.45] tracking-[.14em] text-[#676963] max-md:text-[7px] max-md:tracking-[.08em] md:max-lg:text-[7px] md:max-lg:tracking-[.08em]">
          {t("taglineTop")}
          <br />
          {t("taglineBottom")}
        </span>
      </div>

      {/* DESKTOP NAVIGATION — 5 MAIN LINKS */}
      <nav
        aria-label={t("mainNavigation")}
        className="pointer-events-auto hidden items-center justify-self-end gap-[34px] text-xs md:flex md:max-lg:gap-5 lg:text-white"
      >
        {desktopNavigation.map((item) => (
          <a key={item.href} href={item.href} className="group relative py-2">
            <span>{item.label}</span>

            <span
              aria-hidden="true"
              className="absolute bottom-1 left-0 h-px w-0 bg-current transition-[width] duration-300 group-hover:w-full"
            />
          </a>
        ))}
      </nav>

      {/* MOBILE FULLSCREEN MENU — ALL 9 SECTIONS */}
      <nav
        id="primary-nav"
        aria-label={t("mainNavigation")}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`
          fixed inset-0 z-0
          flex h-dvh w-full
          flex-col
          overflow-y-auto
          overscroll-contain
          bg-paper text-ink
          transition-[opacity,visibility]
          duration-300 ease-out
          motion-reduce:transition-none
          md:hidden
          ${
            menuOpen
              ? "visible pointer-events-auto opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      >
        <div
          className={`
            flex min-h-full flex-col
            px-5 pt-[96px]
            pb-[max(30px,env(safe-area-inset-bottom))]
            transition-[opacity,transform]
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            motion-reduce:transition-none
            ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }
          `}
        >
          {/* Navigation links */}
          <div className="border-t border-[#c6c4bc]">
            {desktopNavigation.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between gap-4 border-b border-[#d0cec7] py-[13px] font-sans text-[clamp(20px,5.8vw,27px)] font-light leading-[1.1] tracking-[-.025em] text-[#232722] transition-colors duration-200 hover:text-[#657466] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-forest"
              >
                <span>{item.label}</span>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[18px] w-[18px] shrink-0 opacity-30 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            ))}
          </div>

          {/* LANGUAGE SWITCHER — NO TOP BORDER */}
          <div className="mt-auto pt-6">
            <div className="pt-6">
              <LanguageSwitcher className="gap-3 text-[13px]" />
            </div>
          </div>
        </div>
      </nav>

      {/* ANIMATED MOBILE MENU BUTTON — unchanged */}
      <button
        ref={menuButtonRef}
        type="button"
        aria-controls="primary-nav"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
        onClick={() => {
          if (menuOpen) {
            closeMenu();
          } else {
            setMenuOpen(true);
          }
        }}
        className="pointer-events-auto relative z-10 hidden h-[42px] w-[42px] flex-col items-center justify-center gap-[6px] border-0 bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest max-md:flex"
      >
        <span
          className={`
            block h-px w-[28px] bg-ink
            transition-transform duration-300 ease-in-out
            motion-reduce:transition-none
            ${
              menuOpen
                ? "translate-y-[3.5px] rotate-45"
                : "translate-y-0 rotate-0"
            }
          `}
        />

        <span
          className={`
            block h-px w-[28px] bg-ink
            transition-transform duration-300 ease-in-out
            motion-reduce:transition-none
            ${
              menuOpen
                ? "-translate-y-[3.5px] -rotate-45"
                : "translate-y-0 rotate-0"
            }
          `}
        />
      </button>
    </header>
  );
}
