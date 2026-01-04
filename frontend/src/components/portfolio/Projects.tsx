import { ExternalLink, Github, TrendingUp, Laptop, ShieldCheck, Database, BarChart3, ChevronRight, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Intelligent Bank Customer Churn Prediction",
    description: "ANN-TabPFN ensemble model achieving 91.3% accuracy on 10K customer dataset. Implemented weighted ensemble with preprocessing and 5-fold cross-validation.",
    tags: ["Python", "PyTorch", "TabPFN", "Streamlit", "Scikit-learn"],
    icon: TrendingUp,
    github: "https://github.com/Naumanpathan94/Bank-Customer-Churn-Prediction",
  },
  {
    title: "WATERMENON: University Portal",
    description: "Web-based admission portal streamlining university admissions with responsive design and interactive UI for applications and fee management.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    icon: Laptop,
    github: "https://github.com/Naumanpathan94/Admission-Portal",
  },
  {
    title: "RecipeSense: ML Recommendation Engine",
    description: "ML-powered recipe recommendation using TF-IDF vectorization and cosine similarity on 7K+ recipes. Full-stack React-Flask application.",
    tags: ["Python", "React", "Flask", "Tailwind", "Scikit-learn"],
    icon: Database,
    github: "https://github.com/Naumanpathan94/Whats-for-dinner",
  },
  {
    title: "Multilingual Toxicity Classifier",
    description: "XLM-RoBERTa based toxicity detection system. 93% accuracy processing 360K+ comments across 6 categories. Deployed on GPU server.",
    tags: ["Python", "XLM-RoBERTa", "PyTorch", "Streamlit", "NLP"],
    icon: ShieldCheck,
    github: "https://github.com/Naumanpathan94/Toxic-Comment-Classification-using-Deep-Learning",
  },
  {
    title: "BuyWise: AI Analytics Platform",
    description: "Full-stack platform processing 6,950+ Amazon reviews with multilingual sentiment analysis and AI recommendations.",
    tags: ["Python", "Flask", "NLTK", "TextBlob", "Analytics"],
    icon: BarChart3,
    github: "https://github.com/Naumanpathan94/Buywise-Product-Analysis",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 border-t border-white/5 bg-gradient-to-b from-background to-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Recent Projects
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground mb-16 md:mb-20 font-light leading-relaxed">
            Selection of projects showcasing AI, machine learning, and full-stack development expertise.
          </p>

          <div className="space-y-8 md:space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/15 transition-all duration-500 group-hover:scale-150"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-8 md:gap-12">
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-lg shadow-primary/5">
                      <IconComponent size={32} strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex gap-3 flex-shrink-0">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-10 w-10 rounded-full border border-white/5 hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer" title={project.title + " GitHub Repository"}>
                              <Github size={20} />
                            </a>
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="px-4 py-1.5 rounded-full border-white/10 bg-white/5 text-primary text-xs font-mono font-medium">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 md:mt-24 text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 h-14 px-10 rounded-full border-white/10 hover:bg-white/5 text-lg font-semibold transition-all hover:scale-105 active:scale-95"
              asChild
            >
              <a href="https://github.com/Naumanpathan94" target="_blank" rel="noopener noreferrer">
                <Github size={20} /> View All on GitHub <ChevronRight size={20} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
