import { ExperienceProvider } from "@/components/ui/ExperienceProvider";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { ServiceStrip } from "@/components/sections/ServiceStrip";
import { Studio } from "@/components/sections/Studio";
import { InteriorStudies } from "@/components/sections/InteriorStudies";
import { Materials } from "@/components/sections/Materials";
import { Approach } from "@/components/sections/Approach";
import { Philosophy } from "@/components/sections/Philosophy";
import { ServiceDetails } from "@/components/sections/ServiceDetails";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <ExperienceProvider>
      <a
        className="sr-only fixed top-3 left-3 z-[100] bg-white px-4 py-3 focus:not-sr-only"
        href="#main"
      >
        Skip to content
      </a>

      <div id="top" aria-hidden="true" />
      <Header />

      <main id="main">
        {/* HERO + SERVICE STRIP */}
        <div className="relative">
          <Hero />

          <div className="min-[1200px]:absolute min-[1200px]:inset-x-0 min-[1200px]:bottom-0 min-[1200px]:z-10">
            <ServiceStrip />
          </div>
        </div>

        {/* STUDIO */}
        <Studio />

        {/* INTERIOR STUDIES */}
        <InteriorStudies />

        {/* MATERIALS */}
        <Materials />

        {/* APPROACH */}
        <Approach />

        {/* PHILOSOPHY */}
        <Philosophy />

        {/* SERVICES */}
        <ServiceDetails />

        {/* CONTACT */}
        <Contact />
      </main>

      <Footer />
    </ExperienceProvider>
  );
}
