"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const languageNames = {
  en: "English",
  ru: "Русский",
  uk: "Українська",
  es: "Español",
};

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const currentLocale = useLocale();
  const pathname = usePathname();

  return (
    <nav
      aria-label="Select language"
      className={`inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[.12em] ${className}`}
    >
      {routing.locales.map((locale, index) => {
        const isActive = currentLocale === locale;

        return (
          <span key={locale} className="inline-flex items-center gap-2.5">
            {index > 0 && (
              <span aria-hidden="true" className="opacity-30">
                /
              </span>
            )}

            {isActive ? (
              <span aria-current="true" className="text-current opacity-100">
                {locale.toUpperCase()}
              </span>
            ) : (
              <Link
                href={`${pathname}#top`}
                locale={locale}
                hrefLang={locale}
                scroll={true}
                aria-label={`Switch language to ${languageNames[locale]}`}
                className="opacity-45 transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {locale.toUpperCase()}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
