import { describe, it, expect } from "vitest";
import { business, getWhatsAppUrl } from "@/config/business";
import { MENU_CATEGORIES, PLATTER_SPECIALS, getAllMenuItems } from "@/data/wonderland-menu";

describe("Wonderland Bar & Grill Business Identity & Config", () => {
  it("has correct Wonderland Bar & Grill business details", () => {
    expect(business.name).toBe("Wonderland Bar & Grill");
    expect(business.cuisine).toBe("Bar & Grill");
    expect(business.location.street).toBe("1113 Kahama Road");
    expect(business.location.city).toBe("Dar es Salaam");
    expect(business.contact.whatsappNumber).toBe("255654120940");
    expect(business.contact.whatsappDisplay).toBe("+255 654 120 940");
    expect(business.ordering.whatsappBaseUrl).toBe("https://wa.me/255654120940");
  });

  it("generates correct WhatsApp URLs", () => {
    expect(getWhatsAppUrl()).toBe("https://wa.me/255654120940");
    const testMsg = "Hello Wonderland Bar & Grill!";
    expect(getWhatsAppUrl(testMsg)).toBe("https://wa.me/255654120940?text=Hello%20Wonderland%20Bar%20%26%20Grill!");
  });
});

describe("Wonderland Bar & Grill Menu Data Integrity", () => {
  it("contains all essential Bar & Grill categories", () => {
    const categoryIds = MENU_CATEGORIES.map((c) => c.id);
    expect(categoryIds).toContain("popular");
    expect(categoryIds).toContain("grill-bbq");
    expect(categoryIds).toContain("burgers-bites");
    expect(categoryIds).toContain("seafood");
    expect(categoryIds).toContain("cocktails");
    expect(categoryIds).toContain("beers-drinks");
    expect(categoryIds).toContain("platters");
    expect(categoryIds).toContain("sides");
  });

  it("ensures every dish has valid price, id, and demo flag", () => {
    const allItems = getAllMenuItems();
    expect(allItems.length).toBeGreaterThan(15);

    allItems.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.name).toBeTruthy();
      expect(item.price).toBeGreaterThan(0);
      expect(item.isDemo).toBe(true);
      expect(item.category).toBeTruthy();
    });
  });

  it("contains platter specials for group feasts", () => {
    expect(PLATTER_SPECIALS.length).toBeGreaterThanOrEqual(3);
    PLATTER_SPECIALS.forEach((platter) => {
      expect(platter.id).toBeTruthy();
      expect(platter.name.includes("Platter") || platter.name.includes("Feast") || platter.name.includes("Tray")).toBe(true);
      expect(platter.price).toBeGreaterThan(10000);
      expect(platter.serves).toBeTruthy();
    });
  });
});
