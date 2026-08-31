import heroBiryani from "@/assets/hero-biryani.jpg";
import pilauImg from "@/assets/pilau.jpg";
import fastfoodImg from "@/assets/fastfood.jpg";
import drinksImg from "@/assets/drinks.jpg";
import platterImg from "@/assets/swahili-platter.jpg";

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number; // in TZS
  image: string;
  isDemo: boolean;
  badge?: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  description?: string;
  items: MenuItem[];
}

export interface PlatterSpecial {
  id: string;
  name: string;
  description: string;
  serves: string;
  price: number;
  badge?: string;
  image: string;
  isDemo: boolean;
}

export const PLATTER_SPECIALS: PlatterSpecial[] = [
  {
    id: "platter-office-duo",
    name: "Golden Swahili Tray (2–3 Persons)",
    description: "Generous Swahili Biryani or Pilau tray served with tender spiced chicken, beef mishkaki, kachumbari, and fresh chilli sauce. Ideal for quick office pairing.",
    serves: "2–3 People",
    price: 25000,
    badge: "Office Favorite",
    image: platterImg,
    isDemo: true,
  },
  {
    id: "platter-family-feast",
    name: "Golden Fork Feast Platter (3–5 Persons)",
    description: "Signature group feast with layered Biryani, slow-simmered beef, roasted chicken, plantains (ndizi), and chilled tropical sides.",
    serves: "3–5 People",
    price: 45000,
    badge: "🔥 Best Seller",
    image: platterImg,
    isDemo: true,
  },
  {
    id: "platter-corporate-grand",
    name: "Executive Gathering Platter (5+ Persons)",
    description: "Grand culinary spread for office meetings, celebrations, and gatherings. Complete assortment of Swahili rice specialties, meats, and fresh salads.",
    serves: "5+ People",
    price: 68000,
    badge: "👥 Best for Groups",
    image: platterImg,
    isDemo: true,
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "popular",
    name: "⭐ Popular",
    icon: "Sparkles",
    items: [
      {
        id: "gf-biryani-kuku",
        name: "Swahili Chicken Biryani",
        category: "Rice Dishes",
        description: "Fragrant spiced basmati rice infused with Zanzibar spices and tender braised chicken in rich masala sauce.",
        price: 8000,
        image: heroBiryani,
        popular: true,
        badge: "Chef's Special",
        isDemo: true,
      },
      {
        id: "gf-pilau-ngombe",
        name: "Dar Classic Beef Pilau",
        category: "Rice Dishes",
        description: "Aromatic coastal pilau cooked with whole cardamom, cumin, garlic, and slow-cooked tender beef chunks.",
        price: 8000,
        image: pilauImg,
        popular: true,
        badge: "Popular",
        isDemo: true,
      },
      {
        id: "gf-samaki-kupaka",
        name: "Samaki wa Kupaka (Coconut Fish)",
        category: "Fish & Seafood",
        description: "Grilled fresh kingfish coated in rich, spiced coconut sauce, served with coconut rice or ugali.",
        price: 13000,
        image: heroBiryani,
        popular: true,
        badge: "House Specialty",
        isDemo: true,
      },
      {
        id: "gf-chips-kuku",
        name: "Chips Kuku wa Kukaanga",
        category: "Chicken",
        description: "Crisp golden potato chips served with savory marinated deep-fried quarter chicken and fresh kachumbari.",
        price: 7000,
        image: fastfoodImg,
        popular: true,
        isDemo: true,
      },
    ],
  },
  {
    id: "rice-dishes",
    name: "🍛 Rice Dishes",
    icon: "Utensils",
    items: [
      {
        id: "gf-biryani-kuku",
        name: "Swahili Chicken Biryani",
        category: "Rice Dishes",
        description: "Fragrant spiced basmati rice infused with Zanzibar spices and tender braised chicken in rich masala sauce.",
        price: 8000,
        image: heroBiryani,
        popular: true,
        badge: "Chef's Special",
        isDemo: true,
      },
      {
        id: "gf-biryani-beef",
        name: "Slow-Braised Beef Biryani",
        category: "Rice Dishes",
        description: "Basmati rice layered with caramelized onions, rich spices, and melt-in-the-mouth beef cuts.",
        price: 9500,
        image: heroBiryani,
        isDemo: true,
      },
      {
        id: "gf-biryani-mbuzi",
        name: "Royal Goat (Mbuzi) Biryani",
        category: "Rice Dishes",
        description: "Select tender goat meat simmered in traditional Swahili herbs and layered with saffron-tinged rice.",
        price: 12000,
        image: heroBiryani,
        badge: "Premium",
        isDemo: true,
      },
      {
        id: "gf-pilau-ngombe",
        name: "Dar Classic Beef Pilau",
        category: "Rice Dishes",
        description: "Aromatic coastal pilau cooked with whole cardamom, cumin, garlic, and slow-cooked tender beef chunks.",
        price: 8000,
        image: pilauImg,
        popular: true,
        isDemo: true,
      },
      {
        id: "gf-pilau-kuku",
        name: "Spiced Chicken Pilau",
        category: "Rice Dishes",
        description: "Coastal spiced rice served with seasoned chicken and homemade tomato chilli kachumbari.",
        price: 8000,
        image: pilauImg,
        isDemo: true,
      },
      {
        id: "gf-wali-nazi-maharange",
        name: "Wali wa Nazi na Maharage ya Nazi",
        category: "Rice Dishes",
        description: "Creamy coastal coconut rice served with rich coconut kidney beans and fresh greens.",
        price: 5000,
        image: pilauImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "chicken",
    name: "🍗 Chicken (Kuku)",
    icon: "Flame",
    items: [
      {
        id: "gf-kuku-choma-chips",
        name: "Kuku Choma na Chips",
        category: "Chicken",
        description: "Charcoal grilled marinated quarter chicken served with crispy potato chips and tangy dipping sauce.",
        price: 8500,
        image: fastfoodImg,
        badge: "Charcoal Grilled",
        isDemo: true,
      },
      {
        id: "gf-kuku-mchuzi",
        name: "Mchuzi wa Kuku wa Kienyeji",
        category: "Chicken",
        description: "Free-range local chicken simmered in a spiced tomato, ginger, garlic and herb broth.",
        price: 9000,
        image: heroBiryani,
        isDemo: true,
      },
      {
        id: "gf-chips-kuku",
        name: "Chips Kuku wa Kukaanga",
        category: "Chicken",
        description: "Crisp golden potato chips served with savory marinated deep-fried quarter chicken and fresh kachumbari.",
        price: 7000,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "gf-mishkaki-kuku",
        name: "Chicken Mishkaki (3 Skewers)",
        category: "Chicken",
        description: "Tender skewered chicken breast cubes grilled over charcoal with Swahili tamarind marinade.",
        price: 6000,
        image: fastfoodImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "beef",
    name: "🥩 Beef (Ng'ombe)",
    icon: "UtensilsCrossed",
    items: [
      {
        id: "gf-mishkaki-beef",
        name: "Swahili Beef Mishkaki (3 Skewers)",
        category: "Beef",
        description: "Succulent charcoal-grilled beef skewers marinated in garlic, ginger, and lime.",
        price: 6000,
        image: fastfoodImg,
        popular: true,
        isDemo: true,
      },
      {
        id: "gf-ndizi-nyama",
        name: "Ndizi Nyama (Plantains & Beef)",
        category: "Beef",
        description: "Traditional cooked green plantains simmered with tender beef chunks in rich coconut-tomato broth.",
        price: 8000,
        image: heroBiryani,
        badge: "Local Classic",
        isDemo: true,
      },
      {
        id: "gf-roast-beef-chips",
        name: "Beef Roast na Chips",
        category: "Beef",
        description: "Pan-roasted seasoned beef in rich onion gravy served alongside golden chips.",
        price: 7500,
        image: fastfoodImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "fish-seafood",
    name: "🐟 Fish & Seafood",
    icon: "Fish",
    items: [
      {
        id: "gf-samaki-kupaka",
        name: "Samaki wa Kupaka (Coconut Fish)",
        category: "Fish & Seafood",
        description: "Grilled fresh kingfish coated in rich, spiced coconut sauce, served with coconut rice or ugali.",
        price: 13000,
        image: heroBiryani,
        badge: "House Specialty",
        isDemo: true,
      },
      {
        id: "gf-samaki-kukaanga",
        name: "Fried Whole Tilapia / Changgu",
        category: "Fish & Seafood",
        description: "Crispy spiced whole fish served with kachumbari salad, lime wedges, and homemade chilli.",
        price: 12000,
        image: heroBiryani,
        isDemo: true,
      },
      {
        id: "gf-prawns-masala",
        name: "Swahili Coastal Prawns Masala",
        category: "Fish & Seafood",
        description: "Succulent Indian Ocean prawns sautéed in garlic, crushed coriander, and coconut curry.",
        price: 15000,
        image: heroBiryani,
        isDemo: true,
      },
    ],
  },
  {
    id: "ugali",
    name: "🥣 Ugali Specialties",
    icon: "Soup",
    items: [
      {
        id: "gf-ugali-samaki",
        name: "Ugali na Samaki wa Nazi / Kukaanga",
        category: "Ugali Specialties",
        description: "Steaming hot white ugali served with fresh fish in coconut curry and mchicha (spinach).",
        price: 11000,
        image: heroBiryani,
        isDemo: true,
      },
      {
        id: "gf-ugali-kuku-kienyeji",
        name: "Ugali na Kuku wa Kienyeji",
        category: "Ugali Specialties",
        description: "Freshly prepared ugali with local village chicken in rich aromatic broth.",
        price: 9500,
        image: heroBiryani,
        isDemo: true,
      },
      {
        id: "gf-ugali-dagaa-mchicha",
        name: "Ugali na Dagaa wa Kigoma & Mchicha",
        category: "Ugali Specialties",
        description: "Crispy fried Lake Tanganyika sardines cooked in rich tomato gravy with seasoned greens.",
        price: 7000,
        image: heroBiryani,
        isDemo: true,
      },
    ],
  },
  {
    id: "vegetarian",
    name: "🥗 Vegetarian & Sides",
    icon: "Salad",
    items: [
      {
        id: "gf-maharage-nazi",
        name: "Maharage ya Nazi (Coconut Beans)",
        category: "Vegetarian",
        description: "Slow-simmered red kidney beans in fresh coconut milk, onions, and mild spices.",
        price: 3500,
        image: pilauImg,
        isDemo: true,
      },
      {
        id: "gf-mchicha-nazi",
        name: "Mchicha wa Nazi (Swahili Greens)",
        category: "Vegetarian",
        description: "Tender sautéed spinach with ground peanuts or coconut cream and garlic.",
        price: 3000,
        image: heroBiryani,
        isDemo: true,
      },
      {
        id: "gf-side-chips",
        name: "Plate of Golden Chips",
        category: "Sides",
        description: "Freshly cut, double-fried crispy potato chips.",
        price: 3000,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "gf-side-chapati",
        name: "Layered Swahili Chapati (2 pcs)",
        category: "Sides",
        description: "Flaky, soft, golden hand-rolled Swahili flatbread.",
        price: 2000,
        image: fastfoodImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "drinks",
    name: "🥤 Fresh Juices & Drinks",
    icon: "Coffee",
    items: [
      {
        id: "gf-juice-passion",
        name: "Fresh Tropical Passion Juice",
        category: "Drinks",
        description: "Freshly pressed tangy passion fruit juice, naturally chilled.",
        price: 2500,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "gf-juice-mango",
        name: "Fresh Sweet Mango Juice",
        category: "Drinks",
        description: "Thick, chilled natural mango juice made from ripe coastal mangoes.",
        price: 2500,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "gf-juice-tamarind",
        name: "Ukwaju (Tamarind) Chilled Cooler",
        category: "Drinks",
        description: "Traditional refreshing Swahili spiced tamarind juice with a hint of ginger and mint.",
        price: 2500,
        image: drinksImg,
        badge: "Traditional",
        isDemo: true,
      },
      {
        id: "gf-soda-cold",
        name: "Assorted Cold Soda (350ml)",
        category: "Drinks",
        description: "Coca-Cola, Fanta Orange, Sprite, Stoney Tangawizi.",
        price: 1500,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "gf-mineral-water",
        name: "Mineral Water (500ml)",
        category: "Drinks",
        description: "Chilled pure bottled drinking water.",
        price: 1000,
        image: drinksImg,
        isDemo: true,
      },
    ],
  },
];

export const getAllMenuItems = (): MenuItem[] => {
  const map = new Map<string, MenuItem>();
  MENU_CATEGORIES.forEach((cat) => {
    cat.items.forEach((item) => {
      if (!map.has(item.id)) {
        map.set(item.id, item);
      }
    });
  });
  return Array.from(map.values());
};
