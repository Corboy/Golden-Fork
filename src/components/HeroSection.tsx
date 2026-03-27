import heroBg from "@/assets/hero-biryani.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Zebra Restaurant Biryani" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <p
            className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary font-semibold opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Dar es Salaam's Finest Street Food
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Home of Kisinia –{" "}
            <span className="gradient-gold-text">Dar's Favorite Biryani Experience</span>
          </h1>
          <p
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            Big portions. Rich flavor. Made for sharing.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="#menu"
              className="gradient-gold font-body font-bold text-primary-foreground px-8 py-4 rounded-lg text-lg uppercase tracking-wider hover:opacity-90 transition-opacity glow-gold"
            >
              View Menu
            </a>
            <a
              href="#kisinia"
              className="border-2 border-gold font-body font-bold text-primary px-8 py-4 rounded-lg text-lg uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Order Kisinia
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
