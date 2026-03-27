import { useState } from "react";
import { Send } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const CustomOrderSection = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const fadeRef = useFadeIn();

  const handleSend = () => {
    if (!description.trim()) return;
    const message = encodeURIComponent(
      `Hi Zebra Restaurant,\n\n🛒 Custom Order:\n\nFood: ${description}\nQuantity: ${quantity || "1"}\nLocation: ${location || "Not specified"}\n\nPlease confirm availability and total price. Thank you!`
    );
    window.open(`https://wa.me/255700000000?text=${message}`, "_blank");
  };

  return (
    <section id="custom-order" className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />

      <div ref={fadeRef} className="container mx-auto px-4 max-w-xl relative z-10 fade-section">
        <div className="text-center mb-14">
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-primary font-semibold">
            🍽️ Special Request
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-5">
            Custom <span className="gradient-gold-text">Order</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-sm font-light">
            Can't find what you want? Describe it and we'll make it happen.
          </p>
        </div>

        <div className="card-luxury rounded-2xl p-8 space-y-5">
          <div>
            <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Food Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Large biryani with extra chicken, chapati on the side..."
              rows={3}
              className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 resize-none transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Quantity
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g., 2 plates"
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Your area / address"
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
              />
            </div>
          </div>
          <button
            onClick={handleSend}
            disabled={!description.trim()}
            className="w-full gradient-gold text-primary-foreground font-body font-semibold py-4 rounded-full text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-[0_0_40px_hsl(43_100%_50%/0.4)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            <Send size={18} /> Send Custom Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderSection;
