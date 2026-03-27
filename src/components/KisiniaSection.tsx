import { Flame, Users } from "lucide-react";
import kisiniaImg from "@/assets/kisinia-large.jpg";
import { useCart } from "@/contexts/CartContext";

const sizes = [
  { id: "kisinia-small", name: "Small Kisinia", serves: "2–3 people", price: 25000, badge: null },
  { id: "kisinia-medium", name: "Medium Kisinia", serves: "3–5 people", price: 40000, badge: "🔥 Most Popular" },
  { id: "kisinia-large", name: "Large Kisinia", serves: "5+ people", price: 60000, badge: "Best for Groups" },
];

const KisiniaSection = () => {
  const { addItem } = useCart();

  return (
    <section id="kisinia" className="py-20 md:py-32 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            ⭐ Signature Dish
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-4">
            The Legendary <span className="gradient-gold-text">Kisinia</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto text-lg">
            Massive biryani trays made for sharing. Rich, spicy, unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl glow-gold-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={kisiniaImg}
              alt="Zebra Kisinia Biryani Tray"
              className="rounded-2xl w-full object-cover aspect-square shadow-2xl"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute top-4 right-4 gradient-gold text-primary-foreground font-body font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2 animate-pulse-glow">
              <Flame size={16} /> Fan Favorite
            </div>
          </div>

          {/* Size cards */}
          <div className="space-y-5">
            {sizes.map((size) => (
              <div
                key={size.id}
                className={`relative bg-card border rounded-xl p-6 card-hover cursor-pointer group ${
                  size.badge === "🔥 Most Popular" ? "border-primary glow-gold" : "border-border"
                }`}
                onClick={() => addItem({ id: size.id, name: size.name, price: size.price })}
              >
                {size.badge && (
                  <span className="absolute -top-3 left-6 gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-body">
                    {size.badge}
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold">{size.name}</h3>
                    <p className="text-muted-foreground font-body flex items-center gap-2 mt-1">
                      <Users size={14} /> {size.serves}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-black text-primary">
                      {size.price.toLocaleString()} <span className="text-sm font-body text-muted-foreground">TZS</span>
                    </p>
                    <span className="font-body text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Tap to add →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KisiniaSection;
