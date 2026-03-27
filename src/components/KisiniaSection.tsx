import { Flame, Users, ShoppingCart } from "lucide-react";
import kisiniaImg from "@/assets/kisinia-large.jpg";
import { useCart } from "@/contexts/CartContext";
import { useFadeIn } from "@/hooks/use-fade-in";

const sizes = [
  { id: "kisinia-small", name: "Small Kisinia", serves: "2–3 people", price: 25000, badge: null },
  { id: "kisinia-medium", name: "Medium Kisinia", serves: "3–5 people", price: 40000, badge: "🔥 Best Seller" },
  { id: "kisinia-large", name: "Large Kisinia", serves: "5+ people", price: 60000, badge: "👥 Best for Groups" },
];

const KisiniaSection = () => {
  const { addItem } = useCart();
  const fadeRef = useFadeIn();

  return (
    <section id="kisinia" className="py-24 md:py-36 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[150px]" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={fadeRef} className="container mx-auto px-4 relative z-10 fade-section">
        <div className="text-center mb-20">
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-primary font-semibold">
            ⭐ Signature Dish
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-5 leading-tight">
            The Legendary <span className="gradient-gold-text">Kisinia</span>
          </h2>
          <p className="font-body text-muted-foreground mt-5 max-w-md mx-auto text-base font-light">
            Massive biryani trays made for sharing. Rich, spicy, unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-3xl bg-primary/[0.06] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative img-zoom rounded-2xl overflow-hidden">
              <img
                src={kisiniaImg}
                alt="Zebra Kisinia Biryani Tray"
                className="w-full object-cover aspect-square"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute top-5 right-5 gradient-gold text-primary-foreground font-body font-bold px-5 py-2.5 rounded-full text-xs flex items-center gap-2 animate-pulse-glow tracking-wide uppercase">
              <Flame size={14} /> Best Seller
            </div>
          </div>

          {/* Size cards */}
          <div className="space-y-6">
            {sizes.map((size) => (
              <div
                key={size.id}
                className={`relative card-luxury rounded-2xl p-7 card-hover cursor-pointer group ${
                  size.badge === "🔥 Best Seller" ? "border-primary/40 glow-gold-subtle" : ""
                }`}
                onClick={() => addItem({ id: size.id, name: size.name, price: size.price })}
              >
                {size.badge && (
                  <span className="absolute -top-3.5 left-7 gradient-gold text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-full font-body uppercase tracking-wider">
                    {size.badge}
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold">{size.name}</h3>
                    <p className="text-muted-foreground font-body flex items-center gap-2 mt-2 text-sm">
                      <Users size={13} /> {size.serves}
                    </p>
                  </div>
                  <div className="text-right flex items-center gap-4">
                    <div>
                      <p className="font-display text-2xl font-black text-primary">
                        {size.price.toLocaleString()}
                      </p>
                      <span className="text-[10px] font-body text-muted-foreground uppercase tracking-wider">TZS</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:gradient-gold group-hover:text-primary-foreground transition-all duration-300">
                      <ShoppingCart size={16} />
                    </div>
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
