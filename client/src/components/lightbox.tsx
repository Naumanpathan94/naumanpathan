import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

export default function Lightbox() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    title: "",
  });

  useEffect(() => {
    const handleOpenLightbox = (e: CustomEvent) => {
      setLightbox({
        isOpen: true,
        src: e.detail.src,
        title: e.detail.title,
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('openLightbox', handleOpenLightbox as EventListener);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('openLightbox', handleOpenLightbox as EventListener);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  if (!lightbox.isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      data-testid="lightbox-overlay"
    >
      <div className="relative max-w-4xl max-h-full">
        <button 
          onClick={closeLightbox}
          className="absolute top-4 right-4 text-white text-2xl hover:text-accent transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
          data-testid="lightbox-close-button"
        >
          <X className="w-6 h-6" />
        </button>
        <img 
          src={lightbox.src} 
          alt={lightbox.title} 
          className="max-w-full max-h-full object-contain rounded-lg"
          data-testid="lightbox-image"
        />
        <p className="text-white text-center mt-4 text-lg" data-testid="lightbox-caption">
          {lightbox.title}
        </p>
      </div>
    </div>
  );
}
