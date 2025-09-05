import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, Github, Printer } from "lucide-react";

export default function ContactSection() {
  const fadeInRef = useScrollAnimation();

  const handlePrintResume = () => {
    window.print();
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/naumanpathan94', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Naumanpathan94', '_blank');
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20 z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div ref={fadeInRef} className="fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            Get In Touch
          </h2>
          
          <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl text-center">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, and collaborations in AI, machine learning, and full-stack development. 
              Feel free to reach out if you'd like to connect!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <a 
                href="mailto:naumanpathan78@gmail.com" 
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                data-testid="contact-email"
              >
                <Mail className="w-6 h-6 text-accent" />
                <span>naumanpathan78@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/naumanpathan94" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                data-testid="contact-linkedin"
              >
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
              <button 
                onClick={handlePrintResume}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:glow-effect flex items-center justify-center"
                data-testid="button-print-resume"
              >
                <Printer className="w-5 h-5 mr-2" />
                Print Resume (Ctrl+P)
              </button>
              <button 
                onClick={handleGitHubClick}
                className="glass-card px-6 py-3 rounded-lg font-semibold hover:glow-effect transition-all duration-300 hover:scale-105 flex items-center justify-center"
                data-testid="button-visit-github"
              >
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub (Ctrl+G)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
