import { ExperienceProvider } from '@/components/ui/ExperienceProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ServiceStrip } from '@/components/sections/ServiceStrip';
import { Studio } from '@/components/sections/Studio';
import { InteriorStudies } from '@/components/sections/InteriorStudies';
import { Materials } from '@/components/sections/Materials';
import { Approach } from '@/components/sections/Approach';
import { Philosophy } from '@/components/sections/Philosophy';
import { ServiceDetails } from '@/components/sections/ServiceDetails';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <ExperienceProvider>
      <a className="sr-only fixed top-3 left-3 z-[100] bg-white px-4 py-3 focus:not-sr-only" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <ServiceStrip />
        <Studio />
        <InteriorStudies />
        <Materials />
        <Approach />
        <Philosophy />
        <ServiceDetails />
        <Contact />
      </main>
      <Footer />
    </ExperienceProvider>
  );
}
