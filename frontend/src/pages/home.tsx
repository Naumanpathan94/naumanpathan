import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { CertificationsCarousel } from "@/components/portfolio/CertificationsCarousel";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen dark bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <CertificationsCarousel />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nauman Pathan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/nauman-pathan-60259825b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href="mailto:naumanpathan78@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
