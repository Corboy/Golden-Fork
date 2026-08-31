import { useState } from "react";
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag, User, Phone, MapPin, Building, Clock, FileText, AlertCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { business, getWhatsAppUrl } from "@/config/business";

export interface CheckoutFormState {
  fullName: string;
  phone: string;
  officeName: string;
  deliveryLocation: string;
  buildingFloor: string;
  preferredTime: string;
  orderType: "Delivery" | "Takeaway";
  notes: string;
}

const OrderSection = () => {
  const { items, updateQuantity, removeItem, total, itemCount, clearCart } = useCart();

  const [form, setForm] = useState<CheckoutFormState>({
    fullName: "",
    phone: "",
    officeName: "",
    deliveryLocation: "",
    buildingFloor: "",
    preferredTime: "As soon as ready (ASAP)",
    orderType: "Delivery",
    notes: "",
  });

  const [validationError, setValidationError] = useState<string | null>(null);

  const generateWhatsAppMessage = () => {
    const itemsList = items
      .map((i) => `• ${i.quantity} × ${i.name} — ${business.ordering.currencyDisplay} ${(i.price * i.quantity).toLocaleString()}`)
      .join("\n");

    const messageLines = [
      `🍽️ NEW ORDER — GOLDEN FORK`,
      ``,
      `👤 Customer: ${form.fullName}`,
      `📞 Phone: ${form.phone}`,
      form.officeName ? `🏢 Office/Company: ${form.officeName}` : null,
      `📍 Location: ${form.deliveryLocation}`,
      form.buildingFloor ? `🏢 Building/Floor/Room: ${form.buildingFloor}` : null,
      `🕐 Preferred Time: ${form.preferredTime || "ASAP"}`,
      `📦 Type: ${form.orderType}`,
      ``,
      `ORDER ITEMS:`,
      itemsList,
      ``,
      `💰 TOTAL: ${business.ordering.currencyDisplay} ${total.toLocaleString()}`,
      form.notes ? `📝 Special Notes: ${form.notes}` : null,
      ``,
      `Please confirm order availability and estimated delivery time. Asante!`,
    ].filter((line) => line !== null);

    return messageLines.join("\n");
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      setValidationError("Your cart is empty. Please select dishes from the menu first.");
      return;
    }

    if (!form.fullName.trim()) {
      setValidationError("Please enter your Full Name.");
      return;
    }

    if (!form.phone.trim()) {
      setValidationError("Please enter your Phone Number.");
      return;
    }

    if (form.orderType === "Delivery" && !form.deliveryLocation.trim()) {
      setValidationError("Please specify your delivery location / area in Dar es Salaam.");
      return;
    }

    setValidationError(null);
    const message = generateWhatsAppMessage();
    const url = getWhatsAppUrl(message);
    window.open(url, "_blank");
  };

  if (items.length === 0) {
    return null; // Keep screen clean when cart is empty
  }

  return (
    <section id="order" className="py-12 sm:py-20 relative border-t border-border/40 bg-card/20 overflow-hidden w-full">
      <div className="container mx-auto px-3.5 sm:px-6 max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="font-body text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
            CHECKOUT
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2">
            Your <span className="gradient-gold-text">Order</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-muted-foreground mt-2 font-light max-w-md mx-auto">
            Review your dishes, provide delivery details, and send the order directly to WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-start w-full">
          {/* Cart Summary (5 cols) */}
          <div className="md:col-span-5 card-luxury rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl space-y-4 w-full overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-display text-base sm:text-lg font-bold flex items-center gap-2 text-white">
                <ShoppingBag size={17} className="text-primary shrink-0" /> Cart ({itemCount})
              </h3>
              <button
                onClick={clearCart}
                className="text-[11px] font-body text-muted-foreground hover:text-destructive transition-colors uppercase tracking-wider"
              >
                Clear
              </button>
            </div>

            {/* Items list */}
            <div className="space-y-2.5 max-h-64 sm:max-h-72 overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-secondary/80 rounded-2xl p-3 sm:p-3.5 flex items-center justify-between gap-2.5 border border-white/5"
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-white truncate">
                      {item.name}
                    </h4>
                    <p className="text-primary font-body text-xs font-semibold mt-0.5">
                      {item.price.toLocaleString()} {business.ordering.currency}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center text-white hover:border-primary transition-colors"
                      aria-label="Decrease"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="font-body font-bold text-xs w-5 text-center text-primary">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full gradient-gold text-primary-foreground flex items-center justify-center shadow-sm"
                      aria-label="Increase"
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors ml-0.5"
                      aria-label="Delete"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="font-body text-xs sm:text-sm text-muted-foreground">Total to Pay</span>
              <span className="font-display text-xl sm:text-2xl font-black gradient-gold-text">
                {total.toLocaleString()} {business.ordering.currency}
              </span>
            </div>
          </div>

          {/* Checkout Form (7 cols) */}
          <div className="md:col-span-7 card-luxury rounded-3xl p-4 sm:p-7 border border-white/10 shadow-2xl w-full overflow-hidden">
            <form onSubmit={handleSendToWhatsApp} className="space-y-3.5 w-full">
              <h3 className="font-display text-base sm:text-lg font-bold flex items-center gap-2 text-white border-b border-white/10 pb-3">
                <User size={17} className="text-primary shrink-0" /> Delivery & Office Details
              </h3>

              {validationError && (
                <div className="bg-destructive/15 border border-destructive/40 text-destructive text-xs font-body p-3 rounded-2xl flex items-center gap-2 animate-fade-in">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="w-full min-w-0">
                  <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. John Mwangi"
                    className="w-full bg-secondary/80 border border-white/10 rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                  />
                </div>
                <div className="w-full min-w-0">
                  <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                    WhatsApp / Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. 07XXXXXXXX"
                    className="w-full bg-secondary/80 border border-white/10 rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                  />
                </div>
              </div>

              {/* Office & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="w-full min-w-0">
                  <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                    Office / Company Name <span className="text-muted-foreground font-normal text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.officeName}
                    onChange={(e) => setForm({ ...form, officeName: e.target.value })}
                    placeholder="e.g. Vodacom / ABC Ltd"
                    className="w-full bg-secondary/80 border border-white/10 rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                  />
                </div>
                <div className="w-full min-w-0">
                  <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                    Preferred Time
                  </label>
                  <input
                    type="text"
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    placeholder="e.g. 12:30 PM or ASAP"
                    className="w-full bg-secondary/80 border border-white/10 rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                  />
                </div>
              </div>

              {/* Delivery Location & Building */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="w-full min-w-0">
                  <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                    Delivery Area / Street <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.deliveryLocation}
                    onChange={(e) => setForm({ ...form, deliveryLocation: e.target.value })}
                    placeholder="e.g. Mikocheni B / Regent Estate"
                    className="w-full bg-secondary/80 border border-white/10 rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                  />
                </div>
                <div className="w-full min-w-0">
                  <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                    Building, Floor, Room
                  </label>
                  <input
                    type="text"
                    value={form.buildingFloor}
                    onChange={(e) => setForm({ ...form, buildingFloor: e.target.value })}
                    placeholder="e.g. 3rd Floor, Room 302"
                    className="w-full bg-secondary/80 border border-white/10 rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div className="w-full min-w-0">
                <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                  Notes / Special Instructions <span className="text-muted-foreground font-normal text-[10px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="e.g. Extra kachumbari, less chilli..."
                  className="w-full bg-secondary/80 border border-white/10 rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                />
              </div>

              {/* WhatsApp Submit Button (Clean & Fits Perfectly on Mobile) */}
              <div className="pt-2 sm:pt-3">
                <button
                  type="submit"
                  className="w-full gradient-gold text-primary-foreground font-body font-bold py-3.5 sm:py-4 px-4 rounded-full text-xs sm:text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-2xl hover:shadow-[0_0_40px_hsl(43_100%_50%/0.5)] transition-all duration-300 active:scale-95"
                >
                  <MessageCircle size={18} className="shrink-0" />
                  <span className="truncate">Send Order to WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-muted-foreground font-body mt-2 font-light">
                  Order will be sent to {business.contact.whatsappDisplay} • No login required
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
