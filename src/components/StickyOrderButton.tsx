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
    <aside aria-label="Order Cart Summary" className="fixed bottom-3 sm:bottom-5 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-fade-in">
      <a
        href="#order"
        onClick={scrollToCheckout}
        className="w-full gradient-gold text-primary-foreground font-body font-bold py-3.5 px-4 sm:px-6 rounded-2xl flex items-center justify-between shadow-2xl border border-primary/40 hover:scale-[1.02] transition-transform"
        aria-label={`View order with ${itemCount} items totaling ${total.toLocaleString()} ${business.ordering.currency}`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center">
            <ShoppingBag size={16} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold leading-tight">
              {itemCount} {itemCount === 1 ? "Item" : "Items"} in Cart
            </span>
            <span className="text-[11px] font-medium opacity-90">
              {business.ordering.currencyDisplay} {total.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-background/20 py-1.5 px-3 rounded-full">
          <span>Checkout</span>
          <ArrowRight size={14} />
        </div>
      </a>
    </aside>
  );
};

export default StickyOrderButton;
