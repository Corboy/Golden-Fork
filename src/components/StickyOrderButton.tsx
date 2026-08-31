import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { business } from "@/config/business";

const StickyOrderButton = () => {
  const { itemCount, total } = useCart();

  if (itemCount === 0) return null;

  const scrollToCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    const orderEl = document.getElementById("order");
    if (orderEl) {
      orderEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Order Cart Summary"
      className="fixed bottom-3 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-sm z-40 animate-fade-in"
    >
      <a
        href="#order"
        onClick={scrollToCheckout}
        className="w-full gradient-gold text-primary-foreground font-body font-bold py-3 px-4 sm:px-5 rounded-full flex items-center justify-between shadow-2xl border border-primary/50 active:scale-95 hover:scale-[1.02] transition-all duration-200"
        aria-label={`View order with ${itemCount} items totaling ${total.toLocaleString()} ${business.ordering.currency}`}
      >
        <div className="flex items-center gap-2.5 min-w-0 pr-1">
          <div className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center shrink-0">
            <ShoppingBag size={16} />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs font-bold leading-tight truncate">
              {itemCount} {itemCount === 1 ? "Item" : "Items"} in Cart
            </span>
            <span className="text-[11px] font-medium opacity-90 truncate">
              {business.ordering.currencyDisplay} {total.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-black/20 hover:bg-black/30 py-1.5 px-3 rounded-full shrink-0 ml-1.5 shadow-sm transition-colors">
          <span>Checkout</span>
          <ArrowRight size={13} className="shrink-0" />
        </div>
      </a>
    </aside>
  );
};

export default StickyOrderButton;
