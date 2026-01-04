import { useEffect, useRef, useState } from "react";
import { Award, ChevronLeft, ChevronRight, Download } from "lucide-react";

const certificates = [
  {
    id: 1,
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    pdfUrl: "/certificates/cyber-intro.pdf",
  },
  {
    id: 2,
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    pdfUrl: "/certificates/ccna-srwe.pdf",
  },
  {
    id: 3,
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    pdfUrl: "/certificates/ccna-itn.pdf",
  },
  {
    id: 4,
    name: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    pdfUrl: "/certificates/python-ess-2.pdf",
  },
  {
    id: 5,
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    pdfUrl: "/certificates/ccna-ensa.pdf",
  },
  {
    id: 6,
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    pdfUrl: "/certificates/python-ess-1.pdf",
  },
  {
    id: 7,
    name: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Jul 2024",
    pdfUrl: "/certificates/aws-found.pdf",
  },
  {
    id: 8,
    name: "AWS Academy Graduate - Cloud Architecting",
    issuer: "Amazon Web Services (AWS)",
    date: "Aug 2025",
    pdfUrl: "/certificates/aws-arch.pdf",
  },
  {
    id: 9,
    name: "Power BI for Beginners",
    issuer: "Simplilearn",
    date: "Apr 2025",
    pdfUrl: "/certificates/powerbi-beginners.pdf",
  },
];

export function CertificationsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const itemsPerView = 3;
  const totalItems = certificates.length;
  const extendedCerts = [
    ...certificates.slice(-itemsPerView),
    ...certificates,
    ...certificates.slice(0, itemsPerView),
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalItems]);

  useEffect(() => {
    if (containerRef.current) {
      const scrollPosition = (activeIndex + itemsPerView) * 380;
      containerRef.current.scrollLeft = scrollPosition;
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handleViewCertificate = (pdfUrl: string) => {
    if (pdfUrl && pdfUrl !== "#") {
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <section className="py-20 md:py-32 border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">Certifications</h2>
          </div>
          <p className="text-lg md:text-2xl text-muted-foreground mb-16 md:mb-20 font-light leading-relaxed">
            Professional certifications and credentials earned through rigorous training.
          </p>

          <div className="relative group overflow-hidden md:overflow-visible">
            {/* Carousel */}
            <div
              ref={containerRef}
              className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory no-scrollbar"
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {extendedCerts.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[280px] md:w-[350px] snap-start"
                >
                  <div className="group/card relative h-full p-6 md:p-8 border border-white/10 rounded-3xl bg-white/5 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] transition-all duration-500 overflow-hidden backdrop-blur-xl">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div className="mb-4 inline-flex w-12 h-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover/card:bg-primary/20 transition-colors">
                        <Award size={24} strokeWidth={1.5} />
                      </div>

                      {/* Certificate Name */}
                      <h3 className="text-lg font-semibold mb-3 text-foreground group-hover/card:text-primary transition-colors line-clamp-3">
                        {cert.name}
                      </h3>

                      {/* Issuer */}
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {cert.issuer}
                      </p>

                      {/* Date */}
                      <p className="text-xs text-muted-foreground/75 mb-4 border-t border-border/30 pt-3">
                        Completed: {cert.date}
                      </p>

                      {/* View Certificate Button */}
                      <button
                        onClick={() => handleViewCertificate(cert.pdfUrl)}
                        className="mt-auto inline-flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium rounded transition-all duration-300 group/btn"
                      >
                        <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-16 p-2 rounded-full border border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-16 p-2 rounded-full border border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
              aria-label="Next certificate"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlay(false);
                  setActiveIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-primary w-8"
                    : "bg-border/50 w-2 hover:bg-border"
                }`}
                aria-label={`Go to certificate ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
