import type { MetadataRoute } from "next";
import { indexedLocales, getLocaleUrl, getLanguageAlternates } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates =
    indexedLocales.length > 1
      ? {
          languages: getLanguageAlternates(),
        }
      : undefined;

  return indexedLocales.map((locale) => ({
    url: getLocaleUrl(locale),
    changeFrequency: "monthly",
    priority: 1,
    ...(alternates ? { alternates } : {}),
  }));
}
