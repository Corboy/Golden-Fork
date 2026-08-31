import { useState, useEffect } from "react";

const WelcomeSplash = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // 5 seconds total: start fade-out sequence at 4.4s
    const timer = setTimeout(() => {
      setFading(true);
    }, 4400);

    // Completely unmount after 5.0s
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  const handleSkip = () => {
    setFading(true);
    setTimeout(() => setVisible(false), 400);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] bg-[#070707] flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-700 ${
        fading ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
      aria-label="Welcome to Golden Fork - Tap anywhere to skip"
    >
      {/* Ambient gold glow behind seal */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Glowing Official Logo Seal */}
        <div className="relative mb-6 animate-scale-in">
          {/* Animated Gold Ring */}
          <div className="absolute -inset-3 rounded-full border border-primary/40 animate-ping opacity-30" />
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-[#121212] border-2 border-primary shadow-[0_0_50px_hsl(43_100%_50%/0.35)] flex items-center justify-center">
            <img
              src="/brand/golden-fork-logo.png"
              alt="Golden Fork"
              className="w-full h-full object-contain rounded-full"
              width={112}
              height={112}
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1
          className="font-display text-3xl sm:text-5xl font-black tracking-[0.2em] gradient-gold-text mb-2 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          GOLDEN FORK
        </h1>

        {/* Subtitle */}
        <p
          className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white/80 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Swahili Cuisine • Mikocheni
        </p>

        {/* Shimmering Gold Progress Line (4.4s) */}
        <div
          className="w-36 h-1 bg-white/10 rounded-full mt-8 overflow-hidden relative animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="h-full bg-gradient-to-r from-primary via-[#FFE28A] to-primary rounded-full animate-[progress_4.4s_ease-in-out_forwards]" />
        </div>

        <span className="text-[10px] text-muted-foreground/60 font-body uppercase tracking-wider mt-4">
          Tap anywhere to skip
        </span>
      </div>
    </div>
  );
};

export default WelcomeSplash;
