import heroBg from "@/assets/hero-biryani.jpg";
import { business, getWhatsAppUrl } from "@/config/business";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Background Image with Rich Dark Charcoal Vignette & Sizzling Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Wonderland Bar & Grill — Sizzling BBQ and Cocktails"
          className="w-full h-full object-cover object-center scale-105"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-[#0c0c0c]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')",
          }}
        />
      </div>

      {/* Main Content - Centered & Filling the Viewport */}
      <div className="relative z-10 container mx-auto max-w-2xl text-center flex flex-col items-center pt-20 pb-16">
        {/* Brand Emblem */}
        <div className="mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-2.5 bg-black/60 backdrop-blur-md border border-primary/40 shadow-[0_0_40px_hsl(18_90%_55%/0.25)] flex items-center justify-center">
            <img
              src="/brand/wonderland-emblem-orange.png"
              alt="Wonderland Bar & Grill Emblem"
              className="w-full h-full object-contain"
              width={96}
              height={96}
            />
          </div>
        </div>

        {/* Top Flame Badge */}
        <div className="mb-5 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary font-bold border border-primary/40 rounded-full px-5 py-2 bg-black/50 backdrop-blur-md shadow-lg">
            ★ SIZZLING BBQ • BURGERS • CRAFT COCKTAILS ★
          </span>
        </div>

        {/* Big Bold Headline */}
        <h1
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          Taste the Flame –{" "}
          <span className="gradient-gold-text block sm:inline">
            Dar's Ultimate Bar & Grill
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-body text-sm sm:text-base md:text-lg text-white/75 max-w-lg mx-auto font-light leading-relaxed mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Sizzling charcoal BBQ, smoked ribs, gourmet smash burgers, fresh seafood, and craft cocktails.
        </p>

        {/* Clean Luxury Action Buttons */}
        <div
          className="flex flex-col gap-3.5 w-full max-w-xs sm:max-w-sm justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#menu"
            className="w-full gradient-gold text-primary-foreground font-body font-bold py-4 px-8 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] shadow-2xl hover:shadow-[0_0_40px_hsl(18_90%_55%/0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View Digital Menu
          </a>

          <a
            href={getWhatsAppUrl("Hi Wonderland Bar & Grill, I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-primary/50 text-primary font-body font-bold py-4 px-8 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm bg-black/25"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <a href="#menu" aria-label="Scroll to Menu">
          <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-0.5 h-2.5 bg-primary rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
