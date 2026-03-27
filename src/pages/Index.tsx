import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KisiniaSection from "@/components/KisiniaSection";
import MenuSection from "@/components/MenuSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import StickyOrderButton from "@/components/StickyOrderButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <KisiniaSection />
      <MenuSection />
      <OrderSection />
      <Footer />
      <StickyOrderButton />
    </div>
  );
};

export default Index;
