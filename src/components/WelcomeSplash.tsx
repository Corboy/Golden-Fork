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
      className={`fixed inset-0 z-[100] bg-[#0c0c0c] flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-700 ${
        fading ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
      aria-label="Welcome to Wonderland Bar & Grill - Tap anywhere to skip"
    >
      {/* Ambient flame orange glow behind logo */}
      <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm">
        {/* Glowing Official Logo Emblem */}
        <div className="relative mb-6 animate-scale-in">
          {/* Animated Flame Ring */}
          <div className="absolute -inset-3 rounded-full border border-primary/40 animate-ping opacity-30" />
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-2.5 bg-[#161616] border-2 border-primary shadow-[0_0_50px_hsl(18_90%_55%/0.4)] flex items-center justify-center">
            <img
              src="/brand/wonderland-emblem-orange.png"
              alt="Wonderland Bar & Grill"
              className="w-full h-full object-contain"
              width={112}
              height={112}
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1
          className="font-display text-3xl sm:text-5xl font-black tracking-[0.16em] gradient-gold-text mb-1 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          WONDERLAND
        </h1>

        {/* Subtitle */}
        <p
          className="font-body text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-white/80 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Bar & Grill • Dar es Salaam
        </p>

        {/* Shimmering Flame Progress Line (4.4s) */}
        <div
          className="w-36 h-1 bg-white/10 rounded-full mt-8 overflow-hidden relative animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="h-full bg-gradient-to-r from-primary via-[#FF9E68] to-primary rounded-full animate-[progress_4.4s_ease-in-out_forwards]" />
        </div>

        <span className="text-[10px] text-muted-foreground/60 font-body uppercase tracking-wider mt-4">
          Tap anywhere to enter
        </span>
      </div>
    </div>
  );
};

export default WelcomeSplash;
