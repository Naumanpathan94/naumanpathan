import { Mail, Linkedin, Github, ArrowRight, Globe, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const contactLinks = [
    { name: "Email", value: "naumanpathan78@gmail.com", icon: Mail, href: "mailto:naumanpathan78@gmail.com" },
    { name: "LinkedIn", value: "LinkedIn Profile", icon: Linkedin, href: "https://www.linkedin.com/in/naumanpathan94/" },
    { name: "GitHub", value: "GitHub Profile", icon: Github, href: "https://github.com/Naumanpathan94" },
    { name: "Portfolio", value: "naumanpathan.me", icon: Globe, href: "https://naumanpathan.me" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-white/5 bg-gradient-to-b from-black/40 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                Let's Collaborate
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl">
                Open for collaboration on exciting projects, internships, and full-time opportunities.
              </p>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl w-fit">
              <MapPin size={16} className="text-primary animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">Mumbai, India</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-colors"></div>
                  
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-mono text-primary mb-1 uppercase tracking-widest">{link.name}</p>
                      <p className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">{link.value}</p>
                    </div>
                    <ArrowRight size={20} className="ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
