export interface BusinessConfig {
  name: string;
  tagline: string;
  cuisine: string;
  location: {
    street: string;
    neighborhood: string;
    city: string;
    country: string;
    fullAddress: string;
    googleMapsSearchUrl: string;
    googleMapsEmbedUrl: string;
  };
  contact: {
    whatsappNumber: string; // e.g. "255654120940"
    whatsappDisplay: string; // e.g. "+255 654 120 940"
    phone: string;
    email?: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
  };
  ordering: {
    currency: string;
    currencyDisplay: string;
    whatsappBaseUrl: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export const business: BusinessConfig = {
  name: "Wonderland Bar & Grill",
  tagline: "Sizzling BBQ, Burgers & Craft Cocktails",
  cuisine: "Bar & Grill",
  location: {
    street: "1113 Kahama Road",
    neighborhood: "Kahama Road",
    city: "Dar es Salaam",
    country: "Tanzania",
    fullAddress: "1113 Kahama Road, Dar es Salaam, Tanzania",
    googleMapsSearchUrl: "https://maps.google.com/?q=Wonderland+Bar+and+Grill+Dar+es+Salaam+Tanzania",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.0!2d39.245!3d-6.765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4cf7e722510b%3A0xb30ea2ea6be938f0!2sDar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1",
  },
  contact: {
    whatsappNumber: "255654120940",
    whatsappDisplay: "+255 654 120 940",
    phone: "+255 654 120 940",
  },
  socials: {
    instagram: "",
    facebook: "",
  },
  ordering: {
    currency: "TZS",
    currencyDisplay: "TSh",
    whatsappBaseUrl: "https://wa.me/255654120940",
  },
  meta: {
    title: "Wonderland Bar & Grill — Sizzling BBQ & Cocktails | Dar es Salaam",
    description: "Sizzling flame-grilled steaks, smoky BBQ ribs, gourmet burgers, fresh seafood, and craft cocktails in Dar es Salaam. Browse our digital menu and order directly via WhatsApp.",
  },
};

export const getWhatsAppUrl = (message?: string) => {
  if (!message) {
    return business.ordering.whatsappBaseUrl;
  }
  return `${business.ordering.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
};
