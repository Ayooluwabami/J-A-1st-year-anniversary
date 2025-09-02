import { AnniversaryHero } from "@/components/anniversary/AnniversaryHero";
import { LoveStory } from "@/components/anniversary/LoveStory";
import LoveStats from "@/components/anniversary/LoveStats";
import Timeline from "@/components/anniversary/Timeline";
import { PhotoGallery } from "@/components/anniversary/PhotoGallery";
import { AnniversaryWishes } from "@/components/anniversary/AnniversaryWishes";
import { ScrollToTop } from "@/components/anniversary/ScrollToTop";
import { Footer } from "@/components/anniversary/Footer";
import FloatingHearts from "@/components/ui/floating-hearts";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingHearts />
      <AnniversaryHero />
      <LoveStory />
      <LoveStats />
      <Timeline />
      <PhotoGallery />
      <AnniversaryWishes />
      <ScrollToTop />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
