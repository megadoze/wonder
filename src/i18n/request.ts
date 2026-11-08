import { locale as getRootLocale } from "next/root-params";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "./routing";

export default getRequestConfig(async ({ locale: overrideLocale }) => {
  const locale = overrideLocale ?? (await getRootLocale());

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
