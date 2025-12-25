import { Mail, Linkedin, Github, MessageSquare, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
          <div>
            <div className="inline-block p-2 md:p-3 rounded-2xl bg-primary/5 text-primary mb-4 md:mb-6">
              <MessageSquare size={28} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">Let's work together</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              I'm open to opportunities in AI development, full-stack engineering, and innovative projects. 
              Feel free to reach out for collaborations or discussions.
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:naumanpathan78@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail size={18} strokeWidth={1.5} className="shrink-0" />
                <span className="text-sm md:text-base break-all">naumanpathan78@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin size={18} strokeWidth={1.5} className="shrink-0" />
                <span className="text-sm md:text-base">LinkedIn</span>
              </a>
            </div>

            <div className="flex gap-3 mt-6 md:mt-8">
              <Button variant="outline" size="icon" className="h-10 w-10 shrink-0" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github size={18} />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10 shrink-0" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-card p-5 md:p-8 rounded-lg md:rounded-2xl border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                  <Lightbulb size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-base md:text-lg">Looking for collaboration</h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">Whether it's collaboration on an exciting project, a freelance opportunity, or just having a conversation about technology, I'd love to hear from you.</p>
            </div>

            <div className="bg-card p-5 md:p-8 rounded-lg md:rounded-2xl border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                  <Users size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-base md:text-lg">Available for</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span> <span>AI/ML Development Projects</span></li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span> <span>Full-Stack Web Applications</span></li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span> <span>Data Science & Analytics</span></li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span> <span>Freelance Opportunities</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
