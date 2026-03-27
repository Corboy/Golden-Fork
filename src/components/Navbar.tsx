import { useState, useEffect, useCallback } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Kisinia", href: "#kisinia" },
  { label: "Menu", href: "#menu" },
  { label: "Custom", href: "#custom-order" },
  { label: "Location", href: "#location" },
];

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const Navbar = ({ searchQuery, onSearchChange }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearchToggle = useCallback(() => {
    setSearchOpen((p) => {
      if (p) onSearchChange("");
      return !p;
    });
  }, [onSearchChange]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-gold-subtle shadow-[0_4px_30px_hsl(43_100%_50%/0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="font-display text-2xl font-black tracking-[0.15em] gradient-gold-text">
          ZEBRA
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <div className={`flex items-center transition-all duration-300 ${searchOpen ? "w-64" : "w-8"}`}>
            {searchOpen && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search food... (Biryani, Kisinia...)"
                className="w-full bg-secondary/80 border border-border rounded-full px-4 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:glow-gold-subtle transition-all"
                autoFocus
              />
            )}
            <button onClick={handleSearchToggle} className="p-2 text-foreground/60 hover:text-primary transition-colors">
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>

          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-xs font-medium tracking-widest text-foreground/60 hover:text-primary transition-colors uppercase"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#order"
            className="relative p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:glow-gold"
          >
            <ShoppingCart size={18} />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full gradient-gold text-primary-foreground text-[10px] flex items-center justify-center font-bold animate-scale-in">
                {itemCount}
              </span>
            )}
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={handleSearchToggle} className="p-2 text-foreground/60">
            <Search size={20} />
          </button>
          <a href="#order" className="relative p-2">
            <ShoppingCart size={20} className="text-foreground" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-gold text-primary-foreground text-[10px] flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground p-1">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3 animate-fade-in">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search food... (Biryani, Kisinia, Pilau...)"
            className="w-full bg-secondary border border-border rounded-full px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            autoFocus
          />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container mx-auto py-6 px-4 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-base font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
