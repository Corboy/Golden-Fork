import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { UtensilsCrossed, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center card-luxury rounded-3xl p-8 sm:p-12 max-w-md w-full border border-border">
        <div className="w-16 h-16 rounded-full bg-secondary border border-primary/30 flex items-center justify-center mx-auto mb-6 text-primary">
          <UtensilsCrossed size={28} />
        </div>
        <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold">
          Error 404
        </span>
        <h1 className="mt-2 mb-3 text-3xl font-display font-black text-foreground">
          Page Not Found
        </h1>
        <p className="mb-8 text-xs sm:text-sm text-muted-foreground font-body leading-relaxed">
          The page you are looking for does not exist. Explore our sizzling bar & grill menu on the homepage.
        </p>
        <Link
          to="/"
          className="gradient-gold text-primary-foreground font-body font-semibold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:shadow-lg transition-all"
        >
          <ArrowLeft size={14} /> Return to Wonderland
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
