import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import heroBiryani from "@/assets/hero-biryani.jpg";
import pilauImg from "@/assets/pilau.jpg";
import fastfoodImg from "@/assets/fastfood.jpg";
import drinksImg from "@/assets/drinks.jpg";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
}

const categories: { name: string; items: MenuItem[] }[] = [
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

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { addItem } = useCart();

  return (
    <section id="menu" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            Our Selection
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-4">
            The <span className="gradient-gold-text">Menu</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`font-body font-semibold px-5 py-2.5 rounded-full text-sm transition-all ${
                i === activeCategory
                  ? "gradient-gold text-primary-foreground glow-gold"
                  : "bg-secondary text-foreground/70 hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories[activeCategory].items.map((item, i) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-xl overflow-hidden card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={176}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{item.name}</h3>
                <p className="text-muted-foreground text-sm font-body mt-1">{item.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-display text-xl font-black text-primary">
                    {item.price.toLocaleString()} <span className="text-xs font-body text-muted-foreground">TZS</span>
                  </span>
                  <button
                    onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                    className="gradient-gold text-primary-foreground p-2.5 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
