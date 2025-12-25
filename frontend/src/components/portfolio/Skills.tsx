import { 
  Code2, Database, Globe, Brain, GitBranch, Zap
} from "lucide-react";

const skillsByCategory = [
  {
    category: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript/TypeScript", "Java", "C"]
  },
  {
    category: "AI & Data Science",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Sci-kit Learn", "XLM-RoBERTa"]
  },
  {
    category: "Web & Cloud",
    icon: Globe,
    skills: ["React", "Flask", "Node.js", "Docker"]
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "Tools & DevOps",
    icon: GitBranch,
    skills: ["Git", "REST APIs", "System Design", "Streamlit"]
  },
  {
    category: "Specialized",
    icon: Zap,
    skills: ["NLP", "Computer Vision", "GCP", "NLTK"]
  }
];

const allSkills = [
  "Python", "React", "Flask", "Node.js", "JavaScript", "TypeScript",
  "TensorFlow", "PyTorch", "Sci-kit Learn", "XLM-RoBERTa",
  "PostgreSQL", "MongoDB", "MySQL", "Firebase",
  "Docker", "REST APIs", "System Design", "NLP", "Computer Vision",
  "GCP", "Streamlit", "NLTK", "TextBlob"
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">Technical Skills</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Proficiency in AI/ML, full-stack development, and cloud technologies. Focused on building scalable, intelligent systems.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {skillsByCategory.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.category} className="bg-card border border-border/50 rounded-lg p-5 md:p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-primary/10 rounded-md text-primary flex-shrink-0">
                      <IconComponent size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-sm md:text-base">{category.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Skills Grid */}
        <div className="border-t border-border/30 pt-12 md:pt-14">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-center">Complete Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {allSkills.map((skill, index) => (
              <div
                key={skill}
                className="flex items-center justify-center p-3 md:p-4 bg-card border border-border/60 rounded-lg hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <span className="font-medium text-xs md:text-sm text-center group-hover:text-primary transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
