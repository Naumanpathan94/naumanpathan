import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const galleryImages = [
  {
    src: "https://i.imgur.com/gsC8nZj.jpeg",
    alt: "Evening in Mumbai",
    title: "Evening in Mumbai",
  },
  {
    src: "https://i.imgur.com/Lp4jITx.jpeg",
    alt: "New kicks",
    title: "New kicks",
  },
  {
    src: "https://i.imgur.com/qvpcnp9.jpeg",
    alt: "Guddu",
    title: "Guddu",
  },
  {
    src: "https://i.imgur.com/Sqx9The.jpeg",
    alt: "Dog Kernel Crashed",
    title: "Dog Kernel Crashed",
  },
];

interface GalleryProps {
  onImageClick: (src: string, title: string) => void;
}

export default function GallerySection() {
  const fadeInRef = useScrollAnimation();

  const handleImageClick = (src: string, title: string) => {
    // Dispatch custom event for lightbox
    window.dispatchEvent(new CustomEvent('openLightbox', { 
      detail: { src, title } 
    }));
  };

  return (
    <section id="gallery" className="relative py-20 z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={fadeInRef} className="fade-in">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
            Images Gallery
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg italic">
            "You can't depend on your eyes when your imagination is out of focus."
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="glass-card rounded-lg overflow-hidden hover:glow-effect transition-all duration-300 hover:scale-105 cursor-pointer" 
                onClick={() => handleImageClick(image.src, image.title)}
                data-testid={`gallery-image-${index}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
