import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { JoinSection } from '@/components/sections/JoinSection';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

function useScrollToHashOnLoad() {
  useEffect(() => {
    setTimeout(() => {
      const scrollToHash = () => {
        const { hash } = window.location;
        if (!hash) return;
        const el = document.getElementById(hash.slice(1));
        if (el) {
          // Use smooth scroll if you like
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      // Try immediately (in case the element is already there)
      scrollToHash();

      // Also try again on hash changes (e.g., in-page anchor clicks)
      window.addEventListener("hashchange", scrollToHash);

      // Optional: retry once after next frame for lazy content
      const raf = requestAnimationFrame(scrollToHash);

      return () => {
        window.removeEventListener("hashchange", scrollToHash);
        cancelAnimationFrame(raf);
      };
    }, 100);
  }, []);
}

export default function LandingPage() {
  useScrollToHashOnLoad();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation parentPage="Home" />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <DownloadSection />
      <ContactSection />
      <JoinSection />
      <Footer />
    </div>
  );
}