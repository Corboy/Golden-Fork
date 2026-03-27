import heroBg from "@/assets/hero-biryani.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Zebra Restaurant Biryani" className="w-full h-full object-cover scale-105" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay" />
        {/* Subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div
            className="inline-block opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="font-body text-[11px] md:text-xs uppercase tracking-[0.4em] text-primary/90 font-semibold border border-primary/20 rounded-full px-5 py-2">
              ★ Dar es Salaam's Finest Street Food ★
            </span>
          </div>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Home of Kisinia –{" "}
            <span className="gradient-gold-text">Dar's Favorite Biryani Experience</span>
          </h1>
          <p
            className="font-body text-base md:text-lg text-foreground/50 max-w-xl mx-auto opacity-0 animate-fade-in font-light tracking-wide"
            style={{ animationDelay: "0.7s" }}
          >
            Big portions. Rich flavor. Made for sharing.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="#menu"
              className="gradient-gold font-body font-semibold text-primary-foreground px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:shadow-[0_0_40px_hsl(43_100%_50%/0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              View Menu
            </a>
            <a
              href="#kisinia"
              className="border border-primary/40 font-body font-semibold text-primary px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              Order Kisinia
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.3s" }}>
        <div className="w-5 h-9 border border-foreground/20 rounded-full flex justify-center pt-2">
          <div className="w-0.5 h-2.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
