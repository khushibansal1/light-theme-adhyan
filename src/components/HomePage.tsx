import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}