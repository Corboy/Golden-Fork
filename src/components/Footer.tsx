import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { business, getWhatsAppUrl } from "@/config/business";

const Footer = () => {
  return (
    <footer id="location" className="border-t border-white/10 bg-[#0a0a0a] py-12 px-4 text-xs font-body text-muted-foreground">
      <div className="container mx-auto max-w-2xl flex flex-col items-center text-center space-y-6">
        {/* Brand & Official Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full p-2 bg-secondary border border-primary/40 shadow-lg flex items-center justify-center">
            <img
              src="/brand/wonderland-emblem-orange.png"
              alt="Wonderland Bar & Grill Seal"
              className="w-full h-full object-contain"
              width={64}
              height={64}
            />
          </div>
          <h3 className="font-display text-2xl font-black gradient-gold-text tracking-wider mt-1">
            {business.name}
          </h3>
          <span className="text-[11px] font-body uppercase tracking-[0.25em] text-primary font-semibold">
            {business.cuisine} • {business.location.city}
          </span>
        </div>

        {/* Address */}
        <div className="flex items-center justify-center gap-2 text-white/80 text-xs sm:text-sm font-light">
          <MapPin size={15} className="text-primary shrink-0" />
          <span>{business.location.fullAddress}</span>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={business.location.googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-primary-foreground font-body font-bold text-xs px-5 py-3 rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
          >
            <ExternalLink size={14} /> Google Maps
          </a>

          <a
            href={`tel:${business.contact.phone}`}
            className="border border-primary/40 bg-secondary/60 text-white hover:text-primary font-body font-semibold text-xs px-5 py-3 rounded-full flex items-center gap-2 hover:border-primary transition-colors"
          >
            <Phone size={14} className="text-primary" /> Call {business.contact.whatsappDisplay}
          </a>

          <a
            href={getWhatsAppUrl("Hi Wonderland Bar & Grill, I'd like to ask about the menu.")}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/40 bg-secondary/60 text-white hover:text-primary font-body font-semibold text-xs px-5 py-3 rounded-full flex items-center gap-2 hover:border-primary transition-colors"
          >
            <MessageCircle size={14} className="text-[#25D366]" /> WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/5 w-full text-[11px] text-muted-foreground/60">
          © {new Date().getFullYear()} Wonderland Bar & Grill. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
