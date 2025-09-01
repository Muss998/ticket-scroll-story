import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { JoinSection } from '@/components/sections/JoinSection';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
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