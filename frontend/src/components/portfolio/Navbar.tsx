import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-700 ease-in-out rounded-full border ${
        isScrolled
          ? "bg-black/60 backdrop-blur-2xl border-white/10 py-2 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] scale-100"
          : "bg-transparent border-transparent py-5 scale-[1.02]"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link href="/">
          <a className="group relative flex items-center">
            <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border border-white/10 transition-all duration-500 hover:scale-110 hover:border-primary/60">
              <img 
                src="/logo.png" 
                alt="Nauman Pathan" 
                className="h-full w-full object-cover"
              />
            </div>
          </a>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 p-1 bg-white/5 rounded-full border border-white/5 shadow-inner">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-6 py-2 text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-all duration-300 relative group/link rounded-full hover:bg-white/10"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover/link:scale-100 transition-transform duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-primary transition-all active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 mt-4 mx-2 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-2xl ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="p-10 flex flex-col gap-8 items-center text-center">
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-4xl font-black text-white/30 hover:text-primary transition-all uppercase tracking-tighter"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </button>
          ))}
          <Button 
            size="lg" 
            className="w-full h-16 rounded-full text-xl font-black uppercase tracking-widest bg-primary text-black mt-4"
            onClick={() => scrollToSection("#contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </header>
  );
}
