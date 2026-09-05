import { useState, useMemo } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { MENU_CATEGORIES, MenuItem } from "@/data/golden-fork-menu";
import { business } from "@/config/business";

interface MenuSectionProps {
  searchQuery: string;
}

const MenuSection = ({ searchQuery }: MenuSectionProps) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("popular");
  const { items: cartItems, addItem, updateQuantity } = useCart();

  const isSearching = searchQuery.trim().length > 0;

  // Find quantity of an item in cart
  const getItemCartQty = (id: string): number => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  // Filtered menu items
  const displayedItems = useMemo<MenuItem[]>(() => {
    if (isSearching) {
      const q = searchQuery.toLowerCase().trim();
      const map = new Map<string, MenuItem>();
      MENU_CATEGORIES.forEach((cat) => {
        cat.items.forEach((item) => {
          if (
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
          ) {
            map.set(item.id, item);
          }
        });
      });
      return Array.from(map.values());
    }

    const currentCat = MENU_CATEGORIES.find((c) => c.id === activeCategoryId);
    return currentCat ? currentCat.items : MENU_CATEGORIES[0].items;
  }, [searchQuery, activeCategoryId, isSearching]);

  return (
    <section id="menu" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10">
          <span className="font-body text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
            OUR SELECTION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white mt-2">
            The <span className="gradient-gold-text">Menu</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-muted-foreground mt-2 max-w-md mx-auto font-light">
            Sizzling charcoal BBQ, smoked ribs, gourmet smash burgers, fresh seafood & craft cocktails.
          </p>
        </div>

        {/* Search Feedback */}
        {isSearching && (
          <div className="text-center mb-8 flex items-center justify-center gap-2 text-xs font-body text-muted-foreground">
            <Search size={14} className="text-primary" />
            <span>
              Found {displayedItems.length} {displayedItems.length === 1 ? "item" : "items"} for "{searchQuery}"
            </span>
          </div>
        )}

        {/* Category Pills (Sticky beneath header without overlapping) */}
        {!isSearching && (
          <div className="sticky top-14 sm:top-16 z-30 bg-black/95 backdrop-blur-xl py-3 -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-12 border-b border-white/10 shadow-lg">
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pb-1 sm:justify-center">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-body font-semibold tracking-wider transition-all duration-300 shrink-0 ${
                      isActive
                        ? "gradient-gold text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                        : "bg-secondary/70 text-foreground/60 hover:text-foreground hover:bg-secondary border border-border/60"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Food Items Cards Grid - Styled like Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {displayedItems.map((item) => {
            const qty = getItemCartQty(item.id);

            return (
              <div
                key={item.id}
                className="card-luxury rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group"
              >
                <div>
                  {/* Food Image */}
                  <div className="h-56 sm:h-64 relative overflow-hidden bg-secondary img-zoom">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={450}
                      height={260}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-3.5 left-3.5 gradient-gold text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full font-body uppercase tracking-wider shadow-md">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Food Info */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Price & Circular Gold Action Button */}
                <div className="px-6 pb-6 pt-1 flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="font-display text-2xl font-black text-primary">
                      {item.price.toLocaleString()}
                    </span>
                    <span className="text-[11px] font-body text-muted-foreground ml-1.5 uppercase font-medium">
                      {business.ordering.currency}
                    </span>
                  </div>

                  {qty === 0 ? (
                    <button
                      onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                      className="w-12 h-12 rounded-full gradient-gold text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_hsl(43_100%_50%/0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
                      aria-label={`Add ${item.name} to cart`}
                      title="Add to order"
                    >
                      <Plus size={22} className="stroke-[2.5]" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 bg-secondary border border-primary/40 rounded-full p-1 shadow-md">
                      <button
                        onClick={() => updateQuantity(item.id, qty - 1)}
                        className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-body font-bold text-sm w-6 text-center text-primary">
                        {qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, qty + 1)}
                        className="w-8 h-8 rounded-full gradient-gold text-primary-foreground flex items-center justify-center shadow-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {isSearching && displayedItems.length === 0 && (
          <div className="text-center py-16 max-w-md mx-auto card-luxury rounded-3xl p-8 border border-border">
            <p className="font-display text-lg font-bold">No dishes found</p>
            <p className="font-body text-xs text-muted-foreground mt-2">
              Try searching for "Ribs", "Steak", "Burger", "Cocktail", or "Wings".
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
