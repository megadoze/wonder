import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import "../globals.css";

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

const siteTitle = "WONDER — Interior Design Studio";

const siteDescription =
  "Thoughtful interiors with character — shaped around the way you live. Interior Design, Space Planning, Furniture & Materials, and Design Support.";

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

  const path = locale === routing.defaultLocale ? "/" : `/${locale}`;

  const siteUrl = process.env.SITE_URL ?? "https://wonder.archi";

  const ogLocales = {
    en: "en_GB",
    ru: "ru_RU",
    uk: "uk_UA",
    es: "es_ES",
  };

  const isPublishedLanguage = locale === "en";

  return {
    metadataBase: new URL(siteUrl),

    title: t("title"),
    description: t("description"),
    applicationName: "WONDER",

    alternates: {
      canonical: path,
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
      url: path,
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

  setRequestLocale(locale);

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
