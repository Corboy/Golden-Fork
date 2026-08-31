import { useState } from "react";
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag, User, Phone, MapPin, Building, Clock, Check, ArrowRight, ArrowLeft, AlertCircle, CheckCircle2, RotateCcw } from "lucide-react";
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

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string>("");

  const [form, setForm] = useState<CheckoutFormState>({
    fullName: "",
    phone: "",
    officeName: "",
    deliveryLocation: "",
    buildingFloor: "",
    preferredTime: "ASAP (As soon as ready)",
    orderType: "Delivery",
    notes: "",
  });

  const [validationError, setValidationError] = useState<string | null>(null);

  const goToStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim()) {
      setValidationError("Please enter your Full Name.");
      return;
    }
    if (!form.phone.trim()) {
      setValidationError("Please enter your WhatsApp / Phone Number.");
      return;
    }
    setValidationError(null);
    setCurrentStep(2);
  };

  const goToStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.deliveryLocation.trim()) {
      setValidationError("Please specify your delivery area / street in Dar es Salaam.");
      return;
    }
    setValidationError(null);
    setCurrentStep(3);
  };

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

    if (!form.fullName.trim() || !form.phone.trim()) {
      setCurrentStep(1);
      setValidationError("Please complete your name and phone number.");
      return;
    }

    if (!form.deliveryLocation.trim()) {
      setCurrentStep(2);
      setValidationError("Please enter your delivery area.");
      return;
    }

    setValidationError(null);
    const message = generateWhatsAppMessage();
    const url = getWhatsAppUrl(message);
    setSubmittedWhatsAppUrl(url);
    setOrderSubmitted(true);
    window.open(url, "_blank");
  };

  const handleResetOrder = () => {
    setOrderSubmitted(false);
    clearCart();
    setCurrentStep(1);
    const menuEl = document.getElementById("menu");
    if (menuEl) menuEl.scrollIntoView({ behavior: "smooth" });
  };

  if (items.length === 0 && !orderSubmitted) {
    return null; // Keep screen clean when cart is empty
  }

  const quickTimes = [
    "ASAP (As soon as ready)",
    "Lunch: 12:30 PM",
    "Lunch: 1:30 PM",
    "Evening: 6:00 PM",
  ];

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
            Review your dishes, complete quick delivery details, and send your order straight to WhatsApp.
          </p>
        </div>

        {/* ORDER SUCCESS / THANK YOU STATE */}
        {orderSubmitted ? (
          <div className="max-w-xl mx-auto card-luxury rounded-3xl p-6 sm:p-10 border border-primary/40 shadow-2xl text-center space-y-6 animate-scale-in">
            {/* Animated Glowing Check Icon */}
            <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-50" />
              <div className="w-20 h-20 rounded-full gradient-gold text-primary-foreground flex items-center justify-center shadow-[0_0_40px_hsl(43_100%_50%/0.6)]">
                <CheckCircle2 size={42} className="stroke-[2.5]" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-4xl font-black text-white">
                Asante sana, <span className="gradient-gold-text">{form.fullName}</span>!
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/80">
                Oda yako imetumwa jikoni Golden Fork kupitia WhatsApp.
              </p>
            </div>

            {/* Quick Order Recap Box */}
            <div className="bg-secondary/80 rounded-2xl p-4 border border-white/10 text-xs font-body text-left space-y-2 max-w-md mx-auto">
              <div className="flex items-center justify-between text-white font-bold border-b border-white/10 pb-2">
                <span>Total Amount:</span>
                <span className="text-primary font-display text-base">
                  {business.ordering.currencyDisplay} {total.toLocaleString()}
                </span>
              </div>
              <div className="text-muted-foreground space-y-1 text-[11px]">
                <p>📍 <strong className="text-white/90">Location:</strong> {form.deliveryLocation} {form.buildingFloor ? `(${form.buildingFloor})` : ""}</p>
                <p>🕐 <strong className="text-white/90">Preferred Time:</strong> {form.preferredTime}</p>
                <p>📞 <strong className="text-white/90">Phone:</strong> {form.phone}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={submittedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto gradient-gold text-primary-foreground font-body font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle size={16} /> Reopen WhatsApp
              </a>

              <button
                type="button"
                onClick={handleResetOrder}
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/80 border border-white/10 text-white font-body font-semibold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <RotateCcw size={15} /> Order More / Back to Menu
              </button>
            </div>
          </div>
        ) : (
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

            {/* Multi-Step Progressive Checkout Form (7 cols) */}
            <div className="md:col-span-7 card-luxury rounded-3xl p-4 sm:p-7 border border-white/10 shadow-2xl w-full overflow-hidden">
              {/* Step Indicator Header (Clean single-line mobile layout) */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10 w-full">
                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
                  {/* Step 1 Pill */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-body font-semibold transition-all whitespace-nowrap shrink-0 ${
                      currentStep === 1
                        ? "gradient-gold text-primary-foreground shadow-sm"
                        : form.fullName && form.phone
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {form.fullName && form.phone ? <Check size={11} /> : <span>1.</span>}
                    <span>Info</span>
                  </button>

                  <span className="text-white/30 text-[10px]">→</span>

                  {/* Step 2 Pill */}
                  <button
                    type="button"
                    onClick={() => form.fullName && form.phone && setCurrentStep(2)}
                    className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-body font-semibold transition-all whitespace-nowrap shrink-0 ${
                      currentStep === 2
                        ? "gradient-gold text-primary-foreground shadow-sm"
                        : form.deliveryLocation
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {form.deliveryLocation ? <Check size={11} /> : <span>2.</span>}
                    <span>Location</span>
                  </button>

                  <span className="text-white/30 text-[10px]">→</span>

                  {/* Step 3 Pill */}
                  <button
                    type="button"
                    onClick={() => form.fullName && form.phone && form.deliveryLocation && setCurrentStep(3)}
                    className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-body font-semibold transition-all whitespace-nowrap shrink-0 ${
                      currentStep === 3
                        ? "gradient-gold text-primary-foreground shadow-sm"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <span>3.</span>
                    <span>Send</span>
                  </button>
                </div>

                <span className="hidden sm:inline-block text-[11px] font-body text-primary font-semibold shrink-0">
                  Step {currentStep} of 3
                </span>
              </div>

              {/* Error Feedback */}
              {validationError && (
                <div className="bg-destructive/15 border border-destructive/40 text-destructive text-xs font-body p-3 rounded-2xl flex items-center gap-2 mb-4 animate-fade-in">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* STEP 1: CONTACT INFO */}
              {currentStep === 1 && (
                <form onSubmit={goToStep2} className="space-y-4 animate-fade-in">
                  <div>
                    <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                      <User size={16} className="text-primary" /> Who is this order for?
                    </h4>
                    <p className="text-[11px] font-body text-muted-foreground mt-0.5">
                      Enter your name and phone number to get started.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-full">
                      <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        autoFocus
                        value={form.fullName}
                        onChange={(e) => {
                          setForm({ ...form, fullName: e.target.value });
                          if (validationError) setValidationError(null);
                        }}
                        placeholder="e.g. John Mwangi"
                        className="w-full bg-secondary/80 border border-white/10 rounded-2xl px-4 py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                      />
                    </div>

                    <div className="w-full">
                      <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                        WhatsApp / Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          if (validationError) setValidationError(null);
                        }}
                        placeholder="e.g. 07XXXXXXXX"
                        className="w-full bg-secondary/80 border border-white/10 rounded-2xl px-4 py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full gradient-gold text-primary-foreground font-body font-bold py-3.5 px-4 rounded-full text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_30px_hsl(43_100%_50%/0.4)] transition-all active:scale-95"
                    >
                      <span>Next: Delivery Location</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2: DELIVERY LOCATION & OFFICE */}
              {currentStep === 2 && (
                <form onSubmit={goToStep3} className="space-y-4 animate-fade-in">
                  <div>
                    <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                      <MapPin size={16} className="text-primary" /> Where should we deliver?
                    </h4>
                    <p className="text-[11px] font-body text-muted-foreground mt-0.5">
                      Enter your street or office in Dar es Salaam.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-full">
                      <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                        Delivery Area / Street <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        autoFocus
                        value={form.deliveryLocation}
                        onChange={(e) => {
                          setForm({ ...form, deliveryLocation: e.target.value });
                          if (validationError) setValidationError(null);
                        }}
                        placeholder="e.g. Mikocheni B / Regent Estate / Masaki"
                        className="w-full bg-secondary/80 border border-white/10 rounded-2xl px-4 py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="w-full">
                        <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                          Office / Company <span className="text-muted-foreground font-normal text-[10px]">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          value={form.officeName}
                          onChange={(e) => setForm({ ...form, officeName: e.target.value })}
                          placeholder="e.g. Vodacom / Millicom"
                          className="w-full bg-secondary/80 border border-white/10 rounded-2xl px-4 py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                        />
                      </div>
                      <div className="w-full">
                        <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                          Building / Floor / Room <span className="text-muted-foreground font-normal text-[10px]">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          value={form.buildingFloor}
                          onChange={(e) => setForm({ ...form, buildingFloor: e.target.value })}
                          placeholder="e.g. 3rd Floor, Room 302"
                          className="w-full bg-secondary/80 border border-white/10 rounded-2xl px-4 py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="w-1/3 bg-secondary hover:bg-secondary/80 border border-border text-foreground font-body font-semibold py-3 px-3 rounded-full text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 gradient-gold text-primary-foreground font-body font-bold py-3.5 px-4 rounded-full text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_30px_hsl(43_100%_50%/0.4)] transition-all active:scale-95"
                    >
                      <span>Next: Final Step</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: PREFERRED TIME & CONFIRMATION */}
              {currentStep === 3 && (
                <form onSubmit={handleSendToWhatsApp} className="space-y-4 animate-fade-in">
                  <div>
                    <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                      <Clock size={16} className="text-primary" /> Delivery Time & Notes
                    </h4>
                    <p className="text-[11px] font-body text-muted-foreground mt-0.5">
                      When would you like your food delivered?
                    </p>
                  </div>

                  {/* Quick Time Pills */}
                  <div className="space-y-2">
                    <label className="font-body text-xs font-semibold text-white/80 block">
                      Preferred Time
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {quickTimes.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, preferredTime: t })}
                          className={`py-2 px-3 rounded-xl text-xs font-body font-medium text-left truncate transition-all ${
                            form.preferredTime === t
                              ? "bg-primary/20 border border-primary text-primary font-bold shadow-sm"
                              : "bg-secondary/70 border border-white/5 text-white/70 hover:bg-secondary"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special Instructions */}
                  <div className="w-full">
                    <label className="font-body text-xs font-semibold text-white/80 mb-1 block">
                      Special Instructions <span className="text-muted-foreground font-normal text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="e.g. Extra kachumbari, less chilli..."
                      className="w-full bg-secondary/80 border border-white/10 rounded-2xl px-4 py-3 text-xs font-body text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors box-border"
                    />
                  </div>

                  {/* Quick Summary Recap */}
                  <div className="bg-secondary/50 rounded-2xl p-3 border border-white/5 text-xs text-muted-foreground space-y-1">
                    <div className="flex items-center justify-between text-white font-medium">
                      <span>{form.fullName} ({form.phone})</span>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="text-primary text-[11px] underline"
                      >
                        Edit
                      </button>
                    </div>
                    <p className="truncate">📍 {form.deliveryLocation} {form.officeName ? `• ${form.officeName}` : ""}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-1/4 bg-secondary hover:bg-secondary/80 border border-border text-foreground font-body font-semibold py-3 px-3 rounded-full text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>
                    <button
                      type="submit"
                      className="w-3/4 gradient-gold text-primary-foreground font-body font-bold py-3.5 sm:py-4 px-4 rounded-full text-xs sm:text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-2xl hover:shadow-[0_0_40px_hsl(43_100%_50%/0.5)] transition-all duration-300 active:scale-95"
                    >
                      <MessageCircle size={18} className="shrink-0" />
                      <span className="truncate">Send Order to WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-muted-foreground font-body mt-2 font-light">
                    Direct to Golden Fork WhatsApp • No password or sign up required
                  </p>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderSection;
