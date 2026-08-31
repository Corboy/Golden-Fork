import { describe, it, expect } from "vitest";
import { business, getWhatsAppUrl } from "@/config/business";
import { MENU_CATEGORIES, PLATTER_SPECIALS, getAllMenuItems } from "@/data/golden-fork-menu";

describe("Golden Fork Business Identity & Config", () => {
  it("has correct Golden Fork business details", () => {
    expect(business.name).toBe("Golden Fork");
    expect(business.cuisine).toBe("Swahili Cuisine");
    expect(business.location.street).toBe("4 Kitambaa St");
    expect(business.location.neighborhood).toBe("Mikocheni");
    expect(business.location.city).toBe("Dar es Salaam");
    expect(business.contact.whatsappNumber).toBe("255654120940");
    expect(business.contact.whatsappDisplay).toBe("+255 654 120 940");
    expect(business.ordering.whatsappBaseUrl).toBe("https://wa.me/255654120940");
  });

  it("generates correct WhatsApp URLs", () => {
    expect(getWhatsAppUrl()).toBe("https://wa.me/255654120940");
    const testMsg = "Hello Golden Fork!";
    expect(getWhatsAppUrl(testMsg)).toBe("https://wa.me/255654120940?text=Hello%20Golden%20Fork!");
  });
});

describe("Golden Fork Menu Data Integrity", () => {
  it("contains all essential Swahili cuisine categories", () => {
    const categoryIds = MENU_CATEGORIES.map((c) => c.id);
    expect(categoryIds).toContain("popular");
    expect(categoryIds).toContain("rice-dishes");
    expect(categoryIds).toContain("chicken");
    expect(categoryIds).toContain("beef");
    expect(categoryIds).toContain("fish-seafood");
    expect(categoryIds).toContain("ugali");
    expect(categoryIds).toContain("vegetarian");
    expect(categoryIds).toContain("drinks");
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

  it("contains platter specials for office and group orders", () => {
    expect(PLATTER_SPECIALS.length).toBeGreaterThanOrEqual(3);
    PLATTER_SPECIALS.forEach((platter) => {
      expect(platter.id).toBeTruthy();
      expect(platter.name.includes("Platter") || platter.name.includes("Tray")).toBe(true);
      expect(platter.price).toBeGreaterThan(10000);
      expect(platter.serves).toBeTruthy();
    });
  });
});
