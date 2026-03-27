import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const StickyOrderButton = () => {
  const { itemCount, total } = useCart();

  if (itemCount === 0) return null;

  return (
    <a
      href="#order"
      className="fixed bottom-6 right-6 z-50 gradient-gold text-primary-foreground font-body font-semibold px-6 py-3.5 rounded-full flex items-center gap-3 shadow-2xl hover:shadow-[0_0_50px_hsl(43_100%_50%/0.4)] transition-all duration-300 hover:-translate-y-0.5 animate-scale-in text-sm"
    >
      <ShoppingCart size={18} />
      <span>{itemCount}</span>
      <span className="w-px h-4 bg-primary-foreground/30" />
      <span>{total.toLocaleString()} TZS</span>
    </a>
  );
};

export default StickyOrderButton;
