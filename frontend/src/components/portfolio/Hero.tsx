import { ArrowRight, Download, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
const handleDownloadResume = () => {
    window.print();
  };

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[200px] md:h-[310px] w-[200px] md:w-[310px] rounded-full bg-primary/5 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-4 md:mb-6">
            Hi, I'm Nauman Pathan — Computer Engineering | DYPU-RAIT 2026
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-10 leading-relaxed">
            B.Tech in Computer Engineering with a Minor in Data Science. Building intelligent systems, AI-driven applications, and scalable web solutions.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-10 md:mb-14">
            <Button size="lg" className="gap-2 h-11 md:h-12 px-5 md:px-6 text-sm md:text-base w-full sm:w-auto" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects <ArrowRight size={18} />
            </Button>
            <Button onClick={handleDownloadResume} size="lg" variant="outline" className="gap-2 h-11 md:h-12 px-5 md:px-6 text-sm md:text-base w-full sm:w-auto">
              Download Resume <Download size={18} />
            </Button>
          </div>

          {/* Education & Experience Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div className="bg-card/50 border border-border/50 rounded-lg p-5 md:p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Code2 size={20} className="text-primary shrink-0" strokeWidth={1.5} />
                <h3 className="font-semibold text-base md:text-lg">Education</h3>
              </div>
              <div className="space-y-1 text-sm">
                <p className="text-muted-foreground">B.Tech in Computer Engineering</p>
                <p className="text-xs md:text-sm text-muted-foreground">(Minor: Data Science)</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">Ramrao Adik Institute of Technology</p>
                <p className="text-xs md:text-sm text-muted-foreground">D.Y. Patil Deemed University</p>
                <p className="text-xs md:text-sm text-muted-foreground">Sep 2022 - Present</p>
              </div>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg p-5 md:p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Zap size={20} className="text-primary flex-shrink-0" strokeWidth={1.5} />
                <h3 className="font-semibold text-base md:text-lg">Experience</h3>
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-medium text-sm md:text-base">Web Applications Developer Intern</p>
                <p className="text-xs md:text-sm text-muted-foreground">Campus Credentials, Mumbai</p>
                <p className="text-xs md:text-sm text-muted-foreground">August 2025 - September 2025</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">• Worked on AI Resume Analysis Tool implementing Authentication , Database and Ollama AI.
• Delivered a responsive corporate landing page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
