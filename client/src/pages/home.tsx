import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Lightbox from "@/components/lightbox";
import FloatingParticles from "@/components/floating-particles";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey) {
        switch(e.key) {
          case 'p':
            e.preventDefault();
            window.print();
            break;
          case 'l':
            e.preventDefault();
            window.open('https://www.linkedin.com/in/naumanpathan94', '_blank');
            break;
          case 'g':
            e.preventDefault();
            window.open('https://github.com/Naumanpathan94', '_blank');
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Tech Background with Overlay */}
      <div className="fixed inset-0 tech-bg opacity-20 z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-background via-transparent to-background z-0"></div>
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-20">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <Footer />
      <Lightbox />
    </div>
  );
}
