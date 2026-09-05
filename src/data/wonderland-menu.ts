import fastfoodImg from "@/assets/fastfood.jpg";
import drinksImg from "@/assets/drinks.jpg";
import platterImg from "@/assets/swahili-platter.jpg";
import heroImg from "@/assets/hero-biryani.jpg";
import pilauImg from "@/assets/pilau.jpg";

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
    id: "platter-ribs-wings-duo",
    name: "Wonderland Duo Platter (2–3 Persons)",
    description: "Smoked honey-glazed BBQ pork ribs, 8 crispy flame-grilled wings, loaded seasoned fries, kachumbari, and homemade BBQ dip.",
    serves: "2–3 People",
    price: 35000,
    badge: "🔥 Best Value",
    image: platterImg,
    isDemo: true,
  },
  {
    id: "platter-wonderland-mega",
    name: "Wonderland Mega Grill Feast (4–6 Persons)",
    description: "The ultimate carnival feast: tender beef ribs, T-Bone steak slices, grilled chicken tikka, pork sausages, crispy fries, fried plantains, and dips.",
    serves: "4–6 People",
    price: 65000,
    badge: "👑 Signature Feast",
    image: platterImg,
    isDemo: true,
  },
  {
    id: "platter-game-night",
    name: "Carnivore Game Night Tray (3–5 Persons)",
    description: "Charcoal nyama choma, spicy BBQ drumsticks, loaded cheesy fries, grilled sausages, and chilled garden salad for sharing.",
    serves: "3–5 People",
    price: 48000,
    badge: "🍻 Bar Favorite",
    image: platterImg,
    isDemo: true,
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "popular",
    name: "🔥 Popular",
    icon: "🔥",
    description: "Wonderland's most ordered sizzlers, ribs & cocktails",
    items: [
      {
        id: "wl-bbq-ribs",
        name: "Wonderland Glazed BBQ Ribs",
        category: "popular",
        description: "Slow-smoked tender pork ribs smothered in our signature bourbon BBQ glaze, served with crispy french fries.",
        price: 22000,
        badge: "Chef Specialty",
        popular: true,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-tbone-steak",
        name: "Sizzling T-Bone Steak (400g)",
        category: "popular",
        description: "Juicy prime cut charcoal-grilled steak served sizzling on a cast-iron skillet with black pepper sauce and mashed potatoes.",
        price: 26000,
        badge: "Top Seller",
        popular: true,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-smash-burger",
        name: "Wonderland Double Smash Burger",
        category: "popular",
        description: "Two 100% beef smash patties, melted cheddar, caramelized onions, crisp pickles, and secret house sauce on a toasted brioche bun.",
        price: 16000,
        badge: "Must Try",
        popular: true,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-flame-wings",
        name: "Flame-Grilled BBQ Wings (8 Pcs)",
        category: "popular",
        description: "Crispy charcoal-finished chicken wings tossed in smoky honey BBQ or spicy buffalo sauce, served with ranch dip.",
        price: 15000,
        popular: true,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-sunset-cocktail",
        name: "Wonderland Sunset Cocktail",
        category: "popular",
        description: "Signature tropical rum blend layered with fresh passion juice, grenadine, orange liqueur, and flamed citrus zest.",
        price: 14000,
        badge: "Signature Drink",
        popular: true,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "wl-tilapia-whole",
        name: "Crispy Whole Lake Tilapia",
        category: "popular",
        description: "Freshly caught lake fish seasoned with coastal garlic herbs, deep-fried crispy and served with spiced ugali or fries and kachumbari.",
        price: 20000,
        popular: true,
        image: pilauImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "grill-bbq",
    name: "🥩 Grill & BBQ",
    icon: "🥩",
    description: "Charcoal-grilled steaks, smoked meats & flame skewers",
    items: [
      {
        id: "wl-grill-ribs-full",
        name: "Full Rack Smoked BBQ Ribs",
        category: "grill-bbq",
        description: "Generous full rack fall-off-the-bone pork ribs basted with sticky honey glaze, served with coleslaw and french fries.",
        price: 32000,
        badge: "Generous Portion",
        popular: true,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-grill-nyama-choma",
        name: "Tender Goat Nyama Choma (1/2 Kg)",
        category: "grill-bbq",
        description: "Authentic charcoal-roasted goat meat cut to juicy bite-sized pieces with fresh kachumbari and hot pilipili.",
        price: 18000,
        popular: true,
        image: pilauImg,
        isDemo: true,
      },
      {
        id: "wl-grill-lamb-chops",
        name: "Charcoal Lamb Chops (3 Pcs)",
        category: "grill-bbq",
        description: "Marinated with fresh rosemary, garlic, and sea salt, flame-grilled to medium perfection with minted gravy.",
        price: 28000,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-grill-chicken-half",
        name: "Flame-Grilled BBQ Half Chicken",
        category: "grill-bbq",
        description: "Herb-marinated tender chicken roasted over hot coals with sweet smoky BBQ basting and roast potatoes.",
        price: 16000,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-grill-beef-mishkaki",
        name: "Spiced Beef Mishkaki Skewers (4 Pcs)",
        category: "grill-bbq",
        description: "Traditional tender beef skewers marinated in Swahili ginger, garlic, and lime juice, flame-grilled over open coals.",
        price: 12000,
        image: pilauImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "burgers-bites",
    name: "🍔 Burgers & Bites",
    icon: "🍔",
    description: "Gourmet smash burgers, loaded fries & crispy finger foods",
    items: [
      {
        id: "wl-bites-smash-double",
        name: "Wonderland Double Smash Burger",
        category: "burgers-bites",
        description: "Two prime smashed beef patties, double cheddar cheese, caramelized onions, house pickles, and seasoned fries.",
        price: 16000,
        badge: "Crowd Favorite",
        popular: true,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-bites-crispy-chicken-burger",
        name: "Crispy Buttermilk Chicken Burger",
        category: "burgers-bites",
        description: "Golden fried chicken breast, spicy sriracha mayo, crunchy lettuce, and sliced tomatoes on a brioche bun.",
        price: 15000,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-bites-loaded-fries",
        name: "Loaded Cheesy BBQ Fries",
        category: "burgers-bites",
        description: "Crispy french fries drenched in melted cheddar cheese sauce, pulled BBQ beef, jalapeños, and fresh spring onions.",
        price: 12000,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-bites-bbq-sliders",
        name: "Mini BBQ Sliders Trio (3 Pcs)",
        category: "burgers-bites",
        description: "Three mini gourmet burgers: one beef smash, one pulled pork, and one crispy chicken slider.",
        price: 15000,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-bites-calamari",
        name: "Golden Crispy Calamari Rings",
        category: "burgers-bites",
        description: "Tender sea calamari rings lightly breaded, fried crisp, served with tangy tartar sauce and lemon wedges.",
        price: 14000,
        image: fastfoodImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "seafood",
    name: "🐟 Seafood & Fish",
    icon: "🐟",
    description: "Fresh coastal catches, prawns & grilled fish",
    items: [
      {
        id: "wl-sea-tilapia-fried",
        name: "Crispy Whole Tilapia with Sides",
        category: "seafood",
        description: "Crispy seasoned whole tilapia served with spicy kachumbari, coconut chilli dip, and french fries or ugali.",
        price: 20000,
        popular: true,
        image: pilauImg,
        isDemo: true,
      },
      {
        id: "wl-sea-garlic-prawns",
        name: "Sizzling Garlic Butter Prawns",
        category: "seafood",
        description: "Jumbo ocean prawns sautéed in rich garlic butter, fresh parsley, and white wine reduction with toasted herb bread.",
        price: 28000,
        badge: "Chef Special",
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-sea-samaki-kupaka",
        name: "Grilled Samaki wa Kupaka",
        category: "seafood",
        description: "Charcoal-grilled fish steak simmered in aromatic thick coconut sauce with turmeric and lime.",
        price: 22000,
        image: pilauImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "cocktails",
    name: "🍸 Cocktails",
    icon: "🍸",
    description: "Craft cocktails, tropical blends & party mixers",
    items: [
      {
        id: "wl-cocktail-sunset",
        name: "Wonderland Sunset Cocktail",
        category: "cocktails",
        description: "Tropical rum, passion fruit purée, grenadine, orange liqueur, and flamed citrus zest over crushed ice.",
        price: 14000,
        badge: "Signature",
        popular: true,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "wl-cocktail-mojito",
        name: "Fresh Passion Mint Mojito",
        category: "cocktails",
        description: "White rum, muddled fresh garden mint, zesty lime wedges, passion fruit pulp, and sparkling soda.",
        price: 13000,
        popular: true,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "wl-cocktail-long-island",
        name: "Wonderland Long Island Iced Tea",
        category: "cocktails",
        description: "Vodka, gin, rum, tequila, triple sec, fresh sour mix, topped with a splash of cola.",
        price: 16000,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "wl-cocktail-margarita",
        name: "Classic Lime Margarita (On Rocks)",
        category: "cocktails",
        description: "Premium tequila, triple sec, freshly squeezed lime juice with a salted glass rim.",
        price: 14000,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "wl-cocktail-daiquiri",
        name: "Frozen Strawberry Daiquiri",
        category: "cocktails",
        description: "Blended ice, white rum, sweet strawberries, and a touch of lime juice for hot tropical nights.",
        price: 13000,
        image: drinksImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "beers-drinks",
    name: "🍻 Beers & Cold Drinks",
    icon: "🍻",
    description: "Chilled beers, ciders, fresh juices & soft drinks",
    items: [
      {
        id: "wl-beer-serengeti",
        name: "Serengeti Premium Lite (Chilled)",
        category: "beers-drinks",
        description: "Ice-cold bottle of Tanzania's crisp light lager.",
        price: 4500,
        popular: true,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "wl-beer-kilimanjaro",
        name: "Kilimanjaro Premium Lager",
        category: "beers-drinks",
        description: "The classic taste of Tanzania, served ice-cold.",
        price: 4500,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "wl-beer-heineken",
        name: "Heineken Premium Beer",
        category: "beers-drinks",
        description: "Chilled imported Dutch lager bottle (330ml).",
        price: 6000,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "wl-beer-savanna",
        name: "Savanna Dry Premium Cider",
        category: "beers-drinks",
        description: "Crisp dry cider made from crushed apples, served with a fresh lemon wedge.",
        price: 7000,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "wl-drink-fresh-passion",
        name: "Fresh Tropical Passion Juice",
        category: "beers-drinks",
        description: "100% natural freshly blended passion fruit juice, chilled.",
        price: 4000,
        image: drinksImg,
        isDemo: true,
      },
      {
        id: "wl-drink-soda",
        name: "Chilled Soda (Coca-Cola, Sprite, Fanta)",
        category: "beers-drinks",
        description: "Ice-cold 350ml glass bottle with ice and lemon slice.",
        price: 2500,
        image: drinksImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "platters",
    name: "🍱 Feast Platters",
    icon: "🍱",
    description: "Generous group trays for parties, office lunch & gatherings",
    items: [
      {
        id: "wl-tray-ribs-wings",
        name: "Wonderland Duo Platter (2–3 Persons)",
        category: "platters",
        description: "Smoked BBQ ribs, 8 crispy wings, french fries, kachumbari, and homemade dipping sauces.",
        price: 35000,
        badge: "🔥 Best Value",
        popular: true,
        image: platterImg,
        isDemo: true,
      },
      {
        id: "wl-tray-mega-feast",
        name: "Wonderland Mega Grill Feast (4–6 Persons)",
        category: "platters",
        description: "Tender beef ribs, grilled T-Bone steak slices, chicken tikka, sausages, fries, fried plantains, and dips.",
        price: 65000,
        badge: "👑 Signature Feast",
        popular: true,
        image: platterImg,
        isDemo: true,
      },
      {
        id: "wl-tray-game-night",
        name: "Carnivore Game Night Tray (3–5 Persons)",
        category: "platters",
        description: "Charcoal nyama choma, spicy BBQ drumsticks, loaded cheesy fries, grilled sausages, and chilled salad.",
        price: 48000,
        badge: "👥 Sharing Favorite",
        popular: true,
        image: platterImg,
        isDemo: true,
      },
    ],
  },
  {
    id: "sides",
    name: "🍟 Sides",
    icon: "🍟",
    description: "Crispy fries, mashed potatoes & fresh accompaniments",
    items: [
      {
        id: "wl-side-french-fries",
        name: "Crispy Seasoned French Fries",
        category: "sides",
        description: "Golden, crispy potato fries tossed in mild paprika seasoning.",
        price: 4000,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-side-plantains",
        name: "Ndizi Kaanga (Fried Sweet Plantains)",
        category: "sides",
        description: "Caramelized golden fried plantain slices.",
        price: 4000,
        image: pilauImg,
        isDemo: true,
      },
      {
        id: "wl-side-mash",
        name: "Garlic Butter Mashed Potatoes",
        category: "sides",
        description: "Creamy, buttery mashed potatoes with roasted garlic and chives.",
        price: 5000,
        image: fastfoodImg,
        isDemo: true,
      },
      {
        id: "wl-side-kachumbari",
        name: "Fresh Tanzanian Kachumbari",
        category: "sides",
        description: "Crisp diced tomatoes, red onions, cucumber, lime juice, and fresh coriander.",
        price: 2500,
        image: pilauImg,
        isDemo: true,
      },
    ],
  },
];

export const getAllMenuItems = (): MenuItem[] => {
  const map = new Map<string, MenuItem>();
  MENU_CATEGORIES.forEach((cat) => {
    cat.items.forEach((item) => {
      map.set(item.id, item);
    });
  });
  return Array.from(map.values());
};

export const getPopularItems = (): MenuItem[] => {
  return getAllMenuItems().filter((i) => i.popular);
};
