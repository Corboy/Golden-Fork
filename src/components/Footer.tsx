import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const Footer = () => {
  const fadeRef = useFadeIn();

  return (
    <footer className="border-t border-border bg-card/50 py-20">
      <div ref={fadeRef} className="container mx-auto px-4 fade-section">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-3xl font-black gradient-gold-text mb-5 tracking-wider">ZEBRA</h3>
            <p className="text-muted-foreground font-body text-sm font-light leading-relaxed">
              Dar es Salaam's premium street food experience. Big portions, bold flavors, made for sharing.
            </p>
          </div>
          <div className="space-y-4 font-body">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5">Contact</h4>
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <MapPin size={14} className="text-primary shrink-0" /> Kinondoni Biafra, Atlas Road, Dar es Salaam
            </div>
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <Phone size={14} className="text-primary shrink-0" /> +255 700 000 000
            </div>
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <Clock size={14} className="text-primary shrink-0" /> Open daily: 10AM – 11PM
            </div>
          </div>
          <div className="font-body">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
            </div>
            <p className="text-muted-foreground text-xs mt-8">
              © {new Date().getFullYear()} Zebra Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
