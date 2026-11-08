import { routing } from "@/i18n/routing";

export const siteUrl = (process.env.SITE_URL || "https://wonder.archi").replace(
  /\/+$/,
  "",
);

export const indexedLocales: readonly string[] = [...routing.locales];

export function getLocaleUrl(locale: string) {
  const path = locale === routing.defaultLocale ? "/" : `/${locale}`;

  return `${siteUrl}${path}`;
}

export function getLanguageAlternates() {
  return Object.fromEntries(
    indexedLocales.map((locale) => [locale, getLocaleUrl(locale)]),
  );
}
