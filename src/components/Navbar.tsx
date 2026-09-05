import { useState, useEffect, useCallback } from "react";
import { ShoppingCart, Search, X, Menu } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenCart?: () => void;
}

const Navbar = ({ searchQuery, onSearchChange, onOpenCart }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearchToggle = useCallback(() => {
    setSearchOpen((p) => {
      if (p) onSearchChange("");
      return !p;
    });
  }, [onSearchChange]);

  const handleCartClick = (e: React.MouseEvent) => {
    if (onOpenCart) {
      e.preventDefault();
      onOpenCart();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 sm:h-16 flex items-center transition-all duration-300 ${
        scrolled || searchOpen || mobileMenuOpen
          ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-gradient-to-b from-black/90 via-black/60 to-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-3.5 sm:px-6">
        {/* Brand: WONDERLAND BAR & GRILL */}
        <a href="#home" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group">
          <img
            src="/brand/wonderland-emblem-orange.png"
            alt="Wonderland Bar & Grill"
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            width={36}
            height={36}
          />
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-2xl font-black tracking-[0.14em] gradient-gold-text whitespace-nowrap leading-none">
              WONDERLAND
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.25em] text-white/70 leading-tight">
              BAR & GRILL
            </span>
          </div>
        </a>

        {/* Right Actions: Search, Cart, Menu */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Search Toggle / Input */}
          <div className={`flex items-center transition-all duration-300 ${searchOpen ? "w-36 sm:w-60" : "w-7"}`}>
            {searchOpen && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search grill, burgers, drinks..."
                className="w-full bg-secondary/95 border border-primary/40 rounded-full px-3 py-1 text-xs font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                autoFocus
              />
            )}
            <button
              onClick={handleSearchToggle}
              className="p-1 text-foreground/80 hover:text-primary transition-colors shrink-0"
              aria-label="Search"
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>

          {/* Cart Icon with Flame Badge */}
          <a
            href="#order"
            onClick={handleCartClick}
            className="relative p-1 text-foreground hover:text-primary transition-colors"
            aria-label={`Cart (${itemCount} items)`}
          >
            <ShoppingCart size={19} />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full gradient-gold text-primary-foreground text-[9px] font-bold flex items-center justify-center shadow-md animate-scale-in">
                {itemCount}
              </span>
            )}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Slide-out Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-14 sm:top-16 left-0 right-0 bg-black/98 backdrop-blur-2xl border-b border-white/10 animate-fade-in px-6 py-6 flex flex-col gap-4 shadow-2xl">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
          >
            Digital Menu
          </a>
          <a
            href="#order"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleCartClick(e);
            }}
            className="font-body text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
          >
            Cart & Checkout
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
          >
            Location & Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
