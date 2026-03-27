import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/255700000000?text=Hi%20Zebra%20Restaurant%2C%20I%27d%20like%20to%20make%20an%20order!"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl animate-float transition-all duration-300 hover:scale-110"
    style={{ background: "#25D366" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-foreground" />
  </a>
);

export default FloatingWhatsApp;
