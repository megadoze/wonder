import { useTranslations } from "next-intl";
import { ExperienceProvider } from "@/components/ui/ExperienceProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
// import { ServiceStrip } from "@/components/sections/ServiceStrip";
import { Studio } from "@/components/sections/Studio";

import { SelectedWork } from "@/components/sections/SelectedWork";
import { InteriorStudies } from "@/components/sections/InteriorStudies";
import { Materials } from "@/components/sections/Materials";
import { Approach } from "@/components/sections/Approach";
import { Philosophy } from "@/components/sections/Philosophy";
import { ServiceDetails } from "@/components/sections/ServiceDetails";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function HomePage() {
  const t = useTranslations("Accessibility");
  return (
    <ExperienceProvider>
      <a
        href="#main"
        className="sr-only fixed top-3 left-3 z-[100] rounded-sm bg-[#30362f] px-5 py-3 text-sm font-medium text-white shadow-lg focus:not-sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c2c9bb]"
      >
        {t("skipToContent")}
      </a>

      <Header />

      <main id="main">
        <ScrollReveal />

        <Hero />

        <Studio />

        <InteriorStudies />

        <ServiceDetails />

        <SelectedWork />

        <Materials />

        <Approach />

        <Philosophy />

        <Pricing />

        <Contact />
      </main>

      <Footer />
    </ExperienceProvider>
  );
}
