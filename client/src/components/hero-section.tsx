import { Download, Rocket, Mail, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const fadeInRef = useScrollAnimation();
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    // Restart typing animation periodically
    const interval = setInterval(() => {
      setTypingComplete(false);
      setTimeout(() => setTypingComplete(true), 3000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    window.print();
  };

  const handleViewProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center z-20 pt-20">
      {/* Hero Background */}
      <div className="absolute inset-0 hero-bg opacity-30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/40 z-0"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div ref={fadeInRef} className="fade-in">
          {/* Profile Image */}
          <img 
            src="https://github.com/Naumanpathan94.png" 
            alt="Nauman Pathan" 
            className="w-32 h-32 rounded-full mx-auto mb-2 border-4 border-primary glow-effect"
            data-testid="profile-image"
          />
          
          {/* Name */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Nauman Pathan
          </h1>
          
          {/* Typing Animation */}
          <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 h-8">
            <span className={`${typingComplete ? '' : 'typing-animation'} inline-block`}>
              Web Applications Developer @ Campus Credentials
            </span>
          </div>
          
          {/* Location */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto flex items-center justify-center flex-wrap">
            <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Nerul, Navi Mumbai, India
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
            <a 
              href="mailto:naumanpathan78@gmail.com" 
              className="glass-card p-3 sm:p-4 rounded-lg hover:glow-effect transition-all duration-300 hover:scale-110"
              data-testid="social-link-email"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
            <a 
              href="https://www.linkedin.com/in/naumanpathan94" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 sm:p-4 rounded-lg hover:glow-effect transition-all duration-300 hover:scale-110"
              data-testid="social-link-linkedin"
            >
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/Naumanpathan94" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 sm:p-4 rounded-lg hover:glow-effect transition-all duration-300 hover:scale-110"
              data-testid="social-link-github"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
            <button 
              onClick={handleDownloadResume}
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:glow-effect flex items-center justify-center text-sm sm:text-base"
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Download Resume
            </button>
            <button 
              onClick={handleViewProjects}
              className="glass-card px-6 sm:px-8 py-3 rounded-lg font-semibold hover:glow-effect transition-all duration-300 hover:scale-105 flex items-center justify-center text-sm sm:text-base"
              data-testid="button-view-projects"
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
