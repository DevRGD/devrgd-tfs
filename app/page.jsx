import HeroSection from '@/components/sections/HeroSection';
import OverviewSection from '@/components/sections/OverviewSection';
import BrandsTimelineSection from '@/components/sections/BrandsTimelineSection';
import InteractiveGlobeSection from '@/components/sections/InteractiveGlobeSection';
import BottomBanner from '@/components/sections/BottomBanner';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <BrandsTimelineSection />
      <InteractiveGlobeSection />
      <BottomBanner />
    </main>
  );
}
