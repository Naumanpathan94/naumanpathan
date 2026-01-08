import { ArrowRight, GraduationCap, Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "./TypingAnimation";

export function Hero() {
  const typingTexts = [
    "Data Analyst Intern @TCS",
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl opacity-20"></div>

      <style>{`
        .avatar-glow-effect {
          position: absolute;
          inset: -4px;
          background: conic-gradient(from 0deg, hsl(var(--primary)), transparent, hsl(var(--primary)), transparent, hsl(var(--primary)));
          border-radius: 20px;
          opacity: 0.2;
          filter: blur(12px);
          z-index: -1;
          animation: spin 12s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-card {
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
        }

        .avatar-frame {
          position: absolute;
          inset: -2px;
          padding: 2px;
          background: linear-gradient(135deg, hsl(var(--primary)/30%), transparent, hsl(var(--primary)/20%));
          border-radius: 18px;
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-clip: content-box, border-box;
          mask-clip: content-box, border-box;
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Enhanced Avatar Section */}
          <div className="mb-14 md:mb-16 flex justify-center">
            <div className="relative w-28 h-28 md:w-32 md:h-32 group">
              <div className="avatar-glow-effect transition-all duration-700 group-hover:opacity-40 group-hover:scale-105"></div>
              <div className="avatar-frame"></div>
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent rounded-2xl -z-10"></div>
              
              {/* Avatar Image */}
              <img 
                src="/avatar_final.jpg" 
                alt="Nauman Pathan" 
                className="relative z-10 w-full h-full rounded-2xl border border-white/10 shadow-xl object-cover object-top hover:grayscale-0 transition-all duration-500 scale-[0.98] group-hover:scale-100 opacity-90 group-hover:opacity-100" 
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
              Nauman Pathan
            </h1>
            
            <p className="text-2xl md:text-4xl text-foreground font-bold h-10 md:h-14">
              <TypingAnimation 
                texts={typingTexts}
                speed={80}
                className="font-bold tracking-tight"
              />
            </p>
          </div>

          {/* Subtitle & Bio */}
          <div className="max-w-2xl mx-auto mb-12 md:mb-16 text-center space-y-8">
            <p className="text-sm md:text-base text-primary font-mono bg-primary/10 py-1.5 px-6 rounded-full inline-block border border-primary/20">
              B.Tech Computer Engineering | Minor in Data Science | 2026
            </p>
            
            <p className="text-lg md:text-2xl text-foreground/90 leading-relaxed font-light">
              Pursuing engineering at <span className="text-primary font-semibold">DYPU-RAIT</span>. 
              Architecting intelligent systems and scalable digital experiences through code and data.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16 md:mb-24">
            <Button 
              size="lg" 
              className="gap-2 h-14 md:h-16 px-10 md:px-12 text-lg font-semibold rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-primary/30 transition-all active:scale-95 shadow-none"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight size={20} />
            </Button>
          </div>

          {/* Education & Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="hero-card rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500 group/card">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/15 rounded-xl group-hover/card:scale-110 transition-transform">
                  <GraduationCap size={28} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-2xl">Education</h3>
              </div>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  <p className="text-xl text-foreground font-bold">B.Tech in Computer Engineering</p>
                  <p className="text-xs text-primary font-mono uppercase tracking-widest mt-1 mb-2">Minor: Data Science</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ramrao Adik Institute of Technology, D. Y. Patil Deemed to be University
                  </p>
                  <p className="text-xs text-primary font-mono font-bold mt-2">2022 - 2026</p>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30">
                  <p className="text-lg text-foreground font-semibold">12th Grade</p>
                  <p className="text-sm text-muted-foreground mb-1">New Bombay City School</p>
                  <p className="text-xs text-primary font-mono font-bold">May 2020 - July 2022</p>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30">
                  <p className="text-lg text-foreground font-semibold">10th Grade</p>
                  <p className="text-sm text-muted-foreground mb-1">Ryan International School</p>
                  <p className="text-xs text-primary font-mono font-bold">Apr 2012 - Apr 2020</p>
                </div>
              </div>
            </div>

            <div className="hero-card rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500 group/card">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/15 rounded-xl group-hover/card:scale-110 transition-transform">
                  <Briefcase size={28} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-2xl">Experience</h3>
              </div>

              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  <p className="text-xl text-foreground font-bold">Data Analyst Intern</p>
                  <p className="text-sm text-muted-foreground mb-1">Tata Consultancy Services (TCS)</p>
                  <p className="text-xs text-primary font-mono font-bold mb-4 whitespace-nowrap">Jan 2026 - Present</p>
                  <ul className="text-sm text-muted-foreground space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">▹</span>
                      Working in TCS Marketing Unit, focusing on digital analytics and campaign insights.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">▹</span>
                      Leveraging Microsoft Power BI and Data Analysis for data-driven storytelling.
                    </li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-white/10">
                  <p className="text-xl text-foreground font-bold">Web Applications Developer Intern</p>
                  <p className="text-sm text-muted-foreground mb-1">Campus Credentials</p>
                  <p className="text-xs text-primary font-mono font-bold mb-4 whitespace-nowrap">Aug 2025 - Sep 2025</p>
                  <ul className="text-sm text-muted-foreground space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">▹</span>
                      Worked on AI Resume Analysis Tool implementing Authentication, Database and Ollama AI.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">▹</span>
                      Delivered a corporate landing page.
                    </li>
                  </ul>
                  
                  <a 
                    href="/completion_letter_1766911464216.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 mt-6 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold rounded-full transition-all border border-primary/20 group/link"
                  >
                    <Download size={16} className="group-hover/link:translate-y-1 transition-transform" />
                    Completion Letter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
