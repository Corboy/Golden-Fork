import heroBiryani from "@/assets/hero-biryani.jpg";
import kisiniaImg from "@/assets/kisinia-large.jpg";
import pilauImg from "@/assets/pilau.jpg";
import fastfoodImg from "@/assets/fastfood.jpg";
import drinksImg from "@/assets/drinks.jpg";
import { useFadeIn } from "@/hooks/use-fade-in";

const images = [
  { src: heroBiryani, alt: "Zebra Biryani" },
  { src: kisiniaImg, alt: "Kisinia Tray" },
  { src: pilauImg, alt: "Pilau" },
  { src: fastfoodImg, alt: "Chips & Chicken" },
  { src: drinksImg, alt: "Fresh Juices" },
];

const GallerySection = () => {
  const fadeRef = useFadeIn();

  return (
    <section id="gallery" className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={fadeRef} className="container mx-auto px-4 fade-section">
        <div className="text-center mb-14">
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-primary font-semibold">
            📸 The Vibe
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-5">
            Food <span className="gradient-gold-text">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className={`img-zoom rounded-xl overflow-hidden card-hover opacity-0 animate-fade-in ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover ${i === 0 ? "aspect-square" : "aspect-square"}`}
                loading="lazy"
                width={600}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
