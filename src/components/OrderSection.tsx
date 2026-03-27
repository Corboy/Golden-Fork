import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useFadeIn } from "@/hooks/use-fade-in";

const OrderSection = () => {
  const { items, updateQuantity, removeItem, total, itemCount, clearCart } = useCart();
  const fadeRef = useFadeIn();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    const itemsList = items
      .map((i) => `• ${i.name} x${i.quantity} — ${(i.price * i.quantity).toLocaleString()} TZS`)
      .join("\n");
    const message = encodeURIComponent(
      `Hi Zebra Restaurant,\nI'd like to order:\n\n${itemsList}\n\nTotal: ${total.toLocaleString()} TZS\nLocation: ____`
    );
    window.open(`https://wa.me/255700000000?text=${message}`, "_blank");
  };

  return (
    <section id="order" className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={fadeRef} className="container mx-auto px-4 max-w-2xl fade-section">
        <div className="text-center mb-14">
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-primary font-semibold">
            Your Selection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-5">
            Your <span className="gradient-gold-text">Order</span>
          </h2>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 card-luxury rounded-2xl">
            <div className="text-4xl mb-4">🛒</div>
            <p className="text-muted-foreground font-body text-base">Your cart is empty</p>
            <a href="#menu" className="text-primary font-body font-medium mt-3 inline-block hover:underline text-sm tracking-wide">
              Browse the menu →
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="card-luxury rounded-xl p-5 flex items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-sm truncate">{item.name}</h4>
                  <p className="text-primary/70 font-body font-medium text-xs mt-0.5">
                    {item.price.toLocaleString()} TZS each
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="font-body font-bold w-8 text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors ml-1"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
                <p className="font-display font-black text-base text-primary w-24 text-right">
                  {(item.price * item.quantity).toLocaleString()}
                  <span className="text-[9px] font-body text-muted-foreground ml-1">TZS</span>
                </p>
              </div>
            ))}

            {/* Total */}
            <div className="border-t border-primary/20 pt-8 mt-8">
              <div className="flex justify-between items-center mb-8">
                <span className="font-body text-sm text-muted-foreground tracking-wide">
                  Total ({itemCount} items)
                </span>
                <span className="font-display text-3xl font-black gradient-gold-text">
                  {total.toLocaleString()} TZS
                </span>
              </div>
              <button
                onClick={handleWhatsAppOrder}
                className="w-full gradient-gold text-primary-foreground font-body font-semibold py-4 rounded-full text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-[0_0_40px_hsl(43_100%_50%/0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} /> Order via WhatsApp
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-4 text-muted-foreground font-body text-xs hover:text-foreground transition-colors tracking-wider uppercase"
              >
                Clear cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderSection;
