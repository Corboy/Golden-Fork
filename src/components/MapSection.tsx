import { MapPin, ExternalLink } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6!2d39.268!3d-6.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDYnNDguMCJTIDM5wrAxNicwNC44IkU!5e0!3m2!1sen!2stz!4v1";

const MAPS_LINK = "https://maps.google.com/?q=Kinondoni+Biafra+Atlas+Road+Dar+es+Salaam";

const MapSection = () => {
  const fadeRef = useFadeIn();

  return (
    <section id="location" className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={fadeRef} className="container mx-auto px-4 fade-section">
        <div className="text-center mb-14">
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-primary font-semibold">
            📍 Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-5">
            Our <span className="gradient-gold-text">Location</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-luxury rounded-2xl overflow-hidden">
            <div className="aspect-video relative">
              <iframe
                src={MAP_EMBED_URL}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zebra Restaurant Location"
              />
              <div className="absolute inset-0 border border-primary/10 rounded-t-2xl pointer-events-none" />
            </div>
            <div className="p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-medium text-sm">Kinondoni Biafra, Atlas Road</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">Dar es Salaam, Tanzania</p>
                </div>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-gold text-primary-foreground font-body font-semibold px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:shadow-[0_0_30px_hsl(43_100%_50%/0.3)] transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              >
                <ExternalLink size={14} /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
