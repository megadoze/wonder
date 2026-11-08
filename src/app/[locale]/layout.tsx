import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { hasLocale, NextIntlClientProvider } from "next-intl";

import { getMessages, getTranslations } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  indexedLocales,
  getLanguageAlternates,
  getLocaleUrl,
  siteUrl,
} from "@/lib/seo";

import { routing } from "@/i18n/routing";
import "../globals.css";

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe8",
  colorScheme: "light",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "Seo",
  });

  const ogLocales: Record<string, string> = {
    en: "en_GB",
    ru: "ru_RU",
    uk: "uk_UA",
    es: "es_ES",
  };

  const isPublishedLanguage = indexedLocales.includes(locale);

  const canonicalUrl = getLocaleUrl(locale);

  return {
    metadataBase: new URL(siteUrl),

    title: t("title"),
    description: t("description"),
    applicationName: "WONDER",

    alternates: {
      canonical: canonicalUrl,

      ...(indexedLocales.length > 1
        ? {
            languages: {
              ...getLanguageAlternates(),
              "x-default": getLocaleUrl("en"),
            },
          }
        : {}),
    },

    robots: {
      index: isPublishedLanguage,
      follow: true,
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "WONDER",
      type: "website",
      url: canonicalUrl,
      locale: ogLocales[locale],
      images: [
        {
          url: "/images/coastal-interior.webp",
          alt: t("imageAlt"),
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
