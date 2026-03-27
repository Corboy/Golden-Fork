import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const OrderSection = () => {
  const { items, updateQuantity, removeItem, total, itemCount, clearCart } = useCart();

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
    <section id="order" className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            Your Selection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-4">
            Your <span className="gradient-gold-text">Order</span>
          </h2>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16 bg-card border border-border rounded-2xl">
            <p className="text-muted-foreground font-body text-lg">Your cart is empty</p>
            <a href="#menu" className="text-primary font-body font-semibold mt-2 inline-block hover:underline">
              Browse the menu →
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-xl p-5 flex items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold truncate">{item.name}</h4>
                  <p className="text-primary font-body font-semibold text-sm">
                    {item.price.toLocaleString()} TZS each
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-body font-bold w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors ml-1"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <p className="font-display font-black text-lg text-primary w-28 text-right">
                  {(item.price * item.quantity).toLocaleString()} <span className="text-xs font-body text-muted-foreground">TZS</span>
                </p>
              </div>
            ))}

            {/* Total */}
            <div className="border-t-2 border-primary/30 pt-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="font-body text-lg text-muted-foreground">
                  Total ({itemCount} items)
                </span>
                <span className="font-display text-3xl font-black gradient-gold-text">
                  {total.toLocaleString()} TZS
                </span>
              </div>
              <button
                onClick={handleWhatsAppOrder}
                className="w-full gradient-gold text-primary-foreground font-body font-bold py-4 rounded-xl text-lg uppercase tracking-wider flex items-center justify-center gap-3 hover:opacity-90 transition-opacity glow-gold"
              >
                <MessageCircle size={22} /> Order via WhatsApp
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-3 text-muted-foreground font-body text-sm hover:text-foreground transition-colors"
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
