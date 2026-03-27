import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl font-black gradient-gold-text mb-4">ZEBRA</h3>
          <p className="text-muted-foreground font-body">
            Dar es Salaam's premium street food experience. Big portions, bold flavors.
          </p>
        </div>
        <div className="space-y-3 font-body">
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin size={16} className="text-primary shrink-0" /> Dar es Salaam, Tanzania
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone size={16} className="text-primary shrink-0" /> +255 700 000 000
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock size={16} className="text-primary shrink-0" /> Open daily: 10AM – 11PM
          </div>
        </div>
        <div className="font-body">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Zebra Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
