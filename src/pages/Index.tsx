import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { BioSection } from '@/components/BioSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TimezoneSection } from '@/components/TimezoneSection';
import { CrisisSection } from '@/components/CrisisSection';
import { StatsSection } from '@/components/StatsSection';
import { ToolsSection } from '@/components/ToolsSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <BioSection />
        <SkillsSection />
        <ServicesSection />
        <TimezoneSection />
        <CrisisSection />
        <StatsSection />
        <ToolsSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="font-mono text-sm">
            © 2024 Crypto Community Manager. Building Trust, One Message at a Time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
