import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const StickyOrderButton = () => {
  const { itemCount, total } = useCart();

  if (itemCount === 0) return null;

  return (
    <a
      href="#order"
      className="fixed bottom-6 right-6 z-50 gradient-gold text-primary-foreground font-body font-bold px-6 py-3 rounded-full flex items-center gap-3 glow-gold-lg shadow-2xl hover:opacity-90 transition-opacity animate-scale-in"
    >
      <ShoppingCart size={20} />
      <span>{itemCount} items</span>
      <span className="border-l border-primary-foreground/30 pl-3">{total.toLocaleString()} TZS</span>
    </a>
  );
};

export default StickyOrderButton;
