import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useFadeIn } from "@/hooks/use-fade-in";
import heroBiryani from "@/assets/hero-biryani.jpg";
import pilauImg from "@/assets/pilau.jpg";
import fastfoodImg from "@/assets/fastfood.jpg";
import drinksImg from "@/assets/drinks.jpg";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
}

export const categories: { name: string; items: MenuItem[] }[] = [
  {
    name: "🍛 Biryani",
    items: [
      { id: "biryani-chicken", name: "Chicken Biryani", price: 8000, desc: "Fragrant saffron rice with tender chicken", image: heroBiryani },
      { id: "biryani-beef", name: "Beef Biryani", price: 10000, desc: "Rich, spiced rice with slow-cooked beef", image: heroBiryani },
      { id: "biryani-goat", name: "Goat Biryani", price: 12000, desc: "Premium goat meat with aromatic spices", image: heroBiryani },
    ],
  },
  {
    name: "🍚 Pilau",
    items: [
      { id: "pilau-chicken", name: "Chicken Pilau", price: 7000, desc: "Classic Swahili pilau with chicken", image: pilauImg },
      { id: "pilau-beef", name: "Beef Pilau", price: 8000, desc: "Hearty beef pilau with whole spices", image: pilauImg },
    ],
  },
  {
    name: "🍗 Fast Food",
    items: [
      { id: "chips-chicken", name: "Chips & Chicken", price: 6000, desc: "Crispy fried chicken with golden chips", image: fastfoodImg },
      { id: "chips-ketchup", name: "Chips Ketchup", price: 3000, desc: "Golden fries with house ketchup", image: fastfoodImg },
      { id: "burger", name: "Zebra Burger", price: 5000, desc: "Juicy beef patty with special sauce", image: fastfoodImg },
    ],
  },
  {
    name: "🥤 Drinks",
    items: [
      { id: "mango-juice", name: "Fresh Mango Juice", price: 2000, desc: "Cold-pressed tropical mango", image: drinksImg },
      { id: "passion-juice", name: "Passion Fruit Juice", price: 2000, desc: "Tangy passion fruit blend", image: drinksImg },
      { id: "soda", name: "Soda", price: 1000, desc: "Assorted cold sodas", image: drinksImg },
      { id: "water", name: "Water", price: 500, desc: "Bottled water 500ml", image: drinksImg },
    ],
  },
];

interface MenuSectionProps {
  searchQuery: string;
}

const MenuSection = ({ searchQuery }: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { addItem } = useCart();
  const fadeRef = useFadeIn();

  const isSearching = searchQuery.trim().length > 0;

  const filteredItems = useMemo(() => {
    if (!isSearching) return categories[activeCategory].items;
    const q = searchQuery.toLowerCase();
    return categories.flatMap((c) => c.items).filter(
      (item) => item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
    );
  }, [searchQuery, activeCategory, isSearching]);

  return (
    <section id="menu" className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20 pointer-events-none" />

      <div ref={fadeRef} className="container mx-auto px-4 relative z-10 fade-section">
        <div className="text-center mb-16">
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-primary font-semibold">
            Our Selection
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-5">
            The <span className="gradient-gold-text">Menu</span>
          </h2>
        </div>

        {/* Search results indicator */}
        {isSearching && (
          <div className="text-center mb-8">
            <p className="font-body text-sm text-muted-foreground">
              Showing results for "<span className="text-primary">{searchQuery}</span>" — {filteredItems.length} items found
            </p>
          </div>
        )}

        {/* Category tabs */}
        {!isSearching && (
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                className={`font-body font-medium px-6 py-3 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
                  i === activeCategory
                    ? "gradient-gold text-primary-foreground glow-gold-subtle"
                    : "bg-secondary/60 text-foreground/50 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              className="card-luxury rounded-2xl overflow-hidden card-hover opacity-0 animate-fade-in group"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="h-48 img-zoom">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={400}
                  height={192}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold">{item.name}</h3>
                <p className="text-muted-foreground text-xs font-body mt-1.5 font-light leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <span className="font-display text-xl font-black text-primary">
                      {item.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-body text-muted-foreground ml-1 uppercase">TZS</span>
                  </div>
                  <button
                    onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                    className="gradient-gold text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:shadow-[0_0_25px_hsl(43_100%_50%/0.4)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isSearching && filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-muted-foreground text-lg">No items match your search</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
