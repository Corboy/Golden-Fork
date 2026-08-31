import { useState } from "react";
import WelcomeSplash from "@/components/WelcomeSplash";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import StickyOrderButton from "@/components/StickyOrderButton";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToCheckout = () => {
    const orderElement = document.getElementById("order");
    if (orderElement) {
      orderElement.scrollIntoView({ behavior: "smooth" });
    } else {
      const menuElement = document.getElementById("menu");
      if (menuElement) {
        menuElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex flex-col">
      <WelcomeSplash />
      
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenCart={scrollToCheckout}
      />

      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
        <HeroSection />
        <MenuSection searchQuery={searchQuery} />
        <OrderSection />
      </main>

      <Footer />
      <StickyOrderButton />
    </div>
  );
};

export default Index;
