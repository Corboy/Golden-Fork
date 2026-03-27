import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KisiniaSection from "@/components/KisiniaSection";
import MenuSection from "@/components/MenuSection";
import OrderSection from "@/components/OrderSection";
import CustomOrderSection from "@/components/CustomOrderSection";
import GallerySection from "@/components/GallerySection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import StickyOrderButton from "@/components/StickyOrderButton";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <HeroSection />
      <KisiniaSection />
      <MenuSection searchQuery={searchQuery} />
      <OrderSection />
      <CustomOrderSection />
      <GallerySection />
      <MapSection />
      <Footer />
      <StickyOrderButton />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
