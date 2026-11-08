import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "uk", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
  alternateLinks: false,
});
